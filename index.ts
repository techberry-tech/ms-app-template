import { Hono } from "hono";
import { serve } from "bun";
import { mkdir } from "node:fs/promises";
import { logger } from "hono/logger";

import path from "node:path";

const app = new Hono();

app.use(logger());

app.get("/health", async (c) => {
  return c.json({ status: "ok" });
});

app.post("/echo", async (c) => {
  const body = await c.req.json();
  return c.json(body);
});

app.post("/api/upload", async (c) => {
  const contentType = c.req.header("content-type") || "";
  if (!contentType.includes("multipart/form-data")) {
    return c.json({ error: "Content-Type must be multipart/form-data" }, 400);
  }

  const form = await c.req.formData();
  const file = form.get("file");

  if (!(file instanceof File)) {
    return c.json({ error: 'field "file" is required' }, 400);
  }

  // เตรียมโฟลเดอร์ปลายทาง
  const uploadDir = "./uploads";
  await mkdir(uploadDir, { recursive: true });

  // ตั้งชื่อไฟล์แบบปลอดภัย + กันชนกันชื่อซ้ำ
  const safeName = file.name.replace(/[^\w.\-]/g, "_");
  const filename = `${Date.now()}_${safeName}`;
  const filepath = path.join(uploadDir, filename);

  // Bun เขียนไฟล์ได้จาก Blob/File โดยตรง
  await Bun.write(filepath, file);

  return c.json({
    ok: true,
    filename,
    size: file.size,
    type: file.type,
    path: filepath,
  });
});

// รันเซิร์ฟเวอร์
const server = serve({
  fetch: app.fetch,
  port: process.env.PORT || 9087,
});
console.log(
  `🚀 ${process.env.APP_NAME} Listening on http://${server.hostname}:${server.port}`
);

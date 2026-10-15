// แจ้งเตือน "ถึงคิวแล้ว" (ใช้ตอนหน้าเว็บเปิดอยู่/อยู่เบื้องหลัง) — แตะแจ้งเตือนแล้วกลับมาที่หน้าร้าน
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(cs => {
    for (const c of cs) { if ("focus" in c) return c.focus(); }
    return self.clients.openWindow("./");
  }));
});

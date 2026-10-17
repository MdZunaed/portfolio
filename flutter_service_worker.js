// The old Flutter portfolio lived at this same address and registered a service
// worker that caches the old app. Returning visitors would keep seeing it.
// This replacement removes the old worker and its caches, then reloads the page.
// It can be deleted once the old site has been gone for a few months.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k.startsWith("flutter-")).map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })(),
  );
});

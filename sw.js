// Service worker mínimo: permite instalar la app en Android.
// No guarda nada en caché para que las actualizaciones lleguen siempre.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});

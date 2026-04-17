// TEMPORARY DISABLED SERVICE WORKER
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

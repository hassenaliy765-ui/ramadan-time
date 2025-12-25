self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('Service Worker Installed');
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // አፑ ያለ ኢንተርኔት እንዲሰራ እዚህ ጋር ካሽ (Cache) መጨመር ይቻላል
});

// Service Worker
const CACHE_NAME = 'dev-interview-kit';
const urlsToCache = ['/', '/index.html', '/manifest.json', '/src/main.tsx', '/src/App.tsx', '/src/index.css'];

// Helper to check if URL should be cached
const shouldCache = (url) => {
  const urlObj = new URL(url);
  return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        urlsToCache.map((url) => {
          return fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Failed to cache ${url}`);
              }
              return cache.put(url, response);
            })
            .catch((error) => {
              console.error(`Failed to cache ${url}:`, error);
            });
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (!shouldCache(event.request.url)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          try {
            const responseToCache = response.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => {
                if (shouldCache(event.request.url)) {
                  cache.put(event.request, responseToCache).catch((error) => {
                    console.error('Cache put error:', error);
                  });
                }
              })
              .catch((error) => {
                console.error('Cache open error:', error);
              });
          } catch (error) {
            console.error('Caching error:', error);
          }

          return response;
        })
        .catch((error) => {
          console.error('Fetch error:', error);
          // Return cached version if fetch fails
          return caches.match(event.request);
        });
    })
  );
});

// Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

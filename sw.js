const CACHE_NAME = 'dome-position-cache-v1.0.1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './daydata.js',
  './lyrics.js',
  './action_hints_data.js',
  './card_hints_data.js',
  './images/icon-192.png',
  './images/icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=Outfit:wght@400;500;600;700;800&display=swap'
];

// 安裝事件：快取核心靜態資源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[Service Worker] Pre-caching core assets');
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('[Service Worker] Pre-caching failed for some resources, but proceeding:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// 啟用事件：清理舊版快取
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 輔助函式：取得用來快取的 URL 鍵值（剝離同源資源的查詢參數）
function getCacheKey(requestUrl) {
  const url = new URL(requestUrl);
  // 對於同源的靜態資源，去除查詢字串以解決 ?v=Date.now() 快取失效問題
  if (url.origin === self.location.origin) {
    url.search = '';
  }
  return url.toString();
}

// 攔截請求：採用 Network-First 策略，離線時回退至 Cache 匹配
self.addEventListener('fetch', event => {
  const request = event.request;

  // 只處理 GET 請求
  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);

  // 排除後台 API 請求
  if (url.pathname.includes('/api/')) {
    return;
  }

  const cacheKey = getCacheKey(request.url);

  event.respondWith(
    fetch(request)
      .then(response => {
        // 如果請求成功且為正常狀態（包含跨域 opaque），更新快取
        if (response.status === 200 || (response.status === 0 && response.type === 'opaque')) {
          const responseCopy = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(cacheKey, responseCopy);
          });
        }
        return response;
      })
      .catch(() => {
        // 離線或網路連線失敗，從快取中讀取
        return caches.match(cacheKey).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // 如果是網頁導航請求且未命中快取，回退至主頁
          if (request.mode === 'navigate') {
            return caches.match('./index.html') || caches.match('./');
          }
        });
      })
  );
});

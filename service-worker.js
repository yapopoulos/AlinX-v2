var VERSION_CACHE = "alinx-v1";

var FICHIERS_A_METTRE_EN_CACHE = [
  "./",
  "./index.html",
  "./programmes.js",
  "./seances_niveau1.js",
  "./seances_niveau2.js",
  "./seances_niveau3.js",
  "./seances_niveau4.js",
  "./manifest.json"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(VERSION_CACHE).then(function(cache) {
      return cache.addAll(FICHIERS_A_METTRE_EN_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(nomsCache) {
      return Promise.all(
        nomsCache.map(function(nom) {
          if (nom !== VERSION_CACHE) {
            return caches.delete(nom);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  if (!event.request.url.startsWith("http")) {
    return;
  }
  event.respondWith(
    caches.match(event.request).then(function(reponseEnCache) {
      if (reponseEnCache) {
        return reponseEnCache;
      }
      return fetch(event.request).then(function(reponseReseau) {
        return caches.open(VERSION_CACHE).then(function(cache) {
          cache.put(event.request, reponseReseau.clone());
          return reponseReseau;
        });
      }).catch(function() {
        return caches.match("./index.html");
      });
    })
  );
});
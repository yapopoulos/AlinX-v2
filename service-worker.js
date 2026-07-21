var VERSION_CACHE = "alinx-v2";

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
      return Promise.all(
        FICHIERS_A_METTRE_EN_CACHE.map(function(url) {
          return fetch(url, { cache: "reload" }).then(function(reponse) {
            return cache.put(url, reponse);
          });
        })
      );
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

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).then(function(reponseReseau) {
        return caches.open(VERSION_CACHE).then(function(cache) {
          cache.put(event.request, reponseReseau.clone());
          return reponseReseau;
        });
      }).catch(function() {
        return caches.match(event.request).then(function(reponseEnCache) {
          return reponseEnCache || caches.match("./index.html");
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function(reponseEnCache) {
      var recuperationReseau = fetch(event.request).then(function(reponseReseau) {
        caches.open(VERSION_CACHE).then(function(cache) {
          cache.put(event.request, reponseReseau.clone());
        });
        return reponseReseau;
      }).catch(function() {
        return reponseEnCache;
      });
      return reponseEnCache || recuperationReseau;
    })
  );
});
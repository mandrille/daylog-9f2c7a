/* Network first, cache as a fallback — the page always loads, online or not. */
var CACHE = "daylog-v1";
var SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-512.png"];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(SHELL); })
      .catch(function () {})
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) {
        c.put(event.request, copy).catch(function () {});
      });
      return res;
    }).catch(function () {
      return caches.match(event.request).then(function (hit) {
        return hit || caches.match("./index.html");
      });
    })
  );
});

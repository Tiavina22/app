self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./public/css/index.css", "./src/images/backgroundloading.png"])
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )

    //console.log(`Intercepting fetch request for : ${e.request.url}`)
})
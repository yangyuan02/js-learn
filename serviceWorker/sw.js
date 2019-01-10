var cacheStorageKey = 'one';
var cacheList = [
    'index.html',
    'index.js'
];
self.addEventListener('install', function(e) {
    console.log('sw-install')
    self.skipWaiting();
});
self.addEventListener('activate', function(e) {
    console.log('sw-activate')
    caches.open(cacheStorageKey).then(function(cache) {
        cache.addAll(cacheList)
    });
    var cacheDeletePromises = caches.keys().then(cacheNames => {
        return Promise.all(cacheNames.map(name => {
            if (name !== cacheStorageKey) {
                console.log('caches.delete', caches.delete);
                send_message_to_all_clients({onUpdata: true})
            } else {
                return Promise.resolve();
            }
        }))
    });
    e.waitUntil(Promise.all([cacheDeletePromises]).then(() => {
        return self.clients.claim()
    }))
})
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            if (response != null) {
                console.log(`fetch:${e.request.url} from cache`);
                return response
            } else {
                console.log(`fetch:${e.request.url}`)
            }
        })
    )
})
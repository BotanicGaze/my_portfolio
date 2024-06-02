'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "4e8235f1965af0f90a35a807c1aad84d",
"/": "4e8235f1965af0f90a35a807c1aad84d",
"main.dart.js": "365590850e16a5178a7a8425bdc11f19",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"assets/AssetManifest.json": "7c1038b6c35affd6708a2824be852818",
"assets/NOTICES": "01059c48476fc059af67addc88f1a090",
"assets/FontManifest.json": "c63c78b3f55206413656d20889516d1a",
"assets/AssetManifest.bin.json": "632624870010cae85b981b1931865f42",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "2994d1f617fb76ac05f0c5ca10e0129c",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "7c5b222ec4914d002f31f160f978acc4",
"assets/fonts/MaterialIcons-Regular.otf": "260f93d68d7de482749aeaf066f2d9e9",
"assets/assets/images/loyalty_4.png": "e6101078dfe280ca6e9a072f1cf6bcee",
"assets/assets/images/sagar-full-pose.jpg": "489f9535cf92341f8eaa245b206e069c",
"assets/assets/images/loyalty_1.png": "e13f44877c86fa5e37a0518d1345b6d7",
"assets/assets/images/loyalty_2.png": "00c9f6612d8e6339cad14a34fc001f46",
"assets/assets/images/loyalty_3.png": "4a451b7c4bdafd9ca55a7c99823df6f0",
"assets/assets/images/alpha.png": "661784de637dd2291545053fecd6740f",
"assets/assets/images/avatar-krisztian.png": "20a33361ce12a23d14e00f8e57186d45",
"assets/assets/images/open-graph-sagar.png": "394843814fb7456575b9a3546324822d",
"assets/assets/images/avatar-eugen.png": "41242c71bc67a76c8221749bdb5430ea",
"assets/assets/images/open-graph-sagar-old.png": "4f62e6eef139d96a67c26e5529be4394",
"assets/assets/images/sagar-headshot.jpg": "d84d8b5e7588117ae94a0048eb1bc2bd",
"assets/assets/images/project-wingie.png": "eb541c5fa135ac388edbf72584da93df",
"assets/assets/images/oneuni.png": "f8b68568f027f2f1e7b7638b9d25161f",
"assets/assets/images/project-fiskil.png": "8048323f9a6a0ec4bb73c4097e0f2e01",
"assets/assets/images/project-pepehousing.png": "066b1b9bef9d0f411fe51f6ef47eb545",
"assets/assets/logos/logo-upwork.svg": "40132ad0968d73c94ff515e4dd8e7d55",
"assets/assets/logos/icon-flutter.svg": "faf8f499559f6b2f815f454a5794eae3",
"assets/assets/logos/icon-react.svg": "487ef5337f128ba61939ecaecdd610ce",
"assets/assets/logos/icon-swift.svg": "74ba2b9c367f7d68236f83aada87fb2e",
"assets/assets/logos/logo-greenapex-light.svg": "5680b93a1ff8b44349a8b433cbf7fc01",
"assets/assets/logos/icon-typescript.svg": "3819c8e6dbd6d27b0c9e7c2163639adf",
"assets/assets/logos/icon-nextjs.svg": "ce283579c2b7d80e8a5cc9d94956651b",
"assets/assets/logos/logo-dotnpixel.svg": "be42701b8315a40ddccb8dfaec698519",
"assets/assets/logos/logo-cnv.png": "eae587dd82a8944d7ea208d9ba11d9f6",
"assets/assets/logos/logo-shinhan.png": "4dab0022eb8a5e733c405e5c1eedde84",
"assets/assets/logos/icon-cypress.svg": "4a63d64136a9968233f538aed9f83251",
"assets/assets/logos/icon-express.svg": "014d290a63dd6780798b07203dc5037f",
"assets/assets/logos/icon-postgresql.svg": "1590846f2529c1c52e6a4507f368bcf5",
"assets/assets/logos/icon-sass.svg": "0f744def76335421971410a28bd12add",
"assets/assets/logos/icon-storybook.svg": "6127293c8fb11b11287f1c706dc8d3cb",
"assets/assets/logos/icon-nest.svg": "5c9a37cfffe2338b11cbb385cda6f5e6",
"assets/assets/logos/icon-express-light.svg": "5555e93b5274efd33ac76c243928cae9",
"assets/assets/logos/icon-javascript.svg": "a0224c4864669caa71bfe4dc0223f3d2",
"assets/assets/logos/icon-tailwindcss.svg": "d90502422420458229bba480e2a651e3",
"assets/assets/logos/logo-asc.png": "728ffff7773139272c93ab832c64f4d4",
"assets/assets/logos/icon-socket.svg": "fa0629b278c775a5bc3f3420b6a47d7d",
"assets/assets/logos/logo-greenapex.svg": "35fe30a7f12ab8c12d653a5d55fce207",
"assets/assets/logos/icon-mongodb.svg": "0ef2349f3b5bf6555097c0aa1c79e60e",
"assets/assets/logos/icon-dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/logos/icon-figma.svg": "9b2017d3523808ffccce8d7eaba8710d",
"assets/assets/logos/icon-nodejs.svg": "0a85d17abe898746f9eac5a9bbef938d",
"assets/assets/logos/icon-kotlin.svg": "554a29baa80695e0fc8326e51c6abd86",
"assets/assets/logos/logo-dotnpixel-light.svg": "11230fc62c371576ec9dff1eb14ce493",
"assets/assets/logos/icon-socket-light.svg": "f48049c2bb15cc8aff835fe3a2047607",
"assets/assets/logos/icon-git.svg": "d11a5b514758e266b3d10241c4dd78d9",
"assets/assets/logos/icon-cypress-light.svg": "627c5e08ccfb98e82ab3c49e8529f132",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

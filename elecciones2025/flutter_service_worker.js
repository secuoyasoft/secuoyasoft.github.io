'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6db092739a03171f4eb9f83815a393d4",
"assets/AssetManifest.bin.json": "bff13262977ba89b54d3a8d814844cda",
"assets/AssetManifest.json": "c1fcdfb60f057538229ddd448333b064",
"assets/assets/Checking%2520Phone.json": "15dfcd99d086ee90c2e69cf32c9121e0",
"assets/assets/Female%2520Character%2520Waving.json": "406c2c1b49807cdb0babbadb17112156",
"assets/assets/ico/ico.png": "a865480d47ddb0009c102d17f4453c08",
"assets/assets/img/1.jpg": "714fb628ccdc147329c41c42c98c8c0f",
"assets/assets/img/2.jpg": "cd1d652bad3a64f1ac053ac2a7d72999",
"assets/assets/img/3.jpg": "15115e36616e210cdca0578c9ac11815",
"assets/assets/img/4.jpg": "ed6e525930011ef77e71a8bc3d272636",
"assets/assets/img/5.jpg": "7e8c53b1426f27983d4ac91723040e0c",
"assets/assets/partidos/ADN.png": "895d687acf064e93b18a14418abc5346",
"assets/assets/partidos/AP.jpeg": "72bedb667935ebab17d7e8ec1bf0bb15",
"assets/assets/partidos/APBSUMATE.png": "b750b62dfc871f4280c9fa2049913f3b",
"assets/assets/partidos/FP.png": "b01a0cac98c4fe26aca4a553103c2291",
"assets/assets/partidos/LIBRE.jpeg": "20bb8a394d904312b48d4616496b6c73",
"assets/assets/partidos/MAS.png": "dc563d33f431b517fccf8b331984c6b4",
"assets/assets/partidos/MORENA.png": "a0e59f682be16cd4107611fa68b3b18c",
"assets/assets/partidos/NGP.png": "617b7e1f30e5c0618845c33e84405111",
"assets/assets/partidos/PDC.jpg": "0b9d0232a1f3b5b5a230297ff91f61a8",
"assets/assets/partidos/UNIDAD.jpeg": "9177b4036f1c25cecd1eefc59d5d07e6",
"assets/assets/postulantes/ADN_Antonio_Saravia.png": "2077ac1d162710f87710ecbc5bdc28bf",
"assets/assets/postulantes/Alianza-Popular_Andr%25C3%25B3nico_Rodr%25C3%25ADguez.jpg": "5fbb95b6ad23842a5d8a358b62ec9b32",
"assets/assets/postulantes/Alianza-Popular_Mariana_Prado.jpg": "73b4a30767a7528d5dbb0bf5b93ecb80",
"assets/assets/postulantes/APBSUMATE_Juan_Medrano.jpeg": "faa224cbd10f49c668334916bb0eed21",
"assets/assets/postulantes/APBSUMATE_Manfred_Reyes_Villa.jpg": "eff34e35921f3d88d1737b7963b0ac69",
"assets/assets/postulantes/FP_Jhonny_Fern%25C3%25A1ndez.jpg": "5354ea9ee363d094d2dbe9db86adb1a3",
"assets/assets/postulantes/Libre_Juan_Velasco.jpg": "5ec1b8d4602f08061fadbff1853ff4d6",
"assets/assets/postulantes/Libre_Tuto_Quiroga.png": "af3c3c9fc645d1fec75b7eaf1ab15267",
"assets/assets/postulantes/MAS_Eduardo_del_Castillo.png": "fd0c246b1007dbf2d1947f01d2d18fca",
"assets/assets/postulantes/MORENA_Eva_Copa.png": "fd4d4ba6b092e0e1227b2283c893fdb0",
"assets/assets/postulantes/MORENA_Jorge_Richter.jpg": "e04a7ce02833bdb4b469d159a1bc2320",
"assets/assets/postulantes/NGP_edgar_Uriona.png": "483d279250de84619cf85af6539ac09f",
"assets/assets/postulantes/pavel.png": "9cceea948531f7e3fd11a6217b717075",
"assets/assets/postulantes/PDC_Edmand_Lara.png": "637eed12e91b259d708f3156e662e817",
"assets/assets/postulantes/PDC_Rodrigo_Paz.png": "5d79a5d268c581729dcb97681230d9dd",
"assets/assets/postulantes/UNIDAD_Jose_Lupo.jpg": "69e332dd5506ddda486a65e6831e6036",
"assets/assets/postulantes/UNIDAD_Samuel_Doria.jpeg": "aeecf518544f9837aad812d606b2a4c9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1de34cfcb871338e63fa33cc65f7e680",
"assets/NOTICES": "81f7be44128f18ac7c2f25bbac96858a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "3aabb84346b6d0c8ef6380ac12c99f95",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "3aca7f76ec037c7f1efcbb28777ba01d",
"icons/Icon-192.png": "77e136810878b8aa3a1c0d1e3b279168",
"icons/Icon-512.png": "43be881f80f05b6841efad7dd3b93060",
"icons/Icon-maskable-192.png": "77e136810878b8aa3a1c0d1e3b279168",
"icons/Icon-maskable-512.png": "43be881f80f05b6841efad7dd3b93060",
"index.html": "50c56e97ecb3ae30929e2211dbf09249",
"/": "50c56e97ecb3ae30929e2211dbf09249",
"main.dart.js": "d64e6aebd3cad43c8d71e0d29363c9b1",
"manifest.json": "9e0b4b343c816d979bf9a4b40d3a3ac0",
"version.json": "43af06579bd3d7031bc7dd9677b442af"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

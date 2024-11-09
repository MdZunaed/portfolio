'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "47d51aee40be30f1c8c5d5dd7338e564",
"assets/AssetManifest.bin.json": "ed3a18b049ac41df31e3637fd3371421",
"assets/AssetManifest.json": "31f6fcec5c74f2282c2d903c27a6b94b",
"assets/assets/fonts/BreeSerif-Regular.ttf": "14aaff013398c35430cc935d1e4dcd99",
"assets/assets/fonts/Gotham-Bold.otf": "92ab8603f1cd43d0de15482236890449",
"assets/assets/fonts/Helvetica.ttf": "1b580d980532792578c54897ca387e2c",
"assets/assets/icons/call.webp": "eb737330daab90506d4972131b33e663",
"assets/assets/icons/email.webp": "08105120c8acab6c1270a5ded33d07f1",
"assets/assets/icons/fb.webp": "e59136e4428c732be3246c0825d74bd2",
"assets/assets/icons/fi.webp": "ee55a0941fa70694e33ffa32e9d5c2f0",
"assets/assets/icons/git.webp": "5eb04696d2c1b2f647bd8ad882d1ddf4",
"assets/assets/icons/ln.webp": "9fba6dc5ddb4b036ef7d5f16b839ae02",
"assets/assets/icons/up.webp": "9ae82a1c370d899d226c01dd3bc1081b",
"assets/assets/icons/wp.webp": "714a852a6061253075f935dbdf189c69",
"assets/assets/icons/yt.webp": "186c4457c3fba75c3eb236a584ac629a",
"assets/assets/images/BG-Mobile.webp": "db6b4c3c14465050d3ac2317db66f22d",
"assets/assets/images/BG-PC.webp": "8972d579e1679d5fee1bb5bb61287d04",
"assets/assets/images/calculator_ui.webp": "9e8919be8a96f5fd2172946ae11d014d",
"assets/assets/images/chatapp_ui.webp": "230072c9bda0739d2787efc9804a1b25",
"assets/assets/images/coding.webp": "ea08e01cec6a458b62db09bd2a2c0b45",
"assets/assets/images/ecom_ui.webp": "3fea887688ed4017783b5742acf5b7b4",
"assets/assets/images/education.webp": "bd477d879bb5a908c649b1ea4d374ccc",
"assets/assets/images/info.webp": "6038f58659f502a63cc54e798eb6a321",
"assets/assets/images/jobnect_ui.webp": "7e5efd02656e24894827ff1fcf62b291",
"assets/assets/images/movie_ui.webp": "d09b8f548450996b89e4ab5f0db5e483",
"assets/assets/images/musicplayer_ui.webp": "c276ead994b5cb6ca3c8797f29cbe898",
"assets/assets/images/parcelfly_ui.webp": "13083a142a7462cf638387894500b1a0",
"assets/assets/images/skill.webp": "75efcc228045e0ca275249bdfbc10138",
"assets/assets/images/taskman_ui.webp": "26dd70b554af6a109f82fa329a777f90",
"assets/assets/images/weather_ui.webp": "5cbbfd9a1103f3020bc051967165fe0c",
"assets/assets/images/znd.webp": "cc704775d4cadb7f35a7926b8305795d",
"assets/assets/images/zunaedCV.pdf": "dd2a922cca70834ed6ac4bbf64158148",
"assets/assets/lottie/jellyLottie.json": "d46e7804c8614761bb9c5fa8ed301e7b",
"assets/FontManifest.json": "446b3a5d11b4ce54d0a658618220f3df",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/loading.gif": "e3d09f6f88efa8a8159cd8e819bebfda",
"assets/NOTICES": "ed06359263721c8e2f01fad2824543ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "94c717c188157b25cf164d2828b27ada",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "704d7821ce91ffe437e7c290273747d2",
"icons/Icon-192.png": "1795bdab677d168dc0376af0c9a155cc",
"icons/Icon-512.png": "dbaeff8ccf643fbbc21723d683a7be37",
"icons/Icon-maskable-192.png": "1795bdab677d168dc0376af0c9a155cc",
"icons/Icon-maskable-512.png": "dbaeff8ccf643fbbc21723d683a7be37",
"index.html": "0ac7d461871c55002b1b781c03bfda2d",
"/": "0ac7d461871c55002b1b781c03bfda2d",
"main.dart.js": "d7f6794bd81b18c33280f9cdaec9c7ce",
"main.dart.mjs": "7be0949e35041bb0f65a8cbba8ceb423",
"main.dart.wasm": "a3f6462971da2e966379b51bd4758b80",
"manifest.json": "1d5a97b4c7c0e584cd667aee64a80c80",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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

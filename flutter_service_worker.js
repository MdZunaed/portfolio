'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "c1f4efe2858ae2bea1cc9248e77b9f08",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "10287af4d0a3645b12d829d71c2819e8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6f85e24658c379c9c592be98cc2c55fc",
".git/logs/refs/heads/master": "6f85e24658c379c9c592be98cc2c55fc",
".git/logs/refs/remotes/origin/master": "f3461a66eeeb5cc09701a78c5a5e758d",
".git/objects/01/44d0b44c7153b60a061c16c73b84e914580dc2": "2fa28fa88c3bf925230e0c2dbb3922d8",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/09/9fec23c7fab93dcdd3e57a70c3e35261109359": "5c82cccd31ffd9334386f0bd84dc9264",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/4a536531563ec2657b4c723a51cc58fbb60e0e": "5dd3ebebdccd64e9d6e95f4341167f6f",
".git/objects/15/1792bdf892f00abaf5d97e4042e14c84cb24fa": "e29e42e1afa674c3effb31c5154be4c6",
".git/objects/19/fd1e9b39075d902ca68ca0b2eea925ea73a38b": "3b48d164959635052e3dcd3aabef33ca",
".git/objects/1a/0efd1fea1cc6a794916ac890a7e8b676ef4868": "3d8bfff0679c4fcde7f08d74ca76bea2",
".git/objects/1f/0fd5eeb3ce38ae8546b59b3ce42e22b9af03d7": "6d04ec4ff4529141c8333b2c751a7450",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/7e9b73f855fc0992f339f84d600b6d7b7f93ad": "34165712b12c1e36f049ca8d925a2732",
".git/objects/23/22f8748c67c2088418589e9ed5d97e44a2e851": "f9e526ab0ffef3a2a0d72133228eba47",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/36/576a404c22d5245f0bb37d87ced00e5630d3c2": "b730b08779f8a10ed0f52b30243cbc15",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/9a1f7ec291d349d62b0658e519f72e95ab656e": "67b7a57e02712ad371664007d5210295",
".git/objects/3e/2ed7c4dffd518eedbdb7e4b2636de9fcaeb194": "5eb24306926fd20fa0e9b567b46644e8",
".git/objects/3e/5dd2fed62cce1abb15676725954dacf24584f6": "7388d9f7dd1fe81bcc186f881db78015",
".git/objects/3e/a826bbeec24256f2c2b33014d6087d42e12ffa": "ed58667d0630cd0221c1701f0d441e42",
".git/objects/40/3f83af4f5694d409c7d72b62e1b486aea5b59a": "464bbfd8ef7cd7cabafe92ecf625adcf",
".git/objects/42/74f58d87052cc412a69a66c80af87b330a40ca": "aaa34231500b9fe8110bbc7294754ddb",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4c/809ade165c56d330d1afa0453bd43487b89e43": "6e05b028c5a4d8ce534bb32c756ad87c",
".git/objects/4f/82b864c7a05e7501b632da065796a50dca749b": "7c09d9b4e4aee66169fe70837d9ade23",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/e15819fdee8f4bee5ee5914df9ce2e11865800": "3a9fb4803ed960b7d88b66337af7fec8",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/60/3b6d800eb1a4c0550b7e57519f968ad4a94518": "afd73edc8963487302a13cd0715a0996",
".git/objects/60/abfa7e48ed4e19129e85f2db0cc8ba37c4f9ae": "196785e91fdd585928a77e9bbfa7ceec",
".git/objects/65/9db3d79c1e71e80efcd4fb79e484b1b981c8d1": "8a2be8c3c9b86de1c29ab239eef9d088",
".git/objects/71/8f22d4af8b698bfe0623a1bd69a12dae649281": "4fe13b0fc590fb8b52e7659e9d574f56",
".git/objects/74/4a44994d017f9bf9df8257d005eb3f727ea372": "f38618a2062bb06363253e7e6005b106",
".git/objects/79/3149df428a8b78e3ad71dd7ad842e59c397341": "2415baa34ecdd1fad397baae40e0053d",
".git/objects/8b/c4b64b534ec2dc1947752ad53fa70f9c7666e2": "df8bc514c8a9f30f03206ecd4ee32ecb",
".git/objects/91/7b3bfc32064219b9dfe42a2515c961fb684b31": "84fbfd844228ec91b804474b2161fa0d",
".git/objects/91/a5252090ab144e7a7e50852200175a16f6095a": "eb052617121f5ae345ea8be1110ca6b5",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9c/35b30c070791018de13806ec07d69b7bd40a81": "fd4e4ddd853e8378a80b3e1dcd3849b9",
".git/objects/a5/0a4c2c284c36712456a49bc1d95b204be67b4c": "e9b3ce817b8b0e19bb5beb0197ee19b5",
".git/objects/a5/dc538a26fc7953a8a5d8e19cd330ac08c5afdc": "6a7d990fc2ac543f8ccb6c0fec10adf1",
".git/objects/a7/8813c57bd803a3cd88c02314781166280d3e53": "2284e09f56bbed37ebcdabe00773dc4f",
".git/objects/ad/16d5e217a3c22bb5b0e7988d861ac5ee8fa085": "15bbb06112da698ef1c6b3dc205dee9d",
".git/objects/ae/390c51d08a76437c5b471430d04c527d04e90b": "3977138e8320abc36862a6d75e4dda44",
".git/objects/af/32f288ec8828d0d647e418ae95489726befa42": "a1cc58db3a53e657ce8dc63a63a25a5c",
".git/objects/b1/b848243010b16e8cb82604f4bee4f3a295243f": "e9729b31969d5cded6765eb53263e727",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/c1fe37a25243c0a370d97363de835e8a1ff73e": "e790f91c94b15d89c159d2cb7f416deb",
".git/objects/c4/41db5a670e8a2e9b639e99fbf32e6e64af4587": "4dec0088739cfaf96a1f41a77aecf664",
".git/objects/c5/7d80475dedcd29a63b5cdd106e5d0e9849c3e9": "4fc13a5bcd32fedf5452e3381be8c3da",
".git/objects/d1/74139366c436d2362a13391a8d6d3ee4fa7605": "54fce3283fbbf0eb4554f4df09244ddd",
".git/objects/d3/b8c461e2ed5d37777a93da141eb8514d014594": "effc5d76a7d46d78615968bf18a3c2e2",
".git/objects/d6/00a5e25f6a8e1acc861ed0236b6a9f3ed33257": "b3c72fa5c2cc951f7abd29f943c9d22b",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dc/b3cefd66488f6fe88d81d39f281dd33d67e68a": "38b2d8669bef562cc99e90844e9dab8c",
".git/objects/df/4ac83b688cba11ae5811e3d5fa865fc7328ddb": "7919e3805d4cb503c05110d3b5248f54",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/d9f338efa29da53485836ffdee4a4f13eb750c": "9820adec80eb701ac29f26ae3fd01109",
".git/objects/e0/f010870664894cf43c5dcd3cf9add66a0d92c6": "339e7974f705af38e6ede431471e6ceb",
".git/objects/e2/d77e29ce83cda309b6354f4c3234968e843b6c": "6dc4a2740333ec32041a10a209a76c10",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ee/5b80a0cf524d76c20b7e83430ad7de2d881724": "2bc17831128788b8c61c768720c78483",
".git/objects/f0/967c825284553d505449ca274da0a5d1256896": "1eb4f3a6711253ab467d2bb265e0c15a",
".git/objects/f1/7bbfad7cbc5e9cb5eb36d4e55ec689611a3f13": "e43324670ab818b5642cebb6d10da4c4",
".git/objects/f9/6d4d0794f34739a75e653a312b587b9149c183": "8929662a1f61ce74bd83d219876baaf1",
".git/refs/heads/master": "7eb155bb362d7526cfe6738e2ddbf187",
".git/refs/remotes/origin/master": "7eb155bb362d7526cfe6738e2ddbf187",
"assets/AssetManifest.bin": "8711b156301ed46ef3716df476d09812",
"assets/AssetManifest.bin.json": "c322093697f4a939f1cb7c19b0043e4a",
"assets/AssetManifest.json": "9d87e69a122fca07f2daa475003b4988",
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
"assets/assets/images/chatapp_ui.webp": "dd5592503681fa56622d9fce8dad79b1",
"assets/assets/images/coding.webp": "ea08e01cec6a458b62db09bd2a2c0b45",
"assets/assets/images/ecom_ui.webp": "3fea887688ed4017783b5742acf5b7b4",
"assets/assets/images/education.webp": "bd477d879bb5a908c649b1ea4d374ccc",
"assets/assets/images/info.webp": "6038f58659f502a63cc54e798eb6a321",
"assets/assets/images/movie_ui.webp": "d09b8f548450996b89e4ab5f0db5e483",
"assets/assets/images/musicplayer_ui.webp": "c276ead994b5cb6ca3c8797f29cbe898",
"assets/assets/images/skill.webp": "75efcc228045e0ca275249bdfbc10138",
"assets/assets/images/taskman_ui.webp": "26dd70b554af6a109f82fa329a777f90",
"assets/assets/images/znd.webp": "cc704775d4cadb7f35a7926b8305795d",
"assets/assets/images/zunaedCV.pdf": "ff0425d46137cbb62062310395120d25",
"assets/assets/lottie/jellyLottie.json": "d46e7804c8614761bb9c5fa8ed301e7b",
"assets/FontManifest.json": "446b3a5d11b4ce54d0a658618220f3df",
"assets/fonts/MaterialIcons-Regular.otf": "67fea5a946a8d6e8b960944ce0f6a172",
"assets/loading.gif": "e3d09f6f88efa8a8159cd8e819bebfda",
"assets/NOTICES": "5ba0ee3c0e821f56702756050598a08d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "94c717c188157b25cf164d2828b27ada",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "1795bdab677d168dc0376af0c9a155cc",
"icons/Icon-512.png": "dbaeff8ccf643fbbc21723d683a7be37",
"icons/Icon-maskable-192.png": "1795bdab677d168dc0376af0c9a155cc",
"icons/Icon-maskable-512.png": "dbaeff8ccf643fbbc21723d683a7be37",
"index.html": "062ee730f9dd277d016e1f63249844c9",
"/": "062ee730f9dd277d016e1f63249844c9",
"main.dart.js": "8e952e32f7152e3da7d69dd4236a6b5f",
"manifest.json": "1d5a97b4c7c0e584cd667aee64a80c80",
"version.json": "9b818ca9511483c901bed1545384376c"};
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

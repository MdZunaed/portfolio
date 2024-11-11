'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bebb4e8d4d1ea807cb5e073790ba64c8",
".git/config": "4fe0a451cfa398ab75bf4bcd5329dc6c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "56a0e51f63c878b26d425e8bfa48defe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ef4d3534780b4fbbc42254b43024e47a",
".git/logs/refs/heads/main": "327c2855ab3be04c945b57c198124780",
".git/logs/refs/remotes/origin/main": "a407fd88936fdabf64cbec0b17ba1f04",
".git/objects/02/92d287b0a3aaabf9a0eece7cf14cf47def9275": "ca3701be21bc818d728b025954563cf7",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/11/4a536531563ec2657b4c723a51cc58fbb60e0e": "5dd3ebebdccd64e9d6e95f4341167f6f",
".git/objects/15/1792bdf892f00abaf5d97e4042e14c84cb24fa": "e29e42e1afa674c3effb31c5154be4c6",
".git/objects/16/57f050ab484fb72434ab8c4d2d740441cdeec3": "a0ceafd766b30b498abbaed1da374c36",
".git/objects/19/fd1e9b39075d902ca68ca0b2eea925ea73a38b": "3b48d164959635052e3dcd3aabef33ca",
".git/objects/1a/0efd1fea1cc6a794916ac890a7e8b676ef4868": "3d8bfff0679c4fcde7f08d74ca76bea2",
".git/objects/1f/0fd5eeb3ce38ae8546b59b3ce42e22b9af03d7": "6d04ec4ff4529141c8333b2c751a7450",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/7e9b73f855fc0992f339f84d600b6d7b7f93ad": "34165712b12c1e36f049ca8d925a2732",
".git/objects/23/22f8748c67c2088418589e9ed5d97e44a2e851": "f9e526ab0ffef3a2a0d72133228eba47",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/d69a163caa8901cfd9a2491ca9653e32678196": "4a319b71545e8924b776653cb27bcc6c",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/8af4e65e1ab1fd37073c18bf793f4ebe24e40e": "929a06198c4035e602f712f0431e6a64",
".git/objects/36/576a404c22d5245f0bb37d87ced00e5630d3c2": "b730b08779f8a10ed0f52b30243cbc15",
".git/objects/36/cf1ef0be7cacca306161fcaa3610cdcd83435e": "3381df33a4c0f41348a1aea11c9f2701",
".git/objects/39/33f8b700cc8225fd977d36c9e2f5f45a06e614": "f03e6473ab8e4af450b5dc667d415d16",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/9a1f7ec291d349d62b0658e519f72e95ab656e": "67b7a57e02712ad371664007d5210295",
".git/objects/3e/2ed7c4dffd518eedbdb7e4b2636de9fcaeb194": "5eb24306926fd20fa0e9b567b46644e8",
".git/objects/3e/5dd2fed62cce1abb15676725954dacf24584f6": "7388d9f7dd1fe81bcc186f881db78015",
".git/objects/3e/a826bbeec24256f2c2b33014d6087d42e12ffa": "ed58667d0630cd0221c1701f0d441e42",
".git/objects/3f/eb6cf9fa666665782302ef6293248c51917119": "b7959404b921d158156dd52cd4bb911b",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/74f58d87052cc412a69a66c80af87b330a40ca": "aaa34231500b9fe8110bbc7294754ddb",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/f5d093ad612af94be1ce1469a9cdd73aeadbdc": "74385c2f7d4062a8d8cfcd0b6f8d8d43",
".git/objects/4c/809ade165c56d330d1afa0453bd43487b89e43": "6e05b028c5a4d8ce534bb32c756ad87c",
".git/objects/4f/e15819fdee8f4bee5ee5914df9ce2e11865800": "3a9fb4803ed960b7d88b66337af7fec8",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/54/ed05bd223dd387ff2da48db5e33c6de09e7988": "ce81e9b69162124c9cd913526d76981d",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/60/3b6d800eb1a4c0550b7e57519f968ad4a94518": "afd73edc8963487302a13cd0715a0996",
".git/objects/65/9db3d79c1e71e80efcd4fb79e484b1b981c8d1": "8a2be8c3c9b86de1c29ab239eef9d088",
".git/objects/68/04e4a18a850721614bf87a21663833574d32a3": "d0a7c54d6cdc798731f7b8e4d632439d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/0356ab6d24636982e066181c650a45d038ba75": "1afe7d3559f35e99c3c819a4807e5c22",
".git/objects/71/8f22d4af8b698bfe0623a1bd69a12dae649281": "4fe13b0fc590fb8b52e7659e9d574f56",
".git/objects/74/48ae2e6af5cc92128897b52e99178c494cee66": "fae528b5366ae15c67f8a131d6205692",
".git/objects/74/4a44994d017f9bf9df8257d005eb3f727ea372": "f38618a2062bb06363253e7e6005b106",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/82/c1a0a1a65e836c74c6762ba2dacb7bc42a94d5": "72718733ddf76a035bf03419cc96ff4d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8b/c4b64b534ec2dc1947752ad53fa70f9c7666e2": "df8bc514c8a9f30f03206ecd4ee32ecb",
".git/objects/90/333e4188a4fb2e4e33e3af1697f68b2b008b27": "1361f791d33880409704860adcb47591",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/da7f5cdca5f5d8cc170e80fbe279150a4d2b7b": "e317a05108fd364ab0ebdbad16aee18b",
".git/objects/91/7b3bfc32064219b9dfe42a2515c961fb684b31": "84fbfd844228ec91b804474b2161fa0d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a5/0a4c2c284c36712456a49bc1d95b204be67b4c": "e9b3ce817b8b0e19bb5beb0197ee19b5",
".git/objects/a5/3860fe92e6dfb825ab3694daca2684a9b5a450": "02ba40c33a0e9ef295f74cb72d444726",
".git/objects/a5/dc538a26fc7953a8a5d8e19cd330ac08c5afdc": "6a7d990fc2ac543f8ccb6c0fec10adf1",
".git/objects/a6/9ac45ff125acaafd024ea1892f6af154daf61e": "a16d5d9ccce3646b1a7e6f0b2c004812",
".git/objects/a7/8813c57bd803a3cd88c02314781166280d3e53": "2284e09f56bbed37ebcdabe00773dc4f",
".git/objects/ad/16d5e217a3c22bb5b0e7988d861ac5ee8fa085": "15bbb06112da698ef1c6b3dc205dee9d",
".git/objects/af/32f288ec8828d0d647e418ae95489726befa42": "a1cc58db3a53e657ce8dc63a63a25a5c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b9/b90adf09aa4358fc296da1d91563f1989ef63f": "a26a82a77ae819fcfb88f01af5f60f23",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/99d19c3157e8e122dd6543901400810b77e22f": "249ff33d326453221604205a4194209b",
".git/objects/bb/b28e2030003382eaf727afb97e2083b9e058ec": "160ff49697fbfdf43a88ea940e5f66a9",
".git/objects/c9/747e1e5d80bd14fb913c5fcac704fb45e2c5cd": "2a2d93891143bce9338e75e18324550c",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/b8c461e2ed5d37777a93da141eb8514d014594": "effc5d76a7d46d78615968bf18a3c2e2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/1b337e877efbbccd6cb35d665c89b9f7e83162": "1de055359ee7a777391b9c31139540d6",
".git/objects/dc/b3cefd66488f6fe88d81d39f281dd33d67e68a": "38b2d8669bef562cc99e90844e9dab8c",
".git/objects/df/354690d970b5026a9e118f4adbf45543c5e426": "05b6dfbabb97d11857d65a70a54810d1",
".git/objects/df/4ac83b688cba11ae5811e3d5fa865fc7328ddb": "7919e3805d4cb503c05110d3b5248f54",
".git/objects/df/fd58ed7abf1e4e9e8ef7cde4b9affd5c45d85b": "c5b867e590ec3fbc8311a9a07a9c2b4b",
".git/objects/e0/f010870664894cf43c5dcd3cf9add66a0d92c6": "339e7974f705af38e6ede431471e6ceb",
".git/objects/e2/d77e29ce83cda309b6354f4c3234968e843b6c": "6dc4a2740333ec32041a10a209a76c10",
".git/objects/e6/5ebe4c9e21e8830418887285d243e551b6e7a2": "a669b221c33d41747495b68d13a50a55",
".git/objects/ee/5b80a0cf524d76c20b7e83430ad7de2d881724": "2bc17831128788b8c61c768720c78483",
".git/objects/f0/967c825284553d505449ca274da0a5d1256896": "1eb4f3a6711253ab467d2bb265e0c15a",
".git/objects/f1/7bbfad7cbc5e9cb5eb36d4e55ec689611a3f13": "e43324670ab818b5642cebb6d10da4c4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/6d4d0794f34739a75e653a312b587b9149c183": "8929662a1f61ce74bd83d219876baaf1",
".git/refs/heads/main": "e6a1abd9f6ad7f82f5efe09b1e23b015",
".git/refs/remotes/origin/main": "e6a1abd9f6ad7f82f5efe09b1e23b015",
"assets/AssetManifest.bin": "47d51aee40be30f1c8c5d5dd7338e564",
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
"flutter_bootstrap.js": "402646419e510c181cf41d105cf1003a",
"icons/Icon-192.png": "1795bdab677d168dc0376af0c9a155cc",
"icons/Icon-512.png": "dbaeff8ccf643fbbc21723d683a7be37",
"icons/Icon-maskable-192.png": "1795bdab677d168dc0376af0c9a155cc",
"icons/Icon-maskable-512.png": "dbaeff8ccf643fbbc21723d683a7be37",
"index.html": "17376658907d01a233ec4d7232c3cc78",
"/": "17376658907d01a233ec4d7232c3cc78",
"main.dart.js": "25c16f090293d54b17f36339cfcec264",
"main.dart.mjs": "7be0949e35041bb0f65a8cbba8ceb423",
"main.dart.wasm": "d3fa2457aee00a6151058fd20d9b6889",
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

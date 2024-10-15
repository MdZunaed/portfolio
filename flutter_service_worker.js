'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "34b585350a2532c25d399476d3516b0e",
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
".git/index": "34116c521987038fd4f7de5e99ecec25",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3b2813c731fb155d0cb556f98fb688fb",
".git/logs/refs/heads/master": "3b2813c731fb155d0cb556f98fb688fb",
".git/logs/refs/remotes/origin/master": "89a3ad3b5f045c59120e310e3bffc586",
".git/objects/01/44d0b44c7153b60a061c16c73b84e914580dc2": "2fa28fa88c3bf925230e0c2dbb3922d8",
".git/objects/01/64d358508556925ba92c88fe9a39a032c0dda8": "fa7635d636fc1432e3de23796afba2de",
".git/objects/02/92d287b0a3aaabf9a0eece7cf14cf47def9275": "ca3701be21bc818d728b025954563cf7",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/d8b9abf4f95a472a70dfdd775359f42ba1e2b2": "2bfbec48c5eb6ad825e882c3e02bea27",
".git/objects/09/9fec23c7fab93dcdd3e57a70c3e35261109359": "5c82cccd31ffd9334386f0bd84dc9264",
".git/objects/09/c2c17b445bf9dc7128f7167a1f32fce1a3521d": "33f6138b8aed3688ff18fdfd8d2f9296",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/4a536531563ec2657b4c723a51cc58fbb60e0e": "5dd3ebebdccd64e9d6e95f4341167f6f",
".git/objects/13/88815a8bdc22e7d486319dce83d6c8b704dd2b": "d76f1a599b80c71f036dd88f5bf41aee",
".git/objects/14/aee02aaa22f12f98d96216be61ddc59e54c336": "38b1a57f5793440b6507ad6f8cb2f273",
".git/objects/15/1792bdf892f00abaf5d97e4042e14c84cb24fa": "e29e42e1afa674c3effb31c5154be4c6",
".git/objects/16/57f050ab484fb72434ab8c4d2d740441cdeec3": "a0ceafd766b30b498abbaed1da374c36",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/3088e6128ef8ac841fdb77fe8778daafef7004": "3856d949d46553a35ba2a0bcfc7d283d",
".git/objects/19/fd1e9b39075d902ca68ca0b2eea925ea73a38b": "3b48d164959635052e3dcd3aabef33ca",
".git/objects/1a/0efd1fea1cc6a794916ac890a7e8b676ef4868": "3d8bfff0679c4fcde7f08d74ca76bea2",
".git/objects/1c/6f4c83d96d3bcd8fbca2017247a824c8dbd208": "74c51c9e1610d7704463bf8d13c4ec86",
".git/objects/1f/0fd5eeb3ce38ae8546b59b3ce42e22b9af03d7": "6d04ec4ff4529141c8333b2c751a7450",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/7e9b73f855fc0992f339f84d600b6d7b7f93ad": "34165712b12c1e36f049ca8d925a2732",
".git/objects/23/22f8748c67c2088418589e9ed5d97e44a2e851": "f9e526ab0ffef3a2a0d72133228eba47",
".git/objects/27/d69a163caa8901cfd9a2491ca9653e32678196": "4a319b71545e8924b776653cb27bcc6c",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/b776c50d11decd84e5ccc3951c21eb59cd975d": "3b99c0cb015dd99b5d24b2d071017f4b",
".git/objects/33/8af4e65e1ab1fd37073c18bf793f4ebe24e40e": "929a06198c4035e602f712f0431e6a64",
".git/objects/35/5f93de2074561834639f36d464191727a12ab5": "bff6ccd3ca9f7648c666b5fad2e04b79",
".git/objects/35/c42a81ebaee79796aa912f5c771fd1fe2cada4": "6b94bfb66103d52c70ce01c340965ac3",
".git/objects/36/576a404c22d5245f0bb37d87ced00e5630d3c2": "b730b08779f8a10ed0f52b30243cbc15",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/9a1f7ec291d349d62b0658e519f72e95ab656e": "67b7a57e02712ad371664007d5210295",
".git/objects/3b/1cc112b072cb18ee05fc657db536663ea1d8a4": "d32fbf15c7b33f7cbf2b4e35ef39efa2",
".git/objects/3c/a2d4f4d69f7b865e0a316ab7f656c6d6513243": "240997a739dc91643e700905a208ff56",
".git/objects/3e/2ed7c4dffd518eedbdb7e4b2636de9fcaeb194": "5eb24306926fd20fa0e9b567b46644e8",
".git/objects/3e/5dd2fed62cce1abb15676725954dacf24584f6": "7388d9f7dd1fe81bcc186f881db78015",
".git/objects/3e/a826bbeec24256f2c2b33014d6087d42e12ffa": "ed58667d0630cd0221c1701f0d441e42",
".git/objects/40/3f83af4f5694d409c7d72b62e1b486aea5b59a": "464bbfd8ef7cd7cabafe92ecf625adcf",
".git/objects/42/74f58d87052cc412a69a66c80af87b330a40ca": "aaa34231500b9fe8110bbc7294754ddb",
".git/objects/43/100fe38dcc2dd0948535d6ee4f4a7050dde8b6": "a5210192300b6a0d29d570c5cb916869",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/f5d093ad612af94be1ce1469a9cdd73aeadbdc": "74385c2f7d4062a8d8cfcd0b6f8d8d43",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/b737a100e4f49470b3de901224c5cc0a7d094a": "f72fb247102e32949caef3dcc67103b6",
".git/objects/4c/809ade165c56d330d1afa0453bd43487b89e43": "6e05b028c5a4d8ce534bb32c756ad87c",
".git/objects/4f/82b864c7a05e7501b632da065796a50dca749b": "7c09d9b4e4aee66169fe70837d9ade23",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/e15819fdee8f4bee5ee5914df9ce2e11865800": "3a9fb4803ed960b7d88b66337af7fec8",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/60/3b6d800eb1a4c0550b7e57519f968ad4a94518": "afd73edc8963487302a13cd0715a0996",
".git/objects/60/abfa7e48ed4e19129e85f2db0cc8ba37c4f9ae": "196785e91fdd585928a77e9bbfa7ceec",
".git/objects/64/06438d0f421888165ec93c69448872affd6667": "ead34ade1c3436c0ca2cf86a31b83c59",
".git/objects/65/9db3d79c1e71e80efcd4fb79e484b1b981c8d1": "8a2be8c3c9b86de1c29ab239eef9d088",
".git/objects/66/4274c72d0c97d6a183d7c7fdc728da0cdb2c99": "6c3edf0f03167d0afd3951abeb53128d",
".git/objects/68/04e4a18a850721614bf87a21663833574d32a3": "d0a7c54d6cdc798731f7b8e4d632439d",
".git/objects/69/dc4858b78dcc9ff2ad687f93bf4cbd15083f28": "cc0622be045a760d13927f08bc62dc7e",
".git/objects/6e/e798c047cddb07f2c4ddd6edefb0df5f931891": "037b5bad3041cbfb6602ff90458dc3e5",
".git/objects/6f/12c988c3f59112731222409a0ebf4b3ba9cfa8": "0b696da934c0f41de4b67fd97e00a6f8",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/8f22d4af8b698bfe0623a1bd69a12dae649281": "4fe13b0fc590fb8b52e7659e9d574f56",
".git/objects/74/4a44994d017f9bf9df8257d005eb3f727ea372": "f38618a2062bb06363253e7e6005b106",
".git/objects/79/3149df428a8b78e3ad71dd7ad842e59c397341": "2415baa34ecdd1fad397baae40e0053d",
".git/objects/79/6ffa9ef1fca954a60ae86f61e2f75fff0b7046": "bde8f2029212d46d5546d4f71bdc768f",
".git/objects/80/3a780bbdc1bdcdba843fc87cd11cb6f801a34d": "657581225b34748d6e702d297a2fc820",
".git/objects/82/c1a0a1a65e836c74c6762ba2dacb7bc42a94d5": "72718733ddf76a035bf03419cc96ff4d",
".git/objects/8b/c4b64b534ec2dc1947752ad53fa70f9c7666e2": "df8bc514c8a9f30f03206ecd4ee32ecb",
".git/objects/90/333e4188a4fb2e4e33e3af1697f68b2b008b27": "1361f791d33880409704860adcb47591",
".git/objects/91/7b3bfc32064219b9dfe42a2515c961fb684b31": "84fbfd844228ec91b804474b2161fa0d",
".git/objects/91/a5252090ab144e7a7e50852200175a16f6095a": "eb052617121f5ae345ea8be1110ca6b5",
".git/objects/92/960c5d00c2b14e4ae6ce914772622c9f35de38": "fc07259b500972d0bb23659e4a008261",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9c/35b30c070791018de13806ec07d69b7bd40a81": "fd4e4ddd853e8378a80b3e1dcd3849b9",
".git/objects/a1/24357e38bcf9529da5f70cd3aae04693bc03a9": "c78ae5f18035add73f90e89a9162c3ef",
".git/objects/a2/8bdafb66e20a8434b0f6a655df96f59fdc0cee": "475a94537745be31982d6af14b4be18f",
".git/objects/a5/0a4c2c284c36712456a49bc1d95b204be67b4c": "e9b3ce817b8b0e19bb5beb0197ee19b5",
".git/objects/a5/dc538a26fc7953a8a5d8e19cd330ac08c5afdc": "6a7d990fc2ac543f8ccb6c0fec10adf1",
".git/objects/a7/77eab78f12c72fa210bfecc5a37a3b9cb9c172": "bdb3219d644a23af2ac86f29b7e52aad",
".git/objects/a7/8813c57bd803a3cd88c02314781166280d3e53": "2284e09f56bbed37ebcdabe00773dc4f",
".git/objects/ad/16d5e217a3c22bb5b0e7988d861ac5ee8fa085": "15bbb06112da698ef1c6b3dc205dee9d",
".git/objects/ae/390c51d08a76437c5b471430d04c527d04e90b": "3977138e8320abc36862a6d75e4dda44",
".git/objects/ae/bf90ea7ac0c5800b613529229b6e5ead8193f9": "89d1951383679f946f3537d8785645cd",
".git/objects/af/32f288ec8828d0d647e418ae95489726befa42": "a1cc58db3a53e657ce8dc63a63a25a5c",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/b848243010b16e8cb82604f4bee4f3a295243f": "e9729b31969d5cded6765eb53263e727",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/d967a326009ddbdb3f6642bf7a1a3f9f5f1fd4": "9f2910a6064f6bcac811533d8091b6a3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/af727a625cc9a9a3d3f0d51e6eabd269a1af16": "4cab8b6716f368afec3f21cc0c908f4d",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/b28e2030003382eaf727afb97e2083b9e058ec": "160ff49697fbfdf43a88ea940e5f66a9",
".git/objects/bd/0a4bacc642cf64b6e06e9306ac512d8b95f559": "ee3455a5bea2ba8f1e4f935de617af5c",
".git/objects/bd/c1fe37a25243c0a370d97363de835e8a1ff73e": "e790f91c94b15d89c159d2cb7f416deb",
".git/objects/c4/41db5a670e8a2e9b639e99fbf32e6e64af4587": "4dec0088739cfaf96a1f41a77aecf664",
".git/objects/c5/7d80475dedcd29a63b5cdd106e5d0e9849c3e9": "4fc13a5bcd32fedf5452e3381be8c3da",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/cf/df3eb02bbefe6a47cc8dbd3a57589b08dca78f": "9a6336d0d0e5654019262af28de51daa",
".git/objects/d0/ad50ca3fc6caac884a8e640fab745d48d9cbf1": "3fbbac9a022467ed6b58bf912c334a87",
".git/objects/d1/74139366c436d2362a13391a8d6d3ee4fa7605": "54fce3283fbbf0eb4554f4df09244ddd",
".git/objects/d3/b8c461e2ed5d37777a93da141eb8514d014594": "effc5d76a7d46d78615968bf18a3c2e2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/25c3ce13664f353889e65ed705492097b95e27": "415ea7d39283856297d1496b430bc2e0",
".git/objects/d6/00a5e25f6a8e1acc861ed0236b6a9f3ed33257": "b3c72fa5c2cc951f7abd29f943c9d22b",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/44ebac217dd93b84d1fdbea779831eb0236109": "88506f6e912e6da47b760664ac82967f",
".git/objects/db/1b337e877efbbccd6cb35d665c89b9f7e83162": "1de055359ee7a777391b9c31139540d6",
".git/objects/dc/b3cefd66488f6fe88d81d39f281dd33d67e68a": "38b2d8669bef562cc99e90844e9dab8c",
".git/objects/de/a50561cbbe71ea02055da6d634ddef95f10416": "39bddede3b73d111842f8ec2e2b02a16",
".git/objects/df/4ac83b688cba11ae5811e3d5fa865fc7328ddb": "7919e3805d4cb503c05110d3b5248f54",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/d9f338efa29da53485836ffdee4a4f13eb750c": "9820adec80eb701ac29f26ae3fd01109",
".git/objects/e0/f010870664894cf43c5dcd3cf9add66a0d92c6": "339e7974f705af38e6ede431471e6ceb",
".git/objects/e2/d77e29ce83cda309b6354f4c3234968e843b6c": "6dc4a2740333ec32041a10a209a76c10",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/2036461c4c2d38fb9a60c5e2aaf7d681805cb7": "f304383e9307828c416851d5c73f96c2",
".git/objects/ee/5b80a0cf524d76c20b7e83430ad7de2d881724": "2bc17831128788b8c61c768720c78483",
".git/objects/f0/967c825284553d505449ca274da0a5d1256896": "1eb4f3a6711253ab467d2bb265e0c15a",
".git/objects/f1/7bbfad7cbc5e9cb5eb36d4e55ec689611a3f13": "e43324670ab818b5642cebb6d10da4c4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/d60b7ae669000b45eb3c22cf2c76548e863b3b": "74be561dd6131768efa100624f318ff2",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/f9/6d4d0794f34739a75e653a312b587b9149c183": "8929662a1f61ce74bd83d219876baaf1",
".git/objects/fb/a873950778a717e7a1ea65cd522d136f1efa78": "6f96949373aaae5bf7990c0fe1be4e32",
".git/objects/fb/b54e6b9ebb744bb79d381bcee164cd4ec65b92": "80c636f169793b68783d2db106df1286",
".git/refs/heads/master": "bb91458094f0830244e9d32cbafc6844",
".git/refs/remotes/origin/master": "bb91458094f0830244e9d32cbafc6844",
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
"assets/fonts/MaterialIcons-Regular.otf": "ed52a59698e120c80fc2e50d100ef162",
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
"flutter_bootstrap.js": "356817a9ba54b5f081e038ae58ac023a",
"icons/Icon-192.png": "1795bdab677d168dc0376af0c9a155cc",
"icons/Icon-512.png": "dbaeff8ccf643fbbc21723d683a7be37",
"icons/Icon-maskable-192.png": "1795bdab677d168dc0376af0c9a155cc",
"icons/Icon-maskable-512.png": "dbaeff8ccf643fbbc21723d683a7be37",
"index.html": "9c38ee45039101e6d709ae267c5efc5d",
"/": "9c38ee45039101e6d709ae267c5efc5d",
"main.dart.js": "20439f23c799ddded5b8e05acb6e284d",
"manifest.json": "1d5a97b4c7c0e584cd667aee64a80c80",
"version.json": "9b818ca9511483c901bed1545384376c"};
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

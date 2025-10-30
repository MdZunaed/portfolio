'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4a0839f2934a291db68491dd7b61da3c",
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
".git/index": "68e160b0a122a7df88bcf9350b948019",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8261cf26cc7152200490ce04ed8b3ffe",
".git/logs/refs/heads/main": "a9a5226d7500983f2486ff0d7b170dd4",
".git/logs/refs/remotes/origin/main": "7bc0a781fb7fc7a645a0da21fb62d104",
".git/objects/01/7ad49b140095e0def45bf79690749a9aba4ae0": "815909ccfbd589c377f6c0d6c49b6fb9",
".git/objects/02/757b65e1d374c88cf652a7945d972b137ba204": "861d63869d0e674b145faab0178d9f27",
".git/objects/02/92d287b0a3aaabf9a0eece7cf14cf47def9275": "ca3701be21bc818d728b025954563cf7",
".git/objects/02/bd79fcd05f11bee473764f43a2c5be370736dc": "5ef1fffc78080a923e150fcf01b8081a",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/77253e4365331372ad79ba229138cbdf794eb4": "7206fbf8f671841a43bff7d04f17e927",
".git/objects/06/b48cad484d84ca4a6e6d4267e1992d25d8ce0d": "3dd1b9c3e98cbbf634ba64814b4337bf",
".git/objects/08/123ed06347a8ce1d8d4fdf571c2b3dc95d37a5": "755b025501f269b14828ebab9515f974",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/7df0e7dfce0e86213990309efa42e142983216": "47fe98421c8cbe0acc18db06ed8a077a",
".git/objects/0a/e1827712f641c76d6e0cc7a8939f2c98037cec": "c898885972beadf7cd12fb7e2bbfd41a",
".git/objects/0c/6f9e705d8488f6d004a6f78a6a58922076987a": "d9381775d6896ac9070675793cc8db23",
".git/objects/0c/93b69c6c8d1e143925f826ac0af43f77a6ee83": "b36160a43f19e25ebfd1ae1a1e3194c9",
".git/objects/0d/0477a28f5c08ac7c9d1ed1337e109267b8bff5": "4fffd825d4b0b9443137bfa64831661e",
".git/objects/0d/4b3e9cb94fbc3b6372c4aa01af429c060234c3": "a48a8ad9747027bc84d5f22876dc9699",
".git/objects/10/1b6c7aefb044ae2902e932f0bb356e45e06bd1": "6c36af18ea010baf1dd648531ef261b4",
".git/objects/11/4a536531563ec2657b4c723a51cc58fbb60e0e": "5dd3ebebdccd64e9d6e95f4341167f6f",
".git/objects/13/14772a082577b692713603845da29a5c400fce": "cabaea6b7023aef32c39028681d13d5a",
".git/objects/13/c2151528567624e24750a39fc26b7ce6b61ef0": "bd636316acb7a3ce46eeccb23cac3216",
".git/objects/15/1792bdf892f00abaf5d97e4042e14c84cb24fa": "e29e42e1afa674c3effb31c5154be4c6",
".git/objects/16/57f050ab484fb72434ab8c4d2d740441cdeec3": "a0ceafd766b30b498abbaed1da374c36",
".git/objects/18/8354b6b0f424a5e234225c5f08fe4f3213d564": "38b25e0081df8f1d144493a9bf324836",
".git/objects/18/b3bc7c5c16a0e9415b2d3b96b6c025cd4b11a1": "f4b66cb29929f14f61afdb5ff6b9cfc2",
".git/objects/19/fd1e9b39075d902ca68ca0b2eea925ea73a38b": "3b48d164959635052e3dcd3aabef33ca",
".git/objects/1a/0efd1fea1cc6a794916ac890a7e8b676ef4868": "3d8bfff0679c4fcde7f08d74ca76bea2",
".git/objects/1b/a9e3e34162c60a2e1da14ee02dff5f592fecb3": "05ab63812ee59a5d371431cf2af16967",
".git/objects/1b/e5f2b5c97528ede61610c0bff5a62164e84a0f": "0f39e82851f1064128825241f549d289",
".git/objects/1f/0fd5eeb3ce38ae8546b59b3ce42e22b9af03d7": "6d04ec4ff4529141c8333b2c751a7450",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/7e9b73f855fc0992f339f84d600b6d7b7f93ad": "34165712b12c1e36f049ca8d925a2732",
".git/objects/23/22f8748c67c2088418589e9ed5d97e44a2e851": "f9e526ab0ffef3a2a0d72133228eba47",
".git/objects/23/fd78edaf1f8ea6ed9d97ee6df2b3e1faebfc1e": "845bc56d01b089dc23d7282db56b5194",
".git/objects/24/3c1626a13ad63cd873f298a1de7d0a1b83868f": "4b6c346feba170e6eebc6186d21aa12e",
".git/objects/24/fdb81f8ffaf5cc8ee7cc8c6962837f5887141d": "46ea0700f43bf384ba9ef714d2ec088b",
".git/objects/25/5880d966b94ad0ac63385fcbef0c35b6988cd1": "d0a94c12ce3bb273677f66a5c048b0fa",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/d69a163caa8901cfd9a2491ca9653e32678196": "4a319b71545e8924b776653cb27bcc6c",
".git/objects/2a/30f34da365b63425a44e77ff53d511fee53dd8": "6324344a7f16e049492d944adc2098f1",
".git/objects/2b/90ccfc1422540e999387283875d7903c4f7326": "ffad2378282b2eca4e8a160174ca6b6f",
".git/objects/2c/7ceee5166026185105cb99e572d54038a9323d": "31cb457d503cbd9ec756a9f2f2c23bde",
".git/objects/30/0db3140e281e1d03709a296a6b83e86c3ae529": "b78b244e9a5c47dbbe136a0067d974fa",
".git/objects/30/3d83fec448c5e14c0f40e004b64b10f79e2be4": "bfb550e064f4832df040e1c9a44485c6",
".git/objects/30/7aa85ba0158437b37cec1638fd797f30db014a": "1ed5e42ba7ec1d22f2e93311ff4a7779",
".git/objects/31/640e0032e0ed6b907b37fe34e024f2590e4e6f": "9f480097241611f604e775f4c0c41263",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/e90ea9df88d1e6aa3534c813f1322c83cf0b46": "cea8388b05f97bdd8a612fb7abf5d542",
".git/objects/33/8af4e65e1ab1fd37073c18bf793f4ebe24e40e": "929a06198c4035e602f712f0431e6a64",
".git/objects/33/db1cb1c9e0447670e1dcf90e4cd3fe01f04107": "e9f96b01f04fb3dc901854528e3793ae",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/cc5b05d78a7eabf8106a80454733fc69fc366e": "abef36425195fb11a5b3ca95d2b272de",
".git/objects/35/d50b01231ed17a1e3984c2d15fb8a2e06b5785": "66d4ae579b1d8d1695a4229d645918c0",
".git/objects/36/3dc3a242049f6b7142fa33f57660f9a9e5f308": "4495a797a4cdcf9b721dd6eba92c23d6",
".git/objects/36/576a404c22d5245f0bb37d87ced00e5630d3c2": "b730b08779f8a10ed0f52b30243cbc15",
".git/objects/36/cf1ef0be7cacca306161fcaa3610cdcd83435e": "3381df33a4c0f41348a1aea11c9f2701",
".git/objects/39/33f8b700cc8225fd977d36c9e2f5f45a06e614": "f03e6473ab8e4af450b5dc667d415d16",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/991feade8ab34ae9db72a2c91b6e38c1a19234": "3658bca282f5195bbda20b99e4cf3cd7",
".git/objects/3a/9a1f7ec291d349d62b0658e519f72e95ab656e": "67b7a57e02712ad371664007d5210295",
".git/objects/3a/a25677a33c724d7f9b644becc91cb7371512f7": "9aaefaeb8dd972738ec19c12efc5852a",
".git/objects/3c/8d89331f553ccc90ce9f9d2db425eac4fd06af": "5061b78e655c018f7164337f392effcc",
".git/objects/3c/8e7a777361bb896cf3e41276d94e1a5b090579": "7dec7fb737ea6beb0790a5df7ecfa072",
".git/objects/3c/bfedd92e262fde3c126f91ff041c0f8944e1f8": "d695e05372b80ccb2fab27e7a3c29b4e",
".git/objects/3d/2684640627eccb680715eceb48995c2d3ecba8": "126390acdaedd2ddb8e1df4a48dc5661",
".git/objects/3d/428bac33444a9baaf512b45102ba9cf8f8f9f5": "ab1c7bca38bc543764814b423d07ba0e",
".git/objects/3d/c640693c81dfcb5630e9d18be23e3936891bda": "f45d7958dd8a56cbffc4472b29bb4911",
".git/objects/3d/f92a1d0589a08a65d43f44ab8ac4b1741f7501": "d8bbff3df34c1adad617c965af779de4",
".git/objects/3e/27bd51b6f15aa2ef0a1679dc492fb776f9b7d6": "b3ef3498cef35583241971ae0012b406",
".git/objects/3e/2ed7c4dffd518eedbdb7e4b2636de9fcaeb194": "5eb24306926fd20fa0e9b567b46644e8",
".git/objects/3e/5dd2fed62cce1abb15676725954dacf24584f6": "7388d9f7dd1fe81bcc186f881db78015",
".git/objects/3e/a826bbeec24256f2c2b33014d6087d42e12ffa": "ed58667d0630cd0221c1701f0d441e42",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3f/eb6cf9fa666665782302ef6293248c51917119": "b7959404b921d158156dd52cd4bb911b",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/74f58d87052cc412a69a66c80af87b330a40ca": "aaa34231500b9fe8110bbc7294754ddb",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/f5d093ad612af94be1ce1469a9cdd73aeadbdc": "74385c2f7d4062a8d8cfcd0b6f8d8d43",
".git/objects/46/e53fc2eef9f65d579072b5c1a5511dddf1df5c": "9e055aa465c75c20304f9f8d969cfa25",
".git/objects/48/6eec15c5d7274fcff95ff7854f8b2596d333a5": "3b7b4ffb4e9862c31ae6db380f55aa0a",
".git/objects/4a/09a31252272d19f91964f00288469c72acc71c": "f94278bfa07bd4619387633b6efc8386",
".git/objects/4c/7b278190a1d47b645d0df78a9acc9c4a790799": "d32546a346772d184c49b02a83f4eadb",
".git/objects/4c/809ade165c56d330d1afa0453bd43487b89e43": "6e05b028c5a4d8ce534bb32c756ad87c",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/e15819fdee8f4bee5ee5914df9ce2e11865800": "3a9fb4803ed960b7d88b66337af7fec8",
".git/objects/52/14efc74e183f7974109a02ca1511c4d458d28d": "2d9b6736dadd25dfc430e7d4cd6e105d",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/54/0e6461385552c51fa4928535ad79fba88138dd": "dbc06d913fb602d4d1aa764963d61ea2",
".git/objects/54/ed05bd223dd387ff2da48db5e33c6de09e7988": "ce81e9b69162124c9cd913526d76981d",
".git/objects/56/23653ac7e6ba232eae864f34acfecd9fb0bd9e": "22a9b093b22667d3d55558af760f0d6a",
".git/objects/57/5dd93fc76354d7bb6311a0c5759be889678c5e": "85ada3e4d5e793e12b6ef50aab0e0840",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/2f63db74b95b346dd5ded6a176d6f9cf7d2fc8": "5d7a7de298947560661106dc595f9537",
".git/objects/58/650814d01acc42cc66eb49b2c4afb9a740364b": "281111007fe36da556f83e6eef9e99ed",
".git/objects/58/73fab81dc6a3ccf3b4c5873e1c2f260a10240c": "db3ccfff33b26b5417daa5e4c2f4c082",
".git/objects/58/8b3579d7e43dc054847b3f832e1b989e3d5d76": "2135083519f1096c33ee86ba35f81b3e",
".git/objects/59/81cce814c5cabaef3071f4c754d059b7e358eb": "f38633d9551d71cd84f8fe51e4f6f00a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5b/e2f7e1abaff201d1b822d8d6f00b64d36648b3": "7df34424def97cfeb7d030b93bf64025",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/60/3b6d800eb1a4c0550b7e57519f968ad4a94518": "afd73edc8963487302a13cd0715a0996",
".git/objects/61/9c3c84049badd120252d562a9ce15e58782ee6": "5f8a9d32943c6dbaf007475513d07e37",
".git/objects/61/a65de36f34f2bd8390589ec229bb70bc5491b6": "b6418382d91924243177fa8cd51d9260",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/a705c614bd2e7751164789698beec1d2f23f0a": "befb2c98c3e87f19ea196d285476a3cc",
".git/objects/65/9db3d79c1e71e80efcd4fb79e484b1b981c8d1": "8a2be8c3c9b86de1c29ab239eef9d088",
".git/objects/66/ce3035aed8d90edf7cc98040526867c6326aba": "8d1e1e07139a274d0f3c36c1855c3680",
".git/objects/67/84ddc957fae9473fc4659de13c6acd583d7ad0": "7f0db662bebcddf6145bf88666ad2c3e",
".git/objects/68/04e4a18a850721614bf87a21663833574d32a3": "d0a7c54d6cdc798731f7b8e4d632439d",
".git/objects/68/7d4946e07a235fdaea6f314360864c4e764fa9": "d4b1db100b2158cd944467bc2ce93139",
".git/objects/69/2314d4bc4baba4e89284bc132da46ecf9b9667": "236de8322ab2e57025294821d78a03be",
".git/objects/69/42ca2341ae543c753a0922ff58a716ef0a89c5": "f0504cec7b52860369d7d5f11bb33a0f",
".git/objects/69/f903866a0e015f4ae07ca0112b8cfb10cde278": "e0c5c0664d5036b9f0f2daddd1ac40be",
".git/objects/6b/7c774059f18320e3f681d0e29f609f5bd453e4": "1b4f4e5140bda803baec01183e58dadf",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/d6cad8eb12823f5813daff942b75009078684c": "662120439fc1ed7a1c9ebe1692e530e4",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/4782f8ca2b227d06f7547a99b63be31de214a0": "b25d1f8890f52edc2b9665d2a329fb3d",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/67bc9f5e7b13902c914177f177249f48745b12": "9f98c6e4a64549cb27c52d62123d5944",
".git/objects/6e/0356ab6d24636982e066181c650a45d038ba75": "1afe7d3559f35e99c3c819a4807e5c22",
".git/objects/6e/2e757756290fa45acc1b3629befcca8deb5e8b": "8cae7118075ad1782252d009c3269022",
".git/objects/70/a5b31167e3200ee69f6b054492ac1de1a5fd73": "7de39687e985a657be83fafe3157f0db",
".git/objects/71/8f22d4af8b698bfe0623a1bd69a12dae649281": "4fe13b0fc590fb8b52e7659e9d574f56",
".git/objects/72/2ba39edf8c63600b2a95088848596b3ffd65dc": "6f801f3ea13557fecbb4a0765bc2ce4f",
".git/objects/72/6826c679d3a26b893979a10b7e14f11380ad39": "23783d13ae12f3ffb06e4aee14a248ab",
".git/objects/72/af2966736cbe21b5db7c776ce8f86f3306bd3a": "d284a7a11b561fc7f7ef1b3de140bade",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/86fccc7fe954892039ae1c48a6218b1ef37c02": "61f76b9b30c4f684cf9e1bb40efe6712",
".git/objects/74/48ae2e6af5cc92128897b52e99178c494cee66": "fae528b5366ae15c67f8a131d6205692",
".git/objects/74/4a44994d017f9bf9df8257d005eb3f727ea372": "f38618a2062bb06363253e7e6005b106",
".git/objects/75/47bca54af041b06d229f94e558e00d9323eaa7": "fdd28d07ffecb61de7bfe63551d1fa85",
".git/objects/75/d50f2414e98a2ecd9da4ded605e0e180ca4c9d": "d8d38b79e5ed78207dd184177e06d898",
".git/objects/77/fa474668a4ec4ca4605d777717a67fb39664ed": "5fc3acad6ca0df69edc4417ff7c28617",
".git/objects/78/9906878ab1647596a5aa554f111bc19c61777a": "29457e608fd6f4ba23b7d95a07235ccd",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/81/03866cffa4d10dde1ce5b0008a4c793131ecf9": "67eeacc5696547ace4d41c47ed1288c0",
".git/objects/81/c0a413e4acef7d516c763e0d31ede808fcca87": "80c82e7b726f8c67f1b791daaea16775",
".git/objects/82/c1a0a1a65e836c74c6762ba2dacb7bc42a94d5": "72718733ddf76a035bf03419cc96ff4d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/49f8dadd215511e4a419d069e23e631617262b": "6e04c447902ae4616e2c5606c68abd4d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/7a8089a1938763f9e595f6d4ad3fb12e257c98": "aee85be3d7c95d856bbb92b29c7af9f1",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8b/c4b64b534ec2dc1947752ad53fa70f9c7666e2": "df8bc514c8a9f30f03206ecd4ee32ecb",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/90/333e4188a4fb2e4e33e3af1697f68b2b008b27": "1361f791d33880409704860adcb47591",
".git/objects/90/449bea66316822bfa2281a7640931179be4262": "788eadf02d84241684f96837f7ee9016",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/da7f5cdca5f5d8cc170e80fbe279150a4d2b7b": "e317a05108fd364ab0ebdbad16aee18b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/7b3bfc32064219b9dfe42a2515c961fb684b31": "84fbfd844228ec91b804474b2161fa0d",
".git/objects/95/97a4fff10664feb22343e806e8058ed2e2293f": "050cad56a73826293ebc4ba05f759511",
".git/objects/97/6527092b9307de8fd3e398986fd433f5c96bbb": "07fc51f337fcb66d5f961d7522557e18",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/ac9d350ef72f6bdf1d3dfb2d17aaf5fa27cc33": "81f115b743b9358194853fcb08769b76",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/39456246bbfea4c8db8691cae6e496ed882b9e": "d2337838e27872a0c8b0d5a38f8f48eb",
".git/objects/9a/7a5ff95f4b5c6671c1a0dc3d1c100265d4983d": "6457367ba41aa01a67dd73e4b0958eaa",
".git/objects/9d/7a83d0e0356a8672dc2846cea34ae2971ebcb9": "bed8e5d1da73df442c8c27897ce1065c",
".git/objects/9e/f2c0159bd86b54eb80ec2945ba3428d5a4a4a2": "a94963bfbcd7d1ff15de9b34aa8ddcf2",
".git/objects/a0/826d8c3247f108d06d21f87c1d205ad848e9b6": "13681ea6915c969fbc7b5109c443765f",
".git/objects/a0/a43089c020609807fdf31adf94a1db1f2f2f9d": "436c7ef44d7533cfa775e355b8648f12",
".git/objects/a2/55e2b5b5f9666ae29d930a64473c1fc075ee75": "6b947ea24821316ea9461cda9fd86f9d",
".git/objects/a2/5c3e5f25417cada5d4aca3638249640f43ee55": "cd5a73640fe1d0dd9813de97c01d6ef9",
".git/objects/a3/ab707af3f0aaf11172d151a7e88a7da3f66cb2": "7d140bcbe64c86c5e08dfda8b1cc88df",
".git/objects/a5/0a4c2c284c36712456a49bc1d95b204be67b4c": "e9b3ce817b8b0e19bb5beb0197ee19b5",
".git/objects/a5/3860fe92e6dfb825ab3694daca2684a9b5a450": "02ba40c33a0e9ef295f74cb72d444726",
".git/objects/a5/dc538a26fc7953a8a5d8e19cd330ac08c5afdc": "6a7d990fc2ac543f8ccb6c0fec10adf1",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/9ac45ff125acaafd024ea1892f6af154daf61e": "a16d5d9ccce3646b1a7e6f0b2c004812",
".git/objects/a7/8813c57bd803a3cd88c02314781166280d3e53": "2284e09f56bbed37ebcdabe00773dc4f",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/92b090b378a99af3d08f9b426a5f68980825cd": "fdcffed7c96cf0a951127d39b93eed02",
".git/objects/a8/e4dfef2c97efe3f0df7489005d79ccc6f57545": "4142951e8ebe1bd431313ddb18bc7720",
".git/objects/ab/44dee510ef92ee80e9529a4587c9f4b9514d34": "7162a33c9eda0d13ab672fee8e8aaab1",
".git/objects/ad/0b0787311f940a4284d7b6fc75fde63e3f07c4": "b64fad22e76691b73bee4ab260d758cf",
".git/objects/ad/16d5e217a3c22bb5b0e7988d861ac5ee8fa085": "15bbb06112da698ef1c6b3dc205dee9d",
".git/objects/ad/25c9e54c74b7a591b1931c853efeff67550e2a": "cca08ec4da77fb2b00d9399f382f7679",
".git/objects/ae/5321793b1e1524a17cc30bbe88c620537902d5": "d70c42fa0c03ef0ef77fefb5e7441ba3",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/32f288ec8828d0d647e418ae95489726befa42": "a1cc58db3a53e657ce8dc63a63a25a5c",
".git/objects/af/3f37c7986b9cdeff39350560e71a52e34f9e3d": "79913c5424bc2789cf0e45c2da3a6eaf",
".git/objects/b0/298dd2e3fef13c85544225d5a79a90a8d64eef": "f5b807c5f6b5b41ba066b74bbd969576",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/7af8ae20b93885e3d6b41e3935086049b49b0b": "0029ce41df950b4020c39f06199ce497",
".git/objects/b1/7cc276f03bf61ec16ea831138c7d382cc291b6": "95471b918f1691aafbacd3c612e9b06f",
".git/objects/b1/8c7162c67f4ac57c9b3c939cccf16f7f5189b4": "6d82c6974ebcca3f9389a06a1dc743b2",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/83d88de1b06eaedbee64fe2c2ed1a121d588eb": "db89ff44a0a99051ee2529729da4078d",
".git/objects/b5/fcbf72e47a8c740d08e807ba78e9404f8f691d": "c11a7b8d6da2619abdf4e36ae1b42297",
".git/objects/b8/70240e104cd35dbda2cfcb265e8a36408fa901": "fe3b2b06216c18ba59ea4579b690dbd5",
".git/objects/b8/e3883ad95af4b069b72b16fa0b18ab8f9f9c1a": "a14657deda32c8d269d5ce691fb4d2fa",
".git/objects/b9/b90adf09aa4358fc296da1d91563f1989ef63f": "a26a82a77ae819fcfb88f01af5f60f23",
".git/objects/b9/cd077dca9f8642cbbc594726737458fee1578f": "07188819722f9565ef3a513b7a0afac8",
".git/objects/b9/f54a9c557db22dff31fe1b887b9e250b852641": "8a380dced5cb1056a762167fd3380d7b",
".git/objects/ba/113e32e0804e22af1c5a8b1ec61e2a77b96b3e": "ecbb7fa77a12da1be824147b8dcd1abb",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/99d19c3157e8e122dd6543901400810b77e22f": "249ff33d326453221604205a4194209b",
".git/objects/bb/b28e2030003382eaf727afb97e2083b9e058ec": "160ff49697fbfdf43a88ea940e5f66a9",
".git/objects/be/db7b46cac2aed6a817d55fd7298846cf615e54": "5df7ae4cd18b01c9d59213b4c1ab42a8",
".git/objects/c0/2cb9a43ce2eeedeedbf9cbdf041f286a2bf23a": "c3c1040fb4af35e6e88a193b533912dd",
".git/objects/c3/4a6657c4be7d60dc653dda0c48e586a93aa223": "98cedc133fd69f1c1fbc56e38e446b29",
".git/objects/c3/a276f261d8f16223fafb8cc8f41f44735d6987": "7b56faf867f8ef4a4b57514de1cdfefa",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/13bdd93f7b2b0e457f374e398b1eb76abaa309": "b8ed3609e4bca7e30f664ed9713d4050",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/fd6483ab6344c6b29e95fce425cfeb739d3b0f": "9766f9383dfe50a054f422f26c6d2e68",
".git/objects/c8/edd1636fde776c106044ba64c7cc444856cae6": "6d0918f9c3e91ff657340929811332cc",
".git/objects/c9/747e1e5d80bd14fb913c5fcac704fb45e2c5cd": "2a2d93891143bce9338e75e18324550c",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/ca537174c0ebe06c36eae2475dafacddc83a1f": "8ddfa8ba0fcea012caa9b7c453cfc5b3",
".git/objects/cc/1f872f08a1ab80dc8871f8826e4e48d5987f29": "f933829fa851552738342354b7ff34a1",
".git/objects/cd/d99df27088844abebbd55ae5f78f77259390fd": "35c51135b0b75de894d75c8065b57fe3",
".git/objects/ce/1884dee355cb376120c17d28319dc24aee4599": "570c64e6aeb208058e97b6930e9b140d",
".git/objects/ce/dfc0818c01669ea9523e06508bfb8b511d7969": "d1bc5a56e9779fa910d1ee2557e0b58f",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/51c4b72f9163500b54419d4b8c5e8d3139cb32": "04e20877d2dcfdd61b2bf3c71476c247",
".git/objects/d3/b8c461e2ed5d37777a93da141eb8514d014594": "effc5d76a7d46d78615968bf18a3c2e2",
".git/objects/d3/ee66953682bd49659146a60f15aa9c9447d24a": "652e35f33afc89c50ffb9e3f5075da64",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3e954e1efeae7df58c96d6a0b4e4a8da2a1ce1": "900dc97edfcf5bc6c0df9785317ffbe7",
".git/objects/d4/a1786595dff59fafb2c7c8f4eaaf1d6fe8bca6": "e209b85d07311002def0644cef18ff29",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/1e48c6456651f6675a8e78dea6bc1419468416": "56ae48c87722e1ce6b3d5c7b4ce58a0d",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/9063c51eb41fc8bdb8fa8522a7ca87543de8d4": "9b9a4e34e78029ac14a54d7b43dd39f7",
".git/objects/da/ed63bc80ba48a3b66b9653897a1fe32a114017": "796639bfda977a68e3cef04c0a11d46b",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/1b337e877efbbccd6cb35d665c89b9f7e83162": "1de055359ee7a777391b9c31139540d6",
".git/objects/dc/93910b9e0fb1e79e922a01603cba1ce014538c": "f112090702497f1e4837e45db4115bc0",
".git/objects/dc/b3cefd66488f6fe88d81d39f281dd33d67e68a": "38b2d8669bef562cc99e90844e9dab8c",
".git/objects/de/d6a55c21d7cfde003cc37d4cde266f0d8d9a04": "5cb43abfba77f6e5e51281be63169b07",
".git/objects/df/354690d970b5026a9e118f4adbf45543c5e426": "05b6dfbabb97d11857d65a70a54810d1",
".git/objects/df/4ac83b688cba11ae5811e3d5fa865fc7328ddb": "7919e3805d4cb503c05110d3b5248f54",
".git/objects/df/9b68f5c876a44152543458e12b86192093d212": "98df2c2b4178daacf1ce1dca5e7351e1",
".git/objects/df/fd58ed7abf1e4e9e8ef7cde4b9affd5c45d85b": "c5b867e590ec3fbc8311a9a07a9c2b4b",
".git/objects/e0/f010870664894cf43c5dcd3cf9add66a0d92c6": "339e7974f705af38e6ede431471e6ceb",
".git/objects/e1/4d7e3c461a9c5123c5e8ddb646fba7b2f430bf": "dbbfc9e335e2a70410cc44680860c3e7",
".git/objects/e2/13a7ee930e64e9cb3a66eed50e910b00253f32": "7474b33e1aa6ec777d4cf9941142891c",
".git/objects/e2/d77e29ce83cda309b6354f4c3234968e843b6c": "6dc4a2740333ec32041a10a209a76c10",
".git/objects/e6/5ebe4c9e21e8830418887285d243e551b6e7a2": "a669b221c33d41747495b68d13a50a55",
".git/objects/e7/1e0b7cd3d463e2336be9c77ea57edf28bfa09e": "b0872a560727e6b40a9fe77b410686e1",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/753203985e8c9b904eba646d1a019feb43e849": "165dc56b626381c649c02b7a6b3bcc81",
".git/objects/ed/ea868311532e7e583a52cb96387bb4000f9cc1": "e80b9fee315ca50809d8bd91d90f229a",
".git/objects/ee/5b80a0cf524d76c20b7e83430ad7de2d881724": "2bc17831128788b8c61c768720c78483",
".git/objects/ee/cbb7eeca3dd0a9688c3d4468a0e1d0f4c16505": "ac8ebaa59746cabe3872cbf8a5e767b6",
".git/objects/ef/93e6bdce5563f98a40fe31e8d3eeb90e878db0": "e4161ba0ea6a21c5321174f175075919",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/43e8368cb55199c6d17b1f38aa9721641f1ebf": "9aa73af21e9be4001b236803d9e65175",
".git/objects/f0/967c825284553d505449ca274da0a5d1256896": "1eb4f3a6711253ab467d2bb265e0c15a",
".git/objects/f1/567e5b857b85b0d2dea4339eab0ed1401fdb09": "ac1d5c7f2fee83aa82d09c1aba8087d4",
".git/objects/f1/7bbfad7cbc5e9cb5eb36d4e55ec689611a3f13": "e43324670ab818b5642cebb6d10da4c4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/df769d0358881a605054022de47f385b478d15": "315448fe77b4dbabef4050e2884ce09c",
".git/objects/f3/6ad914e3e27a1fb00fa9adcd02325776beadbb": "3d1695ea15eda62cb3753860f070e7c9",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/9ee0efd41a93dadd442cfe77967196746cef1d": "a22bf9012a5da369e0169b3e10933b98",
".git/objects/f8/14a124d6de325f76337fc282d60bba21a5b389": "70a35f4e7d4a752c725c990286fbb7ab",
".git/objects/f8/72f45e485561ed6b56e770cd0512fc00bac0bc": "0f5afbe347fbc9a3d5a974195656d2b8",
".git/objects/f9/6d4d0794f34739a75e653a312b587b9149c183": "8929662a1f61ce74bd83d219876baaf1",
".git/objects/f9/d7fad322359afc33d1c9153ab8915315ba635f": "422135a70f8a2d12d9bdb4ee48631786",
".git/objects/fb/2222baabcd26e24cb4ec376d2c266476b9a668": "d737298ebf1be32f1e91d0a45c6f945a",
".git/objects/fb/b2bf1bf549be6108c3ab832f7cf8df70a2dafc": "f7a145ebaf751379116e83634ed56ba6",
".git/refs/heads/main": "8ef183645698bfdbfd3cd4513deb4ef1",
".git/refs/remotes/origin/main": "8ef183645698bfdbfd3cd4513deb4ef1",
"assets/AssetManifest.bin": "21e4a0d550b3d24e75ee9b2143df7b1c",
"assets/AssetManifest.bin.json": "7fa74eb06d2fb39b09f70525fc68a9fb",
"assets/AssetManifest.json": "4ae82c1a7518984a39285e4dda953be4",
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
"assets/assets/images/grofresh.png": "629d70dac63417ae1ca321d90d35bde1",
"assets/assets/images/helf_ai.png": "cde46a0d0594b2bccfc8d2ffc5c160cf",
"assets/assets/images/helf_buddy.png": "d27eadbeb59c84a041d77bfaf4583f4e",
"assets/assets/images/info.webp": "6038f58659f502a63cc54e798eb6a321",
"assets/assets/images/jobnect.png": "bbaead958899b9564e304e2dfb1505f4",
"assets/assets/images/jobnect_ui.webp": "7e5efd02656e24894827ff1fcf62b291",
"assets/assets/images/movie_ui.webp": "d09b8f548450996b89e4ab5f0db5e483",
"assets/assets/images/musicplayer_ui.webp": "c276ead994b5cb6ca3c8797f29cbe898",
"assets/assets/images/parcelfly_ui.webp": "13083a142a7462cf638387894500b1a0",
"assets/assets/images/sixvalley.png": "6f0d4ff5a3fee752e509256ad109bb38",
"assets/assets/images/skill.webp": "75efcc228045e0ca275249bdfbc10138",
"assets/assets/images/stackfood.png": "d126c6a330fa4b4dbe90764e21ff2d51",
"assets/assets/images/taskman_ui.webp": "26dd70b554af6a109f82fa329a777f90",
"assets/assets/images/weather_ui.webp": "5cbbfd9a1103f3020bc051967165fe0c",
"assets/assets/images/znd.webp": "9c3b76a3af3ddb93120513635a7446c4",
"assets/assets/images/znd2.webp": "cc704775d4cadb7f35a7926b8305795d",
"assets/assets/images/zunaedCV.pdf": "dd2a922cca70834ed6ac4bbf64158148",
"assets/assets/lottie/jellyLottie.json": "d46e7804c8614761bb9c5fa8ed301e7b",
"assets/FontManifest.json": "446b3a5d11b4ce54d0a658618220f3df",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/loading.gif": "e3d09f6f88efa8a8159cd8e819bebfda",
"assets/NOTICES": "e3e50227b1adeef1f648c4a84a82e27f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "94c717c188157b25cf164d2828b27ada",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ac037620530425e42a1618062b64ad20",
"icons/Icon-192.png": "1795bdab677d168dc0376af0c9a155cc",
"icons/Icon-512.png": "dbaeff8ccf643fbbc21723d683a7be37",
"icons/Icon-maskable-192.png": "1795bdab677d168dc0376af0c9a155cc",
"icons/Icon-maskable-512.png": "dbaeff8ccf643fbbc21723d683a7be37",
"index.html": "84a049c8f44fd7fefeaebd27cd3ada61",
"/": "84a049c8f44fd7fefeaebd27cd3ada61",
"main.dart.js": "d60963c51d2088a95e8b8329ca370759",
"main.dart.mjs": "36835ee17b1cc13b5b1072e1bbe47cf1",
"main.dart.wasm": "31dc123d1d85fe47368672fe52c7e1f3",
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

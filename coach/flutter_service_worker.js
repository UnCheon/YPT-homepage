'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "556b1839934f3be0da93dd22cfdfb0e1",
"index.html": "253c7ef58ca4129c652afae755bea417",
"/": "253c7ef58ca4129c652afae755bea417",
"main.dart.js": "f6f30a7de7dd95b51aa554fa47067d68",
"favicon.png": "03451591721cd34b2390491e83564195",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "937c765f721b10e6245cb6928d3af7f1",
"assets/AssetManifest.json": "9d12e056685ea634d297ae272c77f6c6",
"assets/NOTICES": "72444695c91fd1eb7068044f57d47695",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/statistics/ic_chart_bar.png": "9c39619764075528b1fade92de424b09",
"assets/assets/statistics/ic_chart_pie.png": "1fe7150b198e3ff6d7f52c61c74a3f5c",
"assets/assets/statistics/ic_chart_h_bar.png": "e7d71ebd6d46865cefdbd2f2efb09454",
"assets/assets/statistics/ic_chart_log.png": "5cbf70dc9a47f1da899ddedb284832e3",
"assets/assets/statistics/btn_next.png": "56891e39488308cf510a610b0f69f498",
"assets/assets/statistics/btn_prev.png": "371175c18582299cc0b11fc3d266ca74",
"assets/assets/statistics/ic_chart_line.png": "d5b804b0b4deb2d2ea42c3e490420bb9",
"assets/assets/guide/edit_log_guide.png": "c1f053c322c4b375d8fc6cc73ace9eaf",
"assets/assets/guide/todo_calendar_guide_2.png": "bd44ebb9c1d78f9efd89c9cf89e5226d",
"assets/assets/guide/todo_calendar_guide_1.png": "42a16da5038cfb35f1e12e7347257397",
"assets/assets/guide/todo_home_guide.png": "2bc748b51492f949113f97b439656bbe",
"assets/assets/home/ic_chat_2.png": "c27ab676c3e7eb6e2cd641f273e2930e",
"assets/assets/home/ic_chat_3.png": "edecf9948d66231f9968e4aa80332560",
"assets/assets/home/ic_task.png": "f9ccec1c585a8e9dda9527a155de8f58",
"assets/assets/home/ic_graph.png": "a26997d6f8b1cdaeb09f0676e92f7a34",
"assets/assets/home/ic_lock.png": "95ed5f0c66251ceb29f1b0b11529a88d",
"assets/assets/home/ic_star.png": "2a62754a8338f7247de1ea42a0eb5c24",
"assets/assets/home/ic_rest.png": "0f15f48c3b856867e2df492fbf42e25c",
"assets/assets/home/ic_chat.png": "5c55aae1ddf5f11d399862cf9ac9798a",
"assets/assets/home/ic_group.png": "e1a7e6650f58775565f03c2db7829d69",
"assets/assets/home/btn_data.png": "b0ffb4f2b62c728c81ad4dffe5a985a2",
"assets/assets/drawer/ic_like.png": "cbf465d712454df420a2bf513e68422f",
"assets/assets/drawer/ic_cal.png": "eb58b50f7f2d162a249b6c38b5c2baea",
"assets/assets/drawer/ic_talk.png": "7257531539457e596944828996c83d5b",
"assets/assets/drawer/ic_insta.png": "4064d80cec072515058262dca873e09a",
"assets/assets/drawer/ic_logout.png": "2d433a6d1adccb9f8f82846156acd0d6",
"assets/assets/drawer/ic_qna.png": "ca2197c49aeb8c5a4e8f2272922c8828",
"assets/assets/drawer/ic_tv.png": "24899330e15fb8c9f9df8a032bba8831",
"assets/assets/study/pass_code_0_ko.png": "02f7b83fefa39451c0de93b4bbd9abab",
"assets/assets/study/btn_stop.png": "a6746f693e99c4f3e4e7f884c18ec16f",
"assets/assets/study/pass_code_new.png": "cdee23b65ed13917648569dd1242268c",
"assets/assets/study/ic_group_dark.png": "54a2859dc0ef2907108c7be3eeba0e9f",
"assets/assets/study/ic_rotate.png": "275538e1f688efdce0528cefa03edadf",
"assets/assets/study/ic_star.png": "1f141c34c2e1e7252a949d573c9abb52",
"assets/assets/study/white_apps/a0.png": "47266405267d1283ae280da8b34cae93",
"assets/assets/study/white_apps/a1.png": "54b24bb8ea121d252d20e8f4926b8d6b",
"assets/assets/study/white_apps/u0.png": "03e635c34c6ad410a274235ecff5cfae",
"assets/assets/study/white_apps/u1.png": "dfe34dab5c65e62bc4c1163dbc32312b",
"assets/assets/study/btn_nav_close.png": "de9697900677a9ea78058e596a993ceb",
"assets/assets/study/ic_phone_2.png": "400392c1ffceb1a0e05cd142594da839",
"assets/assets/study/tutorial_0.png": "ffdd337bd2fd4b3c483b7a09eaac7c10",
"assets/assets/study/pass_code_new_ko.png": "e5798facfa26977ed01e06a08db4746e",
"assets/assets/study/tutorial_1.png": "8849140734134e30c60683930d23ae9e",
"assets/assets/study/setting_1.png": "b1c058bd4eab32928cd3cb4307fa12a1",
"assets/assets/study/setting_0.png": "784aaa77eaee721158bedfa4606973ca",
"assets/assets/study/pass_code_1.png": "897f8f7eb07370e0e9e041a688f59873",
"assets/assets/study/pass_code_0.png": "4f17ece6fe37d89a6ccc6893542d7d0b",
"assets/assets/auth/icon_logo.png": "dbb950db38cf15f0319e017deb79c414",
"assets/assets/group/member/ic_user_normal.png": "8ccdb29b7a57ddec631a2de405db0279",
"assets/assets/group/member/ic_user_smoke.png": "ce196d822e43c673aabc14de771f3433",
"assets/assets/group/member/ic_user_fire.png": "8cdb483f4a0de8c046f3ce7557e90832",
"assets/assets/group/member/ic_user_absent.png": "e5a646223a713d3e604f71fd00ac11a1",
"assets/assets/group/member/ic_user_sweat.png": "e0d4a9530ce149be7b98242d4754571c",
"assets/assets/group/member/ic_user_out.png": "0cd0b742025587cb97e7fe8b3f489d7a",
"assets/assets/group/member/ic_user_off.png": "b6dbda576bcc061cde5c225435d92944",
"assets/assets/group/member/ic_user_use_app.png": "101967f6290b7f82b67d18ded8e1f800",
"assets/assets/planner/planner_store_color.png": "e1ed98ef70c16f240dc592ab36879b64",
"assets/assets/planner/planner_shadow1.png": "6cac13d1ea992b503a0b285f4e66c0a7",
"assets/assets/planner/frame/note01.png": "2f3f8ab77017da77d6be4e6de961a61a",
"assets/assets/planner/insight_capture_background.jpg": "85eae7ba135985ed226f38f1adc16d5e",
"assets/assets/challenge/sleep.png": "31fb6b9efe555ddd235e0f64f0311bba",
"assets/assets/challenge/challenge_sit.png": "78949337c708a4fdaa4e29aa5a19e775",
"assets/assets/challenge/challenge_sleep.png": "8dd6d65e1a9d826140d8d263a3970a0f",
"assets/assets/challenge/challenge_study.png": "7c058f897898fcf9880c6489af27484a",
"assets/assets/challenge/challenge_wakeup.png": "f751f72536d8b69e5fb039d682323594",
"assets/assets/rank/ic_crown.png": "e88089c5147a8c3a8413c6dcbf0eff66",
"assets/assets/rank/ic_silver.png": "e4b9878c8724d0a068e39078a7dbaf73",
"assets/assets/rank/ic_necklace.png": "311bed1e460f27698f4f3224241a0059",
"assets/assets/rank/ic_bronze.png": "0a6ef008a1913f16c4bdb5d9adb86b76",
"assets/assets/rank/ic_gold.png": "62ee22644dc41106c243fe5d98a3944f",
"assets/assets/translations/tr.json": "512244fe265c365a54985587a75f972b",
"assets/assets/translations/ja.json": "7c531b31e61b826a04b4cc2d7d9711a3",
"assets/assets/translations/de.json": "8d2ca7d68ddaee64e6cbd9f74ebd8d56",
"assets/assets/translations/ru.json": "4f2b31ddc0b40a6da4cb250686c608c2",
"assets/assets/translations/zh-CN.json": "d6e9c5a48c4c9a808eb9581a0d4bbad4",
"assets/assets/translations/en.json": "0f58c8a2c05150fa1545bf31833c8d61",
"assets/assets/translations/zh-HK.json": "cf613a2ef025bdc5c56e8e7d6c3e42d7",
"assets/assets/translations/zh-Hans.json": "bbefc246e122b14d904734f83361bacb",
"assets/assets/translations/ko.json": "ff99d36fce6ee93ca7f51f515f954349",
"assets/assets/translations/zh-TW.json": "ceaa4e54509b80bf0aa5774fa09619be",
"assets/assets/translations/vi.json": "162bb93d50178829eec1b736b737868f",
"assets/assets/translations/id.json": "0183f840598a383274b68173ad161f62",
"assets/assets/translations/th.json": "752f0ab9599f5f5eee81cc2f7fd8ee85",
"assets/assets/translations/es.json": "bdb78c0b963248a373b92c39be43e28b",
"assets/assets/translations/zh-Hant.json": "e172eb7fb7a46a38a865e63f7e036460"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

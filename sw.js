const cacheName = "offline-v1";

const flaticons = [
  "./flaticon/bell.png",
  "./flaticon/bell (1).png",
  "./flaticon/bell (1).png",
  "./flaticon/brightness.png",
  "./flaticon/envelope (1).png",
  "./flaticon/envelope.png",
  "./flaticon/faq_fox.png",
  "./flaticon/file-download (1).png",
  "./flaticon/file-download.png",
  "./flaticon/home (1).png",
  "./flaticon/home.png",
  "./flaticon/list-white.png",
  "./flaticon/menu-burger.png",
  "./flaticon/moon-stars.png",
  "./flaticon/promo_axolotl.png",
  "./flaticon/promo_bee.png",
  "./flaticon/promo_chicken.png",
  "./flaticon/promo_creeper.png",
  "./flaticon/promo_pig_sheep.png",
  "./flaticon/promo_spider.png",
  "./flaticon/promo_wolf.png",
  "./flaticon/s-icon-main.png",
  "./flaticon/search (1).png",
  "./flaticon/search.png",
]
const fonts = [
  "./fonts/gotham/GOTHAM-BOLD.TTF",
  "./fonts/gotham/Gotham-Book.otf",
  "./fonts/Mojangles.ttf",
  "./fonts/Minecraft-Ten.otf",
  "./fonts/Minecraft-Five.otf"
]
const scripts = [
  "./script/change_theme.js",
  "./script/global_variables.js",
  "./script/loading_screen.js",
  "./script/tabs_selection.js"
]
const styles = [
  "./style/mobile.css",
  "./style/fonts.css",
  "./style/pc.css"
]

const assets = [
  ...flaticons,
  ...fonts,
  ...scripts,
  ...styles,
  "./index.html",
  "./app_icon.png"
]

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assets))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
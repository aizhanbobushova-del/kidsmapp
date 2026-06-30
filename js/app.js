// === Telegram WebApp Init ===
const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
  // Подстраиваем цвета под тему Telegram
  tg.setHeaderColor('secondary_bg_color');
  tg.setBackgroundColor('bg_color');
  tg.setBottomBarColor('secondary_bg_color');
}

// === User data from Telegram ===
function getTgUser() {
  if (tg?.initDataUnsafe?.user) {
    return tg.initDataUnsafe.user;
  }
  // Fallback для теста вне Telegram
  return { first_name: 'Айгуль', last_name: 'Мамытова', username: 'aigul' };
}

// === Local storage helpers ===
function saveFavorites(ids) {
  localStorage.setItem('kidsmap_favs', JSON.stringify(ids));
}
function loadFavorites() {
  try { return JSON.parse(localStorage.getItem('kidsmap_favs')) || []; }
  catch { return []; }
}

// === Haptic ===
function haptic(type = 'light') {
  tg?.HapticFeedback?.impactOccurred(type);

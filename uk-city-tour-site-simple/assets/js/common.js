document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('menuButton');
  var menu = document.getElementById('menuList');

  if (button && menu) {
    button.addEventListener('click', function () {
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    });
  }
});

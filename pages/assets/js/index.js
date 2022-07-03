//Menu
function menu() {
  const menuBody = document.getElementById('menuBody');
  const menuBar = document.getElementById('navBar');
  const menuIcon = document.querySelector('.menuIcon');
  menuIcon.classList.toggle('bx-menu');
  menuIcon.classList.toggle('bx-menu-alt-left');
  menuBar.classList.toggle('hidden');
  menuBody.classList.toggle('hidden');
}
//Menu pages
function load(pageUrl) {
  const navBody = document.getElementById('container');
  const page = document.getElementById('pages');
  const menuBody = document.getElementById('menuBody');
  const menuBar = document.getElementById('navBar');
  const searchArea = document.getElementById('searchArea');
  if (pageUrl == 'home.html') {
    navBody.classList.add('hidden');
    page.classList.add('hidden'); 
    searchArea.classList.remove('hidden');
    console.log('/pages/'+pageUrl);
    setTimeout(function() {
      menuBar.classList.add('hidden');
      menuBody.classList.add('hidden');
    }, 500);
  } else {
    page.src = '/pages/'+pageUrl;
    navBody.classList.remove('hidden');
    page.classList.remove('hidden');
    searchArea.classList.add('hidden');
    console.log('/pages/'+pageUrl);
    setTimeout(function() {
      menuBar.classList.add('hidden');
      menuBody.classList.add('hidden');
    }, 500);
  }
}
//Theme
function theme() {
  var element = document.body;
  const icon = document.querySelector('.tIcon');
  const text = document.querySelector('.tText');
  element.classList.toggle('dark');
  icon.classList.toggle('bxs-sun');
  if (element.classList == 'dark') {
    text.innerHTML = 'Lite';
  } else {
  text.innerHTML = 'Dark';
  }
}
//Search
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
let searchLink = "https://google.com/search?q=";
searchBtn.addEventListener('click', () => {
  if (searchInput.value.length) {
    location.href = searchLink + searchInput.value;
  }
});
searchInput.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && searchInput.value.length) {
    location.href = searchLink + searchInput.value;
  }
});

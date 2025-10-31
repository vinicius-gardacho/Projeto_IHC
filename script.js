
const menuBtn = document.getElementById('menu-btn');
const menuLateral = document.getElementById('menu-lateral');
const fecharMenu = document.getElementById('fechar-menu');

menuBtn.addEventListener('click', () => {
  menuLateral.classList.toggle('ativo');
});


fecharMenu.addEventListener('click', () => {
  menuLateral.classList.remove('ativo');
});

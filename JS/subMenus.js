var openMenu = null;

function toggleSubMenu(menuId, subMenuId) {
  var subMenu = document.getElementById(subMenuId);
  if (subMenu.style.display === 'flex') {
    subMenu.style.display = 'none';
  } else {
    if (openMenu) {
      openMenu.style.display = 'none';
    }
    subMenu.style.display = 'flex';
    openMenu = subMenu;
  }
}

document.getElementById('menuJoias').addEventListener('mouseover', function() {
  toggleSubMenu('menuJoias', 'subMenuJoias');
});

document.getElementById('menuCasamento').addEventListener('mouseover', function() {
  toggleSubMenu('menuCasamento', 'subMenuCasamento');
});

document.getElementById('menuRelogios').addEventListener('mouseover', function() {
    toggleSubMenu('menuRelogios','subMenuRelogios');
  });

document.getElementById('menuAcessorios').addEventListener('mouseover', function() {
    toggleSubMenu('menuAcessorios','subMenuAcessorios');
  });
  
  document.getElementById('menuMasculino').addEventListener('mouseover', function() {
    toggleSubMenu('menuMasculino','subMenuMasculino');
  });

  document.getElementById('menuColecoes').addEventListener('mouseover', function() {
    toggleSubMenu('menuColecoes','subMenuColecoes');
  });

  document.getElementById('menuPresentes').addEventListener('mouseover', function() {
    toggleSubMenu('menuPresentes','subMenuPresentes');
  });
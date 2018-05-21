function presentation () {
  var valeurbouton = document.getElementById('clickici');
  var monarticle = document.getElementById('cachele')
  if (valeurbouton.value == 'Afficher la présentation') {
    valeurbouton.value = 'Masquer la présentation';
    monarticle.style.display = 'block';
  } else {
    valeurbouton.value = 'Afficher la présentation';
    monarticle.style.display = 'none';
  }
}
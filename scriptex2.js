javascript
function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.getElementById('res');

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Tente novamente');
  } else {
    var fsex = document.getElementsByName('radiosex');
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fsex[0].checked) {
      genero = 'homem';
      if (idade >= 0 && idade < 9) {
        // Criança
        img.setAttribute('src', 'menino.jpg');
      } else if (idade <= 21) {
        // Jovem
        img.setAttribute('src', 'jovemm.jpg');
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'homem.jpg');
      } else {
        // Idoso
        img.setAttribute('src', 'idoso.jpg');
      }
    } else if (fsex[1].checked) {
      genero = 'mulher';
      if (idade >= 0 && idade < 9) {
        // Criança
        img.setAttribute('src', 'menina.jpg');
      } else if (idade <= 21) {
        // Jovem
        img.setAttribute('src', 'jovemf.jpg');
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'mulher.jpg');
      } else {
        // Idosa
        img.setAttribute('src', 'idosa.jpg');
      }
    }

    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos gênero ${genero} com ${idade} anos`;
    res.appendChild(img); // Adicione a imagem ao resultado
  }
}
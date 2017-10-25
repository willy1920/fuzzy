function main() {
  murah();
  mahal();
  dekat();
  jauh();
  rule();
}

function murah(){
  var a = 50000;
  var b = 400000;

  var uang = document.getElementById('uang').value;
  var tmp;
  if(uang < a){
    tmp = 1;
  }
  else if (uang >= a && uang <= b) {
    tmp = (b - uang)/(b - a);
  }
  else {
    tmp = 0;
  }
  document.getElementById('murah').value = tmp;
}

function mahal() {
  var a = 200000;
  var b = 650000;

  var uang = document.getElementById('uang').value;
  var tmp;
  if(uang < a){
    tmp = 0;
  }
  else if (uang >= a && uang <= b) {
    tmp = (uang - a)/(b - a);
  }
  else {
    tmp = 1;
  }
  document.getElementById('mahal').value = tmp;
}

function dekat() {
  var a = 4;
  var b = 27;

  var jarak = document.getElementById('jarak').value;
  var tmp;
  if(jarak < a){
    tmp = 1;
  }
  else if (jarak >= a && jarak <= b) {
    tmp = (b - jarak)/(b - a);
  }
  else {
    tmp = 0;
  }
  document.getElementById('dekat').value = tmp;
}

function jauh() {
  var a = 17;
  var b = 40;

  var jarak = document.getElementById('jarak').value;
  var tmp;
  if(jarak < a){
    tmp = 0;
  }
  else if (jarak >= a && jarak <= b) {
    tmp = (jarak - a)/(b - a);
  }
  else {
    tmp = 1;
  }
  document.getElementById('jauh').value = tmp;
}

function rule(){
  var tmp, tmp2, tmp3, jumlahZ, jumlahAlpha;
  var harga;
  var jarak;
  var speed;
  jumlahZ = 0;
  jumlahAlpha = 0;
  for (var i = 1; i < 5; i++) {
    harga = document.getElementById(document.getElementById('hargaRule' + i).value).value;
    jarak = document.getElementById(document.getElementById('jarakRule' + i).value).value;
    speed = document.getElementById('speedRule' + i).value;
    tmp = min(harga, jarak);
    if (speed == lambat) {
      tmp2 = lambat(tmp);
    }
    else {
      tmp2 = cepat(tmp);
    }
    tmp3 = tmp * tmp2;

    jumlahAlpha = jumlahAlpha + parseFloat(tmp);
    jumlahZ = jumlahZ + tmp3;
    document.getElementById('kecepatan' + i).value = tmp2;
    document.getElementById('zAlpha' + i).value = tmp3;
  }
  var hasil = jumlahZ / jumlahAlpha;
  document.getElementById('hasil').value = hasil;
}

function lambat(c) {
  var a = 20;
  var b = 60;

  var tmp;
  tmp = b - ((b-a)*c);
  return tmp;
}

function cepat(c){
  var a = 40;
  var b = 80;
  var tmp;
  tmp = a + ((b-a) * c);
  return tmp;
}

function min(a, b){
  var tmp;
  if(a > b){
    tmp = b;
  }
  else {
    tmp = a;
  }
  return tmp;
}

function standardSum(a, b){
  var tmp;
  if(a > b){
    tmp = a;
  }
  else {
    tmp = b;
  }
}

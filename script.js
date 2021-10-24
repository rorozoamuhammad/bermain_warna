// menggunkan 1 warna 

const uwarna = document.getElementById('uwarna');
const body = document.getElementsByTagName('body')[0];

uwarna.onclick = function(){
	body.classList.toggle('biru-muda');
}






// menggunakan warna random

const bwarna = document.createElement('button');
const text = document.createTextNode('acak warna');
bwarna.appendChild(text);
bwarna.setAttribute("type", "button");
uwarna.after(bwarna);

bwarna.addEventListener('click', function(){
	const m = Math.round(Math.random() * 225 + 1);
	const h = Math.round(Math.random() * 225 + 1);
	const b = Math.round(Math.random() * 225 + 1);
	body.style.backgroundColor = ('rgb('+ m +', '+ h +', '+ b +')');
});






// menggunakan range

const mwarna = document.querySelector('input[name=mwarna]');
const mhijau = document.querySelector('input[name=mhijau]');
const mbiru = document.querySelector('input[name=mbiru]');

mwarna.addEventListener('input', function(){
	const M = mwarna.value;
	const H = mhijau.value;
	const B = mbiru.value;
	body.style.backgroundColor = ('rgb('+ M +', '+ H +', '+ B +')');
});

mhijau.addEventListener('input', function(){
	const M = mwarna.value;
	const H = mhijau.value;
	const B = mbiru.value;
	body.style.backgroundColor = ('rgb('+ M +', '+ H +', '+ B +')');
});

mbiru.addEventListener('input', function(){
	const M = mwarna.value;
	const H = mhijau.value;
	const B = mbiru.value;
	body.style.backgroundColor = ('rgb('+ M +', '+ H +', '+ B +')');
});

const h2 = document.createElement('h2');
const textH2 = document.createTextNode('Pilih warna sesuka anda');
h2.appendChild(textH2);
bwarna.after(h2);

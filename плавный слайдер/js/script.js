var btn_prev = document.querySelector('#gallery .buttons .prev'); //получаем по селектору кнопку пред.
var btn_next = document.querySelector('#gallery .buttons .next'); //получаем по селектору кнопку след.

var images = document.querySelectorAll('#gallery .photos img'); //получаем по селектору все изображения с ДОМ-а
var i = 0; //задаем переменной начальное значение 



btn_prev.onclick = function(){ //функция по событию клика
	images[i].className = ''; //прячем все imgs используя css - opacity: 0;
	i--;  //перебираем массив по убыванию использую декремент

	if (i < 0) {    //условие: не даем декременту зайти в минус, а снова перебираем изображения начиная с последнего в массиве
		i = images.length - 1; //начинаем перебор с конца массива 
	}

	images[i].className = 'showed'; // применяем css-стили класса .showed 
}

btn_next.onclick = function(){
	images[i].className = ''; //применяем css-cтили класса .showed используя инкремент
	i++; //перебираем каждое изображение по возрастанию используя инкремент

	if (i >= images.length) { //условие: если переменная больше-равна количества изображений, то показываем снова[0]
		i = 0;
	}
	images[i].className = 'showed'; //отображаем (css-свойствами opacity и transition: opacity 1s; установленными для класса .showed) изображение массива
}
const elBox = document.querySelector('.light');

elBox.querySelector('.js-one').style.background = 'red';
let swt = true;
let count = 5;
let carSpeed = 70;

setInterval(() => {
	elBox.querySelector('.box-time').textContent = count;

	if (count == 3) {
		elBox.querySelector('.js-two').style.background = 'yellow';
		elBox.querySelector('.js-three').style.background = '#ccc';
		elBox.querySelector('.box-time').style.color = 'yellow';

		const yelInterval = setInterval(() => {
			elBox.querySelector(
				'.light-img',
			).style.transform = `translateX(${carSpeed}%)`;
			carSpeed = carSpeed - 1;
		}, 100);

        setTimeout(()=>{
            clearInterval(yelInterval)
        }, 3000)
	}

	if (count == 0 && swt == true) {
        elBox.querySelector('.box-time').textContent = 5;
		elBox.querySelector('.js-one').style.background = '#ccc';
		elBox.querySelector('.js-two').style.background = '#ccc';
		elBox.querySelector('.js-three').style.background = 'green';
		elBox.querySelector('.box-time').style.color = 'green';

		const redInterval = setInterval(() => {
			elBox.querySelector(
				'.light-img',
			).style.transform = `translateX(${carSpeed}%)`;
			carSpeed = carSpeed - 1;
		}, 10);

		count = 5;
		swt = false;
        setTimeout(()=>{
            clearInterval(redInterval)
        },6000)
	}

	if (swt == false && count == 0) {
		carSpeed = 100;
        elBox.querySelector('.box-time').textContent = 5;

		elBox.querySelector('.js-one').style.background = 'red';
		elBox.querySelector('.js-two').style.background = '#ccc';
		elBox.querySelector('.box-time').style.color = 'red';
		count = 5;

		swt = true;
	}
	count--;
}, 1000);

selectSound()
sliderButtons()

function selectSound(){
	let soundOn = document.querySelector('.sound-on')
	let soundOff = document.querySelector('.sound-off')
	let sound = document.querySelector('.sound')

	sound.addEventListener('click', ()=>{
		soundOn.classList.toggle('sound-active')
		soundOff.classList.toggle('sound-active')
	})
	
	// functionality for the buttons ...
}

function sliderButtons() {
	const swiperEl = document.querySelector('swiper-container');
 	const buttonPrev = document.querySelector('.slider-prev');
 	const buttonNext = document.querySelector('.slider-next');

	 buttonPrev.addEventListener('click', () => {
		swiperEl.swiper.slidePrev();
	  });

	  buttonNext.addEventListener('click', () => {
		swiperEl.swiper.slideNext();
	  });
}

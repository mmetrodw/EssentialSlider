class EssentialSlider {
  constructor(options) {
    this.slideIndex = 0;
    this.slideWidth = document.querySelector(".dwes-wrapper").clientWidth;
    this.sliderWrapper = document.querySelector(".dwes-slider-wrapper");
    this.slides = document.getElementsByClassName("dwes-slide-wrapper");
    this.init();
    this.swipeCoordsX = null;
    this.swipeCoordsY = null;
    this.sliderWrapper.addEventListener('touchstart', this.handleTouchStart, false);
    this.sliderWrapper.addEventListener('touchmove', this.handlleTouchMove, false);
    this.sliderWrapper.addEventListener('touchend', this.handlleTouchEnd, false);
  }
  
  init() {
    console.log("test")
    console.log(this)
  }
  
  slideToLeft() {
    console.log("ee")
    this.sliderWrapper.style.left = -this.slideWidth * this.slideIndex + "px";
  }
  
  handleTouchStart(evt) {
    this.swipeCoordsX = evt.touches[0].clientX;
    this.swipeCoordsY = evt.touches[0].clientY;
  }
  
  handlleTouchMove(evt) {
    if(!this.swipeCoordsX || !this.swipeCoordsY) {
      return;
    }
    
    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;
    
    let xDiff = this.swipeCoordsX - xUp;
    let yDiff = this.swipeCoordsY - yUp;
    
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        console.log('Свайп вліво');
      } else {
        console.log('Свайп вправо');
      }
      console.log(xDiff, yDiff);
    }
    
    this.swipeCoordsX = null;
    this.swipeCoordsY = null;
  }
  
  handlleTouchEnd(evt) {
    if (!this.swipeCoordsX || !this.swipeCoordsY) {
      return;
    }
  
    let xUp = evt.changedTouches[0].clientX;
    let yUp = evt.changedTouches[0].clientY;
  
    let xDiff = this.swipeCoordsX - xUp;
    let yDiff = this.swipeCoordsY - yUp;
  
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        console.log('Свайп вліво');
      } else {
        console.log('Свайп вправо');
      }
      console.log(xDiff, yDiff);
    }
    console.log("end")
    this.swipeCoordsX = null;
    this.swipeCoordsY = null;
  }
}


new EssentialSlider();
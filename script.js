let road = document.querySelector('.road');
road.style.border = '2px solid gray';

let black = document.querySelectorAll('.black-stripe'); 
let white = document.querySelectorAll('.white-stripe'); 
let buttons = document.querySelectorAll('.buttons button'); 
let isGreen = document.querySelector('#green')
let isRed = document.querySelector('#red')
let lighterNotify = document.querySelector('.lighterNotify')
let button = document.querySelector('.go');
let container = document.querySelector('.container');
let modal = document.querySelector('.modal');
let up = document.querySelector('.up');
let down = document.querySelector('.down');
let submit_button = document.querySelector('.submit__button')
let form = document.querySelector('.form')
let light = document.querySelector('.circle')


black.forEach(block => block.style.backgroundColor = 'black');

const crosswalk = {
  modal: modal,
  container: container,
  form: form,
  white: white,

  close() {
    this.container.classList.remove('active');
    this.modal.classList.remove('active');
  },

  open() {
    this.container.classList.add('active');
    this.modal.classList.add('active');
  },

  changeTheLight(lightCircle) {

    if (lightCircle.previousElementSibling) {
        lightCircle.previousElementSibling.classList.remove('active')
    } else {
        lightCircle.nextElementSibling.classList.remove('active')
    }
    lightCircle.classList.add('active')
  },

  openModal() {
    this.container.classList.add('active')
    this.modal.classList.add('active')
    this.container.addEventListener('click', function(e) {
        if (!e.target.closest('.modal')) {
            crosswalk.close()
        }
    })
    let close_icon = document.querySelector('.header_close')
    close_icon.addEventListener('click', function() { crosswalk.close() })
  }
}

light.addEventListener('click', function(e) {
  crosswalk.changeTheLight(e.target);
});
// isGreen.addEventListener('click',()=>{

//   isGreen.classList.add('active');
//   isRed.classList.remove('active');

//   if (isGreen.style.backgroundColor=='green'){
//     isGreen.style.backgroundColor='grey'
//   }else{
//     isGreen.style.backgroundColor='green'
//     isRed.style.backgroundColor='grey'
//   }
// })

// isRed.addEventListener('click',()=>{

//   isGreen.classList.remove('active');
//   isRed.classList.add('active');

//   if (isRed.style.backgroundColor=='red'){
//     isRed.style.backgroundColor='grey'
//   }else{
//     isRed.style.backgroundColor='red'
//     isGreen.style.backgroundColor='grey'
//   }
// })


button.addEventListener('click', () => {
    if (isGreen.classList.contains('active')) {
      crosswalk.open();
  
      up.addEventListener('click', () => {
        up.classList.add('active');
        down.classList.remove('active');
      });
  
      down.addEventListener('click', () => {
        down.classList.add('active');
        up.classList.remove('active');
      });
  
      submit_button.addEventListener('click', (e) => {
        e.preventDefault();
        white.forEach(stripe => {
          stripe.innerHTML = '';
          let image = document.createElement('IMG');
          image.src = 'Upward.svg';
          if (down.classList.contains('active')) image.style.transform = 'rotate(180deg)';
          stripe.append(image);
        });
        crosswalk.close();
      });
   
    } else if (isRed.classList.contains('active')) {
      let timer = setInterval(() => {
        white.forEach(stripe => stripe.classList.toggle('red'));
      }, 300);
      setTimeout(()=>{clearTimeout(timer); },2000);
    }
    
  });


  form.addEventListener('click', (e) => {
    if (!e.target.closest('.modal'))
      crosswalk.close();
  });

  document.querySelector('.form')?.addEventListener('click', close);

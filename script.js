// Hover Start
function hover() {
    document.querySelector('.hover').classList.remove('d-none')
}
function hoverexit() {
    document.querySelector('.hover').classList.add('d-none')
}
function hover1() {
    document.querySelector('.hover1').classList.remove('d-none')
}
function hoverexit1() {
    document.querySelector('.hover1').classList.add('d-none')
}
function hover2() {
    document.querySelector('.hover2').classList.remove('d-none')
}
function hoverexit2() {
    document.querySelector('.hover2').classList.add('d-none')
}
function hover3() {
    document.querySelector('.hover3').classList.remove('d-none')
}
function hoverexit3() {
    document.querySelector('.hover3').classList.add('d-none')
}
function hover4() {
    document.querySelector('.hover4').classList.remove('d-none')
}
function hoverexit4() {
    document.querySelector('.hover4').classList.add('d-none')
}
function hover5() {
    document.querySelector('.hover5').classList.remove('d-none')
}
function hoverexit5() {
    document.querySelector('.hover5').classList.add('d-none')
}
// Hover End
window.addEventListener('scroll', function () {
    var a = scrollY
    if (a > 100) {
        document.querySelector('.mid-scroll').classList.remove('d-none')
    }
    else {
        document.querySelector('.mid-scroll').classList.add('d-none')
    }
})
function slide() {
    document.querySelector('body').classList.toggle('slide')
}

var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
  } );
  
  splide.mount();

  function active(){
    document.querySelector('.dropdown').classList.toggle('active')
  }
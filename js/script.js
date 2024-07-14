function showAnswer() {
  const buttons = document.querySelectorAll('.accordion__question');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      let answer = btn.nextElementSibling;
      
      if(answer.style.display === 'block') {
        answer.style.display = 'none';
        answer.setAttribute('aria-expanded', 'false');
        btn.firstElementChild.setAttribute('src', 'assets/images/icon-plus.svg');
      } else {
        answer.style.display = 'block';
        answer.setAttribute('aria-expanded', 'true');
        btn.firstElementChild.setAttribute('src', 'assets/images/icon-minus.svg');
      }
    })
  })
}

function showAnimation() {
  const tl = gsap.timeline();

  tl.from('.container', {duration: .6, y: -50, ease: 'power1.in', opacity: 0});
  tl.from('.title', {duration: .6, y: 25, ease: 'power1.in', opacity: 0});
  tl.from('.accordion li', {duration: .6, y: 25, ease: 'power1.in', opacity: 0, stagger: .6});
  tl.from('.attribution', {duration: .6, y: 25, ease: 'power1.in', opacity: 0});
}

showAnswer();
showAnimation();
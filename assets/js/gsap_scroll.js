// GSAPで一部横スクロール

gsap.registerPlugin(ScrollTrigger);
const wrapper = document.getElementById('wrapper');
const container = document.getElementById('container');

gsap.to(container, {
  x: () => -(container.clientWidth - wrapper.clientWidth) + 'px',
  ease: Power0.easeNone,
  scrollTrigger: {
    trigger: wrapper,
    start: 'top top',
    end: () => {
      if (container.clientWidth > wrapper.clientWidth) {
        return '+=' + (container.clientWidth - wrapper.clientWidth);
      } else {
        return '+=' + 0;
      }
    },
    pin: true,
    anticipatePin: 1,
    scrub: 0,
    invalidateOnRefresh: true
  }
});

window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});


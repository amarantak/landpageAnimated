const hero = document.querySelector('.hero');

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%" })
    .fromTo(hero, 1.2, { width: '100%' }, { width: '80%' }
    );
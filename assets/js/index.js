// @ts-nocheck

let nav = document.querySelector(".nav--left");

let col = document.querySelector(".col");
let calEvents = document.querySelectorAll(".event");
let clck = document.querySelectorAll(".click");
let modal = document.querySelector(".modal");
counter = 0;
calEvents.forEach((calEvent, i) => {
  calEvent.addEventListener("click", () => {
    calEvents.forEach(c => {
      c.classList.remove("active");
    });
    calEvents[i].classList.add("active");
  });
});

clck.forEach((c, i) => {
  c.addEventListener("click", _ => {
    clck.forEach(cl => {
      cl.classList.remove("active");
    });
    c.classList.add("active");
  });
});

//Open/close modal mechanism

imgs.forEach((img, i) => {
  img.addEventListener("click", _ => {
    modal.classList.add("visible");
    main.classList.add(`blurred`);
    navleft.classList.add(`blurred`);
  });
});

modal.addEventListener('click', _ => {
  modal.classList.remove('visible');
  main.classList.remove(`blurred`);
  navleft.classList.remove(`blurred`);
})
//Show hide footer
let fObserver;
let fOptions = {
  rootMargin: '0px',
  treshold: 1.0
}
let footer = document.querySelector(`.footer`);
let navleft = document.querySelector(`.nav--left`);
let main = document.querySelector(`.main`);

function showFooter(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`is inter`);
      footer.classList.add(`slide-up`);
      footer.classList.remove(`accent`);
    } else {
      console.log(`not`);
      footer.classList.remove(`slide-up`);
      footer.classList.add(`accent`);
    }
  });
}
fObserver = new IntersectionObserver(showFooter, fOptions);
fObserver.observe(document.querySelector(`.bridge`));
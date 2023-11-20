const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

var menubar = document.querySelector(".menubar");
var menu = document.querySelector(".menu");

menubar.addEventListener("click", () => {
  menu.classList.toggle("slide");
});

let mm = gsap.matchMedia();

mm.add("(min-width:800px)", () => {

gsap.to("#main #hero_section .content .item2", {
  duration:2,
 
  y: -200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#main #hero_section .content .item2",
    start: "center center",
    end: "center 30%",
    // markers: true,
    scrub: 2,
  },
});

gsap.from("#main #about .content p", {
  duration: 2,
 
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#main #about .content p",
    start: "top 100%",
    end: "bottom center",

    scrub: 1,
  },
});

gsap.from("#main #about .content #trending .img_content .item ", {
  duration: 2,
 
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#main #about .content #trending .img_content .item ",
    start: "top 100%",
    end: "bottom 70%",
    stagger: {
      each: 1,
      //    from: "random",
    },
    // markers: true,

    scrub: 1,
  },
});

gsap.from("#main #lookgood .content .item1", {
  duration: 2,
 
  x: -200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#main #lookgood .content .item1",
    start: "top 100%",
    end: "bottom 70%",
    stagger: {
      each: 1,
      //    from: "random",
    },
    // markers: true,

    scrub: 1,
  },
});

gsap.from("#main #lookgood .content .item5", {
  duration: 2,
 
  x: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#main #lookgood .content .item5",
    start: "top 100%",
    end: "bottom 70%",
    stagger: {
      each: 1,
      //    from: "random",
    },
    // markers: true,

    scrub: 1,
  },
});

gsap.from("#main #Frequently .Frequently_content .card .item ", {
  duration: 2,
 
  y: 200,
  opacity: 0,
  stagger: {
     each: 0.3,
     
   },
  scrollTrigger: {
    trigger: "#main #Frequently .Frequently_content .card .item ",
    start: "top 100%",
    end: "bottom 70%",
    // markers: true,

    scrub: 1,
  },
});

gsap.from("#main #testimonials .Frequently_content .card .item ", {
  duration: 2,
 
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#main #testimonials .Frequently_content .card .item ",
    start: "top 100%",
    end: "bottom 70%",
    // markers: true,
    
    scrub: 1,
},
stagger: {
   each: 0.2,
   from: "random",
 },
});

gsap.from("#main #Subscribe .sub_content h1", {
  duration: 1,
 
  y: -200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#main #Subscribe .sub_content h1",
    start: "top 90%",
    end: "60% 30%",
    // markers: true,
    
    scrub: 2,
},

});

gsap.from("#main #footer .footer_content .item p  ", {
  duration: 1,
 
  x: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#main #footer .footer_content .item p ",
    start: "top 90%",
    end: "60% 70%",
    // markers: true,
    
    scrub: 1,
},
stagger: {
   each: 2,
   from: "random",
 },
});

});


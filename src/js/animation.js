// import { gsap } from "gsap/all";
// import { ScrollTrigger } from "gsap/all";
// import LocomotiveScroll from "locomotive-scroll";

// export let logoAnim = () => {
//     gsap.to(".wrap__word", { display: "none", delay: 1 });
//     gsap.to(".wrap__word-anim", { xPercent: -50, yPercent: -50, left: "50%", top: "50%", delay: 1, duration: 5 });
//     gsap.fromTo(".title-sub-text1", { visibility: "hidden", opacity: 0, xPercent: -100 }, { visibility: "visible", opacity: 1, xPercent: 0, duration: 0.5, delay: 1.5, repeat: 1, yoyo: true });
//     gsap.fromTo(".title-sub-text2", { visibility: "hidden", opacity: 0, xPercent: -100 }, { visibility: "visible", opacity: 1, xPercent: 0, duration: 0.5, delay: 2 });
//     gsap.fromTo(".title-sub-text3", { visibility: "hidden", opacity: 0, xPercent: -100 }, { visibility: "visible", opacity: 1, xPercent: 0, duration: 0.5, delay: 2.5 });
// };

// export const scroller = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true,
// });

// export function Anim() {
//     gsap.registerPlugin(ScrollTrigger);

//     scroller.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(".container", {
//         scrollTop(value) {
//             return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return {
//                 left: 0,
//                 top: 0,
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//             };
//         },
//     });

//     ScrollTrigger.create({
//         trigger: ".image-mask",
//         scroller: ".container",
//         start: "top+=30% 50%",
//         end: "bottom-=40% 50%",
//         animation: gsap.to(".image-mask", { backgroundSize: "120%" }),
//         scrub: 2,
//         markers: true,
//     });

//     ScrollTrigger.addEventListener("refresh", () => scroller.update());

//     ScrollTrigger.refresh();
// }

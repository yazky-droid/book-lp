window.addEventListener("scroll", () => {

    const scrollY = window.scrollY

    const cloud1 = document.querySelector(".cloud-1")
    const cloud2 = document.querySelector(".cloud-2")

    cloud1.style.transform =
        `translateY(${scrollY * 0.2}px)`

    cloud2.style.transform =
        `translateY(${scrollY * 0.35}px)`

})

/* =========================
   REVEAL ON SCROLL
========================= */

const reveals =
    document.querySelectorAll(".reveal")

window.addEventListener("scroll", revealOnScroll)

function revealOnScroll() {

    reveals.forEach((element) => {

        const windowHeight =
            window.innerHeight

        const elementTop =
            element.getBoundingClientRect().top

        const revealPoint = 120

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active")

        }

    })

}

revealOnScroll()

/* =========================
   LADDER PARALLAX
========================= */

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY

    const ladder =
        document.querySelector(".moving-ladder")

    ladder.style.transform =
        `translateX(-50%) translateY(${scrollY * -0.15}px)`

})

/* =========================
   FLOATING CARD EFFECT
========================= */

const cards =
    document.querySelectorAll(".emotion-card")

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect()

        const x =
            e.clientX - rect.left

        const y =
            e.clientY - rect.top

        const centerX =
            rect.width / 2

        const centerY =
            rect.height / 2

        const rotateX =
            ((y - centerY) / 20)

        const rotateY =
            ((centerX - x) / 20)

        card.style.transform =
            `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
      `
    })

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            `rotateX(0) rotateY(0)`
    })

})

/* =========================
   PARTICLES
========================= */

const particles =
    document.querySelector(".particles")

for (let i = 0; i < 40; i++) {

    const particle =
        document.createElement("span")

    particle.classList.add("particle")

    particle.style.left =
        Math.random() * 100 + "%"

    particle.style.top =
        Math.random() * 100 + "%"

    particle.style.animationDelay =
        Math.random() * 5 + "s"

    particle.style.animationDuration =
        4 + Math.random() * 6 + "s"

    particles.appendChild(particle)
}

/* =========================
   LENIS SMOOTH SCROLL
========================= */

const lenis = new Lenis({

    duration: 1.2,

    smoothWheel: true,

    smoothTouch: false,

})

function raf(time) {

    lenis.raf(time)

    requestAnimationFrame(raf)

}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger)

/* =========================
   HERO INTRO ANIMATION
========================= */

gsap.from(".hero h1", {

    y: 100,
    opacity: 0,

    duration: 1.4,

    ease: "power4.out"

})

gsap.from(".hero p", {

    y: 60,
    opacity: 0,

    duration: 1.2,

    delay: 0.3,

    ease: "power3.out"

})

gsap.from(".book", {

    scale: 0.8,
    opacity: 0,

    duration: 1.5,

    delay: 0.5,

    ease: "power4.out"

})

/* =========================
   PARALLAX CLOUDS
========================= */

gsap.to(".cloud-1", {

    y: 300,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",
        end: "bottom top",

        scrub: true

    }

})

gsap.to(".cloud-2", {

    y: 500,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",
        end: "bottom top",

        scrub: true

    }

})

/* =========================
   LADDER MOTION
========================= */

gsap.to(".moving-ladder", {

    y: -400,

    ease: "none",

    scrollTrigger: {

        trigger: ".climax",

        start: "top bottom",
        end: "bottom top",

        scrub: true

    }

})

/* =========================
   STAGGER TEXT ANIMATION
========================= */

gsap.utils.toArray(".reveal").forEach((element) => {

    gsap.from(element, {

        y: 120,

        opacity: 0,

        duration: 1.4,

        ease: "power4.out",

        scrollTrigger: {

            trigger: element,

            start: "top 85%",

        }

    })

})

/* =========================
   PARTICLE PARALLAX
========================= */

gsap.to(".particles", {

    y: -120,

    scrollTrigger: {

        trigger: ".final-section",

        start: "top bottom",

        end: "bottom top",

        scrub: true

    }

})

const form = document.querySelector(".order-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const wa = form.querySelectorAll("input")[1].value;

    const message = `Halo, saya ${name} ingin order buku Langkah Yang Terlalu Jauh.`;

    window.open(`https://wa.me/628212225506?text=${encodeURIComponent(message)}`);
});
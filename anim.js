
document.addEventListener("DOMContentLoaded", () => {
    
    gsap.registerPlugin(ScrollTrigger);

    const tlHero = gsap.timeline();

    tlHero.from("header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    tlHero.from(".badges .badge", {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.5");

    tlHero.from(".hero-content h1", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power4.out"
    }, "-=0.6");

    tlHero.from(".hero-content .subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
    }, "-=0.7");

    tlHero.from(".cta-btn", {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: "back.out(2)"
    }, "-=0.5");


    gsap.utils.toArray(".section h2").forEach(heading => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    gsap.from(".team-card", {
        scrollTrigger: {
            trigger: ".team-grid",
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.15, 
        duration: 0.8,
        ease: "power3.out"
    });

    gsap.utils.toArray(".table-container").forEach(table => {
        gsap.from(table, {
            scrollTrigger: {
                trigger: table,
                start: "top 85%",
            },
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out"
        });
    });

    gsap.from(".software-block:nth-child(1)", {
        scrollTrigger: {
            trigger: ".software-container",
            start: "top 80%",
        },
        opacity: 0,
        x: -40,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".software-block:nth-child(2)", {
        scrollTrigger: {
            trigger: ".software-container",
            start: "top 80%",
        },
        opacity: 0,
        x: 40,
        duration: 1,
        ease: "power2.out"
    });

    gsap.utils.toArray(".styled-list").forEach(list => {
        gsap.from(list.querySelectorAll("li"), {
            scrollTrigger: {
                trigger: list,
                start: "top 85%",
            },
            opacity: 0,
            x: -20,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.out"
        });
    });
});
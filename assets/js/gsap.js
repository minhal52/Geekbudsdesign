// Animation for the hero title
gsap.from(".hero-content .hero-title", {
    y: -100, // Start position above the current position
    opacity: 0,
    delay: 1,
    duration: 2,
    ease: "power4.out"
});

// Animation for the hero description
gsap.from(".hero-content .hero-description", {
    y: 100, // Start position below the current position
    opacity: 0,
    delay: 1,
    duration: 2,
    ease: "power4.out"
});

// Animation for the explore buttons to come from below
gsap.from(".hero-buttons", {
    y: 50, // Start position below the current position
    opacity: 0,
    delay: 1, // Optional delay to sync with other animations
    duration: 2,
    ease: "power4.out"
});
// Zoom-in effect for the About Us heading while scrolling
gsap.from(".about h1", {
    scale: 0.5,                // Start from half size (zoomed out)
    opacity: 0,                // Start from invisible
    duration: 1,               // Duration of the zoom effect
    ease: "power4.out",        // Easing function for smoothness
    scrollTrigger: {
        trigger: ".about",      // Trigger the animation when the .about section comes into view
        start: "top 80%",       // Start the animation when the top of the .about section is at 80% of the viewport height
        end: "top 60%",         // Optional: define where the animation ends
        scrub: true,            // Smooth animation that follows the scroll
    }
});


// Animate the about image with zoom effect
gsap.from(".about .about-image", {
    y: -100,                 // Starts from 100px above its final position
    scale: 0,                // Starts scaled down to 0
    opacity: 0,              // Fades in from opacity 0
    duration: 2,             // Duration of the animation
    scrollTrigger: {
        trigger: ".about .about-image",
        scroller: "body",
        start: "top 60%",    // Start animation when the top of the image reaches 60% of the viewport height
        end: "top 70%",      // Optional: extend the animation endpoint
        scrub: true,         // Allows for smooth animation that follows the scroll
    }
});

gsap.from(".about .about-content", {
    y: 50,                   // Reduce the starting y position for a subtler effect
    scale: 0.5,              // Adjust the scale to show more gradual zoom
    opacity: 0.5,            // Set partial opacity for immediate visibility
    duration: 1.2,           // Slightly shorter duration for a quicker effect
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".about .about-content",
        scroller: "body",
        start: "top 80%",     // Trigger the animation earlier for more immediate visibility
        end: "top 60%",       // Allows the animation to finish smoothly
        scrub: 0.3,           // Faster scrub for quicker response
    }
});



gsap.from(".service h1", {
    y: 150,                   // Start 150px below its final position
    scale: 0.5,              // Start scaled down to create a zoom effect
    opacity: 0,               // Start invisible
    duration: 2,              // Duration of the animation
    ease: "power2.out",       // Smoother easing
    scrollTrigger: {
        trigger: ".service",   // The parent container that triggers the animation
        scroller: "body",      // Scroll container (use "body" for the whole page)
        start: "top 70%",      // When the top of the .service section reaches 70% of the viewport height
        end: "top 90%",        // Optional: where the animation ends
        scrub: 0.5,            // Less scrub for a more responsive feel
        // markers: true        // Optional: add markers for debugging
    }
});


// Animation for cards
gsap.utils.toArray(".card").forEach((card, index) => {
    gsap.from(card, {
        scale: 0.5,            // Start scaled down to create a zoom effect
        y: 50,                 // Start from 50px below
        opacity: 0,            // Start invisible
        duration: 0.5,         // Duration of the animation
        delay: index * 0.1,    // Stagger the animations
        ease: "power2.out",    // Smoother easing
        scrollTrigger: {
            trigger: card,     // Each card triggers its own animation
            scroller: "body",  // Use the body as the scroll container
            start: "top 80%",   // When the top of the card reaches 80% of the viewport height
            end: "top 70%",     // Optional: where the animation ends
            scrub: 0.5,         // Smooth scroll effect
            // markers: true     // Optional: for debugging
            onEnter: () => {
                gsap.set(document.body, { overflowY: "hidden" }); // Hide scrollbar when entering
            },
            onLeaveBack: () => {
                gsap.set(document.body, { overflowY: "auto" }); // Show scrollbar when leaving
            },
            onEnterBack: () => {
                gsap.set(document.body, { overflowY: "hidden" }); // Hide scrollbar again when re-entering
            },
            onLeave: () => {
                gsap.set(document.body, { overflowY: "auto" }); // Show scrollbar when leaving
            },
        }
    });
});

// Initialize the GSAP animation for the clients heading
gsap.from(".clients-heading", {
    y: -100,              // Start from 100px above its final position
    scale: 0.5,           // Start from scale 0.5 (half size, zoomed out)
    opacity: 0,           // Start from invisible
    duration: 2,          // Duration of the animation
    ease: "power2.out",   // Easing function for smoothness
    delay: 0.2,           // Optional: add a delay of 0.2 seconds before the animation starts
    scrollTrigger: {
        trigger: ".clients-section", // Trigger the animation when this section comes into view
        scroller: "body",           // Use body for scrolling
        start: "top 80%",           // Start the animation when the top of the section is at 80% of the viewport height
        end: "top 90%",             // Optional: define where the animation ends
        scrub: true,                // Smooth animation that follows the scroll
        // markers: true              // Uncomment to see the markers for debugging
    }
});
// Initialize the GSAP animation for the contact form container
gsap.from(".form-main", {
    scale: 0.5,               // Start from scale 0.5 (zoomed out)
    opacity: 0,               // Start from invisible
    duration: 1.5,            // Duration of the animation
    ease: "power2.out",       // Easing function for smoothness
    scrollTrigger: {
        trigger: ".form-main", // Trigger the animation when this section comes into view
        scroller: "body",      // Use body for scrolling
        start: "top 80%",      // Start the animation when the top of the section is at 80% of the viewport height
        end: "top 60%",        // End the animation when the top of the section reaches 60%
        scrub: true,           // Smooth animation that follows the scroll
        // markers: true         // Uncomment to see the markers for debugging
    }
});
// Fade-in effect for the footer container
gsap.from(".footer-container", {
    opacity: 0,               // Start from invisible
    duration: 2,              // Duration of the fade effect
    ease: "power2.out",       // Easing function for smoothness
    scrollTrigger: {
        trigger: "#footer",    // Trigger the animation when the footer comes into view
        start: "top 80%",      // Start the animation when the top of the footer is at 80% of the viewport height
        end: "top 60%",        // Optional: define where the animation ends
        scrub: true            // Smooth animation that follows the scroll
    }
});

// Fade-in effect for footer contents
gsap.from(".footer-container > div, .footer-container > ul", {
    opacity: 0,               // Start from invisible
    duration: 1.5,            // Duration of the fade effect
    stagger: 0.3,             // Stagger the start of each animation
    ease: "power2.out",       // Easing function for smoothness
    scrollTrigger: {
        trigger: "#footer",    // Trigger the animation when the footer comes into view
        start: "top 80%",      // Start the animation when the top of the footer is at 80% of the viewport height
        end: "top 60%",        // Optional: define where the animation ends
        scrub: true            // Smooth animation that follows the scroll
    }
});

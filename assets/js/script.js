 // show menu

 const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    toggle.addEventListener('click', ()=>{
        // add show menu class to nav menu
        nav.classList.toggle('show-menu')
        // add show icon to show and hide menu icon

        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle', 'nav-menu')
// =================================================== =======================================


    // pagiantion
    document.addEventListener('DOMContentLoaded', function () {
        const cardsContainer = document.querySelector('.cards');
        const cards = document.querySelectorAll('.card');
        const paginationContainer = document.querySelector('.pagination');
        const cardCount = cards.length;
        let activeIndex = 0;
    
        // Create pagination dots
        for (let i = 0; i < cardCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('pagination-dot');
            if (i === 0) dot.classList.add('active');
            paginationContainer.appendChild(dot);
        }
    
        const dots = document.querySelectorAll('.pagination-dot');
    
        // Update active dot based on scroll position
        cardsContainer.addEventListener('scroll', function () {
            const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginRight, 10); // Width of card plus gap
            const newIndex = Math.round(cardsContainer.scrollLeft / cardWidth);
            
            if (newIndex !== activeIndex) {
                dots[activeIndex].classList.remove('active');
                if (newIndex < dots.length) {
                    dots[newIndex].classList.add('active');
                    activeIndex = newIndex;
                }
            }
        });
    });
  
    // =======================================================
    
  
// Function to enable or disable the Inquiry button based on form validity
function toggleButtonState() {
    const form = document.getElementById('contactForm');
    const button = document.getElementById('inquiryButton');
    button.disabled = !form.checkValidity();
}

// Attach event listeners to form inputs
document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
    input.addEventListener('input', toggleButtonState);
});

// Function to send data to WhatsApp
function sendToWhatsApp() {
    // Get form data
    const fullName = document.getElementById('full_name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone_number').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Construct the WhatsApp message with line breaks
    const messageText = ` Hello! I have an Inquiry here are my details ..\nFull Name: ${fullName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nService: ${service}\nMessage: ${message}`;

    // Open WhatsApp with pre-filled message
    const phoneNumberFormatted = '9632781673';
    const url = `https://wa.me/${phoneNumberFormatted}?text=${encodeURIComponent(messageText)}`;

    window.open(url, '_blank');
}


// Initial button state check
toggleButtonState();



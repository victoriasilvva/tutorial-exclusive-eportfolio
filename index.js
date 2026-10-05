const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');
let isModalOpen = false;
let isDarkMode = false;
const scaleFactor = 1 / 20;



//background shapes on page move around w/ the cursor's movements by the user
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        console.log(isOdd);
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

//submit form data to emailjs and show the appropriate overlay for the loading and success states. Error message is displayed if the email service is unavailable.
function contact(event) {
    // prevent the default behavior of the form submission
    event.preventDefault();
    console.log('this worked')
    // show the appropriate overlay for the loading and success states
    loading.classList += " modal__overlay--visible";


    // emailjs.sendForm('service_b9ruf8d',
    //     'template_dfdtpad',
    //     event.target,
    //     'XGEJ_-SpB-LmecGAK'
    // )
    setTimeout(() => {
        try {
            throw new Error("Simulated EmailJS network failure");
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
            console.log('it worked')
        }

        catch (error) {
            console.log("Caught simulated error:", error.message);
            alert("the email service is temporarily unavailable. Please contact me directly at: vickiems16@gmail.com");
            loading.classList.remove("modal__overlay--visible");
        }
    }, 1000);
}


function toggleModal() {
    // toggle the modal open and closed
    if (isModalOpen === false) {
        document.body.classList += " modal--open";
        isModalOpen = true;
    }
    else {
        document.body.classList.remove("modal--open");
        isModalOpen = false;
    }
}

//toggle the dark/light mode of the entire page
function toggleContrast() {
    if (isDarkMode === false) {
        document.body.classList.add("dark-mode");
        isDarkMode = true;
    }
    else {
        document.body.classList.remove("dark-mode");
        isDarkMode = false;
    }
}
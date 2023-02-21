
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{ 
    navbar.classList.remove('active');
}

// Disable past date
const checkInInput = document.getElementById('date-checkin');
const checkOutInput = document.getElementById('date-checkout');

var today = new Date().toISOString().split('T')[0];

checkInInput.setAttribute('min', today);
checkOutInput.setAttribute('min', today);


checkInInput.addEventListener('input', (event) => {
  const selectedDate = new Date(event.target.value);
  const minDate = new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000);
  checkOutInput.min = minDate.toISOString().split('T')[0];
});



// get copyright year

const year = document.getElementById('year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;



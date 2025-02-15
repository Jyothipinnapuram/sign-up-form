const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

// Toggle between Sign In and Sign Up Forms
signInBtn.addEventListener('click', () => {
    signInForm.classList.add('active');
    signUpForm.classList.remove('active');
});

signUpBtn.addEventListener('click', () => {
    signUpForm.classList.add('active');
    signInForm.classList.remove('active');
});

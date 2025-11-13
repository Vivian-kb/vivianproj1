const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const formTitle = document.getElementById('form-title');

// Switch between login and signup
showSignup.addEventListener('click', () => {
  loginForm.style.display = 'none';
  signupForm.style.display = 'flex';
  formTitle.textContent = 'Sign Up';
});

showLogin.addEventListener('click', () => {
  signupForm.style.display = 'none';
  loginForm.style.display = 'flex';
  formTitle.textContent = 'Login';
});

// Fake signup (store data in localStorage)
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  localStorage.setItem('user', JSON.stringify({ username, password }));
  alert('Account created! Please login.');
  signupForm.reset();
  showLogin.click();
});

// Fake login check
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && username === user.username && password === user.password) {
    alert('Login successful!');
    window.location.href = 'home.html';
  } else {
    alert('Invalid username or password.');
  }
});

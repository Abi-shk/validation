const form = document.getElementById("myForm");

const privacyPolicyCheckbox = document.getElementById("privacyPolicyCheckbox");

const nameErr = document.getElementById("nameErr");
const lstnameErr = document.getElementById("lstnameErr");
const pswErr = document.getElementById("pswErr");
const cpswErr = document.getElementById("cpswErr");
const phoneErr = document.getElementById("phoneErr");
const dobErr = document.getElementById("dobErr");


let nameValid = false;
let mailValid = false;
let phoneValid = false;
let dateValid = false;
let passValid = false;
let pValid = false;

document.getElementById("fname").addEventListener('blur', (e) => {
  const fname = document.getElementById("fname");
  const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(fname.value)) {
    nameErr.textContent = "*Name should contain only alphabet.";
    fname.classList.add('invalid');
    nameValid = false
    document.getElementById("nameErr").style.display = "block";
    e.preventDefault()
  }

  else if (fname.value === "" || fname.value.length < 3) {
    nameErr.textContent = "*Please add atleast 3 alphabets";
    fname.classList.add('invalid');
    nameValid = false
    document.getElementById("nameErr").style.display = "inline-block";
    e.preventDefault()

  }
  else {
    nameValid = true
    if (mailValid && nameValid && phoneValid && dateValid && passValid && pValid) {
      document.getElementById("btn").disabled = false;
    }
    nameErr.textContent = "";
    fname.classList.remove('invalid');
  }

});

document.getElementById("email").addEventListener('blur', (e) => {
  const email = document.getElementById("email");
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email.value)) {
    emailErr.textContent = "*Please enter a valid mail!";
    email.classList.add('invalid');
    mailValid = false
    document.getElementById("emailErr").style.display = "block";
    e.preventDefault()
  }
  else {
    mailValid = true
    if (mailValid && nameValid && phoneValid && dateValid && passValid && pValid) {
      document.getElementById("btn").disabled = false;
    }
    emailErr.textContent = "";
    email.classList.remove('invalid');
  }

});

document.getElementById("psw").addEventListener('blur', (e) => {
  const psw = document.getElementById("psw");
  const pswRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!pswRegex.test(psw.value)) {
    pswErr.textContent = "*Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    psw.classList.add('invalid');
    document.getElementById("pswErr").style.display = "block";
    pValid = false
    e.preventDefault()
  }
  else {
    pValid = true
    if (mailValid && nameValid && phoneValid && dateValid && passValid && pValid) {
      document.getElementById("btn").disabled = false;
    }
    pswErr.textContent = "";
    psw.classList.remove('invalid');
  }

});

document.getElementById("cpsw").addEventListener('blur', (e) => {
  const cpsw = document.getElementById("cpsw");
  const psw = document.getElementById("psw");
  if (psw.value !== cpsw.value) {
    cpswErr.textContent = "*Password does not match!";
    cpsw.classList.add('invalid');
    passValid = false
    document.getElementById("cpswErr").style.display = "block";
    e.preventDefault()
  }
  else {
    passValid = true
    if (mailValid && nameValid && phoneValid && dateValid && passValid && pValid) {
      document.getElementById("btn").disabled = false;
    }
    cpswErr.textContent = "";
    cpsw.classList.remove('invalid');
  }

});

document.getElementById("phone").addEventListener('blur', (e) => {
  const phoneRegex = /^[0-9]{10}$/;
  const phone = document.getElementById("phone");
  if (!phoneRegex.test(phone.value)) {
    phoneErr.textContent = "*Enter a valid 10 digit phone number!";
    phone.classList.add('invalid');
    phoneValid = false
    document.getElementById("phoneErr").style.display = "block";
    e.preventDefault();
  }
  else {
    phoneValid = true
    if (mailValid && nameValid && phoneValid && dateValid && passValid && pValid) {
      document.getElementById("btn").disabled = false;
    }
    phoneErr.textContent = "";
    phone.classList.remove('invalid');
  }
});


document.getElementById("dob").addEventListener('blur', (e) => {
  const dobDate = new Date(dob.value);
  const currentDate = new Date();
  if (dobDate >= currentDate) {
    dobErr.textContent = "*Date of birth should be in the past!";
    dob.classList.add('invalid');
    dateValid = false
    document.getElementById("dobErr").style.display = "block";
    e.preventDefault();
  } else {
    dateValid = true
    if (mailValid && nameValid && phoneValid && dateValid && passValid && pValid) {
      document.getElementById("btn").disabled = false;
    }
    dobErr.textContent = "";
    dob.classList.remove('invalid');
  }
});
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault()
  const fname = document.getElementById("fname");
  const lstname = document.getElementById("lstname");
  const cpsw = document.getElementById("cpsw");
  const phone = document.getElementById("phone");
  const dob = document.getElementById("dob");
  let data = {
    fname: fname.value,
    lname: lstname.value,
    mobile: phone.value,
    password: cpsw.value,
    dob: dob.value
  }
  localStorage.setItem('userData', JSON.stringify({
    fname: fname.value,
    lname: lstname.value,
    mobile: phone.value,
    password: cpsw.value,
    dob: dob.value
  }))
  window.location.href = "verification.html";

})
let time = document.getElementById("reload")
let seconds = 300;
setInterval(() => {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  if (minutes == 0 && seconds == 0) {
    clearInterval();
    location.reload();
  }
  seconds--
  time.innerText = `0${minutes}:${remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds}`
}, 1000);

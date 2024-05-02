
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
Form.addEventListener("submit", (e) => {
  e.preventDefault();



const eye = document.querySelector(".formInput i.fa-eye");

eye.onclick = () => {
  if (password.type === "password") {
    password.type = "text";
    eye.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    password.type = "password";
    eye.classList.replace("fa-eye-slash", "fa-eye");
  }
};

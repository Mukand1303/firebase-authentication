import { auth } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
      const user = res.user;
      console.log(user);
      window.location = "login.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

// @ts-nocheck
const card = document.querySelector(".inner-box");
const signupForm = document.getElementById("signup");
const loginForm = document.getElementById("login");

const baseURL = "https://api--v1.herokuapp.com/api/e-commerce/v1";
function rotateForm(face) {
  face === "login"
    ? (card.style.transform = "rotateY(-180deg)")
    : (card.style.transform = "rotateY(0deg)");
}
loginForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(loginForm);
  console.log("logged in ", formData);
  const url = baseURL + "/auth/login";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { mode: "cors", credentials: "include", withCredentials: true },
      body: formData,
    });
    const text = await response.text();
    console.log(JSON.parse(text));
  } catch (error) {
    console.log(error);
  }
});
signupForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(signupForm);
  console.log("registered", JSON.stringify(...formData));
  const url = baseURL + "/auth/register";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { mode: "cors", credentials: "include" },
      body: formData,
    });
    const text = await response.text();
    console.log(JSON.parse(text));
  } catch (error) {
    console.log(error);
  }
});

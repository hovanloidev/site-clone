const userBtn = document.querySelector(".header-service__user");
const userMenu = document.querySelector(".user-header");

userBtn.addEventListener("click", () => {
  userMenu.classList.toggle("show");
});

const containers = [...document.querySelectorAll(".letter-outer")];

containers.forEach(container => {
  const letter = container.querySelector(".letter");

  letter.addEventListener("animationend", e => {
    console.log("animationend");
    letter.classList.remove("animate");
  });

  container.addEventListener("mouseenter", () => {
    letter.classList.add("animate");
  });
});

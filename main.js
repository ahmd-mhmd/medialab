const btn = document.getElementById("discover-btn");
btn.addEventListener("click", () => {
  window.scrollTo(0, window.innerHeight);
});

btn.addEventListener("mousemove", (e) => {
  btn.setAttribute(
    "style",
    `--grad-percent: ${(e.offsetX / btn.clientWidth) * 100}%`
  );
});

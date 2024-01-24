document.addEventListener("DOMContentLoaded", function () {
  const fixedCircle = document.getElementById("fixed-circle");
  const mouseTrail = document.getElementById("mouse-trail");

  document.addEventListener("mousemove", function (e) {
    moveFixedCircle(e.clientX, e.clientY);
    createMouseTrail(e.clientX, e.clientY);
  });

  function moveFixedCircle(x, y) {
    fixedCircle.style.left = x + "px";
    fixedCircle.style.top = y + "px";
  }

  function createMouseTrail(x, y) {
    const circle = document.createElement("div");
    circle.className = "mouse-trail-circle";
    mouseTrail.appendChild(circle);

    // Set the position of the circle
    circle.style.left = x + "px";
    circle.style.top = y + "px";

    // Trigger reflow to apply the initial position
    void circle.offsetWidth;

    // Apply the animation styles
    circle.style.transform = "translate(-50%, -50%) scale(1)";
    circle.style.opacity = "0";

    // Remove the circle after the animation duration
    setTimeout(() => {
      mouseTrail.removeChild(circle);
    }, 300);
  }
});

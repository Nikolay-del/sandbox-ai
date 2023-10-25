// Parallax
document.addEventListener("mousemove", parallax);

function parallax(event) {
  document.querySelectorAll(".parallax").forEach((shift) => {
    const position = parseFloat(shift.getAttribute("data-parallax"));
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

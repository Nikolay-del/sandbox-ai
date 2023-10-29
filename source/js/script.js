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

// Accordion
  const accordionItems = document.querySelectorAll('.faq__accordion');

  accordionItems.forEach(item => {
    const button = item.querySelector('.faq__accordion-button');
    const content = item.querySelector('.faq__accordion-content');

    button.addEventListener('click', () => {
      item.classList.toggle('faq__accordion--active');
    });
  });

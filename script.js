function hideAndShow(id) {
  const paragraph = document.getElementById(id);
  const icon = document.querySelector(`.img-${id}`);

  const computedStyle = window.getComputedStyle(paragraph);
  const displayValue = computedStyle.getPropertyValue("display");

  if (displayValue === "none") {
    icon.src = "assets/images/icon-minus.svg";
    paragraph.style.display = "block";
    paragraph.offsetHeight;

    paragraph.style.transition = "opacity 1s";
    paragraph.style.opacity = "1";
  } else {
    icon.src = "assets/images/icon-plus.svg";
    paragraph.style.opacity = "0";
    paragraph.style.transition = "opacity 1s";

    paragraph.style.display = "none";
  }
}

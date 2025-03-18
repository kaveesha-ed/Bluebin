document.addEventListener("DOMContentLoaded", function () {
  const gridImages = document.querySelectorAll(".grid-image");

  gridImages.forEach(function (img) {
    img.addEventListener("click", function () {
      const largeImage = document.getElementById("large-image");
      largeImage.src = this.src;

      const description = this.getAttribute("data-description");
      const imageDescription = document.getElementById("image-description");
      imageDescription.innerText = description;

      const detailPane = document.getElementById("detail-pane");
      detailPane.style.display = "block";
    });
  });

  const closeButton = document.getElementById("closeButton");
  closeButton.addEventListener("click", closeDetailPane);

  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var slides = document.getElementsByClassName("slider-item");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 8000);
  }

  // Event listener for background color picker
  const bgColorPicker = document.getElementById("bg-color");
  bgColorPicker.addEventListener("input", function () {
    const selectedBgColor = this.value;
    applyBgColor(selectedBgColor);
  });

  // Function to apply selected background color to the detail pane
  function applyBgColor(color) {
    const detailPane = document.getElementById("detail-pane");
    detailPane.style.backgroundColor = color;
  }

  // Event listener for font color picker
  const fontColorPicker = document.getElementById("text-color");
  fontColorPicker.addEventListener("input", function () {
    const selectedFontColor = this.value;
    applyFontColor(selectedFontColor);
  });

  // Function to apply selected font color to the detail pane
  function applyFontColor(color) {
    const imageDescription = document.getElementById("image-description");
    imageDescription.style.color = color;
  }

  // Event listener for font style selection
  const fontStyleSelect = document.getElementById("font-style");
  fontStyleSelect.addEventListener("change", function () {
    const selectedFontStyle = this.value;
    applyFontStyle(selectedFontStyle);
  });

  // Function to apply selected font style to the detail pane
  function applyFontStyle(style) {
    const imageDescription = document.getElementById("image-description");
    imageDescription.style.fontFamily = style;
  }

  // Function to close the detail pane
  function closeDetailPane() {
    const detailPane = document.getElementById("detail-pane");
    detailPane.style.display = "none";
  }
});

// Function to change color mode
function changeColorMode(select) {
  var mode = select.value;
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
}

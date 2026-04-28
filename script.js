let images = [];
let currentIndex = 0;
let startX = 0;

function collectImages() {
  images = Array.from(document.querySelectorAll(".gallery img"))
    .map(img => img.src);
}

function openLightbox(src) {
  collectImages();
  currentIndex = images.indexOf(src);

  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");

  lightbox.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
  });

  lightbox.addEventListener("touchend", function(e) {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
      nextImage();
    } else if (endX - startX > 50) {
      prevImage();
    }
  });
});

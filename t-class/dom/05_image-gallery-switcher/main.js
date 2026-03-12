const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnails img");

thumbnails.forEach((photo) => {
  photo.addEventListener("click", () => {
    mainImage.src = photo.src;

    thumbnails.forEach((border) => border.classList.remove("active"));
    photo.classList.add("active");
  });
});

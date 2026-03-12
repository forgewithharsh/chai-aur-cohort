const button = document.getElementById("fetchBtn");
const loader = document.getElementById("loader");
const userCard = document.getElementById("userCard");

button.addEventListener("click", async () => {
  loader.style.display = "block";
  userCard.textContent = "";

  try {
    const fetchUrl = await fetch(
      "https://api.freeapi.app/api/v1/public/randomjokes/joke/random",
    );
    const data = await fetchUrl.json();

    const randomJoke = data.data.content;

    userCard.innerHTML = `<div class="card">
    <h3>Random Joke</h3>
    <p>${randomJoke}</p></div>`;

    console.log(data);
  } catch (err) {
    console.log("Error", err);
  }
  loader.style.display = "none";
});

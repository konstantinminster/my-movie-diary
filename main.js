// fetch data from API
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTkwZjhkYzYwNzBlZGEyMTAwMTIxYzEyMjI0MDNiNiIsInN1YiI6IjY2NjcxYmIxNGJhNTRiM2Q4Nzk5Zjc0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6eKlv31L6pp1ppWnBPRpimcpC9H4qaYq9_OuWfi80js",
  },
};

// Options

function runQuery() {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    let keyword = searchInput.value;

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        function queryMovie() {
          // LIMITS sit somewhere in the 50 requests per second range
          for (let i = 1; i <= 10; i++) {
            const result =  data.results[i]
            const getMovieTitle = result.title;
            const getMovieId = result.id;
            const getMovieImage =  `https://image.tmdb.org/t/p/w342${result.poster_path}`;
            const movieObj = {
              ID: getMovieId,  
              Name: getMovieTitle, 
              img_url: getMovieImage,
              comment: ""
            };

            //show movie card
            const output = document.getElementById("output");
            const createCard = document.createElement("ul");
            createCard.classList = "p-5 border"
            const createTitle = document.createElement("li");
            createTitle.className = "movie-title";
            createTitle.textContent = getMovieTitle;
            const createPoster = document.createElement("li");
            const createPosterImg = document.createElement("img");
            createPosterImg.src = getMovieImage;
            createPoster.appendChild(createPosterImg);
            createPoster.className = "movie-poster";
            output.appendChild(createCard);
            createCard.appendChild(createPoster);
            createCard.appendChild(createTitle);

            // addToJournal Button
            const addButton = document.createElement("button");
            addButton.classList = "add-journal bg-black text-white";
            addButton.textContent = "Add to my Journal"
            createCard.appendChild(addButton);
            

            addButton.addEventListener("click", (event) => {
              const previousData = JSON.parse(localStorage.getItem('movies')) || []; 
              console.log(previousData);
              localStorage.setItem('movies', JSON.stringify([...previousData, (movieObj)]));
            })
          }
        }
        queryMovie()
        
        
      })
      .catch((err) => console.error(err));
  });
}
runQuery();

// async function showData() {
//     console.log(getMovieTitle);
// }

// setTimeout (showData, 1000);



// Homepage:
// Retrieve and display a list of popular movies from TMDB API.
// Include a search bar at the top.
// On submitting a search, display a dialog with the search results or feedback.
// Each movie should display an image, name, and relevant info as a card.
// Include a button to add the movie to favorites.
// Add the movie to an array of objects in localStorage.

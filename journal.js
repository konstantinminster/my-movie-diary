// read from localstorage
// create card
// add button to comment
// store comment in local storage


(() => {
    const getMyJournal = JSON.parse(localStorage.getItem('myJournal')) || [];
    console.log(getMyJournal);
    getMyJournal.forEach((element, event) => {
        const getMovieTitle = element.Name;
        const getMovieImage = element.img_url;
        const output = document.getElementById("output-journal");
        const createCard = document.createElement("ul");
        createCard.classList = "p-5 bg-green-500";
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

        const removeButton = document.createElement("button");
            removeButton.classList = "add-journal bg-black text-white";
            removeButton.textContent = "Remove from my Journal"
            createCard.appendChild(removeButton);


            removeButton.addEventListener("click", (event) => {
                console.log("zu localstorage hinzugefügt");
                localStorage.removeItem('myJournal', event);
                const objects = JSON.parse(localStorage.getItem('myJournal')) || [];
                objects.splice(event, 1); // Remove the item at the given index
                localStorage.setItem('myJournal', JSON.stringify(objects));
              })


});
})();




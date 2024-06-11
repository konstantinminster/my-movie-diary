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





// // Example object structure
// const exampleObjects = [
//     { id: 1, name: 'Object 1' },
//     { id: 2, name: 'Object 2' },
//     { id: 3, name: 'Object 3' },
// ];

// // Save example objects to localStorage (this would usually be done elsewhere in your application)
// localStorage.setItem('objects', JSON.stringify(exampleObjects));

// // Function to render the list of objects
// function renderList() {
//     const listContainer = document.getElementById('output-journal');
//     listContainer.innerHTML = ''; // Clear existing list

//     const objects = JSON.parse(localStorage.getItem('objects')) || [];

//     objects.forEach((obj, index) => {
//         const item = document.createElement('div');
//         item.textContent = obj.name;

//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'Remove';
//         removeButton.addEventListener('click', () => removeItem(index));

//         item.appendChild(removeButton);
//         listContainer.appendChild(item);
//     });
// }

// // Function to remove an item from localStorage
// function removeItem(index) {
//     const objects = JSON.parse(localStorage.getItem('objects')) || [];
//     objects.splice(index, 1); // Remove the item at the given index
//     localStorage.setItem('objects', JSON.stringify(objects)); // Update localStorage
//     renderList(); // Re-render the list
// }

// // Initial render
// renderList();
// read from localstorage
// create card
// add button to comment
// store comment in local storage

function generateMyJournal() {
  const output = document.getElementById("output-journal");
  const getMyJournal = JSON.parse(localStorage.getItem("movies")) || [];
  console.log(getMyJournal);
  getMyJournal.forEach((element) => {
    const getMovieTitle = element.Name;
    const getMovieImage = element.img_url;
    const getMovieID = element.ID;
    let getComment = element.comment;
    console.log(getMovieID);

    // MovieCard erstellen und styling
    const movieCard = document.createElement("ul");
    movieCard.classList = "p-5 border";
    movieCard.id = getMovieID;
    const createTitle = document.createElement("li");
    createTitle.className = "movie-title";
    createTitle.textContent = getMovieTitle;
    const createPoster = document.createElement("li");
    const createPosterImg = document.createElement("img");
    createPosterImg.src = getMovieImage;
    createPoster.appendChild(createPosterImg);
    createPoster.className = "movie-poster relative";
    output.appendChild(movieCard);
    

    //öffne comment dialog
    const addCommentDialogBtn = document.createElement("button");
    addCommentDialogBtn.classList = "absolute p-2 bg-black bottom-2 right-2 "
    addCommentDialogBtn.innerHTML = `<img src="https://img.icons8.com/?size=30&id=1ukEkhevqhKc&format=png&color=ffffff">`;
    createPoster.append(addCommentDialogBtn)
  
    
    movieCard.append(createPoster, createTitle);

    //Kommentar schreiben

    const commentWindow = document.createElement("div");
    commentWindow.classList = "comment-window hidden";
    commentWindow.innerHTML = `<textarea id="text-${getMovieID}" class="comment-textarea w-full h-20 border"></textarea>`;
    movieCard.append(commentWindow);

    addCommentDialogBtn.addEventListener("click", () => {
      commentWindow.classList.remove("hidden");
    });

    // Kommentar Speichern
    const saveCommentBtn = document.createElement("button");
    
    saveCommentBtn.textContent = "Kommentar Speichern";
    commentWindow.append(saveCommentBtn);

    saveCommentBtn.addEventListener("click", () => {
      const getCommentText = document.getElementById(
        `text-${getMovieID}`
      ).value;

      const entries = JSON.parse(localStorage.getItem("movies")) || [];
      console.log("Ergebnis2" + entries);
      const entryIdToUpdate = getMovieID;
      const newComment = getCommentText;
      console.log(entryIdToUpdate);

      for (let i = 0; i < entries.length; i++) {
        if (entries[i].ID === entryIdToUpdate) {
          entries[i].comment = newComment;
          break;
        }
      }

      localStorage.setItem("movies", JSON.stringify(entries));
      location.reload();


    });

    // Kommentar anzeigen
    if (getComment !== "") {
      console.log(getComment);
      const commentView = document.createElement("p");
      const commentViewHeadline = document.createElement("h4");
      commentViewHeadline.textContent = "Meine Notizen: ";
      commentView.textContent = getComment;
      movieCard.append(commentViewHeadline, commentView);
    }


    // STYLING
    let btnStyle = "bg-black text-white w-full p-2";
    saveCommentBtn.classList = btnStyle;


    


  });
}

generateMyJournal();

///                              Movie Application                                      ///

//Genres: Ka data result me agaya he
//Language: Ka data result me agaya he
//Rating: 

(async function () {
    const respone = await fetch('./data.json');
    const movies = await respone.json();
    const requestOne = document.getElementById("clientGenres")
    const requestTwo = document.getElementById("clientLanguauge")
    const requestThree = document.getElementById("clientRating")
    const searchButton = document.getElementById("btn");

    function genres() {
        const query = requestOne.value.toLowerCase()
        const queryTwo = requestTwo.value.toLowerCase()
        const queryThree = requestThree.value
        const result = movies.filter(function (movies) {
            return (movies.genres.includes(query)) ||
                (movies.original_language.toLowerCase().includes(queryTwo))
            //||(movies.vote_average.includes(queryThree))
        })
        console.log(result);


    }
    searchButton.addEventListener("click", genres)
})()

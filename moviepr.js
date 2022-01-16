// variables

const ApiKey= 'api_key=01bdf24a6f15a3e42c699f49421bd327'
const BaseUrl='https://api.themoviedb.org/3'
const FirstPage=BaseUrl+ '/discover/movie?sort_by=popularity.desc&'+ApiKey
const image='https://image.tmdb.org/t/p/w500'
const film=document.querySelector(".page")
const input=document.querySelector(".Search_Bar")
window.addEventListener("input",searching)
let inputval='';
// ApiFetch

        getmovies(FirstPage) 

        function getmovies(url){
        fetch(url)
        .then(res=> res.json())
        .then(data=>{
        showmovies(data.results)

        })
        }
// Functions

    function searching(){
    inputval=input.value
    const searchurl=`https://api.themoviedb.org/3/search/movie?api_key=01bdf24a6f15a3e42c699f49421bd327&query=${inputval}`
    if(inputval){
        getmovies(searchurl)
    }else{
        getmovies(FirstPage)
    }
    }




    function showmovies(data){
    film.innerHTML=""
    data.forEach ( movie =>{
    const {poster_path,title,vote_average,overview}=movie
    const movieEl=document.createElement("div")
    movieEl.classList.add("movie")
    movieEl.innerHTML=` <img src="${ poster_path ? image+poster_path:src="./big-open-clapper-board-movie-reel-cinema-icon-set-movie-film-elements-flat-design-cinema-movie-time-flat-icons-f-95500226.jpg"}"alt="">
    <div class="movie_info">
        <h3 class="movie_name">${title}</h3>
        <span class="">${vote_average}</span>
    </div>
    <div class="overview">
        <h3>overview</h3>
                ${overview} 
    </div>`
    film.appendChild(movieEl)
    
    
})

}


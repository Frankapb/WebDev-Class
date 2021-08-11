function Movie(title,imdb){
    this.title=title
    this.imdb=imdb
}


Movie.prototype.newPropertyName="INTECBRUSSEL"
Movie.prototype.number=20
Movie.prototype.myObject={id:1,title:"joker"}
Movie.prototype.myArray=[1,2,3]

Movie.prototype.addMovie=()=>{
    console.log('hello addMovie');
}

let joker = new Movie('joker','9,6')
joker.addMovie();
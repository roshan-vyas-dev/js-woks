// create a class movie[id, title, language, genre, setMovie(),displaymovie(),]
// create 2 movie object;

class Movies{

    setMovie(id,title,language,genre){
     this.id=id;
     this.title=title;
     this.language=language;
     this.genre=genre

    }

    displayMovie(){
        console.log(this.id,this.title,this.language,this.genre);
        
    }
}

var johnwickInstance=new Movies();

johnwickInstance.setMovie(123,"johnwick","english","action");

johnwickInstance.displayMovie();
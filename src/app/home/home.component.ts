import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventvalue:number=0;
  search_result: any;
  movie: any;
  toogleKey:boolean=true;
  // img_url:string[]=['../assets/images/1.jpg','../assets/images/2.jpg','../assets/images/3.jpg'];
  

  constructor(public movieService: MovieService) {
   
    }

    

 

  // get search results of movies
  searchMovies() {
    this.movieService.searchMovie(this.movie).subscribe(data => {
      this.search_result = data['results'];
      // console.log(this.search_result);
      this.toogleKey =!this.toogleKey;
      this.eventvalue +=1;
      console.log(this.eventvalue);
      
      
    });
  }

  ngOnInit() {
  }




}
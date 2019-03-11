import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {HttpClient} from '@angular/common/http';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  API_ENDPOINT = 'ASDF';
  movies: Movie[];

  constructor(private movieService: MoviesService, private httpClient: HttpClient) {

    httpClient.get(this.API_ENDPOINT+'/movies').subscribe((data)=> {
      this.movies = data;
      console.log(data);
    })

   }

  ngOnInit() {
  }

}

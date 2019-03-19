import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../interfaces/movie';
import {Multidata} from '../interfaces/multidata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  API_ENDPOINT = 'http://localhost/gesaca/public/api/personas';
  movies: Movie[];

  constructor(private movieService: MoviesService, private httpClient: HttpClient) {

    httpClient.get(this.API_ENDPOINT).subscribe((data: Multidata) => {
      console.log(data);
      this.movies = data.data as Movie[];
    });
  }

  ngOnInit() {
  }

}

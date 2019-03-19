import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  movie: Movie;

  API_ENDPOINT = 'http://localhost/gesaca/public/api/personas';

  constructor() { }

  ngOnInit() {
  }

  onKeydown(event) {

    if (event.key === 'Enter') {
      console.log("hicimpos enter csm");
    }
  }

  cliqueando(event) {

   alert('hicimos click');
  }

}

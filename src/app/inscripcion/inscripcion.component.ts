import {Component, OnInit} from '@angular/core';
import {Movie} from '../interfaces/movie';
import {MoviesService} from '../services/movies.service';
import {Multidata} from '../interfaces/multidata';
import {Singledata} from '../interfaces/singledata';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  movie = {} as Movie;


  tituloModal: string;
  inputDni: number;

  constructor(private movieService: MoviesService) {
  }

  ngOnInit() {
  }

  buscarAlumno() {

    this.movieService.getByDni(this.inputDni).subscribe((data: Singledata) => {

      if (data.code_status == '1') {
        this.tituloModal = 'Alumno Encontrado';
        this.movie = data.data as Movie;
      } else {
        this.tituloModal = 'Alumno NO Encontrado';
        this.movie = {} as Movie;
        this.movie.IdPersona = this.inputDni;
      }

    }, (error) => {
      console.log('no encontro :(');

      console.log(this.movie);
      this.tituloModal = 'Alumno NO Encontrado';
    });

  }

  guardarAlumno() {

    this.movie.Sub = 1;
    this.movie.Tipo = 1;

    this.movieService.save(this.movie).subscribe((data: Singledata) => {

      if (data.code_status == '1') {
        console.log('Alumno guardado');

      } else {
        console.log('No se pudo guardar');

      }

    }, (error) => {
      console.log('No se pudo guardar');
      this.tituloModal = 'Alumno NO Encontrado';
    });


  }

  onKeydown(event) {

    if (event.key === 'Enter') {

    }
  }

}

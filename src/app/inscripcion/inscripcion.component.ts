import {Component, OnInit} from '@angular/core';
import {Persona} from '../interfaces/persona';
import {PersonasService} from '../services/personas.service';
import {Multidata} from '../interfaces/multidata';
import {Singledata} from '../interfaces/singledata';
import {Nivel} from '../interfaces/nivel';
import {NivelesService} from '../services/niveles.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  persona = {} as Persona;
  tituloModal: string;
  inputDni: string;

  niveles: Nivel[];
  selectNivel: number;
  editing = false;

  constructor(private  personasService: PersonasService, private nivelService: NivelesService) {
  }

  ngOnInit() {
    this.nivelService.get().subscribe((data: Multidata) => {
      this.niveles = data.data as Nivel[];
      console.log(this.niveles);
    }, (error) => {
      console.log('no encontro :(');
      console.log(error);
    });
  }

  buscarAlumno() {

    this.personasService.getByDni(this.inputDni).subscribe((data: Singledata) => {

      if (data.code_status == '1') {
        this.tituloModal = 'Alumno Encontrado';
        this.persona = data.data as Persona;
        this.editing = true;
      } else {
        this.tituloModal = 'Alumno NO Encontrado';
        this.persona = {} as Persona;
        this.persona.Dni = this.inputDni;
        this.editing = false;
      }
    }, (error) => {
      console.log(error);
      this.tituloModal = 'Alumno NO Encontrado';
      this.editing = false;

    });
  }

  guardarAlumno() {

    console.log(this.persona);

    if (this.editing) {
      this.personasService.put(this.persona).subscribe((data: Singledata) => {
        if (data.code_status == '1') {
          console.log('Alumno Actualizado');
        } else {
          console.log('No se pudo guardar');
        }
      }, (error) => {
        console.log('No se pudo actualizar');
        console.log(error);
      });

    } else {

      this.personasService.save(this.persona).subscribe((data: Singledata) => {
        if (data.code_status == '1') {
          console.log('Alumno guardado');
        } else {
          console.log('No se pudo guardar');
        }
      }, (error) => {
        console.log('No se pudo guardar');
        console.log(error);
      });

    }
  }

  onKeydown(event) {

    if (event.key === 'Enter') {

    }
  }

}

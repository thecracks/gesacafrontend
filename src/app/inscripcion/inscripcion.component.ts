import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onKeydown(event) {

    if (event.key === 'Enter') {
      console.log("hicimpos enter csm");
    }
  }

}

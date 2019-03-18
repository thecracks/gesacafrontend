import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { MatriculaComponent } from './matricula/matricula.component';

const routes: Route [] = [
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FormComponent},
  {path: 'inscripcion', component: InscripcionComponent},
  {path: 'matricula', component: MatriculaComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    InscripcionComponent,
    MatriculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

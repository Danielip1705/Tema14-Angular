import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Persona } from '../Interfaces/persona';
import { PersonasService } from '../services/personas.service';
@Component({
  selector: 'app-tabla-api',
  imports: [CommonModule],
  templateUrl: './tabla-api.component.html',
  styleUrl: './tabla-api.component.scss'
})
export class TablaApiComponent implements OnInit{

  listadoPersonas:Persona[]

  constructor(private personaServicio: PersonasService){}


  ngOnInit(): void {
    this.obtenerPersona()
  }

  async obtenerPersona(){
    this.personaServicio.getPersonas().subscribe({
      next:(response) =>{
        this.listadoPersonas = response
      },
      error(err) {
        alert("Ha ocurrido un error a la hora de obtener los datos del servidor")
      },
    });
  }

  async crearPersona(persona:Persona){
    this.personaServicio.postPersona(persona).subscribe({
      next:(response) =>{
        alert("Se ha creado la persona " + response.nombre)
      },
      error(err){
        alert("No se ha podido crear la persona")
      }
    });
  }

}

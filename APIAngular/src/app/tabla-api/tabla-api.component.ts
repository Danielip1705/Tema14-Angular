import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Persona } from '../Interfaces/persona';
import { Router } from '@angular/router';
import { PersonasService } from '../services/personas.service';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-tabla-api',
  imports: [CommonModule,MatTableModule,MatIconModule,MatButtonModule],
  templateUrl: './tabla-api.component.html',
  styleUrl: './tabla-api.component.scss'
})
export class TablaApiComponent implements OnInit{

  listadoPersonas:Persona[]

  constructor(private personaServicio: PersonasService,private router : Router){}


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

  

  viajarCrear():void{
    this.router.navigate(["crear"])
  }

}

import { Component, OnInit } from '@angular/core';
import { Persona } from '../Interfaces/persona';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { PersonasService } from '../services/personas.service';
@Component({
  selector: 'app-add-persona',
  imports: [ReactiveFormsModule],
  templateUrl: './add-persona.component.html',
  styleUrl: './add-persona.component.scss'
})
export class AddPersonaComponent implements OnInit{
  
    personaForm : FormGroup;

  ngOnInit(): void { 
    this.personaForm= new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      direccion: new FormControl('',[Validators.required]),
      foto: new FormControl('',[Validators.required]),
      fechaNacimiento: new FormControl('',[Validators.required]),
      idDepartento: new FormControl('',[Validators.required]),
    });
   }

  constructor(private personaServicio:PersonasService){}

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


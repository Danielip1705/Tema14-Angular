import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{

  formulario:FormGroup;

  constructor(private router:Router){}

  ngOnInit(): void {
    
    this.formulario=new FormGroup(
      {
        nombre: new FormControl('',[Validators.required]),
        apellidos:new FormControl('',[Validators.required])
      }
    );
  }

  saluda(){
    if(this.formulario.valid){
        alert("Hola"+ this.formulario.controls.nombre.value+ " " + this.formulario.controls["apellidos"].value)
    }
  }
  volverIndex():void{
    this.router.navigate(["/"])
  };
  }
  


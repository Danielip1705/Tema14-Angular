import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-prueba',
  imports: [],
  templateUrl: './componente-prueba.component.html',
  styleUrl: './componente-prueba.component.css'
})
export class ComponentePruebaComponent {
  constructor(private router:Router){}

  volverIndex():void{
    this.router.navigate(["/"])
  }
}

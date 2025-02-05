import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabla-personas',
  imports: [],
  templateUrl: './tabla-personas.component.html',
  styleUrl: './tabla-personas.component.css'
})
export class TablaPersonasComponent {
  constructor(private router:Router){}

  volverIndex():void{
    this.router.navigate(["/"])
  }
}

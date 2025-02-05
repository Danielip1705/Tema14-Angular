import { Component } from '@angular/core';
import { RouterOutlet,RouterLinkActive,RouterLink,Router } from '@angular/router';
import { TablaPersonasComponent } from '../../../../holaMundoAngular_2/src/app/tabla-personas/tabla-personas.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'holaMundoAngular';
  
  constructor(private router:Router){}

    viajarForm():void{
      this.router.navigate(["/formulario"])
    }
}
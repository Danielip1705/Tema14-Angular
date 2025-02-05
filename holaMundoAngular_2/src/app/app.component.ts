import { Component } from '@angular/core';
import { RouterOutlet,Router,RouterLink,RouterPreloader,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'holaMundoAngular_2';
  constructor(private router:Router){}

  viajarForm():void{
    this.router.navigate(["/formulario"])
  }
}

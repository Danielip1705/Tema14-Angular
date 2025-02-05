import { Component } from '@angular/core';
import { RouterOutlet,Router,RouterLink,RouterPreloader,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'APIAngular';
  constructor(private router:Router){}

  mostrarTabla():void{
    this.router.navigate(["/tabla"])
  }
}

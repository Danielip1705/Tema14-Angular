import { Routes } from '@angular/router';
import { TablaPersonasComponent } from './tabla-personas/tabla-personas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ComponentePruebaComponent } from './componente-prueba/componente-prueba.component';
export const routes: Routes = [
  {path: 'tabla', component: TablaPersonasComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'prueba', component: ComponentePruebaComponent}

];
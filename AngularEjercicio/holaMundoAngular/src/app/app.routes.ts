import { Routes } from '@angular/router';
import { TablaPersonasComponent } from '../../../../holaMundoAngular_2/src/app/tabla-personas/tabla-personas.component';
import { FormularioComponent } from '../../../../holaMundoAngular_2/src/app/formulario/formulario.component';
import { ComponentePruebaComponent } from '../../../../holaMundoAngular_2/src/app/componente-prueba/componente-prueba.component';

export const routes: Routes = [
  {path: 'tabla', component: TablaPersonasComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'prueba', component: ComponentePruebaComponent}

];

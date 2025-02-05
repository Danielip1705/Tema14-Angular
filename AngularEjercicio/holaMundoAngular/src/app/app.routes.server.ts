import { RenderMode, ServerRoute } from '@angular/ssr';
import { TablaPersonasComponent } from '../../../../holaMundoAngular_2/src/app/tabla-personas/tabla-personas.component';
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

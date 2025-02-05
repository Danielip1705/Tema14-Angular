import { Routes } from '@angular/router';
import { TablaApiComponent } from './tabla-api/tabla-api.component';
import { AddPersonaComponent } from './add-persona/add-persona.component';
import { EditPersonaComponent } from './edit-persona/edit-persona.component';

export const routes: Routes = [
    {path: "tabla",component:TablaApiComponent},
    {path: "crear",component:AddPersonaComponent},
    {path: "editar",component:EditPersonaComponent},
];

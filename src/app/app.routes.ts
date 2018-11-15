import { RouterModule, Routes } from '@angular/router';
import {
    BodyComponent,
    Body2Component,
} from "./components/index.pagina"


const routes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'body2', component: Body2Component },
    { path: '**', pathMatch:'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(routes, { useHash:true});

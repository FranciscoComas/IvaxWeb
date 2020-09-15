import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from "./mainpage/index";
import { SongsComponent } from "./songs/index";
import { AdministrationComponent } from "./administration/index";

const routes: Routes = [
        { path: "", component: MainpageComponent },
        { path: "administration", component: AdministrationComponent },
        { path: "songs", component: SongsComponent },

        //Si no es niguna direccion de arriba redirige a home
        { path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

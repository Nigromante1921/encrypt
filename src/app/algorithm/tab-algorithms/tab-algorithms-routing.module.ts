import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path : 'escitala',
        loadChildren : () => import('./escitala/escitala/escitala.component').then(m => m.EscitalaComponent)
    },
    {
        path : 'polibios',
        loadChildren : () => import('./polibios/polibios/polibios.component').then(m => m.PolibiosComponent)
    },
    {
        path : 'cesar',
        loadChildren : () => import('./cesar/cesar/cesar.component').then(m => m.CesarComponent)
    }
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabAlgorithmsRoutingModule {

}

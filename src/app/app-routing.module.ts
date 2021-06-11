import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'electricidad',
    loadChildren: () => import('./electricidad/electricidad.module').then( m => m.ElectricidadPageModule)
  },
  {
    path: 'plomeria',
    loadChildren: () => import('./plomeria/plomeria.module').then( m => m.PlomeriaPageModule)
  },
  {
    path: 'cerrajeria',
    loadChildren: () => import('./cerrajeria/cerrajeria.module').then( m => m.CerrajeriaPageModule)
  },
  {
    path: 'pintura',
    loadChildren: () => import('./pintura/pintura.module').then( m => m.PinturaPageModule)
  },
  {
    path: 'aire-acondicionado',
    loadChildren: () => import('./aire-acondicionado/aire-acondicionado.module').then( m => m.AireAcondicionadoPageModule)
  },
  {
    path: 'ventaneria',
    loadChildren: () => import('./ventaneria/ventaneria.module').then( m => m.VentaneriaPageModule)
  },
  {
    path: 'albanileria',
    loadChildren: () => import('./albanileria/albanileria.module').then( m => m.AlbanileriaPageModule)
  },
  {
    path: 'herreria',
    loadChildren: () => import('./herreria/herreria.module').then( m => m.HerreriaPageModule)
  },
  {
    path: 'linea-blanca-reparacion',
    loadChildren: () => import('./linea-blanca-reparacion/linea-blanca-reparacion.module').then( m => m.LineaBlancaReparacionPageModule)
  },
  {
    path: 'reparacion-y-servicios-informaticos',
    loadChildren: () => import('./reparacion-y-servicios-informaticos/reparacion-y-servicios-informaticos.module').then( m => m.ReparacionYServiciosInformaticosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

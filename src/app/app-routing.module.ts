import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hello',
    pathMatch: 'full'
  },
  {
    path: 'hello',
    loadChildren: () => import('./pages/hello-page/hello-page.module').then(m => m.HelloPageModule)
  },
  {
    path: 'ng-template-outlet',
    loadChildren: () => import('./pages/ng-template-outlet-example/ng-template-outlet-example.module').then(m => m.NgTemplateOutletExampleModule)
  },
  {
    path: 'dynamic-component-loading',
    loadChildren: () => import('./pages/dynamic-component-loading/dynamic-component-loading.module').then(m => m.DynamicComponentLoadingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

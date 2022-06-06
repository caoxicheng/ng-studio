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

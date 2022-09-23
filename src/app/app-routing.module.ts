import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './template/basicos/basicos.component';
import { DinamicosComponent } from './template/dinamicos/dinamicos.component';
import { SwitchesComponent } from './template/switches/switches.component';
import { TemplateModule } from './template/template.module';

const routes: Routes = [
  {path: 'template',
    loadChildren: () => import('./template/template.module').then(m=>m.TemplateModule)
  },
  {path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then(m=>m.ReactiveModule)
  },
  {path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'template'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetafrenzyGuard } from 'ngx-metafrenzy';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [MetafrenzyGuard],
    data: {
        metafrenzy: {
            tags: [
                {
                    name: 'og:title',
                    content: 'Base Test'
                }
            ],
            links: [
                {
                    rel: 'canonical',
                    href: 'http://localhost/'
                }
            ]
        }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

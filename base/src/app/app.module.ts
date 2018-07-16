import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InternalFeatureModuleModule } from './internal-feature-module/internal-feature-module.module';
import { AppComponent } from './app.component';

import { ExternalModuleModule } from 'external-module';

import { MetafrenzyModule, MetafrenzyGuard } from 'ngx-metafrenzy';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InternalFeatureModuleModule,
    ExternalModuleModule,
    MetafrenzyModule.forRoot(),
    RouterModule.forRoot([
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
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

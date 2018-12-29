import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InternalFeatureModuleModule } from './internal-feature-module/internal-feature-module.module';
import { AppComponent } from './app.component';

// import { ExternalModuleModule } from 'external-module';

import { MetafrenzyModule, MetafrenzyGuard } from 'ngx-metafrenzy';
import { BabyComponent } from './baby/baby.component';
import { BigDaddyComponent } from './big-daddy/big-daddy.component';
import { BastardComponent } from './bastard/bastard.component';
import { FamilyService } from './family.service';

@NgModule({
  declarations: [
    AppComponent,
    BabyComponent,
    BigDaddyComponent,
    BastardComponent
  ],
  imports: [
    BrowserModule,
    // For Angular Universal:
    // BrowserModule.withServerTransition({appId: 'my-app'}),
    InternalFeatureModuleModule,
    // ExternalModuleModule,
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
  providers: [FamilyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ExternalModuleSimplifiedModule } from './app/external-module-simplified.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ExternalModuleSimplifiedModule)
  .catch(err => console.log(err));

import { TestBed, async } from '@angular/core/testing';
import { MetafrenzyService } from 'ngx-metafrenzy';
import { BabyComponent } from './baby/baby.component';
import { BigDaddyComponent } from './big-daddy/big-daddy.component';
import { BastardComponent } from './bastard/bastard.component';
import { FamilyService } from './family.service';
import { AppComponent } from './app.component';
import { InternalFeatureModuleModule } from './internal-feature-module/internal-feature-module.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                InternalFeatureModuleModule,
            ],
            declarations: [
                AppComponent,
                BabyComponent,
                BigDaddyComponent,
                BastardComponent,
            ],
            providers: [
                MetafrenzyService,
                FamilyService,
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});

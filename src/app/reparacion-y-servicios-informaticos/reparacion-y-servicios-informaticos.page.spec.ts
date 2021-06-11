import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReparacionYServiciosInformaticosPage } from './reparacion-y-servicios-informaticos.page';

describe('ReparacionYServiciosInformaticosPage', () => {
  let component: ReparacionYServiciosInformaticosPage;
  let fixture: ComponentFixture<ReparacionYServiciosInformaticosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReparacionYServiciosInformaticosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReparacionYServiciosInformaticosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

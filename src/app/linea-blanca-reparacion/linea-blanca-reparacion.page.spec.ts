import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LineaBlancaReparacionPage } from './linea-blanca-reparacion.page';

describe('LineaBlancaReparacionPage', () => {
  let component: LineaBlancaReparacionPage;
  let fixture: ComponentFixture<LineaBlancaReparacionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaBlancaReparacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LineaBlancaReparacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

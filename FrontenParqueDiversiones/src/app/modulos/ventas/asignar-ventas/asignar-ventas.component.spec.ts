import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignarVentasComponent } from './asignar-ventas.component';

describe('AsignarVentasComponent', () => {
  let component: AsignarVentasComponent;
  let fixture: ComponentFixture<AsignarVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

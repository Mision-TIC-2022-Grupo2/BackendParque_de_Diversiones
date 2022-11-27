import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarComprasComponent } from './eliminar-compras.component';

describe('EliminarComprasComponent', () => {
  let component: EliminarComprasComponent;
  let fixture: ComponentFixture<EliminarComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

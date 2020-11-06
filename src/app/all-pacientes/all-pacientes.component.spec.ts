import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPacientesComponent } from './all-pacientes.component';

describe('AllPacientesComponent', () => {
  let component: AllPacientesComponent;
  let fixture: ComponentFixture<AllPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

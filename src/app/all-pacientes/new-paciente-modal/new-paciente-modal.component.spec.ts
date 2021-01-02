import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPacienteModalComponent } from './new-paciente-modal.component';

describe('NewPacienteModalComponent', () => {
  let component: NewPacienteModalComponent;
  let fixture: ComponentFixture<NewPacienteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPacienteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPacienteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

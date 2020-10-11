import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAprovadoRecusadoComponent } from './modal-aprovado-recusado.component';

describe('ModalAprovadoRecusadoComponent', () => {
  let component: ModalAprovadoRecusadoComponent;
  let fixture: ComponentFixture<ModalAprovadoRecusadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAprovadoRecusadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAprovadoRecusadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

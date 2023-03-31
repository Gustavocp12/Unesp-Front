import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAgenteComponent } from './adicionar-agente.component';

describe('AdicionarAgenteComponent', () => {
  let component: AdicionarAgenteComponent;
  let fixture: ComponentFixture<AdicionarAgenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarAgenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MujerIMCComponent } from './mujer-imc.component';

describe('MujerIMCComponent', () => {
  let component: MujerIMCComponent;
  let fixture: ComponentFixture<MujerIMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MujerIMCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MujerIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HombreIMCComponent } from './hombre-imc.component';

describe('HombreIMCComponent', () => {
  let component: HombreIMCComponent;
  let fixture: ComponentFixture<HombreIMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HombreIMCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HombreIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

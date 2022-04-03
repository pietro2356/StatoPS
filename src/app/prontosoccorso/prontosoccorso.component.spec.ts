import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntosoccorsoComponent } from './prontosoccorso.component';

describe('ProntosoccorsoComponent', () => {
  let component: ProntosoccorsoComponent;
  let fixture: ComponentFixture<ProntosoccorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProntosoccorsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProntosoccorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

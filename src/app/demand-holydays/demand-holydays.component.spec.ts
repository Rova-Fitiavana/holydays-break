import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandHolydaysComponent } from './demand-holydays.component';

describe('DemandHolydaysComponent', () => {
  let component: DemandHolydaysComponent;
  let fixture: ComponentFixture<DemandHolydaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandHolydaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandHolydaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

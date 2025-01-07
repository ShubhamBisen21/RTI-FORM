import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiVivranComponent } from './rti-vivran.component';

describe('RtiVivranComponent', () => {
  let component: RtiVivranComponent;
  let fixture: ComponentFixture<RtiVivranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtiVivranComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtiVivranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

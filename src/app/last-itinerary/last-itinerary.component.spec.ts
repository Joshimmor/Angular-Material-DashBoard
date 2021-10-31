import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastItineraryComponent } from './last-itinerary.component';

describe('LastItineraryComponent', () => {
  let component: LastItineraryComponent;
  let fixture: ComponentFixture<LastItineraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastItineraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

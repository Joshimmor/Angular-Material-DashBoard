import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFixtureItinUpdateComponent } from './post-fixture-itin-update.component';

describe('PostFixtureItinUpdateComponent', () => {
  let component: PostFixtureItinUpdateComponent;
  let fixture: ComponentFixture<PostFixtureItinUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFixtureItinUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFixtureItinUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

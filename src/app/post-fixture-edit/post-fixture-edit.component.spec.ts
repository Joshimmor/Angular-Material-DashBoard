import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFixtureEditComponent } from './post-fixture-edit.component';

describe('PostFixtureEditComponent', () => {
  let component: PostFixtureEditComponent;
  let fixture: ComponentFixture<PostFixtureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFixtureEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFixtureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

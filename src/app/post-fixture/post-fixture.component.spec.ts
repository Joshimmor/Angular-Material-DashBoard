import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFixtureComponent } from './post-fixture.component';

describe('PostFixtureComponent', () => {
  let component: PostFixtureComponent;
  let fixture: ComponentFixture<PostFixtureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFixtureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

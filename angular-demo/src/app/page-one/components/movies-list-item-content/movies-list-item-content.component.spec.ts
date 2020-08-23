import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListItemContentComponent } from './movies-list-item-content.component';

describe('MoviesListItemContentComponent', () => {
  let component: MoviesListItemContentComponent;
  let fixture: ComponentFixture<MoviesListItemContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListItemContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

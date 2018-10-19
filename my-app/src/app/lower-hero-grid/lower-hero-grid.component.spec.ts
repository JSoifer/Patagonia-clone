import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerHeroGridComponent } from './lower-hero-grid.component';

describe('LowerHeroGridComponent', () => {
  let component: LowerHeroGridComponent;
  let fixture: ComponentFixture<LowerHeroGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerHeroGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerHeroGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinfectionsComponent } from './allinfections.component';

describe('AllinfectionsComponent', () => {
  let component: AllinfectionsComponent;
  let fixture: ComponentFixture<AllinfectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllinfectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllinfectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

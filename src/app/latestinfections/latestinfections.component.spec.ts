import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestinfectionsComponent } from './latestinfections.component';

describe('LatestinfectionsComponent', () => {
  let component: LatestinfectionsComponent;
  let fixture: ComponentFixture<LatestinfectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestinfectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestinfectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticmainblockComponent } from './statisticmainblock.component';

describe('StatisticmainblockComponent', () => {
  let component: StatisticmainblockComponent;
  let fixture: ComponentFixture<StatisticmainblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticmainblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticmainblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

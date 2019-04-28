import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreensPanelComponent } from './screens-panel.component';

describe('ScreensPanelComponent', () => {
  let component: ScreensPanelComponent;
  let fixture: ComponentFixture<ScreensPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreensPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreensPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

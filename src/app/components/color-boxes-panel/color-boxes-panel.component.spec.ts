import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBoxesPanelComponent } from './color-boxes-panel.component';

describe('ColorBoxesPanelComponent', () => {
  let component: ColorBoxesPanelComponent;
  let fixture: ComponentFixture<ColorBoxesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorBoxesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorBoxesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { ApplicationServicesService } from 'src/app/services/application-services.service';
import { Color, ColorState } from 'src/app/models/color.models';

@Component({
  selector: 'color-boxes-panel',
  templateUrl: './color-boxes-panel.component.html',
  styleUrls: ['./color-boxes-panel.component.scss']
})
export class ColorBoxesPanelComponent implements OnInit {

  
  /**
   * Color combination template
   * @memberof ColorBoxesPanelComponent
   */
  public colors = [
    { upper : '#F96167' ,lower : '#FCE77D' },
    { upper : '#F9D342' ,lower : '#292826' },
    { upper : '#DF678C' ,lower : '#3D155F' },
    { upper : '#CCF381' ,lower : '#4831D4' },
    { upper : '#4A274F' ,lower : '#F0A07C' },
    { upper : '#2B3252' ,lower : '#EF5455' ,middle : '#FAD744' },
    { upper : '#FFF748' ,lower : '#3C1A5B' },
    { upper : '#2F3C7E' ,lower : '#FBEAEB' },
    { upper : '#EC4D37' ,lower : '#1D1B1B' },
    { upper : '#8BD8BD' ,lower : '#243665' },
    { upper : '#141A46' ,lower : '#EC8B5E' },
    { upper : '#FFFFFF' ,lower : '#8AAAE5' },
    { upper : '#295F2D' ,lower : '#FFE67C' },
    { upper : '#161B21' ,lower : '#F4A950' },
    { upper : '#EB2188' ,lower : '#080A52' },
  ];

  
  /**
   * To toggle the colors between background and foreground
   * @type {boolean}
   * @memberof ColorBoxesPanelComponent
   */
  public toggleFlag : boolean = false;
  
  
  /**
   * Flag to toggle info status
   * @type {boolean}
   * @memberof ColorBoxesPanelComponent
   */
  public showInfo : boolean = true;


  /**
   * To store state of colors
   * @type {ColorState}
   * @memberof ColorBoxesPanelComponent
   */
  public colorState : ColorState;

  
  /**
   * Creates an instance of ColorBoxesPanelComponent.
   * @param {ApplicationServicesService} _colorStateService
   * @memberof ColorBoxesPanelComponent
   */
  constructor(
    private _colorStateService : ApplicationServicesService
  ) { }

  ngOnInit() {
    
    this._colorStateListner()
  }

  
  /**
   * To get the selected color
   * @param {*} color
   * @memberof ColorBoxesPanelComponent
   */
  public getColors (color : any) : void {
    
    this.showInfo = false;
    
    this.toggleFlag = !this.toggleFlag;

    this.colorState.upperColor = color.upper;
    this.colorState.lowerColor = color.lower;
    this.colorState.showInfo = this.showInfo;
    this.colorState.toggle = this.toggleFlag;

    this._colorStateService.setColorState(this.colorState);
  }


  
  /**
   * Custom color box handler
   * @param {*} customColor
   * @memberof ColorBoxesPanelComponent
   */
  public customColorChange(customColor: any) : void {

    console.log(customColor);

    this.showInfo = false;
    this.colorState.showInfo = this.showInfo;

    if (customColor['target']['id'] == 'custom-upper') {
      
      this.colorState.upperColor = customColor['target']['value'];

    } else if (customColor['target']['id'] == 'custom-lower') {
      
      this.colorState.lowerColor = customColor['target']['value'];
    }

    this._colorStateService.setColorState(this.colorState);
    
  }

  
  /**
   * Color state (Subject) listner
   * @private
   * @memberof ColorBoxesPanelComponent
   */
  private _colorStateListner() : void {
    
    this._colorStateService.getColorState().subscribe((colorState) => {

      this.colorState = colorState;
    })
  }

  
  /**
   * Toggling color
   * @memberof ColorBoxesPanelComponent
   */
  public toggleColor() : void {

    this.toggleFlag = !this.toggleFlag;
    
    this.colorState.toggle = this.toggleFlag;

    this._colorStateService.setColorState(this.colorState);
  }

}

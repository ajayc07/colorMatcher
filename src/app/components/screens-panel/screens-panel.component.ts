import { Component, OnInit, Inject } from '@angular/core';
import { ApplicationServicesService } from 'src/app/services/application-services.service';
import { ColorState } from 'src/app/models/color.models';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'screens-panel',
  templateUrl: './screens-panel.component.html',
  styleUrls: ['./screens-panel.component.scss']
})
export class ScreensPanelComponent implements OnInit {

  /**
   * To store the color code
   * @type {string}
   * @memberof ScreensPanelComponent
   */
  public upperColor : string = "";
  
  /**
   * To store the color code
   * @type {string}
   * @memberof ScreensPanelComponent
   */
  public lowerColor : string = "";


  /**
   * To show/hide info flag
   * @type {boolean}
   * @memberof ScreensPanelComponent
   */
  public showInfo : boolean = true;


  /**
   * Object showing flag
   * @type {number}
   * @memberof ScreensPanelComponent
   */
  public showItem : number = 1;


  /**
   * To toggle flag
   * @type {boolean}
   * @memberof ScreensPanelComponent
   */
  public toggleFlag : boolean;

  
  /**
   * Document.Element
   * @type {boolean}
   * @memberof ScreensPanelComponent
   */
  public element : any;

  /**
   * to toggle tool bar
   * @type {boolean}
   * @memberof ScreensPanelComponent
   */
  public showToolBar : boolean;

  /**
   * To toggle  full screen
   * @type {boolean}
   * @memberof ScreensPanelComponent
   */
  public isFullScreen : boolean;



  /**
   * Creates an instance of ScreensPanelComponent.
   * @param {ApplicationServicesService} _colorStateService
   * @memberof ScreensPanelComponent
   */
  constructor(
    @Inject(DOCUMENT) private document: any,   //to get the document
    private _colorStateService : ApplicationServicesService
  ) { }

  ngOnInit() {  
  
    this._colorStateListner();
    this.setColors();
    this.element = document.getElementById('screen');
  }


  /**
   * To set the color
   * @memberof ScreensPanelComponent
   */
  public setColors() : void {

    var upper = document.getElementById('upper');
    var lower = document.getElementById('lower');

    if (upper && lower) {

      upper.setAttributeNS(null, "fill", this.upperColor);
      lower.setAttributeNS(null, "fill", this.lowerColor);
    }
  }



  /**
   * Color state (Subject) listner
   * @private
   * @memberof ScreensPanelComponent
   */
  private _colorStateListner() : void {
    
    this._colorStateService.getColorState().subscribe((colorState : ColorState) => {

      this.upperColor = colorState.upperColor;
      this.lowerColor = colorState.lowerColor;
      this.showInfo = colorState.showInfo;
      
      if (colorState.toggle) {

        this.toggleColor();
      }

      console.log(colorState);
      
    });
  }


  /**
   * To show the selected object
   * @param {number} inScreen
   * @memberof ScreensPanelComponent
   */
  public next(inScreen : number) : void{

    this.showInfo = false;
    this.showItem = inScreen;
  }


  /**
   * Toggling color
   * @memberof ScreensPanelComponent
   */
  public toggleColor() : void {

    let temp = this.upperColor;
    this.upperColor = this.lowerColor;
    this.lowerColor = temp;

    this.setColors();
  }


  /**
   * Toggling screen
   * @memberof ScreensPanelComponent
   */
  public toogleFullScreen() : void {

    this.isFullScreen = !this.isFullScreen;

    this.isFullScreen ? this.openFullscreen() : this.closeFullscreen(); 
  }
  
  
  /**
   * Opening full screen
   * @memberof ScreensPanelComponent
   */
  public openFullscreen() : void{

    console.log('Full Screen');
    

      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) { /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) { /* IE/Edge */
        this.element.msRequestFullscreen();
      }
  }

  /**
   * Exit full screen
   * @memberof ScreensPanelComponent
   */
  public   closeFullscreen() : void{

    console.log('Exit Full screen');
    

    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {  /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) { /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

  /**
   * To get the instruction back
   * @memberof ScreensPanelComponent
   */
  public getInfo() : void{

      this.showInfo = true;
  }

  /**
   * To show and hide tool bar
   * @memberof ScreensPanelComponent
   */
  public showBottomBar() : void{

    this.showToolBar = true;

    setTimeout(() => {
      this.showToolBar = false;
    }, 6000);
}




}
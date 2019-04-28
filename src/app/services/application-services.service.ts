import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ColorState } from '../models/color.models';

@Injectable({
  providedIn: 'root'
})
export class ApplicationServicesService {

  
  /**
   * To store the color state
   * @private
   * @type {BehaviorSubject<Color>}
   * @memberof ApplicationServicesService
   */
  private colorState : BehaviorSubject<ColorState>;

  constructor() {

    this.colorState = new BehaviorSubject<ColorState>({upperColor : '' , lowerColor : '', showInfo : true});
   }


   /**
    * Function to get the subject variable as a observable
    * @returns {Observable<Color>}
    * @memberof ApplicationServicesService
    */
   public getColorState() : Observable<ColorState> {
     
    return this.colorState.asObservable();
   }


   /**
    * Function to set/Update the current state of the colors
    * @param {Color} state
    * @returns {void}
    * @memberof ApplicationServicesService
    */
   public setColorState(state : ColorState) : void {

    return this.colorState.next(Object.assign({},state));
   } 
}

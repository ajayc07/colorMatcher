import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  
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
  ]

  public upperColor : string = "";
  
  public lowerColor : string = "";

  public toggleFlag : boolean = false;
  
  public showInfo : boolean = true;

  public showItem : number = 1;

  // ngOnInit() {
    
  //   var upper = document.getElementById('upper');
  //   var lower = document.getElementById('lower');
    
  //   upper.setAttributeNS(null,"fill",this.upperColor);
  //   lower.setAttributeNS(null,"fill",this.lowerColor);

  // }

  public getColors (color : any) : void {
    
    this.showInfo = false;
    
    this.toggleFlag = !this.toggleFlag;
    this.upperColor = color.upper;
    this.lowerColor = color.lower;
    
    if(this.toggleFlag) {
      this.toggleColor();
    }

    this.setColors();
  }

  public setColors() : void {

    var upper = document.getElementById('upper');
    var lower = document.getElementById('lower');
    
    if (upper && lower){

      upper.setAttributeNS(null,"fill",this.upperColor);
      lower.setAttributeNS(null,"fill",this.lowerColor);
    }
  }

  public toggleColor() : void {

    let temp = this.upperColor;
    this.upperColor = this.lowerColor;
    this.lowerColor = temp;
  }

  public next(inScreen : number) : void{

    this.showItem = inScreen;
  }

  public customColorChange(customColor: any) : void {

    console.log(customColor);

    this.showInfo = false;

    if (customColor['target']['id'] == 'custom-upper') {
      
      this.upperColor = customColor['target']['value'];

    } else if (customColor['target']['id'] == 'custom-lower') {
      
      this.lowerColor = customColor['target']['value'];
    }
    
    this.setColors();
  }


}

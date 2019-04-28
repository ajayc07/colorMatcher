export interface Color {

    upperColor : string;
    lowerColor : string;
}

export interface ColorState extends Color {

    showInfo? : boolean;
    toggle? : boolean;    
}
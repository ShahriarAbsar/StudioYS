import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStatesService {

  constructor() { }

  backgroundColor: string = 'white';
  someRandom: number = 3

  setBackgroundColor(color: string) {
    this.backgroundColor = color;
    document.documentElement.style.setProperty('--bg-color', this.backgroundColor);
  }

  changeRandom(num: number) {
    this.someRandom += num;
  }
}

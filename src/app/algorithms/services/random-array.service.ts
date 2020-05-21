import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomArrayService {

  constructor() { }

  generateArray() {
    let randInts = [];
    while (randInts.length < 100) {
      randInts.push(this.randomInt(100, 5))
    }
    return randInts;
  }

  randomInt(max: number, min: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

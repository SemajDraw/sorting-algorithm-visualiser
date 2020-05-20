import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit {

  title: string;
  array: number[];

  constructor() {
    this.title = 'Bubble Sort';
    this.array = this.generateArray();
    console.log('Constructor', this.array);
  }

  ngOnInit() {
  }

  generateArray() {
    let randInts = [];
    while (randInts.length <= 49) {
      let rand: number = this.randomInt()
      if (randInts.indexOf(rand) !> -1) {
        randInts.push(rand);
      }
    }
    return randInts;
  }

  randomInt() {
    return Math.floor(Math.random() * (100 - 1)) + 1;
  }

  shuffleArray() {
    this.array = this.generateArray();
    console.log('Shuffle', this.array);
  }

  startAlgo() {

  }

}

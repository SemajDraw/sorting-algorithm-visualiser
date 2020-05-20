import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting-sort',
  templateUrl: './counting-sort.component.html',
  styleUrls: ['./counting-sort.component.css']
})
export class CountingSortComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'Counting Sort';
  }

  ngOnInit() {
  }

  startAlgo() {

  }

}

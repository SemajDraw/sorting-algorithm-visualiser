import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['./selection-sort.component.css']
})
export class SelectionSortComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'Selection Sort';
  }

  ngOnInit() {
  }

  startAlgo() {

  }

}

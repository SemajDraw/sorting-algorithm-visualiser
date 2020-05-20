import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.css']
})
export class QuickSortComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'Quick Sort';
  }

  ngOnInit() {
  }

  startAlgo() {

  }

}

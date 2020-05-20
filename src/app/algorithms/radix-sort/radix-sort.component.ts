import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radix-sort',
  templateUrl: './radix-sort.component.html',
  styleUrls: ['./radix-sort.component.css']
})
export class RadixSortComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'Radix Sort';
  }

  ngOnInit() {
  }

  startAlgo() {

  }

}

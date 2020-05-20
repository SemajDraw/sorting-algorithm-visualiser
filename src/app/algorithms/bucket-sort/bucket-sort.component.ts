import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucket-sort',
  templateUrl: './bucket-sort.component.html',
  styleUrls: ['./bucket-sort.component.css']
})
export class BucketSortComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'Bucket Sort';
  }

  ngOnInit() {
  }

  startAlgo() {

  }

}

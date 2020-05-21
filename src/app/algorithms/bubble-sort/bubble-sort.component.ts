import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {RandomArrayService} from "../services/random-array.service";
import {GraphService} from "../services/graph/graph.service";

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit, AfterViewInit {

  title: string;
  array: number[];
  @ViewChild('graph', {static: false}) graph: ElementRef;

  constructor(private randomArray: RandomArrayService, private graphService: GraphService,
              private renderer: Renderer2) {
    this.title = 'Bubble Sort';
    this.array = this.randomArray.generateArray();
  }

  ngOnInit() {

  }

  ngAfterViewInit () {
    this.renderGraph(this.array)
  }

  renderGraph(array: number[]) {
    this.graph.nativeElement.innerHTML = null;
    this.graphService.generateGraph(array)
        .map(element => this.renderer.appendChild(this.graph.nativeElement, element));
  }

  shuffleArray() {
    this.array = this.randomArray.generateArray();
    this.renderGraph(this.array);
  }

  startAlgo() {

  }

}

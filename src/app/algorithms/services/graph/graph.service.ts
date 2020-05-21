import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  generateGraph(array: number[]) {
    return array.map((value, index) => {
      let div = this.renderer.createElement('div');
      div.id = index;
      div.class = 'bar col-auto';
      div.style.height = `${value}%`;
      div.style.width = 'calc(1% - 2px)';
      div.style.margin = '0 1px 0 1px';
      div.style.backgroundColor = 'pink';
      div.value = value;
      return div;
    });
  }
}

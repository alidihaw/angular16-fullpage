import { Component, OnInit } from '@angular/core';
import { fullpageOptions, fullpageApi } from 'fullpage.js/dist/fullpage.extensions.min';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeExampleComponent implements OnInit {
  config: fullpageOptions;
  fullpageApi!: fullpageApi;

  constructor() {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      scrollOverflow: true,
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      credits: {
        enabled: false,
      },
      // events callback
      afterLoad: (origin: any, destination: any, direction: any) => {
        console.log(destination);
      },
      afterRender: () => {
        console.log('afterRender');
      },
      afterResize: (width: number, height: number) => {
        console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section: any, origin: any, destination: any, direction: any) => {
        console.log(destination);
      }
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef: any) {
    this.fullpageApi = fullPageRef;
  }

}

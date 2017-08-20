import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'flippy',
  template: `
    <ng-content></ng-content>
  `
})
export class FlippyComponent implements OnInit, OnDestroy {
  contentMutationObs: MutationObserver;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.contentMutationObs = new MutationObserver(this.handleMutation);

    this.contentMutationObs.observe(this.elementRef.nativeElement, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true
    });
  }

  ngDoCheck() {
    console.log('RUNNING CHANGE DETECTION')
  }

  ngOnDestroy() {
    this.contentMutationObs.disconnect();
  }

  handleMutation = (mutation) => {
    // console.log('Mutation: ', mutation);
  }
}
// <h1>Flipp says {{messages[activeMsg]}}</h1>
@Component({
  selector: 'messager',
  template: `
    <div *ngIf="staticNum === 0">
      <h2>Nobody expects the</h2>
      <button>click</button>
    </div>
  `
})
export class MessagerComponent implements OnInit, OnDestroy {
  activeMsg = 0;
  staticNum = 0;
  messages = [
    'yo',
    'yo',
    'yo',
    'yo',
    'yo',
    'yo',
    // "I'm changing",
    // 'nother message',
    // 'okay, think this is good',
    // 'one more',
  ];
  tickInterval = 1000;
  intervalCancelToken;
  console = console;
  ngOnInit() {
    // this.intervalCancelToken = setInterval(this.tickMessage, this.tickInterval);
  }

  ngOnDestroy() {
    this.intervalCancelToken && clearInterval(this.intervalCancelToken);
  }

  tickMessage = () => {
    this.activeMsg = (this.activeMsg + 1) % this.messages.length;
  }

  oops() {
    return this.staticNum;
  }
}

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
    <flippy>
      <messager></messager>
    </flippy>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

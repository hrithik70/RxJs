import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  panels = [
    { active: true, name: 'Introduction of RxJs',disabled: false ,content:"Hello", serialNo:"1",},
    { active: false, disabled: false, name: 'Understand Observer Software Pattern',content:"Hi", serialNo:"2"},
    { active: false, disabled: false, name: ' Integrating RxJS library with other popular Frameworks like Angular, Vue, and React - RxJS.',content:"Hmmm", serialNo:"3"},
    { active: false, disabled: false, name: 'Convert JavaScript arrays, Document Event Handlers and promises to RxJS Observables - RxJS.',content:"Hmmm", serialNo:"4"},
    { active: false, disabled: false, name: 'Create a new Custom Observable from scratch using the RxJS Observable object - RxJS',content:"Hmmm", serialNo:"5"},
    { active: false, disabled: false, name: 'Different ways of creating the observer by object & class and subscribing to Observables in RxJS.',content:"Hmmm", serialNo:"6"},
    { active: false, disabled: false, name: 'Observables vs Functions. Understand the similarities & differences between them - RxJS.',content:"Hmmm", serialNo:"7"},
    { active: false, disabled: false, name: 'Cancelling the Subscribed Observable execution using the Subscription unsubscribe method - RxJS',content:"Hmmm", serialNo:"8"},
    { active: false, disabled: false, name: 'Avoid Memory leakage when subscribing and unsubscribing Custom Observable by cleaning Code - RxJS',content:"Hmmm", serialNo:"9"},
    { active: false, disabled: false, name: 'Understanding RxJS Operators. Two kinds of operators like Pipeable & Creation Operators in RxJS.',content:"Hmmm", serialNo:"10"},
  ];

}

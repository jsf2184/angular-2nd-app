import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-directive',
  templateUrl: './exercise-directive.component.html',
  styles: [`
    .laterEntry {
      color: white;
    }
  `]

})
export class ExerciseDirectiveComponent implements OnInit {

  displayParagraph = true;
  buttonClicks = [];

  constructor() { }

  ngOnInit() {
  }

  onDisplayParagraphButtonClick() {
    this.displayParagraph = !this.displayParagraph;
    this.buttonClicks.push(this.buttonClicks.length + 1);
  }

  getElementBackgroundColor(v) {
    console.log('hi v = ' + v);
    return v >= 4 ? 'blue' : 'white';
  }

}

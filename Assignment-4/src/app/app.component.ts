import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  counter: number = 0;

  nums: number[] = [];

  myInterval : any;

  onStarted(last_number: number) {
    this.nums.push(last_number);
  }

}

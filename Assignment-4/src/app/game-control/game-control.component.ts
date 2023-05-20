import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counter: number = 0;

  myInterval;

  @Output() startGame = new EventEmitter<number>();

  onStart(){
    this.myInterval = setInterval(() => {
      this.counter++;
      this.startGame.emit(
        this.counter
      );
    }, 1000);
  }

  onStop(){
    clearInterval(this.myInterval);
  }

}

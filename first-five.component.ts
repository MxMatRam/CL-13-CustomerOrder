import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-five',
  templateUrl: './first-five.component.html',
  styleUrls: ['./first-five.component.css']
})
export class FirstFiveComponent {
  @Input() orderList = [];
}
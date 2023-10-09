import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-others',
  templateUrl: './all-others.component.html',
  styleUrls: ['./all-others.component.css']
})
export class AllOthersComponent {
  @Input() orderList = [];
}
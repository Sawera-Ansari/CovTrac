import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input()
  data : any;

  @Input()
  scope : any;

  constructor() {}

  ngOnInit(): void {
  }

}

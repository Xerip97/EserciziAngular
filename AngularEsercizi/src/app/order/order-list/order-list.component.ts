import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  userSingle: number[] = [1, 2, 3];

  constructor() {}

  ngOnInit(): void {}
}

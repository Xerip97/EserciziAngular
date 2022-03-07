import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent implements OnInit {
  @Input() user!: User;
  @Input() userIndex!: number;
  @Output() clickDeleteUser = new EventEmitter<User>();
  constructor() {}

  ngOnInit(): void {}
  deleteUser(user: User) {
    this.clickDeleteUser.emit(user);
  }
}

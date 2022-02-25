import { Component, OnInit } from '@angular/core';
import { User } from '../../../../2. Typescript esercizio 2/start';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  mario = new User(
    3487,
    'Mario',
    'Rossi',
    25,
    new Date(1995, 12, 14),
    {
      city: 'Roma',
      street: 'Via roma 10',
      postalCode: '00100',
    },
    'staff',
    'MarioRossi80',
    'https://bit.ly/3yRngEP',
    [
      {
        id: 148979,
        name: 'Develhope',
        description: 'La migliore',
        location: {
          city: 'Palermo',
          street: 'Via Libertà 58',
          postalCode: '90139',
        },
      },
      {
        id: 123123,
        name: 'Apple',
        description: 'E insomma...',
        location: {
          city: 'Cupertino',
          street: 'One Apple Park Way',
          postalCode: '95014',
        },
      },
    ],
    'male'
  );
  constructor() {}

  ngOnInit(): void {}
}

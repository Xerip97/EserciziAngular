import {
  Person,
  Address,
  role,
  Company,
  gender,
} from "../1. Typescript esercizio 1/start";

class User implements Person {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Address;
  role: role;
  username: string;
  profilePhotoUrl: string;
  companies: Company[];
  gender: gender;
  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }

  constructor(
    id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: string,
    address: Address,
    role: role,
    username: string,
    profilePhotoUrl: string,
    companies: Array<Company>,
    gender: gender
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.address = { ...address };
    this.role = role;
    this.username = username;
    this.profilePhotoUrl = profilePhotoUrl;
    this.companies = [...companies];
    companies.forEach((company) => {
      company.location = { ...company.location };
    });
    this.gender = gender;
  }
}
let user = new User(
  1,
  "Fabio",
  "Viola",
  24,
  "16/10/1997",
  { city: "Cianciana", street: "Via Carubia 30", postalCode: "92012" },
  "student",
  "Xerip",
  "url",
  [
    {
      id: 148979,
      name: "Develhope",
      description: "La migliore",
      location: {
        city: "Palermo",
        street: "Via Libertà 58",
        postalCode: "90139",
      },
    },
  ],
  "male"
);

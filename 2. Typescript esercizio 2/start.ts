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
    this.gender = gender;
  }
}

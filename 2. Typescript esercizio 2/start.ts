import {Person, Address, role, Company, gender} from "../1. Typescript esercizio 1/start";

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
     };
}

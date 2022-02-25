export const obj: Person = {
  id: 3487,
  name: "Mario",
  surname: "Rossi",
  age: 25,
  dateOfBirth: new Date(1995, 12, 14),
  address: {
    city: "Roma",
    street: "Via roma 10",
    postalCode: "00100",
  },
  role: "staff", // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
  username: "MarioRossi80",
  profilePhotoUrl: "https://bit.ly/3yRngEP",
  companies: [
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
    {
      id: 123123,
      name: "Apple",
      description: "E insomma...",
      location: {
        city: "Cupertino",
        street: "One Apple Park Way",
        postalCode: "95014",
      },
    },
  ],
  gender: "male", // Generi possibili: 'male', 'female', 'other'
};

export interface Address {
  city: string;
  street: string;
  postalCode: string;
}

export interface Company {
  id: number;
  name: string;
  description: string;
  location: Address;
}

export type gender = "male" | "female" | "other";

export type role = "staff" | "student" | "manager" | "admin";

export interface Person {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: Date;
  address: Address;
  role: role;
  username: string;
  profilePhotoUrl: string;
  companies: Company[];
  gender: gender;
}

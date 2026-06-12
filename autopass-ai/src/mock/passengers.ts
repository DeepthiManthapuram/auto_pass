import { faker } from "@faker-js/faker";
import { Passenger } from "@/types/passenger";

export const passengers: Passenger[] = Array.from(
  { length: 100 },
  (_, index) => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    phone: faker.phone.number("9#########"),
    age: faker.number.int({ min: 18, max: 65 }),
    gender: faker.helpers.arrayElement([
      "male",
      "female",
      "other",
    ]),
    address: faker.location.streetAddress(),
    faceImage: faker.image.avatar(),
    registrationDate: faker.date.past().toISOString(),
    activeStatus: faker.datatype.boolean(),
  })
);
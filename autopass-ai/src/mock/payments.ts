import { faker } from "@faker-js/faker";
import { Payment } from "@/types/payment";
import { passengers } from "./passengers";

export const payments: Payment[] = Array.from(
  { length: 300 },
  () => ({
    id: faker.string.uuid(),
    passengerId:
      passengers[
        faker.number.int({
          min: 0,
          max: passengers.length - 1,
        })
      ].id,

    amount: faker.helpers.arrayElement([
      500,
      700,
      1000,
      1200,
    ]),

    paymentMethod: faker.helpers.arrayElement([
      "upi",
      "googlepay",
      "phonepe",
      "paytm",
      "cash",
    ]),

    transactionId: faker.string.alphanumeric(12),

    paymentDate:
      faker.date.recent().toISOString(),

    expiryDate:
      faker.date.future().toISOString(),

    status: faker.helpers.arrayElement([
      "paid",
      "pending",
      "failed",
    ]),
  })
);
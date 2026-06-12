import { faker } from "@faker-js/faker";

export const notifications = Array.from(
  { length: 200 },
  () => ({
    id: faker.string.uuid(),

    type: faker.helpers.arrayElement([
      "7_days",
      "5_days",
      "3_days",
      "1_day",
      "expired",
    ]),

    channel: faker.helpers.arrayElement([
      "sms",
      "voice",
      "in_app",
    ]),

    sentDate:
      faker.date.recent().toISOString(),

    status: faker.helpers.arrayElement([
      "sent",
      "delivered",
      "failed",
    ]),
  })
);
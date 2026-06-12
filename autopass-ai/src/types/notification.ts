export interface Notification {
  id: string;
  passengerId: string;

  type:
    | "7_days"
    | "5_days"
    | "3_days"
    | "1_day"
    | "expired";

  channel:
    | "sms"
    | "voice"
    | "in_app";

  sentDate: string;

  status:
    | "sent"
    | "delivered"
    | "failed";
}
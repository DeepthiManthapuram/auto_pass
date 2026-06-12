export interface Payment {
  id: string;
  passengerId: string;
  amount: number;
  paymentMethod:
    | "upi"
    | "googlepay"
    | "phonepe"
    | "paytm"
    | "cash";

  transactionId: string;
  paymentDate: string;
  expiryDate: string;
  status: "paid" | "pending" | "failed";
}
export interface Owner {
  id: string;
  name: string;
  phone: string;
  email: string;
  autoNumber: string;
  drivingLicense: string;
  profileImage: string;
  verificationStatus: "pending" | "verified" | "rejected";
  createdAt: string;
}
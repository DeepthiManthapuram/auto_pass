export interface Report {
  id: string;

  reportType:
    | "daily"
    | "weekly"
    | "monthly"
    | "revenue"
    | "renewal";

  generatedDate: string;

  fileUrl?: string;
}
export type JobPosition = {
  id: string;
  company: string;
  positionName: string;
  category:
    | "backend"
    | "data analyst"
    | "devops"
    | "fullstack"
    | "frontend"
    | "ML"
    | "mobile";
  publishedAt: Date; // 2025-03-13
  location: string[]; // countries where the client wants to hire from.
  skills: string[];
  experience?: [number?, number?]; // range of experience in years
  rate?: number | [number, number]; // amount client wants to pay for this position per hour
  length?: number; // duration in months of a contract
  employmentType: "fulltime" | "parttime" | "contract";
  applicationStatus:
    | "not-applied"
    | "applied"
    | "interviewing"
    | "hired"
    | "client rejected"
    | "client declined"
    | "location not accepted";
};

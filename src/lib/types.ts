export type JobItem = {
  badgeLetters: string;
  title: string;
  company: string;
  date: string;
  id: number;
  relevanceScore: number;
  daysAgo: number;
};
export type JobItemExpanded = JobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  salary: string;
  location: string;
  coverImgURL: string;
  companyURL: string;
};

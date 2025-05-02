import {Job} from "./job.model";

export interface JobInfo {
  jobDto: Job;
  active: boolean;
  experience: number;
  requiredProgressForLevelUp: number;
}

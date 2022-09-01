import { Injectable } from '@angular/core';
import { IData } from '../interfaces/interfaces';
import DATA from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobs:IData[] = DATA;

  filters:string[] = [];

  jobsFilters:IData[] = [];

  constructor() { }

  getJobsFilters() {
    this.jobsFilters = this.jobs.filter(job => {
      if (this.filters.length <= 0) return job
      return this.filters.every((filter)=> [job.role, job.level, ...job.tools, ...job.languages].includes(filter));
    });
    return this.jobsFilters;
  };

  getFilters(){
    return this.filters;
  };

  removeFilter(index:number) {
    this.filters.splice(index,1);
    return this.getJobsFilters();
  }


  addToFilter(tag:string) {
    if (!this.filters.includes(tag)) {
      this.filters.push(tag);
    }
    return this.getJobsFilters();
  }

  clearFilter() {
    this.filters = [];
    return this.filters
  }

  cleargetJobsFilters() {
    return this.getJobsFilters();
  }

}

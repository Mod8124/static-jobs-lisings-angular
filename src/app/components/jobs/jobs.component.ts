import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor(private jobService:JobService) { }

  jobs = this.jobService.getJobsFilters();
  filters = this.jobService.getFilters();

  ngOnInit(): void {
  }

  addFilter(tag:string) {
   this.jobs = this.jobService.addToFilter(tag);
  }

  deleteFilters(i:number) {
   this.jobs = this.jobService.removeFilter(i);

  }

  clearFilters() {
    this.filters = this.jobService.clearFilter();
    this.jobs = this.jobService.cleargetJobsFilters();
  }


}

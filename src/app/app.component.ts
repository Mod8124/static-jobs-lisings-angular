import { Component, OnInit } from '@angular/core';
import { JobService } from './services/job.service';
import { IData } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  filters!:string[] ;
  jobs!:IData[]

  constructor(private jobService:JobService) {}

  ngOnInit(): void {
    // this.getFilters();
    // this.getJobs();
  }
  
//   //jobs
//   getJobs():void {
//     this.jobService.getJobs().subscribe(job => this.jobs = job);
//   }

//   addFilter(tag:string):void {
//     this.jobService.addFilters(tag);
//   }

//   //filter
//   getFilters():void {
//     this.jobService.getFilters().subscribe(filter => this.filters = filter);
//  }

//  deleteFilter(index:number):void {
//    this.jobService.removeFilters(index).subscribe(filter => this.filters = filter);
//    this.getJobs();
//  }

//  getClear():void {
//    this.jobService.clearFilters().subscribe(filter => this.filters = filter);
//    this.jobService.getJobs().subscribe(job => this.jobs = job);
//  }
  

}

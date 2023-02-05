import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private service:GlobalServiceService) { }

  loadFlag=true;
  projects:Project[]= [];

  ngOnInit(): void {
    this.getProjects()
  }
  getProjects(){
    this.service.get("project","getAllProjects").subscribe(
      res =>{ this.projects = res.data
        console.log(this.projects)
      },
      err => {console.log(err);},
      ()=>{
        this.loadFlag=false
      })
  }
}

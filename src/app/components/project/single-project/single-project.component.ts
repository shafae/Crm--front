import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit{

projectId=this.activeRoute.snapshot.paramMap.get('id');
project:Project=new Project
loadFlag=true

  constructor(private service:GlobalServiceService,private activeRoute:ActivatedRoute){

  }

  ngOnInit(): void {
    this.getProject()
  }

  getProject(){
    this.service.getById(this.projectId,"project","getProject").subscribe(
      (res)=>{
      this.project=res.data
    },
      (e)=>{
        console.log(e)
      },
      ()=>{
        this.loadFlag=false
      }

    )
  }

}

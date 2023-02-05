import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  constructor(private service: GlobalServiceService ,private activeRoute:ActivatedRoute , private router:Router)  { }

  ngOnInit(): void {
    this.getProject()
  }
  project:Project=new Project
  projectId=this.activeRoute.snapshot.paramMap.get('id')

  getProject(){
    this.service.getById(this.projectId,"project","getProject").subscribe(
      (res)=>{
        this.project=res.data

      },
      (e)=>{
        console.log(e);

      }
    )
  }

  selectOption(ev:any){
   this.project.type=ev.target.value

  }
  handleSubmit(form:NgForm){
this.service.edit(this.project,this.projectId,"project","editProject").subscribe(
  (res)=>{
    alert("project updated")
    this.router.navigate(["addProject"])

  }
)
  }
}

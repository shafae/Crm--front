import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  constructor(private service: GlobalServiceService) { }

  ngOnInit(): void {
    this.getProjects()
  }

  project:Project=new Project
  projects:Project[]=[]
  image:any[]=[]

  handleSubmit(form : NgForm){
    if(form.valid){
      this.service.post(this.project,"project","addProject").subscribe(res=>{
        console.log(res)
        form.reset()
        this.getProjects()

      }, (e)=>{
        console.log(e)
      }, ()=>{

      })

    }
  }
  getProjects(){
    this.service.get("project","getAllProjects").subscribe(
      res =>{ this.projects = res.data
        console.log(this.projects)
      },
      err => {console.log(err);}
      )
  }

  delete(id:any){
    this.service.delete(id,"project","deleteProject").subscribe(
      res=> {alert("deleted")
      this.getProjects()},
      (e)=>{
        console.log(e);

      }
    )
  }
  handleChange(eve:any){
    this.image = [...eve.target.files]
  }
  handleUpload(id:any){
    let formData = new FormData()
    this.image.forEach(element => {
      formData.append('project' , element)
    });
   if(this.image.length>0) {
    this.service.edit( formData,id,"project","uploadProjectImg").subscribe(
      (res)=>{
        console.log(res)
        alert("photo uploaded")
      },
      (e)=>{
console.log(e);

      }
    )
  }}

  selectType(ev:any){
    this.project.type=ev.target.value
  }

}

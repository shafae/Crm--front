import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Building } from 'src/app/models/building';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.css']
})
export class AddBuildingComponent implements OnInit {
  constructor(private service: GlobalServiceService ,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBuildings()
  }
  projectId=this.activeRoute.snapshot.paramMap.get('id')
  building:Building=new Building
  buildings:Building[]=[]
  image:any[]=[]

  handleSubmit(form : NgForm){
    if(form.valid){
      this.service.postToId(this.projectId,this.building,"building","addBuilding").subscribe(res=>{
        console.log(res)
        form.reset()
        this.getBuildings()

      }, (e)=>{
        console.log(e)
      }, ()=>{

      })

    }
  }
  getBuildings(){
    this.service.getById(this.projectId,"building","getAllProjectBuildings").subscribe(
      res =>{ this.buildings = res.data
        console.log(this.buildings)
      },
      err => {console.log(err);}
      )
  }

  delete(id:any){
    this.service.delete(id,"building","deleteBuilding").subscribe(
      res=> {alert("deleted")
      this.getBuildings()},
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
      formData.append('building' , element)
    });

   if(this.image) {
    this.service.edit( formData,id,"building","uploadBuildingImg").subscribe(
      (res)=>{
        console.log(res)
        alert("photo uploaded")
      },
      (e)=>{
        console.log(e);

      }
    )
  }}

}

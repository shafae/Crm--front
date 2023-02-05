import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from 'src/app/models/building';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-edit-building',
  templateUrl: './edit-building.component.html',
  styleUrls: ['./edit-building.component.css']
})
export class EditBuildingComponent implements OnInit {
  constructor(private service: GlobalServiceService ,private activeRoute:ActivatedRoute , private router:Router)  { }

  ngOnInit(): void {
    this.getProject()
  }
  building:Building=new Building
  buildingId=this.activeRoute.snapshot.paramMap.get('id')

  getProject(){
    this.service.getById(this.buildingId,"building","getBuilding").subscribe(
      (res)=>{
        this.building=res.data

      },
      (e)=>{
        console.log(e);

      }
    )
  }


  handleSubmit(form:NgForm,projectId:any){
this.service.edit(this.building,this.buildingId,"building","editBuilding").subscribe(
  (res)=>{
    alert("building updated")
    this.router.navigate(["addBuilding",projectId])

  }
)
  }

}

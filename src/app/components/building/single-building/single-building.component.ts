import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Building } from 'src/app/models/building';
import { Project } from 'src/app/models/project';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-single-building',
  templateUrl: './single-building.component.html',
  styleUrls: ['./single-building.component.css']
})
export class SingleBuildingComponent implements OnInit{

  buildingId=this.activeRoute.snapshot.paramMap.get('id');
  building:Building=new Building
  loadFlag=true

    constructor(private service:GlobalServiceService,private activeRoute:ActivatedRoute){

    }

  ngOnInit(): void {
    this.getBuilding()
  }

  getBuilding(){
    this.service.getById(this.buildingId,"building","getBuilding").subscribe(
      (res)=>{
      this.building=res.data
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

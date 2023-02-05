import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unit } from 'src/app/models/unit';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-single-unit',
  templateUrl: './single-unit.component.html',
  styleUrls: ['./single-unit.component.css']
})
export class SingleUnitComponent implements OnInit{

  unitId=this.activeRoute.snapshot.paramMap.get('id');
  unit:Unit=new Unit
  loadFlag=true

    constructor(private service:GlobalServiceService,private activeRoute:ActivatedRoute){

    }

  ngOnInit(): void {
    this.getUnit()
  }

  getUnit(){
    this.service.getById(this.unitId,"unit","getUnit").subscribe(
      (res)=>{
      this.unit=res.data
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

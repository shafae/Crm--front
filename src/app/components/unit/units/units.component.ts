import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unit } from 'src/app/models/unit';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  constructor(private service:GlobalServiceService,private activeRoute:ActivatedRoute) { }
  loadFlag=true
  unitId=this.activeRoute.snapshot.paramMap.get('id')

  ngOnInit(): void {
    this.getUnits();
  }


  units:Unit[]=[]
  getUnits(){
    this.service.getById(this.unitId,"unit","getAllBuildingUnits").subscribe(
      res =>{ this.units = res.data
        console.log(this.units)
      },
      err => {console.log(err);},
      ()=>{
        this.loadFlag=false
      })
  }

}

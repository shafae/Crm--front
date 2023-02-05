import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/models/building';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  constructor(private service:GlobalServiceService) { }
  loadFlag=true
  ngOnInit(): void {
    this.getBuildings();
  }
id:string="63d0645d05268ef934d00771"
  buildings:Building[]=[]
  getBuildings(){
    this.service.getById(this.id,"building","getAllProjectBuildings").subscribe(
      res =>{ this.buildings = res.data
        console.log(this.buildings)
      },
      err => {console.log(err);},
      ()=>{
        this.loadFlag=false
      }
      )
  }
}


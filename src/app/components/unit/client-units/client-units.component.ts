import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/models/unit';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-client-units',
  templateUrl: './client-units.component.html',
  styleUrls: ['./client-units.component.css']
})
export class ClientUnitsComponent implements OnInit {
  constructor(private service: GlobalServiceService) { }
  units:Unit[]=[]

  ngOnInit(): void {
      this.getUnits()
  }
  getUnits(){
    this.service.get("unit","getClientUnits").subscribe(
      res =>{ this.units = res.data
        console.log(this.units)
      },
      err => {console.log(err);}
      )
  }

}

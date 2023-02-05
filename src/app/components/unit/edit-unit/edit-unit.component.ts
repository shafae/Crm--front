import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Unit } from 'src/app/models/unit';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-edit-unit',
  templateUrl: './edit-unit.component.html',
  styleUrls: ['./edit-unit.component.css']
})
export class EditUnitComponent implements OnInit {
  constructor(private service: GlobalServiceService ,private activeRoute:ActivatedRoute , private router:Router)  { }

  ngOnInit(): void {
    this.getUnit()
  }
  unit:Unit=new Unit
  unitId=this.activeRoute.snapshot.paramMap.get('id')

  getUnit(){
    this.service.getById(this.unitId,"unit","getUnit").subscribe(
      (res)=>{
        this.unit=res.data

      },
      (e)=>{
        console.log(e);

      }
    )
  }

  selectOption(ev:any){
   this.unit.status=ev.target.value

  }
  handleSubmit(form:NgForm,buildingId:any){
this.service.edit(this.unit,this.unitId,"unit","editUnit").subscribe(
  (res)=>{
    alert("unit updated")
    this.router.navigate(["addUnit",buildingId])

  }
)
  }

}

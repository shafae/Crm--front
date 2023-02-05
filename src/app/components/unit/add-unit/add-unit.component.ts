import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Unit } from 'src/app/models/unit';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent {
  constructor(private service: GlobalServiceService ,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUnits()
  }
  buildingId=this.activeRoute.snapshot.paramMap.get('id')
  unit:Unit=new Unit
  units:Unit[]=[]
  image:any[]=[]
  data:{email:""}={email:""}

  handleSubmit(form : NgForm){
    if(form.valid){
      this.service.postToId(this.buildingId,this.unit,"unit","addUnit").subscribe(res=>{
        console.log(res)
        form.reset()
        this.getUnits()

      }, (e)=>{
        console.log(e)
      }, ()=>{

      })

    }
  }
  getUnits(){
    this.service.getById(this.buildingId,"unit","getAllBuildingUnits").subscribe(
      res =>{ this.units = res.data
        console.log(this.units)
      },
      err => {console.log(err);}
      )
  }

  delete(id:any){
    this.service.delete(id,"unit","deleteUnit").subscribe(
      res=> {alert("deleted")
      this.getUnits()},
      (e)=>{
        console.log(e);

      }
    )
  }

  selectOption(ev:any){
    this.unit.status=ev.target.value

   }
   handleChange(eve:any){
    this.image = [...eve.target.files]
  }
  handleUpload(id:any){
    let formData = new FormData()
    this.image.forEach(element => {
      formData.append('unit' , element)
    });
   if(this.image) {
    this.service.edit( formData,id,"unit","uploadUnitImg").subscribe(
      (res)=>{
        console.log(res)
        alert("photo uploaded")
      },
      (e)=>{
console.log(e);

      }
    )
  }}

  onchange(ev:any){
    this.data.email=ev.target.value
  }

  buyUnit(id:any){
    this.service.edit(this.data,id,"unit","buyUnit").subscribe(
      (res)=>{alert("unit is bought")
      this.getUnits()
    },
    (e)=>{
      console.log(e);

    }
    )
  }
}

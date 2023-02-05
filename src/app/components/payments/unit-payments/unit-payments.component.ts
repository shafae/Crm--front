import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from 'src/app/models/payment';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-unit-payments',
  templateUrl: './unit-payments.component.html',
  styleUrls: ['./unit-payments.component.css']
})
export class UnitPaymentsComponent implements OnInit{
  role=localStorage.getItem('role')
  showFlag:boolean=false
  message:string=""
  payments:Payment[]=[]
  unitId=this.activeRoute.snapshot.paramMap.get('id')
  constructor(private service: GlobalServiceService , private activeRoute:ActivatedRoute, private router:Router) {}

ngOnInit(): void {
    this.getPayments()
}

getPayments(){
  this.service.getById(this.unitId,"payment","getAllUnitPayments").subscribe(
    (res)=>{
      this.payments=res.data
      if(this.payments.length>0){
      this.showFlag=true
      }else{
        this.message="No payments yet"
       }
    },
    (e)=>{
      console.log(e);

    }
  )
}

delete(id:any){
  let confirmation = confirm("Are you sure you want to delete payment?");
  if(confirmation){
  this.service.delete(id,"payment","deletePayment").subscribe(
    res=> {
    this.getPayments()},
    (e)=>{
      console.log(e);

    }
  )
}
}

generatePdf(id:any){
  this.service.generatePdf(id,"payment","generatePdf").subscribe(
    (res)=>
    alert("pdf generated successfully"),
    (e)=>{
      console.log(e);
    }
  )
}

  }


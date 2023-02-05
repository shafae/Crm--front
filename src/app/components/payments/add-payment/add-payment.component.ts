import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Payment } from 'src/app/models/payment';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent {
  constructor(private service: GlobalServiceService , private activeRoute:ActivatedRoute) {
  }

payment:Payment=new Payment
unitId=this.activeRoute.snapshot.paramMap.get('id')
clientId=this.activeRoute.snapshot.paramMap.get('clientId')

  selectOption(ev:any){
    this.payment.payMethod=ev.target.value

   }

   handleSubmit(form:NgForm){
    if(form.valid)
      {
        this.service.postToIds(this.unitId,this.payment,"payment","addPayment","client",this.clientId).subscribe(
          (res)=>{
            alert("payment added")
                  },
          (e)=>{
            console.log(e);

                })
        }
  }
}

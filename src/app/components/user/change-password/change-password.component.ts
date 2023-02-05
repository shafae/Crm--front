import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor(private service: GlobalServiceService , private router:Router) { }

  data:{password:""}={password:""}


  handleSubmit(form : NgForm){
    if(form.valid){
      this.service.update(this.data,"user","changePassword").subscribe(
        res=>{
              alert("password Updated")
            this.router.navigate(["/profile"])
              }, (e)=>{
        console.log(e)
      }, ()=>{

      })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: GlobalServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  model:Login=new Login;
  errorMsg = ''
  errorFlag=false

  handleSubmit(form : NgForm){
    if(form.valid){
      this.service.post(this.model,"user","login").subscribe(res=>{
        console.log(res)
        localStorage.setItem('token' , res.data.token)
        localStorage.setItem('role',res.data.user.roleName)
        this.router.navigate([''])
      }, (e)=>{
        console.log(e)
         this.errorFlag = true
        this.errorMsg = "Email or password is wrong"
      }, ()=>{

      })
    }

  }
}

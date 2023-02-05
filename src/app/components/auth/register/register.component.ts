import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: GlobalServiceService) { }

  ngOnInit(): void {
    this.getRoles()
  }

  userForm:User=new User
  roles:Role[]=[]
  errorMsg = ''
  errorFlag=false

  handleSubmit(form : NgForm){
    if(form.valid){
      this.service.post(this.userForm,"user","register").subscribe(res=>{
        console.log(res)
      }, (e)=>{
        console.log(e)
         this.errorFlag = true
        this.errorMsg = "Email is exist"
      }, ()=>{

      })
    }
  }

  selectRole(ev:any){
    this.userForm.roleName=ev.target.value
  }
  selectGender(ev:any){
    this.userForm.gender=ev.target.value
  }


  getRoles(){
    this.service.get("role","getAllRole").subscribe(
      res =>{ this.roles = res.data
        console.log(this.roles)
      },
      err => {console.log(err);}
      )
  }

}

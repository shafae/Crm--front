import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm:User=new User
  roles:Role[]=[]
  userId=this.activeRoute.snapshot.paramMap.get('id')
  role=localStorage.getItem('role')

  constructor(private service: GlobalServiceService,private activeRoute:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.getRoles()
    this.getUser()
  }
  handleSubmit(form : NgForm){
    if(form.valid){
      this.service.edit(this.userForm,this.userId,"user","editUser").subscribe(
        res=>{
              alert("user Updated")
            this.router.navigate(["/allUsers"])
              }, (e)=>{
        console.log(e)
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

  getUser(){
    this.service.getById(this.userId,"user","getUser").subscribe(
      (res)=>{
        this.userForm=res.data
        console.log(this.userForm);

      },
      (e)=>{
        console.log(e);

      }
    )
    }
}

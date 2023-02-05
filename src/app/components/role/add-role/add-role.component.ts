import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from 'src/app/models/role';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  constructor(private service: GlobalServiceService) { }

  ngOnInit(): void {
    this.getRoles()
  }

  role:Role=new Role
  roles:Role[]=[]

  handleSubmit(form : NgForm){
    if(form.valid){
      this.service.post(this.role,"role","addRole").subscribe(res=>{
        console.log(res)
        form.reset()
        this.getRoles()

      }, (e)=>{
        console.log(e)
      }, ()=>{

      })

    }
  }

  getRoles(){
    this.service.get("role","getAllRole").subscribe(
      res =>{ this.roles = res.data
        console.log(this.roles)
      },
      err => {console.log(err);}
      )
  }

  delete(id:any){
    this.service.delete(id,"role","deleteRole").subscribe(
      res=> {alert("deleted")
      this.getRoles()},
      (e)=>{
        console.log(e);

      }
    )
  }


  onchange(ev:any){
    this.role.title=ev.target.value
  }
  edit(id:any){

    this.service.edit(this.role,id,"role","editRole").subscribe(
      res=>{
        alert("role updated")
      this.getRoles()
      },
      (e)=>{
          console.log(e);

      }
    )
  }
}

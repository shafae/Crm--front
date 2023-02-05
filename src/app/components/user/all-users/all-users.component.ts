import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  constructor(private service: GlobalServiceService) { }

users:User[]=[]

  ngOnInit(): void {
      this.getUsers()
  }

  getUsers(){
    this.service.get("user","").subscribe(
      res =>{ this.users = res.data
        console.log(this.users)
      },
      err => {console.log(err);}
      )
  }

  delete(id:any){let confirmation = confirm("Are you sure you want to delete payment?");
  if(confirmation){
    this.service.delete(id,"user","deleteUser").subscribe(
      (res)=>{
        this.getUsers()
      },
    (e)=>{console.log(e);
    }
    )
  }
  }

}

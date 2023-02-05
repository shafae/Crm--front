import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private service:GlobalServiceService){}
userForm:User=new User
ngOnInit(): void {
    this.getProfile()
}

getProfile(){
this.service.get("user","myProfile").subscribe(
  (res)=>{
    this.userForm=res.data.user
    console.log(this.userForm);

  },
  (e)=>{
    console.log(e);

  }
)
}


}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-update-profile-picture',
  templateUrl: './update-profile-picture.component.html',
  styleUrls: ['./update-profile-picture.component.css']
})
export class UpdateProfilePictureComponent {
  constructor(private service: GlobalServiceService, private router:Router) { }
  image:any

  handleChange(eve:any){
    this.image = eve.target.files[0]
  }
  handleUpload(){
    let formData = new FormData()
      formData.append('img',this.image)
   if(this.image) {
    this.service.update(formData,"user","profileImg").subscribe(
      (res)=>{
        console.log(res)
        alert("photo uploaded")
        this.router.navigate(["/profile"])
      },
      (e)=>{
console.log(e);

      }
    )
  }}
}

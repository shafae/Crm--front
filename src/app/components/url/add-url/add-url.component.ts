import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Url } from 'src/app/models/url';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.css']
})
export class AddUrlComponent implements OnInit {
  constructor(private service: GlobalServiceService) { }

  ngOnInit(): void {
    this.getUrls()
  }

  url:Url=new Url
  urls:Url[]=[]

  handleSubmit(form : NgForm){
    if(form.valid){
      this.service.post(this.url,"url","addUrl").subscribe(res=>{
        console.log(res)
        form.reset()
        this.getUrls()

      }, (e)=>{
        console.log(e)
      }, ()=>{

      })

    }
  }
  getUrls(){
    this.service.get("url","getAllUrl").subscribe(
      res =>{ this.urls = res.data
        console.log(this.urls)
      },
      err => {console.log(err);}
      )
  }

  delete(id:any){
    let confirmation = confirm("Are you sure you want to delete Url?");
    if(confirmation){
    this.service.delete(id,"url","deleteUrl").subscribe(
      res=> {
      this.getUrls()},
      (e)=>{
        console.log(e);

      }
    )
  }}

  onchange(ev:any){
    this.url.roles=ev.target.value
  }
  addRole(id:any){

    this.service.postToId(id,this.url,"url","addRoleToUrl").subscribe(
      res=>{
        alert("role added")
      this.getUrls()
      },
      (e)=>{
          console.log(e);

      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Url } from 'src/app/models/url';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-edit-url',
  templateUrl: './edit-url.component.html',
  styleUrls: ['./edit-url.component.css']
})
export class EditUrlComponent implements OnInit {
  constructor(private service: GlobalServiceService,private activeRoute:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.getUrl()
  }

  url:Url=new Url
  urlId=this.activeRoute.snapshot.paramMap.get('id')

  handleSubmit(){
    {
      this.service.edit(this.url,this.urlId,"url","editUrl").subscribe(res=>{
        console.log(res)
        this.router.navigate(["/addUrl"])

      }, (e)=>{
        console.log(e)
      }, ()=>{

      })

    }
  }

  getUrl(){
    this.service.getById(this.urlId,"url","getUrl").subscribe(
      (res)=>{
        this.url=res.data
        console.log(this.url);

      },
      (e)=>{
        console.log(e);

      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:GlobalServiceService) { }
role=localStorage.getItem('role')
token=localStorage.getItem('token')

  ngOnInit(): void {
  }

  logout(){
    this.service.logout()
  }
}

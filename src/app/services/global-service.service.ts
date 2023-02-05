import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor(private http: HttpClient,private router:Router) {
  }

  private baseUrl="http://localhost:3000/api"

  post(data: any , controllerName: string , action?: string): Observable<any> {


    if(action)
      return this.http.post(`${this.baseUrl}/${controllerName}/${action}`,data);

    return this.http.post(`${this.baseUrl}/${controllerName}`,data);
  }

  postToId(id:any ,data: any , controllerName: string , action?: string,id1?:any): Observable<any> {


    if(action && !id1)
      return this.http.post(`${this.baseUrl}/${controllerName}/${action}/${id}`,data);
      if(id1)
      return this.http.post(`${this.baseUrl}/${controllerName}/${action}/${id}/${id1}`,data);
    return this.http.post(`${this.baseUrl}/${controllerName}/${id}`,data);
  }

  postToIds(id:any ,data: any , controllerName: string , action?: string,action1?:string,id1?:any): Observable<any> {
      return this.http.post(`${this.baseUrl}/${controllerName}/${action}/${id}/${action1}/${id1}`,data);
  }

  get(controllerName: string , action?: string): Observable<any>{

    if(action)
      return this.http.get(`${this.baseUrl}/${controllerName}/${action}`);

    return this.http.get(`${this.baseUrl}/${controllerName}`);
  }

  getById(id:any ,controllerName: string , action?: string): Observable<any>{

    if(action)
      return this.http.get(`${this.baseUrl}/${controllerName}/${action}/${id}`);

    return this.http.get(`${this.baseUrl}/${controllerName}/${id}`);
  }

  edit(data: any ,id:any ,controllerName: string , action?: string): Observable<any>{

    if(action)
      return this.http.patch(`${this.baseUrl}/${controllerName}/${action}/${id}`,data);

    return this.http.patch(`${this.baseUrl}/${controllerName}/${id}`,data);
  }

  update(data:any,controllerName: string , action?: string): Observable<any>{

    if(action)
      return this.http.patch(`${this.baseUrl}/${controllerName}/${action}`,data);

    return this.http.patch(`${this.baseUrl}/${controllerName}`,data);
  }


  delete(id:any ,controllerName: string , action?: string): Observable<any>{

    if(action)
      return this.http.delete(`${this.baseUrl}/${controllerName}/${action}/${id}`);

    return this.http.delete(`${this.baseUrl}/${controllerName}/${id}`);
  }

  generatePdf(id:any ,controllerName: string , action?: string): Observable<any>{

    if(action)
      return this.http.post(`${this.baseUrl}/${controllerName}/${action}/${id}`,"");

    return this.http.post(`${this.baseUrl}/${controllerName}/${id}`,"");
  }


logout(){
  localStorage.removeItem('role')
  localStorage.removeItem('token')
  this.router.navigate([''])
}

}

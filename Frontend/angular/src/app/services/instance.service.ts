import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { GuardStatusService } from './guard-status.service';

@Injectable({
  providedIn: 'root'
})
export class InstanceService {

  constructor(private http:HttpClient,private status: GuardStatusService, private router: Router){}

  apiurl= "http://localhost:8080"
  guardStatus: boolean = false;


  postDataNew(firstname:any,lastname:any,emailid:any,password:any){
    let data = {
      firstname:firstname,
      lastname:lastname,
      emailid:emailid,
      password:password
    }
    let url = this.apiurl + "/signup"

    return this.http.post(url,data)
  
  }
  postDataOld(email:any,password:any){
    let data = {
      
      email:email,
      password:password
    }
    let url = this.apiurl + "/login"

    return this.http.post(url,data)
  
  }
  
  getUser(){
    let url = this.apiurl + "/userdata" 
    return this.http.get(url)
  }

  postUser(firstname:any, lastname:any, emailid:any, password:any){
    let data = {
      firstname:firstname,
      lastname:lastname,
      emailid:emailid,
      password:password
    }

    let url = this.apiurl + "/userdatapost"

    return this.http.post(url,data);


  }


  delrow(rowid:any){
    let data = {
      rowid:rowid
    }
    let url = this.apiurl + "/deleteuser"

    return this.http.post(url,data);

  }

  edit(firstname:any,lastname:any,email:any,id:any){
    let data = {
      firstname:firstname,
      lastname:lastname,
      email:email,
      id:id
    }
    let url = this.apiurl + "/edituser"
    return this.http.post(url,data);
  }



  canActivate(): boolean {
    if (this.guardStatus == false) {
      window.alert("must login to access further");
      this.router.navigateByUrl('');
    }
    return this.guardStatus;
  }

  postUserMail(firstname:any, lastname:any, emailid:any, password:any){
    let data = {
      firstname:firstname,
      lastname:lastname,
      emailid:emailid,
      password:password
    }

    let url = this.apiurl + "/postmail"

    return this.http.post(url,data);


  }



}


  
  



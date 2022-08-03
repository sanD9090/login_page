import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { InstanceService } from 'src/app/services/instance.service';
import { GuardStatusService } from 'src/app/services/guard-status.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  


  fname: string;
  lname: string;
  email: string;
  password: string;


  invalid:any;
  


  myform: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private service:InstanceService,
    private guardstatus:GuardStatusService,
  ) {}

  matcher = new MyErrorStateMatcher();

  

  submit() {
    this.service.postDataOld(this.email,this.password).subscribe((data:any)=> {

      console.log(data.recordsets[0].length);

      if(data.recordsets[0].length == 0){
        console.log("no match")
        this.service.guardStatus=false;
        this.invalid="invalid credentials";
        

      }
      else{
        console.log("match found")
        this.service.guardStatus=true;
        this.router.navigateByUrl('sidenav/landing') ;
      }
      
      
    });
  }
  


  public showPassword: boolean = false;
  public togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void {

    
  

    this.myform = this.fb.group({
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }  

}

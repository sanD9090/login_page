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
import { MatSnackBar } from '@angular/material/snack-bar';


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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  
  


  fname: string;
  lname: string;
  email: string;
  password: string;


  invalid:any;

  public showPassword: boolean = false;
  public togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  


  myform: FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private service:InstanceService,
    private _snackBar: MatSnackBar  ) {}

    matcher = new MyErrorStateMatcher();

    // durationInSeconds = 5;

    openSnackBar() {
      // this._snackBar.openFromComponent(SnackbarComponent, {
      //   duration: this.durationInSeconds * 1000,
      // });
      this._snackBar.open("Profile created succesfully", "Close",{duration:3000})
    }

    submit() {
    this.service.postUserMail(this.fname,this.lname,this.email,this.password).subscribe((data:any)=> {
      console.log(data);
    });
    }


  ngOnInit(): void {
    this.myform = this.fb.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  
  }

 


  

}

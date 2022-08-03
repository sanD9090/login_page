import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { InstanceService } from 'src/app/services/instance.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersComponent } from '../users/users.component';


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
  selector: 'app-dialogref',
  templateUrl: './dialogref.component.html',
  styleUrls: ['./dialogref.component.scss']
})

  



export class DialogrefComponent implements OnInit {

  fname: any;
  lname: any;
  email: any;
  password: any;

  submit() {
    this.service.postUser(this.fname,this.lname,this.email,this.password).subscribe((data:any)=> {
      console.log(data);

    });
    this.dialoref.close();

  }
  
  myform2: FormGroup;
  constructor(private fb: FormBuilder,
    private router:Router, private service:InstanceService, public dialoref:MatDialogRef<UsersComponent>) { }

    matcher = new MyErrorStateMatcher();

    public showPassword: boolean = false;
    public togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }


  ngOnInit(): void {
    this.myform2 = this.fb.group({
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

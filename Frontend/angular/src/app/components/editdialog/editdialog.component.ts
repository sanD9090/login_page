import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstanceService } from 'src/app/services/instance.service';
import { MyErrorStateMatcher } from '../login/login.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UsersComponent } from '../users/users.component';


@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.scss']
})
export class EditdialogComponent implements OnInit {

  fname: any;
  lname: any;
  email: any;
  id:any;



  submit() {
    this.service.edit(this.fname,this.lname,this.email,this.id).subscribe((data:any)=> {
      console.log(data);
      this.dialogRef.close();

    });
  }
  
  myform2: FormGroup;
  constructor(private fb: FormBuilder,
    private router:Router, private service:InstanceService,
    public dialogRef: MatDialogRef<UsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data :UsersComponent,) { }

    matcher = new MyErrorStateMatcher();

    public showPassword: boolean = false;
    public togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }


  ngOnInit(): void {
    this.id=this.data;

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
    });
  

}

}

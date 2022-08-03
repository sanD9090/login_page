import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InstanceService } from 'src/app/services/instance.service';
import { UsersComponent } from '../users/users.component';


@Component({
  selector: 'app-deldialog',
  templateUrl: './deldialog.component.html',
  styleUrls: ['./deldialog.component.scss']
})
export class DeldialogComponent implements OnInit  {
  
  
  constructor(
    public dialogRef: MatDialogRef<UsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data :UsersComponent,
    private service:InstanceService
  ) {  }

  ngOnInit(): void {
      console.log(this.data)
  }

  delete(){
    let id = this.data;
    this.service.delrow(id).subscribe();
    this.dialogRef.close();


    
    
    }

  onNoClick(){
    this.dialogRef.close();
  }

}

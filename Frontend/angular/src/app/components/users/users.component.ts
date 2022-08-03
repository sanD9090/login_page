import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import {  MatTableDataSource } from '@angular/material/table';
import { InstanceService } from 'src/app/services/instance.service';
import { DialogrefComponent } from '../dialogref/dialogref.component';
import {MatDialog} from '@angular/material/dialog';
import { DeldialogComponent } from '../deldialog/deldialog.component';
import { EditdialogComponent } from '../editdialog/editdialog.component';







@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  

  displayedColumns: string[] = ['ID','First_name', 'Last_name', 'Email-ID', 'Edit', 'Delete' ];
  dataSource:any;
  
  constructor(private service:InstanceService, public dialog:MatDialog) { 
    this.dataSource = new MatTableDataSource();
  }

  newUser(){
    this.service.postUser ;
  }

  openNewUser(){
    this.dialog.open(DialogrefComponent);
  }
  
  delete(rowid:any){
    this.service.delrow(rowid).subscribe();
  }
  
  openEdit(rowid:any){
    this.dialog.open(EditdialogComponent,{data:rowid});
    console.log(rowid);
  }
  deldialog(rowid:any){
    this.dialog.open(DeldialogComponent,{data:rowid});
    console.log(rowid)
   
  }



  ngOnInit(): void {

    this.service.getUser().subscribe((data:any)=>{
      console.log(data.recordset); 
      this.dataSource = data.recordset;
      
    })

    

    
  }

}

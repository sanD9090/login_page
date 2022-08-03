import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InstanceService } from 'src/app/services/instance.service';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  image: any;
  clicked=false;

  


  constructor(private http: HttpClient, private service:InstanceService) {}

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.image = file;
      this.clicked=false
    }
  }
  
  onSubmit() {

   const formdata = new FormData();

    formdata.append('file', this.image);

    // construct formdata


    // post request to express backend

    this.http
      .post<any>('http://localhost:8080/single', formdata).subscribe();


  }

  ngOnInit(): void {} 
}

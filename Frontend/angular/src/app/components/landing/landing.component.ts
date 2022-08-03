import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})



export class LandingComponent implements OnInit {


  image: any;
  clicked=false;


  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(private http: HttpClient) { }


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

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { UsersComponent } from './components/users/users.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogrefComponent } from './components/dialogref/dialogref.component';
import { DeldialogComponent } from './components/deldialog/deldialog.component';
import { EditdialogComponent } from './components/editdialog/editdialog.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PnfComponent } from './components/pnf/pnf.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DemoComponent } from './components/demo/demo.component';
import { SampleComponent } from './components/sample/sample.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SignupComponent } from './components/signup/signup.component';
import { StartingComponent } from './components/starting/starting.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    
    UsersComponent,
    DialogrefComponent,
    DeldialogComponent,
    EditdialogComponent,
    SidenavComponent,
    PnfComponent,
    DemoComponent,
    SampleComponent,
    SignupComponent,
    StartingComponent,    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    NgxExtendedPdfViewerModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

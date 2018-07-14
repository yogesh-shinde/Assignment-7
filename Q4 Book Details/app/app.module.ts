import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 
import { AppComponent } from './app.component';

import { MatFormFieldModule,MatButtonModule, 
          MatIcon, MatIconModule, MatSelectModule, 
          MatDatepickerModule, 
          MatNativeDateModule,
          MatTableModule} from '@angular/material';     //New 

          import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

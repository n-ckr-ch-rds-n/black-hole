import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BackDropComponent} from "./back-drop/back-drop.component";
import {InputComponent} from "./input/input.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {BandNameService} from "./band-name-service/band-name-service";

@NgModule({
  declarations: [
    AppComponent,
    BackDropComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [BandNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

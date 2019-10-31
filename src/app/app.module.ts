import {BrowserModule} from "@angular/platform-browser";
import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {AppComponent} from "./app.component";
import {BackDropComponent} from "./back-drop/back-drop.component";
import {InputComponent} from "./input/input.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSnackBarModule, MatTooltipModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {BandNameService} from "./band-name-service/band-name-service";
import { VoterComponent } from './voter/voter.component';
import { ListerComponent } from './lister/lister.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    BackDropComponent,
    InputComponent,
    VoterComponent,
    ListerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    CarouselModule.forRoot(),
    WavesModule.forRoot()
  ],
  providers: [BandNameService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }

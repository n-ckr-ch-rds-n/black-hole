import {BrowserModule} from "@angular/platform-browser";
import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {AppComponent} from "./app.component";
import {BackDropComponent} from "./back-drop/back-drop.component";
import {InputComponent} from "./input/input.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatProgressBarModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule} from "@angular/forms";
import {BandNameService} from "./band-name-service/band-name-service";
import { VoterComponent } from "./voter/voter.component";
import { ListerComponent } from "./lister/lister.component";
import { CarouselModule, WavesModule } from "angular-bootstrap-md";
import { LoginComponent } from "./login/login.component";
import {VoterService} from "./voter-service/voter-service";
import {RouterModule, Routes} from "@angular/router";
import { ConfirmVoteComponent } from './confirm-vote/confirm-vote.component';
import { LeagueSortPipe } from './league-sort.pipe';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "vote", component: BackDropComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BackDropComponent,
    InputComponent,
    VoterComponent,
    ListerComponent,
    LoginComponent,
    ConfirmVoteComponent,
    LeagueSortPipe
  ],
  imports: [
    RouterModule.forRoot(routes),
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
    WavesModule.forRoot(),
    MatDialogModule,
    MatProgressBarModule,
    MatListModule
  ],
  entryComponents: [ConfirmVoteComponent],
  providers: [BandNameService, VoterService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "black-hole";

  constructor(private router: Router) {

  }

  async ngOnInit() {
    await this.router.navigate(["login"]);
  }
}

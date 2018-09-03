import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'AngularTestProject';

  onClickBaby() {
    var y = document.getElementById("register");
    var x = document.getElementById("register2");
    x.style.display = "block";
    y.style.display = "none"
    console.log("User clicked the baby");
  }

  onClickSitter() {
    var x = document.getElementById("register");
    var y = document.getElementById("register2");
    x.style.display = "block";
    y.style.display = "none";
    console.log("User clicked the sitter");
  }
}


window.onload = () => {
    var a = document.getElementById("register");
    a.style.display = "none";
};
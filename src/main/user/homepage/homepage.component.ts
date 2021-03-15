import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  getActiveNav(path) {
    if(this.router.url.includes(`${path}`)) {
      return true;
    } else {
      return false;
    }
  }

  closeMenu() {
    var menu = document.getElementById("menu");
    menu.parentNode.removeChild(menu);
  }

}

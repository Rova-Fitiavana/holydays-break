import {Component, OnInit} from '@angular/core';
import { faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  faPowerOff = faPowerOff;
  faUser = faUser;
  urlLogo: string;

  constructor() {
    this.urlLogo = "../assets/images/logo-test.png";
  }
  ngOnInit() {

  }
}

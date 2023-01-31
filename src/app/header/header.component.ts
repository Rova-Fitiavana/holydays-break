import { Component } from '@angular/core';
import { faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faPowerOff = faPowerOff;
  faUser = faUser;
}

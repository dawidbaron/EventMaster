import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
// komponent do górnej stopki
@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
   styleUrls:['./navbar.component.css']
})
export class NavBarComponent {
  constructor(public auth:AuthService){
    
  }
}

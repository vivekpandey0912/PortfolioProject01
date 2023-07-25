import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInOut } from 'src/model/slideInOut';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // animations: [slideInOut] 
})
export class AppComponent {
  title = 'PortFolio';

  // getAnimationState(outlet: RouterOutlet) {
  //   return outlet.isActivated ? outlet.activatedRoute.routeConfig?.path || '' : '';
  // }
  
}

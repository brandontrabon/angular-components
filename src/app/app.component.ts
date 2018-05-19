import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onClick($event: MouseEvent) {
    console.log('clicked ', $event);
  }

  onChange($event: any) {
    console.log('onChanged ', $event.target.value);
  }
}

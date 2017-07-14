import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './template.html',
  styleUrls: ['./styles.sass']
})
export class HeaderComponent {
  clicked = (msg) => {
    console.log(msg + ' clicked!');
  }
}

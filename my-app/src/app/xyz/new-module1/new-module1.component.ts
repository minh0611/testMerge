import { Component } from '@angular/core';

@Component({
  selector: 'app-new-module1',
  templateUrl: './new-module1.component.html',
  styleUrls: ['./new-module1.component.css']
})
export class NewModule1Component {
  code () {
    return 123;
  }
}

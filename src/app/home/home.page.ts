import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  foo = ['a', 'b', 'c', 'd'];

  constructor() {}

  doReorder(ev: any) {
    this.foo = ev.detail.complete(this.foo);
  }
}

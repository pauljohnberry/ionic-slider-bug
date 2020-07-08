import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bourbon-parameter-range',
  templateUrl: './bourbon-parameter-range.component.html',
  styleUrls: ['./bourbon-parameter-range.component.scss']
})
export class BourbonParameterRangeComponent implements OnInit {
  min = -200;
  max = 200;
  snaps = 10;
  step = true;
  @Input() title: string;

  ngOnInit() {}
}

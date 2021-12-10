import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collaps-li',
  templateUrl: './collaps.component.html',
  styleUrls: ['./collaps.component.scss']
})
export class CollapsComponent implements OnInit {
  isCollaple = false;
  @Input() heading: string;
  @Input() description: string;
  constructor() { }

  ngOnInit(): void {
  }

}

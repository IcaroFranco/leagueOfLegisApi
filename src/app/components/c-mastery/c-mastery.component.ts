import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-mastery',
  templateUrl: './c-mastery.component.html',
  styleUrls: ['./c-mastery.component.scss'],
})
export class CMasteryComponent implements OnInit {
  constructor() {}

  @Input() champion: any;

  ngOnInit(): void {

  }
}

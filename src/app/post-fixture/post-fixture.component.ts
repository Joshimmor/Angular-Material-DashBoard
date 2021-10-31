import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-fixture',
  templateUrl: './post-fixture.component.html',
  styleUrls: ['./post-fixture.component.css']
})
export class PostFixtureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  showFiller = false;
}

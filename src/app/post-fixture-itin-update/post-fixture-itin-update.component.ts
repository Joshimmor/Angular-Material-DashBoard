import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-post-fixture-itin-update',
  templateUrl: './post-fixture-itin-update.component.html',
  styleUrls: ['./post-fixture-itin-update.component.css']
})
export class PostFixtureItinUpdateComponent implements OnInit {
  LayDate!: any;
  CancelDate!:any;
  FixtureStatus!: string; 
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string) {
    if(value.length > 1){
      const filterValue = value.toLowerCase();
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    return []
  }
}

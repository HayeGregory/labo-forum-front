import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild("collapsible", {static: false}) eRef: ElementRef<HTMLUListElement>;
  
  title = 'Forum-Front';
  mCollapsibleInstance: M.Collapsible;

  ngAfterViewInit() {
    this.mCollapsibleInstance = M.Collapsible.init(this.eRef.nativeElement);
  }
}

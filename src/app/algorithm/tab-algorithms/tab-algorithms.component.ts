import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive, Routes } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-tab-algorithms',
  templateUrl: './tab-algorithms.component.html',
  styleUrls: ['./tab-algorithms.component.css']
})
export class TabAlgorithmsComponent implements AfterViewInit, OnInit {
  isViewInitialized = false;
  
  public navLinks = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit() {
   
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  onTabChange(event: MatTabChangeEvent): void {
    this.router.navigate([event.tab.textLabel]);
  }


}

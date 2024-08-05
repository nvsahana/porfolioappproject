import { Component } from '@angular/core';
import { BreakpointObserver,Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  isPhoneviewed = false;
  constructor(public responsive: BreakpointObserver) {}
  ngOnInit() {

    this.responsive.observe(Breakpoints.HandsetPortrait)
    .subscribe(result => {
    
    this.isPhoneviewed = false;
    
    if (result.matches) {
    this.isPhoneviewed = true;
    } {
    console.log(
    'HandsetPortrait is on'
    );
    }
    
    });
    }
}

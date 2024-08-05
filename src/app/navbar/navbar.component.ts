import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isShow = false;
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
  toggleDisplay(): void {
    this.isShow = !this.isShow;
  }
}

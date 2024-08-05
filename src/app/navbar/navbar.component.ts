import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isShow = false;
  isPhoneviewed = false;
  constructor(public responsive: BreakpointObserver, private router: Router) {}
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




  goToAbout():void {
    // this.router.navigate(['footer']) Use this once about component is created.
    console.log("Clicked About");
  }
  goToResume():void {
    console.log("Clicked Resume");
  }
  goToPublications():void {
    console.log("Clicked Publications");
  }
  goToContact():void {
    console.log("Clicked Contact");
  }
}

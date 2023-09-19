import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalStatesService } from '../services/global-states.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private router: Router, private globalStateService: GlobalStatesService) {}

  ngOnInit(): void {
      this.globalStateService.setBackgroundColor('white')
  }

  get someRandom() {
    return this.globalStateService.someRandom;
  }

  isSticky: boolean = false;
  showParagraph: boolean = false;
  showAdditionalContainer: boolean = false;
  hideAdditionalContainer: boolean =true;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    const sectionOneHeight = (document.querySelector('.one') as HTMLElement)?.offsetHeight || 0;

  
    if (scrollPosition >= sectionOneHeight) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

  isIconActive = false;

  toggleParagraph() {
    this.showParagraph = !this.showParagraph;
    this.isIconActive = !this.isIconActive;
  }

  toggleAdditionalContainer() {
    this.showAdditionalContainer = !this.showAdditionalContainer;
  }

  detoggleAdditionalContainer(){
    this.hideAdditionalContainer = this.showAdditionalContainer; //vai eta kaj kore na kn :/
  }
  home(){
    this.router.navigateByUrl('');
  }
}

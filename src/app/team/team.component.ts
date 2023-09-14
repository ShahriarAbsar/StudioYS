import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
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

  toggleParagraph() {
    this.showParagraph = !this.showParagraph;
  }

  toggleAdditionalContainer() {
    this.showAdditionalContainer = !this.showAdditionalContainer;
  }

  detoggleAdditionalContainer(){
    this.hideAdditionalContainer = !this.hideAdditionalContainer; //vai eta kaj kore na kn :/
  }
}
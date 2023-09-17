import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { slideInAnimation } from '../app-routing.animations';
import { Router } from '@angular/router';

import { Project } from 'src/intefaces/interfaces';

import { GlobalStatesService } from '../services/global-states.service';
import { HttpCallsService } from '../services/http-calls.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [slideInAnimation]
})
export class LandingPageComponent implements AfterViewInit, OnInit {

  get videos(): Project[] {
    return this.httpCallsService.projects
  }

  showOverlay = false;
  currentVideo: any = null;
  
  // get random() {
  //   return this.globalStateService.someRandom;
  // }

  // changeIt(num: number) {
  //   this.globalStateService.changeRandom(num);
  // }

  constructor(private elRef: ElementRef, private router: Router, private globalStateService: GlobalStatesService, private httpCallsService: HttpCallsService) {}

  ngOnInit(): void {
   /* this.renderer.setStyle(this.elRef.nativeElement.ownerDocument.body, 'backgroundColor', 'black'); */
    this.globalStateService.setBackgroundColor('black')
    this.httpCallsService.getProjects().subscribe(projs => this.httpCallsService.setProjects(projs))
  }
  

  ngAfterViewInit() {
    this.makeDraggable();
  }

  makeDraggable() {
    const slider = this.elRef.nativeElement.querySelector('.carousel-container');
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    slider.addEventListener('mousedown', (e: MouseEvent) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX;
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  hoverPlay(videoElement: HTMLVideoElement) {
    videoElement.muted = true; // Adding mute property
    videoElement.play();
  }

  hoverPause(videoElement: HTMLVideoElement) {
    videoElement.pause();
  }

  openOverlay(video: any) {
    this.showOverlay = true;
    this.currentVideo = video;
  }

  closeOverlay() {
    this.showOverlay = false;
  }

  team() {
    this.router.navigateByUrl('team');
  }
home(){
  this.router.navigateByUrl('');
}
  
}

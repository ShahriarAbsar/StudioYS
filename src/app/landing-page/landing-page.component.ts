import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit {

  videos = [
    { src: '../../assets/y2mate.is - I am never gonna financially recover from this-gV7lz6wCcfM-720p-1694512960.mp4', description: 'Video 1' },
    { src: '../../assets/y2mate.is - I am never gonna financially recover from this-gV7lz6wCcfM-720p-1694512960.mp4', description: 'Video 2' },
    { src: '../../assets/y2mate.is - I am never gonna financially recover from this-gV7lz6wCcfM-720p-1694512960.mp4', description: 'Video 3' },
    { src: '../../assets/y2mate.is - I am never gonna financially recover from this-gV7lz6wCcfM-720p-1694512960.mp4', description: 'Video 4' },
    { src: '../../assets/y2mate.is - I am never gonna financially recover from this-gV7lz6wCcfM-720p-1694512960.mp4', description: 'Video 5' },
    { src: '../../assets/y2mate.is - I am never gonna financially recover from this-gV7lz6wCcfM-720p-1694512960.mp4', description: 'Video 6' },
    { src: '../../assets/y2mate.is - I am never gonna financially recover from this-gV7lz6wCcfM-720p-1694512960.mp4', description: 'Video 7' },
    { src: '../../assets/y2mate.is - I am never gonna financially recover from this-gV7lz6wCcfM-720p-1694512960.mp4', description: 'Video 8' },
    { src: '../../assets/y2mate.is - I am never gonna financially recover from this-gV7lz6wCcfM-720p-1694512960.mp4', description: 'Video 9' },
    { src: '../../assets/test.mp4', description: 'Video 10' },
    { src: '../../assets/test.mp4', description: 'Video 11' },
    { src: '../../assets/test.mp4', description: 'Video 12' },
   
  ];

  showOverlay = false;
  currentVideo: any = null;

  constructor(private elRef: ElementRef) {}

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

  
}

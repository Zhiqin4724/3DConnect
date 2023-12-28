import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  // standalone: true,
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {
  constructor() {
    window.addEventListener('scroll', function() {
      let value = window.scrollY + 250 ;

      // Adjust the top position of the logo3D element
      let logo3D = document.querySelector('.presentation-logo') as HTMLElement;
      if (logo3D) {
        logo3D.style.top = value * 0.9 + 'px';
      }
    });
  }
}

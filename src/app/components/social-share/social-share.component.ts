import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss'],
})
export class SocialShareComponent {
  @Input() currentPage: string;

  constructor() { }

  onShareClick() {
    alert(`Sharing ${this.currentPage} to the world!`);
  }
}

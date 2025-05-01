import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  @Output() logoutEvent = new EventEmitter<void>();
  
  logout(): void {
    this.logoutEvent.emit();
  }
}
import { Component } from '@angular/core';
import { SidebarComponent } from '../app/sidebar/sidebar.component';
import { TopbarComponent } from '../app/topbar/topbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-component',
  imports: [SidebarComponent, TopbarComponent, RouterOutlet],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent {

}

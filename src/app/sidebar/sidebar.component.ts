import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems = [
    { name: 'Tableau de bord', icon: 'dashboard', route: '/dashboard' },
    { name: 'Productions', icon: 'people', route: '/productions' },
    { name: 'Alimentation', icon: 'settings', route: '/alimentation' },
    { name: 'Revenue', icon: 'help', route: '/revenu' },
    { name: 'Déconnexion', icon: 'logout', route: '/logout' }
  ];

  constructor(public router: Router) {}
}
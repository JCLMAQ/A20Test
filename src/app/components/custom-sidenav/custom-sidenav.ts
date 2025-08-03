import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export type MenuItem = {
  label: string;
  icon: string;
  route: string;
}
@Component({
  selector: 'app-custom-sidenav',
  imports: [MatListModule, MatIconModule],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss'
})
export class CustomSidenav {

  menuItems = signal<MenuItem[]>([
    { label: 'Home', icon: 'home', route: '/home' },
    { label: 'About', icon: 'info', route: '/about' },
    { label: 'Contact', icon: 'contact_mail', route: '/contact' },
    { label: 'Settings', icon: 'settings', route: '/settings' }
  ]);
}

import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RosterComponent } from '../roster/roster.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-landing',
  standalone: true,
  imports: [DashboardComponent, RosterComponent, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './admin-landing.component.html',
  styleUrl: './admin-landing.component.css'
})
export class AdminLandingComponent {

}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LandingComponent } from './common/landing/landing.component';
import { AdminLandingComponent } from './admin/admin-landing/admin-landing.component';
import { UserLandingComponent } from './user/user-landing/user-landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LandingComponent, AdminLandingComponent, UserLandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'EMS';
}

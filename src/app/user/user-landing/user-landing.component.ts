import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-user-landing',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, PersonalInfoComponent, TasksComponent],
  templateUrl: './user-landing.component.html',
  styleUrl: './user-landing.component.css'
})
export class UserLandingComponent {

}

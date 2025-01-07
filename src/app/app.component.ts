import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainbodyComponent } from './mainbody/mainbody.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,SidebarComponent, MainbodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CGPFlogin-Form';
}
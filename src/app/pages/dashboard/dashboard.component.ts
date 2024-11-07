import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, ListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

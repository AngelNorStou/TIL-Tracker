import { Component, signal } from '@angular/core';
import { RouterOutlet ,   RouterLink} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,     
  imports: [RouterOutlet,RouterLink,ReactiveFormsModule], 
  templateUrl: './app.html',
  styleUrls: ['./app.scss']                      
})
export class App {
  protected readonly title = signal('til-tracker');
}

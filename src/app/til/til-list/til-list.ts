import { Component, OnInit, computed , signal, Signal } from '@angular/core';
import { TilService } from '../../core/services/til.service';
import { TIL } from '../../core/models/til.model';
import { CommonModule , DatePipe} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-til-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './til-list.html',
  styleUrls: ['./til-list.scss']
})


export class TilListComponent {
  allTils: Signal<TIL[]>;
  selectedDate = signal(new Date().toISOString().slice(0, 10)); // YYYY-MM-DD
  tagFilter = signal('');

  availableDates: Signal<string[]>;
  filteredTils: Signal<TIL[]>;

  constructor(private tilService: TilService) {
    this.allTils = signal(this.tilService.tils());

    this.availableDates = computed(() =>
      Array.from(
        new Set(
          this.allTils().map(til =>
            new Date(til.date).toISOString().slice(0, 10)
          )
        )
      ).sort((a, b) => b.localeCompare(a)) 
    );

    this.filteredTils = computed(() => {
      const date = this.selectedDate();
      const tag = this.tagFilter().toLowerCase();

      return this.allTils().filter(til => {
        const tilDate = new Date(til.date).toISOString().slice(0, 10);
        const dateMatches = tilDate === date;
        const tagMatches = tag === '' || til.tags.some(t => t.toLowerCase().includes(tag));
        return dateMatches && tagMatches;
      });
    });
  }
}
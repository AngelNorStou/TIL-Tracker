import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { TilService } from '../../core/services/til.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-til-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './til-form.html',
  styleUrls: ['./til-form.scss']
})
export class TilFormComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tilService: TilService,
    private router: Router
  ) {

    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      tags: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const newTil = {
        id: crypto.randomUUID(),
        title: this.form.value.title!,
        description: this.form.value.description!,
        tags: this.form.value.tags?.split(',').map((tag: string) => tag.trim()) || [],
        date: new Date().toISOString()
      };

      this.tilService.addTil(newTil);
      this.router.navigate(['/']);
    }
  }
}
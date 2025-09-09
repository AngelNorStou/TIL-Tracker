import { Inject, Injectable, PLATFORM_ID, signal} from '@angular/core';
import { TIL } from '../models/til.model';
import { isPlatformBrowser } from '@angular/common';

const STORAGE_KEY = 'til_entries';

@Injectable({ providedIn: 'root' })
export class TilService {
  private readonly _tils = signal<TIL[]>(this.loadFromStorage());

  get tils() {
    return this._tils.asReadonly();
  }

  addTil(newTil: TIL) {
    const updated = [...this._tils(), newTil];
    this._tils.set(updated);
    this.saveToStorage(updated);
  }

  private saveToStorage(data: TIL[]) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }

  private loadFromStorage(): TIL[] {
    if (typeof localStorage !== 'undefined') {
      const json = localStorage.getItem(STORAGE_KEY);
      return json ? JSON.parse(json) : [];
    }
    return [];
  }
}


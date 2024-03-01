import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  IonApp,
  IonAvatar,
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonSearchbar,
  IonToolbar,
} from '@ionic/angular/standalone';
import { switchMap, forkJoin } from 'rxjs';

export type Pokemon = {
  id: number;
  name: string;
  sprites: { front_default: string };
};

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    IonApp,
    IonHeader,
    IonToolbar,
    IonSearchbar,
    IonContent,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonFooter,
    NgOptimizedImage,
  ],
  template: `
    <ion-app>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-searchbar (ionInput)="filterPokemons($event)" color="light"></ion-searchbar>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          @for (pokemon of filteredPokemons; track pokemon.id) {
          <ion-item>
            <ion-avatar slot="start">
              <img height="60" width="60" [ngSrc]="pokemon.sprites.front_default" />
            </ion-avatar>
            <ion-label>
              {{ pokemon.name }}
            </ion-label>
          </ion-item>
          }
        </ion-list>
      </ion-content>
      <ion-footer>
        <ion-toolbar color="primary">
          <div class="logo">
            <img src="assets/pokemon_logo.svg" />
          </div>
        </ion-toolbar>
      </ion-footer>
    </ion-app>
  `,
  styles: `
  .logo {
    display: flex;
    justify-content: center;
    height: 2.5rem;
  }
  `,
})
export class PokemonListComponent {
  private pokemons: Pokemon[] = [];
  public filteredPokemons: Pokemon[] = [];

  constructor(private readonly http: HttpClient) {
    this.fetchPokemons();
  }

  public filterPokemons(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filteredPokemons = this.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  private fetchPokemons(): void {
    this.http
      .get<{ results: { url: string }[] }>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .pipe(
        switchMap((res) =>
          forkJoin(res.results.map((pokemon) => this.http.get<Pokemon>(pokemon.url)))
        )
      )
      .subscribe((pokemons) => {
        this.pokemons = pokemons;
        this.filteredPokemons = pokemons;
      });
  }
}

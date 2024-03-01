import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

type Post = {
  id: number;
  title: string;
  body: string;
};

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, HttpClientModule, IonContent],
  template: `
    <ion-content>
      @for (post of posts; track post.id; let odd = $odd, even = $even, first = $first, last =
      $last, idx = $index, count = $count) {
      <h2 [class.odd]="odd" [class.even]="even">{{ idx + 1 }}. {{ post.title }}</h2>
      <p [class.first]="first" [class.last]="last">{{ post.body }}</p>
      } @empty {
      <p>loading...</p>
      }
    </ion-content>
  `,
  styles: `
    h2 {
      &.odd {
        color: red;
      }
      &.even{
        color: green;
      }
    }
    p {
      &.first {
        font-weight: bold;
      }
      &.last {
        font-style: italic;
      }
    }
  `,
})
export class PostsComponent {
  public posts: Post[] = [];

  constructor(private readonly http: HttpClient) {
    setTimeout(() => {
      this.fetchPosts();
    }, 1000);
  }

  private fetchPosts(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe((posts) => {
      this.posts = posts;
    });
  }
}

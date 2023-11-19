import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import { JsonPipe, NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { PostAttributes } from '../models/post';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor, JsonPipe],
  template: `
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h1>Esta es la lista de posts</h1>
        </div>
        <div
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <article *ngFor="let post of posts"class="flex flex-col items-start justify-between">
          <div class="relative w-full">
            <pre>{{post |json}}</pre>
          {{post.attributes.coverImage}}
          <img src="{{post.attributes.coverImage}}" alt="">
          <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
        </div>
          </article>
        </div>
      </div>

      <!-- <ul>
      <li *ngFor="let post of posts">
        <a [routerLink]="['/blog', post.slug]"> {{ post.attributes.title }}</a>
      </li>
    </ul> -->
    </div>
  `,
})
export default class PostListComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}

import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { PostAttributes } from '../models/post';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor],
  template: `

    <h1>Esta es la lista de posts</h1>
    <ul>
      <li *ngFor="let post of posts">
        <a [routerLink]="['/blog', post.slug]"> {{ post.attributes.title }}</a>
      </li>
    </ul>
    
  `,
})
export default class PostListComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}

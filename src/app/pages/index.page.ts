import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Home</h2>

    <h3>The fullstack meta-framework for Angular!</h3>
  `,
})
export default class HomeComponent {}

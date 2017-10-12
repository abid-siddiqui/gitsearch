import { Component } from '@angular/core';
import {ProfileComponent} from './components/profile.component';
import {GithubService} from "./services/github.service";
@Component({
  selector: 'my-app',
  template: `<h1>Helloo {{name}}</h1><profile></profile>`,
  providers:[GithubService]
})
export class AppComponent  { name = 'Angular'; }

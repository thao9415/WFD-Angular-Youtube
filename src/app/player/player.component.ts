import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  id: string;

  constructor(private activateRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params.abc;
    });
  }
  getSrc() {
    const url = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.id);
    return url;
  }

}

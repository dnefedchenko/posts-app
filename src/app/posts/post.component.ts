import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  template: `<div>
    <button mat-button mat-raised-button color="primary">Load Posts</button>
  </div>`
})
export class PostComponent implements OnInit {
  ngOnInit(): void {
  }
}

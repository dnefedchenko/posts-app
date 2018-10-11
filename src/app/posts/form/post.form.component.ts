import {HttpClient} from '@angular/common/http';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Post} from '../posts.component';

@Component({
  selector: 'app-post-form',
  templateUrl: 'post-form.html',
  styleUrls: ['post.css']
})
export class PostFormComponent implements OnInit {
  @Input() private post: Post;
  @Output() back: EventEmitter<any> = new EventEmitter();

  postForm: FormGroup;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      id: this.post.id,
      title: this.post.title,
      body: this.post.body,
      userId: this.post.userId
    });
  }

  save(): void {
    console.log(`${this.postForm.value}`);
  }

  cancel(): void {
    this.back.emit(null);
  }
}

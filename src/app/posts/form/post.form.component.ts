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
  @Output() onCreate: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();

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
    const post = this.postForm.value;
    if (post.id) {
      this.update(post);
    } else {
      this.create(post);
    }
  }

  private create(post: Post) {
    this.httpClient.post(`https://jsonplaceholder.typicode.com/posts`, post)
      .subscribe(
        (response: any) => {
          this.onCreate.emit(response);
        },
        (error: any) => {
          console.log(`Failed to create new post ${post}`);
        });
  }

  private update(post: Post) {
    this.httpClient.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post)
      .subscribe(
        (response: any) => {
          this.onUpdate.emit(response);
        },
        (error: any) => {
          console.log(`Failed to update new post ${post}`);
        });
  }

  cancel(): void {
    this.back.emit(null);
  }
}

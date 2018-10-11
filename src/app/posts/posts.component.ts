import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-post',
  templateUrl: `posts.html`
})
export class PostsComponent implements OnInit {
  private pageLoadingComplete = false;

  displayedColumns = ['id', 'title', 'body', 'userId', 'action'];
  dataSource = null;
  post: Post = null;

  constructor(private httpClient: HttpClient) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.fetchPosts();

    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    }, 2000);
  }

  private fetchPosts() {
    this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
      .subscribe((posts: Post[]) => {
        this.dataSource = new MatTableDataSource<Post>(posts);
        this.dataSource.paginator = this.paginator;
        this.pageLoadingComplete = true;
      }, error => {
        console.log('Failed to retrieve posts');
      });
  }

  createPost() {
    this.post = {id: null, title: null, body: null, userId: null};
  }

  editPost(post: Post) {
    this.post = post;
  }

  deletePost(postId: number) {
    this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .subscribe(
        (response: any) => {
          this.dataSource.data = this.dataSource.data.filter(post => post.id !== postId);
        },
        (error: any) => {
          console.log(`Failed to remove post with id ${postId}`);
        });
  }

  postEdited(): boolean {
    return this.post !== null && this.post.id !== null;
  }

  postCreated() {
    return this.post != null;
  }

  showList(): void {
    this.post = null;
  }

  onUpdate(post: Post): void {
    this.dataSource.data = this.dataSource.data.filter(p => p.id !== post.id);
    this.dataSource.data.unshift(post);
    this.post = null;
  }

  onCreate(post: Post): void {
    this.dataSource.data.unshift(post);
    this.post = null;
  }
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-post',
  templateUrl: `posts.html`
})
export class PostsComponent implements OnInit {
  private pageLoadingComplete = false;

  displayedColumns = ['id', 'title', 'body', 'userId'];
  dataSource = null;

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
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

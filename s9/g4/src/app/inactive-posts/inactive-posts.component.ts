import { Component, OnInit } from '@angular/core';
import { getPosts } from '../service-posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
  constructor() {
    getPosts().then((posts) => {

      posts.forEach(function (post) {
        if(!post.active){
        let li = document.createElement('li');

        let listaInattiva = document.getElementById('inactive-list');
        li.innerHTML = post.title + "<br>" + post.body;
        listaInattiva!.append(li);
      }
      });
    });
  }

  ngOnInit(): void {}
}

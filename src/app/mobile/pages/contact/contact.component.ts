import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public instagram = [
    {
      id: 1,
      link: 'https://www.instagram.com/p/B6LfhBxCjU6/',
      images: './assets/images/instagram/1.png',
    },

    {
      id: 2,
      link: 'https://www.instagram.com/p/B6RSOhQiVeB/',
      images: './assets/images/instagram/2.png',
    },
    {
      id: 3,
      link: 'https://www.instagram.com/p/B6GjOs7Cc9D/',
      images: './assets/images/instagram/3.png',
    },
    {
      id: 4,
      link: 'https://www.instagram.com/p/B5x9btDCrz8/',
      images: './assets/images/instagram/4.png',
    },
    {
      id: 5,
      link: 'https://www.instagram.com/p/B5oTxesC9_F/',
      images: './assets/images/instagram/5.png',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

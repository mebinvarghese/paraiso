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
      link: 'https://www.instagram.com/paraisopacking/',
      images: './assets/images/instagram/1.png',
    },

    {
      id: 2,
      link: 'https://www.instagram.com/paraisopacking/',
      images: './assets/images/instagram/2.png',
    },
    {
      id: 3,
      link: 'https://www.instagram.com/paraisopacking/',
      images: './assets/images/instagram/3.png',
    },
    {
      id: 4,
      link: 'https://www.instagram.com/paraisopacking/',
      images: './assets/images/instagram/4.png',
    },
    {
      id: 5,
      link: 'https://www.instagram.com/paraisopacking/',
      images: './assets/images/instagram/5.png',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  // Slick slider config
  public instaSlideConfig: any = {
    autoplay: true,
    autoplaySpeed: 30000,
    slidesToShow: 5,
    slidesToScroll: 4,
  };

}

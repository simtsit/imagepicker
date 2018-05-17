import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Image Picker!';
  targetImageUrl = "";
  images = [
  {name: "Image 250 x 250", url: "http://www.placehold.it/250x250"},
  {name: "Image 100 x 250", url: "http://www.placehold.it/100x250"},
  {name: "Image 250 x 100", url: "http://www.placehold.it/250x100"},
  {name: "Image 100 x 100", url: "http://www.placehold.it/100x100"},
  {name: "Image 350 x 250", url: "http://www.placehold.it/350x350"},
  {name: "Image 150 x 350", url: "http://www.placehold.it/150x350"},
  {name: "Image 350 x 150", url: "http://www.placehold.it/350x150"},
  {name: "Image 150 x 150", url: "http://www.placehold.it/150x150"}];

  changeImage(imageUrl) {
    this.targetImageUrl = imageUrl;
  }

}

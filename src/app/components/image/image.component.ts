import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  image: Image;

  constructor(
    private imagesService: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // error TS2564: Property 'image' has no initializer and is not definitely assigned in the constructor

    this.image = {
      id: '',
      author: '',
      width: 0,
      height: 0,
      url: '',
      download_url: ''
    }
  }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier: ', identifier);

    // error TS7030: Not all code paths return a value.
    // https://stackoverflow.com/questions/51446242/how-to-fix-the-issue-not-all-the-code-paths-return-value

    this.imagesService.getImageById(identifier).subscribe((image) => {

      if (!image) {
        return this.router.navigateByUrl('/');
      }

      this.image = image;
      console.log('image: ', this.image);
    })
  }

}

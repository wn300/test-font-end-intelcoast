import { TestBed } from '@angular/core/testing';

import { HomeImagesService } from './home-images.service';

describe('HomeImagesService', () => {
  let service: HomeImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

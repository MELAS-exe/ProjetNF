import { TestBed } from '@angular/core/testing';

import { PostAudioService } from './post-audio.service';

describe('PostAudioService', () => {
  let service: PostAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

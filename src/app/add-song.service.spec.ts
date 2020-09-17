import { TestBed } from '@angular/core/testing';

import { AddSongService } from './add-song.service';

describe('AddSongService', () => {
  let service: AddSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

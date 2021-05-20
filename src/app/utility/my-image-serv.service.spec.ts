import { TestBed } from '@angular/core/testing';

import { MyImageServService } from './my-image-serv.service';

describe('MyImageServService', () => {
  let service: MyImageServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyImageServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

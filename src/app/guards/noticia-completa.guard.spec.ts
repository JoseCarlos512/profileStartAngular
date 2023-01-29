import { TestBed } from '@angular/core/testing';

import { NoticiaCompletaGuard } from './noticia-completa.guard';

describe('NoticiaCompletaGuard', () => {
  let guard: NoticiaCompletaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoticiaCompletaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

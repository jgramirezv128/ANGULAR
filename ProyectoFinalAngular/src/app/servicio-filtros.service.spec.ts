/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicioFiltrosService } from './servicio-filtros.service';

describe('ServicioFiltrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioFiltrosService]
    });
  });

  it('should ...', inject([ServicioFiltrosService], (service: ServicioFiltrosService) => {
    expect(service).toBeTruthy();
  }));
});

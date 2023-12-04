import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SincronizacionTabPage } from './sincronizacion-tab.page';

describe('SincronizacionTabPage', () => {
  let component: SincronizacionTabPage;
  let fixture: ComponentFixture<SincronizacionTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SincronizacionTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

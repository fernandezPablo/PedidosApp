import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidosTabPage } from './pedidos-tab.page';

describe('PedidosTabPage', () => {
  let component: PedidosTabPage;
  let fixture: ComponentFixture<PedidosTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedidosTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

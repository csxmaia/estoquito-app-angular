import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategoriaComponent } from './lista-categoria.component';

describe('ListaCaracteristicaComponent', () => {
  let component: ListaCategoriaComponent;
  let fixture: ComponentFixture<ListaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
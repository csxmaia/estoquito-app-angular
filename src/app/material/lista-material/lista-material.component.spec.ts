import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaterialComponent } from './lista-material.component';

describe('ListaMaterialComponent', () => {
  let component: ListaMaterialComponent;
  let fixture: ComponentFixture<ListaMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

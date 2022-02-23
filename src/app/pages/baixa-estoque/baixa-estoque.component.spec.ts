import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaixaEstoqueComponent } from './baixa-estoque.component';

describe('BaixaEstoqueComponent', () => {
  let component: BaixaEstoqueComponent;
  let fixture: ComponentFixture<BaixaEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaixaEstoqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaixaEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

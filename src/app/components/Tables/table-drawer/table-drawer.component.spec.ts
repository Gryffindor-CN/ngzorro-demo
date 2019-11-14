import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDrawerComponent } from './table-drawer.component';

describe('TableDrawerComponent', () => {
  let component: TableDrawerComponent;
  let fixture: ComponentFixture<TableDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

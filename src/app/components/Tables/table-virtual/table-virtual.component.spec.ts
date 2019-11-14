import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableVirtualComponent } from './table-virtual.component';

describe('TableVirtualComponent', () => {
  let component: TableVirtualComponent;
  let fixture: ComponentFixture<TableVirtualComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVirtualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

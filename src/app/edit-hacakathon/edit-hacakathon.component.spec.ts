import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHacakathonComponent } from './edit-hacakathon.component';

describe('EditHacakathonComponent', () => {
  let component: EditHacakathonComponent;
  let fixture: ComponentFixture<EditHacakathonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHacakathonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHacakathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

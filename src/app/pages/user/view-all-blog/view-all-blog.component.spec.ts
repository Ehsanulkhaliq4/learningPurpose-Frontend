import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBlogComponent } from './view-all-blog.component';

describe('ViewAllBlogComponent', () => {
  let component: ViewAllBlogComponent;
  let fixture: ComponentFixture<ViewAllBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

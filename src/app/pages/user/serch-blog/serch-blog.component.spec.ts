import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchBlogComponent } from './serch-blog.component';

describe('SerchBlogComponent', () => {
  let component: SerchBlogComponent;
  let fixture: ComponentFixture<SerchBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerchBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SerchBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

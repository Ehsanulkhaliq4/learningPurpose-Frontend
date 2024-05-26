import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewBookComponent } from './user-view-book.component';

describe('UserViewBookComponent', () => {
  let component: UserViewBookComponent;
  let fixture: ComponentFixture<UserViewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserViewBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserViewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

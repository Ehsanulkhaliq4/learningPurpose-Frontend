import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrfileComponent } from './user-prfile.component';

describe('UserPrfileComponent', () => {
  let component: UserPrfileComponent;
  let fixture: ComponentFixture<UserPrfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPrfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPrfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

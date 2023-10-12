import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTransactionalComponent } from './home-transactional.component';

describe('HomeTransactionalComponent', () => {
  let component: HomeTransactionalComponent;
  let fixture: ComponentFixture<HomeTransactionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTransactionalComponent]
    });
    fixture = TestBed.createComponent(HomeTransactionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

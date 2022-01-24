import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMasteryComponent } from './c-mastery.component';

describe('CMasteryComponent', () => {
  let component: CMasteryComponent;
  let fixture: ComponentFixture<CMasteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMasteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CMasteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

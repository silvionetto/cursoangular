import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnclassifiedComponent } from './unclassified.component';

describe('UnclassifiedComponent', () => {
  let component: UnclassifiedComponent;
  let fixture: ComponentFixture<UnclassifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnclassifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnclassifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

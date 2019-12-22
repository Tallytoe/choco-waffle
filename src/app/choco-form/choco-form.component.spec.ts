import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocoFormComponent } from './choco-form.component';

describe('ChocoFormComponent', () => {
  let component: ChocoFormComponent;
  let fixture: ComponentFixture<ChocoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

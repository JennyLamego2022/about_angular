import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOne2Component } from './project-one2.component';

describe('ProjectOne2Component', () => {
  let component: ProjectOne2Component;
  let fixture: ComponentFixture<ProjectOne2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectOne2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectOne2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSideNavComponent } from './sitesidenav.component';

describe('SiteSideNavComponent', () => {
  let component: SiteSideNavComponent;
  let fixture: ComponentFixture<SiteSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

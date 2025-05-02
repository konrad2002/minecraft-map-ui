import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEventGroupComponent } from './page-event-group.component';

describe('PageEventGroupComponent', () => {
  let component: PageEventGroupComponent;
  let fixture: ComponentFixture<PageEventGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEventGroupComponent]
    });
    fixture = TestBed.createComponent(PageEventGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

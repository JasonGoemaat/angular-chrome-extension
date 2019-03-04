import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionCommonComponent } from './extension-common.component';

describe('ExtensionCommonComponent', () => {
  let component: ExtensionCommonComponent;
  let fixture: ComponentFixture<ExtensionCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensionCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

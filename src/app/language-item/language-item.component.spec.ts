import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageItemComponent } from './language-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { LangListComponent } from '../lang-list/lang-list.component';
import { LangDetailsComponent } from '../lang-details/lang-details.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

describe('LanguageItemComponent', () => {
  let component: LanguageItemComponent;
  let fixture: ComponentFixture<LanguageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageItemComponent  ],
      imports: [ RouterModule.forRoot([]) ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageItemComponent);
    component = fixture.componentInstance;
    component.lang = { 
      id: 1,
      name: "Java"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have language name equal to 'java'`, async(() => {
    expect(component.lang.name).toEqual('Java');
  }));
  it(`should render a link with spans containing '1' and 'Java'`, async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a > span.badge').textContent).toContain('1');
    expect(compiled.querySelector('a > span.name').textContent).toContain('Java');
  }));
});

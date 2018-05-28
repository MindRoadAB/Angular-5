import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangListComponent } from './lang-list.component';
import { LanguageItemComponent } from '../language-item/language-item.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { LangDetailsComponent } from '../lang-details/lang-details.component';
import { UserListComponent } from '../user-list/user-list.component';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('LangListComponent', () => {
  let component: LangListComponent;
  let fixture: ComponentFixture<LangListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangListComponent, LanguageItemComponent, LangDetailsComponent, UserListComponent ],
      imports: [ FormsModule, AppRoutingModule, HttpClientModule ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

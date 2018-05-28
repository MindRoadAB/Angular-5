import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageItemComponent } from './language-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { LangListComponent } from '../lang-list/lang-list.component';
import { LangDetailsComponent } from '../lang-details/lang-details.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

describe('LanguageItemComponent-simple', () => {
  let component: LanguageItemComponent = new LanguageItemComponent();
  component.lang = {
    id: 1,
    name: "Java"
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have language name equal to 'java'`, async(() => {
    expect(component.lang.name).toEqual('Java');
  }));
});

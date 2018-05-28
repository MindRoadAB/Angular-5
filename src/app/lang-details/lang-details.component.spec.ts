import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangDetailsComponent } from './lang-details.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

describe('LangDetailsComponent', () => {
  let component: LangDetailsComponent;
  let fixture: ComponentFixture<LangDetailsComponent>;

  beforeEach(async(() => {
    let route = {
      snapshot: {
        paramMap: new Map()
      }
    };
    route.snapshot.paramMap.set("id", 1);

    TestBed.configureTestingModule({
      declarations: [ LangDetailsComponent ],
      imports: [ FormsModule, HttpClientModule, RouterModule.forRoot([]) ],
      providers: [
        {
          provide: ActivatedRoute, useValue: route
        },
        { provide: APP_BASE_HREF, useValue: '' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

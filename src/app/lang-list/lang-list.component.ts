import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../language';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-lang-list',
  templateUrl: './lang-list.component.html',
  styleUrls: ['./lang-list.component.css']
})
export class LangListComponent implements OnInit {

  langs: Language[];

  @Input() lang: Language;
  @Input() languageName: string;
  @Input() languageId: number;

  constructor(private langService: LangService) { }

  ngOnInit() {
    this.langService.getLangs().subscribe(data => this.onLangsChanged(data));
  }

  onLangsChanged(langs: Language[]) {
    this.langs = langs;
  }

  createLanguage() {
    const lang: Language = {
      name: this.languageName,
      id: this.languageId
    };

    this.languageName = '';
    this.langService.createLang(lang)
      .subscribe(res => { this.langs.push(res); });
  }
}

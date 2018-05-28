import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Language } from '../language';
import { LangService } from '../lang.service';
import { User } from '../user';
import { mergeMap } from 'rxjs/operators';
import { UserService } from '../user.service';

class UserLanguageState {
  constructor(public user: User, public state: boolean) {
  }
}

@Component({
  selector: 'app-lang-details',
  templateUrl: './lang-details.component.html',
  styleUrls: ['./lang-details.component.css']
})
export class LangDetailsComponent implements OnInit {

  userStates: UserLanguageState[];

  @Input() lang: Language;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private langService: LangService,
    private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.langService.getLang(id)
      .pipe(mergeMap(data => {
        this.onLangChanged(data);
        return this.userService.getUsers();
      }))
      .subscribe(data => this.onUsersLoaded(data));
  }

  onUsersLoaded(users: User[]) {
    // Load the list of user ids which knows that particular language
    let usersForLang = this.langService.getUsersForLang(this.lang.id);
    // Map the list of users into a list of UserLanguageState objects
    this.userStates = users.map(user => {
      // Check if this particular user knows the current language, and
      // build a state object.
      let knowsLang = usersForLang.indexOf(user.id) !== -1;
      return new UserLanguageState(user, knowsLang)
    });
  }

  onLangChanged(lang: Language) {
    this.lang = lang;
  }

  goBack() {
    this.router.navigateByUrl('/lang');
  }

  save() {
    this.langService.updateLang(this.lang).subscribe(res => this.goBack());
  }

  updateUserKnowledge() {
    let userIds = this.userStates.filter(state => state.state)
                                 .map(state => state.user.id);
    this.langService.updateLanguageMap(this.lang.id, userIds);
  }
}

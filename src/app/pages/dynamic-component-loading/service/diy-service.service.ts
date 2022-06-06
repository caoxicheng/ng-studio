import { Injectable } from '@angular/core';
import {DiyItem} from "../model/diy-item";
import {HeroJobDiyComponent} from "../component/hero-job-diy/hero-job-diy.component";
import {HeroProfileComponent} from "../component/hero-profile/hero-profile.component";

@Injectable()
export class DiyServiceService {
  constructor() { }

  getDiys() {
    return [
      new DiyItem(
        HeroProfileComponent,
        {name: 'Bombasto', bio: 'Brave as they come'}
      ),
      new DiyItem(
        HeroProfileComponent,
        {name: 'Dr IQ', bir: 'Smart as they come'}
      ),
      new DiyItem(
        HeroJobDiyComponent,
        { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      ),
      new DiyItem(
        HeroJobDiyComponent,
        { headline: 'Openings in all departments', body: 'Apply today' }
      )
    ]
  }
}

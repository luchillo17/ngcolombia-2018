import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Speaker } from './speaker.model';
import { SpeakersBioComponent } from './speakers-bio/speakers-bio.component';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakersComponent {
  public speakers: Speaker[];

  constructor(public dialog: MatDialog) {
    this.speakers = [
      new Speaker(
        'Carlos Lopez Jaramillo',
        'Digital App Developer',
        'A great guy',
        'https://secure.gravatar.com/avatar/357efbf6f7a1495e5854cb47728fa523?s=64',
        'https://twitter.com/luchillo17',
        'https://github.com/luchillo17',
      ),
      ...new Array(5).fill(1).map(() => new Speaker()),
    ];
  }

  showBio(speaker: Speaker) {
    this.dialog.open(SpeakersBioComponent, { data: speaker });
  }
}

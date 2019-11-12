import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ViewYoutubeService } from './viewyoutube.service';
import { map } from 'rxjs/operators';
import getYouTubeID from 'get-youtube-id';

@Component({
  selector: 'app-viewyoutube',
  templateUrl: './viewyoutube.component.html'
})
export class ViewyoutubeComponent implements OnInit {

  dbList: AngularFireList<any>;
  youtube: any;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    url: new FormControl('', Validators.required)
  })

  player: YT.Player;
  private id: string = "";

  constructor(private db: AngularFireDatabase, private viewYoutubeService: ViewYoutubeService) { }

  ngOnInit() {
    this.getYoutubeList();
  }

  onSubmitYoutube(form: NgForm) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      //this.db.list("/view/youtube").push(form.value);
      this.viewYoutubeService.updateYoutube('-LnchPo7FQROd8V11DKi', form.value);
      this.resetForm();
    }
  }

  savePlayer(player) {
    this.player = player;
    //console.log('Video url: ', player.getVideoUrl());
  }
  onStateChange(event) {
    //console.log('player state', event.data);
  }

  getYoutubeList() {
    this.viewYoutubeService.getYoutubeList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(youtube => {
      this.youtube = youtube;
      this.id = getYouTubeID(youtube[0].url);
    });
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      url: ''
    });
    this.isSubmitted = false;
  }
}

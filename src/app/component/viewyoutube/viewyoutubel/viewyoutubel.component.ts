import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ViewYoutubelService } from './viewyoutubel.service';
import { map } from 'rxjs/operators';
import getYouTubeID from 'get-youtube-id';

@Component({
  selector: 'app-viewyoutubel',
  templateUrl: './viewyoutubel.component.html'
})
export class ViewyoutubelComponent implements OnInit {

  dbList: AngularFireList<any>;
  youtube: any;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    url: new FormControl('', Validators.required)
  })

  player: YT.Player;
  private id: string = "";

  constructor(private db: AngularFireDatabase, private viewYoutubeService: ViewYoutubelService) { }

  ngOnInit() {
    this.getYoutubeListl();
  }

  onSubmitYoutubeL(form: NgForm) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      //this.db.list("/view/youtubeL").push(form.value);
      this.viewYoutubeService.updateYoutubeL('-LpxyI__yyrSJiKgqhjq', form.value);
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
  
  getYoutubeListl() {
    this.viewYoutubeService.getYoutubeListL().snapshotChanges().pipe(
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


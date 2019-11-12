import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Youtubel } from './viewyoutubel';

@Injectable({
  providedIn: 'root'
})
export class ViewYoutubelService {

  private dbPathYoutubeL = '/view/youtubeL';
  youtubeRefl: AngularFireList<Youtubel> = null;

  constructor(private db: AngularFireDatabase){
      this.youtubeRefl = db.list(this.dbPathYoutubeL);
  }

  //Youtube left
  createYoutubel(youtube: Youtubel): void{
    this.youtubeRefl.push(youtube);
  }

  updateYoutubeL(key: string,value: any): Promise<void>{
      return this.youtubeRefl.update(key,value);
  }

  deleteYoutubeL(key: string): Promise<void>{
      return this.youtubeRefl.remove(key);
  }

  getYoutubeListL(): AngularFireList<Youtubel>{
      return this.youtubeRefl;
  }
}

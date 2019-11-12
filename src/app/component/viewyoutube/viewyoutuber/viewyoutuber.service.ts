import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Youtuber } from './viewyoutuber';

@Injectable({
  providedIn: 'root'
})
export class ViewYoutuberService {

  private dbPathYoutubeR = '/view/youtubeR';

  youtubeRefr: AngularFireList<Youtuber> = null;

  constructor(private db: AngularFireDatabase){
      this.youtubeRefr = db.list(this.dbPathYoutubeR);
  }

  //Youtube right
  createYoutubeR(youtube: Youtuber): void{
    this.youtubeRefr.push(youtube);
  }

  updateYoutubeR(key: string,value: any): Promise<void>{
      return this.youtubeRefr.update(key,value);
  }

  deleteYoutubeR(key: string): Promise<void>{
      return this.youtubeRefr.remove(key);
  }

  getYoutubeListR(): AngularFireList<Youtuber>{
      return this.youtubeRefr;
  }
}

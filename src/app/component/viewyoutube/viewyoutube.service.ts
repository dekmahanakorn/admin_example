import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Youtube } from './viewyoutube';

@Injectable({
  providedIn: 'root'
})
export class ViewYoutubeService {

  private dbPathYoutube = '/view/youtube';
  youtubeRef: AngularFireList<Youtube> = null;

  constructor(private db: AngularFireDatabase){
      this.youtubeRef = db.list(this.dbPathYoutube);
  }

  //Youtube center
  createYoutube(youtube: Youtube): void{
    this.youtubeRef.push(youtube);
  }

  updateYoutube(key: string,value: any): Promise<void>{
      return this.youtubeRef.update(key,value);
  }

  deleteYoutube(key: string): Promise<void>{
      return this.youtubeRef.remove(key);
  }

  getYoutubeList(): AngularFireList<Youtube>{
      return this.youtubeRef;
  }
}

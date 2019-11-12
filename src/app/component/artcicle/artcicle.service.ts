import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Review } from './artcicle';

@Injectable({
  providedIn: 'root'
})
export class ArtcicleService {
  private dbPathReview1 = '/review/first';
  review1Ref: AngularFireList<Review> = null;

  private dbPathReview2 = '/review/second';
  review2Ref: AngularFireList<Review> = null;

  private dbPathReview3 = '/review/third';
  review3Ref: AngularFireList<Review> = null;

  private dbPathReview4 = '/review/four';
  review4Ref: AngularFireList<Review> = null;

  private dbPathReview5 = '/review/five';
  review5Ref: AngularFireList<Review> = null;

  private dbPathReview6 = '/review/six';
  review6Ref: AngularFireList<Review> = null;

  private dbPathReview7 = '/review/seven';
  review7Ref: AngularFireList<Review> = null;

  private dbPathReview8 = '/review/eight';
  review8Ref: AngularFireList<Review> = null;

  private dbPathReview9 = '/review/nine';
  review9Ref: AngularFireList<Review> = null;

  private dbPathReview10 = '/review/ten';
  review10Ref: AngularFireList<Review> = null;

  private dbPathReview11 = '/review/eleven';
  review11Ref: AngularFireList<Review> = null;

  private dbPathReview12 = '/review/twelve';
  review12Ref: AngularFireList<Review> = null;

  private dbPathReview13 = '/review/thirteen';
  review13Ref: AngularFireList<Review> = null;

  private dbPathReview14 = '/review/fourteen';
  review14Ref: AngularFireList<Review> = null;

  private dbPathReview15 = '/review/fifteen';
  review15Ref: AngularFireList<Review> = null;

  imageDetailList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.review1Ref = db.list(this.dbPathReview1);
    this.review2Ref = db.list(this.dbPathReview2);
    this.review3Ref = db.list(this.dbPathReview3);
    this.review4Ref = db.list(this.dbPathReview4);
    this.review5Ref = db.list(this.dbPathReview5);
    this.review6Ref = db.list(this.dbPathReview6);
    this.review7Ref = db.list(this.dbPathReview7);
    this.review8Ref = db.list(this.dbPathReview8);
    this.review9Ref = db.list(this.dbPathReview9);
    this.review10Ref = db.list(this.dbPathReview10);
    this.review11Ref = db.list(this.dbPathReview11);
    this.review12Ref = db.list(this.dbPathReview12);
    this.review13Ref = db.list(this.dbPathReview13);
    this.review14Ref = db.list(this.dbPathReview14);
    this.review15Ref = db.list(this.dbPathReview15);
  }

  //review1
  createReview1(review: Review): void {
    this.review1Ref.push(review);
  }

  updateReview1(key: string, value: any): Promise<void> {
    return this.review1Ref.update(key, value);
  }

  deleteReview1(key: string): Promise<void> {
    return this.review1Ref.remove(key);
  }

  getReview1List(): AngularFireList<Review> {
    return this.review1Ref;
  }

  //review2
  createReview2(review: Review): void {
    this.review2Ref.push(review);
  }

  updateReview2(key: string, value: any): Promise<void> {
    return this.review2Ref.update(key, value);
  }

  deleteReview2(key: string): Promise<void> {
    return this.review2Ref.remove(key);
  }

  getReview2List(): AngularFireList<Review> {
    return this.review2Ref;
  }

  //review3
  createReview3(review: Review): void {
    this.review3Ref.push(review);
  }

  updateReview3(key: string, value: any): Promise<void> {
    return this.review3Ref.update(key, value);
  }

  deleteReview3(key: string): Promise<void> {
    return this.review3Ref.remove(key);
  }

  getReview3List(): AngularFireList<Review> {
    return this.review3Ref;
  }

  //review4
  createReview4(review: Review): void {
    this.review4Ref.push(review);
  }

  updateReview4(key: string, value: any): Promise<void> {
    return this.review4Ref.update(key, value);
  }

  deleteReview4(key: string): Promise<void> {
    return this.review4Ref.remove(key);
  }

  getReview4List(): AngularFireList<Review> {
    return this.review4Ref;
  }

  //review5
  createReview5(review: Review): void {
    this.review5Ref.push(review);
  }

  updateReview5(key: string, value: any): Promise<void> {
    return this.review5Ref.update(key, value);
  }

  deleteReview5(key: string): Promise<void> {
    return this.review5Ref.remove(key);
  }

  getReview5List(): AngularFireList<Review> {
    return this.review5Ref;
  }

  //review6
  createReview6(review: Review): void {
    this.review6Ref.push(review);
  }

  updateReview6(key: string, value: any): Promise<void> {
    return this.review6Ref.update(key, value);
  }

  deleteReview6(key: string): Promise<void> {
    return this.review6Ref.remove(key);
  }

  getReview6List(): AngularFireList<Review> {
    return this.review6Ref;
  }

  //review7
  createReview7(review: Review): void {
    this.review7Ref.push(review);
  }

  updateReview7(key: string, value: any): Promise<void> {
    return this.review7Ref.update(key, value);
  }

  deleteReview7(key: string): Promise<void> {
    return this.review7Ref.remove(key);
  }

  getReview7List(): AngularFireList<Review> {
    return this.review7Ref;
  }

  //review8
  createReview8(review: Review): void {
    this.review8Ref.push(review);
  }

  updateReview8(key: string, value: any): Promise<void> {
    return this.review8Ref.update(key, value);
  }

  deleteReview8(key: string): Promise<void> {
    return this.review8Ref.remove(key);
  }

  getReview8List(): AngularFireList<Review> {
    return this.review8Ref;
  }

  //review9
  createReview9(review: Review): void {
    this.review9Ref.push(review);
  }

  updateReview9(key: string, value: any): Promise<void> {
    return this.review9Ref.update(key, value);
  }

  deleteReview9(key: string): Promise<void> {
    return this.review9Ref.remove(key);
  }

  getReview9List(): AngularFireList<Review> {
    return this.review9Ref;
  }

  //review10
  createReview10(review: Review): void {
    this.review10Ref.push(review);
  }

  updateReview10(key: string, value: any): Promise<void> {
    return this.review10Ref.update(key, value);
  }

  deleteReview10(key: string): Promise<void> {
    return this.review10Ref.remove(key);
  }

  getReview10List(): AngularFireList<Review> {
    return this.review10Ref;
  }

  //review11
  createReview11(review: Review): void {
    this.review11Ref.push(review);
  }

  updateReview11(key: string, value: any): Promise<void> {
    return this.review11Ref.update(key, value);
  }

  deleteReview11(key: string): Promise<void> {
    return this.review11Ref.remove(key);
  }

  getReview11List(): AngularFireList<Review> {
    return this.review11Ref;
  }

  //review12
  createReview12(review: Review): void {
    this.review12Ref.push(review);
  }

  updateReview12(key: string, value: any): Promise<void> {
    return this.review12Ref.update(key, value);
  }

  deleteReview12(key: string): Promise<void> {
    return this.review12Ref.remove(key);
  }

  getReview12List(): AngularFireList<Review> {
    return this.review12Ref;
  }

  //review13
  createReview13(review: Review): void {
    this.review13Ref.push(review);
  }

  updateReview13(key: string, value: any): Promise<void> {
    return this.review13Ref.update(key, value);
  }

  deleteReview13(key: string): Promise<void> {
    return this.review13Ref.remove(key);
  }

  getReview13List(): AngularFireList<Review> {
    return this.review13Ref;
  }

  //review14
  createReview14(review: Review): void {
    this.review14Ref.push(review);
  }

  updateReview14(key: string, value: any): Promise<void> {
    return this.review14Ref.update(key, value);
  }

  deleteReview14(key: string): Promise<void> {
    return this.review14Ref.remove(key);
  }

  getReview14List(): AngularFireList<Review> {
    return this.review14Ref;
  }

  //review15
  createReview15(review: Review): void {
    this.review1Ref.push(review);
  }

  updateReview15(key: string, value: any): Promise<void> {
    return this.review15Ref.update(key, value);
  }

  deleteReview15(key: string): Promise<void> {
    return this.review15Ref.remove(key);
  }

  getReview15List(): AngularFireList<Review> {
    return this.review15Ref;
  }

  //Image
  getImageDetailList() {
    this.imageDetailList = this.db.list('imageDetails');
  }

  uploadImageReview1(imageDetails) {
    this.review1Ref.update('-LnbrmUxduZmfmz75ea1', imageDetails);
  }

  uploadImageReview2(imageDetails) {
    this.review2Ref.update('-LnbtYR_y2NrYcAzujoa', imageDetails);
  }

  uploadImageReview3(imageDetails) {
    this.review3Ref.update('-LnbtbTPrk59wDe7N9MD', imageDetails);
  }
  uploadImageReview4(imageDetails) {
    this.review4Ref.update('-Lqz5qkGflhIixdyETVR', imageDetails);
  }
  uploadImageReview5(imageDetails) {
    this.review5Ref.update('-Lqz6u9e510Mii3K5gP3', imageDetails);
  }
  uploadImageReview6(imageDetails) {
    this.review6Ref.update('-Lqz7_N5-aEdcWbC4Ytr', imageDetails);
  }
  uploadImageReview7(imageDetails) {
    this.review7Ref.update('-Lqz8Mb5Q7c6eqsJjVx-', imageDetails);
  }
  uploadImageReview8(imageDetails) {
    this.review8Ref.update('-Lqz9Bt5dVr4zClGxpTw', imageDetails);
  }
  uploadImageReview9(imageDetails) {
    this.review9Ref.update('-LqzAaQJ-4R2EIxiXI9u', imageDetails);
  }
  uploadImageReview10(imageDetails) {
    this.review10Ref.update('-LqzBlJ9HuO7JXv3DZ4F', imageDetails);
  }
  uploadImageReview11(imageDetails) {
    this.review11Ref.update('-LqzEb9-fKIQORBuuSqB', imageDetails);
  }
  uploadImageReview12(imageDetails) {
    this.review12Ref.update('-LqzFj2sxiA6YOUflAec', imageDetails);
  }
  uploadImageReview13(imageDetails) {
    this.review13Ref.update('-LqzHOrICExgYZzLJyZT', imageDetails);
  }
  uploadImageReview14(imageDetails) {
    this.review14Ref.update('-LqzHw0uuTvZE6TEW3Rl', imageDetails);
  }
  uploadImageReview15(imageDetails) {
    this.review15Ref.update('-LqzIUqHjab3ehXUTegF', imageDetails);
  }
}
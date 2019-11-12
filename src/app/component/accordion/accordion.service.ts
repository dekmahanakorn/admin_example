import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Asia } from './accordion';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  private dbPathAsia1 = '/packet/asia1';
  asia1Ref: AngularFireList<Asia> = null;

  private dbPathAsia2 = '/packet/asia2';
  asia2Ref: AngularFireList<Asia> = null;

  private dbPathAsia3 = '/packet/asia3';
  asia3Ref: AngularFireList<Asia> = null;

  private dbPathAsia4 = '/packet/asia4';
  asia4Ref: AngularFireList<Asia> = null;

  private dbPathAsia5 = '/packet/asia5';
  asia5Ref: AngularFireList<Asia> = null;

  private dbPathAsia6 = '/packet/asia6';
  asia6Ref: AngularFireList<Asia> = null;

  private dbPathAsia7 = '/packet/asia7';
  asia7Ref: AngularFireList<Asia> = null;

  private dbPathAsia8 = '/packet/asia8';
  asia8Ref: AngularFireList<Asia> = null;

  private dbPathAsia9 = '/packet/asia9';
  asia9Ref: AngularFireList<Asia> = null;

  private dbPathAsia10 = '/packet/asia10';
  asia10Ref: AngularFireList<Asia> = null;

  private dbPathAsia11 = '/packet/asia11';
  asia11Ref: AngularFireList<Asia> = null;

  private dbPathAsia12 = '/packet/asia12';
  asia12Ref: AngularFireList<Asia> = null;

  private dbPathAsia13 = '/packet/asia13';
  asia13Ref: AngularFireList<Asia> = null;

  private dbPathAsia14 = '/packet/asia14';
  asia14Ref: AngularFireList<Asia> = null;

  private dbPathAsia15 = '/packet/asia15';
  asia15Ref: AngularFireList<Asia> = null;

  private dbPathAsia16 = '/packet/asia16';
  asia16Ref: AngularFireList<Asia> = null;

  private dbPathAsia17 = '/packet/asia17';
  asia17Ref: AngularFireList<Asia> = null;

  private dbPathAsia18 = '/packet/asia18';
  asia18Ref: AngularFireList<Asia> = null;

  private dbPathAsia19 = '/packet/asia19';
  asia19Ref: AngularFireList<Asia> = null;

  private dbPathAsia20 = '/packet/asia20';
  asia20Ref: AngularFireList<Asia> = null;

  private dbPathAsia21 = '/packet/asia21';
  asia21Ref: AngularFireList<Asia> = null;

  private dbPathAsia22 = '/packet/asia22';
  asia22Ref: AngularFireList<Asia> = null;

  private dbPathAsia23 = '/packet/asia23';
  asia23Ref: AngularFireList<Asia> = null;

  private dbPathAsia24 = '/packet/asia24';
  asia24Ref: AngularFireList<Asia> = null;

  imageDetailList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.asia1Ref = db.list(this.dbPathAsia1);
    this.asia2Ref = db.list(this.dbPathAsia2);
    this.asia3Ref = db.list(this.dbPathAsia3);
    this.asia4Ref = db.list(this.dbPathAsia4);
    this.asia5Ref = db.list(this.dbPathAsia5);
    this.asia6Ref = db.list(this.dbPathAsia6);
    this.asia7Ref = db.list(this.dbPathAsia7);
    this.asia8Ref = db.list(this.dbPathAsia8);
    this.asia9Ref = db.list(this.dbPathAsia9);
    this.asia10Ref = db.list(this.dbPathAsia10);
    this.asia11Ref = db.list(this.dbPathAsia11);
    this.asia12Ref = db.list(this.dbPathAsia12);
    this.asia13Ref = db.list(this.dbPathAsia13);
    this.asia14Ref = db.list(this.dbPathAsia14);
    this.asia15Ref = db.list(this.dbPathAsia15);
    this.asia16Ref = db.list(this.dbPathAsia16);
    this.asia17Ref = db.list(this.dbPathAsia17);
    this.asia18Ref = db.list(this.dbPathAsia18);
    this.asia19Ref = db.list(this.dbPathAsia19);
    this.asia20Ref = db.list(this.dbPathAsia20);
    this.asia21Ref = db.list(this.dbPathAsia21);
    this.asia22Ref = db.list(this.dbPathAsia22);
    this.asia23Ref = db.list(this.dbPathAsia23);
    this.asia24Ref = db.list(this.dbPathAsia24);
  }

  //asia1
  createAsia1(asia1: Asia): void {
    this.asia1Ref.push(asia1);
  }

  updateAsia1(key: string, value: any): Promise<void> {
    return this.asia1Ref.update(key, value);
  }

  deleteAsia1(key: string): Promise<void> {
    return this.asia1Ref.remove(key);
  }

  getAsia1List(): AngularFireList<Asia> {
    return this.asia1Ref;
  }

  //asia2
  createAsia2(asia2: Asia): void {
    this.asia2Ref.push(asia2);
  }

  updateAsia2(key: string, value: any): Promise<void> {
    return this.asia2Ref.update(key, value);
  }

  deleteAsia2(key: string): Promise<void> {
    return this.asia2Ref.remove(key);
  }

  getAsia2List(): AngularFireList<Asia> {
    return this.asia2Ref;
  }

  //asia3
  createAsia3(asia3: Asia): void {
    this.asia3Ref.push(asia3);
  }

  updateAsia3(key: string, value: any): Promise<void> {
    return this.asia3Ref.update(key, value);
  }

  deleteAsia3(key: string): Promise<void> {
    return this.asia3Ref.remove(key);
  }

  getAsia3List(): AngularFireList<Asia> {
    return this.asia3Ref;
  }

  //asia4
  createAsia4(asia4: Asia): void {
    this.asia4Ref.push(asia4);
  }

  updateAsia4(key: string, value: any): Promise<void> {
    return this.asia4Ref.update(key, value);
  }

  deleteAsia4(key: string): Promise<void> {
    return this.asia4Ref.remove(key);
  }

  getAsia4List(): AngularFireList<Asia> {
    return this.asia4Ref;
  }

  //asia5
  createAsia5(asia5: Asia): void {
    this.asia5Ref.push(asia5);
  }

  updateAsia5(key: string, value: any): Promise<void> {
    return this.asia5Ref.update(key, value);
  }

  deleteAsia5(key: string): Promise<void> {
    return this.asia5Ref.remove(key);
  }

  getAsia5List(): AngularFireList<Asia> {
    return this.asia5Ref;
  }

  //asia6
  createAsia6(asia6: Asia): void {
    this.asia6Ref.push(asia6);
  }

  updateAsia6(key: string, value: any): Promise<void> {
    return this.asia6Ref.update(key, value);
  }

  deleteAsia6(key: string): Promise<void> {
    return this.asia6Ref.remove(key);
  }

  getAsia6List(): AngularFireList<Asia> {
    return this.asia6Ref;
  }

  //asia7
  createAsia7(asia7: Asia): void {
    this.asia7Ref.push(asia7);
  }

  updateAsia7(key: string, value: any): Promise<void> {
    return this.asia7Ref.update(key, value);
  }

  deleteAsia7(key: string): Promise<void> {
    return this.asia7Ref.remove(key);
  }

  getAsia7List(): AngularFireList<Asia> {
    return this.asia7Ref;
  }

  //asia8
  createAsia8(asia8: Asia): void {
    this.asia8Ref.push(asia8);
  }

  updateAsia8(key: string, value: any): Promise<void> {
    return this.asia8Ref.update(key, value);
  }

  deleteAsia8(key: string): Promise<void> {
    return this.asia8Ref.remove(key);
  }

  getAsia8List(): AngularFireList<Asia> {
    return this.asia8Ref;
  }

  //asia9
  createAsia9(asia9: Asia): void {
    this.asia9Ref.push(asia9);
  }

  updateAsia9(key: string, value: any): Promise<void> {
    return this.asia9Ref.update(key, value);
  }

  getAsia9List(): AngularFireList<Asia> {
    return this.asia9Ref;
  }

  //asia10
  createAsia10(asia10: Asia): void {
    this.asia10Ref.push(asia10);
  }

  updateAsia10(key: string, value: any): Promise<void> {
    return this.asia10Ref.update(key, value);
  }

  getAsia10List(): AngularFireList<Asia> {
    return this.asia10Ref;
  }

  //asia11
  createAsia11(asia11: Asia): void {
    this.asia11Ref.push(asia11);
  }

  updateAsia11(key: string, value: any): Promise<void> {
    return this.asia11Ref.update(key, value);
  }

  getAsia11List(): AngularFireList<Asia> {
    return this.asia11Ref;
  }

  //asia12
  createAsia12(asia12: Asia): void {
    this.asia12Ref.push(asia12);
  }

  updateAsia12(key: string, value: any): Promise<void> {
    return this.asia12Ref.update(key, value);
  }

  getAsia12List(): AngularFireList<Asia> {
    return this.asia12Ref;
  }

  //asia13
  createAsia13(asia13: Asia): void {
    this.asia13Ref.push(asia13);
  }

  updateAsia13(key: string, value: any): Promise<void> {
    return this.asia13Ref.update(key, value);
  }

  getAsia13List(): AngularFireList<Asia> {
    return this.asia13Ref;
  }

  //asia14
  createAsia14(asia14: Asia): void {
    this.asia14Ref.push(asia14);
  }

  updateAsia14(key: string, value: any): Promise<void> {
    return this.asia14Ref.update(key, value);
  }

  getAsia14List(): AngularFireList<Asia> {
    return this.asia14Ref;
  }

  //asia15
  createAsia15(asia15: Asia): void {
    this.asia15Ref.push(asia15);
  }

  updateAsia15(key: string, value: any): Promise<void> {
    return this.asia15Ref.update(key, value);
  }

  getAsia15List(): AngularFireList<Asia> {
    return this.asia15Ref;
  }

  //asia16
  createAsia16(asia16: Asia): void {
    this.asia16Ref.push(asia16);
  }

  updateAsia16(key: string, value: any): Promise<void> {
    return this.asia16Ref.update(key, value);
  }

  getAsia16List(): AngularFireList<Asia> {
    return this.asia16Ref;
  }

  //asia17
  createAsia17(asia17: Asia): void {
    this.asia17Ref.push(asia17);
  }

  updateAsia17(key: string, value: any): Promise<void> {
    return this.asia17Ref.update(key, value);
  }

  getAsia17List(): AngularFireList<Asia> {
    return this.asia17Ref;
  }

  //asia18
  createAsia18(asia18: Asia): void {
    this.asia18Ref.push(asia18);
  }

  updateAsia18(key: string, value: any): Promise<void> {
    return this.asia18Ref.update(key, value);
  }

  getAsia18List(): AngularFireList<Asia> {
    return this.asia18Ref;
  }

  //asia19
  createAsia19(asia19: Asia): void {
    this.asia19Ref.push(asia19);
  }

  updateAsia19(key: string, value: any): Promise<void> {
    return this.asia19Ref.update(key, value);
  }

  getAsia19List(): AngularFireList<Asia> {
    return this.asia19Ref;
  }

  //asia20
  createAsia20(asia20: Asia): void {
    this.asia20Ref.push(asia20);
  }

  updateAsia20(key: string, value: any): Promise<void> {
    return this.asia20Ref.update(key, value);
  }

  getAsia20List(): AngularFireList<Asia> {
    return this.asia20Ref;
  }

  //asia21
  createAsia21(asia21: Asia): void {
    this.asia21Ref.push(asia21);
  }

  updateAsia21(key: string, value: any): Promise<void> {
    return this.asia21Ref.update(key, value);
  }

  getAsia21List(): AngularFireList<Asia> {
    return this.asia21Ref;
  }

  //asia22
  createAsia22(asia22: Asia): void {
    this.asia22Ref.push(asia22);
  }

  updateAsia22(key: string, value: any): Promise<void> {
    return this.asia22Ref.update(key, value);
  }

  getAsia22List(): AngularFireList<Asia> {
    return this.asia22Ref;
  }

  //asia23
  createAsia23(asia23: Asia): void {
    this.asia23Ref.push(asia23);
  }

  updateAsia23(key: string, value: any): Promise<void> {
    return this.asia23Ref.update(key, value);
  }

  getAsia23List(): AngularFireList<Asia> {
    return this.asia23Ref;
  }

  //asia24
  createAsia24(asia24: Asia): void {
    this.asia24Ref.push(asia24);
  }

  updateAsia24(key: string, value: any): Promise<void> {
    return this.asia24Ref.update(key, value);
  }

  getAsia24List(): AngularFireList<Asia> {
    return this.asia24Ref;
  }
  //Image
  getImageDetailList() {
    this.imageDetailList = this.db.list('imageDetails');
  }

  uploadImageAsia1(imageDetails) {
    this.asia1Ref.update('-LnbrmUxduZmfmz75ea1', imageDetails);
  }

  uploadImageAsia2(imageDetails) {
    this.asia2Ref.update('-Lni0JRWc2Onnk2g_8-P', imageDetails);
  }

  uploadImageAsia3(imageDetails) {
    this.asia3Ref.update('-Lni19mQh3nKwDZBYR-9', imageDetails);
  }

  uploadImageAsia4(imageDetails) {
    this.asia4Ref.update('-Lni2-Fz_iwiXtiukoIi', imageDetails);
  }

  uploadImageAsia5(imageDetails) {
    this.asia5Ref.update('-Lr-jo63uJ7wL90B2AbY', imageDetails);
  }

  uploadImageAsia6(imageDetails) {
    this.asia6Ref.update('-Lr-lo3-3LsVx4QMhdc0', imageDetails);
  }

  uploadImageAsia7(imageDetails) {
    this.asia7Ref.update('-Lr-oFKB9X3u4RiZI42i', imageDetails);
  }

  uploadImageAsia8(imageDetails) {
    this.asia8Ref.update('-Lr-pWge7frp3g0eAxal', imageDetails);
  }

  uploadImageAsia9(imageDetails) {
    this.asia9Ref.update('-Lr-qaE-Bp7FVIPWFq-d', imageDetails);
  }

  uploadImageAsia10(imageDetails) {
    this.asia10Ref.update('-Lr-yIpAuxTdLJ3OQobd', imageDetails);
  }

  uploadImageAsia11(imageDetails) {
    this.asia11Ref.update('-Lr0-MNJMEUwsN2Olv5r', imageDetails);
  }

  uploadImageAsia12(imageDetails) {
    this.asia12Ref.update('-Lr07Jm4P9AFnsB7y04B', imageDetails);
  }

  uploadImageAsia13(imageDetails) {
    this.asia13Ref.update('-Lr0C5qTwB8Zkoefl2yb', imageDetails);
  }

  uploadImageAsia14(imageDetails) {
    this.asia14Ref.update('-Lr0ClCPXPmKzKSsX_B3', imageDetails);
  }

  uploadImageAsia15(imageDetails) {
    this.asia15Ref.update('-Lr0KcXYuNugVfMC8qx7', imageDetails);
  }

  uploadImageAsia16(imageDetails) {
    this.asia16Ref.update('-Lr0M63YT8xCOxPvaZ6d', imageDetails);
  }

  uploadImageAsia17(imageDetails) {
    this.asia17Ref.update('-Lr0Mui3oBRxG-5nmLtU', imageDetails);
  }

  uploadImageAsia18(imageDetails) {
    this.asia18Ref.update('-Lr0O1MhN0CsPgoAZmH-', imageDetails);
  }

  uploadImageAsia19(imageDetails) {
    this.asia19Ref.update('-Lr0PJbwrs7s3KOgvwt2', imageDetails);
  }

  uploadImageAsia20(imageDetails) {
    this.asia20Ref.update('-Lr0Q-xH0_ECu_V9xTmS', imageDetails);
  }

  uploadImageAsia21(imageDetails) {
    this.asia21Ref.update('-LrlK64l_hIoO4zYQL8K', imageDetails);
  }

  uploadImageAsia22(imageDetails) {
    this.asia22Ref.update('-LrlKXMQ8kbK7xMBqsIO', imageDetails);
  }

  uploadImageAsia23(imageDetails) {
    this.asia23Ref.update('-LrlKsLBiEA_M3YiRsEh', imageDetails);
  }

  uploadImageAsia24(imageDetails) {
    this.asia24Ref.update('-LrlMG9w6ZODqishgHOy', imageDetails);
  }
}
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { ArtcicleService } from './artcicle.service';
import { map, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-artcicle',
  templateUrl: './artcicle.component.html'
})
export class ArtcicleComponent implements OnInit {

  closeResult: string;
  selectedFile = null;
  dbList: AngularFireList<any>;
  review1: any;
  review2: any;
  review3: any;
  review4: any;
  review5: any;
  review6: any;
  review7: any;
  review8: any;
  review9: any;
  review10: any;
  review11: any;
  review12: any;
  review13: any;
  review14: any;
  review15: any;

  imgSrc: string = '/assets/images/upload.jpg';
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
  })

  constructor(private modalService: NgbModal, private db: AngularFireDatabase, private artcicleService: ArtcicleService, private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this.getReview1List();
    this.getReview2List();
    this.getReview3List();
    this.getReview4List();
    this.getReview5List();
    this.getReview6List();
    this.getReview7List();
    this.getReview8List();
    this.getReview9List();
    this.getReview10List();
    this.getReview11List();
    this.getReview12List();
    this.getReview13List();
    this.getReview14List();
    this.getReview15List();
    this.resetForm();
    this.artcicleService.getImageDetailList();
  }

  open1(content1) {
    this.modalService.open(content1, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open2(content2) {
    this.modalService.open(content2, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open3(content3) {
    this.modalService.open(content3, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open4(content4) {
    this.modalService.open(content4, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open5(content5) {
    this.modalService.open(content5, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open6(content6) {
    this.modalService.open(content6, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open7(content7) {
    this.modalService.open(content7, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open8(content8) {
    this.modalService.open(content8, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open9(content9) {
    this.modalService.open(content9, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open10(content10) {
    this.modalService.open(content10, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open11(content11) {
    this.modalService.open(content11, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open12(content12) {
    this.modalService.open(content12, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open13(content13) {
    this.modalService.open(content13, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open14(content14) {
    this.modalService.open(content14, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open15(content15) {
    this.modalService.open(content15, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '/assets/images/upload.jpg';
      this.selectedImage = null;
    }
  }

  onSubmitReview1UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview1(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitReview2UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview2(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitReview3UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview3(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitReview4UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview4(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitReview5UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview5(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitReview6UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview6(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitReview7UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview7(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitReview8UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview8(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitReview9UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview9(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitReview10UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview10(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitReview11UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview11(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitReview12UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview12(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitReview13UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview13(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitReview14UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview14(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitReview15UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.artcicleService.uploadImageReview15(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      imageUrl: '',
      category: 'Review image'
    });
    this.imgSrc = '/assets/images/upload.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

  onFileSelect(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onSubmitReview1(form: NgForm) {
    //this.db.list("/review/first").push(form.value);
    this.artcicleService.updateReview1('-LnbrmUxduZmfmz75ea1', form.value);
    this.modalService.dismissAll();
  }

  onSubmitReview2(form: NgForm) {
    //this.db.list("/review/second").push(form.value);
    this.artcicleService.updateReview2('-LnbtYR_y2NrYcAzujoa', form.value);
    this.modalService.dismissAll();
  }

  onSubmitReview3(form: NgForm) {
    //this.db.list("/review/third").push(form.value);
    this.artcicleService.updateReview3('-LnbtbTPrk59wDe7N9MD', form.value);
    this.modalService.dismissAll();
  }

  onSubmitReview4(form: NgForm) {
    //this.db.list("/review/four").push(form.value);
    this.artcicleService.updateReview4('-Lqz5qkGflhIixdyETVR', form.value);
    this.modalService.dismissAll();
  }

  onSubmitReview5(form: NgForm) {
    //this.db.list("/review/five").push(form.value);
    this.artcicleService.updateReview5('-Lqz6u9e510Mii3K5gP3', form.value);
    this.modalService.dismissAll();
  }

  onSubmitReview6(form: NgForm) {
    //this.db.list("/review/six").push(form.value);
    this.artcicleService.updateReview6('-Lqz7_N5-aEdcWbC4Ytr', form.value);
    this.modalService.dismissAll();
  }

  onSubmitReview7(form: NgForm) {
    //this.db.list("/review/seven").push(form.value);
    this.artcicleService.updateReview7('-Lqz8Mb5Q7c6eqsJjVx-', form.value);
    this.modalService.dismissAll();
  }

  onSubmitReview8(form: NgForm) {
    //this.db.list("/review/eight").push(form.value);
    this.artcicleService.updateReview8('-Lqz9Bt5dVr4zClGxpTw', form.value);
    this.modalService.dismissAll();
  }

  onSubmitReview9(form: NgForm) {
    //this.db.list("/review/nine").push(form.value);
    this.artcicleService.updateReview9('-LqzAaQJ-4R2EIxiXI9u', form.value);
    this.modalService.dismissAll();
  }

  onSubmitReview10(form: NgForm) {
    //this.db.list("/review/ten").push(form.value);
    this.artcicleService.updateReview10('-LqzBlJ9HuO7JXv3DZ4F', form.value);
    this.modalService.dismissAll();
  }

  onSubmitReview11(form: NgForm) {
    //this.db.list("/review/eleven").push(form.value);
    this.artcicleService.updateReview11('-LqzEb9-fKIQORBuuSqB', form.value);
    this.modalService.dismissAll();
  }

  onSubmitReview12(form: NgForm) {
    //this.db.list("/review/twelve").push(form.value);
    this.artcicleService.updateReview12('-LqzFj2sxiA6YOUflAec', form.value);
    this.modalService.dismissAll();
  }

  onSubmitReview13(form: NgForm) {
    //this.db.list("/review/thirteen").push(form.value);
    this.artcicleService.updateReview13('-LqzHOrICExgYZzLJyZT', form.value);
    this.modalService.dismissAll();
  }

  onSubmitReview14(form: NgForm) {
    //this.db.list("/review/fourteen").push(form.value);
    this.artcicleService.updateReview14('-LqzHw0uuTvZE6TEW3Rl', form.value);
    this.modalService.dismissAll();
  }

  onSubmitReview15(form: NgForm) {
    //this.db.list("/review/fifteen").push(form.value);
    this.artcicleService.updateReview15('-LqzIUqHjab3ehXUTegF', form.value);
    this.modalService.dismissAll();
  }

  getReview1List() {
    this.artcicleService.getReview1List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review1 => {
      this.review1 = review1;
    });
  }

  getReview2List() {
    this.artcicleService.getReview2List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review2 => {
      this.review2 = review2;
    });
  }

  getReview3List() {
    this.artcicleService.getReview3List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review3 => {
      this.review3 = review3;
    });
  }

  getReview4List() {
    this.artcicleService.getReview4List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review4 => {
      this.review4 = review4;
    });
  }

  getReview5List() {
    this.artcicleService.getReview5List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review5 => {
      this.review5 = review5;
    });
  }

  getReview6List() {
    this.artcicleService.getReview6List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review6 => {
      this.review6 = review6;
    });
  }

  getReview7List() {
    this.artcicleService.getReview7List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review7 => {
      this.review7 = review7;
    });
  }

  getReview8List() {
    this.artcicleService.getReview8List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review8 => {
      this.review8 = review8;
    });
  }

  getReview9List() {
    this.artcicleService.getReview9List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review9 => {
      this.review9 = review9;
    });
  }

  getReview10List() {
    this.artcicleService.getReview10List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review10 => {
      this.review10 = review10;
    });
  }

  getReview11List() {
    this.artcicleService.getReview11List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review11 => {
      this.review11 = review11;
    });
  }

  getReview12List() {
    this.artcicleService.getReview12List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review12 => {
      this.review12 = review12;
    });
  }

  getReview13List() {
    this.artcicleService.getReview13List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review13 => {
      this.review13 = review13;
    });
  }

  getReview14List() {
    this.artcicleService.getReview14List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review14 => {
      this.review14 = review14;
    });
  }

  getReview15List() {
    this.artcicleService.getReview15List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(review15 => {
      this.review15 = review15;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}



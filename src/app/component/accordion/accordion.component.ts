import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { AccordionService } from './accordion.service';
import { map, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-ngbd-accordion-basic',
  templateUrl: 'accordion.component.html'
})
export class NgbdAccordionBasicComponent implements OnInit{
  
  closeResult: string;
  selectedFile = null;
  dbList: AngularFireList<any>;
  asia1: any;
  asia2: any;
  asia3: any;
  asia4: any;
  asia5: any;
  asia6: any;
  asia7: any;
  asia8: any;
  asia9: any;
  asia10: any;
  asia11: any;
  asia12: any;
  asia13: any;
  asia14: any;
  asia15: any;
  asia16: any;
  asia17: any;
  asia18: any;
  asia19: any;
  asia20: any;
  asia21: any;
  asia22: any;
  asia23: any;
  asia24: any;

  imgSrc : string = '/assets/images/upload.jpg';
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    category : new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
  })

  constructor(private modalService: NgbModal, private db: AngularFireDatabase, private accordionService: AccordionService,private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this.getAsia1List();
    this.getAsia2List();
    this.getAsia3List();
    this.getAsia4List();
    this.getAsia5List();
    this.getAsia6List();
    this.getAsia7List();
    this.getAsia8List();
    this.getAsia9List();
    this.getAsia10List();
    this.getAsia11List();
    this.getAsia12List();
    this.getAsia13List();
    this.getAsia14List();
    this.getAsia15List();
    this.getAsia16List();
    this.getAsia17List();
    this.getAsia18List();
    this.getAsia19List();
    this.getAsia20List();
    this.getAsia21List();
    this.getAsia22List();
    this.getAsia23List();
    this.getAsia24List();
    this.accordionService.getImageDetailList();
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

  open9(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open10(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open11(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open12(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open13(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open14(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open15(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open16(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open17(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open18(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open19(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open20(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open21(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open22(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open23(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  open24(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.resetForm();
    });
  }

  showPreview(event: any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else{
      this.imgSrc = '/assets/images/upload.jpg';
      this.selectedImage = null;
    }
  }

  onSubmitAsia1UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia1(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia2UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia2(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia3UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia3(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia4UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia4(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia5UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia5(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia6UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia6(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia7UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia7(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia8UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia8(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia9UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia9(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia10UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia10(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia11UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia11(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia12UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia12(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia13UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia13(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia14UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia14(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia15UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia15(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia16UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia16(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia17UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia17(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia18UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia18(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia19UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia19(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia20UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia20(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia21UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia21(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia22UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia22(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia23UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia23(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  onSubmitAsia24UploadImage(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.accordionService.uploadImageAsia24(formValue);
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
      category: 'Asia image'
    });
    this.imgSrc =  '/assets/images/upload.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

  onFileSelect(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onSubmitAsia1(form: NgForm) {
    //this.db.list("/packet/asia1").push(form.value);
    this.accordionService.updateAsia1('-LnbrmUxduZmfmz75ea1',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia2(form: NgForm) {
    //this.db.list("/packet/asia2").push(form.value);
    this.accordionService.updateAsia2('-Lni0JRWc2Onnk2g_8-P',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia3(form: NgForm) {
    //this.db.list("/packet/asia3").push(form.value);
    this.accordionService.updateAsia3('-Lni19mQh3nKwDZBYR-9',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia4(form: NgForm) {
    //this.db.list("/packet/asia4").push(form.value);
    this.accordionService.updateAsia4('-Lni2-Fz_iwiXtiukoIi',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia5(form: NgForm) {
    //this.db.list("/packet/asia5").push(form.value);
    this.accordionService.updateAsia5('-Lr-jo63uJ7wL90B2AbY',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia6(form: NgForm) {
    //this.db.list("/packet/asia6").push(form.value);
    this.accordionService.updateAsia6('-Lr-lo3-3LsVx4QMhdc0',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia7(form: NgForm) {
    //this.db.list("/packet/asia7").push(form.value);
    this.accordionService.updateAsia7('-Lr-oFKB9X3u4RiZI42i',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia8(form: NgForm) {
    //this.db.list("/packet/asia8").push(form.value);
    this.accordionService.updateAsia8('-Lr-pWge7frp3g0eAxal',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia9(form: NgForm) {
    //this.db.list("/packet/asia9").push(form.value);
    this.accordionService.updateAsia9('-Lr-qaE-Bp7FVIPWFq-d',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia10(form: NgForm) {
    //this.db.list("/packet/asia10").push(form.value);
    this.accordionService.updateAsia10('-Lr-yIpAuxTdLJ3OQobd',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia11(form: NgForm) {
    //this.db.list("/packet/asia11").push(form.value);
    this.accordionService.updateAsia11('-Lr0-MNJMEUwsN2Olv5r',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia12(form: NgForm) {
    //this.db.list("/packet/asia12").push(form.value);
    this.accordionService.updateAsia12('-Lr07Jm4P9AFnsB7y04B',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia13(form: NgForm) {
    //this.db.list("/packet/asia13").push(form.value);
    this.accordionService.updateAsia13('-Lr0C5qTwB8Zkoefl2yb',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia14(form: NgForm) {
    //this.db.list("/packet/asia14").push(form.value);
    this.accordionService.updateAsia14('-Lr0ClCPXPmKzKSsX_B3',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia15(form: NgForm) {
    //this.db.list("/packet/asia15").push(form.value);
    this.accordionService.updateAsia15('-Lr0KcXYuNugVfMC8qx7',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia16(form: NgForm) {
    //this.db.list("/packet/asia16").push(form.value);
    this.accordionService.updateAsia16('-Lr0M63YT8xCOxPvaZ6d',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia17(form: NgForm) {
    //this.db.list("/packet/asia17").push(form.value);
    this.accordionService.updateAsia17('-Lr0Mui3oBRxG-5nmLtU',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia18(form: NgForm) {
    //this.db.list("/packet/asia18").push(form.value);
    this.accordionService.updateAsia18('-Lr0O1MhN0CsPgoAZmH-',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia19(form: NgForm) {
    //this.db.list("/packet/asia19").push(form.value);
    this.accordionService.updateAsia19('-Lr0PJbwrs7s3KOgvwt2',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia20(form: NgForm) {
    //this.db.list("/packet/asia20").push(form.value);
    this.accordionService.updateAsia20('-Lr0Q-xH0_ECu_V9xTmS',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia21(form: NgForm) {
    //this.db.list("/packet/asia21").push(form.value);
    this.accordionService.updateAsia21('-LrlK64l_hIoO4zYQL8K',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia22(form: NgForm) {
    //this.db.list("/packet/asia22").push(form.value);
    this.accordionService.updateAsia22('-LrlKXMQ8kbK7xMBqsIO',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia23(form: NgForm) {
    //this.db.list("/packet/asia23").push(form.value);
    this.accordionService.updateAsia23('-LrlKsLBiEA_M3YiRsEh',form.value);
    this.modalService.dismissAll();
  }

  onSubmitAsia24(form: NgForm) {
    //this.db.list("/packet/asia24").push(form.value);
    this.accordionService.updateAsia24('-LrlMG9w6ZODqishgHOy',form.value);
    this.modalService.dismissAll();
  }

  getAsia1List() {
    this.accordionService.getAsia1List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia1 => {
      this.asia1 = asia1;
      //console.log(asia1);
    });
  }

  getAsia2List() {
    this.accordionService.getAsia2List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia2 => {
      this.asia2 = asia2;
    });
  }

  getAsia3List() {
    this.accordionService.getAsia3List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia3 => {
      this.asia3 = asia3;
    });
  }

  getAsia4List() {
    this.accordionService.getAsia4List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia4 => {
      this.asia4 = asia4;
    });
  }

  getAsia5List() {
    this.accordionService.getAsia5List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia5 => {
      this.asia5 = asia5;
    });
  }

  getAsia6List() {
    this.accordionService.getAsia6List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia6 => {
      this.asia6 = asia6;
    });
  }

  getAsia7List() {
    this.accordionService.getAsia7List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia7 => {
      this.asia7 = asia7;
    });
  }

  getAsia8List() {
    this.accordionService.getAsia8List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia8 => {
      this.asia8 = asia8;
    });
  }

  getAsia9List() {
    this.accordionService.getAsia9List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia9 => {
      this.asia9 = asia9;
    });
  }

  getAsia10List() {
    this.accordionService.getAsia10List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia10 => {
      this.asia10 = asia10;
    });
  }

  getAsia11List() {
    this.accordionService.getAsia11List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia11 => {
      this.asia11 = asia11;
    });
  }

  getAsia12List() {
    this.accordionService.getAsia12List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia12 => {
      this.asia12 = asia12;
    });
  }

  getAsia13List() {
    this.accordionService.getAsia13List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia13 => {
      this.asia13 = asia13;
    });
  }

  getAsia14List() {
    this.accordionService.getAsia14List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia14 => {
      this.asia14 = asia14;
    });
  }

  getAsia15List() {
    this.accordionService.getAsia15List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia15 => {
      this.asia15 = asia15;
    });
  }

  getAsia16List() {
    this.accordionService.getAsia16List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia16 => {
      this.asia16 = asia16;
    });
  }

  getAsia17List() {
    this.accordionService.getAsia17List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia17 => {
      this.asia17 = asia17;
    });
  }

  getAsia18List() {
    this.accordionService.getAsia18List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia18 => {
      this.asia18 = asia18;
    });
  }

  getAsia19List() {
    this.accordionService.getAsia19List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia19 => {
      this.asia19 = asia19;
    });
  }

  getAsia20List() {
    this.accordionService.getAsia20List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia20 => {
      this.asia20 = asia20;
    });
  }

  getAsia21List() {
    this.accordionService.getAsia21List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia21 => {
      this.asia21 = asia21;
    });
  }

  getAsia22List() {
    this.accordionService.getAsia22List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia22 => {
      this.asia22 = asia22;
    });
  }

  getAsia23List() {
    this.accordionService.getAsia23List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia23 => {
      this.asia23 = asia23;
    });
  }

  getAsia24List() {
    this.accordionService.getAsia24List().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(asia24 => {
      this.asia24 = asia24;
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



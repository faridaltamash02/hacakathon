import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Hackathon } from '../model/hackathonModel';

@Component({
  selector: 'app-edit-hacakathon',
  templateUrl: './edit-hacakathon.component.html',
  styleUrls: ['./edit-hacakathon.component.css']
})
export class EditHacakathonComponent implements OnInit {
  editForm!: FormGroup;
  hackathonData!: Hackathon[];
  @Input() formObj: Hackathon;
  @Output() updatedEntry: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { 
    console.log(this.formObj);
  }
  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.editForm = this.fb.group({
     post_title: ['', Validators.required],
     tags: ['', Validators.required],
     post_desc: ['', Validators.required]
   });
   
   this.editForm.patchValue({
     post_title: this.formObj.post_title,
     tags: this.formObj.tags,
     post_desc: this.formObj.post_desc
   })
 }

 editHackathon(){
  console.log(this.editForm.value);
  this.formObj.post_title = this.editForm.value.post_title;
  this.formObj.post_desc = this.editForm.value.post_desc;
  this.formObj.tags = this.editForm.value.tags;
  this.updatedEntry.emit( this.formObj);
  this.closeModal();
 }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}

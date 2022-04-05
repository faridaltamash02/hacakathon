import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Hackathon } from '../model/hackathonModel';

@Component({
  selector: 'app-add-hackathon',
  templateUrl: './add-hackathon.component.html',
  styleUrls: ['./add-hackathon.component.css']
})
export class AddHackathonComponent implements OnInit {
  hackathonForm!: FormGroup;
  hackathonData!: Hackathon[];
  @Output() updatedEntry: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { 
  }
  
  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
     this.hackathonForm = this.fb.group({
      post_title: ['', Validators.required],
      tags: ['', Validators.required],
      post_desc: ['', Validators.required]
    })
  }

  addNewHackathon(){
    let reqObj = <Hackathon>{};
    reqObj.vote_count = 0;
    reqObj.voted_user = [];
    reqObj = {...reqObj, ...this.hackathonForm.value};
    console.log(reqObj);
    this.updatedEntry.emit(reqObj);
    this.closeModal();
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}

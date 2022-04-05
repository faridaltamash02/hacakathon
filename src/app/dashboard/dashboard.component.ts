import {
  Component,
  ElementRef,
  OnInit
} from '@angular/core';
import {
  HttpServicesService
} from '../common/http-services.service';
import {
  Hackathon
} from '../model/hackathonModel';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';
import {
  VotedUserVo
} from '../model/votedUserVo';
import {
  AddHackathonComponent
} from '../add-hackathon/add-hackathon.component';
import {
  EditHacakathonComponent
} from '../edit-hacakathon/edit-hacakathon.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hackathonData!: Hackathon[];
  constructor(private httpService: HttpServicesService, private modalService: NgbModal,
    private eleRef: ElementRef) {}
  user_id!: string;
  ngOnInit() {
    this.httpService.getHackathonData().subscribe((resp: any) => {
      this.hackathonData = resp;
    })
    this.user_id = '' + sessionStorage.getItem('user_id');
  }

  deleteRow(row: Hackathon) {

  }
  editRow(row: Hackathon) {
    const modalInstance = this.modalService.open(EditHacakathonComponent);
    modalInstance.componentInstance.formObj = row;
    modalInstance.componentInstance.updatedEntry.subscribe((data: Hackathon) => {
      row = data;
    })
  }

  addHacakton() {
    const modalInstance = this.modalService.open(AddHackathonComponent);
    modalInstance.componentInstance.updatedEntry.subscribe((data: Hackathon) => {
      this.hackathonData.push(data);
    })
  }

  updateVote(h_data: Hackathon, isUpVoted: boolean) {
    if (isUpVoted) {
      let votedUsers = h_data['voted_user'].map((row: VotedUserVo) => {
        return row.user_id;
      })
      if (votedUsers.indexOf(this.user_id) <= -1) {
        let voted_User = {
          'user_id': '' + this.user_id
        };
        h_data['voted_user'].push(voted_User);
        h_data.vote_count = ++h_data.vote_count;
      } else {
        let updatedVotedUser: VotedUserVo[];
        let votedUsers: VotedUserVo[] = h_data.voted_user;
        updatedVotedUser = votedUsers.filter((row: any) => {
          return row.user_id != this.user_id;
        })
        h_data.voted_user = updatedVotedUser;
        h_data.vote_count = --h_data.vote_count;
      }
    }
  }


}

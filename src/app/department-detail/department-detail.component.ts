import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId ;
  constructor(private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentId = id;

    });
  }
  goNext(){
    let nextId = this.departmentId  + 1;
    this.router.navigate(['/departments', nextId]);
  }
  goPrevious(){
    let previousId = this.departmentId  - 1;
    this.router.navigate(['/departments', previousId]);
  }
  goToDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId}], {relativeTo: this.route});
        // this.router.navigate(['../', {id: selectedId}],{relativeTo: this.route});  Relative Navigation
  }
  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }
  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}

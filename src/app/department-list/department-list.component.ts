import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  departments = [
    {'id': 1, 'name': 'Angular'},
    {'id': 2, 'name': 'Node'},
    {'id': 3, 'name': 'MongoDB'},
    {'id': 4, 'name': 'Ruby'},
    {'id': 5, 'name': 'Bootstrap'}
  ]
  constructor(private router: Router, private route: ActivatedRoute ) { }

  onSelect(dep){
    this.router.navigate(['/departments', dep.id]);
    // this.router.navigate([dep.id], { relativeTo: this.route}); Relative Navigation
  }
  isSelected(dep){
    return dep.id === this.selectedId;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

}

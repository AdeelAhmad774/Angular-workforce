import { Component } from '@angular/core';
import { EmployeeManagementService } from '../services/employee-management.service';
import { SharedToken } from '../Shared/Service/shared-token';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css'],
  providers: [EmployeeManagementService]
})
export class EmployeeManagementComponent {
  constructor(private employeeManagementService: EmployeeManagementService, private sharedToken:SharedToken  ) { }
  
  getEmployeeData() {
   
    this.employeeManagementService.getEmployeeData().subscribe({
      next: (response: any) => {
        console.log('Full response:', response);
      },
      error: (err: any) => {
        console.error('Error fetching employee data:', err);
      }
    });
  }
  ngOnInit() {
    this.getEmployeeData();
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','symbol1','symbol2'];
  dataSource = [
    { position: 1, name: 'Hydrogen',weight: 1.0079, symbol: 'H',symbol1:'H1',symbol2:'H2' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',symbol1:'He1',symbol2:'He2' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',symbol1:'Li1',symbol2:'Li2' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',symbol1:'Be1',symbol2:'Be2' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' ,symbol1:'B1',symbol2:'B2' },    
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',symbol1:'Be1',symbol2:'Be2' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' ,symbol1:'B1',symbol2:'B2' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' ,symbol1:'C1',symbol2:'C2' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' ,symbol1:'N1',symbol2:'N2' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' ,symbol1:'O1',symbol2:'O2' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' ,symbol1:'F1',symbol2:'F2' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' ,symbol1:'Ne1',symbol2:'Ne2' },
    
     

    
  ];
}

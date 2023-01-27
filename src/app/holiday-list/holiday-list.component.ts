import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
export interface PeriodicElement {
  name: string;
  matricule: number;
  firstName: string;
  department: string;
  leaveStartDate: string;
  leaveEndDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {matricule: 1, name: 'RANDRIA', firstName: 'Ruffin', department: 'PROD', leaveStartDate: '27/01/2023', leaveEndDate: '28/01/2023'},
  {matricule: 2, name: 'RAKOTOARISOA', firstName: 'Bao', department: 'PROD', leaveStartDate: '27/01/2023', leaveEndDate: '28/01/2023'},
  {matricule: 3, name: 'RAFARA', firstName: 'Vola', department: 'ADMIN', leaveStartDate: '27/01/2023', leaveEndDate: '28/01/2023'},
  {matricule: 4, name: 'ANDRIANALISON', firstName: 'Fetra', department: 'TECH', leaveStartDate: '27/01/2023', leaveEndDate: '28/01/2023'},
  {matricule: 5, name: 'RATEFY', firstName: 'Fanja', department: 'TECH', leaveStartDate: '27/01/2023', leaveEndDate: '28/01/2023'},
];

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent {
  displayedColumns: string[] = ['matricule', 'name', 'firstName', 'department', 'leaveStartDate', 'leaveEndDate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

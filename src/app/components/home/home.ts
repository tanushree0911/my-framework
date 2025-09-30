import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Store, STORES } from '../../models/model';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  route = inject(Router);

  displayedColumns: string[] = ['name', 'street', 'state', 'zip', 'hours'];
  dataSource = new MatTableDataSource<Store>(STORES);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editAddress() {
    this.route.navigateByUrl('editAddress');
  }
  
}

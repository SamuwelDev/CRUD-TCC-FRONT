import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { FormDialogComponent } from 'src/app/shared/components/form-dialog/form-dialog.component';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Hotels } from './../model/hotels';
import { HotelsService } from './../services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  hotels$: Observable<Hotels[]>;
  displayedColumns = ['name', 'status', 'street', 'district', 'number', 'city',
  'state', 'country', 'rating', 'description', 'averageDaily'];

  //hotelsService: HotelsService;

  constructor(
    private hotelsService: HotelsService,
    public dialog: MatDialog) {
    // this.hotels = [];
    //this.hotelsService = new HotelsService();
    this.hotels$ = this.hotelsService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar informações!');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  addHotel(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit(): void {}
}



import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HotelsService } from 'src/app/hotels/services/hotels.service';


@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {

  public hotelForm: UntypedFormGroup;

  constructor(
    public dialog: MatDialog,
    private fb: UntypedFormBuilder,
    private rest: HotelsService,
    public dialogRef: MatDialogRef<FormDialogComponent>

  ) { }

  ngOnInit(): void {
    this.hotelForm = this.fb.group({
      name: [,[Validators.required]],
      status: [,[Validators.required]],
      street: [,[Validators.required]],
      district: [,[Validators.required]],
      number: [,[Validators.required]],
      city: [,[Validators.required]],
      state: [,[Validators.required]],
      country: [,[Validators.required]],
      rating: [,[Validators.required]],
      description: ['',[Validators.required]],
      averageDaily: [, [Validators.required]]

    });
  }

  createHotel(){
      this.rest.postHotels(this.hotelForm.value).subscribe(result=> {});
      this.dialogRef.close();
      this.hotelForm.reset();
  }

  cancel(): void {
    this.dialogRef.close();
    this.hotelForm.reset();
  }

}

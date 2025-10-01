import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { STATES, STORES } from '../../models/model';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-edit-store-address',
  templateUrl: './edit-store-address.component.html',
  styleUrl: './edit-store-address.component.css',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class EditStoreAddressComponent {
  activatedRoute = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
  });

  hasUnitNumber = false;

  states = STATES
  stores = STORES;
  store: any;
  saved: boolean = false;

  constructor() {
    const id = this.activatedRoute.params.subscribe({
      next: (r: any) => {
        this.store = this.stores.find((item: any) => item.id === Number(r.id));
        this.addressForm.patchValue({
          address: this.store.street,
          city: this.store.name,
          state: this.store.state,
          postalCode: this.store.zip
        })
      }
    })
  }

  onSubmit(): void {
    if(this.addressForm.valid) {
      this.saved = true;
    } else {
      this.saved = false;
    }
  }

  closeMessage(): void {
    this.saved = false;
  }
}

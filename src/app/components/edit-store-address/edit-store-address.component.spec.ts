import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStoreAddressComponent } from './edit-store-address.component';

describe('EditStoreAddressComponent', () => {
  let component: EditStoreAddressComponent;
  let fixture: ComponentFixture<EditStoreAddressComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStoreAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});


export interface Store {
    id: number,
    name: string,
    hours: string,
    street: string,
    state: string,
    zip: string
}

export const STORES: Store[] = [
    {id: 1, name: 'Alexandria', hours: '10am-9pm', street: '3101 Richmond Hwy', state: 'VA', zip: '22305'},
    {id: 2, name: 'Alexandria Hybla Valley', hours: '9am-9pm', street: '3101 Richmond Hwy', state: 'VA', zip: '22306'},
    {id: 3, name: 'Morgantown', hours: '8am-9pm', street: '5001 University Towne Center Dr', state: 'WV', zip: '26501'},
    {id: 4, name: 'Lynchburg', hours: '10am-9pm', street: '4028 Wards Rd', state: 'VA', zip: '24502'},
    {id: 5, name: 'Alexandria', hours: '10am-9pm', street: '3101 Richmond Hwy', state: 'VA', zip: '22305'},
    {id: 6, name: 'Alexandria', hours: '10am-9pm', street: '3101 Richmond Hwy', state: 'VA', zip: '22305'},
    {id: 7, name: 'Alexandria', hours: '10am-9pm', street: '3101 Richmond Hwy', state: 'VA', zip: '22305'},
    {id: 8, name: 'Alexandria', hours: '10am-9pm', street: '3101 Richmond Hwy', state: 'VA', zip: '22305'},
    {id: 9, name: 'Alexandria', hours: '10am-9pm', street: '3101 Richmond Hwy', state: 'VA', zip: '22305'},
    {id: 10, name: 'Alexandria', hours: '10am-9pm', street: '3101 Richmond Hwy', state: 'VA', zip: '22305'}
];
import './style.css';

import { of, map, Observable } from 'rxjs';

const observable$ = new Observable((susbscriber) => {
  susbscriber.next(1);
  susbscriber.next(2);

  susbscriber.next(20);
  susbscriber.complete();
  susbscriber.next(30);
  susbscriber.next(40);
});

const observador = {
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log('ya se completaron los datos');
  },
  error: (error) => {
    console.log('error emitido');
    console.error(error);
  },
};

observable$.subscribe(observador);

import { Injectable } from '@angular/core';
import { Sitter } from './entities/sitter';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {
  // array fungerer som arraylist
  sitters: Sitter[] = [
    {username: 'azat', password: 'secret', name: 'Azat Baran', gender: 'male',
    birthDate: new Date(1995, 2, 16), noCriminalRecord: true, noChildRecord: true,
    hourlyWage: 1337, address: 'some', zipCode: "2600", city: 'Glostrup', link: "https://vignette.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest?cb=20100424114324"},
    {username: 'chrk', password: 'secret', name: 'Christian Kirschberg', gender: 'male',
    birthDate: new Date(1979, 0, 1), noCriminalRecord: true, noChildRecord: true,
    hourlyWage: 150, address: 'some', zipCode: "3400", city: 'Hillerød', link: "data:image/jpeg;base64,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"},
    {username: 'salik', password: 'secret3', name: 'Salik Baijan', gender: 'male',
    birthDate: new Date(1995, 1, 1), noCriminalRecord: true, noChildRecord: true,
    hourlyWage: 100, address: 'some', zipCode: "2400", city: 'København NV', link: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/30/2012/09/00000259a-Borat1.jpg"}
  ];
  constructor() { }
}

import { Injectable } from '@angular/core';

export interface LocationCallback{ ( p : Position); }

@Injectable({
    providedIn: 'root'
  })
export class LocationService {
    getLocation(callback: LocationCallback): Geolocation {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((d) => {
                callback(d);
            });
        }
        return null;
        ;
    }
}

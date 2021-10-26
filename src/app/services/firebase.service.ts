import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

// import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
    data = {
        banner_config_status: true,
        type: 'MAINTAINENCE',
        environment: 'live',
        is_updating: false,
        time_date: '27/10/2021',
        time_from: '00h00',
        time_to: '00h00',
    }
    updateData = {
        banner_config_status: false,
        type: 'MAINTAINENCE',
        environment: 'live',
        is_updating: false,
        time_date: '27/10/2021',
        time_from: '00h00',
        time_to: '00h00',
    }
    constructor(private http: HttpClient) { }

    getAll() {
        return of(this.data);
    }

    // getByType(type) {
    //   return this.http.get<any[]>(`${environment.apiUrl}/user/get-lawer/${type}`);
    // }

    // getById(id) {
    //   return this.http.get<any[]>(`${environment.apiUrl}/user/${id}`);
    // }

    // register(user) {
    //     return this.http.post(`${environment.apiUrl}/user/create`, user);
    // }

    // delete(id) {
    //     return this.http.delete(`${environment.apiUrl}/user/${id}`);
    // }
    // getAllRole() {
    //     return this.http.get<any>(`${environment.apiUrl}/role/get-all`);
    // }
}

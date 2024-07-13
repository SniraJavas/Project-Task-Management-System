import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.example.com/data'; 

  constructor(private http: HttpClient) { }

  // Create
  addItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  // Read
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Update
  updateItem(itemId: number, updatedItem: any): Observable<any> {
    const url = `${this.apiUrl}/${itemId}`;
    return this.http.put<any>(url, updatedItem);
  }

  // Delete
  deleteItem(itemId: number): Observable<any> {
    const url = `${this.apiUrl}/${itemId}`;
    return this.http.delete<any>(url);
  }

  // Error handling (optional)
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return throwError(error); // Use catchError in component to handle errors
  }
}
function throwError(error: any): Observable<any> {
  throw new Error('Function not implemented.');
}


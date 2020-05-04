import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OrderPro} from '../../ModelProduct/OrderPro';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServiceOrderCartService {

  // /*SpringBootAPI*/
  private PATH_ORDER = 'https://apispringboot-trungtx.herokuapp.com/orderPro';
  private PATH_ORDER_USER = 'https://apispringboot-trungtx.herokuapp.com/orderByUser';

  constructor(private http: HttpClient) {
  }

  /*FIND ALL ORDER BY USER*/
  getAllOrderUser(id): Observable<OrderPro[]> {
    const url = `${this.PATH_ORDER_USER}/${id}`;
    return this.http.get<OrderPro[]>(url).pipe(
      tap(prod => ''),
      catchError(err => of([]))
    );
  }

  /*ORDER PRODUCT*/
  getAllOrderProduct(): Observable<OrderPro[]> {
    return this.http.get<OrderPro[]>(this.PATH_ORDER).pipe(
      tap(prod => ''),
      catchError(err => of([]))
    );
  }

  getOrderPrByID(id: number): Observable<OrderPro> {
    const url = `${this.PATH_ORDER}/${id}`;
    return this.http.get<OrderPro>(url).pipe(
      tap(Prod => ''),
      catchError(err => of(new OrderPro()))
    );
  }

  updateOrderProduct(prod: OrderPro): Observable<any> {
    return this.http.put(`${this.PATH_ORDER}/${prod.orderId}`, prod, httpOptions).pipe(
      tap(updateOrderPro => console.log(`Update OrderPro = ${JSON.stringify(updateOrderPro)}`)),
      catchError(err => of(new OrderPro()))
    );
  }

  insertOrderProduct(product: OrderPro): Observable<OrderPro> {
    return this.http.post<OrderPro>(this.PATH_ORDER, product, httpOptions).pipe(
      tap((insertPro: OrderPro) => ''),
      catchError(err => of(new OrderPro()))
    );
  }

  deleteOrderProduct(idOrder: number): Observable<OrderPro> {
    const url = `${this.PATH_ORDER}/${idOrder}`;
    return this.http.delete<OrderPro>(url, httpOptions).pipe(
      tap(_ => console.log(`Delete Order product with id = ${idOrder}`)),
      catchError(err => of(null))
    );
  }


}

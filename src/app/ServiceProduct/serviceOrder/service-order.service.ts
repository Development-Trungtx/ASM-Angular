import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CartProducs} from '../../ModelProduct/CartProducs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServiceOrderService {

  // /*SpringBootAPI*/
  private PATH_CART = 'https://apispringboot-trungtx.herokuapp.com/cartProduct';
  private PATH_FindCart = 'https://apispringboot-trungtx.herokuapp.com/cartOrderPro';

  constructor(private http: HttpClient) {
  }

  /*CART PRODUCT*/
  getAllCartByOrder(id): Observable<CartProducs[]> {
    const url = `${this.PATH_FindCart}/${id}`;
    return this.http.get<CartProducs[]>(url).pipe(
      tap(Prod => ''),
      catchError(err => of([]))
    );
  }


  getAllCartProduct(): Observable<CartProducs[]> {
    return this.http.get<CartProducs[]>(this.PATH_CART).pipe(
      tap(prod => ''),
      catchError(err => of([]))
    );
  }

  getCartPrByID(id: number): Observable<CartProducs> {
    const url = `${this.PATH_CART}/${id}`;
    return this.http.get<CartProducs>(url).pipe(
      tap(Prod => ''),
      catchError(err => of(new CartProducs()))
    );
  }

  updateCartProduct(prod: CartProducs): Observable<any> {
    return this.http.put(`${this.PATH_CART}/${prod.cardProductId}`, prod, httpOptions).pipe(
      tap(updateCartProducs => console.log(`Update CartProducs = ${JSON.stringify(updateCartProducs)}`)),
      catchError(err => of(new CartProducs()))
    );
  }

  insertCartProducs(cartProducs, orderName): Observable<CartProducs> {
    return this.http.post<CartProducs>(`${this.PATH_CART}/${orderName}`, cartProducs, httpOptions).pipe(
      tap((insertPro: CartProducs) => ''),
      catchError(err => of(new CartProducs()))
    );
  }

  deleteCartProducs(idCart: number): Observable<CartProducs> {
    const url = `${this.PATH_CART}/${idCart}`;
    return this.http.delete<CartProducs>(url, httpOptions).pipe(
      tap(_ => console.log(`Delete Order product with id = ${idCart}`)),
      catchError(err => of(null))
    );
  }
}

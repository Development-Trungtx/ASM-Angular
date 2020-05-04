import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../ModelProduct/Product';
import {TypePro} from '../ModelProduct/TypePro';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // /*SpringBootAPI*/
  private PATH_URL = 'https://apispringboot-trungtx.herokuapp.com/product';
  private PATH_TYPEPRO = 'https://apispringboot-trungtx.herokuapp.com/typeProduct';

  constructor(private http: HttpClient) {
  }

  /*Test-AddToCart*/


  /*TypeProduct*/
  getAllTypeProduct(): Observable<TypePro[]> {
    return this.http.get<TypePro[]>(this.PATH_TYPEPRO).pipe(
      tap(prod => ''),
      catchError(err => of([]))
    );
  }

  getTypePrByID(id: number): Observable<TypePro> {
    const url = `${this.PATH_TYPEPRO}/${id}`;
    return this.http.get<TypePro>(url).pipe(
      tap(Prod => ''),
      catchError(err => of(new TypePro()))
    );
  }

  updateTypeProduct(prod: TypePro): Observable<any> {
    return this.http.put(`${this.PATH_TYPEPRO}/${prod.typeId}`, prod, httpOptions).pipe(
      tap(_ => ''),
      catchError(err => of(new TypePro()))
    );
  }

  insertTypeProduct(product: TypePro): Observable<TypePro> {
    return this.http.post<TypePro>(this.PATH_TYPEPRO, product, httpOptions).pipe(
      tap((insertPro: TypePro) => ''),
      catchError(err => of(new TypePro()))
    );
  }

  deleteTypeProduct(typeProID: number): Observable<TypePro> {
    const url = `${this.PATH_TYPEPRO}/${typeProID}`;
    return this.http.delete<TypePro>(url, httpOptions).pipe(
      tap(_ => console.log(`Delete type product with id = ${typeProID}`)),
      catchError(err => of(null))
    );
  }

  /*Product*/
  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.PATH_URL).pipe(
      tap(prod => ''),
      catchError(err => of([]))
    );
  }

  getProductByID(id: number): Observable<Product> {
    const url = `${this.PATH_URL}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(Prod => ''),
      catchError(err => of(new Product()))
    );
  }

  updateProduct(prod: Product): Observable<any> {
    return this.http.put(`${this.PATH_URL}/${prod.productId}`, prod, httpOptions).pipe(
      tap(updateProduct => ''),
      catchError(err => of(new Product()))
    );
  }

  insertProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.PATH_URL, product, httpOptions).pipe(
      tap((insertPro: Product) => ''),
      catchError(err => of(new Product()))
    );
  }

  deleteProduct(productID: number): Observable<Product> {
    const url = `${this.PATH_URL}/${productID}`;
    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => console.log(`Delete Product with id = ${productID}`)),
      catchError(err => of(null))
    );
  }
}

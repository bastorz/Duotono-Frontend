
import { OrderPartial } from '@/lib/type';
import { formatCurrency } from '@/lib/utils';
import * as React from 'react';

export function OrderContents({ order }: { order: OrderPartial | undefined }) {
  return (
    <div className="order-contents">
      <h3>Order contents:</h3>
      { order ? <table>
        <tbody>
          {order.lines.map((l) => (
            <tr key={l.id}>
              <td>{l.productVariant.name}</td>
              <td>{l.quantity}</td>
              <td>{formatCurrency(l.linePriceWithTax, order.currencyCode)}</td>
            </tr>
          ))}
          <tr className="totals">
            <td>Total</td>
            <td>{order.totalQuantity}</td>
            <td>{formatCurrency(order.totalWithTax, order.currencyCode)}</td>
          </tr>
        </tbody>
      </table> : <div>Order is empty</div>}
    </div>
  );
}

'use client';

import { SingleOrder } from "@/interfaces";
import { useAppSelector } from "@/store";
import Link from "next/link";

const OrdersTable = () => {
  const orders: SingleOrder[] = useAppSelector(state => state.orders.orders);

  return (
    <div className="mb-10">
      <table className="min-w-full">
        <thead className="bg-gray-200 border-b">
          <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              ID
            </th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order) => {
              return (
                <tr key={order.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 ">
                    <Link href={`/orders/${order.id}`} className="hover:underline">
                      View order
                    </Link>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;

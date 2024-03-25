'use client';

import { SingleOrder } from "@/interfaces";
import { useAppSelector } from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";

const OrdersTable = () => {
  const [loaded, setLoaded] = useState(false);

  const orders: SingleOrder[] = useAppSelector(state => state.orders.orders);

  useEffect(() => {
    setLoaded(true);
  },[]);

  if(!loaded) return <p>Loading...</p>

  return (
    <div className="mb-10">
      <table  className="min-w-full">
        <thead className="bg-gray-200 border-b">
          <tr>
            <th colSpan={3} scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              ID
            </th>
            <th colSpan={1} scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order) => {
              return (
                <tr key={order.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td colSpan={3} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td colSpan={1} className="text-sm text-gray-900 font-light px-6 ">
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

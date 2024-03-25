import Link from 'next/link';
import { IoCardOutline } from 'react-icons/io5';
import OrdersTable from './ui/OrdersTable';

export default function Orders() {
  return (
    <>
      <h2>Orders</h2>
      <OrdersTable/>
    </>
  );
}
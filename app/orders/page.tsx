import Link from 'next/link';
import { IoCardOutline } from 'react-icons/io5';
import OrdersTable from './ui/OrdersTable';
import { Title } from '@/components';

export default function Orders() {
  return (
    <>
      <Title text='All Orders'/>
      <OrdersTable/>
    </>
  );
}
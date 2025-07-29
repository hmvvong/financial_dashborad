import { CustomerTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import CustomersTable from "@/app/ui/customers/table";

export const metadata = {
  title: 'Customers',
}

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
      </div>
      <Suspense key={query} fallback={<CustomerTableSkeleton />}>
        <CustomersTable query={query} />
      </Suspense>
    </div>
  );
}
import { fetchFormattedCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";

export const metadata = {
  title: 'Customers',
}

export default async function Page() {
  const customers = await fetchFormattedCustomers();


    return (
        <>
        <CustomersTable customers={customers} />
        </>
    )
}
import { Suspense } from "react";
import { CustomersTable } from "../../components/customersTable";
import { fetchFilteredCustomers } from "@/lib/data";
import { InvoicesTableSkeleton } from "@/components/ui/skeletons";
import Search from "@/components/ui/search";
import { lusitana } from "@/components/ui/fonts";

type Props = {
  searchParams?: {
    query?: string;
    page?: string;
  };
};

export const CustomersPage = async ({ searchParams }: Props) => {
  const query = searchParams?.query || "";

  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>Customers</h1>
      </div>
      <Search placeholder="Search customers..." />
      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
};

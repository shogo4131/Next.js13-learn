import { Suspense } from "react";
import CustomersTable from "../../components/customersTable/CustomersTable";
import { fetchFilteredCustomers } from "@/lib/data";
import { InvoicesTableSkeleton } from "@/components/ui/skeletons";

type Props = {
  searchParams?: {
    query?: string;
    page?: string;
  };
};

export const CustomersPage = async ({ searchParams }: Props) => {
  const query = searchParams?.query || "";
  const currentPage = searchParams?.page || 1;

  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
};

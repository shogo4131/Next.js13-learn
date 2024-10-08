import { CreateInvoiceForm } from "@/features/invoices/components";
import { Breadcrumb } from "@/components/ui";
import { fetchCustomers } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CreateInvoice | Acme Dashboard"
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumb
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true
          }
        ]}
      />
      <CreateInvoiceForm customers={customers} />
    </main>
  );
}

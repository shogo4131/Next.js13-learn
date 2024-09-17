import { Metadata } from "next";
import { CustomersPage } from "@/features/customers";

export const metadata: Metadata = {
  title: "Customers | Acme Dashboard"
};

export default function Page({
  searchParams
}: {
  searchParams?: {
    query?: string;
  };
}) {
  return <CustomersPage searchParams={searchParams} />;
}

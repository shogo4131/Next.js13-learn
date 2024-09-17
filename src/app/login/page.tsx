import { LoginPage } from "@/features/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Acme Dashboard"
};

export default function Page() {
  return <LoginPage />;
}

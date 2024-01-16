import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "Admin",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    absolute: "Blog",
  },
};

export default function Blog({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

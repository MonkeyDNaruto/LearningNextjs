import { Card } from "@/src/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      Notifications
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}

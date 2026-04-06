import { ClientComponentOne } from "@/src/components/client-component-one";
import { ServerComponentOne } from "@/src/components/server-component-one";

export default function InterLeavingPage() {
  return (
    <>
      <h1>InterLeaving Page</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}

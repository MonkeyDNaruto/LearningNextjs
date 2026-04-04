import { cookies } from "next/headers";

export default async function AboutPage() {
  console.log("About Server component");
  const cookiesStore = await cookies();
  const theme = cookiesStore.get("theme");
  console.log(theme);
  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}

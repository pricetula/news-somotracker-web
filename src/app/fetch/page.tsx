import Dashboard from "@/components/page/Dashboard/Dashboard";
import { url } from "../util/route";

export default async function Home() {
  const { news } = await fetch(url("/api/news?page=1")).then((res) => res.json());
  return <Dashboard />;
}

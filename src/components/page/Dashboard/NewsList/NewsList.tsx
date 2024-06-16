import { url } from "@/app/util/route";
import { NewsItem } from "../NewsItem";

export async function NewsList() {
    const { news } = await fetch(url("/api/news?page=1")).then((res) => res.json());
    return (
        <ul>
            {news.map((item: any) => (
                <li key={item._id}>
                    <NewsItem item={item} />
                </li>
            ))}
        </ul>
    );
}
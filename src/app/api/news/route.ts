import { getNews } from "@/app/data/getNews"

export async function GET(req: Request, res: Response) {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page')
    const news = await getNews(Number(page));
    return new Response(JSON.stringify({ news }), { headers: { 'Content-Type': 'application/json' } });
}
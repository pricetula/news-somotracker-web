export function NewsItem({ item }: { item: any }) {
    return (
        <div>
            <h2>{item.headline.main}</h2>
            <p>{item.abstract}</p>
            <img src={process.env.NYT_URI + item.multimedia[0].url} alt={item.multimedia[0].caption} />
        </div>
    );
}
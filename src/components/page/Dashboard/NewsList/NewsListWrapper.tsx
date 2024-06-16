import { Suspense } from "react";
import { NewsList } from "./NewsList";
import { NewsListLoading } from "./NewsListLoading";

export function NewsListWrapper() {
    return (
        <Suspense fallback={<NewsListLoading />}>
            <NewsList />
        </Suspense>
    );
}
import fs from 'fs';
import { cache } from 'react';

export interface Multimedia {
    "rank": number;
    "subtype": string;
    "caption": string;
    "credit": string;
    "type": string;
    "url": string;
    "height": number;
    "width": number;
    "subType": string;
    "crop_name": string;
    "legacy": any;
}

export interface Headline {
    "main": string;
    "kicker": string;
    "content_kicker": string;
    "print_headline": string;
    "name": string;
    "seo": string;
    "sub": any;
}

export interface Keyword {
    "name": string;
    "value": string;
    "rank": number;
    "major": string;
}

export interface Byline {
    "original": string;
    "person": Person[];
    "organization": any;
}

export interface Person {
    "firstname": string;
    "middlename": string;
    "lastname": string;
    "qualifier": string;
    "title": string;
    "role": string;
    "organization": string;
    "rank": number
}

export interface NewsData {
    "abstract": string;
    "web_url": string;
    "snippet": string;
    "lead_paragraph": string;
    "print_section": string;
    "print_page": string;
    "source": string;
    "multimedia": Multimedia[],
    "headline": Headline,
    "keywords": Keyword[],
    "pub_date": string;
    "document_type": string;
    "news_desk": string;
    "section_name": string;
    "subsection_name": string;
    "byline": Byline,
    "type_of_material": string;
    "_id": string;
    "word_count": number,
    "uri": string;
}

async function getData(): Promise<NewsData[]> {
    const jsonDataPath = 'public/nytdata.json';
    const data = await fs.promises.readFile(jsonDataPath, 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData;
}

export const getNews = cache(async (page?: number): Promise<NewsData[]> => {
    if (!page || page < 1) {
        page = 1;
    }
    const itemsPerPage = 2
    const fromIndex = (page - 1) * itemsPerPage;
    const data = await getData();
    const toBeforeIndex = Math.min(fromIndex + itemsPerPage, data?.length);
    return data.slice(fromIndex, toBeforeIndex);
})
import { PageEnum } from './PageEnum';

export class PageContent {
    id?: number;
    title: string;
    page: PageEnum;
    content?: string;
    add_Info?: string;
    imgCover_Src?: string;
}

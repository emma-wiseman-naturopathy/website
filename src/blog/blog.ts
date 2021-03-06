import { TextContent, PrismicData, ImageContent } from './../common/content';
export interface Blog extends PrismicData {
    title: string;
    category: string;
    body: TextContent[];
    thumbnail: ImageContent;
    feature_image: ImageContent;
}

import { TextContent, ImageContent } from './../common/content';
import { PrismicData } from "../common/content";

export interface Service extends PrismicData {
    title: string;
    order: number;
    description: TextContent[];
    image: ImageContent;
}

export interface ServiceLanding extends PrismicData {
    title: TextContent[];
    header_image: ImageContent;
    pricing: Array<{
        description: TextContent[],
        price: number,
        disclaimer: string
    }>;
    quotes: ServiceLandingQuote[];
}

export interface ServiceLandingQuote {
    image: ImageContent;
    text: string;
    by: string;
}
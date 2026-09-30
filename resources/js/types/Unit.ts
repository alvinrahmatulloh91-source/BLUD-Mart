export interface UnitData {
    id: number;
    name: string;
    slug: string;
    category: string;
    description: string | null;
    logo: string | null;
    website_url: string | null;
    sort_order?: number;
}

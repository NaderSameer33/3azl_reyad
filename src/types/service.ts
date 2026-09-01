export type ServiceCategoryId =
  | "foam-insulation"
  | "waterproofing-thermal"
  | "leak-detection"
  | "tank-insulation"
  | "pools-bathrooms";

export interface TechnicalSpecs {
  material: string;
  thickness: string;
  density: string;
  warrantyYears: number;
  approvalBody: string;
  standardsCode: string;
  energySavingPercentage?: number;
}

export interface CategoryArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  keywords: string[];
  content: string; // Rich Markdown/HTML technical content
}

export interface CategoryProject {
  id: string;
  slug: string;
  title: string;
  neighborhood: string;
  city: string;
  area: string;
  duration: string;
  warranty: string;
  summary: string;
  challenge: string;
  solution: string;
  videoEmbedUrl?: string;
  beforeAfter: {
    beforeTitle: string;
    beforeDesc: string;
    afterTitle: string;
    afterDesc: string;
  };
  metrics: {
    label: string;
    before: string;
    after: string;
  }[];
}

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string[];
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  iconName: string;
  badge: string;
  seoMeta: SeoMeta;
  technicalSpecs: TechnicalSpecs;
  articles: CategoryArticle[];
  projects: CategoryProject[];
  basePricePerMeter?: number;
  flatPrice?: number;
}

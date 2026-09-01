/**
 * project.ts — Comprehensive TypeScript interfaces for Portfolio & Case Studies
 * شركة درع الخليج لكشف التسربات وعزل الأسطح بالرياض
 */

export type ProjectCategoryId =
  | "foam-insulation"
  | "waterproofing-thermal"
  | "leak-detection"
  | "tank-insulation"
  | "pools-bathrooms";

export interface ProjectCategory {
  id: ProjectCategoryId;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  badgeColor: string;
  icon: string;
}

export interface GalleryItem {
  url: string;
  caption: string;
  stage: "before" | "during" | "after";
}

export interface BeforeAfterPair {
  beforeImage: string;
  afterImage: string;
  beforeTitle: string;
  afterTitle: string;
  description: string;
}

export interface TechnicalStep {
  stepNumber: number;
  title: string;
  description: string;
  equipmentOrMaterial?: string;
}

export interface TechnicalSpecs {
  material: string;
  density: string;
  thickness: string;
  uvProtection: string;
  thermalConductivity: string;
  standards: string;
  testingMethod: string;
}

export interface ProjectResult {
  metric: string;
  label: string;
  description: string;
}

export interface ClientFeedback {
  quote: string;
  clientName: string;
  location: string;
  rating: number;
}

export interface ArticleSection {
  heading: string;
  body: string;
  keyTakeaway?: string;
}

export interface ProjectFaq {
  question: string;
  answer: string;
}

export interface TechnicalArticle {
  title: string;
  readTime: string;
  introduction: string;
  sections: ArticleSection[];
  conclusion: string;
  faqs: ProjectFaq[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  location: string;
  district: string;
  city: "الرياض";
  duration: string;
  area: string;
  warranty: string;
  clientType: string;
  completionDate: string;
  featuredImage: string;
  gallery: GalleryItem[];
  beforeAfter: BeforeAfterPair;
  videoUrl?: string;
  videoPlatform?: "youtube" | "tiktok" | "snapchat" | "direct";
  videoThumbnail?: string;
  videoTitle?: string;
  seoKeywords: string[];
  challenge: {
    title: string;
    description: string;
    symptoms: string[];
    technicalDiagnosis: string;
  };
  solution: {
    title: string;
    description: string;
    steps: TechnicalStep[];
    engineeringHighlights: string[];
  };
  technicalSpecs: TechnicalSpecs;
  results: ProjectResult[];
  clientFeedback: ClientFeedback;
  articleContent: TechnicalArticle;
}

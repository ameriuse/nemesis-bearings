export interface Product {
  id: string;
  sku: string;
  partNumber: string;
  alternatePartNumbers: string[];
  name: string;
  slug: string;
  description: string;
  shortDescription: string;

  // Classification
  category: ProductCategory;
  subcategory: string;
  type: BearingType;
  series: string;

  // Brand
  sourceBrand: string;
  comparableBrands: string[];

  // Dimensions
  boreID: number; // mm
  outerDiameter: number; // mm
  width: number; // mm
  dimensionsTable?: DimensionRow[];

  // Performance
  dynamicLoadRating: number; // kN
  staticLoadRating: number; // kN
  maxSpeed: number; // RPM
  temperatureRange: { min: number; max: number };

  // Materials
  cageMaterial: string;
  ringMaterial: string;
  sealType: SealType;
  clearance: ClearanceType;
  precisionRating: string; // ABEC / P-level
  lubricationType: string;
  relubricationAllowed: boolean;

  // Mounting
  housingCompatibility: string[];
  lockingStyle: string;
  mountingStyle: string;

  // Commercial
  availability: AvailabilityStatus;
  leadTime: string;
  moq: number;
  unitPrice: number | null; // null = quote-only
  quoteOnly: boolean;
  currency: string;

  // Assets
  images: ProductImage[];
  documents: ProductDocument[];
  cadAssets: CadAsset[];

  // Content
  applications: string[];
  technicalNotes: string;
  warrantyNote: string;
  countryOfOrigin: string;

  // Quality
  qualityFields: QualityInfo;

  // SEO
  metaTitle: string;
  metaDescription: string;

  // Relationships
  relatedProducts: string[]; // product IDs
  alternateProducts: string[];
  compatibleAccessories: string[];
}

export type ProductCategory =
  | 'ball-bearings'
  | 'roller-bearings'
  | 'spherical-bearings'
  | 'thrust-bearings'
  | 'mounted-units'
  | 'housings'
  | 'seals-and-accessories';

export type BearingType =
  | 'deep-groove'
  | 'angular-contact'
  | 'self-aligning'
  | 'cylindrical-roller'
  | 'tapered-roller'
  | 'spherical-roller'
  | 'needle-roller'
  | 'thrust-ball'
  | 'thrust-roller'
  | 'pillow-block'
  | 'flanged'
  | 'insert'
  | 'other';

export type SealType = 'open' | 'shielded' | 'sealed' | 'contact-seal' | 'non-contact-seal';
export type ClearanceType = 'C2' | 'CN' | 'C3' | 'C4' | 'C5';
export type AvailabilityStatus = 'in-stock' | 'low-stock' | 'made-to-order' | 'discontinued' | 'quote-required';

export interface DimensionRow {
  label: string;
  value: string;
  unit: string;
}

export interface ProductImage {
  url: string;
  alt: string;
  isPrimary: boolean;
  isRepresentative: boolean; // true if generic/illustrative
}

export interface ProductDocument {
  title: string;
  url: string;
  type: 'datasheet' | 'drawing' | 'manual' | 'certificate';
  fileSize: string;
}

export interface CadAsset {
  format: 'STEP' | 'IGES' | 'DWG' | 'PDF-2D';
  url: string;
}

export interface QualityInfo {
  inspectionLevel: string;
  certifications: string[];
  traceability: boolean;
  batchTracking: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  isQuoteOnly: boolean;
}

export interface QuoteRequest {
  items: QuoteItem[];
  contact: ContactInfo;
  urgency: 'standard' | 'urgent' | 'critical';
  application: string;
  operatingConditions: string;
  preferredBrand: string;
  requiredCertification: string;
  attachments: File[];
  notes: string;
}

export interface QuoteItem {
  productId?: string;
  partNumber: string;
  quantity: number;
  description: string;
}

export interface ContactInfo {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
}

export interface CategoryInfo {
  slug: ProductCategory;
  name: string;
  description: string;
  image: string;
  productCount: number;
  subcategories: SubcategoryInfo[];
  metaTitle: string;
  metaDescription: string;
}

export interface SubcategoryInfo {
  slug: string;
  name: string;
  productCount: number;
}

export interface FilterState {
  category?: ProductCategory;
  subcategory?: string;
  brand?: string[];
  sealType?: SealType[];
  clearance?: ClearanceType[];
  precisionRating?: string[];
  boreRange?: { min: number; max: number };
  odRange?: { min: number; max: number };
  widthRange?: { min: number; max: number };
  availability?: AvailabilityStatus[];
  priceRange?: { min: number; max: number };
  search?: string;
  sort?: SortOption;
}

export type SortOption =
  | 'relevance'
  | 'price-asc'
  | 'price-desc'
  | 'availability'
  | 'lead-time'
  | 'bore-asc'
  | 'bore-desc'
  | 'name-asc';

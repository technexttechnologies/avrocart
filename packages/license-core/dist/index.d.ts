export type PlanTier = "BASIC" | "GROW" | "PLUS";
export interface PlanPricing {
    monthly: number;
    sixMonths: number;
    yearly: number;
}
export declare const PLAN_PRICING: Record<PlanTier, PlanPricing>;
export declare const PLAN_NAMES: Record<PlanTier, string>;
export type FeatureKey = "ecommerceCore" | "productManagement" | "productCategories" | "productVariants" | "productBundles" | "comboDeals" | "coupons" | "cartCheckout" | "customerAuth" | "paymentGateways" | "orderManagement" | "inventoryManagement" | "manualShipping" | "basicReports" | "themeCustomization" | "allThemes" | "courierIntegrations" | "productReviews" | "advancedSeo" | "advancedPageEditor" | "customPages" | "appIntegrations" | "googleSheetsSync" | "zohoSync" | "printOnDemand" | "advancedSalesReports" | "b2bCommerce" | "multiStore" | "downloadableReports" | "prioritySupport";
export interface FeatureMetadata {
    key: FeatureKey;
    name: string;
    description: string;
    requiredPlan: PlanTier;
    allowedPlans: PlanTier[];
    upgradeMessage: string;
}
export declare const FEATURE_REGISTRY: Record<FeatureKey, FeatureMetadata>;
export interface LicenseEntitlements {
    plan: PlanTier;
    ecommerceCore: boolean;
    paymentGateways: boolean;
    orderManagement: boolean;
    inventoryManagement: boolean;
    manualShipping: boolean;
    customerAccounts: boolean;
    basicReports: boolean;
    themeCustomization: boolean;
    allThemes: boolean;
    courierIntegrations: boolean;
    productReviews: boolean;
    advancedSeo: boolean;
    advancedPageEditor: boolean;
    customPages: boolean;
    appIntegrations: boolean;
    googleSheetsSync: boolean;
    zohoSync: boolean;
    printOnDemand: boolean;
    advancedSalesReports: boolean;
    b2bCommerce: boolean;
    multiStore: boolean;
    downloadableReports: boolean;
    prioritySupport: boolean;
    maxAdminUsers: number;
    customAddons?: string[];
    customPermissions?: Record<string, boolean>;
}
export declare const PLAN_DEFAULT_ENTITLEMENTS: Record<PlanTier, LicenseEntitlements>;
export interface CheckAccessResult {
    allowed: boolean;
    requiredPlan: PlanTier;
    message: string;
    isCustomGrant?: boolean;
    isExpired?: boolean;
}
/**
 * Centralized feature permission checker.
 * Handles active subscription status, custom chargeable addons, and plan tiers.
 */
export declare function checkFeatureAccess(feature: FeatureKey, plan?: PlanTier, options?: {
    status?: string;
    isGracePeriod?: boolean;
    customPermissions?: Record<string, boolean>;
    customAddons?: string[];
}): CheckAccessResult;
export interface LicensePayload {
    licenseKey: string;
    customerId: string;
    subscriptionId: string;
    plan: PlanTier;
    boundDomain?: string | null;
    installationUuid?: string | null;
    issuedAt: string;
    expiresAt: string;
    entitlements: LicenseEntitlements;
    status: "ACTIVE" | "SUSPENDED" | "REVOKED" | "EXPIRED";
}
/**
 * Generate a cryptographically random and structured license key:
 * Format: AVRO-<PLAN>-<12 HEX>-<4 CHECKSUM>
 * Example: AVRO-GROW-9B4F81E732AC-4A12
 */
export declare function generateLicenseKey(plan: PlanTier): string;
/**
 * Validates the checksum structure of an AVRO license key.
 */
export declare function verifyLicenseKeyFormat(licenseKey: string): {
    valid: boolean;
    plan?: PlanTier;
};
/**
 * Technext Central signs an entitlement payload using an HMAC secret.
 */
export declare function signEntitlementToken(payload: LicensePayload, secretKey: string): string;
/**
 * Customer Store verifies the entitlement token returned by Central.
 */
export declare function verifyEntitlementToken(token: string, secretKey: string): {
    valid: boolean;
    payload?: LicensePayload;
    error?: string;
};

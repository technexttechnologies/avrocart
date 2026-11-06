export type PlanTier = "BASIC" | "GROW" | "PLUS";
export interface LicenseEntitlements {
    paymentGateways: boolean;
    courierIntegrations: boolean;
    customThemes: boolean;
    advancedReports: boolean;
    prioritySupport: boolean;
    maxAdminUsers: number;
}
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
export declare const PLAN_DEFAULT_ENTITLEMENTS: Record<PlanTier, LicenseEntitlements>;
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLAN_DEFAULT_ENTITLEMENTS = void 0;
exports.generateLicenseKey = generateLicenseKey;
exports.verifyLicenseKeyFormat = verifyLicenseKeyFormat;
exports.signEntitlementToken = signEntitlementToken;
exports.verifyEntitlementToken = verifyEntitlementToken;
const crypto_1 = __importDefault(require("crypto"));
exports.PLAN_DEFAULT_ENTITLEMENTS = {
    BASIC: {
        paymentGateways: false,
        courierIntegrations: false,
        customThemes: false,
        advancedReports: false,
        prioritySupport: false,
        maxAdminUsers: 1,
    },
    GROW: {
        paymentGateways: true,
        courierIntegrations: true,
        customThemes: true,
        advancedReports: true,
        prioritySupport: false,
        maxAdminUsers: 3,
    },
    PLUS: {
        paymentGateways: true,
        courierIntegrations: true,
        customThemes: true,
        advancedReports: true,
        prioritySupport: true,
        maxAdminUsers: 9999,
    },
};
/**
 * Generate a cryptographically random and structured license key:
 * Format: AVRO-<PLAN>-<12 HEX>-<4 CHECKSUM>
 * Example: AVRO-GROW-9B4F81E732AC-4A12
 */
function generateLicenseKey(plan) {
    const randomHex = crypto_1.default.randomBytes(6).toString("hex").toUpperCase();
    const rawData = `AVRO-${plan}-${randomHex}`;
    const checksum = crypto_1.default
        .createHash("sha256")
        .update(rawData)
        .digest("hex")
        .substring(0, 4)
        .toUpperCase();
    return `${rawData}-${checksum}`;
}
/**
 * Validates the checksum structure of an AVRO license key.
 */
function verifyLicenseKeyFormat(licenseKey) {
    const parts = licenseKey.trim().toUpperCase().split("-");
    if (parts.length !== 4)
        return { valid: false };
    const [prefix, planStr, randomHex, checksum] = parts;
    if (prefix !== "AVRO")
        return { valid: false };
    if (!["BASIC", "GROW", "PLUS"].includes(planStr))
        return { valid: false };
    const rawData = `AVRO-${planStr}-${randomHex}`;
    const expectedChecksum = crypto_1.default
        .createHash("sha256")
        .update(rawData)
        .digest("hex")
        .substring(0, 4)
        .toUpperCase();
    if (checksum !== expectedChecksum)
        return { valid: false };
    return { valid: true, plan: planStr };
}
/**
 * Technext Central signs an entitlement payload using an HMAC secret.
 */
function signEntitlementToken(payload, secretKey) {
    const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
    const signature = crypto_1.default
        .createHmac("sha256", secretKey)
        .update(data)
        .digest("base64url");
    return `${data}.${signature}`;
}
/**
 * Customer Store verifies the entitlement token returned by Central.
 */
function verifyEntitlementToken(token, secretKey) {
    try {
        const [data, signature] = token.split(".");
        if (!data || !signature) {
            return { valid: false, error: "Malformed entitlement token format." };
        }
        const expectedSignature = crypto_1.default
            .createHmac("sha256", secretKey)
            .update(data)
            .digest("base64url");
        if (signature !== expectedSignature) {
            return { valid: false, error: "Invalid signature verification." };
        }
        const payload = JSON.parse(Buffer.from(data, "base64url").toString("utf-8"));
        // Check expiration
        const now = new Date();
        const expiry = new Date(payload.expiresAt);
        if (now > expiry) {
            return {
                valid: false,
                payload,
                error: `License expired on ${expiry.toISOString()}`,
            };
        }
        if (payload.status !== "ACTIVE") {
            return {
                valid: false,
                payload,
                error: `License is currently ${payload.status}`,
            };
        }
        return { valid: true, payload };
    }
    catch (err) {
        return { valid: false, error: err?.message || "Token parsing failed." };
    }
}

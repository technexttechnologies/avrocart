"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLAN_DEFAULT_ENTITLEMENTS = exports.FEATURE_REGISTRY = exports.PLAN_NAMES = exports.PLAN_PRICING = void 0;
exports.checkFeatureAccess = checkFeatureAccess;
exports.generateLicenseKey = generateLicenseKey;
exports.verifyLicenseKeyFormat = verifyLicenseKeyFormat;
exports.signEntitlementToken = signEntitlementToken;
exports.verifyEntitlementToken = verifyEntitlementToken;
const crypto_1 = __importDefault(require("crypto"));
exports.PLAN_PRICING = {
    BASIC: { monthly: 349, sixMonths: 1884, yearly: 3350 },
    GROW: { monthly: 499, sixMonths: 2694, yearly: 4790 },
    PLUS: { monthly: 799, sixMonths: 4314, yearly: 7670 },
};
exports.PLAN_NAMES = {
    BASIC: "AVRO Starter Basic",
    GROW: "AVRO Business Grow",
    PLUS: "AVRO Enterprise Plus",
};
exports.FEATURE_REGISTRY = {
    // Core
    ecommerceCore: {
        key: "ecommerceCore",
        name: "Complete E-commerce Engine",
        description: "Core storefront, catalog, and order processing capabilities.",
        requiredPlan: "BASIC",
        allowedPlans: ["BASIC", "GROW", "PLUS"],
        upgradeMessage: "E-commerce core is available in all plans.",
    },
    productManagement: {
        key: "productManagement",
        name: "Product Catalog Management",
        description: "Create, edit, pricing, images, and inventory management.",
        requiredPlan: "BASIC",
        allowedPlans: ["BASIC", "GROW", "PLUS"],
        upgradeMessage: "Product management is available in all plans.",
    },
    productCategories: {
        key: "productCategories",
        name: "Product Categories & Taxonomy",
        description: "Multi-level category hierarchy and collection groups.",
        requiredPlan: "BASIC",
        allowedPlans: ["BASIC", "GROW", "PLUS"],
        upgradeMessage: "Categories are available in all plans.",
    },
    productVariants: {
        key: "productVariants",
        name: "SKU & Variant Matrix",
        description: "Size, color, material, and option variant management.",
        requiredPlan: "BASIC",
        allowedPlans: ["BASIC", "GROW", "PLUS"],
        upgradeMessage: "Product variants are available in all plans.",
    },
    productBundles: {
        key: "productBundles",
        name: "Product Bundles",
        description: "Group multiple items into packaged bundle kits.",
        requiredPlan: "BASIC",
        allowedPlans: ["BASIC", "GROW", "PLUS"],
        upgradeMessage: "Product bundles are available in all plans.",
    },
    comboDeals: {
        key: "comboDeals",
        name: "Combo Deals & Bundles",
        description: "Cross-sell bundle builder with automatic bundle discounts.",
        requiredPlan: "BASIC",
        allowedPlans: ["BASIC", "GROW", "PLUS"],
        upgradeMessage: "Combo deals are available in all plans.",
    },
    coupons: {
        key: "coupons",
        name: "Coupons & Promotional Discounts",
        description: "Percentage and flat discount codes with cart rules.",
        requiredPlan: "BASIC",
        allowedPlans: ["BASIC", "GROW", "PLUS"],
        upgradeMessage: "Coupons and discounts are available in all plans.",
    },
    cartCheckout: {
        key: "cartCheckout",
        name: "Cart & High-Conversion Checkout",
        description: "One-page responsive cart and customer checkout flow.",
        requiredPlan: "BASIC",
        allowedPlans: ["BASIC", "GROW", "PLUS"],
        upgradeMessage: "Cart & Checkout is available in all plans.",
    },
    customerAuth: {
        key: "customerAuth",
        name: "Customer Accounts & Guest Mode",
        description: "Customer registration, passwordless sign-in, and guest checkout.",
        requiredPlan: "BASIC",
        allowedPlans: ["BASIC", "GROW", "PLUS"],
        upgradeMessage: "Customer accounts are available in all plans.",
    },
    paymentGateways: {
        key: "paymentGateways",
        name: "Payment Gateway Integration",
        description: "Razorpay, PhonePe, Cash on Delivery (COD), and Bank Transfer.",
        requiredPlan: "BASIC",
        allowedPlans: ["BASIC", "GROW", "PLUS"],
        upgradeMessage: "Payment Gateway integration is available in all plans.",
    },
    orderManagement: {
        key: "orderManagement",
        name: "Order Processing & Invoicing",
        description: "Manage orders, update statuses, and generate tax invoices.",
        requiredPlan: "BASIC",
        allowedPlans: ["BASIC", "GROW", "PLUS"],
        upgradeMessage: "Order management is available in all plans.",
    },
    inventoryManagement: {
        key: "inventoryManagement",
        name: "Real-time Inventory Tracking",
        description: "Stock quantities, low stock alerts, and adjustment logs.",
        requiredPlan: "BASIC",
        allowedPlans: ["BASIC", "GROW", "PLUS"],
        upgradeMessage: "Inventory management is available in all plans.",
    },
    manualShipping: {
        key: "manualShipping",
        name: "Manual Shipping Management",
        description: "Custom shipping rates, self-pickup, and manual tracking dispatch.",
        requiredPlan: "BASIC",
        allowedPlans: ["BASIC", "GROW", "PLUS"],
        upgradeMessage: "Manual shipping is available in all plans.",
    },
    basicReports: {
        key: "basicReports",
        name: "Basic Sales Reports",
        description: "High-level overview of daily revenue and order counts.",
        requiredPlan: "BASIC",
        allowedPlans: ["BASIC", "GROW", "PLUS"],
        upgradeMessage: "Basic sales reports are available in all plans.",
    },
    // Grow & Plus
    themeCustomization: {
        key: "themeCustomization",
        name: "Theme Customization",
        description: "Custom branding, banners, color palettes, and hero layouts.",
        requiredPlan: "GROW",
        allowedPlans: ["GROW", "PLUS"],
        upgradeMessage: "Theme Customization is available in the Grow and Plus plans. Upgrade your subscription to unlock this feature.",
    },
    allThemes: {
        key: "allThemes",
        name: "Extended Theme Archetype Library",
        description: "Access all 13 specialized industry themes and layout switchers.",
        requiredPlan: "GROW",
        allowedPlans: ["GROW", "PLUS"],
        upgradeMessage: "The full Theme Library is available in the Grow and Plus plans. Basic plan includes two preset themes only.",
    },
    courierIntegrations: {
        key: "courierIntegrations",
        name: "Automated Courier Logistics (Shiprocket, Delhivery, DTDC)",
        description: "Live courier rate fetching, automated AWB generation, and tracking sync.",
        requiredPlan: "GROW",
        allowedPlans: ["GROW", "PLUS"],
        upgradeMessage: "Courier API Integrations (Shiprocket, Delhivery, DTDC) are available in the Grow and Plus plans. Upgrade your subscription to unlock.",
    },
    productReviews: {
        key: "productReviews",
        name: "Product Reviews & Ratings",
        description: "Customer review submissions, verified buyer badges, and moderation controls.",
        requiredPlan: "GROW",
        allowedPlans: ["GROW", "PLUS"],
        upgradeMessage: "Product Reviews and Ratings are available in the Grow and Plus plans. Upgrade your subscription to unlock this feature.",
    },
    advancedSeo: {
        key: "advancedSeo",
        name: "Advanced SEO Tools",
        description: "Custom meta tags, OpenGraph sharing cards, and canonical slug configuration.",
        requiredPlan: "GROW",
        allowedPlans: ["GROW", "PLUS"],
        upgradeMessage: "Advanced SEO Tools are available in the Grow and Plus plans. Upgrade your subscription to unlock this feature.",
    },
    advancedPageEditor: {
        key: "advancedPageEditor",
        name: "Advanced Page Editor",
        description: "WYSIWYG Markdown editor with live preview and SEO metadata controls.",
        requiredPlan: "GROW",
        allowedPlans: ["GROW", "PLUS"],
        upgradeMessage: "Advanced Page Editor is available in the Grow and Plus plans. Upgrade your subscription to unlock this feature.",
    },
    customPages: {
        key: "customPages",
        name: "Create & Edit Custom Pages",
        description: "Publish custom landing pages, FAQs, sizing charts, and brand stories.",
        requiredPlan: "GROW",
        allowedPlans: ["GROW", "PLUS"],
        upgradeMessage: "Creating and editing custom pages is available in the Grow and Plus plans. Upgrade your subscription to unlock this feature.",
    },
    appIntegrations: {
        key: "appIntegrations",
        name: "Third-party App Directory",
        description: "Connect external tools, sales channels, and merchant plugins.",
        requiredPlan: "GROW",
        allowedPlans: ["GROW", "PLUS"],
        upgradeMessage: "Third-party App Integrations are available in the Grow and Plus plans. Upgrade your subscription to unlock this feature.",
    },
    googleSheetsSync: {
        key: "googleSheetsSync",
        name: "Google Sheets Live Stream",
        description: "Real-time automated sync of orders, customers, and inventory to Google Sheets.",
        requiredPlan: "GROW",
        allowedPlans: ["GROW", "PLUS"],
        upgradeMessage: "Google Sheets integration is available in the Grow and Plus plans. Upgrade your subscription to unlock this feature.",
    },
    zohoSync: {
        key: "zohoSync",
        name: "Zoho Books & Inventory Connectivity",
        description: "Two-way accounting reconciliation and stock synchronization with Zoho.",
        requiredPlan: "GROW",
        allowedPlans: ["GROW", "PLUS"],
        upgradeMessage: "Zoho Books and Inventory integration is available in the Grow and Plus plans. Upgrade your subscription to unlock this feature.",
    },
    printOnDemand: {
        key: "printOnDemand",
        name: "Print-on-Demand (POD) Automation",
        description: "Direct fulfillment routing to Qikink and Printrove print suppliers.",
        requiredPlan: "GROW",
        allowedPlans: ["GROW", "PLUS"],
        upgradeMessage: "Print-on-Demand (POD) integration is available in the Grow and Plus plans. Upgrade your subscription to unlock this feature.",
    },
    advancedSalesReports: {
        key: "advancedSalesReports",
        name: "Advanced Sales Reports & Insights",
        description: "Growth analytics, lifetime customer value, and attribution metrics.",
        requiredPlan: "GROW",
        allowedPlans: ["GROW", "PLUS"],
        upgradeMessage: "Advanced Sales Reports are available in the Grow and Plus plans. Upgrade your subscription to unlock this feature.",
    },
    // Plus only
    b2bCommerce: {
        key: "b2bCommerce",
        name: "B2B Wholesale & Company Portals",
        description: "Wholesale corporate customer directories, GST invoicing, and Net-30 credit terms.",
        requiredPlan: "PLUS",
        allowedPlans: ["PLUS"],
        upgradeMessage: "B2B E-commerce features are exclusive to the Plus plan. Upgrade your subscription to unlock this feature.",
    },
    multiStore: {
        key: "multiStore",
        name: "Multi-Store Management",
        description: "Switch between multiple branch stores and manage B2B portals from one dashboard.",
        requiredPlan: "PLUS",
        allowedPlans: ["PLUS"],
        upgradeMessage: "Multi-Store Management is exclusive to the Plus plan. Upgrade your subscription to unlock this feature.",
    },
    downloadableReports: {
        key: "downloadableReports",
        name: "Downloadable Spreadsheet Reports",
        description: "One-click CSV/Excel downloads of orders, inventory logs, and customer data.",
        requiredPlan: "PLUS",
        allowedPlans: ["PLUS"],
        upgradeMessage: "Downloadable sales spreadsheets are exclusive to the Plus plan. Upgrade your subscription to unlock this feature.",
    },
    prioritySupport: {
        key: "prioritySupport",
        name: "Priority & 24/7 Call Support",
        description: "Guaranteed SLA response times and direct 24/7 phone support channel.",
        requiredPlan: "PLUS",
        allowedPlans: ["PLUS"],
        upgradeMessage: "Priority & 24/7 Call Support is exclusive to the Plus plan.",
    },
};
exports.PLAN_DEFAULT_ENTITLEMENTS = {
    BASIC: {
        plan: "BASIC",
        ecommerceCore: true,
        paymentGateways: true,
        orderManagement: true,
        inventoryManagement: true,
        manualShipping: true,
        customerAccounts: true,
        basicReports: true,
        themeCustomization: false,
        allThemes: false, // 2 preset themes only (AVRO Signature and Noir)
        courierIntegrations: false,
        productReviews: false,
        advancedSeo: false,
        advancedPageEditor: false,
        customPages: false,
        appIntegrations: false,
        googleSheetsSync: false,
        zohoSync: false,
        printOnDemand: false,
        advancedSalesReports: false,
        b2bCommerce: false,
        multiStore: false,
        downloadableReports: false,
        prioritySupport: false,
        maxAdminUsers: 1,
        customAddons: [],
        customPermissions: {},
    },
    GROW: {
        plan: "GROW",
        ecommerceCore: true,
        paymentGateways: true,
        orderManagement: true,
        inventoryManagement: true,
        manualShipping: true,
        customerAccounts: true,
        basicReports: true,
        themeCustomization: true,
        allThemes: true,
        courierIntegrations: true,
        productReviews: true,
        advancedSeo: true,
        advancedPageEditor: true,
        customPages: true,
        appIntegrations: true,
        googleSheetsSync: true,
        zohoSync: true,
        printOnDemand: true,
        advancedSalesReports: true,
        b2bCommerce: false,
        multiStore: false,
        downloadableReports: false,
        prioritySupport: false,
        maxAdminUsers: 3,
        customAddons: [],
        customPermissions: {},
    },
    PLUS: {
        plan: "PLUS",
        ecommerceCore: true,
        paymentGateways: true,
        orderManagement: true,
        inventoryManagement: true,
        manualShipping: true,
        customerAccounts: true,
        basicReports: true,
        themeCustomization: true,
        allThemes: true,
        courierIntegrations: true,
        productReviews: true,
        advancedSeo: true,
        advancedPageEditor: true,
        customPages: true,
        appIntegrations: true,
        googleSheetsSync: true,
        zohoSync: true,
        printOnDemand: true,
        advancedSalesReports: true,
        b2bCommerce: true,
        multiStore: true,
        downloadableReports: true,
        prioritySupport: true,
        maxAdminUsers: 9999,
        customAddons: [],
        customPermissions: {},
    },
};
/**
 * Centralized feature permission checker.
 * Handles active subscription status, custom chargeable addons, and plan tiers.
 */
function checkFeatureAccess(feature, plan = "BASIC", options) {
    const meta = exports.FEATURE_REGISTRY[feature] || {
        key: feature,
        name: feature,
        description: "",
        requiredPlan: "GROW",
        allowedPlans: ["GROW", "PLUS"],
        upgradeMessage: `${feature} requires a subscription upgrade.`,
    };
    // 1. Check expiration/status
    const status = options?.status || "ACTIVE";
    if (status !== "ACTIVE" && status !== "TRIAL" && !options?.isGracePeriod) {
        return {
            allowed: false,
            requiredPlan: meta.requiredPlan,
            message: `Your AVRO subscription is ${status}. Please renew your plan to use ${meta.name}.`,
            isExpired: true,
        };
    }
    // 2. Check Separately Chargeable Customizations (Requirement 6)
    if (options?.customPermissions?.[feature] === true) {
        return {
            allowed: true,
            requiredPlan: meta.requiredPlan,
            message: `Access granted via customized add-on module.`,
            isCustomGrant: true,
        };
    }
    if (options?.customAddons && options.customAddons.includes(feature)) {
        return {
            allowed: true,
            requiredPlan: meta.requiredPlan,
            message: `Access granted via customized add-on module.`,
            isCustomGrant: true,
        };
    }
    // 3. Plan-based access
    const normalizedPlan = (plan?.toUpperCase() || "BASIC");
    const isAllowed = meta.allowedPlans.includes(normalizedPlan);
    if (isAllowed) {
        return {
            allowed: true,
            requiredPlan: meta.requiredPlan,
            message: `${meta.name} is enabled on your ${normalizedPlan} plan.`,
        };
    }
    return {
        allowed: false,
        requiredPlan: meta.requiredPlan,
        message: meta.upgradeMessage,
    };
}
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

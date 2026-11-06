
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model PricingTier
 * 
 */
export type PricingTier = $Result.DefaultSelection<Prisma.$PricingTierPayload>
/**
 * Model PlatformSetting
 * 
 */
export type PlatformSetting = $Result.DefaultSelection<Prisma.$PlatformSettingPayload>
/**
 * Model Promotion
 * 
 */
export type Promotion = $Result.DefaultSelection<Prisma.$PromotionPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model License
 * 
 */
export type License = $Result.DefaultSelection<Prisma.$LicensePayload>
/**
 * Model LicenseValidationLog
 * 
 */
export type LicenseValidationLog = $Result.DefaultSelection<Prisma.$LicenseValidationLogPayload>
/**
 * Model SoftwareRelease
 * 
 */
export type SoftwareRelease = $Result.DefaultSelection<Prisma.$SoftwareReleasePayload>
/**
 * Model SupportTicket
 * 
 */
export type SupportTicket = $Result.DefaultSelection<Prisma.$SupportTicketPayload>
/**
 * Model TicketMessage
 * 
 */
export type TicketMessage = $Result.DefaultSelection<Prisma.$TicketMessagePayload>
/**
 * Model CustomizationQuote
 * 
 */
export type CustomizationQuote = $Result.DefaultSelection<Prisma.$CustomizationQuotePayload>
/**
 * Model CentralThemeItem
 * 
 */
export type CentralThemeItem = $Result.DefaultSelection<Prisma.$CentralThemeItemPayload>
/**
 * Model SystemBroadcast
 * 
 */
export type SystemBroadcast = $Result.DefaultSelection<Prisma.$SystemBroadcastPayload>
/**
 * Model AdminAuditLog
 * 
 */
export type AdminAuditLog = $Result.DefaultSelection<Prisma.$AdminAuditLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs>;

  /**
   * `prisma.pricingTier`: Exposes CRUD operations for the **PricingTier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingTiers
    * const pricingTiers = await prisma.pricingTier.findMany()
    * ```
    */
  get pricingTier(): Prisma.PricingTierDelegate<ExtArgs>;

  /**
   * `prisma.platformSetting`: Exposes CRUD operations for the **PlatformSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlatformSettings
    * const platformSettings = await prisma.platformSetting.findMany()
    * ```
    */
  get platformSetting(): Prisma.PlatformSettingDelegate<ExtArgs>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.PromotionDelegate<ExtArgs>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.license`: Exposes CRUD operations for the **License** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licenses
    * const licenses = await prisma.license.findMany()
    * ```
    */
  get license(): Prisma.LicenseDelegate<ExtArgs>;

  /**
   * `prisma.licenseValidationLog`: Exposes CRUD operations for the **LicenseValidationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LicenseValidationLogs
    * const licenseValidationLogs = await prisma.licenseValidationLog.findMany()
    * ```
    */
  get licenseValidationLog(): Prisma.LicenseValidationLogDelegate<ExtArgs>;

  /**
   * `prisma.softwareRelease`: Exposes CRUD operations for the **SoftwareRelease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SoftwareReleases
    * const softwareReleases = await prisma.softwareRelease.findMany()
    * ```
    */
  get softwareRelease(): Prisma.SoftwareReleaseDelegate<ExtArgs>;

  /**
   * `prisma.supportTicket`: Exposes CRUD operations for the **SupportTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportTickets
    * const supportTickets = await prisma.supportTicket.findMany()
    * ```
    */
  get supportTicket(): Prisma.SupportTicketDelegate<ExtArgs>;

  /**
   * `prisma.ticketMessage`: Exposes CRUD operations for the **TicketMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketMessages
    * const ticketMessages = await prisma.ticketMessage.findMany()
    * ```
    */
  get ticketMessage(): Prisma.TicketMessageDelegate<ExtArgs>;

  /**
   * `prisma.customizationQuote`: Exposes CRUD operations for the **CustomizationQuote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomizationQuotes
    * const customizationQuotes = await prisma.customizationQuote.findMany()
    * ```
    */
  get customizationQuote(): Prisma.CustomizationQuoteDelegate<ExtArgs>;

  /**
   * `prisma.centralThemeItem`: Exposes CRUD operations for the **CentralThemeItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CentralThemeItems
    * const centralThemeItems = await prisma.centralThemeItem.findMany()
    * ```
    */
  get centralThemeItem(): Prisma.CentralThemeItemDelegate<ExtArgs>;

  /**
   * `prisma.systemBroadcast`: Exposes CRUD operations for the **SystemBroadcast** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemBroadcasts
    * const systemBroadcasts = await prisma.systemBroadcast.findMany()
    * ```
    */
  get systemBroadcast(): Prisma.SystemBroadcastDelegate<ExtArgs>;

  /**
   * `prisma.adminAuditLog`: Exposes CRUD operations for the **AdminAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminAuditLogs
    * const adminAuditLogs = await prisma.adminAuditLog.findMany()
    * ```
    */
  get adminAuditLog(): Prisma.AdminAuditLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AdminUser: 'AdminUser',
    Customer: 'Customer',
    Plan: 'Plan',
    PricingTier: 'PricingTier',
    PlatformSetting: 'PlatformSetting',
    Promotion: 'Promotion',
    Subscription: 'Subscription',
    License: 'License',
    LicenseValidationLog: 'LicenseValidationLog',
    SoftwareRelease: 'SoftwareRelease',
    SupportTicket: 'SupportTicket',
    TicketMessage: 'TicketMessage',
    CustomizationQuote: 'CustomizationQuote',
    CentralThemeItem: 'CentralThemeItem',
    SystemBroadcast: 'SystemBroadcast',
    AdminAuditLog: 'AdminAuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "adminUser" | "customer" | "plan" | "pricingTier" | "platformSetting" | "promotion" | "subscription" | "license" | "licenseValidationLog" | "softwareRelease" | "supportTicket" | "ticketMessage" | "customizationQuote" | "centralThemeItem" | "systemBroadcast" | "adminAuditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      PricingTier: {
        payload: Prisma.$PricingTierPayload<ExtArgs>
        fields: Prisma.PricingTierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingTierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingTierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          findFirst: {
            args: Prisma.PricingTierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingTierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          findMany: {
            args: Prisma.PricingTierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>[]
          }
          create: {
            args: Prisma.PricingTierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          createMany: {
            args: Prisma.PricingTierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingTierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>[]
          }
          delete: {
            args: Prisma.PricingTierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          update: {
            args: Prisma.PricingTierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          deleteMany: {
            args: Prisma.PricingTierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingTierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PricingTierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingTierPayload>
          }
          aggregate: {
            args: Prisma.PricingTierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingTier>
          }
          groupBy: {
            args: Prisma.PricingTierGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingTierGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingTierCountArgs<ExtArgs>
            result: $Utils.Optional<PricingTierCountAggregateOutputType> | number
          }
        }
      }
      PlatformSetting: {
        payload: Prisma.$PlatformSettingPayload<ExtArgs>
        fields: Prisma.PlatformSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingPayload>
          }
          findFirst: {
            args: Prisma.PlatformSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingPayload>
          }
          findMany: {
            args: Prisma.PlatformSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingPayload>[]
          }
          create: {
            args: Prisma.PlatformSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingPayload>
          }
          createMany: {
            args: Prisma.PlatformSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingPayload>[]
          }
          delete: {
            args: Prisma.PlatformSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingPayload>
          }
          update: {
            args: Prisma.PlatformSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingPayload>
          }
          deleteMany: {
            args: Prisma.PlatformSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlatformSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingPayload>
          }
          aggregate: {
            args: Prisma.PlatformSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatformSetting>
          }
          groupBy: {
            args: Prisma.PlatformSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformSettingCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformSettingCountAggregateOutputType> | number
          }
        }
      }
      Promotion: {
        payload: Prisma.$PromotionPayload<ExtArgs>
        fields: Prisma.PromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findFirst: {
            args: Prisma.PromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findMany: {
            args: Prisma.PromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          create: {
            args: Prisma.PromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          createMany: {
            args: Prisma.PromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          delete: {
            args: Prisma.PromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          update: {
            args: Prisma.PromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          deleteMany: {
            args: Prisma.PromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.PromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      License: {
        payload: Prisma.$LicensePayload<ExtArgs>
        fields: Prisma.LicenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findFirst: {
            args: Prisma.LicenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findMany: {
            args: Prisma.LicenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          create: {
            args: Prisma.LicenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          createMany: {
            args: Prisma.LicenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          delete: {
            args: Prisma.LicenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          update: {
            args: Prisma.LicenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          deleteMany: {
            args: Prisma.LicenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          aggregate: {
            args: Prisma.LicenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicense>
          }
          groupBy: {
            args: Prisma.LicenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseCountAggregateOutputType> | number
          }
        }
      }
      LicenseValidationLog: {
        payload: Prisma.$LicenseValidationLogPayload<ExtArgs>
        fields: Prisma.LicenseValidationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseValidationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseValidationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseValidationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseValidationLogPayload>
          }
          findFirst: {
            args: Prisma.LicenseValidationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseValidationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseValidationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseValidationLogPayload>
          }
          findMany: {
            args: Prisma.LicenseValidationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseValidationLogPayload>[]
          }
          create: {
            args: Prisma.LicenseValidationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseValidationLogPayload>
          }
          createMany: {
            args: Prisma.LicenseValidationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseValidationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseValidationLogPayload>[]
          }
          delete: {
            args: Prisma.LicenseValidationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseValidationLogPayload>
          }
          update: {
            args: Prisma.LicenseValidationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseValidationLogPayload>
          }
          deleteMany: {
            args: Prisma.LicenseValidationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseValidationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicenseValidationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseValidationLogPayload>
          }
          aggregate: {
            args: Prisma.LicenseValidationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicenseValidationLog>
          }
          groupBy: {
            args: Prisma.LicenseValidationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseValidationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseValidationLogCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseValidationLogCountAggregateOutputType> | number
          }
        }
      }
      SoftwareRelease: {
        payload: Prisma.$SoftwareReleasePayload<ExtArgs>
        fields: Prisma.SoftwareReleaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SoftwareReleaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwareReleasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SoftwareReleaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwareReleasePayload>
          }
          findFirst: {
            args: Prisma.SoftwareReleaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwareReleasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SoftwareReleaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwareReleasePayload>
          }
          findMany: {
            args: Prisma.SoftwareReleaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwareReleasePayload>[]
          }
          create: {
            args: Prisma.SoftwareReleaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwareReleasePayload>
          }
          createMany: {
            args: Prisma.SoftwareReleaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SoftwareReleaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwareReleasePayload>[]
          }
          delete: {
            args: Prisma.SoftwareReleaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwareReleasePayload>
          }
          update: {
            args: Prisma.SoftwareReleaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwareReleasePayload>
          }
          deleteMany: {
            args: Prisma.SoftwareReleaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SoftwareReleaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SoftwareReleaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwareReleasePayload>
          }
          aggregate: {
            args: Prisma.SoftwareReleaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSoftwareRelease>
          }
          groupBy: {
            args: Prisma.SoftwareReleaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<SoftwareReleaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.SoftwareReleaseCountArgs<ExtArgs>
            result: $Utils.Optional<SoftwareReleaseCountAggregateOutputType> | number
          }
        }
      }
      SupportTicket: {
        payload: Prisma.$SupportTicketPayload<ExtArgs>
        fields: Prisma.SupportTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          findFirst: {
            args: Prisma.SupportTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          findMany: {
            args: Prisma.SupportTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>[]
          }
          create: {
            args: Prisma.SupportTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          createMany: {
            args: Prisma.SupportTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>[]
          }
          delete: {
            args: Prisma.SupportTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          update: {
            args: Prisma.SupportTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          deleteMany: {
            args: Prisma.SupportTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupportTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          aggregate: {
            args: Prisma.SupportTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportTicket>
          }
          groupBy: {
            args: Prisma.SupportTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportTicketCountArgs<ExtArgs>
            result: $Utils.Optional<SupportTicketCountAggregateOutputType> | number
          }
        }
      }
      TicketMessage: {
        payload: Prisma.$TicketMessagePayload<ExtArgs>
        fields: Prisma.TicketMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          findFirst: {
            args: Prisma.TicketMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          findMany: {
            args: Prisma.TicketMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>[]
          }
          create: {
            args: Prisma.TicketMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          createMany: {
            args: Prisma.TicketMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>[]
          }
          delete: {
            args: Prisma.TicketMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          update: {
            args: Prisma.TicketMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          deleteMany: {
            args: Prisma.TicketMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          aggregate: {
            args: Prisma.TicketMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketMessage>
          }
          groupBy: {
            args: Prisma.TicketMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketMessageCountArgs<ExtArgs>
            result: $Utils.Optional<TicketMessageCountAggregateOutputType> | number
          }
        }
      }
      CustomizationQuote: {
        payload: Prisma.$CustomizationQuotePayload<ExtArgs>
        fields: Prisma.CustomizationQuoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomizationQuoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationQuotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomizationQuoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationQuotePayload>
          }
          findFirst: {
            args: Prisma.CustomizationQuoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationQuotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomizationQuoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationQuotePayload>
          }
          findMany: {
            args: Prisma.CustomizationQuoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationQuotePayload>[]
          }
          create: {
            args: Prisma.CustomizationQuoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationQuotePayload>
          }
          createMany: {
            args: Prisma.CustomizationQuoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomizationQuoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationQuotePayload>[]
          }
          delete: {
            args: Prisma.CustomizationQuoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationQuotePayload>
          }
          update: {
            args: Prisma.CustomizationQuoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationQuotePayload>
          }
          deleteMany: {
            args: Prisma.CustomizationQuoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomizationQuoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomizationQuoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationQuotePayload>
          }
          aggregate: {
            args: Prisma.CustomizationQuoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomizationQuote>
          }
          groupBy: {
            args: Prisma.CustomizationQuoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomizationQuoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomizationQuoteCountArgs<ExtArgs>
            result: $Utils.Optional<CustomizationQuoteCountAggregateOutputType> | number
          }
        }
      }
      CentralThemeItem: {
        payload: Prisma.$CentralThemeItemPayload<ExtArgs>
        fields: Prisma.CentralThemeItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CentralThemeItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentralThemeItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CentralThemeItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentralThemeItemPayload>
          }
          findFirst: {
            args: Prisma.CentralThemeItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentralThemeItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CentralThemeItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentralThemeItemPayload>
          }
          findMany: {
            args: Prisma.CentralThemeItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentralThemeItemPayload>[]
          }
          create: {
            args: Prisma.CentralThemeItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentralThemeItemPayload>
          }
          createMany: {
            args: Prisma.CentralThemeItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CentralThemeItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentralThemeItemPayload>[]
          }
          delete: {
            args: Prisma.CentralThemeItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentralThemeItemPayload>
          }
          update: {
            args: Prisma.CentralThemeItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentralThemeItemPayload>
          }
          deleteMany: {
            args: Prisma.CentralThemeItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CentralThemeItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CentralThemeItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentralThemeItemPayload>
          }
          aggregate: {
            args: Prisma.CentralThemeItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCentralThemeItem>
          }
          groupBy: {
            args: Prisma.CentralThemeItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CentralThemeItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CentralThemeItemCountArgs<ExtArgs>
            result: $Utils.Optional<CentralThemeItemCountAggregateOutputType> | number
          }
        }
      }
      SystemBroadcast: {
        payload: Prisma.$SystemBroadcastPayload<ExtArgs>
        fields: Prisma.SystemBroadcastFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemBroadcastFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemBroadcastPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemBroadcastFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemBroadcastPayload>
          }
          findFirst: {
            args: Prisma.SystemBroadcastFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemBroadcastPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemBroadcastFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemBroadcastPayload>
          }
          findMany: {
            args: Prisma.SystemBroadcastFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemBroadcastPayload>[]
          }
          create: {
            args: Prisma.SystemBroadcastCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemBroadcastPayload>
          }
          createMany: {
            args: Prisma.SystemBroadcastCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemBroadcastCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemBroadcastPayload>[]
          }
          delete: {
            args: Prisma.SystemBroadcastDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemBroadcastPayload>
          }
          update: {
            args: Prisma.SystemBroadcastUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemBroadcastPayload>
          }
          deleteMany: {
            args: Prisma.SystemBroadcastDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemBroadcastUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SystemBroadcastUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemBroadcastPayload>
          }
          aggregate: {
            args: Prisma.SystemBroadcastAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemBroadcast>
          }
          groupBy: {
            args: Prisma.SystemBroadcastGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemBroadcastGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemBroadcastCountArgs<ExtArgs>
            result: $Utils.Optional<SystemBroadcastCountAggregateOutputType> | number
          }
        }
      }
      AdminAuditLog: {
        payload: Prisma.$AdminAuditLogPayload<ExtArgs>
        fields: Prisma.AdminAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          findFirst: {
            args: Prisma.AdminAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          findMany: {
            args: Prisma.AdminAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>[]
          }
          create: {
            args: Prisma.AdminAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          createMany: {
            args: Prisma.AdminAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>[]
          }
          delete: {
            args: Prisma.AdminAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          update: {
            args: Prisma.AdminAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AdminAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuditLogPayload>
          }
          aggregate: {
            args: Prisma.AdminAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminAuditLog>
          }
          groupBy: {
            args: Prisma.AdminAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AdminAuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    subscriptions: number
    licenses: number
    tickets: number
    quotes: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | CustomerCountOutputTypeCountSubscriptionsArgs
    licenses?: boolean | CustomerCountOutputTypeCountLicensesArgs
    tickets?: boolean | CustomerCountOutputTypeCountTicketsArgs
    quotes?: boolean | CustomerCountOutputTypeCountQuotesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportTicketWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountQuotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomizationQuoteWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    pricingTiers: number
    subscriptions: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricingTiers?: boolean | PlanCountOutputTypeCountPricingTiersArgs
    subscriptions?: boolean | PlanCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountPricingTiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingTierWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type LicenseCountOutputType
   */

  export type LicenseCountOutputType = {
    validationLogs: number
  }

  export type LicenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    validationLogs?: boolean | LicenseCountOutputTypeCountValidationLogsArgs
  }

  // Custom InputTypes
  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseCountOutputType
     */
    select?: LicenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeCountValidationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseValidationLogWhereInput
  }


  /**
   * Count Type SupportTicketCountOutputType
   */

  export type SupportTicketCountOutputType = {
    messages: number
  }

  export type SupportTicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | SupportTicketCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * SupportTicketCountOutputType without action
   */
  export type SupportTicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicketCountOutputType
     */
    select?: SupportTicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupportTicketCountOutputType without action
   */
  export type SupportTicketCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */ 
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly passwordHash: FieldRef<"AdminUser", 'String'>
    readonly role: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    companyName: string | null
    phone: string | null
    status: string | null
    internalNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    companyName: string | null
    phone: string | null
    status: string | null
    internalNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    companyName: number
    phone: number
    status: number
    internalNotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    companyName?: true
    phone?: true
    status?: true
    internalNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    companyName?: true
    phone?: true
    status?: true
    internalNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    companyName?: true
    phone?: true
    status?: true
    internalNotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    companyName: string | null
    phone: string | null
    status: string
    internalNotes: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    companyName?: boolean
    phone?: boolean
    status?: boolean
    internalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptions?: boolean | Customer$subscriptionsArgs<ExtArgs>
    licenses?: boolean | Customer$licensesArgs<ExtArgs>
    tickets?: boolean | Customer$ticketsArgs<ExtArgs>
    quotes?: boolean | Customer$quotesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    companyName?: boolean
    phone?: boolean
    status?: boolean
    internalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    companyName?: boolean
    phone?: boolean
    status?: boolean
    internalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | Customer$subscriptionsArgs<ExtArgs>
    licenses?: boolean | Customer$licensesArgs<ExtArgs>
    tickets?: boolean | Customer$ticketsArgs<ExtArgs>
    quotes?: boolean | Customer$quotesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      licenses: Prisma.$LicensePayload<ExtArgs>[]
      tickets: Prisma.$SupportTicketPayload<ExtArgs>[]
      quotes: Prisma.$CustomizationQuotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      companyName: string | null
      phone: string | null
      status: string
      internalNotes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends Customer$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany"> | Null>
    licenses<T extends Customer$licensesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$licensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany"> | Null>
    tickets<T extends Customer$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany"> | Null>
    quotes<T extends Customer$quotesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$quotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomizationQuotePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly passwordHash: FieldRef<"Customer", 'String'>
    readonly companyName: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly status: FieldRef<"Customer", 'String'>
    readonly internalNotes: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.subscriptions
   */
  export type Customer$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Customer.licenses
   */
  export type Customer$licensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    cursor?: LicenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * Customer.tickets
   */
  export type Customer$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    where?: SupportTicketWhereInput
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    cursor?: SupportTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * Customer.quotes
   */
  export type Customer$quotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomizationQuote
     */
    select?: CustomizationQuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationQuoteInclude<ExtArgs> | null
    where?: CustomizationQuoteWhereInput
    orderBy?: CustomizationQuoteOrderByWithRelationInput | CustomizationQuoteOrderByWithRelationInput[]
    cursor?: CustomizationQuoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomizationQuoteScalarFieldEnum | CustomizationQuoteScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    tier: string | null
    name: string | null
    description: string | null
    badge: string | null
    isActive: boolean | null
    entitlementsJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    tier: string | null
    name: string | null
    description: string | null
    badge: string | null
    isActive: boolean | null
    entitlementsJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    tier: number
    name: number
    description: number
    badge: number
    isActive: number
    entitlementsJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanMinAggregateInputType = {
    id?: true
    tier?: true
    name?: true
    description?: true
    badge?: true
    isActive?: true
    entitlementsJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    tier?: true
    name?: true
    description?: true
    badge?: true
    isActive?: true
    entitlementsJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    tier?: true
    name?: true
    description?: true
    badge?: true
    isActive?: true
    entitlementsJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    tier: string
    name: string
    description: string
    badge: string | null
    isActive: boolean
    entitlementsJson: string
    createdAt: Date
    updatedAt: Date
    _count: PlanCountAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tier?: boolean
    name?: boolean
    description?: boolean
    badge?: boolean
    isActive?: boolean
    entitlementsJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pricingTiers?: boolean | Plan$pricingTiersArgs<ExtArgs>
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tier?: boolean
    name?: boolean
    description?: boolean
    badge?: boolean
    isActive?: boolean
    entitlementsJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    tier?: boolean
    name?: boolean
    description?: boolean
    badge?: boolean
    isActive?: boolean
    entitlementsJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricingTiers?: boolean | Plan$pricingTiersArgs<ExtArgs>
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      pricingTiers: Prisma.$PricingTierPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tier: string
      name: string
      description: string
      badge: string | null
      isActive: boolean
      entitlementsJson: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pricingTiers<T extends Plan$pricingTiersArgs<ExtArgs> = {}>(args?: Subset<T, Plan$pricingTiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "findMany"> | Null>
    subscriptions<T extends Plan$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */ 
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly tier: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly badge: FieldRef<"Plan", 'String'>
    readonly isActive: FieldRef<"Plan", 'Boolean'>
    readonly entitlementsJson: FieldRef<"Plan", 'String'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
  }

  /**
   * Plan.pricingTiers
   */
  export type Plan$pricingTiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingTierInclude<ExtArgs> | null
    where?: PricingTierWhereInput
    orderBy?: PricingTierOrderByWithRelationInput | PricingTierOrderByWithRelationInput[]
    cursor?: PricingTierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingTierScalarFieldEnum | PricingTierScalarFieldEnum[]
  }

  /**
   * Plan.subscriptions
   */
  export type Plan$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model PricingTier
   */

  export type AggregatePricingTier = {
    _count: PricingTierCountAggregateOutputType | null
    _avg: PricingTierAvgAggregateOutputType | null
    _sum: PricingTierSumAggregateOutputType | null
    _min: PricingTierMinAggregateOutputType | null
    _max: PricingTierMaxAggregateOutputType | null
  }

  export type PricingTierAvgAggregateOutputType = {
    price: number | null
    originalPrice: number | null
    discountPercent: number | null
  }

  export type PricingTierSumAggregateOutputType = {
    price: number | null
    originalPrice: number | null
    discountPercent: number | null
  }

  export type PricingTierMinAggregateOutputType = {
    id: string | null
    planId: string | null
    duration: string | null
    price: number | null
    originalPrice: number | null
    discountPercent: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingTierMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    duration: string | null
    price: number | null
    originalPrice: number | null
    discountPercent: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingTierCountAggregateOutputType = {
    id: number
    planId: number
    duration: number
    price: number
    originalPrice: number
    discountPercent: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PricingTierAvgAggregateInputType = {
    price?: true
    originalPrice?: true
    discountPercent?: true
  }

  export type PricingTierSumAggregateInputType = {
    price?: true
    originalPrice?: true
    discountPercent?: true
  }

  export type PricingTierMinAggregateInputType = {
    id?: true
    planId?: true
    duration?: true
    price?: true
    originalPrice?: true
    discountPercent?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingTierMaxAggregateInputType = {
    id?: true
    planId?: true
    duration?: true
    price?: true
    originalPrice?: true
    discountPercent?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingTierCountAggregateInputType = {
    id?: true
    planId?: true
    duration?: true
    price?: true
    originalPrice?: true
    discountPercent?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PricingTierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingTier to aggregate.
     */
    where?: PricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingTiers to fetch.
     */
    orderBy?: PricingTierOrderByWithRelationInput | PricingTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingTiers
    **/
    _count?: true | PricingTierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingTierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingTierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingTierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingTierMaxAggregateInputType
  }

  export type GetPricingTierAggregateType<T extends PricingTierAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingTier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingTier[P]>
      : GetScalarType<T[P], AggregatePricingTier[P]>
  }




  export type PricingTierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingTierWhereInput
    orderBy?: PricingTierOrderByWithAggregationInput | PricingTierOrderByWithAggregationInput[]
    by: PricingTierScalarFieldEnum[] | PricingTierScalarFieldEnum
    having?: PricingTierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingTierCountAggregateInputType | true
    _avg?: PricingTierAvgAggregateInputType
    _sum?: PricingTierSumAggregateInputType
    _min?: PricingTierMinAggregateInputType
    _max?: PricingTierMaxAggregateInputType
  }

  export type PricingTierGroupByOutputType = {
    id: string
    planId: string
    duration: string
    price: number
    originalPrice: number | null
    discountPercent: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PricingTierCountAggregateOutputType | null
    _avg: PricingTierAvgAggregateOutputType | null
    _sum: PricingTierSumAggregateOutputType | null
    _min: PricingTierMinAggregateOutputType | null
    _max: PricingTierMaxAggregateOutputType | null
  }

  type GetPricingTierGroupByPayload<T extends PricingTierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingTierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingTierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingTierGroupByOutputType[P]>
            : GetScalarType<T[P], PricingTierGroupByOutputType[P]>
        }
      >
    >


  export type PricingTierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    duration?: boolean
    price?: boolean
    originalPrice?: boolean
    discountPercent?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingTier"]>

  export type PricingTierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    duration?: boolean
    price?: boolean
    originalPrice?: boolean
    discountPercent?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingTier"]>

  export type PricingTierSelectScalar = {
    id?: boolean
    planId?: boolean
    duration?: boolean
    price?: boolean
    originalPrice?: boolean
    discountPercent?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PricingTierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type PricingTierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $PricingTierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingTier"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      duration: string
      price: number
      originalPrice: number | null
      discountPercent: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pricingTier"]>
    composites: {}
  }

  type PricingTierGetPayload<S extends boolean | null | undefined | PricingTierDefaultArgs> = $Result.GetResult<Prisma.$PricingTierPayload, S>

  type PricingTierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PricingTierFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PricingTierCountAggregateInputType | true
    }

  export interface PricingTierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingTier'], meta: { name: 'PricingTier' } }
    /**
     * Find zero or one PricingTier that matches the filter.
     * @param {PricingTierFindUniqueArgs} args - Arguments to find a PricingTier
     * @example
     * // Get one PricingTier
     * const pricingTier = await prisma.pricingTier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingTierFindUniqueArgs>(args: SelectSubset<T, PricingTierFindUniqueArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PricingTier that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PricingTierFindUniqueOrThrowArgs} args - Arguments to find a PricingTier
     * @example
     * // Get one PricingTier
     * const pricingTier = await prisma.pricingTier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingTierFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingTierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PricingTier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierFindFirstArgs} args - Arguments to find a PricingTier
     * @example
     * // Get one PricingTier
     * const pricingTier = await prisma.pricingTier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingTierFindFirstArgs>(args?: SelectSubset<T, PricingTierFindFirstArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PricingTier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierFindFirstOrThrowArgs} args - Arguments to find a PricingTier
     * @example
     * // Get one PricingTier
     * const pricingTier = await prisma.pricingTier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingTierFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingTierFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PricingTiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingTiers
     * const pricingTiers = await prisma.pricingTier.findMany()
     * 
     * // Get first 10 PricingTiers
     * const pricingTiers = await prisma.pricingTier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingTierWithIdOnly = await prisma.pricingTier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingTierFindManyArgs>(args?: SelectSubset<T, PricingTierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PricingTier.
     * @param {PricingTierCreateArgs} args - Arguments to create a PricingTier.
     * @example
     * // Create one PricingTier
     * const PricingTier = await prisma.pricingTier.create({
     *   data: {
     *     // ... data to create a PricingTier
     *   }
     * })
     * 
     */
    create<T extends PricingTierCreateArgs>(args: SelectSubset<T, PricingTierCreateArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PricingTiers.
     * @param {PricingTierCreateManyArgs} args - Arguments to create many PricingTiers.
     * @example
     * // Create many PricingTiers
     * const pricingTier = await prisma.pricingTier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingTierCreateManyArgs>(args?: SelectSubset<T, PricingTierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PricingTiers and returns the data saved in the database.
     * @param {PricingTierCreateManyAndReturnArgs} args - Arguments to create many PricingTiers.
     * @example
     * // Create many PricingTiers
     * const pricingTier = await prisma.pricingTier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PricingTiers and only return the `id`
     * const pricingTierWithIdOnly = await prisma.pricingTier.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingTierCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingTierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PricingTier.
     * @param {PricingTierDeleteArgs} args - Arguments to delete one PricingTier.
     * @example
     * // Delete one PricingTier
     * const PricingTier = await prisma.pricingTier.delete({
     *   where: {
     *     // ... filter to delete one PricingTier
     *   }
     * })
     * 
     */
    delete<T extends PricingTierDeleteArgs>(args: SelectSubset<T, PricingTierDeleteArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PricingTier.
     * @param {PricingTierUpdateArgs} args - Arguments to update one PricingTier.
     * @example
     * // Update one PricingTier
     * const pricingTier = await prisma.pricingTier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingTierUpdateArgs>(args: SelectSubset<T, PricingTierUpdateArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PricingTiers.
     * @param {PricingTierDeleteManyArgs} args - Arguments to filter PricingTiers to delete.
     * @example
     * // Delete a few PricingTiers
     * const { count } = await prisma.pricingTier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingTierDeleteManyArgs>(args?: SelectSubset<T, PricingTierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingTiers
     * const pricingTier = await prisma.pricingTier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingTierUpdateManyArgs>(args: SelectSubset<T, PricingTierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PricingTier.
     * @param {PricingTierUpsertArgs} args - Arguments to update or create a PricingTier.
     * @example
     * // Update or create a PricingTier
     * const pricingTier = await prisma.pricingTier.upsert({
     *   create: {
     *     // ... data to create a PricingTier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingTier we want to update
     *   }
     * })
     */
    upsert<T extends PricingTierUpsertArgs>(args: SelectSubset<T, PricingTierUpsertArgs<ExtArgs>>): Prisma__PricingTierClient<$Result.GetResult<Prisma.$PricingTierPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PricingTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierCountArgs} args - Arguments to filter PricingTiers to count.
     * @example
     * // Count the number of PricingTiers
     * const count = await prisma.pricingTier.count({
     *   where: {
     *     // ... the filter for the PricingTiers we want to count
     *   }
     * })
    **/
    count<T extends PricingTierCountArgs>(
      args?: Subset<T, PricingTierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingTierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PricingTierAggregateArgs>(args: Subset<T, PricingTierAggregateArgs>): Prisma.PrismaPromise<GetPricingTierAggregateType<T>>

    /**
     * Group by PricingTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingTierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PricingTierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingTierGroupByArgs['orderBy'] }
        : { orderBy?: PricingTierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PricingTierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingTierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingTier model
   */
  readonly fields: PricingTierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingTier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingTierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PricingTier model
   */ 
  interface PricingTierFieldRefs {
    readonly id: FieldRef<"PricingTier", 'String'>
    readonly planId: FieldRef<"PricingTier", 'String'>
    readonly duration: FieldRef<"PricingTier", 'String'>
    readonly price: FieldRef<"PricingTier", 'Float'>
    readonly originalPrice: FieldRef<"PricingTier", 'Float'>
    readonly discountPercent: FieldRef<"PricingTier", 'Float'>
    readonly isActive: FieldRef<"PricingTier", 'Boolean'>
    readonly createdAt: FieldRef<"PricingTier", 'DateTime'>
    readonly updatedAt: FieldRef<"PricingTier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PricingTier findUnique
   */
  export type PricingTierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * Filter, which PricingTier to fetch.
     */
    where: PricingTierWhereUniqueInput
  }

  /**
   * PricingTier findUniqueOrThrow
   */
  export type PricingTierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * Filter, which PricingTier to fetch.
     */
    where: PricingTierWhereUniqueInput
  }

  /**
   * PricingTier findFirst
   */
  export type PricingTierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * Filter, which PricingTier to fetch.
     */
    where?: PricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingTiers to fetch.
     */
    orderBy?: PricingTierOrderByWithRelationInput | PricingTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingTiers.
     */
    cursor?: PricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingTiers.
     */
    distinct?: PricingTierScalarFieldEnum | PricingTierScalarFieldEnum[]
  }

  /**
   * PricingTier findFirstOrThrow
   */
  export type PricingTierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * Filter, which PricingTier to fetch.
     */
    where?: PricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingTiers to fetch.
     */
    orderBy?: PricingTierOrderByWithRelationInput | PricingTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingTiers.
     */
    cursor?: PricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingTiers.
     */
    distinct?: PricingTierScalarFieldEnum | PricingTierScalarFieldEnum[]
  }

  /**
   * PricingTier findMany
   */
  export type PricingTierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * Filter, which PricingTiers to fetch.
     */
    where?: PricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingTiers to fetch.
     */
    orderBy?: PricingTierOrderByWithRelationInput | PricingTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingTiers.
     */
    cursor?: PricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingTiers.
     */
    skip?: number
    distinct?: PricingTierScalarFieldEnum | PricingTierScalarFieldEnum[]
  }

  /**
   * PricingTier create
   */
  export type PricingTierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * The data needed to create a PricingTier.
     */
    data: XOR<PricingTierCreateInput, PricingTierUncheckedCreateInput>
  }

  /**
   * PricingTier createMany
   */
  export type PricingTierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingTiers.
     */
    data: PricingTierCreateManyInput | PricingTierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingTier createManyAndReturn
   */
  export type PricingTierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PricingTiers.
     */
    data: PricingTierCreateManyInput | PricingTierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingTierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingTier update
   */
  export type PricingTierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * The data needed to update a PricingTier.
     */
    data: XOR<PricingTierUpdateInput, PricingTierUncheckedUpdateInput>
    /**
     * Choose, which PricingTier to update.
     */
    where: PricingTierWhereUniqueInput
  }

  /**
   * PricingTier updateMany
   */
  export type PricingTierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingTiers.
     */
    data: XOR<PricingTierUpdateManyMutationInput, PricingTierUncheckedUpdateManyInput>
    /**
     * Filter which PricingTiers to update
     */
    where?: PricingTierWhereInput
  }

  /**
   * PricingTier upsert
   */
  export type PricingTierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * The filter to search for the PricingTier to update in case it exists.
     */
    where: PricingTierWhereUniqueInput
    /**
     * In case the PricingTier found by the `where` argument doesn't exist, create a new PricingTier with this data.
     */
    create: XOR<PricingTierCreateInput, PricingTierUncheckedCreateInput>
    /**
     * In case the PricingTier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingTierUpdateInput, PricingTierUncheckedUpdateInput>
  }

  /**
   * PricingTier delete
   */
  export type PricingTierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingTierInclude<ExtArgs> | null
    /**
     * Filter which PricingTier to delete.
     */
    where: PricingTierWhereUniqueInput
  }

  /**
   * PricingTier deleteMany
   */
  export type PricingTierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingTiers to delete
     */
    where?: PricingTierWhereInput
  }

  /**
   * PricingTier without action
   */
  export type PricingTierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingTier
     */
    select?: PricingTierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingTierInclude<ExtArgs> | null
  }


  /**
   * Model PlatformSetting
   */

  export type AggregatePlatformSetting = {
    _count: PlatformSettingCountAggregateOutputType | null
    _min: PlatformSettingMinAggregateOutputType | null
    _max: PlatformSettingMaxAggregateOutputType | null
  }

  export type PlatformSettingMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type PlatformSettingMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type PlatformSettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type PlatformSettingMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
  }

  export type PlatformSettingMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
  }

  export type PlatformSettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type PlatformSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformSetting to aggregate.
     */
    where?: PlatformSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformSettings to fetch.
     */
    orderBy?: PlatformSettingOrderByWithRelationInput | PlatformSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlatformSettings
    **/
    _count?: true | PlatformSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformSettingMaxAggregateInputType
  }

  export type GetPlatformSettingAggregateType<T extends PlatformSettingAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatformSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatformSetting[P]>
      : GetScalarType<T[P], AggregatePlatformSetting[P]>
  }




  export type PlatformSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformSettingWhereInput
    orderBy?: PlatformSettingOrderByWithAggregationInput | PlatformSettingOrderByWithAggregationInput[]
    by: PlatformSettingScalarFieldEnum[] | PlatformSettingScalarFieldEnum
    having?: PlatformSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformSettingCountAggregateInputType | true
    _min?: PlatformSettingMinAggregateInputType
    _max?: PlatformSettingMaxAggregateInputType
  }

  export type PlatformSettingGroupByOutputType = {
    id: string
    key: string
    value: string
    updatedAt: Date
    _count: PlatformSettingCountAggregateOutputType | null
    _min: PlatformSettingMinAggregateOutputType | null
    _max: PlatformSettingMaxAggregateOutputType | null
  }

  type GetPlatformSettingGroupByPayload<T extends PlatformSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformSettingGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformSettingGroupByOutputType[P]>
        }
      >
    >


  export type PlatformSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platformSetting"]>

  export type PlatformSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platformSetting"]>

  export type PlatformSettingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }


  export type $PlatformSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlatformSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      updatedAt: Date
    }, ExtArgs["result"]["platformSetting"]>
    composites: {}
  }

  type PlatformSettingGetPayload<S extends boolean | null | undefined | PlatformSettingDefaultArgs> = $Result.GetResult<Prisma.$PlatformSettingPayload, S>

  type PlatformSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlatformSettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlatformSettingCountAggregateInputType | true
    }

  export interface PlatformSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlatformSetting'], meta: { name: 'PlatformSetting' } }
    /**
     * Find zero or one PlatformSetting that matches the filter.
     * @param {PlatformSettingFindUniqueArgs} args - Arguments to find a PlatformSetting
     * @example
     * // Get one PlatformSetting
     * const platformSetting = await prisma.platformSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformSettingFindUniqueArgs>(args: SelectSubset<T, PlatformSettingFindUniqueArgs<ExtArgs>>): Prisma__PlatformSettingClient<$Result.GetResult<Prisma.$PlatformSettingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PlatformSetting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlatformSettingFindUniqueOrThrowArgs} args - Arguments to find a PlatformSetting
     * @example
     * // Get one PlatformSetting
     * const platformSetting = await prisma.platformSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformSettingClient<$Result.GetResult<Prisma.$PlatformSettingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PlatformSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformSettingFindFirstArgs} args - Arguments to find a PlatformSetting
     * @example
     * // Get one PlatformSetting
     * const platformSetting = await prisma.platformSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformSettingFindFirstArgs>(args?: SelectSubset<T, PlatformSettingFindFirstArgs<ExtArgs>>): Prisma__PlatformSettingClient<$Result.GetResult<Prisma.$PlatformSettingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PlatformSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformSettingFindFirstOrThrowArgs} args - Arguments to find a PlatformSetting
     * @example
     * // Get one PlatformSetting
     * const platformSetting = await prisma.platformSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformSettingClient<$Result.GetResult<Prisma.$PlatformSettingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PlatformSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlatformSettings
     * const platformSettings = await prisma.platformSetting.findMany()
     * 
     * // Get first 10 PlatformSettings
     * const platformSettings = await prisma.platformSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformSettingWithIdOnly = await prisma.platformSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformSettingFindManyArgs>(args?: SelectSubset<T, PlatformSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformSettingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PlatformSetting.
     * @param {PlatformSettingCreateArgs} args - Arguments to create a PlatformSetting.
     * @example
     * // Create one PlatformSetting
     * const PlatformSetting = await prisma.platformSetting.create({
     *   data: {
     *     // ... data to create a PlatformSetting
     *   }
     * })
     * 
     */
    create<T extends PlatformSettingCreateArgs>(args: SelectSubset<T, PlatformSettingCreateArgs<ExtArgs>>): Prisma__PlatformSettingClient<$Result.GetResult<Prisma.$PlatformSettingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PlatformSettings.
     * @param {PlatformSettingCreateManyArgs} args - Arguments to create many PlatformSettings.
     * @example
     * // Create many PlatformSettings
     * const platformSetting = await prisma.platformSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformSettingCreateManyArgs>(args?: SelectSubset<T, PlatformSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlatformSettings and returns the data saved in the database.
     * @param {PlatformSettingCreateManyAndReturnArgs} args - Arguments to create many PlatformSettings.
     * @example
     * // Create many PlatformSettings
     * const platformSetting = await prisma.platformSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlatformSettings and only return the `id`
     * const platformSettingWithIdOnly = await prisma.platformSetting.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformSettingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PlatformSetting.
     * @param {PlatformSettingDeleteArgs} args - Arguments to delete one PlatformSetting.
     * @example
     * // Delete one PlatformSetting
     * const PlatformSetting = await prisma.platformSetting.delete({
     *   where: {
     *     // ... filter to delete one PlatformSetting
     *   }
     * })
     * 
     */
    delete<T extends PlatformSettingDeleteArgs>(args: SelectSubset<T, PlatformSettingDeleteArgs<ExtArgs>>): Prisma__PlatformSettingClient<$Result.GetResult<Prisma.$PlatformSettingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PlatformSetting.
     * @param {PlatformSettingUpdateArgs} args - Arguments to update one PlatformSetting.
     * @example
     * // Update one PlatformSetting
     * const platformSetting = await prisma.platformSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformSettingUpdateArgs>(args: SelectSubset<T, PlatformSettingUpdateArgs<ExtArgs>>): Prisma__PlatformSettingClient<$Result.GetResult<Prisma.$PlatformSettingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PlatformSettings.
     * @param {PlatformSettingDeleteManyArgs} args - Arguments to filter PlatformSettings to delete.
     * @example
     * // Delete a few PlatformSettings
     * const { count } = await prisma.platformSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformSettingDeleteManyArgs>(args?: SelectSubset<T, PlatformSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlatformSettings
     * const platformSetting = await prisma.platformSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformSettingUpdateManyArgs>(args: SelectSubset<T, PlatformSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlatformSetting.
     * @param {PlatformSettingUpsertArgs} args - Arguments to update or create a PlatformSetting.
     * @example
     * // Update or create a PlatformSetting
     * const platformSetting = await prisma.platformSetting.upsert({
     *   create: {
     *     // ... data to create a PlatformSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlatformSetting we want to update
     *   }
     * })
     */
    upsert<T extends PlatformSettingUpsertArgs>(args: SelectSubset<T, PlatformSettingUpsertArgs<ExtArgs>>): Prisma__PlatformSettingClient<$Result.GetResult<Prisma.$PlatformSettingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PlatformSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformSettingCountArgs} args - Arguments to filter PlatformSettings to count.
     * @example
     * // Count the number of PlatformSettings
     * const count = await prisma.platformSetting.count({
     *   where: {
     *     // ... the filter for the PlatformSettings we want to count
     *   }
     * })
    **/
    count<T extends PlatformSettingCountArgs>(
      args?: Subset<T, PlatformSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlatformSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatformSettingAggregateArgs>(args: Subset<T, PlatformSettingAggregateArgs>): Prisma.PrismaPromise<GetPlatformSettingAggregateType<T>>

    /**
     * Group by PlatformSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatformSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformSettingGroupByArgs['orderBy'] }
        : { orderBy?: PlatformSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatformSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlatformSetting model
   */
  readonly fields: PlatformSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlatformSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlatformSetting model
   */ 
  interface PlatformSettingFieldRefs {
    readonly id: FieldRef<"PlatformSetting", 'String'>
    readonly key: FieldRef<"PlatformSetting", 'String'>
    readonly value: FieldRef<"PlatformSetting", 'String'>
    readonly updatedAt: FieldRef<"PlatformSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlatformSetting findUnique
   */
  export type PlatformSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSetting
     */
    select?: PlatformSettingSelect<ExtArgs> | null
    /**
     * Filter, which PlatformSetting to fetch.
     */
    where: PlatformSettingWhereUniqueInput
  }

  /**
   * PlatformSetting findUniqueOrThrow
   */
  export type PlatformSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSetting
     */
    select?: PlatformSettingSelect<ExtArgs> | null
    /**
     * Filter, which PlatformSetting to fetch.
     */
    where: PlatformSettingWhereUniqueInput
  }

  /**
   * PlatformSetting findFirst
   */
  export type PlatformSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSetting
     */
    select?: PlatformSettingSelect<ExtArgs> | null
    /**
     * Filter, which PlatformSetting to fetch.
     */
    where?: PlatformSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformSettings to fetch.
     */
    orderBy?: PlatformSettingOrderByWithRelationInput | PlatformSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformSettings.
     */
    cursor?: PlatformSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformSettings.
     */
    distinct?: PlatformSettingScalarFieldEnum | PlatformSettingScalarFieldEnum[]
  }

  /**
   * PlatformSetting findFirstOrThrow
   */
  export type PlatformSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSetting
     */
    select?: PlatformSettingSelect<ExtArgs> | null
    /**
     * Filter, which PlatformSetting to fetch.
     */
    where?: PlatformSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformSettings to fetch.
     */
    orderBy?: PlatformSettingOrderByWithRelationInput | PlatformSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformSettings.
     */
    cursor?: PlatformSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformSettings.
     */
    distinct?: PlatformSettingScalarFieldEnum | PlatformSettingScalarFieldEnum[]
  }

  /**
   * PlatformSetting findMany
   */
  export type PlatformSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSetting
     */
    select?: PlatformSettingSelect<ExtArgs> | null
    /**
     * Filter, which PlatformSettings to fetch.
     */
    where?: PlatformSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformSettings to fetch.
     */
    orderBy?: PlatformSettingOrderByWithRelationInput | PlatformSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlatformSettings.
     */
    cursor?: PlatformSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformSettings.
     */
    skip?: number
    distinct?: PlatformSettingScalarFieldEnum | PlatformSettingScalarFieldEnum[]
  }

  /**
   * PlatformSetting create
   */
  export type PlatformSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSetting
     */
    select?: PlatformSettingSelect<ExtArgs> | null
    /**
     * The data needed to create a PlatformSetting.
     */
    data: XOR<PlatformSettingCreateInput, PlatformSettingUncheckedCreateInput>
  }

  /**
   * PlatformSetting createMany
   */
  export type PlatformSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlatformSettings.
     */
    data: PlatformSettingCreateManyInput | PlatformSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformSetting createManyAndReturn
   */
  export type PlatformSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSetting
     */
    select?: PlatformSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PlatformSettings.
     */
    data: PlatformSettingCreateManyInput | PlatformSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformSetting update
   */
  export type PlatformSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSetting
     */
    select?: PlatformSettingSelect<ExtArgs> | null
    /**
     * The data needed to update a PlatformSetting.
     */
    data: XOR<PlatformSettingUpdateInput, PlatformSettingUncheckedUpdateInput>
    /**
     * Choose, which PlatformSetting to update.
     */
    where: PlatformSettingWhereUniqueInput
  }

  /**
   * PlatformSetting updateMany
   */
  export type PlatformSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlatformSettings.
     */
    data: XOR<PlatformSettingUpdateManyMutationInput, PlatformSettingUncheckedUpdateManyInput>
    /**
     * Filter which PlatformSettings to update
     */
    where?: PlatformSettingWhereInput
  }

  /**
   * PlatformSetting upsert
   */
  export type PlatformSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSetting
     */
    select?: PlatformSettingSelect<ExtArgs> | null
    /**
     * The filter to search for the PlatformSetting to update in case it exists.
     */
    where: PlatformSettingWhereUniqueInput
    /**
     * In case the PlatformSetting found by the `where` argument doesn't exist, create a new PlatformSetting with this data.
     */
    create: XOR<PlatformSettingCreateInput, PlatformSettingUncheckedCreateInput>
    /**
     * In case the PlatformSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformSettingUpdateInput, PlatformSettingUncheckedUpdateInput>
  }

  /**
   * PlatformSetting delete
   */
  export type PlatformSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSetting
     */
    select?: PlatformSettingSelect<ExtArgs> | null
    /**
     * Filter which PlatformSetting to delete.
     */
    where: PlatformSettingWhereUniqueInput
  }

  /**
   * PlatformSetting deleteMany
   */
  export type PlatformSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformSettings to delete
     */
    where?: PlatformSettingWhereInput
  }

  /**
   * PlatformSetting without action
   */
  export type PlatformSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSetting
     */
    select?: PlatformSettingSelect<ExtArgs> | null
  }


  /**
   * Model Promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionAvgAggregateOutputType = {
    discountPercent: number | null
    maxDiscount: number | null
  }

  export type PromotionSumAggregateOutputType = {
    discountPercent: number | null
    maxDiscount: number | null
  }

  export type PromotionMinAggregateOutputType = {
    id: string | null
    code: string | null
    discountPercent: number | null
    maxDiscount: number | null
    validUntil: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionMaxAggregateOutputType = {
    id: string | null
    code: string | null
    discountPercent: number | null
    maxDiscount: number | null
    validUntil: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionCountAggregateOutputType = {
    id: number
    code: number
    discountPercent: number
    maxDiscount: number
    validUntil: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromotionAvgAggregateInputType = {
    discountPercent?: true
    maxDiscount?: true
  }

  export type PromotionSumAggregateInputType = {
    discountPercent?: true
    maxDiscount?: true
  }

  export type PromotionMinAggregateInputType = {
    id?: true
    code?: true
    discountPercent?: true
    maxDiscount?: true
    validUntil?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionMaxAggregateInputType = {
    id?: true
    code?: true
    discountPercent?: true
    maxDiscount?: true
    validUntil?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionCountAggregateInputType = {
    id?: true
    code?: true
    discountPercent?: true
    maxDiscount?: true
    validUntil?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotion to aggregate.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type PromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithAggregationInput | PromotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: PromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _avg?: PromotionAvgAggregateInputType
    _sum?: PromotionSumAggregateInputType
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    id: string
    code: string
    discountPercent: number
    maxDiscount: number | null
    validUntil: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type PromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discountPercent?: boolean
    maxDiscount?: boolean
    validUntil?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discountPercent?: boolean
    maxDiscount?: boolean
    validUntil?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectScalar = {
    id?: boolean
    code?: boolean
    discountPercent?: boolean
    maxDiscount?: boolean
    validUntil?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      discountPercent: number
      maxDiscount: number | null
      validUntil: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promotion"]>
    composites: {}
  }

  type PromotionGetPayload<S extends boolean | null | undefined | PromotionDefaultArgs> = $Result.GetResult<Prisma.$PromotionPayload, S>

  type PromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface PromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotion'], meta: { name: 'Promotion' } }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {PromotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotionFindUniqueArgs>(args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Promotion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotionFindFirstArgs>(args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionWithIdOnly = await prisma.promotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotionFindManyArgs>(args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Promotion.
     * @param {PromotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
     */
    create<T extends PromotionCreateArgs>(args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Promotions.
     * @param {PromotionCreateManyArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotionCreateManyArgs>(args?: SelectSubset<T, PromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promotions and returns the data saved in the database.
     * @param {PromotionCreateManyAndReturnArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promotions and only return the `id`
     * const promotionWithIdOnly = await prisma.promotion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromotionCreateManyAndReturnArgs>(args?: SelectSubset<T, PromotionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Promotion.
     * @param {PromotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
     */
    delete<T extends PromotionDeleteArgs>(args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Promotion.
     * @param {PromotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotionUpdateArgs>(args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Promotions.
     * @param {PromotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotionDeleteManyArgs>(args?: SelectSubset<T, PromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotionUpdateManyArgs>(args: SelectSubset<T, PromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotion.
     * @param {PromotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
     */
    upsert<T extends PromotionUpsertArgs>(args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends PromotionCountArgs>(
      args?: Subset<T, PromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotion model
   */
  readonly fields: PromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promotion model
   */ 
  interface PromotionFieldRefs {
    readonly id: FieldRef<"Promotion", 'String'>
    readonly code: FieldRef<"Promotion", 'String'>
    readonly discountPercent: FieldRef<"Promotion", 'Float'>
    readonly maxDiscount: FieldRef<"Promotion", 'Float'>
    readonly validUntil: FieldRef<"Promotion", 'DateTime'>
    readonly isActive: FieldRef<"Promotion", 'Boolean'>
    readonly createdAt: FieldRef<"Promotion", 'DateTime'>
    readonly updatedAt: FieldRef<"Promotion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promotion findUnique
   */
  export type PromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findUniqueOrThrow
   */
  export type PromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findFirst
   */
  export type PromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findFirstOrThrow
   */
  export type PromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findMany
   */
  export type PromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotions to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion create
   */
  export type PromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * The data needed to create a Promotion.
     */
    data: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
  }

  /**
   * Promotion createMany
   */
  export type PromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion createManyAndReturn
   */
  export type PromotionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion update
   */
  export type PromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * The data needed to update a Promotion.
     */
    data: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
    /**
     * Choose, which Promotion to update.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion updateMany
   */
  export type PromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
  }

  /**
   * Promotion upsert
   */
  export type PromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * The filter to search for the Promotion to update in case it exists.
     */
    where: PromotionWhereUniqueInput
    /**
     * In case the Promotion found by the `where` argument doesn't exist, create a new Promotion with this data.
     */
    create: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
    /**
     * In case the Promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
  }

  /**
   * Promotion delete
   */
  export type PromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter which Promotion to delete.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion deleteMany
   */
  export type PromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotions to delete
     */
    where?: PromotionWhereInput
  }

  /**
   * Promotion without action
   */
  export type PromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    amount: number | null
    setupFee: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    amount: number | null
    setupFee: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    planId: string | null
    duration: string | null
    status: string | null
    amount: number | null
    currency: string | null
    startDate: Date | null
    endDate: Date | null
    hasSetupAssistance: boolean | null
    setupFee: number | null
    paymentStatus: string | null
    paymentReference: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    planId: string | null
    duration: string | null
    status: string | null
    amount: number | null
    currency: string | null
    startDate: Date | null
    endDate: Date | null
    hasSetupAssistance: boolean | null
    setupFee: number | null
    paymentStatus: string | null
    paymentReference: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    customerId: number
    planId: number
    duration: number
    status: number
    amount: number
    currency: number
    startDate: number
    endDate: number
    hasSetupAssistance: number
    setupFee: number
    paymentStatus: number
    paymentReference: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    amount?: true
    setupFee?: true
  }

  export type SubscriptionSumAggregateInputType = {
    amount?: true
    setupFee?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    customerId?: true
    planId?: true
    duration?: true
    status?: true
    amount?: true
    currency?: true
    startDate?: true
    endDate?: true
    hasSetupAssistance?: true
    setupFee?: true
    paymentStatus?: true
    paymentReference?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    customerId?: true
    planId?: true
    duration?: true
    status?: true
    amount?: true
    currency?: true
    startDate?: true
    endDate?: true
    hasSetupAssistance?: true
    setupFee?: true
    paymentStatus?: true
    paymentReference?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    customerId?: true
    planId?: true
    duration?: true
    status?: true
    amount?: true
    currency?: true
    startDate?: true
    endDate?: true
    hasSetupAssistance?: true
    setupFee?: true
    paymentStatus?: true
    paymentReference?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    customerId: string
    planId: string
    duration: string
    status: string
    amount: number
    currency: string
    startDate: Date
    endDate: Date
    hasSetupAssistance: boolean
    setupFee: number
    paymentStatus: string
    paymentReference: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    planId?: boolean
    duration?: boolean
    status?: boolean
    amount?: boolean
    currency?: boolean
    startDate?: boolean
    endDate?: boolean
    hasSetupAssistance?: boolean
    setupFee?: boolean
    paymentStatus?: boolean
    paymentReference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    license?: boolean | Subscription$licenseArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    planId?: boolean
    duration?: boolean
    status?: boolean
    amount?: boolean
    currency?: boolean
    startDate?: boolean
    endDate?: boolean
    hasSetupAssistance?: boolean
    setupFee?: boolean
    paymentStatus?: boolean
    paymentReference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    customerId?: boolean
    planId?: boolean
    duration?: boolean
    status?: boolean
    amount?: boolean
    currency?: boolean
    startDate?: boolean
    endDate?: boolean
    hasSetupAssistance?: boolean
    setupFee?: boolean
    paymentStatus?: boolean
    paymentReference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    license?: boolean | Subscription$licenseArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
      license: Prisma.$LicensePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      planId: string
      duration: string
      status: string
      amount: number
      currency: string
      startDate: Date
      endDate: Date
      hasSetupAssistance: boolean
      setupFee: number
      paymentStatus: string
      paymentReference: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    license<T extends Subscription$licenseArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$licenseArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */ 
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly customerId: FieldRef<"Subscription", 'String'>
    readonly planId: FieldRef<"Subscription", 'String'>
    readonly duration: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly amount: FieldRef<"Subscription", 'Float'>
    readonly currency: FieldRef<"Subscription", 'String'>
    readonly startDate: FieldRef<"Subscription", 'DateTime'>
    readonly endDate: FieldRef<"Subscription", 'DateTime'>
    readonly hasSetupAssistance: FieldRef<"Subscription", 'Boolean'>
    readonly setupFee: FieldRef<"Subscription", 'Float'>
    readonly paymentStatus: FieldRef<"Subscription", 'String'>
    readonly paymentReference: FieldRef<"Subscription", 'String'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription.license
   */
  export type Subscription$licenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model License
   */

  export type AggregateLicense = {
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  export type LicenseMinAggregateOutputType = {
    id: string | null
    licenseKey: string | null
    customerId: string | null
    subscriptionId: string | null
    planTier: string | null
    boundDomain: string | null
    installationUuid: string | null
    status: string | null
    activatedAt: Date | null
    expiresAt: Date | null
    lastHeartbeatAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseMaxAggregateOutputType = {
    id: string | null
    licenseKey: string | null
    customerId: string | null
    subscriptionId: string | null
    planTier: string | null
    boundDomain: string | null
    installationUuid: string | null
    status: string | null
    activatedAt: Date | null
    expiresAt: Date | null
    lastHeartbeatAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseCountAggregateOutputType = {
    id: number
    licenseKey: number
    customerId: number
    subscriptionId: number
    planTier: number
    boundDomain: number
    installationUuid: number
    status: number
    activatedAt: number
    expiresAt: number
    lastHeartbeatAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LicenseMinAggregateInputType = {
    id?: true
    licenseKey?: true
    customerId?: true
    subscriptionId?: true
    planTier?: true
    boundDomain?: true
    installationUuid?: true
    status?: true
    activatedAt?: true
    expiresAt?: true
    lastHeartbeatAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseMaxAggregateInputType = {
    id?: true
    licenseKey?: true
    customerId?: true
    subscriptionId?: true
    planTier?: true
    boundDomain?: true
    installationUuid?: true
    status?: true
    activatedAt?: true
    expiresAt?: true
    lastHeartbeatAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseCountAggregateInputType = {
    id?: true
    licenseKey?: true
    customerId?: true
    subscriptionId?: true
    planTier?: true
    boundDomain?: true
    installationUuid?: true
    status?: true
    activatedAt?: true
    expiresAt?: true
    lastHeartbeatAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LicenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which License to aggregate.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licenses
    **/
    _count?: true | LicenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseMaxAggregateInputType
  }

  export type GetLicenseAggregateType<T extends LicenseAggregateArgs> = {
        [P in keyof T & keyof AggregateLicense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicense[P]>
      : GetScalarType<T[P], AggregateLicense[P]>
  }




  export type LicenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithAggregationInput | LicenseOrderByWithAggregationInput[]
    by: LicenseScalarFieldEnum[] | LicenseScalarFieldEnum
    having?: LicenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseCountAggregateInputType | true
    _min?: LicenseMinAggregateInputType
    _max?: LicenseMaxAggregateInputType
  }

  export type LicenseGroupByOutputType = {
    id: string
    licenseKey: string
    customerId: string
    subscriptionId: string
    planTier: string
    boundDomain: string | null
    installationUuid: string | null
    status: string
    activatedAt: Date | null
    expiresAt: Date
    lastHeartbeatAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  type GetLicenseGroupByPayload<T extends LicenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseGroupByOutputType[P]>
        }
      >
    >


  export type LicenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseKey?: boolean
    customerId?: boolean
    subscriptionId?: boolean
    planTier?: boolean
    boundDomain?: boolean
    installationUuid?: boolean
    status?: boolean
    activatedAt?: boolean
    expiresAt?: boolean
    lastHeartbeatAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    validationLogs?: boolean | License$validationLogsArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseKey?: boolean
    customerId?: boolean
    subscriptionId?: boolean
    planTier?: boolean
    boundDomain?: boolean
    installationUuid?: boolean
    status?: boolean
    activatedAt?: boolean
    expiresAt?: boolean
    lastHeartbeatAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectScalar = {
    id?: boolean
    licenseKey?: boolean
    customerId?: boolean
    subscriptionId?: boolean
    planTier?: boolean
    boundDomain?: boolean
    installationUuid?: boolean
    status?: boolean
    activatedAt?: boolean
    expiresAt?: boolean
    lastHeartbeatAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LicenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    validationLogs?: boolean | License$validationLogsArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LicenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }

  export type $LicensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "License"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
      validationLogs: Prisma.$LicenseValidationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licenseKey: string
      customerId: string
      subscriptionId: string
      planTier: string
      boundDomain: string | null
      installationUuid: string | null
      status: string
      activatedAt: Date | null
      expiresAt: Date
      lastHeartbeatAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["license"]>
    composites: {}
  }

  type LicenseGetPayload<S extends boolean | null | undefined | LicenseDefaultArgs> = $Result.GetResult<Prisma.$LicensePayload, S>

  type LicenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LicenseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LicenseCountAggregateInputType | true
    }

  export interface LicenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['License'], meta: { name: 'License' } }
    /**
     * Find zero or one License that matches the filter.
     * @param {LicenseFindUniqueArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseFindUniqueArgs>(args: SelectSubset<T, LicenseFindUniqueArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one License that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LicenseFindUniqueOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first License that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseFindFirstArgs>(args?: SelectSubset<T, LicenseFindFirstArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first License that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Licenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licenses
     * const licenses = await prisma.license.findMany()
     * 
     * // Get first 10 Licenses
     * const licenses = await prisma.license.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseWithIdOnly = await prisma.license.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseFindManyArgs>(args?: SelectSubset<T, LicenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a License.
     * @param {LicenseCreateArgs} args - Arguments to create a License.
     * @example
     * // Create one License
     * const License = await prisma.license.create({
     *   data: {
     *     // ... data to create a License
     *   }
     * })
     * 
     */
    create<T extends LicenseCreateArgs>(args: SelectSubset<T, LicenseCreateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Licenses.
     * @param {LicenseCreateManyArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseCreateManyArgs>(args?: SelectSubset<T, LicenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Licenses and returns the data saved in the database.
     * @param {LicenseCreateManyAndReturnArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Licenses and only return the `id`
     * const licenseWithIdOnly = await prisma.license.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a License.
     * @param {LicenseDeleteArgs} args - Arguments to delete one License.
     * @example
     * // Delete one License
     * const License = await prisma.license.delete({
     *   where: {
     *     // ... filter to delete one License
     *   }
     * })
     * 
     */
    delete<T extends LicenseDeleteArgs>(args: SelectSubset<T, LicenseDeleteArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one License.
     * @param {LicenseUpdateArgs} args - Arguments to update one License.
     * @example
     * // Update one License
     * const license = await prisma.license.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseUpdateArgs>(args: SelectSubset<T, LicenseUpdateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Licenses.
     * @param {LicenseDeleteManyArgs} args - Arguments to filter Licenses to delete.
     * @example
     * // Delete a few Licenses
     * const { count } = await prisma.license.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseDeleteManyArgs>(args?: SelectSubset<T, LicenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseUpdateManyArgs>(args: SelectSubset<T, LicenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one License.
     * @param {LicenseUpsertArgs} args - Arguments to update or create a License.
     * @example
     * // Update or create a License
     * const license = await prisma.license.upsert({
     *   create: {
     *     // ... data to create a License
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the License we want to update
     *   }
     * })
     */
    upsert<T extends LicenseUpsertArgs>(args: SelectSubset<T, LicenseUpsertArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseCountArgs} args - Arguments to filter Licenses to count.
     * @example
     * // Count the number of Licenses
     * const count = await prisma.license.count({
     *   where: {
     *     // ... the filter for the Licenses we want to count
     *   }
     * })
    **/
    count<T extends LicenseCountArgs>(
      args?: Subset<T, LicenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseAggregateArgs>(args: Subset<T, LicenseAggregateArgs>): Prisma.PrismaPromise<GetLicenseAggregateType<T>>

    /**
     * Group by License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseGroupByArgs['orderBy'] }
        : { orderBy?: LicenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the License model
   */
  readonly fields: LicenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for License.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    validationLogs<T extends License$validationLogsArgs<ExtArgs> = {}>(args?: Subset<T, License$validationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseValidationLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the License model
   */ 
  interface LicenseFieldRefs {
    readonly id: FieldRef<"License", 'String'>
    readonly licenseKey: FieldRef<"License", 'String'>
    readonly customerId: FieldRef<"License", 'String'>
    readonly subscriptionId: FieldRef<"License", 'String'>
    readonly planTier: FieldRef<"License", 'String'>
    readonly boundDomain: FieldRef<"License", 'String'>
    readonly installationUuid: FieldRef<"License", 'String'>
    readonly status: FieldRef<"License", 'String'>
    readonly activatedAt: FieldRef<"License", 'DateTime'>
    readonly expiresAt: FieldRef<"License", 'DateTime'>
    readonly lastHeartbeatAt: FieldRef<"License", 'DateTime'>
    readonly createdAt: FieldRef<"License", 'DateTime'>
    readonly updatedAt: FieldRef<"License", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * License findUnique
   */
  export type LicenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findUniqueOrThrow
   */
  export type LicenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findFirst
   */
  export type LicenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findFirstOrThrow
   */
  export type LicenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findMany
   */
  export type LicenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License create
   */
  export type LicenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to create a License.
     */
    data: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
  }

  /**
   * License createMany
   */
  export type LicenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * License createManyAndReturn
   */
  export type LicenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * License update
   */
  export type LicenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to update a License.
     */
    data: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
    /**
     * Choose, which License to update.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License updateMany
   */
  export type LicenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
  }

  /**
   * License upsert
   */
  export type LicenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The filter to search for the License to update in case it exists.
     */
    where: LicenseWhereUniqueInput
    /**
     * In case the License found by the `where` argument doesn't exist, create a new License with this data.
     */
    create: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
    /**
     * In case the License was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
  }

  /**
   * License delete
   */
  export type LicenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter which License to delete.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License deleteMany
   */
  export type LicenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licenses to delete
     */
    where?: LicenseWhereInput
  }

  /**
   * License.validationLogs
   */
  export type License$validationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseValidationLog
     */
    select?: LicenseValidationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseValidationLogInclude<ExtArgs> | null
    where?: LicenseValidationLogWhereInput
    orderBy?: LicenseValidationLogOrderByWithRelationInput | LicenseValidationLogOrderByWithRelationInput[]
    cursor?: LicenseValidationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseValidationLogScalarFieldEnum | LicenseValidationLogScalarFieldEnum[]
  }

  /**
   * License without action
   */
  export type LicenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
  }


  /**
   * Model LicenseValidationLog
   */

  export type AggregateLicenseValidationLog = {
    _count: LicenseValidationLogCountAggregateOutputType | null
    _min: LicenseValidationLogMinAggregateOutputType | null
    _max: LicenseValidationLogMaxAggregateOutputType | null
  }

  export type LicenseValidationLogMinAggregateOutputType = {
    id: string | null
    licenseId: string | null
    licenseKey: string | null
    domain: string | null
    installationUuid: string | null
    storeVersion: string | null
    ipAddress: string | null
    outcome: string | null
    timestamp: Date | null
  }

  export type LicenseValidationLogMaxAggregateOutputType = {
    id: string | null
    licenseId: string | null
    licenseKey: string | null
    domain: string | null
    installationUuid: string | null
    storeVersion: string | null
    ipAddress: string | null
    outcome: string | null
    timestamp: Date | null
  }

  export type LicenseValidationLogCountAggregateOutputType = {
    id: number
    licenseId: number
    licenseKey: number
    domain: number
    installationUuid: number
    storeVersion: number
    ipAddress: number
    outcome: number
    timestamp: number
    _all: number
  }


  export type LicenseValidationLogMinAggregateInputType = {
    id?: true
    licenseId?: true
    licenseKey?: true
    domain?: true
    installationUuid?: true
    storeVersion?: true
    ipAddress?: true
    outcome?: true
    timestamp?: true
  }

  export type LicenseValidationLogMaxAggregateInputType = {
    id?: true
    licenseId?: true
    licenseKey?: true
    domain?: true
    installationUuid?: true
    storeVersion?: true
    ipAddress?: true
    outcome?: true
    timestamp?: true
  }

  export type LicenseValidationLogCountAggregateInputType = {
    id?: true
    licenseId?: true
    licenseKey?: true
    domain?: true
    installationUuid?: true
    storeVersion?: true
    ipAddress?: true
    outcome?: true
    timestamp?: true
    _all?: true
  }

  export type LicenseValidationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseValidationLog to aggregate.
     */
    where?: LicenseValidationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseValidationLogs to fetch.
     */
    orderBy?: LicenseValidationLogOrderByWithRelationInput | LicenseValidationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseValidationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseValidationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseValidationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LicenseValidationLogs
    **/
    _count?: true | LicenseValidationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseValidationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseValidationLogMaxAggregateInputType
  }

  export type GetLicenseValidationLogAggregateType<T extends LicenseValidationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateLicenseValidationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicenseValidationLog[P]>
      : GetScalarType<T[P], AggregateLicenseValidationLog[P]>
  }




  export type LicenseValidationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseValidationLogWhereInput
    orderBy?: LicenseValidationLogOrderByWithAggregationInput | LicenseValidationLogOrderByWithAggregationInput[]
    by: LicenseValidationLogScalarFieldEnum[] | LicenseValidationLogScalarFieldEnum
    having?: LicenseValidationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseValidationLogCountAggregateInputType | true
    _min?: LicenseValidationLogMinAggregateInputType
    _max?: LicenseValidationLogMaxAggregateInputType
  }

  export type LicenseValidationLogGroupByOutputType = {
    id: string
    licenseId: string
    licenseKey: string
    domain: string | null
    installationUuid: string | null
    storeVersion: string | null
    ipAddress: string | null
    outcome: string
    timestamp: Date
    _count: LicenseValidationLogCountAggregateOutputType | null
    _min: LicenseValidationLogMinAggregateOutputType | null
    _max: LicenseValidationLogMaxAggregateOutputType | null
  }

  type GetLicenseValidationLogGroupByPayload<T extends LicenseValidationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseValidationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseValidationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseValidationLogGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseValidationLogGroupByOutputType[P]>
        }
      >
    >


  export type LicenseValidationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    licenseKey?: boolean
    domain?: boolean
    installationUuid?: boolean
    storeVersion?: boolean
    ipAddress?: boolean
    outcome?: boolean
    timestamp?: boolean
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseValidationLog"]>

  export type LicenseValidationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    licenseKey?: boolean
    domain?: boolean
    installationUuid?: boolean
    storeVersion?: boolean
    ipAddress?: boolean
    outcome?: boolean
    timestamp?: boolean
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseValidationLog"]>

  export type LicenseValidationLogSelectScalar = {
    id?: boolean
    licenseId?: boolean
    licenseKey?: boolean
    domain?: boolean
    installationUuid?: boolean
    storeVersion?: boolean
    ipAddress?: boolean
    outcome?: boolean
    timestamp?: boolean
  }

  export type LicenseValidationLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }
  export type LicenseValidationLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }

  export type $LicenseValidationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LicenseValidationLog"
    objects: {
      license: Prisma.$LicensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licenseId: string
      licenseKey: string
      domain: string | null
      installationUuid: string | null
      storeVersion: string | null
      ipAddress: string | null
      outcome: string
      timestamp: Date
    }, ExtArgs["result"]["licenseValidationLog"]>
    composites: {}
  }

  type LicenseValidationLogGetPayload<S extends boolean | null | undefined | LicenseValidationLogDefaultArgs> = $Result.GetResult<Prisma.$LicenseValidationLogPayload, S>

  type LicenseValidationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LicenseValidationLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LicenseValidationLogCountAggregateInputType | true
    }

  export interface LicenseValidationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LicenseValidationLog'], meta: { name: 'LicenseValidationLog' } }
    /**
     * Find zero or one LicenseValidationLog that matches the filter.
     * @param {LicenseValidationLogFindUniqueArgs} args - Arguments to find a LicenseValidationLog
     * @example
     * // Get one LicenseValidationLog
     * const licenseValidationLog = await prisma.licenseValidationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseValidationLogFindUniqueArgs>(args: SelectSubset<T, LicenseValidationLogFindUniqueArgs<ExtArgs>>): Prisma__LicenseValidationLogClient<$Result.GetResult<Prisma.$LicenseValidationLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LicenseValidationLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LicenseValidationLogFindUniqueOrThrowArgs} args - Arguments to find a LicenseValidationLog
     * @example
     * // Get one LicenseValidationLog
     * const licenseValidationLog = await prisma.licenseValidationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseValidationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseValidationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseValidationLogClient<$Result.GetResult<Prisma.$LicenseValidationLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LicenseValidationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseValidationLogFindFirstArgs} args - Arguments to find a LicenseValidationLog
     * @example
     * // Get one LicenseValidationLog
     * const licenseValidationLog = await prisma.licenseValidationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseValidationLogFindFirstArgs>(args?: SelectSubset<T, LicenseValidationLogFindFirstArgs<ExtArgs>>): Prisma__LicenseValidationLogClient<$Result.GetResult<Prisma.$LicenseValidationLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LicenseValidationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseValidationLogFindFirstOrThrowArgs} args - Arguments to find a LicenseValidationLog
     * @example
     * // Get one LicenseValidationLog
     * const licenseValidationLog = await prisma.licenseValidationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseValidationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseValidationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseValidationLogClient<$Result.GetResult<Prisma.$LicenseValidationLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LicenseValidationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseValidationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LicenseValidationLogs
     * const licenseValidationLogs = await prisma.licenseValidationLog.findMany()
     * 
     * // Get first 10 LicenseValidationLogs
     * const licenseValidationLogs = await prisma.licenseValidationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseValidationLogWithIdOnly = await prisma.licenseValidationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseValidationLogFindManyArgs>(args?: SelectSubset<T, LicenseValidationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseValidationLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LicenseValidationLog.
     * @param {LicenseValidationLogCreateArgs} args - Arguments to create a LicenseValidationLog.
     * @example
     * // Create one LicenseValidationLog
     * const LicenseValidationLog = await prisma.licenseValidationLog.create({
     *   data: {
     *     // ... data to create a LicenseValidationLog
     *   }
     * })
     * 
     */
    create<T extends LicenseValidationLogCreateArgs>(args: SelectSubset<T, LicenseValidationLogCreateArgs<ExtArgs>>): Prisma__LicenseValidationLogClient<$Result.GetResult<Prisma.$LicenseValidationLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LicenseValidationLogs.
     * @param {LicenseValidationLogCreateManyArgs} args - Arguments to create many LicenseValidationLogs.
     * @example
     * // Create many LicenseValidationLogs
     * const licenseValidationLog = await prisma.licenseValidationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseValidationLogCreateManyArgs>(args?: SelectSubset<T, LicenseValidationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LicenseValidationLogs and returns the data saved in the database.
     * @param {LicenseValidationLogCreateManyAndReturnArgs} args - Arguments to create many LicenseValidationLogs.
     * @example
     * // Create many LicenseValidationLogs
     * const licenseValidationLog = await prisma.licenseValidationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LicenseValidationLogs and only return the `id`
     * const licenseValidationLogWithIdOnly = await prisma.licenseValidationLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseValidationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseValidationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseValidationLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LicenseValidationLog.
     * @param {LicenseValidationLogDeleteArgs} args - Arguments to delete one LicenseValidationLog.
     * @example
     * // Delete one LicenseValidationLog
     * const LicenseValidationLog = await prisma.licenseValidationLog.delete({
     *   where: {
     *     // ... filter to delete one LicenseValidationLog
     *   }
     * })
     * 
     */
    delete<T extends LicenseValidationLogDeleteArgs>(args: SelectSubset<T, LicenseValidationLogDeleteArgs<ExtArgs>>): Prisma__LicenseValidationLogClient<$Result.GetResult<Prisma.$LicenseValidationLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LicenseValidationLog.
     * @param {LicenseValidationLogUpdateArgs} args - Arguments to update one LicenseValidationLog.
     * @example
     * // Update one LicenseValidationLog
     * const licenseValidationLog = await prisma.licenseValidationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseValidationLogUpdateArgs>(args: SelectSubset<T, LicenseValidationLogUpdateArgs<ExtArgs>>): Prisma__LicenseValidationLogClient<$Result.GetResult<Prisma.$LicenseValidationLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LicenseValidationLogs.
     * @param {LicenseValidationLogDeleteManyArgs} args - Arguments to filter LicenseValidationLogs to delete.
     * @example
     * // Delete a few LicenseValidationLogs
     * const { count } = await prisma.licenseValidationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseValidationLogDeleteManyArgs>(args?: SelectSubset<T, LicenseValidationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicenseValidationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseValidationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LicenseValidationLogs
     * const licenseValidationLog = await prisma.licenseValidationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseValidationLogUpdateManyArgs>(args: SelectSubset<T, LicenseValidationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LicenseValidationLog.
     * @param {LicenseValidationLogUpsertArgs} args - Arguments to update or create a LicenseValidationLog.
     * @example
     * // Update or create a LicenseValidationLog
     * const licenseValidationLog = await prisma.licenseValidationLog.upsert({
     *   create: {
     *     // ... data to create a LicenseValidationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LicenseValidationLog we want to update
     *   }
     * })
     */
    upsert<T extends LicenseValidationLogUpsertArgs>(args: SelectSubset<T, LicenseValidationLogUpsertArgs<ExtArgs>>): Prisma__LicenseValidationLogClient<$Result.GetResult<Prisma.$LicenseValidationLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LicenseValidationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseValidationLogCountArgs} args - Arguments to filter LicenseValidationLogs to count.
     * @example
     * // Count the number of LicenseValidationLogs
     * const count = await prisma.licenseValidationLog.count({
     *   where: {
     *     // ... the filter for the LicenseValidationLogs we want to count
     *   }
     * })
    **/
    count<T extends LicenseValidationLogCountArgs>(
      args?: Subset<T, LicenseValidationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseValidationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LicenseValidationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseValidationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseValidationLogAggregateArgs>(args: Subset<T, LicenseValidationLogAggregateArgs>): Prisma.PrismaPromise<GetLicenseValidationLogAggregateType<T>>

    /**
     * Group by LicenseValidationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseValidationLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenseValidationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseValidationLogGroupByArgs['orderBy'] }
        : { orderBy?: LicenseValidationLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenseValidationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseValidationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LicenseValidationLog model
   */
  readonly fields: LicenseValidationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LicenseValidationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseValidationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    license<T extends LicenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicenseDefaultArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LicenseValidationLog model
   */ 
  interface LicenseValidationLogFieldRefs {
    readonly id: FieldRef<"LicenseValidationLog", 'String'>
    readonly licenseId: FieldRef<"LicenseValidationLog", 'String'>
    readonly licenseKey: FieldRef<"LicenseValidationLog", 'String'>
    readonly domain: FieldRef<"LicenseValidationLog", 'String'>
    readonly installationUuid: FieldRef<"LicenseValidationLog", 'String'>
    readonly storeVersion: FieldRef<"LicenseValidationLog", 'String'>
    readonly ipAddress: FieldRef<"LicenseValidationLog", 'String'>
    readonly outcome: FieldRef<"LicenseValidationLog", 'String'>
    readonly timestamp: FieldRef<"LicenseValidationLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LicenseValidationLog findUnique
   */
  export type LicenseValidationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseValidationLog
     */
    select?: LicenseValidationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseValidationLogInclude<ExtArgs> | null
    /**
     * Filter, which LicenseValidationLog to fetch.
     */
    where: LicenseValidationLogWhereUniqueInput
  }

  /**
   * LicenseValidationLog findUniqueOrThrow
   */
  export type LicenseValidationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseValidationLog
     */
    select?: LicenseValidationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseValidationLogInclude<ExtArgs> | null
    /**
     * Filter, which LicenseValidationLog to fetch.
     */
    where: LicenseValidationLogWhereUniqueInput
  }

  /**
   * LicenseValidationLog findFirst
   */
  export type LicenseValidationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseValidationLog
     */
    select?: LicenseValidationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseValidationLogInclude<ExtArgs> | null
    /**
     * Filter, which LicenseValidationLog to fetch.
     */
    where?: LicenseValidationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseValidationLogs to fetch.
     */
    orderBy?: LicenseValidationLogOrderByWithRelationInput | LicenseValidationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseValidationLogs.
     */
    cursor?: LicenseValidationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseValidationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseValidationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseValidationLogs.
     */
    distinct?: LicenseValidationLogScalarFieldEnum | LicenseValidationLogScalarFieldEnum[]
  }

  /**
   * LicenseValidationLog findFirstOrThrow
   */
  export type LicenseValidationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseValidationLog
     */
    select?: LicenseValidationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseValidationLogInclude<ExtArgs> | null
    /**
     * Filter, which LicenseValidationLog to fetch.
     */
    where?: LicenseValidationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseValidationLogs to fetch.
     */
    orderBy?: LicenseValidationLogOrderByWithRelationInput | LicenseValidationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseValidationLogs.
     */
    cursor?: LicenseValidationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseValidationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseValidationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseValidationLogs.
     */
    distinct?: LicenseValidationLogScalarFieldEnum | LicenseValidationLogScalarFieldEnum[]
  }

  /**
   * LicenseValidationLog findMany
   */
  export type LicenseValidationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseValidationLog
     */
    select?: LicenseValidationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseValidationLogInclude<ExtArgs> | null
    /**
     * Filter, which LicenseValidationLogs to fetch.
     */
    where?: LicenseValidationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseValidationLogs to fetch.
     */
    orderBy?: LicenseValidationLogOrderByWithRelationInput | LicenseValidationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LicenseValidationLogs.
     */
    cursor?: LicenseValidationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseValidationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseValidationLogs.
     */
    skip?: number
    distinct?: LicenseValidationLogScalarFieldEnum | LicenseValidationLogScalarFieldEnum[]
  }

  /**
   * LicenseValidationLog create
   */
  export type LicenseValidationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseValidationLog
     */
    select?: LicenseValidationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseValidationLogInclude<ExtArgs> | null
    /**
     * The data needed to create a LicenseValidationLog.
     */
    data: XOR<LicenseValidationLogCreateInput, LicenseValidationLogUncheckedCreateInput>
  }

  /**
   * LicenseValidationLog createMany
   */
  export type LicenseValidationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LicenseValidationLogs.
     */
    data: LicenseValidationLogCreateManyInput | LicenseValidationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicenseValidationLog createManyAndReturn
   */
  export type LicenseValidationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseValidationLog
     */
    select?: LicenseValidationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LicenseValidationLogs.
     */
    data: LicenseValidationLogCreateManyInput | LicenseValidationLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseValidationLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LicenseValidationLog update
   */
  export type LicenseValidationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseValidationLog
     */
    select?: LicenseValidationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseValidationLogInclude<ExtArgs> | null
    /**
     * The data needed to update a LicenseValidationLog.
     */
    data: XOR<LicenseValidationLogUpdateInput, LicenseValidationLogUncheckedUpdateInput>
    /**
     * Choose, which LicenseValidationLog to update.
     */
    where: LicenseValidationLogWhereUniqueInput
  }

  /**
   * LicenseValidationLog updateMany
   */
  export type LicenseValidationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LicenseValidationLogs.
     */
    data: XOR<LicenseValidationLogUpdateManyMutationInput, LicenseValidationLogUncheckedUpdateManyInput>
    /**
     * Filter which LicenseValidationLogs to update
     */
    where?: LicenseValidationLogWhereInput
  }

  /**
   * LicenseValidationLog upsert
   */
  export type LicenseValidationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseValidationLog
     */
    select?: LicenseValidationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseValidationLogInclude<ExtArgs> | null
    /**
     * The filter to search for the LicenseValidationLog to update in case it exists.
     */
    where: LicenseValidationLogWhereUniqueInput
    /**
     * In case the LicenseValidationLog found by the `where` argument doesn't exist, create a new LicenseValidationLog with this data.
     */
    create: XOR<LicenseValidationLogCreateInput, LicenseValidationLogUncheckedCreateInput>
    /**
     * In case the LicenseValidationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseValidationLogUpdateInput, LicenseValidationLogUncheckedUpdateInput>
  }

  /**
   * LicenseValidationLog delete
   */
  export type LicenseValidationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseValidationLog
     */
    select?: LicenseValidationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseValidationLogInclude<ExtArgs> | null
    /**
     * Filter which LicenseValidationLog to delete.
     */
    where: LicenseValidationLogWhereUniqueInput
  }

  /**
   * LicenseValidationLog deleteMany
   */
  export type LicenseValidationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseValidationLogs to delete
     */
    where?: LicenseValidationLogWhereInput
  }

  /**
   * LicenseValidationLog without action
   */
  export type LicenseValidationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseValidationLog
     */
    select?: LicenseValidationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseValidationLogInclude<ExtArgs> | null
  }


  /**
   * Model SoftwareRelease
   */

  export type AggregateSoftwareRelease = {
    _count: SoftwareReleaseCountAggregateOutputType | null
    _min: SoftwareReleaseMinAggregateOutputType | null
    _max: SoftwareReleaseMaxAggregateOutputType | null
  }

  export type SoftwareReleaseMinAggregateOutputType = {
    id: string | null
    version: string | null
    releaseDate: Date | null
    isLatest: boolean | null
    isSecurityUpdate: boolean | null
    changelog: string | null
    downloadUrl: string | null
    createdAt: Date | null
  }

  export type SoftwareReleaseMaxAggregateOutputType = {
    id: string | null
    version: string | null
    releaseDate: Date | null
    isLatest: boolean | null
    isSecurityUpdate: boolean | null
    changelog: string | null
    downloadUrl: string | null
    createdAt: Date | null
  }

  export type SoftwareReleaseCountAggregateOutputType = {
    id: number
    version: number
    releaseDate: number
    isLatest: number
    isSecurityUpdate: number
    changelog: number
    downloadUrl: number
    createdAt: number
    _all: number
  }


  export type SoftwareReleaseMinAggregateInputType = {
    id?: true
    version?: true
    releaseDate?: true
    isLatest?: true
    isSecurityUpdate?: true
    changelog?: true
    downloadUrl?: true
    createdAt?: true
  }

  export type SoftwareReleaseMaxAggregateInputType = {
    id?: true
    version?: true
    releaseDate?: true
    isLatest?: true
    isSecurityUpdate?: true
    changelog?: true
    downloadUrl?: true
    createdAt?: true
  }

  export type SoftwareReleaseCountAggregateInputType = {
    id?: true
    version?: true
    releaseDate?: true
    isLatest?: true
    isSecurityUpdate?: true
    changelog?: true
    downloadUrl?: true
    createdAt?: true
    _all?: true
  }

  export type SoftwareReleaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SoftwareRelease to aggregate.
     */
    where?: SoftwareReleaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoftwareReleases to fetch.
     */
    orderBy?: SoftwareReleaseOrderByWithRelationInput | SoftwareReleaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SoftwareReleaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoftwareReleases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoftwareReleases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SoftwareReleases
    **/
    _count?: true | SoftwareReleaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoftwareReleaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoftwareReleaseMaxAggregateInputType
  }

  export type GetSoftwareReleaseAggregateType<T extends SoftwareReleaseAggregateArgs> = {
        [P in keyof T & keyof AggregateSoftwareRelease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSoftwareRelease[P]>
      : GetScalarType<T[P], AggregateSoftwareRelease[P]>
  }




  export type SoftwareReleaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoftwareReleaseWhereInput
    orderBy?: SoftwareReleaseOrderByWithAggregationInput | SoftwareReleaseOrderByWithAggregationInput[]
    by: SoftwareReleaseScalarFieldEnum[] | SoftwareReleaseScalarFieldEnum
    having?: SoftwareReleaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoftwareReleaseCountAggregateInputType | true
    _min?: SoftwareReleaseMinAggregateInputType
    _max?: SoftwareReleaseMaxAggregateInputType
  }

  export type SoftwareReleaseGroupByOutputType = {
    id: string
    version: string
    releaseDate: Date
    isLatest: boolean
    isSecurityUpdate: boolean
    changelog: string
    downloadUrl: string | null
    createdAt: Date
    _count: SoftwareReleaseCountAggregateOutputType | null
    _min: SoftwareReleaseMinAggregateOutputType | null
    _max: SoftwareReleaseMaxAggregateOutputType | null
  }

  type GetSoftwareReleaseGroupByPayload<T extends SoftwareReleaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoftwareReleaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoftwareReleaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoftwareReleaseGroupByOutputType[P]>
            : GetScalarType<T[P], SoftwareReleaseGroupByOutputType[P]>
        }
      >
    >


  export type SoftwareReleaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    releaseDate?: boolean
    isLatest?: boolean
    isSecurityUpdate?: boolean
    changelog?: boolean
    downloadUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["softwareRelease"]>

  export type SoftwareReleaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    releaseDate?: boolean
    isLatest?: boolean
    isSecurityUpdate?: boolean
    changelog?: boolean
    downloadUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["softwareRelease"]>

  export type SoftwareReleaseSelectScalar = {
    id?: boolean
    version?: boolean
    releaseDate?: boolean
    isLatest?: boolean
    isSecurityUpdate?: boolean
    changelog?: boolean
    downloadUrl?: boolean
    createdAt?: boolean
  }


  export type $SoftwareReleasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SoftwareRelease"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      version: string
      releaseDate: Date
      isLatest: boolean
      isSecurityUpdate: boolean
      changelog: string
      downloadUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["softwareRelease"]>
    composites: {}
  }

  type SoftwareReleaseGetPayload<S extends boolean | null | undefined | SoftwareReleaseDefaultArgs> = $Result.GetResult<Prisma.$SoftwareReleasePayload, S>

  type SoftwareReleaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SoftwareReleaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SoftwareReleaseCountAggregateInputType | true
    }

  export interface SoftwareReleaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SoftwareRelease'], meta: { name: 'SoftwareRelease' } }
    /**
     * Find zero or one SoftwareRelease that matches the filter.
     * @param {SoftwareReleaseFindUniqueArgs} args - Arguments to find a SoftwareRelease
     * @example
     * // Get one SoftwareRelease
     * const softwareRelease = await prisma.softwareRelease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SoftwareReleaseFindUniqueArgs>(args: SelectSubset<T, SoftwareReleaseFindUniqueArgs<ExtArgs>>): Prisma__SoftwareReleaseClient<$Result.GetResult<Prisma.$SoftwareReleasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SoftwareRelease that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SoftwareReleaseFindUniqueOrThrowArgs} args - Arguments to find a SoftwareRelease
     * @example
     * // Get one SoftwareRelease
     * const softwareRelease = await prisma.softwareRelease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SoftwareReleaseFindUniqueOrThrowArgs>(args: SelectSubset<T, SoftwareReleaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SoftwareReleaseClient<$Result.GetResult<Prisma.$SoftwareReleasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SoftwareRelease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftwareReleaseFindFirstArgs} args - Arguments to find a SoftwareRelease
     * @example
     * // Get one SoftwareRelease
     * const softwareRelease = await prisma.softwareRelease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SoftwareReleaseFindFirstArgs>(args?: SelectSubset<T, SoftwareReleaseFindFirstArgs<ExtArgs>>): Prisma__SoftwareReleaseClient<$Result.GetResult<Prisma.$SoftwareReleasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SoftwareRelease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftwareReleaseFindFirstOrThrowArgs} args - Arguments to find a SoftwareRelease
     * @example
     * // Get one SoftwareRelease
     * const softwareRelease = await prisma.softwareRelease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SoftwareReleaseFindFirstOrThrowArgs>(args?: SelectSubset<T, SoftwareReleaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__SoftwareReleaseClient<$Result.GetResult<Prisma.$SoftwareReleasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SoftwareReleases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftwareReleaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SoftwareReleases
     * const softwareReleases = await prisma.softwareRelease.findMany()
     * 
     * // Get first 10 SoftwareReleases
     * const softwareReleases = await prisma.softwareRelease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const softwareReleaseWithIdOnly = await prisma.softwareRelease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SoftwareReleaseFindManyArgs>(args?: SelectSubset<T, SoftwareReleaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoftwareReleasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SoftwareRelease.
     * @param {SoftwareReleaseCreateArgs} args - Arguments to create a SoftwareRelease.
     * @example
     * // Create one SoftwareRelease
     * const SoftwareRelease = await prisma.softwareRelease.create({
     *   data: {
     *     // ... data to create a SoftwareRelease
     *   }
     * })
     * 
     */
    create<T extends SoftwareReleaseCreateArgs>(args: SelectSubset<T, SoftwareReleaseCreateArgs<ExtArgs>>): Prisma__SoftwareReleaseClient<$Result.GetResult<Prisma.$SoftwareReleasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SoftwareReleases.
     * @param {SoftwareReleaseCreateManyArgs} args - Arguments to create many SoftwareReleases.
     * @example
     * // Create many SoftwareReleases
     * const softwareRelease = await prisma.softwareRelease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SoftwareReleaseCreateManyArgs>(args?: SelectSubset<T, SoftwareReleaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SoftwareReleases and returns the data saved in the database.
     * @param {SoftwareReleaseCreateManyAndReturnArgs} args - Arguments to create many SoftwareReleases.
     * @example
     * // Create many SoftwareReleases
     * const softwareRelease = await prisma.softwareRelease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SoftwareReleases and only return the `id`
     * const softwareReleaseWithIdOnly = await prisma.softwareRelease.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SoftwareReleaseCreateManyAndReturnArgs>(args?: SelectSubset<T, SoftwareReleaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoftwareReleasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SoftwareRelease.
     * @param {SoftwareReleaseDeleteArgs} args - Arguments to delete one SoftwareRelease.
     * @example
     * // Delete one SoftwareRelease
     * const SoftwareRelease = await prisma.softwareRelease.delete({
     *   where: {
     *     // ... filter to delete one SoftwareRelease
     *   }
     * })
     * 
     */
    delete<T extends SoftwareReleaseDeleteArgs>(args: SelectSubset<T, SoftwareReleaseDeleteArgs<ExtArgs>>): Prisma__SoftwareReleaseClient<$Result.GetResult<Prisma.$SoftwareReleasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SoftwareRelease.
     * @param {SoftwareReleaseUpdateArgs} args - Arguments to update one SoftwareRelease.
     * @example
     * // Update one SoftwareRelease
     * const softwareRelease = await prisma.softwareRelease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SoftwareReleaseUpdateArgs>(args: SelectSubset<T, SoftwareReleaseUpdateArgs<ExtArgs>>): Prisma__SoftwareReleaseClient<$Result.GetResult<Prisma.$SoftwareReleasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SoftwareReleases.
     * @param {SoftwareReleaseDeleteManyArgs} args - Arguments to filter SoftwareReleases to delete.
     * @example
     * // Delete a few SoftwareReleases
     * const { count } = await prisma.softwareRelease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SoftwareReleaseDeleteManyArgs>(args?: SelectSubset<T, SoftwareReleaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SoftwareReleases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftwareReleaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SoftwareReleases
     * const softwareRelease = await prisma.softwareRelease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SoftwareReleaseUpdateManyArgs>(args: SelectSubset<T, SoftwareReleaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SoftwareRelease.
     * @param {SoftwareReleaseUpsertArgs} args - Arguments to update or create a SoftwareRelease.
     * @example
     * // Update or create a SoftwareRelease
     * const softwareRelease = await prisma.softwareRelease.upsert({
     *   create: {
     *     // ... data to create a SoftwareRelease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SoftwareRelease we want to update
     *   }
     * })
     */
    upsert<T extends SoftwareReleaseUpsertArgs>(args: SelectSubset<T, SoftwareReleaseUpsertArgs<ExtArgs>>): Prisma__SoftwareReleaseClient<$Result.GetResult<Prisma.$SoftwareReleasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SoftwareReleases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftwareReleaseCountArgs} args - Arguments to filter SoftwareReleases to count.
     * @example
     * // Count the number of SoftwareReleases
     * const count = await prisma.softwareRelease.count({
     *   where: {
     *     // ... the filter for the SoftwareReleases we want to count
     *   }
     * })
    **/
    count<T extends SoftwareReleaseCountArgs>(
      args?: Subset<T, SoftwareReleaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoftwareReleaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SoftwareRelease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftwareReleaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SoftwareReleaseAggregateArgs>(args: Subset<T, SoftwareReleaseAggregateArgs>): Prisma.PrismaPromise<GetSoftwareReleaseAggregateType<T>>

    /**
     * Group by SoftwareRelease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftwareReleaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SoftwareReleaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SoftwareReleaseGroupByArgs['orderBy'] }
        : { orderBy?: SoftwareReleaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SoftwareReleaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoftwareReleaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SoftwareRelease model
   */
  readonly fields: SoftwareReleaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SoftwareRelease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SoftwareReleaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SoftwareRelease model
   */ 
  interface SoftwareReleaseFieldRefs {
    readonly id: FieldRef<"SoftwareRelease", 'String'>
    readonly version: FieldRef<"SoftwareRelease", 'String'>
    readonly releaseDate: FieldRef<"SoftwareRelease", 'DateTime'>
    readonly isLatest: FieldRef<"SoftwareRelease", 'Boolean'>
    readonly isSecurityUpdate: FieldRef<"SoftwareRelease", 'Boolean'>
    readonly changelog: FieldRef<"SoftwareRelease", 'String'>
    readonly downloadUrl: FieldRef<"SoftwareRelease", 'String'>
    readonly createdAt: FieldRef<"SoftwareRelease", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SoftwareRelease findUnique
   */
  export type SoftwareReleaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftwareRelease
     */
    select?: SoftwareReleaseSelect<ExtArgs> | null
    /**
     * Filter, which SoftwareRelease to fetch.
     */
    where: SoftwareReleaseWhereUniqueInput
  }

  /**
   * SoftwareRelease findUniqueOrThrow
   */
  export type SoftwareReleaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftwareRelease
     */
    select?: SoftwareReleaseSelect<ExtArgs> | null
    /**
     * Filter, which SoftwareRelease to fetch.
     */
    where: SoftwareReleaseWhereUniqueInput
  }

  /**
   * SoftwareRelease findFirst
   */
  export type SoftwareReleaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftwareRelease
     */
    select?: SoftwareReleaseSelect<ExtArgs> | null
    /**
     * Filter, which SoftwareRelease to fetch.
     */
    where?: SoftwareReleaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoftwareReleases to fetch.
     */
    orderBy?: SoftwareReleaseOrderByWithRelationInput | SoftwareReleaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SoftwareReleases.
     */
    cursor?: SoftwareReleaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoftwareReleases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoftwareReleases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SoftwareReleases.
     */
    distinct?: SoftwareReleaseScalarFieldEnum | SoftwareReleaseScalarFieldEnum[]
  }

  /**
   * SoftwareRelease findFirstOrThrow
   */
  export type SoftwareReleaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftwareRelease
     */
    select?: SoftwareReleaseSelect<ExtArgs> | null
    /**
     * Filter, which SoftwareRelease to fetch.
     */
    where?: SoftwareReleaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoftwareReleases to fetch.
     */
    orderBy?: SoftwareReleaseOrderByWithRelationInput | SoftwareReleaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SoftwareReleases.
     */
    cursor?: SoftwareReleaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoftwareReleases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoftwareReleases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SoftwareReleases.
     */
    distinct?: SoftwareReleaseScalarFieldEnum | SoftwareReleaseScalarFieldEnum[]
  }

  /**
   * SoftwareRelease findMany
   */
  export type SoftwareReleaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftwareRelease
     */
    select?: SoftwareReleaseSelect<ExtArgs> | null
    /**
     * Filter, which SoftwareReleases to fetch.
     */
    where?: SoftwareReleaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoftwareReleases to fetch.
     */
    orderBy?: SoftwareReleaseOrderByWithRelationInput | SoftwareReleaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SoftwareReleases.
     */
    cursor?: SoftwareReleaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoftwareReleases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoftwareReleases.
     */
    skip?: number
    distinct?: SoftwareReleaseScalarFieldEnum | SoftwareReleaseScalarFieldEnum[]
  }

  /**
   * SoftwareRelease create
   */
  export type SoftwareReleaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftwareRelease
     */
    select?: SoftwareReleaseSelect<ExtArgs> | null
    /**
     * The data needed to create a SoftwareRelease.
     */
    data: XOR<SoftwareReleaseCreateInput, SoftwareReleaseUncheckedCreateInput>
  }

  /**
   * SoftwareRelease createMany
   */
  export type SoftwareReleaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SoftwareReleases.
     */
    data: SoftwareReleaseCreateManyInput | SoftwareReleaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SoftwareRelease createManyAndReturn
   */
  export type SoftwareReleaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftwareRelease
     */
    select?: SoftwareReleaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SoftwareReleases.
     */
    data: SoftwareReleaseCreateManyInput | SoftwareReleaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SoftwareRelease update
   */
  export type SoftwareReleaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftwareRelease
     */
    select?: SoftwareReleaseSelect<ExtArgs> | null
    /**
     * The data needed to update a SoftwareRelease.
     */
    data: XOR<SoftwareReleaseUpdateInput, SoftwareReleaseUncheckedUpdateInput>
    /**
     * Choose, which SoftwareRelease to update.
     */
    where: SoftwareReleaseWhereUniqueInput
  }

  /**
   * SoftwareRelease updateMany
   */
  export type SoftwareReleaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SoftwareReleases.
     */
    data: XOR<SoftwareReleaseUpdateManyMutationInput, SoftwareReleaseUncheckedUpdateManyInput>
    /**
     * Filter which SoftwareReleases to update
     */
    where?: SoftwareReleaseWhereInput
  }

  /**
   * SoftwareRelease upsert
   */
  export type SoftwareReleaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftwareRelease
     */
    select?: SoftwareReleaseSelect<ExtArgs> | null
    /**
     * The filter to search for the SoftwareRelease to update in case it exists.
     */
    where: SoftwareReleaseWhereUniqueInput
    /**
     * In case the SoftwareRelease found by the `where` argument doesn't exist, create a new SoftwareRelease with this data.
     */
    create: XOR<SoftwareReleaseCreateInput, SoftwareReleaseUncheckedCreateInput>
    /**
     * In case the SoftwareRelease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SoftwareReleaseUpdateInput, SoftwareReleaseUncheckedUpdateInput>
  }

  /**
   * SoftwareRelease delete
   */
  export type SoftwareReleaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftwareRelease
     */
    select?: SoftwareReleaseSelect<ExtArgs> | null
    /**
     * Filter which SoftwareRelease to delete.
     */
    where: SoftwareReleaseWhereUniqueInput
  }

  /**
   * SoftwareRelease deleteMany
   */
  export type SoftwareReleaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SoftwareReleases to delete
     */
    where?: SoftwareReleaseWhereInput
  }

  /**
   * SoftwareRelease without action
   */
  export type SoftwareReleaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftwareRelease
     */
    select?: SoftwareReleaseSelect<ExtArgs> | null
  }


  /**
   * Model SupportTicket
   */

  export type AggregateSupportTicket = {
    _count: SupportTicketCountAggregateOutputType | null
    _min: SupportTicketMinAggregateOutputType | null
    _max: SupportTicketMaxAggregateOutputType | null
  }

  export type SupportTicketMinAggregateOutputType = {
    id: string | null
    ticketNumber: string | null
    customerId: string | null
    subject: string | null
    category: string | null
    priority: string | null
    status: string | null
    internalNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportTicketMaxAggregateOutputType = {
    id: string | null
    ticketNumber: string | null
    customerId: string | null
    subject: string | null
    category: string | null
    priority: string | null
    status: string | null
    internalNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportTicketCountAggregateOutputType = {
    id: number
    ticketNumber: number
    customerId: number
    subject: number
    category: number
    priority: number
    status: number
    internalNotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupportTicketMinAggregateInputType = {
    id?: true
    ticketNumber?: true
    customerId?: true
    subject?: true
    category?: true
    priority?: true
    status?: true
    internalNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportTicketMaxAggregateInputType = {
    id?: true
    ticketNumber?: true
    customerId?: true
    subject?: true
    category?: true
    priority?: true
    status?: true
    internalNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportTicketCountAggregateInputType = {
    id?: true
    ticketNumber?: true
    customerId?: true
    subject?: true
    category?: true
    priority?: true
    status?: true
    internalNotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupportTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportTicket to aggregate.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportTickets
    **/
    _count?: true | SupportTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportTicketMaxAggregateInputType
  }

  export type GetSupportTicketAggregateType<T extends SupportTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportTicket[P]>
      : GetScalarType<T[P], AggregateSupportTicket[P]>
  }




  export type SupportTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportTicketWhereInput
    orderBy?: SupportTicketOrderByWithAggregationInput | SupportTicketOrderByWithAggregationInput[]
    by: SupportTicketScalarFieldEnum[] | SupportTicketScalarFieldEnum
    having?: SupportTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportTicketCountAggregateInputType | true
    _min?: SupportTicketMinAggregateInputType
    _max?: SupportTicketMaxAggregateInputType
  }

  export type SupportTicketGroupByOutputType = {
    id: string
    ticketNumber: string
    customerId: string
    subject: string
    category: string
    priority: string
    status: string
    internalNotes: string | null
    createdAt: Date
    updatedAt: Date
    _count: SupportTicketCountAggregateOutputType | null
    _min: SupportTicketMinAggregateOutputType | null
    _max: SupportTicketMaxAggregateOutputType | null
  }

  type GetSupportTicketGroupByPayload<T extends SupportTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportTicketGroupByOutputType[P]>
            : GetScalarType<T[P], SupportTicketGroupByOutputType[P]>
        }
      >
    >


  export type SupportTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNumber?: boolean
    customerId?: boolean
    subject?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    internalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    messages?: boolean | SupportTicket$messagesArgs<ExtArgs>
    _count?: boolean | SupportTicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportTicket"]>

  export type SupportTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNumber?: boolean
    customerId?: boolean
    subject?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    internalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportTicket"]>

  export type SupportTicketSelectScalar = {
    id?: boolean
    ticketNumber?: boolean
    customerId?: boolean
    subject?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    internalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupportTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    messages?: boolean | SupportTicket$messagesArgs<ExtArgs>
    _count?: boolean | SupportTicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupportTicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $SupportTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportTicket"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      messages: Prisma.$TicketMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketNumber: string
      customerId: string
      subject: string
      category: string
      priority: string
      status: string
      internalNotes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supportTicket"]>
    composites: {}
  }

  type SupportTicketGetPayload<S extends boolean | null | undefined | SupportTicketDefaultArgs> = $Result.GetResult<Prisma.$SupportTicketPayload, S>

  type SupportTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupportTicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupportTicketCountAggregateInputType | true
    }

  export interface SupportTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportTicket'], meta: { name: 'SupportTicket' } }
    /**
     * Find zero or one SupportTicket that matches the filter.
     * @param {SupportTicketFindUniqueArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportTicketFindUniqueArgs>(args: SelectSubset<T, SupportTicketFindUniqueArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupportTicket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupportTicketFindUniqueOrThrowArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupportTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindFirstArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportTicketFindFirstArgs>(args?: SelectSubset<T, SupportTicketFindFirstArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupportTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindFirstOrThrowArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupportTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportTickets
     * const supportTickets = await prisma.supportTicket.findMany()
     * 
     * // Get first 10 SupportTickets
     * const supportTickets = await prisma.supportTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportTicketWithIdOnly = await prisma.supportTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportTicketFindManyArgs>(args?: SelectSubset<T, SupportTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupportTicket.
     * @param {SupportTicketCreateArgs} args - Arguments to create a SupportTicket.
     * @example
     * // Create one SupportTicket
     * const SupportTicket = await prisma.supportTicket.create({
     *   data: {
     *     // ... data to create a SupportTicket
     *   }
     * })
     * 
     */
    create<T extends SupportTicketCreateArgs>(args: SelectSubset<T, SupportTicketCreateArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupportTickets.
     * @param {SupportTicketCreateManyArgs} args - Arguments to create many SupportTickets.
     * @example
     * // Create many SupportTickets
     * const supportTicket = await prisma.supportTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportTicketCreateManyArgs>(args?: SelectSubset<T, SupportTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupportTickets and returns the data saved in the database.
     * @param {SupportTicketCreateManyAndReturnArgs} args - Arguments to create many SupportTickets.
     * @example
     * // Create many SupportTickets
     * const supportTicket = await prisma.supportTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupportTickets and only return the `id`
     * const supportTicketWithIdOnly = await prisma.supportTicket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupportTicket.
     * @param {SupportTicketDeleteArgs} args - Arguments to delete one SupportTicket.
     * @example
     * // Delete one SupportTicket
     * const SupportTicket = await prisma.supportTicket.delete({
     *   where: {
     *     // ... filter to delete one SupportTicket
     *   }
     * })
     * 
     */
    delete<T extends SupportTicketDeleteArgs>(args: SelectSubset<T, SupportTicketDeleteArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupportTicket.
     * @param {SupportTicketUpdateArgs} args - Arguments to update one SupportTicket.
     * @example
     * // Update one SupportTicket
     * const supportTicket = await prisma.supportTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportTicketUpdateArgs>(args: SelectSubset<T, SupportTicketUpdateArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupportTickets.
     * @param {SupportTicketDeleteManyArgs} args - Arguments to filter SupportTickets to delete.
     * @example
     * // Delete a few SupportTickets
     * const { count } = await prisma.supportTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportTicketDeleteManyArgs>(args?: SelectSubset<T, SupportTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportTickets
     * const supportTicket = await prisma.supportTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportTicketUpdateManyArgs>(args: SelectSubset<T, SupportTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupportTicket.
     * @param {SupportTicketUpsertArgs} args - Arguments to update or create a SupportTicket.
     * @example
     * // Update or create a SupportTicket
     * const supportTicket = await prisma.supportTicket.upsert({
     *   create: {
     *     // ... data to create a SupportTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportTicket we want to update
     *   }
     * })
     */
    upsert<T extends SupportTicketUpsertArgs>(args: SelectSubset<T, SupportTicketUpsertArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupportTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketCountArgs} args - Arguments to filter SupportTickets to count.
     * @example
     * // Count the number of SupportTickets
     * const count = await prisma.supportTicket.count({
     *   where: {
     *     // ... the filter for the SupportTickets we want to count
     *   }
     * })
    **/
    count<T extends SupportTicketCountArgs>(
      args?: Subset<T, SupportTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupportTicketAggregateArgs>(args: Subset<T, SupportTicketAggregateArgs>): Prisma.PrismaPromise<GetSupportTicketAggregateType<T>>

    /**
     * Group by SupportTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupportTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportTicketGroupByArgs['orderBy'] }
        : { orderBy?: SupportTicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupportTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportTicket model
   */
  readonly fields: SupportTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    messages<T extends SupportTicket$messagesArgs<ExtArgs> = {}>(args?: Subset<T, SupportTicket$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupportTicket model
   */ 
  interface SupportTicketFieldRefs {
    readonly id: FieldRef<"SupportTicket", 'String'>
    readonly ticketNumber: FieldRef<"SupportTicket", 'String'>
    readonly customerId: FieldRef<"SupportTicket", 'String'>
    readonly subject: FieldRef<"SupportTicket", 'String'>
    readonly category: FieldRef<"SupportTicket", 'String'>
    readonly priority: FieldRef<"SupportTicket", 'String'>
    readonly status: FieldRef<"SupportTicket", 'String'>
    readonly internalNotes: FieldRef<"SupportTicket", 'String'>
    readonly createdAt: FieldRef<"SupportTicket", 'DateTime'>
    readonly updatedAt: FieldRef<"SupportTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupportTicket findUnique
   */
  export type SupportTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket findUniqueOrThrow
   */
  export type SupportTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket findFirst
   */
  export type SupportTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportTickets.
     */
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket findFirstOrThrow
   */
  export type SupportTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportTickets.
     */
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket findMany
   */
  export type SupportTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTickets to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket create
   */
  export type SupportTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a SupportTicket.
     */
    data: XOR<SupportTicketCreateInput, SupportTicketUncheckedCreateInput>
  }

  /**
   * SupportTicket createMany
   */
  export type SupportTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportTickets.
     */
    data: SupportTicketCreateManyInput | SupportTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportTicket createManyAndReturn
   */
  export type SupportTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupportTickets.
     */
    data: SupportTicketCreateManyInput | SupportTicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupportTicket update
   */
  export type SupportTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a SupportTicket.
     */
    data: XOR<SupportTicketUpdateInput, SupportTicketUncheckedUpdateInput>
    /**
     * Choose, which SupportTicket to update.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket updateMany
   */
  export type SupportTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportTickets.
     */
    data: XOR<SupportTicketUpdateManyMutationInput, SupportTicketUncheckedUpdateManyInput>
    /**
     * Filter which SupportTickets to update
     */
    where?: SupportTicketWhereInput
  }

  /**
   * SupportTicket upsert
   */
  export type SupportTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the SupportTicket to update in case it exists.
     */
    where: SupportTicketWhereUniqueInput
    /**
     * In case the SupportTicket found by the `where` argument doesn't exist, create a new SupportTicket with this data.
     */
    create: XOR<SupportTicketCreateInput, SupportTicketUncheckedCreateInput>
    /**
     * In case the SupportTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportTicketUpdateInput, SupportTicketUncheckedUpdateInput>
  }

  /**
   * SupportTicket delete
   */
  export type SupportTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter which SupportTicket to delete.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket deleteMany
   */
  export type SupportTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportTickets to delete
     */
    where?: SupportTicketWhereInput
  }

  /**
   * SupportTicket.messages
   */
  export type SupportTicket$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    where?: TicketMessageWhereInput
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    cursor?: TicketMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * SupportTicket without action
   */
  export type SupportTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
  }


  /**
   * Model TicketMessage
   */

  export type AggregateTicketMessage = {
    _count: TicketMessageCountAggregateOutputType | null
    _min: TicketMessageMinAggregateOutputType | null
    _max: TicketMessageMaxAggregateOutputType | null
  }

  export type TicketMessageMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    senderType: string | null
    senderName: string | null
    message: string | null
    createdAt: Date | null
  }

  export type TicketMessageMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    senderType: string | null
    senderName: string | null
    message: string | null
    createdAt: Date | null
  }

  export type TicketMessageCountAggregateOutputType = {
    id: number
    ticketId: number
    senderType: number
    senderName: number
    message: number
    createdAt: number
    _all: number
  }


  export type TicketMessageMinAggregateInputType = {
    id?: true
    ticketId?: true
    senderType?: true
    senderName?: true
    message?: true
    createdAt?: true
  }

  export type TicketMessageMaxAggregateInputType = {
    id?: true
    ticketId?: true
    senderType?: true
    senderName?: true
    message?: true
    createdAt?: true
  }

  export type TicketMessageCountAggregateInputType = {
    id?: true
    ticketId?: true
    senderType?: true
    senderName?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type TicketMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketMessage to aggregate.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketMessages
    **/
    _count?: true | TicketMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMessageMaxAggregateInputType
  }

  export type GetTicketMessageAggregateType<T extends TicketMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketMessage[P]>
      : GetScalarType<T[P], AggregateTicketMessage[P]>
  }




  export type TicketMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketMessageWhereInput
    orderBy?: TicketMessageOrderByWithAggregationInput | TicketMessageOrderByWithAggregationInput[]
    by: TicketMessageScalarFieldEnum[] | TicketMessageScalarFieldEnum
    having?: TicketMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketMessageCountAggregateInputType | true
    _min?: TicketMessageMinAggregateInputType
    _max?: TicketMessageMaxAggregateInputType
  }

  export type TicketMessageGroupByOutputType = {
    id: string
    ticketId: string
    senderType: string
    senderName: string
    message: string
    createdAt: Date
    _count: TicketMessageCountAggregateOutputType | null
    _min: TicketMessageMinAggregateOutputType | null
    _max: TicketMessageMaxAggregateOutputType | null
  }

  type GetTicketMessageGroupByPayload<T extends TicketMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketMessageGroupByOutputType[P]>
            : GetScalarType<T[P], TicketMessageGroupByOutputType[P]>
        }
      >
    >


  export type TicketMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    senderType?: boolean
    senderName?: boolean
    message?: boolean
    createdAt?: boolean
    ticket?: boolean | SupportTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketMessage"]>

  export type TicketMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    senderType?: boolean
    senderName?: boolean
    message?: boolean
    createdAt?: boolean
    ticket?: boolean | SupportTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketMessage"]>

  export type TicketMessageSelectScalar = {
    id?: boolean
    ticketId?: boolean
    senderType?: boolean
    senderName?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type TicketMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | SupportTicketDefaultArgs<ExtArgs>
  }
  export type TicketMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | SupportTicketDefaultArgs<ExtArgs>
  }

  export type $TicketMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketMessage"
    objects: {
      ticket: Prisma.$SupportTicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      senderType: string
      senderName: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["ticketMessage"]>
    composites: {}
  }

  type TicketMessageGetPayload<S extends boolean | null | undefined | TicketMessageDefaultArgs> = $Result.GetResult<Prisma.$TicketMessagePayload, S>

  type TicketMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketMessageCountAggregateInputType | true
    }

  export interface TicketMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketMessage'], meta: { name: 'TicketMessage' } }
    /**
     * Find zero or one TicketMessage that matches the filter.
     * @param {TicketMessageFindUniqueArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketMessageFindUniqueArgs>(args: SelectSubset<T, TicketMessageFindUniqueArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TicketMessage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketMessageFindUniqueOrThrowArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TicketMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindFirstArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketMessageFindFirstArgs>(args?: SelectSubset<T, TicketMessageFindFirstArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TicketMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindFirstOrThrowArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TicketMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketMessages
     * const ticketMessages = await prisma.ticketMessage.findMany()
     * 
     * // Get first 10 TicketMessages
     * const ticketMessages = await prisma.ticketMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketMessageWithIdOnly = await prisma.ticketMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketMessageFindManyArgs>(args?: SelectSubset<T, TicketMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TicketMessage.
     * @param {TicketMessageCreateArgs} args - Arguments to create a TicketMessage.
     * @example
     * // Create one TicketMessage
     * const TicketMessage = await prisma.ticketMessage.create({
     *   data: {
     *     // ... data to create a TicketMessage
     *   }
     * })
     * 
     */
    create<T extends TicketMessageCreateArgs>(args: SelectSubset<T, TicketMessageCreateArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TicketMessages.
     * @param {TicketMessageCreateManyArgs} args - Arguments to create many TicketMessages.
     * @example
     * // Create many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketMessageCreateManyArgs>(args?: SelectSubset<T, TicketMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketMessages and returns the data saved in the database.
     * @param {TicketMessageCreateManyAndReturnArgs} args - Arguments to create many TicketMessages.
     * @example
     * // Create many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketMessages and only return the `id`
     * const ticketMessageWithIdOnly = await prisma.ticketMessage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TicketMessage.
     * @param {TicketMessageDeleteArgs} args - Arguments to delete one TicketMessage.
     * @example
     * // Delete one TicketMessage
     * const TicketMessage = await prisma.ticketMessage.delete({
     *   where: {
     *     // ... filter to delete one TicketMessage
     *   }
     * })
     * 
     */
    delete<T extends TicketMessageDeleteArgs>(args: SelectSubset<T, TicketMessageDeleteArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TicketMessage.
     * @param {TicketMessageUpdateArgs} args - Arguments to update one TicketMessage.
     * @example
     * // Update one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketMessageUpdateArgs>(args: SelectSubset<T, TicketMessageUpdateArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TicketMessages.
     * @param {TicketMessageDeleteManyArgs} args - Arguments to filter TicketMessages to delete.
     * @example
     * // Delete a few TicketMessages
     * const { count } = await prisma.ticketMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketMessageDeleteManyArgs>(args?: SelectSubset<T, TicketMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketMessageUpdateManyArgs>(args: SelectSubset<T, TicketMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketMessage.
     * @param {TicketMessageUpsertArgs} args - Arguments to update or create a TicketMessage.
     * @example
     * // Update or create a TicketMessage
     * const ticketMessage = await prisma.ticketMessage.upsert({
     *   create: {
     *     // ... data to create a TicketMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketMessage we want to update
     *   }
     * })
     */
    upsert<T extends TicketMessageUpsertArgs>(args: SelectSubset<T, TicketMessageUpsertArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TicketMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageCountArgs} args - Arguments to filter TicketMessages to count.
     * @example
     * // Count the number of TicketMessages
     * const count = await prisma.ticketMessage.count({
     *   where: {
     *     // ... the filter for the TicketMessages we want to count
     *   }
     * })
    **/
    count<T extends TicketMessageCountArgs>(
      args?: Subset<T, TicketMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketMessageAggregateArgs>(args: Subset<T, TicketMessageAggregateArgs>): Prisma.PrismaPromise<GetTicketMessageAggregateType<T>>

    /**
     * Group by TicketMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketMessageGroupByArgs['orderBy'] }
        : { orderBy?: TicketMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketMessage model
   */
  readonly fields: TicketMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends SupportTicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupportTicketDefaultArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketMessage model
   */ 
  interface TicketMessageFieldRefs {
    readonly id: FieldRef<"TicketMessage", 'String'>
    readonly ticketId: FieldRef<"TicketMessage", 'String'>
    readonly senderType: FieldRef<"TicketMessage", 'String'>
    readonly senderName: FieldRef<"TicketMessage", 'String'>
    readonly message: FieldRef<"TicketMessage", 'String'>
    readonly createdAt: FieldRef<"TicketMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketMessage findUnique
   */
  export type TicketMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage findUniqueOrThrow
   */
  export type TicketMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage findFirst
   */
  export type TicketMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketMessages.
     */
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage findFirstOrThrow
   */
  export type TicketMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketMessages.
     */
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage findMany
   */
  export type TicketMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessages to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage create
   */
  export type TicketMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketMessage.
     */
    data: XOR<TicketMessageCreateInput, TicketMessageUncheckedCreateInput>
  }

  /**
   * TicketMessage createMany
   */
  export type TicketMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketMessages.
     */
    data: TicketMessageCreateManyInput | TicketMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketMessage createManyAndReturn
   */
  export type TicketMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TicketMessages.
     */
    data: TicketMessageCreateManyInput | TicketMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketMessage update
   */
  export type TicketMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketMessage.
     */
    data: XOR<TicketMessageUpdateInput, TicketMessageUncheckedUpdateInput>
    /**
     * Choose, which TicketMessage to update.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage updateMany
   */
  export type TicketMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketMessages.
     */
    data: XOR<TicketMessageUpdateManyMutationInput, TicketMessageUncheckedUpdateManyInput>
    /**
     * Filter which TicketMessages to update
     */
    where?: TicketMessageWhereInput
  }

  /**
   * TicketMessage upsert
   */
  export type TicketMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketMessage to update in case it exists.
     */
    where: TicketMessageWhereUniqueInput
    /**
     * In case the TicketMessage found by the `where` argument doesn't exist, create a new TicketMessage with this data.
     */
    create: XOR<TicketMessageCreateInput, TicketMessageUncheckedCreateInput>
    /**
     * In case the TicketMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketMessageUpdateInput, TicketMessageUncheckedUpdateInput>
  }

  /**
   * TicketMessage delete
   */
  export type TicketMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter which TicketMessage to delete.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage deleteMany
   */
  export type TicketMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketMessages to delete
     */
    where?: TicketMessageWhereInput
  }

  /**
   * TicketMessage without action
   */
  export type TicketMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
  }


  /**
   * Model CustomizationQuote
   */

  export type AggregateCustomizationQuote = {
    _count: CustomizationQuoteCountAggregateOutputType | null
    _avg: CustomizationQuoteAvgAggregateOutputType | null
    _sum: CustomizationQuoteSumAggregateOutputType | null
    _min: CustomizationQuoteMinAggregateOutputType | null
    _max: CustomizationQuoteMaxAggregateOutputType | null
  }

  export type CustomizationQuoteAvgAggregateOutputType = {
    quotedAmount: number | null
  }

  export type CustomizationQuoteSumAggregateOutputType = {
    quotedAmount: number | null
  }

  export type CustomizationQuoteMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    title: string | null
    scopeDescription: string | null
    quotedAmount: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomizationQuoteMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    title: string | null
    scopeDescription: string | null
    quotedAmount: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomizationQuoteCountAggregateOutputType = {
    id: number
    customerId: number
    title: number
    scopeDescription: number
    quotedAmount: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomizationQuoteAvgAggregateInputType = {
    quotedAmount?: true
  }

  export type CustomizationQuoteSumAggregateInputType = {
    quotedAmount?: true
  }

  export type CustomizationQuoteMinAggregateInputType = {
    id?: true
    customerId?: true
    title?: true
    scopeDescription?: true
    quotedAmount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomizationQuoteMaxAggregateInputType = {
    id?: true
    customerId?: true
    title?: true
    scopeDescription?: true
    quotedAmount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomizationQuoteCountAggregateInputType = {
    id?: true
    customerId?: true
    title?: true
    scopeDescription?: true
    quotedAmount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomizationQuoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomizationQuote to aggregate.
     */
    where?: CustomizationQuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomizationQuotes to fetch.
     */
    orderBy?: CustomizationQuoteOrderByWithRelationInput | CustomizationQuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomizationQuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomizationQuotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomizationQuotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomizationQuotes
    **/
    _count?: true | CustomizationQuoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomizationQuoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomizationQuoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomizationQuoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomizationQuoteMaxAggregateInputType
  }

  export type GetCustomizationQuoteAggregateType<T extends CustomizationQuoteAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomizationQuote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomizationQuote[P]>
      : GetScalarType<T[P], AggregateCustomizationQuote[P]>
  }




  export type CustomizationQuoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomizationQuoteWhereInput
    orderBy?: CustomizationQuoteOrderByWithAggregationInput | CustomizationQuoteOrderByWithAggregationInput[]
    by: CustomizationQuoteScalarFieldEnum[] | CustomizationQuoteScalarFieldEnum
    having?: CustomizationQuoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomizationQuoteCountAggregateInputType | true
    _avg?: CustomizationQuoteAvgAggregateInputType
    _sum?: CustomizationQuoteSumAggregateInputType
    _min?: CustomizationQuoteMinAggregateInputType
    _max?: CustomizationQuoteMaxAggregateInputType
  }

  export type CustomizationQuoteGroupByOutputType = {
    id: string
    customerId: string
    title: string
    scopeDescription: string
    quotedAmount: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: CustomizationQuoteCountAggregateOutputType | null
    _avg: CustomizationQuoteAvgAggregateOutputType | null
    _sum: CustomizationQuoteSumAggregateOutputType | null
    _min: CustomizationQuoteMinAggregateOutputType | null
    _max: CustomizationQuoteMaxAggregateOutputType | null
  }

  type GetCustomizationQuoteGroupByPayload<T extends CustomizationQuoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomizationQuoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomizationQuoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomizationQuoteGroupByOutputType[P]>
            : GetScalarType<T[P], CustomizationQuoteGroupByOutputType[P]>
        }
      >
    >


  export type CustomizationQuoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    title?: boolean
    scopeDescription?: boolean
    quotedAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customizationQuote"]>

  export type CustomizationQuoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    title?: boolean
    scopeDescription?: boolean
    quotedAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customizationQuote"]>

  export type CustomizationQuoteSelectScalar = {
    id?: boolean
    customerId?: boolean
    title?: boolean
    scopeDescription?: boolean
    quotedAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomizationQuoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomizationQuoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $CustomizationQuotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomizationQuote"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      title: string
      scopeDescription: string
      quotedAmount: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customizationQuote"]>
    composites: {}
  }

  type CustomizationQuoteGetPayload<S extends boolean | null | undefined | CustomizationQuoteDefaultArgs> = $Result.GetResult<Prisma.$CustomizationQuotePayload, S>

  type CustomizationQuoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomizationQuoteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomizationQuoteCountAggregateInputType | true
    }

  export interface CustomizationQuoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomizationQuote'], meta: { name: 'CustomizationQuote' } }
    /**
     * Find zero or one CustomizationQuote that matches the filter.
     * @param {CustomizationQuoteFindUniqueArgs} args - Arguments to find a CustomizationQuote
     * @example
     * // Get one CustomizationQuote
     * const customizationQuote = await prisma.customizationQuote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomizationQuoteFindUniqueArgs>(args: SelectSubset<T, CustomizationQuoteFindUniqueArgs<ExtArgs>>): Prisma__CustomizationQuoteClient<$Result.GetResult<Prisma.$CustomizationQuotePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustomizationQuote that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomizationQuoteFindUniqueOrThrowArgs} args - Arguments to find a CustomizationQuote
     * @example
     * // Get one CustomizationQuote
     * const customizationQuote = await prisma.customizationQuote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomizationQuoteFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomizationQuoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomizationQuoteClient<$Result.GetResult<Prisma.$CustomizationQuotePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustomizationQuote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomizationQuoteFindFirstArgs} args - Arguments to find a CustomizationQuote
     * @example
     * // Get one CustomizationQuote
     * const customizationQuote = await prisma.customizationQuote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomizationQuoteFindFirstArgs>(args?: SelectSubset<T, CustomizationQuoteFindFirstArgs<ExtArgs>>): Prisma__CustomizationQuoteClient<$Result.GetResult<Prisma.$CustomizationQuotePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustomizationQuote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomizationQuoteFindFirstOrThrowArgs} args - Arguments to find a CustomizationQuote
     * @example
     * // Get one CustomizationQuote
     * const customizationQuote = await prisma.customizationQuote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomizationQuoteFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomizationQuoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomizationQuoteClient<$Result.GetResult<Prisma.$CustomizationQuotePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustomizationQuotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomizationQuoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomizationQuotes
     * const customizationQuotes = await prisma.customizationQuote.findMany()
     * 
     * // Get first 10 CustomizationQuotes
     * const customizationQuotes = await prisma.customizationQuote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customizationQuoteWithIdOnly = await prisma.customizationQuote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomizationQuoteFindManyArgs>(args?: SelectSubset<T, CustomizationQuoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomizationQuotePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustomizationQuote.
     * @param {CustomizationQuoteCreateArgs} args - Arguments to create a CustomizationQuote.
     * @example
     * // Create one CustomizationQuote
     * const CustomizationQuote = await prisma.customizationQuote.create({
     *   data: {
     *     // ... data to create a CustomizationQuote
     *   }
     * })
     * 
     */
    create<T extends CustomizationQuoteCreateArgs>(args: SelectSubset<T, CustomizationQuoteCreateArgs<ExtArgs>>): Prisma__CustomizationQuoteClient<$Result.GetResult<Prisma.$CustomizationQuotePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustomizationQuotes.
     * @param {CustomizationQuoteCreateManyArgs} args - Arguments to create many CustomizationQuotes.
     * @example
     * // Create many CustomizationQuotes
     * const customizationQuote = await prisma.customizationQuote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomizationQuoteCreateManyArgs>(args?: SelectSubset<T, CustomizationQuoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomizationQuotes and returns the data saved in the database.
     * @param {CustomizationQuoteCreateManyAndReturnArgs} args - Arguments to create many CustomizationQuotes.
     * @example
     * // Create many CustomizationQuotes
     * const customizationQuote = await prisma.customizationQuote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomizationQuotes and only return the `id`
     * const customizationQuoteWithIdOnly = await prisma.customizationQuote.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomizationQuoteCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomizationQuoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomizationQuotePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustomizationQuote.
     * @param {CustomizationQuoteDeleteArgs} args - Arguments to delete one CustomizationQuote.
     * @example
     * // Delete one CustomizationQuote
     * const CustomizationQuote = await prisma.customizationQuote.delete({
     *   where: {
     *     // ... filter to delete one CustomizationQuote
     *   }
     * })
     * 
     */
    delete<T extends CustomizationQuoteDeleteArgs>(args: SelectSubset<T, CustomizationQuoteDeleteArgs<ExtArgs>>): Prisma__CustomizationQuoteClient<$Result.GetResult<Prisma.$CustomizationQuotePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustomizationQuote.
     * @param {CustomizationQuoteUpdateArgs} args - Arguments to update one CustomizationQuote.
     * @example
     * // Update one CustomizationQuote
     * const customizationQuote = await prisma.customizationQuote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomizationQuoteUpdateArgs>(args: SelectSubset<T, CustomizationQuoteUpdateArgs<ExtArgs>>): Prisma__CustomizationQuoteClient<$Result.GetResult<Prisma.$CustomizationQuotePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustomizationQuotes.
     * @param {CustomizationQuoteDeleteManyArgs} args - Arguments to filter CustomizationQuotes to delete.
     * @example
     * // Delete a few CustomizationQuotes
     * const { count } = await prisma.customizationQuote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomizationQuoteDeleteManyArgs>(args?: SelectSubset<T, CustomizationQuoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomizationQuotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomizationQuoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomizationQuotes
     * const customizationQuote = await prisma.customizationQuote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomizationQuoteUpdateManyArgs>(args: SelectSubset<T, CustomizationQuoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomizationQuote.
     * @param {CustomizationQuoteUpsertArgs} args - Arguments to update or create a CustomizationQuote.
     * @example
     * // Update or create a CustomizationQuote
     * const customizationQuote = await prisma.customizationQuote.upsert({
     *   create: {
     *     // ... data to create a CustomizationQuote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomizationQuote we want to update
     *   }
     * })
     */
    upsert<T extends CustomizationQuoteUpsertArgs>(args: SelectSubset<T, CustomizationQuoteUpsertArgs<ExtArgs>>): Prisma__CustomizationQuoteClient<$Result.GetResult<Prisma.$CustomizationQuotePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustomizationQuotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomizationQuoteCountArgs} args - Arguments to filter CustomizationQuotes to count.
     * @example
     * // Count the number of CustomizationQuotes
     * const count = await prisma.customizationQuote.count({
     *   where: {
     *     // ... the filter for the CustomizationQuotes we want to count
     *   }
     * })
    **/
    count<T extends CustomizationQuoteCountArgs>(
      args?: Subset<T, CustomizationQuoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomizationQuoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomizationQuote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomizationQuoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomizationQuoteAggregateArgs>(args: Subset<T, CustomizationQuoteAggregateArgs>): Prisma.PrismaPromise<GetCustomizationQuoteAggregateType<T>>

    /**
     * Group by CustomizationQuote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomizationQuoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomizationQuoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomizationQuoteGroupByArgs['orderBy'] }
        : { orderBy?: CustomizationQuoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomizationQuoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomizationQuoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomizationQuote model
   */
  readonly fields: CustomizationQuoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomizationQuote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomizationQuoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomizationQuote model
   */ 
  interface CustomizationQuoteFieldRefs {
    readonly id: FieldRef<"CustomizationQuote", 'String'>
    readonly customerId: FieldRef<"CustomizationQuote", 'String'>
    readonly title: FieldRef<"CustomizationQuote", 'String'>
    readonly scopeDescription: FieldRef<"CustomizationQuote", 'String'>
    readonly quotedAmount: FieldRef<"CustomizationQuote", 'Float'>
    readonly status: FieldRef<"CustomizationQuote", 'String'>
    readonly createdAt: FieldRef<"CustomizationQuote", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomizationQuote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomizationQuote findUnique
   */
  export type CustomizationQuoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomizationQuote
     */
    select?: CustomizationQuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationQuoteInclude<ExtArgs> | null
    /**
     * Filter, which CustomizationQuote to fetch.
     */
    where: CustomizationQuoteWhereUniqueInput
  }

  /**
   * CustomizationQuote findUniqueOrThrow
   */
  export type CustomizationQuoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomizationQuote
     */
    select?: CustomizationQuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationQuoteInclude<ExtArgs> | null
    /**
     * Filter, which CustomizationQuote to fetch.
     */
    where: CustomizationQuoteWhereUniqueInput
  }

  /**
   * CustomizationQuote findFirst
   */
  export type CustomizationQuoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomizationQuote
     */
    select?: CustomizationQuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationQuoteInclude<ExtArgs> | null
    /**
     * Filter, which CustomizationQuote to fetch.
     */
    where?: CustomizationQuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomizationQuotes to fetch.
     */
    orderBy?: CustomizationQuoteOrderByWithRelationInput | CustomizationQuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomizationQuotes.
     */
    cursor?: CustomizationQuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomizationQuotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomizationQuotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomizationQuotes.
     */
    distinct?: CustomizationQuoteScalarFieldEnum | CustomizationQuoteScalarFieldEnum[]
  }

  /**
   * CustomizationQuote findFirstOrThrow
   */
  export type CustomizationQuoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomizationQuote
     */
    select?: CustomizationQuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationQuoteInclude<ExtArgs> | null
    /**
     * Filter, which CustomizationQuote to fetch.
     */
    where?: CustomizationQuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomizationQuotes to fetch.
     */
    orderBy?: CustomizationQuoteOrderByWithRelationInput | CustomizationQuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomizationQuotes.
     */
    cursor?: CustomizationQuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomizationQuotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomizationQuotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomizationQuotes.
     */
    distinct?: CustomizationQuoteScalarFieldEnum | CustomizationQuoteScalarFieldEnum[]
  }

  /**
   * CustomizationQuote findMany
   */
  export type CustomizationQuoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomizationQuote
     */
    select?: CustomizationQuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationQuoteInclude<ExtArgs> | null
    /**
     * Filter, which CustomizationQuotes to fetch.
     */
    where?: CustomizationQuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomizationQuotes to fetch.
     */
    orderBy?: CustomizationQuoteOrderByWithRelationInput | CustomizationQuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomizationQuotes.
     */
    cursor?: CustomizationQuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomizationQuotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomizationQuotes.
     */
    skip?: number
    distinct?: CustomizationQuoteScalarFieldEnum | CustomizationQuoteScalarFieldEnum[]
  }

  /**
   * CustomizationQuote create
   */
  export type CustomizationQuoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomizationQuote
     */
    select?: CustomizationQuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationQuoteInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomizationQuote.
     */
    data: XOR<CustomizationQuoteCreateInput, CustomizationQuoteUncheckedCreateInput>
  }

  /**
   * CustomizationQuote createMany
   */
  export type CustomizationQuoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomizationQuotes.
     */
    data: CustomizationQuoteCreateManyInput | CustomizationQuoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomizationQuote createManyAndReturn
   */
  export type CustomizationQuoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomizationQuote
     */
    select?: CustomizationQuoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustomizationQuotes.
     */
    data: CustomizationQuoteCreateManyInput | CustomizationQuoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationQuoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomizationQuote update
   */
  export type CustomizationQuoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomizationQuote
     */
    select?: CustomizationQuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationQuoteInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomizationQuote.
     */
    data: XOR<CustomizationQuoteUpdateInput, CustomizationQuoteUncheckedUpdateInput>
    /**
     * Choose, which CustomizationQuote to update.
     */
    where: CustomizationQuoteWhereUniqueInput
  }

  /**
   * CustomizationQuote updateMany
   */
  export type CustomizationQuoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomizationQuotes.
     */
    data: XOR<CustomizationQuoteUpdateManyMutationInput, CustomizationQuoteUncheckedUpdateManyInput>
    /**
     * Filter which CustomizationQuotes to update
     */
    where?: CustomizationQuoteWhereInput
  }

  /**
   * CustomizationQuote upsert
   */
  export type CustomizationQuoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomizationQuote
     */
    select?: CustomizationQuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationQuoteInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomizationQuote to update in case it exists.
     */
    where: CustomizationQuoteWhereUniqueInput
    /**
     * In case the CustomizationQuote found by the `where` argument doesn't exist, create a new CustomizationQuote with this data.
     */
    create: XOR<CustomizationQuoteCreateInput, CustomizationQuoteUncheckedCreateInput>
    /**
     * In case the CustomizationQuote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomizationQuoteUpdateInput, CustomizationQuoteUncheckedUpdateInput>
  }

  /**
   * CustomizationQuote delete
   */
  export type CustomizationQuoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomizationQuote
     */
    select?: CustomizationQuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationQuoteInclude<ExtArgs> | null
    /**
     * Filter which CustomizationQuote to delete.
     */
    where: CustomizationQuoteWhereUniqueInput
  }

  /**
   * CustomizationQuote deleteMany
   */
  export type CustomizationQuoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomizationQuotes to delete
     */
    where?: CustomizationQuoteWhereInput
  }

  /**
   * CustomizationQuote without action
   */
  export type CustomizationQuoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomizationQuote
     */
    select?: CustomizationQuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationQuoteInclude<ExtArgs> | null
  }


  /**
   * Model CentralThemeItem
   */

  export type AggregateCentralThemeItem = {
    _count: CentralThemeItemCountAggregateOutputType | null
    _avg: CentralThemeItemAvgAggregateOutputType | null
    _sum: CentralThemeItemSumAggregateOutputType | null
    _min: CentralThemeItemMinAggregateOutputType | null
    _max: CentralThemeItemMaxAggregateOutputType | null
  }

  export type CentralThemeItemAvgAggregateOutputType = {
    price: number | null
  }

  export type CentralThemeItemSumAggregateOutputType = {
    price: number | null
  }

  export type CentralThemeItemMinAggregateOutputType = {
    id: string | null
    themeCode: string | null
    name: string | null
    description: string | null
    previewImage: string | null
    isPremium: boolean | null
    price: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CentralThemeItemMaxAggregateOutputType = {
    id: string | null
    themeCode: string | null
    name: string | null
    description: string | null
    previewImage: string | null
    isPremium: boolean | null
    price: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CentralThemeItemCountAggregateOutputType = {
    id: number
    themeCode: number
    name: number
    description: number
    previewImage: number
    isPremium: number
    price: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CentralThemeItemAvgAggregateInputType = {
    price?: true
  }

  export type CentralThemeItemSumAggregateInputType = {
    price?: true
  }

  export type CentralThemeItemMinAggregateInputType = {
    id?: true
    themeCode?: true
    name?: true
    description?: true
    previewImage?: true
    isPremium?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CentralThemeItemMaxAggregateInputType = {
    id?: true
    themeCode?: true
    name?: true
    description?: true
    previewImage?: true
    isPremium?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CentralThemeItemCountAggregateInputType = {
    id?: true
    themeCode?: true
    name?: true
    description?: true
    previewImage?: true
    isPremium?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CentralThemeItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CentralThemeItem to aggregate.
     */
    where?: CentralThemeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentralThemeItems to fetch.
     */
    orderBy?: CentralThemeItemOrderByWithRelationInput | CentralThemeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CentralThemeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentralThemeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentralThemeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CentralThemeItems
    **/
    _count?: true | CentralThemeItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CentralThemeItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CentralThemeItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CentralThemeItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CentralThemeItemMaxAggregateInputType
  }

  export type GetCentralThemeItemAggregateType<T extends CentralThemeItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCentralThemeItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCentralThemeItem[P]>
      : GetScalarType<T[P], AggregateCentralThemeItem[P]>
  }




  export type CentralThemeItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CentralThemeItemWhereInput
    orderBy?: CentralThemeItemOrderByWithAggregationInput | CentralThemeItemOrderByWithAggregationInput[]
    by: CentralThemeItemScalarFieldEnum[] | CentralThemeItemScalarFieldEnum
    having?: CentralThemeItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CentralThemeItemCountAggregateInputType | true
    _avg?: CentralThemeItemAvgAggregateInputType
    _sum?: CentralThemeItemSumAggregateInputType
    _min?: CentralThemeItemMinAggregateInputType
    _max?: CentralThemeItemMaxAggregateInputType
  }

  export type CentralThemeItemGroupByOutputType = {
    id: string
    themeCode: string
    name: string
    description: string
    previewImage: string | null
    isPremium: boolean
    price: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CentralThemeItemCountAggregateOutputType | null
    _avg: CentralThemeItemAvgAggregateOutputType | null
    _sum: CentralThemeItemSumAggregateOutputType | null
    _min: CentralThemeItemMinAggregateOutputType | null
    _max: CentralThemeItemMaxAggregateOutputType | null
  }

  type GetCentralThemeItemGroupByPayload<T extends CentralThemeItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CentralThemeItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CentralThemeItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CentralThemeItemGroupByOutputType[P]>
            : GetScalarType<T[P], CentralThemeItemGroupByOutputType[P]>
        }
      >
    >


  export type CentralThemeItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    themeCode?: boolean
    name?: boolean
    description?: boolean
    previewImage?: boolean
    isPremium?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["centralThemeItem"]>

  export type CentralThemeItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    themeCode?: boolean
    name?: boolean
    description?: boolean
    previewImage?: boolean
    isPremium?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["centralThemeItem"]>

  export type CentralThemeItemSelectScalar = {
    id?: boolean
    themeCode?: boolean
    name?: boolean
    description?: boolean
    previewImage?: boolean
    isPremium?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CentralThemeItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CentralThemeItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      themeCode: string
      name: string
      description: string
      previewImage: string | null
      isPremium: boolean
      price: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["centralThemeItem"]>
    composites: {}
  }

  type CentralThemeItemGetPayload<S extends boolean | null | undefined | CentralThemeItemDefaultArgs> = $Result.GetResult<Prisma.$CentralThemeItemPayload, S>

  type CentralThemeItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CentralThemeItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CentralThemeItemCountAggregateInputType | true
    }

  export interface CentralThemeItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CentralThemeItem'], meta: { name: 'CentralThemeItem' } }
    /**
     * Find zero or one CentralThemeItem that matches the filter.
     * @param {CentralThemeItemFindUniqueArgs} args - Arguments to find a CentralThemeItem
     * @example
     * // Get one CentralThemeItem
     * const centralThemeItem = await prisma.centralThemeItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CentralThemeItemFindUniqueArgs>(args: SelectSubset<T, CentralThemeItemFindUniqueArgs<ExtArgs>>): Prisma__CentralThemeItemClient<$Result.GetResult<Prisma.$CentralThemeItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CentralThemeItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CentralThemeItemFindUniqueOrThrowArgs} args - Arguments to find a CentralThemeItem
     * @example
     * // Get one CentralThemeItem
     * const centralThemeItem = await prisma.centralThemeItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CentralThemeItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CentralThemeItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CentralThemeItemClient<$Result.GetResult<Prisma.$CentralThemeItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CentralThemeItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentralThemeItemFindFirstArgs} args - Arguments to find a CentralThemeItem
     * @example
     * // Get one CentralThemeItem
     * const centralThemeItem = await prisma.centralThemeItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CentralThemeItemFindFirstArgs>(args?: SelectSubset<T, CentralThemeItemFindFirstArgs<ExtArgs>>): Prisma__CentralThemeItemClient<$Result.GetResult<Prisma.$CentralThemeItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CentralThemeItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentralThemeItemFindFirstOrThrowArgs} args - Arguments to find a CentralThemeItem
     * @example
     * // Get one CentralThemeItem
     * const centralThemeItem = await prisma.centralThemeItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CentralThemeItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CentralThemeItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CentralThemeItemClient<$Result.GetResult<Prisma.$CentralThemeItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CentralThemeItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentralThemeItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CentralThemeItems
     * const centralThemeItems = await prisma.centralThemeItem.findMany()
     * 
     * // Get first 10 CentralThemeItems
     * const centralThemeItems = await prisma.centralThemeItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const centralThemeItemWithIdOnly = await prisma.centralThemeItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CentralThemeItemFindManyArgs>(args?: SelectSubset<T, CentralThemeItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentralThemeItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CentralThemeItem.
     * @param {CentralThemeItemCreateArgs} args - Arguments to create a CentralThemeItem.
     * @example
     * // Create one CentralThemeItem
     * const CentralThemeItem = await prisma.centralThemeItem.create({
     *   data: {
     *     // ... data to create a CentralThemeItem
     *   }
     * })
     * 
     */
    create<T extends CentralThemeItemCreateArgs>(args: SelectSubset<T, CentralThemeItemCreateArgs<ExtArgs>>): Prisma__CentralThemeItemClient<$Result.GetResult<Prisma.$CentralThemeItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CentralThemeItems.
     * @param {CentralThemeItemCreateManyArgs} args - Arguments to create many CentralThemeItems.
     * @example
     * // Create many CentralThemeItems
     * const centralThemeItem = await prisma.centralThemeItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CentralThemeItemCreateManyArgs>(args?: SelectSubset<T, CentralThemeItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CentralThemeItems and returns the data saved in the database.
     * @param {CentralThemeItemCreateManyAndReturnArgs} args - Arguments to create many CentralThemeItems.
     * @example
     * // Create many CentralThemeItems
     * const centralThemeItem = await prisma.centralThemeItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CentralThemeItems and only return the `id`
     * const centralThemeItemWithIdOnly = await prisma.centralThemeItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CentralThemeItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CentralThemeItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentralThemeItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CentralThemeItem.
     * @param {CentralThemeItemDeleteArgs} args - Arguments to delete one CentralThemeItem.
     * @example
     * // Delete one CentralThemeItem
     * const CentralThemeItem = await prisma.centralThemeItem.delete({
     *   where: {
     *     // ... filter to delete one CentralThemeItem
     *   }
     * })
     * 
     */
    delete<T extends CentralThemeItemDeleteArgs>(args: SelectSubset<T, CentralThemeItemDeleteArgs<ExtArgs>>): Prisma__CentralThemeItemClient<$Result.GetResult<Prisma.$CentralThemeItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CentralThemeItem.
     * @param {CentralThemeItemUpdateArgs} args - Arguments to update one CentralThemeItem.
     * @example
     * // Update one CentralThemeItem
     * const centralThemeItem = await prisma.centralThemeItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CentralThemeItemUpdateArgs>(args: SelectSubset<T, CentralThemeItemUpdateArgs<ExtArgs>>): Prisma__CentralThemeItemClient<$Result.GetResult<Prisma.$CentralThemeItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CentralThemeItems.
     * @param {CentralThemeItemDeleteManyArgs} args - Arguments to filter CentralThemeItems to delete.
     * @example
     * // Delete a few CentralThemeItems
     * const { count } = await prisma.centralThemeItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CentralThemeItemDeleteManyArgs>(args?: SelectSubset<T, CentralThemeItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CentralThemeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentralThemeItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CentralThemeItems
     * const centralThemeItem = await prisma.centralThemeItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CentralThemeItemUpdateManyArgs>(args: SelectSubset<T, CentralThemeItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CentralThemeItem.
     * @param {CentralThemeItemUpsertArgs} args - Arguments to update or create a CentralThemeItem.
     * @example
     * // Update or create a CentralThemeItem
     * const centralThemeItem = await prisma.centralThemeItem.upsert({
     *   create: {
     *     // ... data to create a CentralThemeItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CentralThemeItem we want to update
     *   }
     * })
     */
    upsert<T extends CentralThemeItemUpsertArgs>(args: SelectSubset<T, CentralThemeItemUpsertArgs<ExtArgs>>): Prisma__CentralThemeItemClient<$Result.GetResult<Prisma.$CentralThemeItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CentralThemeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentralThemeItemCountArgs} args - Arguments to filter CentralThemeItems to count.
     * @example
     * // Count the number of CentralThemeItems
     * const count = await prisma.centralThemeItem.count({
     *   where: {
     *     // ... the filter for the CentralThemeItems we want to count
     *   }
     * })
    **/
    count<T extends CentralThemeItemCountArgs>(
      args?: Subset<T, CentralThemeItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CentralThemeItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CentralThemeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentralThemeItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CentralThemeItemAggregateArgs>(args: Subset<T, CentralThemeItemAggregateArgs>): Prisma.PrismaPromise<GetCentralThemeItemAggregateType<T>>

    /**
     * Group by CentralThemeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentralThemeItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CentralThemeItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CentralThemeItemGroupByArgs['orderBy'] }
        : { orderBy?: CentralThemeItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CentralThemeItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCentralThemeItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CentralThemeItem model
   */
  readonly fields: CentralThemeItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CentralThemeItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CentralThemeItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CentralThemeItem model
   */ 
  interface CentralThemeItemFieldRefs {
    readonly id: FieldRef<"CentralThemeItem", 'String'>
    readonly themeCode: FieldRef<"CentralThemeItem", 'String'>
    readonly name: FieldRef<"CentralThemeItem", 'String'>
    readonly description: FieldRef<"CentralThemeItem", 'String'>
    readonly previewImage: FieldRef<"CentralThemeItem", 'String'>
    readonly isPremium: FieldRef<"CentralThemeItem", 'Boolean'>
    readonly price: FieldRef<"CentralThemeItem", 'Float'>
    readonly isActive: FieldRef<"CentralThemeItem", 'Boolean'>
    readonly createdAt: FieldRef<"CentralThemeItem", 'DateTime'>
    readonly updatedAt: FieldRef<"CentralThemeItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CentralThemeItem findUnique
   */
  export type CentralThemeItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralThemeItem
     */
    select?: CentralThemeItemSelect<ExtArgs> | null
    /**
     * Filter, which CentralThemeItem to fetch.
     */
    where: CentralThemeItemWhereUniqueInput
  }

  /**
   * CentralThemeItem findUniqueOrThrow
   */
  export type CentralThemeItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralThemeItem
     */
    select?: CentralThemeItemSelect<ExtArgs> | null
    /**
     * Filter, which CentralThemeItem to fetch.
     */
    where: CentralThemeItemWhereUniqueInput
  }

  /**
   * CentralThemeItem findFirst
   */
  export type CentralThemeItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralThemeItem
     */
    select?: CentralThemeItemSelect<ExtArgs> | null
    /**
     * Filter, which CentralThemeItem to fetch.
     */
    where?: CentralThemeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentralThemeItems to fetch.
     */
    orderBy?: CentralThemeItemOrderByWithRelationInput | CentralThemeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CentralThemeItems.
     */
    cursor?: CentralThemeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentralThemeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentralThemeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CentralThemeItems.
     */
    distinct?: CentralThemeItemScalarFieldEnum | CentralThemeItemScalarFieldEnum[]
  }

  /**
   * CentralThemeItem findFirstOrThrow
   */
  export type CentralThemeItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralThemeItem
     */
    select?: CentralThemeItemSelect<ExtArgs> | null
    /**
     * Filter, which CentralThemeItem to fetch.
     */
    where?: CentralThemeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentralThemeItems to fetch.
     */
    orderBy?: CentralThemeItemOrderByWithRelationInput | CentralThemeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CentralThemeItems.
     */
    cursor?: CentralThemeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentralThemeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentralThemeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CentralThemeItems.
     */
    distinct?: CentralThemeItemScalarFieldEnum | CentralThemeItemScalarFieldEnum[]
  }

  /**
   * CentralThemeItem findMany
   */
  export type CentralThemeItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralThemeItem
     */
    select?: CentralThemeItemSelect<ExtArgs> | null
    /**
     * Filter, which CentralThemeItems to fetch.
     */
    where?: CentralThemeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentralThemeItems to fetch.
     */
    orderBy?: CentralThemeItemOrderByWithRelationInput | CentralThemeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CentralThemeItems.
     */
    cursor?: CentralThemeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentralThemeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentralThemeItems.
     */
    skip?: number
    distinct?: CentralThemeItemScalarFieldEnum | CentralThemeItemScalarFieldEnum[]
  }

  /**
   * CentralThemeItem create
   */
  export type CentralThemeItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralThemeItem
     */
    select?: CentralThemeItemSelect<ExtArgs> | null
    /**
     * The data needed to create a CentralThemeItem.
     */
    data: XOR<CentralThemeItemCreateInput, CentralThemeItemUncheckedCreateInput>
  }

  /**
   * CentralThemeItem createMany
   */
  export type CentralThemeItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CentralThemeItems.
     */
    data: CentralThemeItemCreateManyInput | CentralThemeItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CentralThemeItem createManyAndReturn
   */
  export type CentralThemeItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralThemeItem
     */
    select?: CentralThemeItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CentralThemeItems.
     */
    data: CentralThemeItemCreateManyInput | CentralThemeItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CentralThemeItem update
   */
  export type CentralThemeItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralThemeItem
     */
    select?: CentralThemeItemSelect<ExtArgs> | null
    /**
     * The data needed to update a CentralThemeItem.
     */
    data: XOR<CentralThemeItemUpdateInput, CentralThemeItemUncheckedUpdateInput>
    /**
     * Choose, which CentralThemeItem to update.
     */
    where: CentralThemeItemWhereUniqueInput
  }

  /**
   * CentralThemeItem updateMany
   */
  export type CentralThemeItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CentralThemeItems.
     */
    data: XOR<CentralThemeItemUpdateManyMutationInput, CentralThemeItemUncheckedUpdateManyInput>
    /**
     * Filter which CentralThemeItems to update
     */
    where?: CentralThemeItemWhereInput
  }

  /**
   * CentralThemeItem upsert
   */
  export type CentralThemeItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralThemeItem
     */
    select?: CentralThemeItemSelect<ExtArgs> | null
    /**
     * The filter to search for the CentralThemeItem to update in case it exists.
     */
    where: CentralThemeItemWhereUniqueInput
    /**
     * In case the CentralThemeItem found by the `where` argument doesn't exist, create a new CentralThemeItem with this data.
     */
    create: XOR<CentralThemeItemCreateInput, CentralThemeItemUncheckedCreateInput>
    /**
     * In case the CentralThemeItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CentralThemeItemUpdateInput, CentralThemeItemUncheckedUpdateInput>
  }

  /**
   * CentralThemeItem delete
   */
  export type CentralThemeItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralThemeItem
     */
    select?: CentralThemeItemSelect<ExtArgs> | null
    /**
     * Filter which CentralThemeItem to delete.
     */
    where: CentralThemeItemWhereUniqueInput
  }

  /**
   * CentralThemeItem deleteMany
   */
  export type CentralThemeItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CentralThemeItems to delete
     */
    where?: CentralThemeItemWhereInput
  }

  /**
   * CentralThemeItem without action
   */
  export type CentralThemeItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralThemeItem
     */
    select?: CentralThemeItemSelect<ExtArgs> | null
  }


  /**
   * Model SystemBroadcast
   */

  export type AggregateSystemBroadcast = {
    _count: SystemBroadcastCountAggregateOutputType | null
    _min: SystemBroadcastMinAggregateOutputType | null
    _max: SystemBroadcastMaxAggregateOutputType | null
  }

  export type SystemBroadcastMinAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    severity: string | null
    targetTier: string | null
    isActive: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemBroadcastMaxAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    severity: string | null
    targetTier: string | null
    isActive: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemBroadcastCountAggregateOutputType = {
    id: number
    title: number
    message: number
    severity: number
    targetTier: number
    isActive: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemBroadcastMinAggregateInputType = {
    id?: true
    title?: true
    message?: true
    severity?: true
    targetTier?: true
    isActive?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemBroadcastMaxAggregateInputType = {
    id?: true
    title?: true
    message?: true
    severity?: true
    targetTier?: true
    isActive?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemBroadcastCountAggregateInputType = {
    id?: true
    title?: true
    message?: true
    severity?: true
    targetTier?: true
    isActive?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemBroadcastAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemBroadcast to aggregate.
     */
    where?: SystemBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemBroadcasts to fetch.
     */
    orderBy?: SystemBroadcastOrderByWithRelationInput | SystemBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemBroadcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemBroadcasts
    **/
    _count?: true | SystemBroadcastCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemBroadcastMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemBroadcastMaxAggregateInputType
  }

  export type GetSystemBroadcastAggregateType<T extends SystemBroadcastAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemBroadcast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemBroadcast[P]>
      : GetScalarType<T[P], AggregateSystemBroadcast[P]>
  }




  export type SystemBroadcastGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemBroadcastWhereInput
    orderBy?: SystemBroadcastOrderByWithAggregationInput | SystemBroadcastOrderByWithAggregationInput[]
    by: SystemBroadcastScalarFieldEnum[] | SystemBroadcastScalarFieldEnum
    having?: SystemBroadcastScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemBroadcastCountAggregateInputType | true
    _min?: SystemBroadcastMinAggregateInputType
    _max?: SystemBroadcastMaxAggregateInputType
  }

  export type SystemBroadcastGroupByOutputType = {
    id: string
    title: string
    message: string
    severity: string
    targetTier: string
    isActive: boolean
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SystemBroadcastCountAggregateOutputType | null
    _min: SystemBroadcastMinAggregateOutputType | null
    _max: SystemBroadcastMaxAggregateOutputType | null
  }

  type GetSystemBroadcastGroupByPayload<T extends SystemBroadcastGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemBroadcastGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemBroadcastGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemBroadcastGroupByOutputType[P]>
            : GetScalarType<T[P], SystemBroadcastGroupByOutputType[P]>
        }
      >
    >


  export type SystemBroadcastSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    severity?: boolean
    targetTier?: boolean
    isActive?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemBroadcast"]>

  export type SystemBroadcastSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    severity?: boolean
    targetTier?: boolean
    isActive?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemBroadcast"]>

  export type SystemBroadcastSelectScalar = {
    id?: boolean
    title?: boolean
    message?: boolean
    severity?: boolean
    targetTier?: boolean
    isActive?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SystemBroadcastPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemBroadcast"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      message: string
      severity: string
      targetTier: string
      isActive: boolean
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemBroadcast"]>
    composites: {}
  }

  type SystemBroadcastGetPayload<S extends boolean | null | undefined | SystemBroadcastDefaultArgs> = $Result.GetResult<Prisma.$SystemBroadcastPayload, S>

  type SystemBroadcastCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemBroadcastFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemBroadcastCountAggregateInputType | true
    }

  export interface SystemBroadcastDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemBroadcast'], meta: { name: 'SystemBroadcast' } }
    /**
     * Find zero or one SystemBroadcast that matches the filter.
     * @param {SystemBroadcastFindUniqueArgs} args - Arguments to find a SystemBroadcast
     * @example
     * // Get one SystemBroadcast
     * const systemBroadcast = await prisma.systemBroadcast.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemBroadcastFindUniqueArgs>(args: SelectSubset<T, SystemBroadcastFindUniqueArgs<ExtArgs>>): Prisma__SystemBroadcastClient<$Result.GetResult<Prisma.$SystemBroadcastPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SystemBroadcast that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemBroadcastFindUniqueOrThrowArgs} args - Arguments to find a SystemBroadcast
     * @example
     * // Get one SystemBroadcast
     * const systemBroadcast = await prisma.systemBroadcast.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemBroadcastFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemBroadcastFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemBroadcastClient<$Result.GetResult<Prisma.$SystemBroadcastPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SystemBroadcast that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemBroadcastFindFirstArgs} args - Arguments to find a SystemBroadcast
     * @example
     * // Get one SystemBroadcast
     * const systemBroadcast = await prisma.systemBroadcast.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemBroadcastFindFirstArgs>(args?: SelectSubset<T, SystemBroadcastFindFirstArgs<ExtArgs>>): Prisma__SystemBroadcastClient<$Result.GetResult<Prisma.$SystemBroadcastPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SystemBroadcast that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemBroadcastFindFirstOrThrowArgs} args - Arguments to find a SystemBroadcast
     * @example
     * // Get one SystemBroadcast
     * const systemBroadcast = await prisma.systemBroadcast.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemBroadcastFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemBroadcastFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemBroadcastClient<$Result.GetResult<Prisma.$SystemBroadcastPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SystemBroadcasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemBroadcastFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemBroadcasts
     * const systemBroadcasts = await prisma.systemBroadcast.findMany()
     * 
     * // Get first 10 SystemBroadcasts
     * const systemBroadcasts = await prisma.systemBroadcast.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemBroadcastWithIdOnly = await prisma.systemBroadcast.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemBroadcastFindManyArgs>(args?: SelectSubset<T, SystemBroadcastFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemBroadcastPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SystemBroadcast.
     * @param {SystemBroadcastCreateArgs} args - Arguments to create a SystemBroadcast.
     * @example
     * // Create one SystemBroadcast
     * const SystemBroadcast = await prisma.systemBroadcast.create({
     *   data: {
     *     // ... data to create a SystemBroadcast
     *   }
     * })
     * 
     */
    create<T extends SystemBroadcastCreateArgs>(args: SelectSubset<T, SystemBroadcastCreateArgs<ExtArgs>>): Prisma__SystemBroadcastClient<$Result.GetResult<Prisma.$SystemBroadcastPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SystemBroadcasts.
     * @param {SystemBroadcastCreateManyArgs} args - Arguments to create many SystemBroadcasts.
     * @example
     * // Create many SystemBroadcasts
     * const systemBroadcast = await prisma.systemBroadcast.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemBroadcastCreateManyArgs>(args?: SelectSubset<T, SystemBroadcastCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemBroadcasts and returns the data saved in the database.
     * @param {SystemBroadcastCreateManyAndReturnArgs} args - Arguments to create many SystemBroadcasts.
     * @example
     * // Create many SystemBroadcasts
     * const systemBroadcast = await prisma.systemBroadcast.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemBroadcasts and only return the `id`
     * const systemBroadcastWithIdOnly = await prisma.systemBroadcast.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemBroadcastCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemBroadcastCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemBroadcastPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SystemBroadcast.
     * @param {SystemBroadcastDeleteArgs} args - Arguments to delete one SystemBroadcast.
     * @example
     * // Delete one SystemBroadcast
     * const SystemBroadcast = await prisma.systemBroadcast.delete({
     *   where: {
     *     // ... filter to delete one SystemBroadcast
     *   }
     * })
     * 
     */
    delete<T extends SystemBroadcastDeleteArgs>(args: SelectSubset<T, SystemBroadcastDeleteArgs<ExtArgs>>): Prisma__SystemBroadcastClient<$Result.GetResult<Prisma.$SystemBroadcastPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SystemBroadcast.
     * @param {SystemBroadcastUpdateArgs} args - Arguments to update one SystemBroadcast.
     * @example
     * // Update one SystemBroadcast
     * const systemBroadcast = await prisma.systemBroadcast.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemBroadcastUpdateArgs>(args: SelectSubset<T, SystemBroadcastUpdateArgs<ExtArgs>>): Prisma__SystemBroadcastClient<$Result.GetResult<Prisma.$SystemBroadcastPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SystemBroadcasts.
     * @param {SystemBroadcastDeleteManyArgs} args - Arguments to filter SystemBroadcasts to delete.
     * @example
     * // Delete a few SystemBroadcasts
     * const { count } = await prisma.systemBroadcast.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemBroadcastDeleteManyArgs>(args?: SelectSubset<T, SystemBroadcastDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemBroadcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemBroadcastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemBroadcasts
     * const systemBroadcast = await prisma.systemBroadcast.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemBroadcastUpdateManyArgs>(args: SelectSubset<T, SystemBroadcastUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemBroadcast.
     * @param {SystemBroadcastUpsertArgs} args - Arguments to update or create a SystemBroadcast.
     * @example
     * // Update or create a SystemBroadcast
     * const systemBroadcast = await prisma.systemBroadcast.upsert({
     *   create: {
     *     // ... data to create a SystemBroadcast
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemBroadcast we want to update
     *   }
     * })
     */
    upsert<T extends SystemBroadcastUpsertArgs>(args: SelectSubset<T, SystemBroadcastUpsertArgs<ExtArgs>>): Prisma__SystemBroadcastClient<$Result.GetResult<Prisma.$SystemBroadcastPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SystemBroadcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemBroadcastCountArgs} args - Arguments to filter SystemBroadcasts to count.
     * @example
     * // Count the number of SystemBroadcasts
     * const count = await prisma.systemBroadcast.count({
     *   where: {
     *     // ... the filter for the SystemBroadcasts we want to count
     *   }
     * })
    **/
    count<T extends SystemBroadcastCountArgs>(
      args?: Subset<T, SystemBroadcastCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemBroadcastCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemBroadcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemBroadcastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemBroadcastAggregateArgs>(args: Subset<T, SystemBroadcastAggregateArgs>): Prisma.PrismaPromise<GetSystemBroadcastAggregateType<T>>

    /**
     * Group by SystemBroadcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemBroadcastGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemBroadcastGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemBroadcastGroupByArgs['orderBy'] }
        : { orderBy?: SystemBroadcastGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemBroadcastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemBroadcastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemBroadcast model
   */
  readonly fields: SystemBroadcastFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemBroadcast.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemBroadcastClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemBroadcast model
   */ 
  interface SystemBroadcastFieldRefs {
    readonly id: FieldRef<"SystemBroadcast", 'String'>
    readonly title: FieldRef<"SystemBroadcast", 'String'>
    readonly message: FieldRef<"SystemBroadcast", 'String'>
    readonly severity: FieldRef<"SystemBroadcast", 'String'>
    readonly targetTier: FieldRef<"SystemBroadcast", 'String'>
    readonly isActive: FieldRef<"SystemBroadcast", 'Boolean'>
    readonly expiresAt: FieldRef<"SystemBroadcast", 'DateTime'>
    readonly createdAt: FieldRef<"SystemBroadcast", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemBroadcast", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemBroadcast findUnique
   */
  export type SystemBroadcastFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemBroadcast
     */
    select?: SystemBroadcastSelect<ExtArgs> | null
    /**
     * Filter, which SystemBroadcast to fetch.
     */
    where: SystemBroadcastWhereUniqueInput
  }

  /**
   * SystemBroadcast findUniqueOrThrow
   */
  export type SystemBroadcastFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemBroadcast
     */
    select?: SystemBroadcastSelect<ExtArgs> | null
    /**
     * Filter, which SystemBroadcast to fetch.
     */
    where: SystemBroadcastWhereUniqueInput
  }

  /**
   * SystemBroadcast findFirst
   */
  export type SystemBroadcastFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemBroadcast
     */
    select?: SystemBroadcastSelect<ExtArgs> | null
    /**
     * Filter, which SystemBroadcast to fetch.
     */
    where?: SystemBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemBroadcasts to fetch.
     */
    orderBy?: SystemBroadcastOrderByWithRelationInput | SystemBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemBroadcasts.
     */
    cursor?: SystemBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemBroadcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemBroadcasts.
     */
    distinct?: SystemBroadcastScalarFieldEnum | SystemBroadcastScalarFieldEnum[]
  }

  /**
   * SystemBroadcast findFirstOrThrow
   */
  export type SystemBroadcastFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemBroadcast
     */
    select?: SystemBroadcastSelect<ExtArgs> | null
    /**
     * Filter, which SystemBroadcast to fetch.
     */
    where?: SystemBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemBroadcasts to fetch.
     */
    orderBy?: SystemBroadcastOrderByWithRelationInput | SystemBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemBroadcasts.
     */
    cursor?: SystemBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemBroadcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemBroadcasts.
     */
    distinct?: SystemBroadcastScalarFieldEnum | SystemBroadcastScalarFieldEnum[]
  }

  /**
   * SystemBroadcast findMany
   */
  export type SystemBroadcastFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemBroadcast
     */
    select?: SystemBroadcastSelect<ExtArgs> | null
    /**
     * Filter, which SystemBroadcasts to fetch.
     */
    where?: SystemBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemBroadcasts to fetch.
     */
    orderBy?: SystemBroadcastOrderByWithRelationInput | SystemBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemBroadcasts.
     */
    cursor?: SystemBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemBroadcasts.
     */
    skip?: number
    distinct?: SystemBroadcastScalarFieldEnum | SystemBroadcastScalarFieldEnum[]
  }

  /**
   * SystemBroadcast create
   */
  export type SystemBroadcastCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemBroadcast
     */
    select?: SystemBroadcastSelect<ExtArgs> | null
    /**
     * The data needed to create a SystemBroadcast.
     */
    data: XOR<SystemBroadcastCreateInput, SystemBroadcastUncheckedCreateInput>
  }

  /**
   * SystemBroadcast createMany
   */
  export type SystemBroadcastCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemBroadcasts.
     */
    data: SystemBroadcastCreateManyInput | SystemBroadcastCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemBroadcast createManyAndReturn
   */
  export type SystemBroadcastCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemBroadcast
     */
    select?: SystemBroadcastSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SystemBroadcasts.
     */
    data: SystemBroadcastCreateManyInput | SystemBroadcastCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemBroadcast update
   */
  export type SystemBroadcastUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemBroadcast
     */
    select?: SystemBroadcastSelect<ExtArgs> | null
    /**
     * The data needed to update a SystemBroadcast.
     */
    data: XOR<SystemBroadcastUpdateInput, SystemBroadcastUncheckedUpdateInput>
    /**
     * Choose, which SystemBroadcast to update.
     */
    where: SystemBroadcastWhereUniqueInput
  }

  /**
   * SystemBroadcast updateMany
   */
  export type SystemBroadcastUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemBroadcasts.
     */
    data: XOR<SystemBroadcastUpdateManyMutationInput, SystemBroadcastUncheckedUpdateManyInput>
    /**
     * Filter which SystemBroadcasts to update
     */
    where?: SystemBroadcastWhereInput
  }

  /**
   * SystemBroadcast upsert
   */
  export type SystemBroadcastUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemBroadcast
     */
    select?: SystemBroadcastSelect<ExtArgs> | null
    /**
     * The filter to search for the SystemBroadcast to update in case it exists.
     */
    where: SystemBroadcastWhereUniqueInput
    /**
     * In case the SystemBroadcast found by the `where` argument doesn't exist, create a new SystemBroadcast with this data.
     */
    create: XOR<SystemBroadcastCreateInput, SystemBroadcastUncheckedCreateInput>
    /**
     * In case the SystemBroadcast was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemBroadcastUpdateInput, SystemBroadcastUncheckedUpdateInput>
  }

  /**
   * SystemBroadcast delete
   */
  export type SystemBroadcastDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemBroadcast
     */
    select?: SystemBroadcastSelect<ExtArgs> | null
    /**
     * Filter which SystemBroadcast to delete.
     */
    where: SystemBroadcastWhereUniqueInput
  }

  /**
   * SystemBroadcast deleteMany
   */
  export type SystemBroadcastDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemBroadcasts to delete
     */
    where?: SystemBroadcastWhereInput
  }

  /**
   * SystemBroadcast without action
   */
  export type SystemBroadcastDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemBroadcast
     */
    select?: SystemBroadcastSelect<ExtArgs> | null
  }


  /**
   * Model AdminAuditLog
   */

  export type AggregateAdminAuditLog = {
    _count: AdminAuditLogCountAggregateOutputType | null
    _min: AdminAuditLogMinAggregateOutputType | null
    _max: AdminAuditLogMaxAggregateOutputType | null
  }

  export type AdminAuditLogMinAggregateOutputType = {
    id: string | null
    adminEmail: string | null
    action: string | null
    target: string | null
    details: string | null
    ipAddress: string | null
    severity: string | null
    timestamp: Date | null
  }

  export type AdminAuditLogMaxAggregateOutputType = {
    id: string | null
    adminEmail: string | null
    action: string | null
    target: string | null
    details: string | null
    ipAddress: string | null
    severity: string | null
    timestamp: Date | null
  }

  export type AdminAuditLogCountAggregateOutputType = {
    id: number
    adminEmail: number
    action: number
    target: number
    details: number
    ipAddress: number
    severity: number
    timestamp: number
    _all: number
  }


  export type AdminAuditLogMinAggregateInputType = {
    id?: true
    adminEmail?: true
    action?: true
    target?: true
    details?: true
    ipAddress?: true
    severity?: true
    timestamp?: true
  }

  export type AdminAuditLogMaxAggregateInputType = {
    id?: true
    adminEmail?: true
    action?: true
    target?: true
    details?: true
    ipAddress?: true
    severity?: true
    timestamp?: true
  }

  export type AdminAuditLogCountAggregateInputType = {
    id?: true
    adminEmail?: true
    action?: true
    target?: true
    details?: true
    ipAddress?: true
    severity?: true
    timestamp?: true
    _all?: true
  }

  export type AdminAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAuditLog to aggregate.
     */
    where?: AdminAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuditLogs to fetch.
     */
    orderBy?: AdminAuditLogOrderByWithRelationInput | AdminAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminAuditLogs
    **/
    _count?: true | AdminAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminAuditLogMaxAggregateInputType
  }

  export type GetAdminAuditLogAggregateType<T extends AdminAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminAuditLog[P]>
      : GetScalarType<T[P], AggregateAdminAuditLog[P]>
  }




  export type AdminAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminAuditLogWhereInput
    orderBy?: AdminAuditLogOrderByWithAggregationInput | AdminAuditLogOrderByWithAggregationInput[]
    by: AdminAuditLogScalarFieldEnum[] | AdminAuditLogScalarFieldEnum
    having?: AdminAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminAuditLogCountAggregateInputType | true
    _min?: AdminAuditLogMinAggregateInputType
    _max?: AdminAuditLogMaxAggregateInputType
  }

  export type AdminAuditLogGroupByOutputType = {
    id: string
    adminEmail: string
    action: string
    target: string
    details: string | null
    ipAddress: string | null
    severity: string
    timestamp: Date
    _count: AdminAuditLogCountAggregateOutputType | null
    _min: AdminAuditLogMinAggregateOutputType | null
    _max: AdminAuditLogMaxAggregateOutputType | null
  }

  type GetAdminAuditLogGroupByPayload<T extends AdminAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AdminAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AdminAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminEmail?: boolean
    action?: boolean
    target?: boolean
    details?: boolean
    ipAddress?: boolean
    severity?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["adminAuditLog"]>

  export type AdminAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminEmail?: boolean
    action?: boolean
    target?: boolean
    details?: boolean
    ipAddress?: boolean
    severity?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["adminAuditLog"]>

  export type AdminAuditLogSelectScalar = {
    id?: boolean
    adminEmail?: boolean
    action?: boolean
    target?: boolean
    details?: boolean
    ipAddress?: boolean
    severity?: boolean
    timestamp?: boolean
  }


  export type $AdminAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminAuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminEmail: string
      action: string
      target: string
      details: string | null
      ipAddress: string | null
      severity: string
      timestamp: Date
    }, ExtArgs["result"]["adminAuditLog"]>
    composites: {}
  }

  type AdminAuditLogGetPayload<S extends boolean | null | undefined | AdminAuditLogDefaultArgs> = $Result.GetResult<Prisma.$AdminAuditLogPayload, S>

  type AdminAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminAuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminAuditLogCountAggregateInputType | true
    }

  export interface AdminAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminAuditLog'], meta: { name: 'AdminAuditLog' } }
    /**
     * Find zero or one AdminAuditLog that matches the filter.
     * @param {AdminAuditLogFindUniqueArgs} args - Arguments to find a AdminAuditLog
     * @example
     * // Get one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminAuditLogFindUniqueArgs>(args: SelectSubset<T, AdminAuditLogFindUniqueArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminAuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminAuditLogFindUniqueOrThrowArgs} args - Arguments to find a AdminAuditLog
     * @example
     * // Get one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogFindFirstArgs} args - Arguments to find a AdminAuditLog
     * @example
     * // Get one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminAuditLogFindFirstArgs>(args?: SelectSubset<T, AdminAuditLogFindFirstArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogFindFirstOrThrowArgs} args - Arguments to find a AdminAuditLog
     * @example
     * // Get one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminAuditLogs
     * const adminAuditLogs = await prisma.adminAuditLog.findMany()
     * 
     * // Get first 10 AdminAuditLogs
     * const adminAuditLogs = await prisma.adminAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminAuditLogWithIdOnly = await prisma.adminAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminAuditLogFindManyArgs>(args?: SelectSubset<T, AdminAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminAuditLog.
     * @param {AdminAuditLogCreateArgs} args - Arguments to create a AdminAuditLog.
     * @example
     * // Create one AdminAuditLog
     * const AdminAuditLog = await prisma.adminAuditLog.create({
     *   data: {
     *     // ... data to create a AdminAuditLog
     *   }
     * })
     * 
     */
    create<T extends AdminAuditLogCreateArgs>(args: SelectSubset<T, AdminAuditLogCreateArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminAuditLogs.
     * @param {AdminAuditLogCreateManyArgs} args - Arguments to create many AdminAuditLogs.
     * @example
     * // Create many AdminAuditLogs
     * const adminAuditLog = await prisma.adminAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminAuditLogCreateManyArgs>(args?: SelectSubset<T, AdminAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminAuditLogs and returns the data saved in the database.
     * @param {AdminAuditLogCreateManyAndReturnArgs} args - Arguments to create many AdminAuditLogs.
     * @example
     * // Create many AdminAuditLogs
     * const adminAuditLog = await prisma.adminAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminAuditLogs and only return the `id`
     * const adminAuditLogWithIdOnly = await prisma.adminAuditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminAuditLog.
     * @param {AdminAuditLogDeleteArgs} args - Arguments to delete one AdminAuditLog.
     * @example
     * // Delete one AdminAuditLog
     * const AdminAuditLog = await prisma.adminAuditLog.delete({
     *   where: {
     *     // ... filter to delete one AdminAuditLog
     *   }
     * })
     * 
     */
    delete<T extends AdminAuditLogDeleteArgs>(args: SelectSubset<T, AdminAuditLogDeleteArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminAuditLog.
     * @param {AdminAuditLogUpdateArgs} args - Arguments to update one AdminAuditLog.
     * @example
     * // Update one AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminAuditLogUpdateArgs>(args: SelectSubset<T, AdminAuditLogUpdateArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminAuditLogs.
     * @param {AdminAuditLogDeleteManyArgs} args - Arguments to filter AdminAuditLogs to delete.
     * @example
     * // Delete a few AdminAuditLogs
     * const { count } = await prisma.adminAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminAuditLogDeleteManyArgs>(args?: SelectSubset<T, AdminAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminAuditLogs
     * const adminAuditLog = await prisma.adminAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminAuditLogUpdateManyArgs>(args: SelectSubset<T, AdminAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminAuditLog.
     * @param {AdminAuditLogUpsertArgs} args - Arguments to update or create a AdminAuditLog.
     * @example
     * // Update or create a AdminAuditLog
     * const adminAuditLog = await prisma.adminAuditLog.upsert({
     *   create: {
     *     // ... data to create a AdminAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AdminAuditLogUpsertArgs>(args: SelectSubset<T, AdminAuditLogUpsertArgs<ExtArgs>>): Prisma__AdminAuditLogClient<$Result.GetResult<Prisma.$AdminAuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogCountArgs} args - Arguments to filter AdminAuditLogs to count.
     * @example
     * // Count the number of AdminAuditLogs
     * const count = await prisma.adminAuditLog.count({
     *   where: {
     *     // ... the filter for the AdminAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AdminAuditLogCountArgs>(
      args?: Subset<T, AdminAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAuditLogAggregateArgs>(args: Subset<T, AdminAuditLogAggregateArgs>): Prisma.PrismaPromise<GetAdminAuditLogAggregateType<T>>

    /**
     * Group by AdminAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AdminAuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminAuditLog model
   */
  readonly fields: AdminAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminAuditLog model
   */ 
  interface AdminAuditLogFieldRefs {
    readonly id: FieldRef<"AdminAuditLog", 'String'>
    readonly adminEmail: FieldRef<"AdminAuditLog", 'String'>
    readonly action: FieldRef<"AdminAuditLog", 'String'>
    readonly target: FieldRef<"AdminAuditLog", 'String'>
    readonly details: FieldRef<"AdminAuditLog", 'String'>
    readonly ipAddress: FieldRef<"AdminAuditLog", 'String'>
    readonly severity: FieldRef<"AdminAuditLog", 'String'>
    readonly timestamp: FieldRef<"AdminAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminAuditLog findUnique
   */
  export type AdminAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AdminAuditLog to fetch.
     */
    where: AdminAuditLogWhereUniqueInput
  }

  /**
   * AdminAuditLog findUniqueOrThrow
   */
  export type AdminAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AdminAuditLog to fetch.
     */
    where: AdminAuditLogWhereUniqueInput
  }

  /**
   * AdminAuditLog findFirst
   */
  export type AdminAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AdminAuditLog to fetch.
     */
    where?: AdminAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuditLogs to fetch.
     */
    orderBy?: AdminAuditLogOrderByWithRelationInput | AdminAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminAuditLogs.
     */
    cursor?: AdminAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminAuditLogs.
     */
    distinct?: AdminAuditLogScalarFieldEnum | AdminAuditLogScalarFieldEnum[]
  }

  /**
   * AdminAuditLog findFirstOrThrow
   */
  export type AdminAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AdminAuditLog to fetch.
     */
    where?: AdminAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuditLogs to fetch.
     */
    orderBy?: AdminAuditLogOrderByWithRelationInput | AdminAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminAuditLogs.
     */
    cursor?: AdminAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminAuditLogs.
     */
    distinct?: AdminAuditLogScalarFieldEnum | AdminAuditLogScalarFieldEnum[]
  }

  /**
   * AdminAuditLog findMany
   */
  export type AdminAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AdminAuditLogs to fetch.
     */
    where?: AdminAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuditLogs to fetch.
     */
    orderBy?: AdminAuditLogOrderByWithRelationInput | AdminAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminAuditLogs.
     */
    cursor?: AdminAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuditLogs.
     */
    skip?: number
    distinct?: AdminAuditLogScalarFieldEnum | AdminAuditLogScalarFieldEnum[]
  }

  /**
   * AdminAuditLog create
   */
  export type AdminAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * The data needed to create a AdminAuditLog.
     */
    data: XOR<AdminAuditLogCreateInput, AdminAuditLogUncheckedCreateInput>
  }

  /**
   * AdminAuditLog createMany
   */
  export type AdminAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminAuditLogs.
     */
    data: AdminAuditLogCreateManyInput | AdminAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminAuditLog createManyAndReturn
   */
  export type AdminAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminAuditLogs.
     */
    data: AdminAuditLogCreateManyInput | AdminAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminAuditLog update
   */
  export type AdminAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * The data needed to update a AdminAuditLog.
     */
    data: XOR<AdminAuditLogUpdateInput, AdminAuditLogUncheckedUpdateInput>
    /**
     * Choose, which AdminAuditLog to update.
     */
    where: AdminAuditLogWhereUniqueInput
  }

  /**
   * AdminAuditLog updateMany
   */
  export type AdminAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminAuditLogs.
     */
    data: XOR<AdminAuditLogUpdateManyMutationInput, AdminAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AdminAuditLogs to update
     */
    where?: AdminAuditLogWhereInput
  }

  /**
   * AdminAuditLog upsert
   */
  export type AdminAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * The filter to search for the AdminAuditLog to update in case it exists.
     */
    where: AdminAuditLogWhereUniqueInput
    /**
     * In case the AdminAuditLog found by the `where` argument doesn't exist, create a new AdminAuditLog with this data.
     */
    create: XOR<AdminAuditLogCreateInput, AdminAuditLogUncheckedCreateInput>
    /**
     * In case the AdminAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminAuditLogUpdateInput, AdminAuditLogUncheckedUpdateInput>
  }

  /**
   * AdminAuditLog delete
   */
  export type AdminAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
    /**
     * Filter which AdminAuditLog to delete.
     */
    where: AdminAuditLogWhereUniqueInput
  }

  /**
   * AdminAuditLog deleteMany
   */
  export type AdminAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAuditLogs to delete
     */
    where?: AdminAuditLogWhereInput
  }

  /**
   * AdminAuditLog without action
   */
  export type AdminAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuditLog
     */
    select?: AdminAuditLogSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    companyName: 'companyName',
    phone: 'phone',
    status: 'status',
    internalNotes: 'internalNotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    tier: 'tier',
    name: 'name',
    description: 'description',
    badge: 'badge',
    isActive: 'isActive',
    entitlementsJson: 'entitlementsJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const PricingTierScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    duration: 'duration',
    price: 'price',
    originalPrice: 'originalPrice',
    discountPercent: 'discountPercent',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PricingTierScalarFieldEnum = (typeof PricingTierScalarFieldEnum)[keyof typeof PricingTierScalarFieldEnum]


  export const PlatformSettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type PlatformSettingScalarFieldEnum = (typeof PlatformSettingScalarFieldEnum)[keyof typeof PlatformSettingScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    discountPercent: 'discountPercent',
    maxDiscount: 'maxDiscount',
    validUntil: 'validUntil',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    planId: 'planId',
    duration: 'duration',
    status: 'status',
    amount: 'amount',
    currency: 'currency',
    startDate: 'startDate',
    endDate: 'endDate',
    hasSetupAssistance: 'hasSetupAssistance',
    setupFee: 'setupFee',
    paymentStatus: 'paymentStatus',
    paymentReference: 'paymentReference',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const LicenseScalarFieldEnum: {
    id: 'id',
    licenseKey: 'licenseKey',
    customerId: 'customerId',
    subscriptionId: 'subscriptionId',
    planTier: 'planTier',
    boundDomain: 'boundDomain',
    installationUuid: 'installationUuid',
    status: 'status',
    activatedAt: 'activatedAt',
    expiresAt: 'expiresAt',
    lastHeartbeatAt: 'lastHeartbeatAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LicenseScalarFieldEnum = (typeof LicenseScalarFieldEnum)[keyof typeof LicenseScalarFieldEnum]


  export const LicenseValidationLogScalarFieldEnum: {
    id: 'id',
    licenseId: 'licenseId',
    licenseKey: 'licenseKey',
    domain: 'domain',
    installationUuid: 'installationUuid',
    storeVersion: 'storeVersion',
    ipAddress: 'ipAddress',
    outcome: 'outcome',
    timestamp: 'timestamp'
  };

  export type LicenseValidationLogScalarFieldEnum = (typeof LicenseValidationLogScalarFieldEnum)[keyof typeof LicenseValidationLogScalarFieldEnum]


  export const SoftwareReleaseScalarFieldEnum: {
    id: 'id',
    version: 'version',
    releaseDate: 'releaseDate',
    isLatest: 'isLatest',
    isSecurityUpdate: 'isSecurityUpdate',
    changelog: 'changelog',
    downloadUrl: 'downloadUrl',
    createdAt: 'createdAt'
  };

  export type SoftwareReleaseScalarFieldEnum = (typeof SoftwareReleaseScalarFieldEnum)[keyof typeof SoftwareReleaseScalarFieldEnum]


  export const SupportTicketScalarFieldEnum: {
    id: 'id',
    ticketNumber: 'ticketNumber',
    customerId: 'customerId',
    subject: 'subject',
    category: 'category',
    priority: 'priority',
    status: 'status',
    internalNotes: 'internalNotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum]


  export const TicketMessageScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    senderType: 'senderType',
    senderName: 'senderName',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type TicketMessageScalarFieldEnum = (typeof TicketMessageScalarFieldEnum)[keyof typeof TicketMessageScalarFieldEnum]


  export const CustomizationQuoteScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    title: 'title',
    scopeDescription: 'scopeDescription',
    quotedAmount: 'quotedAmount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomizationQuoteScalarFieldEnum = (typeof CustomizationQuoteScalarFieldEnum)[keyof typeof CustomizationQuoteScalarFieldEnum]


  export const CentralThemeItemScalarFieldEnum: {
    id: 'id',
    themeCode: 'themeCode',
    name: 'name',
    description: 'description',
    previewImage: 'previewImage',
    isPremium: 'isPremium',
    price: 'price',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CentralThemeItemScalarFieldEnum = (typeof CentralThemeItemScalarFieldEnum)[keyof typeof CentralThemeItemScalarFieldEnum]


  export const SystemBroadcastScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    severity: 'severity',
    targetTier: 'targetTier',
    isActive: 'isActive',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemBroadcastScalarFieldEnum = (typeof SystemBroadcastScalarFieldEnum)[keyof typeof SystemBroadcastScalarFieldEnum]


  export const AdminAuditLogScalarFieldEnum: {
    id: 'id',
    adminEmail: 'adminEmail',
    action: 'action',
    target: 'target',
    details: 'details',
    ipAddress: 'ipAddress',
    severity: 'severity',
    timestamp: 'timestamp'
  };

  export type AdminAuditLogScalarFieldEnum = (typeof AdminAuditLogScalarFieldEnum)[keyof typeof AdminAuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    passwordHash?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    name?: StringFilter<"AdminUser"> | string
    passwordHash?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AdminUser"> | string
    role?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    passwordHash?: StringFilter<"Customer"> | string
    companyName?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    status?: StringFilter<"Customer"> | string
    internalNotes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
    licenses?: LicenseListRelationFilter
    tickets?: SupportTicketListRelationFilter
    quotes?: CustomizationQuoteListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    companyName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    internalNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    licenses?: LicenseOrderByRelationAggregateInput
    tickets?: SupportTicketOrderByRelationAggregateInput
    quotes?: CustomizationQuoteOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    passwordHash?: StringFilter<"Customer"> | string
    companyName?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    status?: StringFilter<"Customer"> | string
    internalNotes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
    licenses?: LicenseListRelationFilter
    tickets?: SupportTicketListRelationFilter
    quotes?: CustomizationQuoteListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    companyName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    internalNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    passwordHash?: StringWithAggregatesFilter<"Customer"> | string
    companyName?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    status?: StringWithAggregatesFilter<"Customer"> | string
    internalNotes?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    tier?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    description?: StringFilter<"Plan"> | string
    badge?: StringNullableFilter<"Plan"> | string | null
    isActive?: BoolFilter<"Plan"> | boolean
    entitlementsJson?: StringFilter<"Plan"> | string
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    pricingTiers?: PricingTierListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    tier?: SortOrder
    name?: SortOrder
    description?: SortOrder
    badge?: SortOrderInput | SortOrder
    isActive?: SortOrder
    entitlementsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pricingTiers?: PricingTierOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tier?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    name?: StringFilter<"Plan"> | string
    description?: StringFilter<"Plan"> | string
    badge?: StringNullableFilter<"Plan"> | string | null
    isActive?: BoolFilter<"Plan"> | boolean
    entitlementsJson?: StringFilter<"Plan"> | string
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    pricingTiers?: PricingTierListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }, "id" | "tier">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    tier?: SortOrder
    name?: SortOrder
    description?: SortOrder
    badge?: SortOrderInput | SortOrder
    isActive?: SortOrder
    entitlementsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    tier?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    description?: StringWithAggregatesFilter<"Plan"> | string
    badge?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    isActive?: BoolWithAggregatesFilter<"Plan"> | boolean
    entitlementsJson?: StringWithAggregatesFilter<"Plan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type PricingTierWhereInput = {
    AND?: PricingTierWhereInput | PricingTierWhereInput[]
    OR?: PricingTierWhereInput[]
    NOT?: PricingTierWhereInput | PricingTierWhereInput[]
    id?: StringFilter<"PricingTier"> | string
    planId?: StringFilter<"PricingTier"> | string
    duration?: StringFilter<"PricingTier"> | string
    price?: FloatFilter<"PricingTier"> | number
    originalPrice?: FloatNullableFilter<"PricingTier"> | number | null
    discountPercent?: FloatFilter<"PricingTier"> | number
    isActive?: BoolFilter<"PricingTier"> | boolean
    createdAt?: DateTimeFilter<"PricingTier"> | Date | string
    updatedAt?: DateTimeFilter<"PricingTier"> | Date | string
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
  }

  export type PricingTierOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrderInput | SortOrder
    discountPercent?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: PlanOrderByWithRelationInput
  }

  export type PricingTierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planId_duration?: PricingTierPlanIdDurationCompoundUniqueInput
    AND?: PricingTierWhereInput | PricingTierWhereInput[]
    OR?: PricingTierWhereInput[]
    NOT?: PricingTierWhereInput | PricingTierWhereInput[]
    planId?: StringFilter<"PricingTier"> | string
    duration?: StringFilter<"PricingTier"> | string
    price?: FloatFilter<"PricingTier"> | number
    originalPrice?: FloatNullableFilter<"PricingTier"> | number | null
    discountPercent?: FloatFilter<"PricingTier"> | number
    isActive?: BoolFilter<"PricingTier"> | boolean
    createdAt?: DateTimeFilter<"PricingTier"> | Date | string
    updatedAt?: DateTimeFilter<"PricingTier"> | Date | string
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
  }, "id" | "planId_duration">

  export type PricingTierOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrderInput | SortOrder
    discountPercent?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PricingTierCountOrderByAggregateInput
    _avg?: PricingTierAvgOrderByAggregateInput
    _max?: PricingTierMaxOrderByAggregateInput
    _min?: PricingTierMinOrderByAggregateInput
    _sum?: PricingTierSumOrderByAggregateInput
  }

  export type PricingTierScalarWhereWithAggregatesInput = {
    AND?: PricingTierScalarWhereWithAggregatesInput | PricingTierScalarWhereWithAggregatesInput[]
    OR?: PricingTierScalarWhereWithAggregatesInput[]
    NOT?: PricingTierScalarWhereWithAggregatesInput | PricingTierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PricingTier"> | string
    planId?: StringWithAggregatesFilter<"PricingTier"> | string
    duration?: StringWithAggregatesFilter<"PricingTier"> | string
    price?: FloatWithAggregatesFilter<"PricingTier"> | number
    originalPrice?: FloatNullableWithAggregatesFilter<"PricingTier"> | number | null
    discountPercent?: FloatWithAggregatesFilter<"PricingTier"> | number
    isActive?: BoolWithAggregatesFilter<"PricingTier"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PricingTier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PricingTier"> | Date | string
  }

  export type PlatformSettingWhereInput = {
    AND?: PlatformSettingWhereInput | PlatformSettingWhereInput[]
    OR?: PlatformSettingWhereInput[]
    NOT?: PlatformSettingWhereInput | PlatformSettingWhereInput[]
    id?: StringFilter<"PlatformSetting"> | string
    key?: StringFilter<"PlatformSetting"> | string
    value?: StringFilter<"PlatformSetting"> | string
    updatedAt?: DateTimeFilter<"PlatformSetting"> | Date | string
  }

  export type PlatformSettingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: PlatformSettingWhereInput | PlatformSettingWhereInput[]
    OR?: PlatformSettingWhereInput[]
    NOT?: PlatformSettingWhereInput | PlatformSettingWhereInput[]
    value?: StringFilter<"PlatformSetting"> | string
    updatedAt?: DateTimeFilter<"PlatformSetting"> | Date | string
  }, "id" | "key">

  export type PlatformSettingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    _count?: PlatformSettingCountOrderByAggregateInput
    _max?: PlatformSettingMaxOrderByAggregateInput
    _min?: PlatformSettingMinOrderByAggregateInput
  }

  export type PlatformSettingScalarWhereWithAggregatesInput = {
    AND?: PlatformSettingScalarWhereWithAggregatesInput | PlatformSettingScalarWhereWithAggregatesInput[]
    OR?: PlatformSettingScalarWhereWithAggregatesInput[]
    NOT?: PlatformSettingScalarWhereWithAggregatesInput | PlatformSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlatformSetting"> | string
    key?: StringWithAggregatesFilter<"PlatformSetting"> | string
    value?: StringWithAggregatesFilter<"PlatformSetting"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlatformSetting"> | Date | string
  }

  export type PromotionWhereInput = {
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    id?: StringFilter<"Promotion"> | string
    code?: StringFilter<"Promotion"> | string
    discountPercent?: FloatFilter<"Promotion"> | number
    maxDiscount?: FloatNullableFilter<"Promotion"> | number | null
    validUntil?: DateTimeNullableFilter<"Promotion"> | Date | string | null
    isActive?: BoolFilter<"Promotion"> | boolean
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeFilter<"Promotion"> | Date | string
  }

  export type PromotionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    discountPercent?: SortOrder
    maxDiscount?: SortOrderInput | SortOrder
    validUntil?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    discountPercent?: FloatFilter<"Promotion"> | number
    maxDiscount?: FloatNullableFilter<"Promotion"> | number | null
    validUntil?: DateTimeNullableFilter<"Promotion"> | Date | string | null
    isActive?: BoolFilter<"Promotion"> | boolean
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeFilter<"Promotion"> | Date | string
  }, "id" | "code">

  export type PromotionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    discountPercent?: SortOrder
    maxDiscount?: SortOrderInput | SortOrder
    validUntil?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromotionCountOrderByAggregateInput
    _avg?: PromotionAvgOrderByAggregateInput
    _max?: PromotionMaxOrderByAggregateInput
    _min?: PromotionMinOrderByAggregateInput
    _sum?: PromotionSumOrderByAggregateInput
  }

  export type PromotionScalarWhereWithAggregatesInput = {
    AND?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    OR?: PromotionScalarWhereWithAggregatesInput[]
    NOT?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Promotion"> | string
    code?: StringWithAggregatesFilter<"Promotion"> | string
    discountPercent?: FloatWithAggregatesFilter<"Promotion"> | number
    maxDiscount?: FloatNullableWithAggregatesFilter<"Promotion"> | number | null
    validUntil?: DateTimeNullableWithAggregatesFilter<"Promotion"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Promotion"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    customerId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    duration?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    amount?: FloatFilter<"Subscription"> | number
    currency?: StringFilter<"Subscription"> | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    hasSetupAssistance?: BoolFilter<"Subscription"> | boolean
    setupFee?: FloatFilter<"Subscription"> | number
    paymentStatus?: StringFilter<"Subscription"> | string
    paymentReference?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
    license?: XOR<LicenseNullableRelationFilter, LicenseWhereInput> | null
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    planId?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    hasSetupAssistance?: SortOrder
    setupFee?: SortOrder
    paymentStatus?: SortOrder
    paymentReference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    license?: LicenseOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    customerId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    duration?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    amount?: FloatFilter<"Subscription"> | number
    currency?: StringFilter<"Subscription"> | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    hasSetupAssistance?: BoolFilter<"Subscription"> | boolean
    setupFee?: FloatFilter<"Subscription"> | number
    paymentStatus?: StringFilter<"Subscription"> | string
    paymentReference?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
    license?: XOR<LicenseNullableRelationFilter, LicenseWhereInput> | null
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    planId?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    hasSetupAssistance?: SortOrder
    setupFee?: SortOrder
    paymentStatus?: SortOrder
    paymentReference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    customerId?: StringWithAggregatesFilter<"Subscription"> | string
    planId?: StringWithAggregatesFilter<"Subscription"> | string
    duration?: StringWithAggregatesFilter<"Subscription"> | string
    status?: StringWithAggregatesFilter<"Subscription"> | string
    amount?: FloatWithAggregatesFilter<"Subscription"> | number
    currency?: StringWithAggregatesFilter<"Subscription"> | string
    startDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    hasSetupAssistance?: BoolWithAggregatesFilter<"Subscription"> | boolean
    setupFee?: FloatWithAggregatesFilter<"Subscription"> | number
    paymentStatus?: StringWithAggregatesFilter<"Subscription"> | string
    paymentReference?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type LicenseWhereInput = {
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    id?: StringFilter<"License"> | string
    licenseKey?: StringFilter<"License"> | string
    customerId?: StringFilter<"License"> | string
    subscriptionId?: StringFilter<"License"> | string
    planTier?: StringFilter<"License"> | string
    boundDomain?: StringNullableFilter<"License"> | string | null
    installationUuid?: StringNullableFilter<"License"> | string | null
    status?: StringFilter<"License"> | string
    activatedAt?: DateTimeNullableFilter<"License"> | Date | string | null
    expiresAt?: DateTimeFilter<"License"> | Date | string
    lastHeartbeatAt?: DateTimeNullableFilter<"License"> | Date | string | null
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    subscription?: XOR<SubscriptionRelationFilter, SubscriptionWhereInput>
    validationLogs?: LicenseValidationLogListRelationFilter
  }

  export type LicenseOrderByWithRelationInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    customerId?: SortOrder
    subscriptionId?: SortOrder
    planTier?: SortOrder
    boundDomain?: SortOrderInput | SortOrder
    installationUuid?: SortOrderInput | SortOrder
    status?: SortOrder
    activatedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    lastHeartbeatAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
    validationLogs?: LicenseValidationLogOrderByRelationAggregateInput
  }

  export type LicenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licenseKey?: string
    subscriptionId?: string
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    customerId?: StringFilter<"License"> | string
    planTier?: StringFilter<"License"> | string
    boundDomain?: StringNullableFilter<"License"> | string | null
    installationUuid?: StringNullableFilter<"License"> | string | null
    status?: StringFilter<"License"> | string
    activatedAt?: DateTimeNullableFilter<"License"> | Date | string | null
    expiresAt?: DateTimeFilter<"License"> | Date | string
    lastHeartbeatAt?: DateTimeNullableFilter<"License"> | Date | string | null
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    subscription?: XOR<SubscriptionRelationFilter, SubscriptionWhereInput>
    validationLogs?: LicenseValidationLogListRelationFilter
  }, "id" | "licenseKey" | "subscriptionId">

  export type LicenseOrderByWithAggregationInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    customerId?: SortOrder
    subscriptionId?: SortOrder
    planTier?: SortOrder
    boundDomain?: SortOrderInput | SortOrder
    installationUuid?: SortOrderInput | SortOrder
    status?: SortOrder
    activatedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    lastHeartbeatAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LicenseCountOrderByAggregateInput
    _max?: LicenseMaxOrderByAggregateInput
    _min?: LicenseMinOrderByAggregateInput
  }

  export type LicenseScalarWhereWithAggregatesInput = {
    AND?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    OR?: LicenseScalarWhereWithAggregatesInput[]
    NOT?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"License"> | string
    licenseKey?: StringWithAggregatesFilter<"License"> | string
    customerId?: StringWithAggregatesFilter<"License"> | string
    subscriptionId?: StringWithAggregatesFilter<"License"> | string
    planTier?: StringWithAggregatesFilter<"License"> | string
    boundDomain?: StringNullableWithAggregatesFilter<"License"> | string | null
    installationUuid?: StringNullableWithAggregatesFilter<"License"> | string | null
    status?: StringWithAggregatesFilter<"License"> | string
    activatedAt?: DateTimeNullableWithAggregatesFilter<"License"> | Date | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
    lastHeartbeatAt?: DateTimeNullableWithAggregatesFilter<"License"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
  }

  export type LicenseValidationLogWhereInput = {
    AND?: LicenseValidationLogWhereInput | LicenseValidationLogWhereInput[]
    OR?: LicenseValidationLogWhereInput[]
    NOT?: LicenseValidationLogWhereInput | LicenseValidationLogWhereInput[]
    id?: StringFilter<"LicenseValidationLog"> | string
    licenseId?: StringFilter<"LicenseValidationLog"> | string
    licenseKey?: StringFilter<"LicenseValidationLog"> | string
    domain?: StringNullableFilter<"LicenseValidationLog"> | string | null
    installationUuid?: StringNullableFilter<"LicenseValidationLog"> | string | null
    storeVersion?: StringNullableFilter<"LicenseValidationLog"> | string | null
    ipAddress?: StringNullableFilter<"LicenseValidationLog"> | string | null
    outcome?: StringFilter<"LicenseValidationLog"> | string
    timestamp?: DateTimeFilter<"LicenseValidationLog"> | Date | string
    license?: XOR<LicenseRelationFilter, LicenseWhereInput>
  }

  export type LicenseValidationLogOrderByWithRelationInput = {
    id?: SortOrder
    licenseId?: SortOrder
    licenseKey?: SortOrder
    domain?: SortOrderInput | SortOrder
    installationUuid?: SortOrderInput | SortOrder
    storeVersion?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    outcome?: SortOrder
    timestamp?: SortOrder
    license?: LicenseOrderByWithRelationInput
  }

  export type LicenseValidationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LicenseValidationLogWhereInput | LicenseValidationLogWhereInput[]
    OR?: LicenseValidationLogWhereInput[]
    NOT?: LicenseValidationLogWhereInput | LicenseValidationLogWhereInput[]
    licenseId?: StringFilter<"LicenseValidationLog"> | string
    licenseKey?: StringFilter<"LicenseValidationLog"> | string
    domain?: StringNullableFilter<"LicenseValidationLog"> | string | null
    installationUuid?: StringNullableFilter<"LicenseValidationLog"> | string | null
    storeVersion?: StringNullableFilter<"LicenseValidationLog"> | string | null
    ipAddress?: StringNullableFilter<"LicenseValidationLog"> | string | null
    outcome?: StringFilter<"LicenseValidationLog"> | string
    timestamp?: DateTimeFilter<"LicenseValidationLog"> | Date | string
    license?: XOR<LicenseRelationFilter, LicenseWhereInput>
  }, "id">

  export type LicenseValidationLogOrderByWithAggregationInput = {
    id?: SortOrder
    licenseId?: SortOrder
    licenseKey?: SortOrder
    domain?: SortOrderInput | SortOrder
    installationUuid?: SortOrderInput | SortOrder
    storeVersion?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    outcome?: SortOrder
    timestamp?: SortOrder
    _count?: LicenseValidationLogCountOrderByAggregateInput
    _max?: LicenseValidationLogMaxOrderByAggregateInput
    _min?: LicenseValidationLogMinOrderByAggregateInput
  }

  export type LicenseValidationLogScalarWhereWithAggregatesInput = {
    AND?: LicenseValidationLogScalarWhereWithAggregatesInput | LicenseValidationLogScalarWhereWithAggregatesInput[]
    OR?: LicenseValidationLogScalarWhereWithAggregatesInput[]
    NOT?: LicenseValidationLogScalarWhereWithAggregatesInput | LicenseValidationLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LicenseValidationLog"> | string
    licenseId?: StringWithAggregatesFilter<"LicenseValidationLog"> | string
    licenseKey?: StringWithAggregatesFilter<"LicenseValidationLog"> | string
    domain?: StringNullableWithAggregatesFilter<"LicenseValidationLog"> | string | null
    installationUuid?: StringNullableWithAggregatesFilter<"LicenseValidationLog"> | string | null
    storeVersion?: StringNullableWithAggregatesFilter<"LicenseValidationLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"LicenseValidationLog"> | string | null
    outcome?: StringWithAggregatesFilter<"LicenseValidationLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"LicenseValidationLog"> | Date | string
  }

  export type SoftwareReleaseWhereInput = {
    AND?: SoftwareReleaseWhereInput | SoftwareReleaseWhereInput[]
    OR?: SoftwareReleaseWhereInput[]
    NOT?: SoftwareReleaseWhereInput | SoftwareReleaseWhereInput[]
    id?: StringFilter<"SoftwareRelease"> | string
    version?: StringFilter<"SoftwareRelease"> | string
    releaseDate?: DateTimeFilter<"SoftwareRelease"> | Date | string
    isLatest?: BoolFilter<"SoftwareRelease"> | boolean
    isSecurityUpdate?: BoolFilter<"SoftwareRelease"> | boolean
    changelog?: StringFilter<"SoftwareRelease"> | string
    downloadUrl?: StringNullableFilter<"SoftwareRelease"> | string | null
    createdAt?: DateTimeFilter<"SoftwareRelease"> | Date | string
  }

  export type SoftwareReleaseOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    releaseDate?: SortOrder
    isLatest?: SortOrder
    isSecurityUpdate?: SortOrder
    changelog?: SortOrder
    downloadUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type SoftwareReleaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    version?: string
    AND?: SoftwareReleaseWhereInput | SoftwareReleaseWhereInput[]
    OR?: SoftwareReleaseWhereInput[]
    NOT?: SoftwareReleaseWhereInput | SoftwareReleaseWhereInput[]
    releaseDate?: DateTimeFilter<"SoftwareRelease"> | Date | string
    isLatest?: BoolFilter<"SoftwareRelease"> | boolean
    isSecurityUpdate?: BoolFilter<"SoftwareRelease"> | boolean
    changelog?: StringFilter<"SoftwareRelease"> | string
    downloadUrl?: StringNullableFilter<"SoftwareRelease"> | string | null
    createdAt?: DateTimeFilter<"SoftwareRelease"> | Date | string
  }, "id" | "version">

  export type SoftwareReleaseOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    releaseDate?: SortOrder
    isLatest?: SortOrder
    isSecurityUpdate?: SortOrder
    changelog?: SortOrder
    downloadUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SoftwareReleaseCountOrderByAggregateInput
    _max?: SoftwareReleaseMaxOrderByAggregateInput
    _min?: SoftwareReleaseMinOrderByAggregateInput
  }

  export type SoftwareReleaseScalarWhereWithAggregatesInput = {
    AND?: SoftwareReleaseScalarWhereWithAggregatesInput | SoftwareReleaseScalarWhereWithAggregatesInput[]
    OR?: SoftwareReleaseScalarWhereWithAggregatesInput[]
    NOT?: SoftwareReleaseScalarWhereWithAggregatesInput | SoftwareReleaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SoftwareRelease"> | string
    version?: StringWithAggregatesFilter<"SoftwareRelease"> | string
    releaseDate?: DateTimeWithAggregatesFilter<"SoftwareRelease"> | Date | string
    isLatest?: BoolWithAggregatesFilter<"SoftwareRelease"> | boolean
    isSecurityUpdate?: BoolWithAggregatesFilter<"SoftwareRelease"> | boolean
    changelog?: StringWithAggregatesFilter<"SoftwareRelease"> | string
    downloadUrl?: StringNullableWithAggregatesFilter<"SoftwareRelease"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SoftwareRelease"> | Date | string
  }

  export type SupportTicketWhereInput = {
    AND?: SupportTicketWhereInput | SupportTicketWhereInput[]
    OR?: SupportTicketWhereInput[]
    NOT?: SupportTicketWhereInput | SupportTicketWhereInput[]
    id?: StringFilter<"SupportTicket"> | string
    ticketNumber?: StringFilter<"SupportTicket"> | string
    customerId?: StringFilter<"SupportTicket"> | string
    subject?: StringFilter<"SupportTicket"> | string
    category?: StringFilter<"SupportTicket"> | string
    priority?: StringFilter<"SupportTicket"> | string
    status?: StringFilter<"SupportTicket"> | string
    internalNotes?: StringNullableFilter<"SupportTicket"> | string | null
    createdAt?: DateTimeFilter<"SupportTicket"> | Date | string
    updatedAt?: DateTimeFilter<"SupportTicket"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    messages?: TicketMessageListRelationFilter
  }

  export type SupportTicketOrderByWithRelationInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    customerId?: SortOrder
    subject?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    internalNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    messages?: TicketMessageOrderByRelationAggregateInput
  }

  export type SupportTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticketNumber?: string
    AND?: SupportTicketWhereInput | SupportTicketWhereInput[]
    OR?: SupportTicketWhereInput[]
    NOT?: SupportTicketWhereInput | SupportTicketWhereInput[]
    customerId?: StringFilter<"SupportTicket"> | string
    subject?: StringFilter<"SupportTicket"> | string
    category?: StringFilter<"SupportTicket"> | string
    priority?: StringFilter<"SupportTicket"> | string
    status?: StringFilter<"SupportTicket"> | string
    internalNotes?: StringNullableFilter<"SupportTicket"> | string | null
    createdAt?: DateTimeFilter<"SupportTicket"> | Date | string
    updatedAt?: DateTimeFilter<"SupportTicket"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    messages?: TicketMessageListRelationFilter
  }, "id" | "ticketNumber">

  export type SupportTicketOrderByWithAggregationInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    customerId?: SortOrder
    subject?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    internalNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupportTicketCountOrderByAggregateInput
    _max?: SupportTicketMaxOrderByAggregateInput
    _min?: SupportTicketMinOrderByAggregateInput
  }

  export type SupportTicketScalarWhereWithAggregatesInput = {
    AND?: SupportTicketScalarWhereWithAggregatesInput | SupportTicketScalarWhereWithAggregatesInput[]
    OR?: SupportTicketScalarWhereWithAggregatesInput[]
    NOT?: SupportTicketScalarWhereWithAggregatesInput | SupportTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupportTicket"> | string
    ticketNumber?: StringWithAggregatesFilter<"SupportTicket"> | string
    customerId?: StringWithAggregatesFilter<"SupportTicket"> | string
    subject?: StringWithAggregatesFilter<"SupportTicket"> | string
    category?: StringWithAggregatesFilter<"SupportTicket"> | string
    priority?: StringWithAggregatesFilter<"SupportTicket"> | string
    status?: StringWithAggregatesFilter<"SupportTicket"> | string
    internalNotes?: StringNullableWithAggregatesFilter<"SupportTicket"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string
  }

  export type TicketMessageWhereInput = {
    AND?: TicketMessageWhereInput | TicketMessageWhereInput[]
    OR?: TicketMessageWhereInput[]
    NOT?: TicketMessageWhereInput | TicketMessageWhereInput[]
    id?: StringFilter<"TicketMessage"> | string
    ticketId?: StringFilter<"TicketMessage"> | string
    senderType?: StringFilter<"TicketMessage"> | string
    senderName?: StringFilter<"TicketMessage"> | string
    message?: StringFilter<"TicketMessage"> | string
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
    ticket?: XOR<SupportTicketRelationFilter, SupportTicketWhereInput>
  }

  export type TicketMessageOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    ticket?: SupportTicketOrderByWithRelationInput
  }

  export type TicketMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketMessageWhereInput | TicketMessageWhereInput[]
    OR?: TicketMessageWhereInput[]
    NOT?: TicketMessageWhereInput | TicketMessageWhereInput[]
    ticketId?: StringFilter<"TicketMessage"> | string
    senderType?: StringFilter<"TicketMessage"> | string
    senderName?: StringFilter<"TicketMessage"> | string
    message?: StringFilter<"TicketMessage"> | string
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
    ticket?: XOR<SupportTicketRelationFilter, SupportTicketWhereInput>
  }, "id">

  export type TicketMessageOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: TicketMessageCountOrderByAggregateInput
    _max?: TicketMessageMaxOrderByAggregateInput
    _min?: TicketMessageMinOrderByAggregateInput
  }

  export type TicketMessageScalarWhereWithAggregatesInput = {
    AND?: TicketMessageScalarWhereWithAggregatesInput | TicketMessageScalarWhereWithAggregatesInput[]
    OR?: TicketMessageScalarWhereWithAggregatesInput[]
    NOT?: TicketMessageScalarWhereWithAggregatesInput | TicketMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketMessage"> | string
    ticketId?: StringWithAggregatesFilter<"TicketMessage"> | string
    senderType?: StringWithAggregatesFilter<"TicketMessage"> | string
    senderName?: StringWithAggregatesFilter<"TicketMessage"> | string
    message?: StringWithAggregatesFilter<"TicketMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TicketMessage"> | Date | string
  }

  export type CustomizationQuoteWhereInput = {
    AND?: CustomizationQuoteWhereInput | CustomizationQuoteWhereInput[]
    OR?: CustomizationQuoteWhereInput[]
    NOT?: CustomizationQuoteWhereInput | CustomizationQuoteWhereInput[]
    id?: StringFilter<"CustomizationQuote"> | string
    customerId?: StringFilter<"CustomizationQuote"> | string
    title?: StringFilter<"CustomizationQuote"> | string
    scopeDescription?: StringFilter<"CustomizationQuote"> | string
    quotedAmount?: FloatFilter<"CustomizationQuote"> | number
    status?: StringFilter<"CustomizationQuote"> | string
    createdAt?: DateTimeFilter<"CustomizationQuote"> | Date | string
    updatedAt?: DateTimeFilter<"CustomizationQuote"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }

  export type CustomizationQuoteOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    title?: SortOrder
    scopeDescription?: SortOrder
    quotedAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type CustomizationQuoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomizationQuoteWhereInput | CustomizationQuoteWhereInput[]
    OR?: CustomizationQuoteWhereInput[]
    NOT?: CustomizationQuoteWhereInput | CustomizationQuoteWhereInput[]
    customerId?: StringFilter<"CustomizationQuote"> | string
    title?: StringFilter<"CustomizationQuote"> | string
    scopeDescription?: StringFilter<"CustomizationQuote"> | string
    quotedAmount?: FloatFilter<"CustomizationQuote"> | number
    status?: StringFilter<"CustomizationQuote"> | string
    createdAt?: DateTimeFilter<"CustomizationQuote"> | Date | string
    updatedAt?: DateTimeFilter<"CustomizationQuote"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }, "id">

  export type CustomizationQuoteOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    title?: SortOrder
    scopeDescription?: SortOrder
    quotedAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomizationQuoteCountOrderByAggregateInput
    _avg?: CustomizationQuoteAvgOrderByAggregateInput
    _max?: CustomizationQuoteMaxOrderByAggregateInput
    _min?: CustomizationQuoteMinOrderByAggregateInput
    _sum?: CustomizationQuoteSumOrderByAggregateInput
  }

  export type CustomizationQuoteScalarWhereWithAggregatesInput = {
    AND?: CustomizationQuoteScalarWhereWithAggregatesInput | CustomizationQuoteScalarWhereWithAggregatesInput[]
    OR?: CustomizationQuoteScalarWhereWithAggregatesInput[]
    NOT?: CustomizationQuoteScalarWhereWithAggregatesInput | CustomizationQuoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomizationQuote"> | string
    customerId?: StringWithAggregatesFilter<"CustomizationQuote"> | string
    title?: StringWithAggregatesFilter<"CustomizationQuote"> | string
    scopeDescription?: StringWithAggregatesFilter<"CustomizationQuote"> | string
    quotedAmount?: FloatWithAggregatesFilter<"CustomizationQuote"> | number
    status?: StringWithAggregatesFilter<"CustomizationQuote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CustomizationQuote"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomizationQuote"> | Date | string
  }

  export type CentralThemeItemWhereInput = {
    AND?: CentralThemeItemWhereInput | CentralThemeItemWhereInput[]
    OR?: CentralThemeItemWhereInput[]
    NOT?: CentralThemeItemWhereInput | CentralThemeItemWhereInput[]
    id?: StringFilter<"CentralThemeItem"> | string
    themeCode?: StringFilter<"CentralThemeItem"> | string
    name?: StringFilter<"CentralThemeItem"> | string
    description?: StringFilter<"CentralThemeItem"> | string
    previewImage?: StringNullableFilter<"CentralThemeItem"> | string | null
    isPremium?: BoolFilter<"CentralThemeItem"> | boolean
    price?: FloatFilter<"CentralThemeItem"> | number
    isActive?: BoolFilter<"CentralThemeItem"> | boolean
    createdAt?: DateTimeFilter<"CentralThemeItem"> | Date | string
    updatedAt?: DateTimeFilter<"CentralThemeItem"> | Date | string
  }

  export type CentralThemeItemOrderByWithRelationInput = {
    id?: SortOrder
    themeCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    previewImage?: SortOrderInput | SortOrder
    isPremium?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CentralThemeItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    themeCode?: string
    AND?: CentralThemeItemWhereInput | CentralThemeItemWhereInput[]
    OR?: CentralThemeItemWhereInput[]
    NOT?: CentralThemeItemWhereInput | CentralThemeItemWhereInput[]
    name?: StringFilter<"CentralThemeItem"> | string
    description?: StringFilter<"CentralThemeItem"> | string
    previewImage?: StringNullableFilter<"CentralThemeItem"> | string | null
    isPremium?: BoolFilter<"CentralThemeItem"> | boolean
    price?: FloatFilter<"CentralThemeItem"> | number
    isActive?: BoolFilter<"CentralThemeItem"> | boolean
    createdAt?: DateTimeFilter<"CentralThemeItem"> | Date | string
    updatedAt?: DateTimeFilter<"CentralThemeItem"> | Date | string
  }, "id" | "themeCode">

  export type CentralThemeItemOrderByWithAggregationInput = {
    id?: SortOrder
    themeCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    previewImage?: SortOrderInput | SortOrder
    isPremium?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CentralThemeItemCountOrderByAggregateInput
    _avg?: CentralThemeItemAvgOrderByAggregateInput
    _max?: CentralThemeItemMaxOrderByAggregateInput
    _min?: CentralThemeItemMinOrderByAggregateInput
    _sum?: CentralThemeItemSumOrderByAggregateInput
  }

  export type CentralThemeItemScalarWhereWithAggregatesInput = {
    AND?: CentralThemeItemScalarWhereWithAggregatesInput | CentralThemeItemScalarWhereWithAggregatesInput[]
    OR?: CentralThemeItemScalarWhereWithAggregatesInput[]
    NOT?: CentralThemeItemScalarWhereWithAggregatesInput | CentralThemeItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CentralThemeItem"> | string
    themeCode?: StringWithAggregatesFilter<"CentralThemeItem"> | string
    name?: StringWithAggregatesFilter<"CentralThemeItem"> | string
    description?: StringWithAggregatesFilter<"CentralThemeItem"> | string
    previewImage?: StringNullableWithAggregatesFilter<"CentralThemeItem"> | string | null
    isPremium?: BoolWithAggregatesFilter<"CentralThemeItem"> | boolean
    price?: FloatWithAggregatesFilter<"CentralThemeItem"> | number
    isActive?: BoolWithAggregatesFilter<"CentralThemeItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CentralThemeItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CentralThemeItem"> | Date | string
  }

  export type SystemBroadcastWhereInput = {
    AND?: SystemBroadcastWhereInput | SystemBroadcastWhereInput[]
    OR?: SystemBroadcastWhereInput[]
    NOT?: SystemBroadcastWhereInput | SystemBroadcastWhereInput[]
    id?: StringFilter<"SystemBroadcast"> | string
    title?: StringFilter<"SystemBroadcast"> | string
    message?: StringFilter<"SystemBroadcast"> | string
    severity?: StringFilter<"SystemBroadcast"> | string
    targetTier?: StringFilter<"SystemBroadcast"> | string
    isActive?: BoolFilter<"SystemBroadcast"> | boolean
    expiresAt?: DateTimeNullableFilter<"SystemBroadcast"> | Date | string | null
    createdAt?: DateTimeFilter<"SystemBroadcast"> | Date | string
    updatedAt?: DateTimeFilter<"SystemBroadcast"> | Date | string
  }

  export type SystemBroadcastOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    targetTier?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemBroadcastWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SystemBroadcastWhereInput | SystemBroadcastWhereInput[]
    OR?: SystemBroadcastWhereInput[]
    NOT?: SystemBroadcastWhereInput | SystemBroadcastWhereInput[]
    title?: StringFilter<"SystemBroadcast"> | string
    message?: StringFilter<"SystemBroadcast"> | string
    severity?: StringFilter<"SystemBroadcast"> | string
    targetTier?: StringFilter<"SystemBroadcast"> | string
    isActive?: BoolFilter<"SystemBroadcast"> | boolean
    expiresAt?: DateTimeNullableFilter<"SystemBroadcast"> | Date | string | null
    createdAt?: DateTimeFilter<"SystemBroadcast"> | Date | string
    updatedAt?: DateTimeFilter<"SystemBroadcast"> | Date | string
  }, "id">

  export type SystemBroadcastOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    targetTier?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemBroadcastCountOrderByAggregateInput
    _max?: SystemBroadcastMaxOrderByAggregateInput
    _min?: SystemBroadcastMinOrderByAggregateInput
  }

  export type SystemBroadcastScalarWhereWithAggregatesInput = {
    AND?: SystemBroadcastScalarWhereWithAggregatesInput | SystemBroadcastScalarWhereWithAggregatesInput[]
    OR?: SystemBroadcastScalarWhereWithAggregatesInput[]
    NOT?: SystemBroadcastScalarWhereWithAggregatesInput | SystemBroadcastScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemBroadcast"> | string
    title?: StringWithAggregatesFilter<"SystemBroadcast"> | string
    message?: StringWithAggregatesFilter<"SystemBroadcast"> | string
    severity?: StringWithAggregatesFilter<"SystemBroadcast"> | string
    targetTier?: StringWithAggregatesFilter<"SystemBroadcast"> | string
    isActive?: BoolWithAggregatesFilter<"SystemBroadcast"> | boolean
    expiresAt?: DateTimeNullableWithAggregatesFilter<"SystemBroadcast"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SystemBroadcast"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemBroadcast"> | Date | string
  }

  export type AdminAuditLogWhereInput = {
    AND?: AdminAuditLogWhereInput | AdminAuditLogWhereInput[]
    OR?: AdminAuditLogWhereInput[]
    NOT?: AdminAuditLogWhereInput | AdminAuditLogWhereInput[]
    id?: StringFilter<"AdminAuditLog"> | string
    adminEmail?: StringFilter<"AdminAuditLog"> | string
    action?: StringFilter<"AdminAuditLog"> | string
    target?: StringFilter<"AdminAuditLog"> | string
    details?: StringNullableFilter<"AdminAuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AdminAuditLog"> | string | null
    severity?: StringFilter<"AdminAuditLog"> | string
    timestamp?: DateTimeFilter<"AdminAuditLog"> | Date | string
  }

  export type AdminAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    adminEmail?: SortOrder
    action?: SortOrder
    target?: SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    severity?: SortOrder
    timestamp?: SortOrder
  }

  export type AdminAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminAuditLogWhereInput | AdminAuditLogWhereInput[]
    OR?: AdminAuditLogWhereInput[]
    NOT?: AdminAuditLogWhereInput | AdminAuditLogWhereInput[]
    adminEmail?: StringFilter<"AdminAuditLog"> | string
    action?: StringFilter<"AdminAuditLog"> | string
    target?: StringFilter<"AdminAuditLog"> | string
    details?: StringNullableFilter<"AdminAuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AdminAuditLog"> | string | null
    severity?: StringFilter<"AdminAuditLog"> | string
    timestamp?: DateTimeFilter<"AdminAuditLog"> | Date | string
  }, "id">

  export type AdminAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    adminEmail?: SortOrder
    action?: SortOrder
    target?: SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    severity?: SortOrder
    timestamp?: SortOrder
    _count?: AdminAuditLogCountOrderByAggregateInput
    _max?: AdminAuditLogMaxOrderByAggregateInput
    _min?: AdminAuditLogMinOrderByAggregateInput
  }

  export type AdminAuditLogScalarWhereWithAggregatesInput = {
    AND?: AdminAuditLogScalarWhereWithAggregatesInput | AdminAuditLogScalarWhereWithAggregatesInput[]
    OR?: AdminAuditLogScalarWhereWithAggregatesInput[]
    NOT?: AdminAuditLogScalarWhereWithAggregatesInput | AdminAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    adminEmail?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    action?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    target?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    details?: StringNullableWithAggregatesFilter<"AdminAuditLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AdminAuditLog"> | string | null
    severity?: StringWithAggregatesFilter<"AdminAuditLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AdminAuditLog"> | Date | string
  }

  export type AdminUserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutCustomerInput
    licenses?: LicenseCreateNestedManyWithoutCustomerInput
    tickets?: SupportTicketCreateNestedManyWithoutCustomerInput
    quotes?: CustomizationQuoteCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCustomerInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutCustomerInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutCustomerInput
    quotes?: CustomizationQuoteUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutCustomerNestedInput
    licenses?: LicenseUpdateManyWithoutCustomerNestedInput
    tickets?: SupportTicketUpdateManyWithoutCustomerNestedInput
    quotes?: CustomizationQuoteUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutCustomerNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutCustomerNestedInput
    quotes?: CustomizationQuoteUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateInput = {
    id?: string
    tier: string
    name: string
    description: string
    badge?: string | null
    isActive?: boolean
    entitlementsJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pricingTiers?: PricingTierCreateNestedManyWithoutPlanInput
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    tier: string
    name: string
    description: string
    badge?: string | null
    isActive?: boolean
    entitlementsJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pricingTiers?: PricingTierUncheckedCreateNestedManyWithoutPlanInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    entitlementsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingTiers?: PricingTierUpdateManyWithoutPlanNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    entitlementsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingTiers?: PricingTierUncheckedUpdateManyWithoutPlanNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    tier: string
    name: string
    description: string
    badge?: string | null
    isActive?: boolean
    entitlementsJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    entitlementsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    entitlementsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingTierCreateInput = {
    id?: string
    duration: string
    price: number
    originalPrice?: number | null
    discountPercent?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutPricingTiersInput
  }

  export type PricingTierUncheckedCreateInput = {
    id?: string
    planId: string
    duration: string
    price: number
    originalPrice?: number | null
    discountPercent?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingTierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutPricingTiersNestedInput
  }

  export type PricingTierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingTierCreateManyInput = {
    id?: string
    planId: string
    duration: string
    price: number
    originalPrice?: number | null
    discountPercent?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingTierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingTierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformSettingCreateInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type PlatformSettingUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type PlatformSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformSettingCreateManyInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type PlatformSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateInput = {
    id?: string
    code: string
    discountPercent: number
    maxDiscount?: number | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionUncheckedCreateInput = {
    id?: string
    code: string
    discountPercent: number
    maxDiscount?: number | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPercent?: FloatFieldUpdateOperationsInput | number
    maxDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPercent?: FloatFieldUpdateOperationsInput | number
    maxDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateManyInput = {
    id?: string
    code: string
    discountPercent: number
    maxDiscount?: number | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPercent?: FloatFieldUpdateOperationsInput | number
    maxDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPercent?: FloatFieldUpdateOperationsInput | number
    maxDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    duration: string
    status?: string
    amount: number
    currency?: string
    startDate?: Date | string
    endDate: Date | string
    hasSetupAssistance?: boolean
    setupFee?: number
    paymentStatus?: string
    paymentReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSubscriptionsInput
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    license?: LicenseCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    customerId: string
    planId: string
    duration: string
    status?: string
    amount: number
    currency?: string
    startDate?: Date | string
    endDate: Date | string
    hasSetupAssistance?: boolean
    setupFee?: number
    paymentStatus?: string
    paymentReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    license?: LicenseUncheckedCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hasSetupAssistance?: BoolFieldUpdateOperationsInput | boolean
    setupFee?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSubscriptionsNestedInput
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    license?: LicenseUpdateOneWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hasSetupAssistance?: BoolFieldUpdateOperationsInput | boolean
    setupFee?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: LicenseUncheckedUpdateOneWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    customerId: string
    planId: string
    duration: string
    status?: string
    amount: number
    currency?: string
    startDate?: Date | string
    endDate: Date | string
    hasSetupAssistance?: boolean
    setupFee?: number
    paymentStatus?: string
    paymentReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hasSetupAssistance?: BoolFieldUpdateOperationsInput | boolean
    setupFee?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hasSetupAssistance?: BoolFieldUpdateOperationsInput | boolean
    setupFee?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseCreateInput = {
    id?: string
    licenseKey: string
    planTier: string
    boundDomain?: string | null
    installationUuid?: string | null
    status?: string
    activatedAt?: Date | string | null
    expiresAt: Date | string
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLicensesInput
    subscription: SubscriptionCreateNestedOneWithoutLicenseInput
    validationLogs?: LicenseValidationLogCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateInput = {
    id?: string
    licenseKey: string
    customerId: string
    subscriptionId: string
    planTier: string
    boundDomain?: string | null
    installationUuid?: string | null
    status?: string
    activatedAt?: Date | string | null
    expiresAt: Date | string
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    validationLogs?: LicenseValidationLogUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    boundDomain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLicensesNestedInput
    subscription?: SubscriptionUpdateOneRequiredWithoutLicenseNestedInput
    validationLogs?: LicenseValidationLogUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    boundDomain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validationLogs?: LicenseValidationLogUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseCreateManyInput = {
    id?: string
    licenseKey: string
    customerId: string
    subscriptionId: string
    planTier: string
    boundDomain?: string | null
    installationUuid?: string | null
    status?: string
    activatedAt?: Date | string | null
    expiresAt: Date | string
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    boundDomain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    boundDomain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseValidationLogCreateInput = {
    id?: string
    licenseKey: string
    domain?: string | null
    installationUuid?: string | null
    storeVersion?: string | null
    ipAddress?: string | null
    outcome: string
    timestamp?: Date | string
    license: LicenseCreateNestedOneWithoutValidationLogsInput
  }

  export type LicenseValidationLogUncheckedCreateInput = {
    id?: string
    licenseId: string
    licenseKey: string
    domain?: string | null
    installationUuid?: string | null
    storeVersion?: string | null
    ipAddress?: string | null
    outcome: string
    timestamp?: Date | string
  }

  export type LicenseValidationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    storeVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: LicenseUpdateOneRequiredWithoutValidationLogsNestedInput
  }

  export type LicenseValidationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    storeVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseValidationLogCreateManyInput = {
    id?: string
    licenseId: string
    licenseKey: string
    domain?: string | null
    installationUuid?: string | null
    storeVersion?: string | null
    ipAddress?: string | null
    outcome: string
    timestamp?: Date | string
  }

  export type LicenseValidationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    storeVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseValidationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    storeVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoftwareReleaseCreateInput = {
    id?: string
    version: string
    releaseDate?: Date | string
    isLatest?: boolean
    isSecurityUpdate?: boolean
    changelog: string
    downloadUrl?: string | null
    createdAt?: Date | string
  }

  export type SoftwareReleaseUncheckedCreateInput = {
    id?: string
    version: string
    releaseDate?: Date | string
    isLatest?: boolean
    isSecurityUpdate?: boolean
    changelog: string
    downloadUrl?: string | null
    createdAt?: Date | string
  }

  export type SoftwareReleaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isLatest?: BoolFieldUpdateOperationsInput | boolean
    isSecurityUpdate?: BoolFieldUpdateOperationsInput | boolean
    changelog?: StringFieldUpdateOperationsInput | string
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoftwareReleaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isLatest?: BoolFieldUpdateOperationsInput | boolean
    isSecurityUpdate?: BoolFieldUpdateOperationsInput | boolean
    changelog?: StringFieldUpdateOperationsInput | string
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoftwareReleaseCreateManyInput = {
    id?: string
    version: string
    releaseDate?: Date | string
    isLatest?: boolean
    isSecurityUpdate?: boolean
    changelog: string
    downloadUrl?: string | null
    createdAt?: Date | string
  }

  export type SoftwareReleaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isLatest?: BoolFieldUpdateOperationsInput | boolean
    isSecurityUpdate?: BoolFieldUpdateOperationsInput | boolean
    changelog?: StringFieldUpdateOperationsInput | string
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoftwareReleaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isLatest?: BoolFieldUpdateOperationsInput | boolean
    isSecurityUpdate?: BoolFieldUpdateOperationsInput | boolean
    changelog?: StringFieldUpdateOperationsInput | string
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketCreateInput = {
    id?: string
    ticketNumber: string
    subject: string
    category: string
    priority?: string
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutTicketsInput
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
  }

  export type SupportTicketUncheckedCreateInput = {
    id?: string
    ticketNumber: string
    customerId: string
    subject: string
    category: string
    priority?: string
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
  }

  export type SupportTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutTicketsNestedInput
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
  }

  export type SupportTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type SupportTicketCreateManyInput = {
    id?: string
    ticketNumber: string
    customerId: string
    subject: string
    category: string
    priority?: string
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageCreateInput = {
    id?: string
    senderType: string
    senderName: string
    message: string
    createdAt?: Date | string
    ticket: SupportTicketCreateNestedOneWithoutMessagesInput
  }

  export type TicketMessageUncheckedCreateInput = {
    id?: string
    ticketId: string
    senderType: string
    senderName: string
    message: string
    createdAt?: Date | string
  }

  export type TicketMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: SupportTicketUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type TicketMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageCreateManyInput = {
    id?: string
    ticketId: string
    senderType: string
    senderName: string
    message: string
    createdAt?: Date | string
  }

  export type TicketMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomizationQuoteCreateInput = {
    id?: string
    title: string
    scopeDescription: string
    quotedAmount: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutQuotesInput
  }

  export type CustomizationQuoteUncheckedCreateInput = {
    id?: string
    customerId: string
    title: string
    scopeDescription: string
    quotedAmount: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomizationQuoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scopeDescription?: StringFieldUpdateOperationsInput | string
    quotedAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutQuotesNestedInput
  }

  export type CustomizationQuoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scopeDescription?: StringFieldUpdateOperationsInput | string
    quotedAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomizationQuoteCreateManyInput = {
    id?: string
    customerId: string
    title: string
    scopeDescription: string
    quotedAmount: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomizationQuoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scopeDescription?: StringFieldUpdateOperationsInput | string
    quotedAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomizationQuoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scopeDescription?: StringFieldUpdateOperationsInput | string
    quotedAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentralThemeItemCreateInput = {
    id?: string
    themeCode: string
    name: string
    description: string
    previewImage?: string | null
    isPremium?: boolean
    price?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CentralThemeItemUncheckedCreateInput = {
    id?: string
    themeCode: string
    name: string
    description: string
    previewImage?: string | null
    isPremium?: boolean
    price?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CentralThemeItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    themeCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentralThemeItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    themeCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentralThemeItemCreateManyInput = {
    id?: string
    themeCode: string
    name: string
    description: string
    previewImage?: string | null
    isPremium?: boolean
    price?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CentralThemeItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    themeCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentralThemeItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    themeCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemBroadcastCreateInput = {
    id?: string
    title: string
    message: string
    severity?: string
    targetTier?: string
    isActive?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemBroadcastUncheckedCreateInput = {
    id?: string
    title: string
    message: string
    severity?: string
    targetTier?: string
    isActive?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemBroadcastUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    targetTier?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemBroadcastUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    targetTier?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemBroadcastCreateManyInput = {
    id?: string
    title: string
    message: string
    severity?: string
    targetTier?: string
    isActive?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemBroadcastUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    targetTier?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemBroadcastUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    targetTier?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAuditLogCreateInput = {
    id?: string
    adminEmail?: string
    action: string
    target: string
    details?: string | null
    ipAddress?: string | null
    severity?: string
    timestamp?: Date | string
  }

  export type AdminAuditLogUncheckedCreateInput = {
    id?: string
    adminEmail?: string
    action: string
    target: string
    details?: string | null
    ipAddress?: string | null
    severity?: string
    timestamp?: Date | string
  }

  export type AdminAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAuditLogCreateManyInput = {
    id?: string
    adminEmail?: string
    action: string
    target: string
    details?: string | null
    ipAddress?: string | null
    severity?: string
    timestamp?: Date | string
  }

  export type AdminAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type LicenseListRelationFilter = {
    every?: LicenseWhereInput
    some?: LicenseWhereInput
    none?: LicenseWhereInput
  }

  export type SupportTicketListRelationFilter = {
    every?: SupportTicketWhereInput
    some?: SupportTicketWhereInput
    none?: SupportTicketWhereInput
  }

  export type CustomizationQuoteListRelationFilter = {
    every?: CustomizationQuoteWhereInput
    some?: CustomizationQuoteWhereInput
    none?: CustomizationQuoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupportTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomizationQuoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    internalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    internalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    internalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PricingTierListRelationFilter = {
    every?: PricingTierWhereInput
    some?: PricingTierWhereInput
    none?: PricingTierWhereInput
  }

  export type PricingTierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    tier?: SortOrder
    name?: SortOrder
    description?: SortOrder
    badge?: SortOrder
    isActive?: SortOrder
    entitlementsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    tier?: SortOrder
    name?: SortOrder
    description?: SortOrder
    badge?: SortOrder
    isActive?: SortOrder
    entitlementsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    tier?: SortOrder
    name?: SortOrder
    description?: SortOrder
    badge?: SortOrder
    isActive?: SortOrder
    entitlementsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PlanRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type PricingTierPlanIdDurationCompoundUniqueInput = {
    planId: string
    duration: string
  }

  export type PricingTierCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    discountPercent?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingTierAvgOrderByAggregateInput = {
    price?: SortOrder
    originalPrice?: SortOrder
    discountPercent?: SortOrder
  }

  export type PricingTierMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    discountPercent?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingTierMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    discountPercent?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingTierSumOrderByAggregateInput = {
    price?: SortOrder
    originalPrice?: SortOrder
    discountPercent?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PlatformSettingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformSettingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PromotionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discountPercent?: SortOrder
    maxDiscount?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionAvgOrderByAggregateInput = {
    discountPercent?: SortOrder
    maxDiscount?: SortOrder
  }

  export type PromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discountPercent?: SortOrder
    maxDiscount?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discountPercent?: SortOrder
    maxDiscount?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionSumOrderByAggregateInput = {
    discountPercent?: SortOrder
    maxDiscount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type LicenseNullableRelationFilter = {
    is?: LicenseWhereInput | null
    isNot?: LicenseWhereInput | null
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    planId?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    hasSetupAssistance?: SortOrder
    setupFee?: SortOrder
    paymentStatus?: SortOrder
    paymentReference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    amount?: SortOrder
    setupFee?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    planId?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    hasSetupAssistance?: SortOrder
    setupFee?: SortOrder
    paymentStatus?: SortOrder
    paymentReference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    planId?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    hasSetupAssistance?: SortOrder
    setupFee?: SortOrder
    paymentStatus?: SortOrder
    paymentReference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    amount?: SortOrder
    setupFee?: SortOrder
  }

  export type SubscriptionRelationFilter = {
    is?: SubscriptionWhereInput
    isNot?: SubscriptionWhereInput
  }

  export type LicenseValidationLogListRelationFilter = {
    every?: LicenseValidationLogWhereInput
    some?: LicenseValidationLogWhereInput
    none?: LicenseValidationLogWhereInput
  }

  export type LicenseValidationLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicenseCountOrderByAggregateInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    customerId?: SortOrder
    subscriptionId?: SortOrder
    planTier?: SortOrder
    boundDomain?: SortOrder
    installationUuid?: SortOrder
    status?: SortOrder
    activatedAt?: SortOrder
    expiresAt?: SortOrder
    lastHeartbeatAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    customerId?: SortOrder
    subscriptionId?: SortOrder
    planTier?: SortOrder
    boundDomain?: SortOrder
    installationUuid?: SortOrder
    status?: SortOrder
    activatedAt?: SortOrder
    expiresAt?: SortOrder
    lastHeartbeatAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseMinOrderByAggregateInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    customerId?: SortOrder
    subscriptionId?: SortOrder
    planTier?: SortOrder
    boundDomain?: SortOrder
    installationUuid?: SortOrder
    status?: SortOrder
    activatedAt?: SortOrder
    expiresAt?: SortOrder
    lastHeartbeatAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseRelationFilter = {
    is?: LicenseWhereInput
    isNot?: LicenseWhereInput
  }

  export type LicenseValidationLogCountOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    licenseKey?: SortOrder
    domain?: SortOrder
    installationUuid?: SortOrder
    storeVersion?: SortOrder
    ipAddress?: SortOrder
    outcome?: SortOrder
    timestamp?: SortOrder
  }

  export type LicenseValidationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    licenseKey?: SortOrder
    domain?: SortOrder
    installationUuid?: SortOrder
    storeVersion?: SortOrder
    ipAddress?: SortOrder
    outcome?: SortOrder
    timestamp?: SortOrder
  }

  export type LicenseValidationLogMinOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    licenseKey?: SortOrder
    domain?: SortOrder
    installationUuid?: SortOrder
    storeVersion?: SortOrder
    ipAddress?: SortOrder
    outcome?: SortOrder
    timestamp?: SortOrder
  }

  export type SoftwareReleaseCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    releaseDate?: SortOrder
    isLatest?: SortOrder
    isSecurityUpdate?: SortOrder
    changelog?: SortOrder
    downloadUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type SoftwareReleaseMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    releaseDate?: SortOrder
    isLatest?: SortOrder
    isSecurityUpdate?: SortOrder
    changelog?: SortOrder
    downloadUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type SoftwareReleaseMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    releaseDate?: SortOrder
    isLatest?: SortOrder
    isSecurityUpdate?: SortOrder
    changelog?: SortOrder
    downloadUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageListRelationFilter = {
    every?: TicketMessageWhereInput
    some?: TicketMessageWhereInput
    none?: TicketMessageWhereInput
  }

  export type TicketMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupportTicketCountOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    customerId?: SortOrder
    subject?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    internalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    customerId?: SortOrder
    subject?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    internalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportTicketMinOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    customerId?: SortOrder
    subject?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    internalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportTicketRelationFilter = {
    is?: SupportTicketWhereInput
    isNot?: SupportTicketWhereInput
  }

  export type TicketMessageCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomizationQuoteCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    title?: SortOrder
    scopeDescription?: SortOrder
    quotedAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomizationQuoteAvgOrderByAggregateInput = {
    quotedAmount?: SortOrder
  }

  export type CustomizationQuoteMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    title?: SortOrder
    scopeDescription?: SortOrder
    quotedAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomizationQuoteMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    title?: SortOrder
    scopeDescription?: SortOrder
    quotedAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomizationQuoteSumOrderByAggregateInput = {
    quotedAmount?: SortOrder
  }

  export type CentralThemeItemCountOrderByAggregateInput = {
    id?: SortOrder
    themeCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    previewImage?: SortOrder
    isPremium?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CentralThemeItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type CentralThemeItemMaxOrderByAggregateInput = {
    id?: SortOrder
    themeCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    previewImage?: SortOrder
    isPremium?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CentralThemeItemMinOrderByAggregateInput = {
    id?: SortOrder
    themeCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    previewImage?: SortOrder
    isPremium?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CentralThemeItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type SystemBroadcastCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    targetTier?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemBroadcastMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    targetTier?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemBroadcastMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    targetTier?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    adminEmail?: SortOrder
    action?: SortOrder
    target?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    severity?: SortOrder
    timestamp?: SortOrder
  }

  export type AdminAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    adminEmail?: SortOrder
    action?: SortOrder
    target?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    severity?: SortOrder
    timestamp?: SortOrder
  }

  export type AdminAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    adminEmail?: SortOrder
    action?: SortOrder
    target?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    severity?: SortOrder
    timestamp?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubscriptionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput> | SubscriptionCreateWithoutCustomerInput[] | SubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput | SubscriptionCreateOrConnectWithoutCustomerInput[]
    createMany?: SubscriptionCreateManyCustomerInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type LicenseCreateNestedManyWithoutCustomerInput = {
    create?: XOR<LicenseCreateWithoutCustomerInput, LicenseUncheckedCreateWithoutCustomerInput> | LicenseCreateWithoutCustomerInput[] | LicenseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutCustomerInput | LicenseCreateOrConnectWithoutCustomerInput[]
    createMany?: LicenseCreateManyCustomerInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type SupportTicketCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SupportTicketCreateWithoutCustomerInput, SupportTicketUncheckedCreateWithoutCustomerInput> | SupportTicketCreateWithoutCustomerInput[] | SupportTicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutCustomerInput | SupportTicketCreateOrConnectWithoutCustomerInput[]
    createMany?: SupportTicketCreateManyCustomerInputEnvelope
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
  }

  export type CustomizationQuoteCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomizationQuoteCreateWithoutCustomerInput, CustomizationQuoteUncheckedCreateWithoutCustomerInput> | CustomizationQuoteCreateWithoutCustomerInput[] | CustomizationQuoteUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomizationQuoteCreateOrConnectWithoutCustomerInput | CustomizationQuoteCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomizationQuoteCreateManyCustomerInputEnvelope
    connect?: CustomizationQuoteWhereUniqueInput | CustomizationQuoteWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput> | SubscriptionCreateWithoutCustomerInput[] | SubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput | SubscriptionCreateOrConnectWithoutCustomerInput[]
    createMany?: SubscriptionCreateManyCustomerInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type LicenseUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<LicenseCreateWithoutCustomerInput, LicenseUncheckedCreateWithoutCustomerInput> | LicenseCreateWithoutCustomerInput[] | LicenseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutCustomerInput | LicenseCreateOrConnectWithoutCustomerInput[]
    createMany?: LicenseCreateManyCustomerInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type SupportTicketUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SupportTicketCreateWithoutCustomerInput, SupportTicketUncheckedCreateWithoutCustomerInput> | SupportTicketCreateWithoutCustomerInput[] | SupportTicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutCustomerInput | SupportTicketCreateOrConnectWithoutCustomerInput[]
    createMany?: SupportTicketCreateManyCustomerInputEnvelope
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
  }

  export type CustomizationQuoteUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomizationQuoteCreateWithoutCustomerInput, CustomizationQuoteUncheckedCreateWithoutCustomerInput> | CustomizationQuoteCreateWithoutCustomerInput[] | CustomizationQuoteUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomizationQuoteCreateOrConnectWithoutCustomerInput | CustomizationQuoteCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomizationQuoteCreateManyCustomerInputEnvelope
    connect?: CustomizationQuoteWhereUniqueInput | CustomizationQuoteWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SubscriptionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput> | SubscriptionCreateWithoutCustomerInput[] | SubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput | SubscriptionCreateOrConnectWithoutCustomerInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutCustomerInput | SubscriptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SubscriptionCreateManyCustomerInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutCustomerInput | SubscriptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutCustomerInput | SubscriptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type LicenseUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<LicenseCreateWithoutCustomerInput, LicenseUncheckedCreateWithoutCustomerInput> | LicenseCreateWithoutCustomerInput[] | LicenseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutCustomerInput | LicenseCreateOrConnectWithoutCustomerInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutCustomerInput | LicenseUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: LicenseCreateManyCustomerInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutCustomerInput | LicenseUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutCustomerInput | LicenseUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type SupportTicketUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SupportTicketCreateWithoutCustomerInput, SupportTicketUncheckedCreateWithoutCustomerInput> | SupportTicketCreateWithoutCustomerInput[] | SupportTicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutCustomerInput | SupportTicketCreateOrConnectWithoutCustomerInput[]
    upsert?: SupportTicketUpsertWithWhereUniqueWithoutCustomerInput | SupportTicketUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SupportTicketCreateManyCustomerInputEnvelope
    set?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    disconnect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    delete?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    update?: SupportTicketUpdateWithWhereUniqueWithoutCustomerInput | SupportTicketUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SupportTicketUpdateManyWithWhereWithoutCustomerInput | SupportTicketUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
  }

  export type CustomizationQuoteUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomizationQuoteCreateWithoutCustomerInput, CustomizationQuoteUncheckedCreateWithoutCustomerInput> | CustomizationQuoteCreateWithoutCustomerInput[] | CustomizationQuoteUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomizationQuoteCreateOrConnectWithoutCustomerInput | CustomizationQuoteCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomizationQuoteUpsertWithWhereUniqueWithoutCustomerInput | CustomizationQuoteUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomizationQuoteCreateManyCustomerInputEnvelope
    set?: CustomizationQuoteWhereUniqueInput | CustomizationQuoteWhereUniqueInput[]
    disconnect?: CustomizationQuoteWhereUniqueInput | CustomizationQuoteWhereUniqueInput[]
    delete?: CustomizationQuoteWhereUniqueInput | CustomizationQuoteWhereUniqueInput[]
    connect?: CustomizationQuoteWhereUniqueInput | CustomizationQuoteWhereUniqueInput[]
    update?: CustomizationQuoteUpdateWithWhereUniqueWithoutCustomerInput | CustomizationQuoteUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomizationQuoteUpdateManyWithWhereWithoutCustomerInput | CustomizationQuoteUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomizationQuoteScalarWhereInput | CustomizationQuoteScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput> | SubscriptionCreateWithoutCustomerInput[] | SubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput | SubscriptionCreateOrConnectWithoutCustomerInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutCustomerInput | SubscriptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SubscriptionCreateManyCustomerInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutCustomerInput | SubscriptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutCustomerInput | SubscriptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type LicenseUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<LicenseCreateWithoutCustomerInput, LicenseUncheckedCreateWithoutCustomerInput> | LicenseCreateWithoutCustomerInput[] | LicenseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutCustomerInput | LicenseCreateOrConnectWithoutCustomerInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutCustomerInput | LicenseUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: LicenseCreateManyCustomerInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutCustomerInput | LicenseUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutCustomerInput | LicenseUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type SupportTicketUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SupportTicketCreateWithoutCustomerInput, SupportTicketUncheckedCreateWithoutCustomerInput> | SupportTicketCreateWithoutCustomerInput[] | SupportTicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutCustomerInput | SupportTicketCreateOrConnectWithoutCustomerInput[]
    upsert?: SupportTicketUpsertWithWhereUniqueWithoutCustomerInput | SupportTicketUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SupportTicketCreateManyCustomerInputEnvelope
    set?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    disconnect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    delete?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    update?: SupportTicketUpdateWithWhereUniqueWithoutCustomerInput | SupportTicketUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SupportTicketUpdateManyWithWhereWithoutCustomerInput | SupportTicketUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
  }

  export type CustomizationQuoteUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomizationQuoteCreateWithoutCustomerInput, CustomizationQuoteUncheckedCreateWithoutCustomerInput> | CustomizationQuoteCreateWithoutCustomerInput[] | CustomizationQuoteUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomizationQuoteCreateOrConnectWithoutCustomerInput | CustomizationQuoteCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomizationQuoteUpsertWithWhereUniqueWithoutCustomerInput | CustomizationQuoteUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomizationQuoteCreateManyCustomerInputEnvelope
    set?: CustomizationQuoteWhereUniqueInput | CustomizationQuoteWhereUniqueInput[]
    disconnect?: CustomizationQuoteWhereUniqueInput | CustomizationQuoteWhereUniqueInput[]
    delete?: CustomizationQuoteWhereUniqueInput | CustomizationQuoteWhereUniqueInput[]
    connect?: CustomizationQuoteWhereUniqueInput | CustomizationQuoteWhereUniqueInput[]
    update?: CustomizationQuoteUpdateWithWhereUniqueWithoutCustomerInput | CustomizationQuoteUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomizationQuoteUpdateManyWithWhereWithoutCustomerInput | CustomizationQuoteUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomizationQuoteScalarWhereInput | CustomizationQuoteScalarWhereInput[]
  }

  export type PricingTierCreateNestedManyWithoutPlanInput = {
    create?: XOR<PricingTierCreateWithoutPlanInput, PricingTierUncheckedCreateWithoutPlanInput> | PricingTierCreateWithoutPlanInput[] | PricingTierUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PricingTierCreateOrConnectWithoutPlanInput | PricingTierCreateOrConnectWithoutPlanInput[]
    createMany?: PricingTierCreateManyPlanInputEnvelope
    connect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type PricingTierUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PricingTierCreateWithoutPlanInput, PricingTierUncheckedCreateWithoutPlanInput> | PricingTierCreateWithoutPlanInput[] | PricingTierUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PricingTierCreateOrConnectWithoutPlanInput | PricingTierCreateOrConnectWithoutPlanInput[]
    createMany?: PricingTierCreateManyPlanInputEnvelope
    connect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PricingTierUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PricingTierCreateWithoutPlanInput, PricingTierUncheckedCreateWithoutPlanInput> | PricingTierCreateWithoutPlanInput[] | PricingTierUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PricingTierCreateOrConnectWithoutPlanInput | PricingTierCreateOrConnectWithoutPlanInput[]
    upsert?: PricingTierUpsertWithWhereUniqueWithoutPlanInput | PricingTierUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PricingTierCreateManyPlanInputEnvelope
    set?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    disconnect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    delete?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    connect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    update?: PricingTierUpdateWithWhereUniqueWithoutPlanInput | PricingTierUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PricingTierUpdateManyWithWhereWithoutPlanInput | PricingTierUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PricingTierScalarWhereInput | PricingTierScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PricingTierUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PricingTierCreateWithoutPlanInput, PricingTierUncheckedCreateWithoutPlanInput> | PricingTierCreateWithoutPlanInput[] | PricingTierUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PricingTierCreateOrConnectWithoutPlanInput | PricingTierCreateOrConnectWithoutPlanInput[]
    upsert?: PricingTierUpsertWithWhereUniqueWithoutPlanInput | PricingTierUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PricingTierCreateManyPlanInputEnvelope
    set?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    disconnect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    delete?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    connect?: PricingTierWhereUniqueInput | PricingTierWhereUniqueInput[]
    update?: PricingTierUpdateWithWhereUniqueWithoutPlanInput | PricingTierUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PricingTierUpdateManyWithWhereWithoutPlanInput | PricingTierUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PricingTierScalarWhereInput | PricingTierScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PlanCreateNestedOneWithoutPricingTiersInput = {
    create?: XOR<PlanCreateWithoutPricingTiersInput, PlanUncheckedCreateWithoutPricingTiersInput>
    connectOrCreate?: PlanCreateOrConnectWithoutPricingTiersInput
    connect?: PlanWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlanUpdateOneRequiredWithoutPricingTiersNestedInput = {
    create?: XOR<PlanCreateWithoutPricingTiersInput, PlanUncheckedCreateWithoutPricingTiersInput>
    connectOrCreate?: PlanCreateOrConnectWithoutPricingTiersInput
    upsert?: PlanUpsertWithoutPricingTiersInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutPricingTiersInput, PlanUpdateWithoutPricingTiersInput>, PlanUncheckedUpdateWithoutPricingTiersInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CustomerCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSubscriptionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
  }

  export type LicenseCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<LicenseCreateWithoutSubscriptionInput, LicenseUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutSubscriptionInput
    connect?: LicenseWhereUniqueInput
  }

  export type LicenseUncheckedCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<LicenseCreateWithoutSubscriptionInput, LicenseUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutSubscriptionInput
    connect?: LicenseWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSubscriptionsInput
    upsert?: CustomerUpsertWithoutSubscriptionsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSubscriptionsInput, CustomerUpdateWithoutSubscriptionsInput>, CustomerUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlanUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    upsert?: PlanUpsertWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutSubscriptionsInput, PlanUpdateWithoutSubscriptionsInput>, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type LicenseUpdateOneWithoutSubscriptionNestedInput = {
    create?: XOR<LicenseCreateWithoutSubscriptionInput, LicenseUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutSubscriptionInput
    upsert?: LicenseUpsertWithoutSubscriptionInput
    disconnect?: LicenseWhereInput | boolean
    delete?: LicenseWhereInput | boolean
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutSubscriptionInput, LicenseUpdateWithoutSubscriptionInput>, LicenseUncheckedUpdateWithoutSubscriptionInput>
  }

  export type LicenseUncheckedUpdateOneWithoutSubscriptionNestedInput = {
    create?: XOR<LicenseCreateWithoutSubscriptionInput, LicenseUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutSubscriptionInput
    upsert?: LicenseUpsertWithoutSubscriptionInput
    disconnect?: LicenseWhereInput | boolean
    delete?: LicenseWhereInput | boolean
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutSubscriptionInput, LicenseUpdateWithoutSubscriptionInput>, LicenseUncheckedUpdateWithoutSubscriptionInput>
  }

  export type CustomerCreateNestedOneWithoutLicensesInput = {
    create?: XOR<CustomerCreateWithoutLicensesInput, CustomerUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLicensesInput
    connect?: CustomerWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutLicenseInput = {
    create?: XOR<SubscriptionCreateWithoutLicenseInput, SubscriptionUncheckedCreateWithoutLicenseInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutLicenseInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type LicenseValidationLogCreateNestedManyWithoutLicenseInput = {
    create?: XOR<LicenseValidationLogCreateWithoutLicenseInput, LicenseValidationLogUncheckedCreateWithoutLicenseInput> | LicenseValidationLogCreateWithoutLicenseInput[] | LicenseValidationLogUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseValidationLogCreateOrConnectWithoutLicenseInput | LicenseValidationLogCreateOrConnectWithoutLicenseInput[]
    createMany?: LicenseValidationLogCreateManyLicenseInputEnvelope
    connect?: LicenseValidationLogWhereUniqueInput | LicenseValidationLogWhereUniqueInput[]
  }

  export type LicenseValidationLogUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: XOR<LicenseValidationLogCreateWithoutLicenseInput, LicenseValidationLogUncheckedCreateWithoutLicenseInput> | LicenseValidationLogCreateWithoutLicenseInput[] | LicenseValidationLogUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseValidationLogCreateOrConnectWithoutLicenseInput | LicenseValidationLogCreateOrConnectWithoutLicenseInput[]
    createMany?: LicenseValidationLogCreateManyLicenseInputEnvelope
    connect?: LicenseValidationLogWhereUniqueInput | LicenseValidationLogWhereUniqueInput[]
  }

  export type CustomerUpdateOneRequiredWithoutLicensesNestedInput = {
    create?: XOR<CustomerCreateWithoutLicensesInput, CustomerUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLicensesInput
    upsert?: CustomerUpsertWithoutLicensesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutLicensesInput, CustomerUpdateWithoutLicensesInput>, CustomerUncheckedUpdateWithoutLicensesInput>
  }

  export type SubscriptionUpdateOneRequiredWithoutLicenseNestedInput = {
    create?: XOR<SubscriptionCreateWithoutLicenseInput, SubscriptionUncheckedCreateWithoutLicenseInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutLicenseInput
    upsert?: SubscriptionUpsertWithoutLicenseInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutLicenseInput, SubscriptionUpdateWithoutLicenseInput>, SubscriptionUncheckedUpdateWithoutLicenseInput>
  }

  export type LicenseValidationLogUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<LicenseValidationLogCreateWithoutLicenseInput, LicenseValidationLogUncheckedCreateWithoutLicenseInput> | LicenseValidationLogCreateWithoutLicenseInput[] | LicenseValidationLogUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseValidationLogCreateOrConnectWithoutLicenseInput | LicenseValidationLogCreateOrConnectWithoutLicenseInput[]
    upsert?: LicenseValidationLogUpsertWithWhereUniqueWithoutLicenseInput | LicenseValidationLogUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: LicenseValidationLogCreateManyLicenseInputEnvelope
    set?: LicenseValidationLogWhereUniqueInput | LicenseValidationLogWhereUniqueInput[]
    disconnect?: LicenseValidationLogWhereUniqueInput | LicenseValidationLogWhereUniqueInput[]
    delete?: LicenseValidationLogWhereUniqueInput | LicenseValidationLogWhereUniqueInput[]
    connect?: LicenseValidationLogWhereUniqueInput | LicenseValidationLogWhereUniqueInput[]
    update?: LicenseValidationLogUpdateWithWhereUniqueWithoutLicenseInput | LicenseValidationLogUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: LicenseValidationLogUpdateManyWithWhereWithoutLicenseInput | LicenseValidationLogUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: LicenseValidationLogScalarWhereInput | LicenseValidationLogScalarWhereInput[]
  }

  export type LicenseValidationLogUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<LicenseValidationLogCreateWithoutLicenseInput, LicenseValidationLogUncheckedCreateWithoutLicenseInput> | LicenseValidationLogCreateWithoutLicenseInput[] | LicenseValidationLogUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseValidationLogCreateOrConnectWithoutLicenseInput | LicenseValidationLogCreateOrConnectWithoutLicenseInput[]
    upsert?: LicenseValidationLogUpsertWithWhereUniqueWithoutLicenseInput | LicenseValidationLogUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: LicenseValidationLogCreateManyLicenseInputEnvelope
    set?: LicenseValidationLogWhereUniqueInput | LicenseValidationLogWhereUniqueInput[]
    disconnect?: LicenseValidationLogWhereUniqueInput | LicenseValidationLogWhereUniqueInput[]
    delete?: LicenseValidationLogWhereUniqueInput | LicenseValidationLogWhereUniqueInput[]
    connect?: LicenseValidationLogWhereUniqueInput | LicenseValidationLogWhereUniqueInput[]
    update?: LicenseValidationLogUpdateWithWhereUniqueWithoutLicenseInput | LicenseValidationLogUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: LicenseValidationLogUpdateManyWithWhereWithoutLicenseInput | LicenseValidationLogUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: LicenseValidationLogScalarWhereInput | LicenseValidationLogScalarWhereInput[]
  }

  export type LicenseCreateNestedOneWithoutValidationLogsInput = {
    create?: XOR<LicenseCreateWithoutValidationLogsInput, LicenseUncheckedCreateWithoutValidationLogsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutValidationLogsInput
    connect?: LicenseWhereUniqueInput
  }

  export type LicenseUpdateOneRequiredWithoutValidationLogsNestedInput = {
    create?: XOR<LicenseCreateWithoutValidationLogsInput, LicenseUncheckedCreateWithoutValidationLogsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutValidationLogsInput
    upsert?: LicenseUpsertWithoutValidationLogsInput
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutValidationLogsInput, LicenseUpdateWithoutValidationLogsInput>, LicenseUncheckedUpdateWithoutValidationLogsInput>
  }

  export type CustomerCreateNestedOneWithoutTicketsInput = {
    create?: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTicketsInput
    connect?: CustomerWhereUniqueInput
  }

  export type TicketMessageCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
  }

  export type TicketMessageUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
  }

  export type CustomerUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTicketsInput
    upsert?: CustomerUpsertWithoutTicketsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTicketsInput, CustomerUpdateWithoutTicketsInput>, CustomerUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketMessageUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    upsert?: TicketMessageUpsertWithWhereUniqueWithoutTicketInput | TicketMessageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    set?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    disconnect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    delete?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    update?: TicketMessageUpdateWithWhereUniqueWithoutTicketInput | TicketMessageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketMessageUpdateManyWithWhereWithoutTicketInput | TicketMessageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
  }

  export type TicketMessageUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    upsert?: TicketMessageUpsertWithWhereUniqueWithoutTicketInput | TicketMessageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    set?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    disconnect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    delete?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    update?: TicketMessageUpdateWithWhereUniqueWithoutTicketInput | TicketMessageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketMessageUpdateManyWithWhereWithoutTicketInput | TicketMessageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
  }

  export type SupportTicketCreateNestedOneWithoutMessagesInput = {
    create?: XOR<SupportTicketCreateWithoutMessagesInput, SupportTicketUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: SupportTicketCreateOrConnectWithoutMessagesInput
    connect?: SupportTicketWhereUniqueInput
  }

  export type SupportTicketUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<SupportTicketCreateWithoutMessagesInput, SupportTicketUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: SupportTicketCreateOrConnectWithoutMessagesInput
    upsert?: SupportTicketUpsertWithoutMessagesInput
    connect?: SupportTicketWhereUniqueInput
    update?: XOR<XOR<SupportTicketUpdateToOneWithWhereWithoutMessagesInput, SupportTicketUpdateWithoutMessagesInput>, SupportTicketUncheckedUpdateWithoutMessagesInput>
  }

  export type CustomerCreateNestedOneWithoutQuotesInput = {
    create?: XOR<CustomerCreateWithoutQuotesInput, CustomerUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutQuotesInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutQuotesNestedInput = {
    create?: XOR<CustomerCreateWithoutQuotesInput, CustomerUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutQuotesInput
    upsert?: CustomerUpsertWithoutQuotesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutQuotesInput, CustomerUpdateWithoutQuotesInput>, CustomerUncheckedUpdateWithoutQuotesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SubscriptionCreateWithoutCustomerInput = {
    id?: string
    duration: string
    status?: string
    amount: number
    currency?: string
    startDate?: Date | string
    endDate: Date | string
    hasSetupAssistance?: boolean
    setupFee?: number
    paymentStatus?: string
    paymentReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    license?: LicenseCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutCustomerInput = {
    id?: string
    planId: string
    duration: string
    status?: string
    amount: number
    currency?: string
    startDate?: Date | string
    endDate: Date | string
    hasSetupAssistance?: boolean
    setupFee?: number
    paymentStatus?: string
    paymentReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    license?: LicenseUncheckedCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutCustomerInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput>
  }

  export type SubscriptionCreateManyCustomerInputEnvelope = {
    data: SubscriptionCreateManyCustomerInput | SubscriptionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type LicenseCreateWithoutCustomerInput = {
    id?: string
    licenseKey: string
    planTier: string
    boundDomain?: string | null
    installationUuid?: string | null
    status?: string
    activatedAt?: Date | string | null
    expiresAt: Date | string
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription: SubscriptionCreateNestedOneWithoutLicenseInput
    validationLogs?: LicenseValidationLogCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutCustomerInput = {
    id?: string
    licenseKey: string
    subscriptionId: string
    planTier: string
    boundDomain?: string | null
    installationUuid?: string | null
    status?: string
    activatedAt?: Date | string | null
    expiresAt: Date | string
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    validationLogs?: LicenseValidationLogUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutCustomerInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutCustomerInput, LicenseUncheckedCreateWithoutCustomerInput>
  }

  export type LicenseCreateManyCustomerInputEnvelope = {
    data: LicenseCreateManyCustomerInput | LicenseCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type SupportTicketCreateWithoutCustomerInput = {
    id?: string
    ticketNumber: string
    subject: string
    category: string
    priority?: string
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
  }

  export type SupportTicketUncheckedCreateWithoutCustomerInput = {
    id?: string
    ticketNumber: string
    subject: string
    category: string
    priority?: string
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
  }

  export type SupportTicketCreateOrConnectWithoutCustomerInput = {
    where: SupportTicketWhereUniqueInput
    create: XOR<SupportTicketCreateWithoutCustomerInput, SupportTicketUncheckedCreateWithoutCustomerInput>
  }

  export type SupportTicketCreateManyCustomerInputEnvelope = {
    data: SupportTicketCreateManyCustomerInput | SupportTicketCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomizationQuoteCreateWithoutCustomerInput = {
    id?: string
    title: string
    scopeDescription: string
    quotedAmount: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomizationQuoteUncheckedCreateWithoutCustomerInput = {
    id?: string
    title: string
    scopeDescription: string
    quotedAmount: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomizationQuoteCreateOrConnectWithoutCustomerInput = {
    where: CustomizationQuoteWhereUniqueInput
    create: XOR<CustomizationQuoteCreateWithoutCustomerInput, CustomizationQuoteUncheckedCreateWithoutCustomerInput>
  }

  export type CustomizationQuoteCreateManyCustomerInputEnvelope = {
    data: CustomizationQuoteCreateManyCustomerInput | CustomizationQuoteCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutCustomerInput, SubscriptionUncheckedUpdateWithoutCustomerInput>
    create: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutCustomerInput, SubscriptionUncheckedUpdateWithoutCustomerInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutCustomerInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    customerId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    duration?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    amount?: FloatFilter<"Subscription"> | number
    currency?: StringFilter<"Subscription"> | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    hasSetupAssistance?: BoolFilter<"Subscription"> | boolean
    setupFee?: FloatFilter<"Subscription"> | number
    paymentStatus?: StringFilter<"Subscription"> | string
    paymentReference?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type LicenseUpsertWithWhereUniqueWithoutCustomerInput = {
    where: LicenseWhereUniqueInput
    update: XOR<LicenseUpdateWithoutCustomerInput, LicenseUncheckedUpdateWithoutCustomerInput>
    create: XOR<LicenseCreateWithoutCustomerInput, LicenseUncheckedCreateWithoutCustomerInput>
  }

  export type LicenseUpdateWithWhereUniqueWithoutCustomerInput = {
    where: LicenseWhereUniqueInput
    data: XOR<LicenseUpdateWithoutCustomerInput, LicenseUncheckedUpdateWithoutCustomerInput>
  }

  export type LicenseUpdateManyWithWhereWithoutCustomerInput = {
    where: LicenseScalarWhereInput
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyWithoutCustomerInput>
  }

  export type LicenseScalarWhereInput = {
    AND?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
    OR?: LicenseScalarWhereInput[]
    NOT?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
    id?: StringFilter<"License"> | string
    licenseKey?: StringFilter<"License"> | string
    customerId?: StringFilter<"License"> | string
    subscriptionId?: StringFilter<"License"> | string
    planTier?: StringFilter<"License"> | string
    boundDomain?: StringNullableFilter<"License"> | string | null
    installationUuid?: StringNullableFilter<"License"> | string | null
    status?: StringFilter<"License"> | string
    activatedAt?: DateTimeNullableFilter<"License"> | Date | string | null
    expiresAt?: DateTimeFilter<"License"> | Date | string
    lastHeartbeatAt?: DateTimeNullableFilter<"License"> | Date | string | null
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
  }

  export type SupportTicketUpsertWithWhereUniqueWithoutCustomerInput = {
    where: SupportTicketWhereUniqueInput
    update: XOR<SupportTicketUpdateWithoutCustomerInput, SupportTicketUncheckedUpdateWithoutCustomerInput>
    create: XOR<SupportTicketCreateWithoutCustomerInput, SupportTicketUncheckedCreateWithoutCustomerInput>
  }

  export type SupportTicketUpdateWithWhereUniqueWithoutCustomerInput = {
    where: SupportTicketWhereUniqueInput
    data: XOR<SupportTicketUpdateWithoutCustomerInput, SupportTicketUncheckedUpdateWithoutCustomerInput>
  }

  export type SupportTicketUpdateManyWithWhereWithoutCustomerInput = {
    where: SupportTicketScalarWhereInput
    data: XOR<SupportTicketUpdateManyMutationInput, SupportTicketUncheckedUpdateManyWithoutCustomerInput>
  }

  export type SupportTicketScalarWhereInput = {
    AND?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
    OR?: SupportTicketScalarWhereInput[]
    NOT?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
    id?: StringFilter<"SupportTicket"> | string
    ticketNumber?: StringFilter<"SupportTicket"> | string
    customerId?: StringFilter<"SupportTicket"> | string
    subject?: StringFilter<"SupportTicket"> | string
    category?: StringFilter<"SupportTicket"> | string
    priority?: StringFilter<"SupportTicket"> | string
    status?: StringFilter<"SupportTicket"> | string
    internalNotes?: StringNullableFilter<"SupportTicket"> | string | null
    createdAt?: DateTimeFilter<"SupportTicket"> | Date | string
    updatedAt?: DateTimeFilter<"SupportTicket"> | Date | string
  }

  export type CustomizationQuoteUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomizationQuoteWhereUniqueInput
    update: XOR<CustomizationQuoteUpdateWithoutCustomerInput, CustomizationQuoteUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomizationQuoteCreateWithoutCustomerInput, CustomizationQuoteUncheckedCreateWithoutCustomerInput>
  }

  export type CustomizationQuoteUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomizationQuoteWhereUniqueInput
    data: XOR<CustomizationQuoteUpdateWithoutCustomerInput, CustomizationQuoteUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomizationQuoteUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomizationQuoteScalarWhereInput
    data: XOR<CustomizationQuoteUpdateManyMutationInput, CustomizationQuoteUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomizationQuoteScalarWhereInput = {
    AND?: CustomizationQuoteScalarWhereInput | CustomizationQuoteScalarWhereInput[]
    OR?: CustomizationQuoteScalarWhereInput[]
    NOT?: CustomizationQuoteScalarWhereInput | CustomizationQuoteScalarWhereInput[]
    id?: StringFilter<"CustomizationQuote"> | string
    customerId?: StringFilter<"CustomizationQuote"> | string
    title?: StringFilter<"CustomizationQuote"> | string
    scopeDescription?: StringFilter<"CustomizationQuote"> | string
    quotedAmount?: FloatFilter<"CustomizationQuote"> | number
    status?: StringFilter<"CustomizationQuote"> | string
    createdAt?: DateTimeFilter<"CustomizationQuote"> | Date | string
    updatedAt?: DateTimeFilter<"CustomizationQuote"> | Date | string
  }

  export type PricingTierCreateWithoutPlanInput = {
    id?: string
    duration: string
    price: number
    originalPrice?: number | null
    discountPercent?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingTierUncheckedCreateWithoutPlanInput = {
    id?: string
    duration: string
    price: number
    originalPrice?: number | null
    discountPercent?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingTierCreateOrConnectWithoutPlanInput = {
    where: PricingTierWhereUniqueInput
    create: XOR<PricingTierCreateWithoutPlanInput, PricingTierUncheckedCreateWithoutPlanInput>
  }

  export type PricingTierCreateManyPlanInputEnvelope = {
    data: PricingTierCreateManyPlanInput | PricingTierCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutPlanInput = {
    id?: string
    duration: string
    status?: string
    amount: number
    currency?: string
    startDate?: Date | string
    endDate: Date | string
    hasSetupAssistance?: boolean
    setupFee?: number
    paymentStatus?: string
    paymentReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSubscriptionsInput
    license?: LicenseCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    customerId: string
    duration: string
    status?: string
    amount: number
    currency?: string
    startDate?: Date | string
    endDate: Date | string
    hasSetupAssistance?: boolean
    setupFee?: number
    paymentStatus?: string
    paymentReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    license?: LicenseUncheckedCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type PricingTierUpsertWithWhereUniqueWithoutPlanInput = {
    where: PricingTierWhereUniqueInput
    update: XOR<PricingTierUpdateWithoutPlanInput, PricingTierUncheckedUpdateWithoutPlanInput>
    create: XOR<PricingTierCreateWithoutPlanInput, PricingTierUncheckedCreateWithoutPlanInput>
  }

  export type PricingTierUpdateWithWhereUniqueWithoutPlanInput = {
    where: PricingTierWhereUniqueInput
    data: XOR<PricingTierUpdateWithoutPlanInput, PricingTierUncheckedUpdateWithoutPlanInput>
  }

  export type PricingTierUpdateManyWithWhereWithoutPlanInput = {
    where: PricingTierScalarWhereInput
    data: XOR<PricingTierUpdateManyMutationInput, PricingTierUncheckedUpdateManyWithoutPlanInput>
  }

  export type PricingTierScalarWhereInput = {
    AND?: PricingTierScalarWhereInput | PricingTierScalarWhereInput[]
    OR?: PricingTierScalarWhereInput[]
    NOT?: PricingTierScalarWhereInput | PricingTierScalarWhereInput[]
    id?: StringFilter<"PricingTier"> | string
    planId?: StringFilter<"PricingTier"> | string
    duration?: StringFilter<"PricingTier"> | string
    price?: FloatFilter<"PricingTier"> | number
    originalPrice?: FloatNullableFilter<"PricingTier"> | number | null
    discountPercent?: FloatFilter<"PricingTier"> | number
    isActive?: BoolFilter<"PricingTier"> | boolean
    createdAt?: DateTimeFilter<"PricingTier"> | Date | string
    updatedAt?: DateTimeFilter<"PricingTier"> | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type PlanCreateWithoutPricingTiersInput = {
    id?: string
    tier: string
    name: string
    description: string
    badge?: string | null
    isActive?: boolean
    entitlementsJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutPricingTiersInput = {
    id?: string
    tier: string
    name: string
    description: string
    badge?: string | null
    isActive?: boolean
    entitlementsJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutPricingTiersInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutPricingTiersInput, PlanUncheckedCreateWithoutPricingTiersInput>
  }

  export type PlanUpsertWithoutPricingTiersInput = {
    update: XOR<PlanUpdateWithoutPricingTiersInput, PlanUncheckedUpdateWithoutPricingTiersInput>
    create: XOR<PlanCreateWithoutPricingTiersInput, PlanUncheckedCreateWithoutPricingTiersInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutPricingTiersInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutPricingTiersInput, PlanUncheckedUpdateWithoutPricingTiersInput>
  }

  export type PlanUpdateWithoutPricingTiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    entitlementsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutPricingTiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    entitlementsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type CustomerCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: LicenseCreateNestedManyWithoutCustomerInput
    tickets?: SupportTicketCreateNestedManyWithoutCustomerInput
    quotes?: CustomizationQuoteCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: LicenseUncheckedCreateNestedManyWithoutCustomerInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutCustomerInput
    quotes?: CustomizationQuoteUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutSubscriptionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
  }

  export type PlanCreateWithoutSubscriptionsInput = {
    id?: string
    tier: string
    name: string
    description: string
    badge?: string | null
    isActive?: boolean
    entitlementsJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pricingTiers?: PricingTierCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    tier: string
    name: string
    description: string
    badge?: string | null
    isActive?: boolean
    entitlementsJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pricingTiers?: PricingTierUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutSubscriptionsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
  }

  export type LicenseCreateWithoutSubscriptionInput = {
    id?: string
    licenseKey: string
    planTier: string
    boundDomain?: string | null
    installationUuid?: string | null
    status?: string
    activatedAt?: Date | string | null
    expiresAt: Date | string
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLicensesInput
    validationLogs?: LicenseValidationLogCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    licenseKey: string
    customerId: string
    planTier: string
    boundDomain?: string | null
    installationUuid?: string | null
    status?: string
    activatedAt?: Date | string | null
    expiresAt: Date | string
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    validationLogs?: LicenseValidationLogUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutSubscriptionInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutSubscriptionInput, LicenseUncheckedCreateWithoutSubscriptionInput>
  }

  export type CustomerUpsertWithoutSubscriptionsInput = {
    update: XOR<CustomerUpdateWithoutSubscriptionsInput, CustomerUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSubscriptionsInput, CustomerUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type CustomerUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicenseUpdateManyWithoutCustomerNestedInput
    tickets?: SupportTicketUpdateManyWithoutCustomerNestedInput
    quotes?: CustomizationQuoteUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicenseUncheckedUpdateManyWithoutCustomerNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutCustomerNestedInput
    quotes?: CustomizationQuoteUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type PlanUpsertWithoutSubscriptionsInput = {
    update: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlanUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    entitlementsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingTiers?: PricingTierUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    entitlementsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingTiers?: PricingTierUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type LicenseUpsertWithoutSubscriptionInput = {
    update: XOR<LicenseUpdateWithoutSubscriptionInput, LicenseUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<LicenseCreateWithoutSubscriptionInput, LicenseUncheckedCreateWithoutSubscriptionInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutSubscriptionInput, LicenseUncheckedUpdateWithoutSubscriptionInput>
  }

  export type LicenseUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    boundDomain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLicensesNestedInput
    validationLogs?: LicenseValidationLogUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    boundDomain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validationLogs?: LicenseValidationLogUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type CustomerCreateWithoutLicensesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutCustomerInput
    tickets?: SupportTicketCreateNestedManyWithoutCustomerInput
    quotes?: CustomizationQuoteCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutLicensesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCustomerInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutCustomerInput
    quotes?: CustomizationQuoteUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutLicensesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutLicensesInput, CustomerUncheckedCreateWithoutLicensesInput>
  }

  export type SubscriptionCreateWithoutLicenseInput = {
    id?: string
    duration: string
    status?: string
    amount: number
    currency?: string
    startDate?: Date | string
    endDate: Date | string
    hasSetupAssistance?: boolean
    setupFee?: number
    paymentStatus?: string
    paymentReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSubscriptionsInput
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutLicenseInput = {
    id?: string
    customerId: string
    planId: string
    duration: string
    status?: string
    amount: number
    currency?: string
    startDate?: Date | string
    endDate: Date | string
    hasSetupAssistance?: boolean
    setupFee?: number
    paymentStatus?: string
    paymentReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutLicenseInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutLicenseInput, SubscriptionUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseValidationLogCreateWithoutLicenseInput = {
    id?: string
    licenseKey: string
    domain?: string | null
    installationUuid?: string | null
    storeVersion?: string | null
    ipAddress?: string | null
    outcome: string
    timestamp?: Date | string
  }

  export type LicenseValidationLogUncheckedCreateWithoutLicenseInput = {
    id?: string
    licenseKey: string
    domain?: string | null
    installationUuid?: string | null
    storeVersion?: string | null
    ipAddress?: string | null
    outcome: string
    timestamp?: Date | string
  }

  export type LicenseValidationLogCreateOrConnectWithoutLicenseInput = {
    where: LicenseValidationLogWhereUniqueInput
    create: XOR<LicenseValidationLogCreateWithoutLicenseInput, LicenseValidationLogUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseValidationLogCreateManyLicenseInputEnvelope = {
    data: LicenseValidationLogCreateManyLicenseInput | LicenseValidationLogCreateManyLicenseInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutLicensesInput = {
    update: XOR<CustomerUpdateWithoutLicensesInput, CustomerUncheckedUpdateWithoutLicensesInput>
    create: XOR<CustomerCreateWithoutLicensesInput, CustomerUncheckedCreateWithoutLicensesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutLicensesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutLicensesInput, CustomerUncheckedUpdateWithoutLicensesInput>
  }

  export type CustomerUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutCustomerNestedInput
    tickets?: SupportTicketUpdateManyWithoutCustomerNestedInput
    quotes?: CustomizationQuoteUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutCustomerNestedInput
    quotes?: CustomizationQuoteUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type SubscriptionUpsertWithoutLicenseInput = {
    update: XOR<SubscriptionUpdateWithoutLicenseInput, SubscriptionUncheckedUpdateWithoutLicenseInput>
    create: XOR<SubscriptionCreateWithoutLicenseInput, SubscriptionUncheckedCreateWithoutLicenseInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutLicenseInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutLicenseInput, SubscriptionUncheckedUpdateWithoutLicenseInput>
  }

  export type SubscriptionUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hasSetupAssistance?: BoolFieldUpdateOperationsInput | boolean
    setupFee?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSubscriptionsNestedInput
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hasSetupAssistance?: BoolFieldUpdateOperationsInput | boolean
    setupFee?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseValidationLogUpsertWithWhereUniqueWithoutLicenseInput = {
    where: LicenseValidationLogWhereUniqueInput
    update: XOR<LicenseValidationLogUpdateWithoutLicenseInput, LicenseValidationLogUncheckedUpdateWithoutLicenseInput>
    create: XOR<LicenseValidationLogCreateWithoutLicenseInput, LicenseValidationLogUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseValidationLogUpdateWithWhereUniqueWithoutLicenseInput = {
    where: LicenseValidationLogWhereUniqueInput
    data: XOR<LicenseValidationLogUpdateWithoutLicenseInput, LicenseValidationLogUncheckedUpdateWithoutLicenseInput>
  }

  export type LicenseValidationLogUpdateManyWithWhereWithoutLicenseInput = {
    where: LicenseValidationLogScalarWhereInput
    data: XOR<LicenseValidationLogUpdateManyMutationInput, LicenseValidationLogUncheckedUpdateManyWithoutLicenseInput>
  }

  export type LicenseValidationLogScalarWhereInput = {
    AND?: LicenseValidationLogScalarWhereInput | LicenseValidationLogScalarWhereInput[]
    OR?: LicenseValidationLogScalarWhereInput[]
    NOT?: LicenseValidationLogScalarWhereInput | LicenseValidationLogScalarWhereInput[]
    id?: StringFilter<"LicenseValidationLog"> | string
    licenseId?: StringFilter<"LicenseValidationLog"> | string
    licenseKey?: StringFilter<"LicenseValidationLog"> | string
    domain?: StringNullableFilter<"LicenseValidationLog"> | string | null
    installationUuid?: StringNullableFilter<"LicenseValidationLog"> | string | null
    storeVersion?: StringNullableFilter<"LicenseValidationLog"> | string | null
    ipAddress?: StringNullableFilter<"LicenseValidationLog"> | string | null
    outcome?: StringFilter<"LicenseValidationLog"> | string
    timestamp?: DateTimeFilter<"LicenseValidationLog"> | Date | string
  }

  export type LicenseCreateWithoutValidationLogsInput = {
    id?: string
    licenseKey: string
    planTier: string
    boundDomain?: string | null
    installationUuid?: string | null
    status?: string
    activatedAt?: Date | string | null
    expiresAt: Date | string
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLicensesInput
    subscription: SubscriptionCreateNestedOneWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutValidationLogsInput = {
    id?: string
    licenseKey: string
    customerId: string
    subscriptionId: string
    planTier: string
    boundDomain?: string | null
    installationUuid?: string | null
    status?: string
    activatedAt?: Date | string | null
    expiresAt: Date | string
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseCreateOrConnectWithoutValidationLogsInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutValidationLogsInput, LicenseUncheckedCreateWithoutValidationLogsInput>
  }

  export type LicenseUpsertWithoutValidationLogsInput = {
    update: XOR<LicenseUpdateWithoutValidationLogsInput, LicenseUncheckedUpdateWithoutValidationLogsInput>
    create: XOR<LicenseCreateWithoutValidationLogsInput, LicenseUncheckedCreateWithoutValidationLogsInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutValidationLogsInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutValidationLogsInput, LicenseUncheckedUpdateWithoutValidationLogsInput>
  }

  export type LicenseUpdateWithoutValidationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    boundDomain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLicensesNestedInput
    subscription?: SubscriptionUpdateOneRequiredWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutValidationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    boundDomain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateWithoutTicketsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutCustomerInput
    licenses?: LicenseCreateNestedManyWithoutCustomerInput
    quotes?: CustomizationQuoteCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCustomerInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutCustomerInput
    quotes?: CustomizationQuoteUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutTicketsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
  }

  export type TicketMessageCreateWithoutTicketInput = {
    id?: string
    senderType: string
    senderName: string
    message: string
    createdAt?: Date | string
  }

  export type TicketMessageUncheckedCreateWithoutTicketInput = {
    id?: string
    senderType: string
    senderName: string
    message: string
    createdAt?: Date | string
  }

  export type TicketMessageCreateOrConnectWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    create: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput>
  }

  export type TicketMessageCreateManyTicketInputEnvelope = {
    data: TicketMessageCreateManyTicketInput | TicketMessageCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutTicketsInput = {
    update: XOR<CustomerUpdateWithoutTicketsInput, CustomerUncheckedUpdateWithoutTicketsInput>
    create: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutTicketsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutTicketsInput, CustomerUncheckedUpdateWithoutTicketsInput>
  }

  export type CustomerUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutCustomerNestedInput
    licenses?: LicenseUpdateManyWithoutCustomerNestedInput
    quotes?: CustomizationQuoteUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutCustomerNestedInput
    quotes?: CustomizationQuoteUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type TicketMessageUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    update: XOR<TicketMessageUpdateWithoutTicketInput, TicketMessageUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput>
  }

  export type TicketMessageUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    data: XOR<TicketMessageUpdateWithoutTicketInput, TicketMessageUncheckedUpdateWithoutTicketInput>
  }

  export type TicketMessageUpdateManyWithWhereWithoutTicketInput = {
    where: TicketMessageScalarWhereInput
    data: XOR<TicketMessageUpdateManyMutationInput, TicketMessageUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketMessageScalarWhereInput = {
    AND?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
    OR?: TicketMessageScalarWhereInput[]
    NOT?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
    id?: StringFilter<"TicketMessage"> | string
    ticketId?: StringFilter<"TicketMessage"> | string
    senderType?: StringFilter<"TicketMessage"> | string
    senderName?: StringFilter<"TicketMessage"> | string
    message?: StringFilter<"TicketMessage"> | string
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
  }

  export type SupportTicketCreateWithoutMessagesInput = {
    id?: string
    ticketNumber: string
    subject: string
    category: string
    priority?: string
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutTicketsInput
  }

  export type SupportTicketUncheckedCreateWithoutMessagesInput = {
    id?: string
    ticketNumber: string
    customerId: string
    subject: string
    category: string
    priority?: string
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportTicketCreateOrConnectWithoutMessagesInput = {
    where: SupportTicketWhereUniqueInput
    create: XOR<SupportTicketCreateWithoutMessagesInput, SupportTicketUncheckedCreateWithoutMessagesInput>
  }

  export type SupportTicketUpsertWithoutMessagesInput = {
    update: XOR<SupportTicketUpdateWithoutMessagesInput, SupportTicketUncheckedUpdateWithoutMessagesInput>
    create: XOR<SupportTicketCreateWithoutMessagesInput, SupportTicketUncheckedCreateWithoutMessagesInput>
    where?: SupportTicketWhereInput
  }

  export type SupportTicketUpdateToOneWithWhereWithoutMessagesInput = {
    where?: SupportTicketWhereInput
    data: XOR<SupportTicketUpdateWithoutMessagesInput, SupportTicketUncheckedUpdateWithoutMessagesInput>
  }

  export type SupportTicketUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type SupportTicketUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateWithoutQuotesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutCustomerInput
    licenses?: LicenseCreateNestedManyWithoutCustomerInput
    tickets?: SupportTicketCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutQuotesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCustomerInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutCustomerInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutQuotesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutQuotesInput, CustomerUncheckedCreateWithoutQuotesInput>
  }

  export type CustomerUpsertWithoutQuotesInput = {
    update: XOR<CustomerUpdateWithoutQuotesInput, CustomerUncheckedUpdateWithoutQuotesInput>
    create: XOR<CustomerCreateWithoutQuotesInput, CustomerUncheckedCreateWithoutQuotesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutQuotesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutQuotesInput, CustomerUncheckedUpdateWithoutQuotesInput>
  }

  export type CustomerUpdateWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutCustomerNestedInput
    licenses?: LicenseUpdateManyWithoutCustomerNestedInput
    tickets?: SupportTicketUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutCustomerNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type SubscriptionCreateManyCustomerInput = {
    id?: string
    planId: string
    duration: string
    status?: string
    amount: number
    currency?: string
    startDate?: Date | string
    endDate: Date | string
    hasSetupAssistance?: boolean
    setupFee?: number
    paymentStatus?: string
    paymentReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseCreateManyCustomerInput = {
    id?: string
    licenseKey: string
    subscriptionId: string
    planTier: string
    boundDomain?: string | null
    installationUuid?: string | null
    status?: string
    activatedAt?: Date | string | null
    expiresAt: Date | string
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportTicketCreateManyCustomerInput = {
    id?: string
    ticketNumber: string
    subject: string
    category: string
    priority?: string
    status?: string
    internalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomizationQuoteCreateManyCustomerInput = {
    id?: string
    title: string
    scopeDescription: string
    quotedAmount: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hasSetupAssistance?: BoolFieldUpdateOperationsInput | boolean
    setupFee?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    license?: LicenseUpdateOneWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hasSetupAssistance?: BoolFieldUpdateOperationsInput | boolean
    setupFee?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: LicenseUncheckedUpdateOneWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hasSetupAssistance?: BoolFieldUpdateOperationsInput | boolean
    setupFee?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    boundDomain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutLicenseNestedInput
    validationLogs?: LicenseValidationLogUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    boundDomain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validationLogs?: LicenseValidationLogUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    planTier?: StringFieldUpdateOperationsInput | string
    boundDomain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
  }

  export type SupportTicketUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type SupportTicketUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomizationQuoteUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scopeDescription?: StringFieldUpdateOperationsInput | string
    quotedAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomizationQuoteUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scopeDescription?: StringFieldUpdateOperationsInput | string
    quotedAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomizationQuoteUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scopeDescription?: StringFieldUpdateOperationsInput | string
    quotedAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingTierCreateManyPlanInput = {
    id?: string
    duration: string
    price: number
    originalPrice?: number | null
    discountPercent?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateManyPlanInput = {
    id?: string
    customerId: string
    duration: string
    status?: string
    amount: number
    currency?: string
    startDate?: Date | string
    endDate: Date | string
    hasSetupAssistance?: boolean
    setupFee?: number
    paymentStatus?: string
    paymentReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingTierUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingTierUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingTierUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hasSetupAssistance?: BoolFieldUpdateOperationsInput | boolean
    setupFee?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSubscriptionsNestedInput
    license?: LicenseUpdateOneWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hasSetupAssistance?: BoolFieldUpdateOperationsInput | boolean
    setupFee?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: LicenseUncheckedUpdateOneWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hasSetupAssistance?: BoolFieldUpdateOperationsInput | boolean
    setupFee?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseValidationLogCreateManyLicenseInput = {
    id?: string
    licenseKey: string
    domain?: string | null
    installationUuid?: string | null
    storeVersion?: string | null
    ipAddress?: string | null
    outcome: string
    timestamp?: Date | string
  }

  export type LicenseValidationLogUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    storeVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseValidationLogUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    storeVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseValidationLogUncheckedUpdateManyWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    installationUuid?: NullableStringFieldUpdateOperationsInput | string | null
    storeVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageCreateManyTicketInput = {
    id?: string
    senderType: string
    senderName: string
    message: string
    createdAt?: Date | string
  }

  export type TicketMessageUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanCountOutputTypeDefaultArgs instead
     */
    export type PlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LicenseCountOutputTypeDefaultArgs instead
     */
    export type LicenseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LicenseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupportTicketCountOutputTypeDefaultArgs instead
     */
    export type SupportTicketCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupportTicketCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminUserDefaultArgs instead
     */
    export type AdminUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanDefaultArgs instead
     */
    export type PlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PricingTierDefaultArgs instead
     */
    export type PricingTierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PricingTierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlatformSettingDefaultArgs instead
     */
    export type PlatformSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlatformSettingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromotionDefaultArgs instead
     */
    export type PromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromotionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionDefaultArgs instead
     */
    export type SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LicenseDefaultArgs instead
     */
    export type LicenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LicenseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LicenseValidationLogDefaultArgs instead
     */
    export type LicenseValidationLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LicenseValidationLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SoftwareReleaseDefaultArgs instead
     */
    export type SoftwareReleaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SoftwareReleaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupportTicketDefaultArgs instead
     */
    export type SupportTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupportTicketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketMessageDefaultArgs instead
     */
    export type TicketMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomizationQuoteDefaultArgs instead
     */
    export type CustomizationQuoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomizationQuoteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CentralThemeItemDefaultArgs instead
     */
    export type CentralThemeItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CentralThemeItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemBroadcastDefaultArgs instead
     */
    export type SystemBroadcastArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemBroadcastDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminAuditLogDefaultArgs instead
     */
    export type AdminAuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminAuditLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
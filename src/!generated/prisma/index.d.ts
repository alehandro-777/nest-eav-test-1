
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
 * Model Entity
 * 
 */
export type Entity = $Result.DefaultSelection<Prisma.$EntityPayload>
/**
 * Model Attribute
 * 
 */
export type Attribute = $Result.DefaultSelection<Prisma.$AttributePayload>
/**
 * Model Value
 * 
 */
export type Value = $Result.DefaultSelection<Prisma.$ValuePayload>
/**
 * Model KVSet
 * 
 */
export type KVSet = $Result.DefaultSelection<Prisma.$KVSetPayload>
/**
 * Model KV
 * 
 */
export type KV = $Result.DefaultSelection<Prisma.$KVPayload>
/**
 * Model Range
 * 
 */
export type Range = $Result.DefaultSelection<Prisma.$RangePayload>
/**
 * Model AttrType
 * 
 */
export type AttrType = $Result.DefaultSelection<Prisma.$AttrTypePayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model Query
 * 
 */
export type Query = $Result.DefaultSelection<Prisma.$QueryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Entities
 * const entities = await prisma.entity.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Entities
   * const entities = await prisma.entity.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.entity`: Exposes CRUD operations for the **Entity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entities
    * const entities = await prisma.entity.findMany()
    * ```
    */
  get entity(): Prisma.EntityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attribute`: Exposes CRUD operations for the **Attribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attributes
    * const attributes = await prisma.attribute.findMany()
    * ```
    */
  get attribute(): Prisma.AttributeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.value`: Exposes CRUD operations for the **Value** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Values
    * const values = await prisma.value.findMany()
    * ```
    */
  get value(): Prisma.ValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kVSet`: Exposes CRUD operations for the **KVSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KVSets
    * const kVSets = await prisma.kVSet.findMany()
    * ```
    */
  get kVSet(): Prisma.KVSetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kV`: Exposes CRUD operations for the **KV** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KVS
    * const kVS = await prisma.kV.findMany()
    * ```
    */
  get kV(): Prisma.KVDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.range`: Exposes CRUD operations for the **Range** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ranges
    * const ranges = await prisma.range.findMany()
    * ```
    */
  get range(): Prisma.RangeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attrType`: Exposes CRUD operations for the **AttrType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttrTypes
    * const attrTypes = await prisma.attrType.findMany()
    * ```
    */
  get attrType(): Prisma.AttrTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.query`: Exposes CRUD operations for the **Query** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Queries
    * const queries = await prisma.query.findMany()
    * ```
    */
  get query(): Prisma.QueryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Entity: 'Entity',
    Attribute: 'Attribute',
    Value: 'Value',
    KVSet: 'KVSet',
    KV: 'KV',
    Range: 'Range',
    AttrType: 'AttrType',
    Template: 'Template',
    Query: 'Query'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "entity" | "attribute" | "value" | "kVSet" | "kV" | "range" | "attrType" | "template" | "query"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Entity: {
        payload: Prisma.$EntityPayload<ExtArgs>
        fields: Prisma.EntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          findFirst: {
            args: Prisma.EntityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          findMany: {
            args: Prisma.EntityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>[]
          }
          create: {
            args: Prisma.EntityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          createMany: {
            args: Prisma.EntityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>[]
          }
          delete: {
            args: Prisma.EntityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          update: {
            args: Prisma.EntityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          deleteMany: {
            args: Prisma.EntityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>[]
          }
          upsert: {
            args: Prisma.EntityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          aggregate: {
            args: Prisma.EntityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntity>
          }
          groupBy: {
            args: Prisma.EntityGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntityCountArgs<ExtArgs>
            result: $Utils.Optional<EntityCountAggregateOutputType> | number
          }
        }
      }
      Attribute: {
        payload: Prisma.$AttributePayload<ExtArgs>
        fields: Prisma.AttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          findFirst: {
            args: Prisma.AttributeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          findMany: {
            args: Prisma.AttributeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          create: {
            args: Prisma.AttributeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          createMany: {
            args: Prisma.AttributeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttributeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          delete: {
            args: Prisma.AttributeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          update: {
            args: Prisma.AttributeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          deleteMany: {
            args: Prisma.AttributeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttributeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          upsert: {
            args: Prisma.AttributeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          aggregate: {
            args: Prisma.AttributeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttribute>
          }
          groupBy: {
            args: Prisma.AttributeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeCountArgs<ExtArgs>
            result: $Utils.Optional<AttributeCountAggregateOutputType> | number
          }
        }
      }
      Value: {
        payload: Prisma.$ValuePayload<ExtArgs>
        fields: Prisma.ValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          findFirst: {
            args: Prisma.ValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          findMany: {
            args: Prisma.ValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>[]
          }
          create: {
            args: Prisma.ValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          createMany: {
            args: Prisma.ValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>[]
          }
          delete: {
            args: Prisma.ValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          update: {
            args: Prisma.ValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          deleteMany: {
            args: Prisma.ValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>[]
          }
          upsert: {
            args: Prisma.ValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          aggregate: {
            args: Prisma.ValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValue>
          }
          groupBy: {
            args: Prisma.ValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValueCountArgs<ExtArgs>
            result: $Utils.Optional<ValueCountAggregateOutputType> | number
          }
        }
      }
      KVSet: {
        payload: Prisma.$KVSetPayload<ExtArgs>
        fields: Prisma.KVSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KVSetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KVSetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVSetPayload>
          }
          findFirst: {
            args: Prisma.KVSetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KVSetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVSetPayload>
          }
          findMany: {
            args: Prisma.KVSetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVSetPayload>[]
          }
          create: {
            args: Prisma.KVSetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVSetPayload>
          }
          createMany: {
            args: Prisma.KVSetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KVSetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVSetPayload>[]
          }
          delete: {
            args: Prisma.KVSetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVSetPayload>
          }
          update: {
            args: Prisma.KVSetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVSetPayload>
          }
          deleteMany: {
            args: Prisma.KVSetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KVSetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KVSetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVSetPayload>[]
          }
          upsert: {
            args: Prisma.KVSetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVSetPayload>
          }
          aggregate: {
            args: Prisma.KVSetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKVSet>
          }
          groupBy: {
            args: Prisma.KVSetGroupByArgs<ExtArgs>
            result: $Utils.Optional<KVSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.KVSetCountArgs<ExtArgs>
            result: $Utils.Optional<KVSetCountAggregateOutputType> | number
          }
        }
      }
      KV: {
        payload: Prisma.$KVPayload<ExtArgs>
        fields: Prisma.KVFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KVFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KVFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVPayload>
          }
          findFirst: {
            args: Prisma.KVFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KVFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVPayload>
          }
          findMany: {
            args: Prisma.KVFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVPayload>[]
          }
          create: {
            args: Prisma.KVCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVPayload>
          }
          createMany: {
            args: Prisma.KVCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KVCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVPayload>[]
          }
          delete: {
            args: Prisma.KVDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVPayload>
          }
          update: {
            args: Prisma.KVUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVPayload>
          }
          deleteMany: {
            args: Prisma.KVDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KVUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KVUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVPayload>[]
          }
          upsert: {
            args: Prisma.KVUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KVPayload>
          }
          aggregate: {
            args: Prisma.KVAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKV>
          }
          groupBy: {
            args: Prisma.KVGroupByArgs<ExtArgs>
            result: $Utils.Optional<KVGroupByOutputType>[]
          }
          count: {
            args: Prisma.KVCountArgs<ExtArgs>
            result: $Utils.Optional<KVCountAggregateOutputType> | number
          }
        }
      }
      Range: {
        payload: Prisma.$RangePayload<ExtArgs>
        fields: Prisma.RangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RangePayload>
          }
          findFirst: {
            args: Prisma.RangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RangePayload>
          }
          findMany: {
            args: Prisma.RangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RangePayload>[]
          }
          create: {
            args: Prisma.RangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RangePayload>
          }
          createMany: {
            args: Prisma.RangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RangeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RangePayload>[]
          }
          delete: {
            args: Prisma.RangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RangePayload>
          }
          update: {
            args: Prisma.RangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RangePayload>
          }
          deleteMany: {
            args: Prisma.RangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RangeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RangePayload>[]
          }
          upsert: {
            args: Prisma.RangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RangePayload>
          }
          aggregate: {
            args: Prisma.RangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRange>
          }
          groupBy: {
            args: Prisma.RangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RangeCountArgs<ExtArgs>
            result: $Utils.Optional<RangeCountAggregateOutputType> | number
          }
        }
      }
      AttrType: {
        payload: Prisma.$AttrTypePayload<ExtArgs>
        fields: Prisma.AttrTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttrTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttrTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttrTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttrTypePayload>
          }
          findFirst: {
            args: Prisma.AttrTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttrTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttrTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttrTypePayload>
          }
          findMany: {
            args: Prisma.AttrTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttrTypePayload>[]
          }
          create: {
            args: Prisma.AttrTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttrTypePayload>
          }
          createMany: {
            args: Prisma.AttrTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttrTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttrTypePayload>[]
          }
          delete: {
            args: Prisma.AttrTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttrTypePayload>
          }
          update: {
            args: Prisma.AttrTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttrTypePayload>
          }
          deleteMany: {
            args: Prisma.AttrTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttrTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttrTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttrTypePayload>[]
          }
          upsert: {
            args: Prisma.AttrTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttrTypePayload>
          }
          aggregate: {
            args: Prisma.AttrTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttrType>
          }
          groupBy: {
            args: Prisma.AttrTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttrTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttrTypeCountArgs<ExtArgs>
            result: $Utils.Optional<AttrTypeCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      Query: {
        payload: Prisma.$QueryPayload<ExtArgs>
        fields: Prisma.QueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          findFirst: {
            args: Prisma.QueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          findMany: {
            args: Prisma.QueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>[]
          }
          create: {
            args: Prisma.QueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          createMany: {
            args: Prisma.QueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>[]
          }
          delete: {
            args: Prisma.QueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          update: {
            args: Prisma.QueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          deleteMany: {
            args: Prisma.QueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QueryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>[]
          }
          upsert: {
            args: Prisma.QueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          aggregate: {
            args: Prisma.QueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuery>
          }
          groupBy: {
            args: Prisma.QueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.QueryCountArgs<ExtArgs>
            result: $Utils.Optional<QueryCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    entity?: EntityOmit
    attribute?: AttributeOmit
    value?: ValueOmit
    kVSet?: KVSetOmit
    kV?: KVOmit
    range?: RangeOmit
    attrType?: AttrTypeOmit
    template?: TemplateOmit
    query?: QueryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type EntityCountOutputType
   */

  export type EntityCountOutputType = {
    values: number
  }

  export type EntityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    values?: boolean | EntityCountOutputTypeCountValuesArgs
  }

  // Custom InputTypes
  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityCountOutputType
     */
    select?: EntityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeCountValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValueWhereInput
  }


  /**
   * Count Type AttributeCountOutputType
   */

  export type AttributeCountOutputType = {
    value: number
  }

  export type AttributeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    value?: boolean | AttributeCountOutputTypeCountValueArgs
  }

  // Custom InputTypes
  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeCountOutputType
     */
    select?: AttributeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeCountValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValueWhereInput
  }


  /**
   * Count Type KVSetCountOutputType
   */

  export type KVSetCountOutputType = {
    values: number
    attributes: number
  }

  export type KVSetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    values?: boolean | KVSetCountOutputTypeCountValuesArgs
    attributes?: boolean | KVSetCountOutputTypeCountAttributesArgs
  }

  // Custom InputTypes
  /**
   * KVSetCountOutputType without action
   */
  export type KVSetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KVSetCountOutputType
     */
    select?: KVSetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KVSetCountOutputType without action
   */
  export type KVSetCountOutputTypeCountValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KVWhereInput
  }

  /**
   * KVSetCountOutputType without action
   */
  export type KVSetCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
  }


  /**
   * Count Type RangeCountOutputType
   */

  export type RangeCountOutputType = {
    attributes: number
  }

  export type RangeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | RangeCountOutputTypeCountAttributesArgs
  }

  // Custom InputTypes
  /**
   * RangeCountOutputType without action
   */
  export type RangeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RangeCountOutputType
     */
    select?: RangeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RangeCountOutputType without action
   */
  export type RangeCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
  }


  /**
   * Count Type AttrTypeCountOutputType
   */

  export type AttrTypeCountOutputType = {
    attributes: number
  }

  export type AttrTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | AttrTypeCountOutputTypeCountAttributesArgs
  }

  // Custom InputTypes
  /**
   * AttrTypeCountOutputType without action
   */
  export type AttrTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttrTypeCountOutputType
     */
    select?: AttrTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttrTypeCountOutputType without action
   */
  export type AttrTypeCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Entity
   */

  export type AggregateEntity = {
    _count: EntityCountAggregateOutputType | null
    _avg: EntityAvgAggregateOutputType | null
    _sum: EntitySumAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  export type EntityAvgAggregateOutputType = {
    id: number | null
  }

  export type EntitySumAggregateOutputType = {
    id: number | null
  }

  export type EntityMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type EntityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type EntityCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type EntityAvgAggregateInputType = {
    id?: true
  }

  export type EntitySumAggregateInputType = {
    id?: true
  }

  export type EntityMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type EntityMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type EntityCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type EntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entity to aggregate.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entities
    **/
    _count?: true | EntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntityMaxAggregateInputType
  }

  export type GetEntityAggregateType<T extends EntityAggregateArgs> = {
        [P in keyof T & keyof AggregateEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntity[P]>
      : GetScalarType<T[P], AggregateEntity[P]>
  }




  export type EntityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityWhereInput
    orderBy?: EntityOrderByWithAggregationInput | EntityOrderByWithAggregationInput[]
    by: EntityScalarFieldEnum[] | EntityScalarFieldEnum
    having?: EntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntityCountAggregateInputType | true
    _avg?: EntityAvgAggregateInputType
    _sum?: EntitySumAggregateInputType
    _min?: EntityMinAggregateInputType
    _max?: EntityMaxAggregateInputType
  }

  export type EntityGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: EntityCountAggregateOutputType | null
    _avg: EntityAvgAggregateOutputType | null
    _sum: EntitySumAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  type GetEntityGroupByPayload<T extends EntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntityGroupByOutputType[P]>
            : GetScalarType<T[P], EntityGroupByOutputType[P]>
        }
      >
    >


  export type EntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    values?: boolean | Entity$valuesArgs<ExtArgs>
    _count?: boolean | EntityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type EntityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["entity"]>
  export type EntityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    values?: boolean | Entity$valuesArgs<ExtArgs>
    _count?: boolean | EntityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EntityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entity"
    objects: {
      values: Prisma.$ValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["entity"]>
    composites: {}
  }

  type EntityGetPayload<S extends boolean | null | undefined | EntityDefaultArgs> = $Result.GetResult<Prisma.$EntityPayload, S>

  type EntityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntityCountAggregateInputType | true
    }

  export interface EntityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entity'], meta: { name: 'Entity' } }
    /**
     * Find zero or one Entity that matches the filter.
     * @param {EntityFindUniqueArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntityFindUniqueArgs>(args: SelectSubset<T, EntityFindUniqueArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntityFindUniqueOrThrowArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntityFindUniqueOrThrowArgs>(args: SelectSubset<T, EntityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindFirstArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntityFindFirstArgs>(args?: SelectSubset<T, EntityFindFirstArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindFirstOrThrowArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntityFindFirstOrThrowArgs>(args?: SelectSubset<T, EntityFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entities
     * const entities = await prisma.entity.findMany()
     * 
     * // Get first 10 Entities
     * const entities = await prisma.entity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entityWithIdOnly = await prisma.entity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntityFindManyArgs>(args?: SelectSubset<T, EntityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entity.
     * @param {EntityCreateArgs} args - Arguments to create a Entity.
     * @example
     * // Create one Entity
     * const Entity = await prisma.entity.create({
     *   data: {
     *     // ... data to create a Entity
     *   }
     * })
     * 
     */
    create<T extends EntityCreateArgs>(args: SelectSubset<T, EntityCreateArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entities.
     * @param {EntityCreateManyArgs} args - Arguments to create many Entities.
     * @example
     * // Create many Entities
     * const entity = await prisma.entity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntityCreateManyArgs>(args?: SelectSubset<T, EntityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entities and returns the data saved in the database.
     * @param {EntityCreateManyAndReturnArgs} args - Arguments to create many Entities.
     * @example
     * // Create many Entities
     * const entity = await prisma.entity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entities and only return the `id`
     * const entityWithIdOnly = await prisma.entity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntityCreateManyAndReturnArgs>(args?: SelectSubset<T, EntityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entity.
     * @param {EntityDeleteArgs} args - Arguments to delete one Entity.
     * @example
     * // Delete one Entity
     * const Entity = await prisma.entity.delete({
     *   where: {
     *     // ... filter to delete one Entity
     *   }
     * })
     * 
     */
    delete<T extends EntityDeleteArgs>(args: SelectSubset<T, EntityDeleteArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entity.
     * @param {EntityUpdateArgs} args - Arguments to update one Entity.
     * @example
     * // Update one Entity
     * const entity = await prisma.entity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntityUpdateArgs>(args: SelectSubset<T, EntityUpdateArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entities.
     * @param {EntityDeleteManyArgs} args - Arguments to filter Entities to delete.
     * @example
     * // Delete a few Entities
     * const { count } = await prisma.entity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntityDeleteManyArgs>(args?: SelectSubset<T, EntityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entities
     * const entity = await prisma.entity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntityUpdateManyArgs>(args: SelectSubset<T, EntityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entities and returns the data updated in the database.
     * @param {EntityUpdateManyAndReturnArgs} args - Arguments to update many Entities.
     * @example
     * // Update many Entities
     * const entity = await prisma.entity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entities and only return the `id`
     * const entityWithIdOnly = await prisma.entity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntityUpdateManyAndReturnArgs>(args: SelectSubset<T, EntityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entity.
     * @param {EntityUpsertArgs} args - Arguments to update or create a Entity.
     * @example
     * // Update or create a Entity
     * const entity = await prisma.entity.upsert({
     *   create: {
     *     // ... data to create a Entity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entity we want to update
     *   }
     * })
     */
    upsert<T extends EntityUpsertArgs>(args: SelectSubset<T, EntityUpsertArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityCountArgs} args - Arguments to filter Entities to count.
     * @example
     * // Count the number of Entities
     * const count = await prisma.entity.count({
     *   where: {
     *     // ... the filter for the Entities we want to count
     *   }
     * })
    **/
    count<T extends EntityCountArgs>(
      args?: Subset<T, EntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntityAggregateArgs>(args: Subset<T, EntityAggregateArgs>): Prisma.PrismaPromise<GetEntityAggregateType<T>>

    /**
     * Group by Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityGroupByArgs} args - Group by arguments.
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
      T extends EntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntityGroupByArgs['orderBy'] }
        : { orderBy?: EntityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entity model
   */
  readonly fields: EntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    values<T extends Entity$valuesArgs<ExtArgs> = {}>(args?: Subset<T, Entity$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Entity model
   */
  interface EntityFieldRefs {
    readonly id: FieldRef<"Entity", 'Int'>
    readonly name: FieldRef<"Entity", 'String'>
    readonly createdAt: FieldRef<"Entity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entity findUnique
   */
  export type EntityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity findUniqueOrThrow
   */
  export type EntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity findFirst
   */
  export type EntityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entities.
     */
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity findFirstOrThrow
   */
  export type EntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entities.
     */
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity findMany
   */
  export type EntityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entities to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity create
   */
  export type EntityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The data needed to create a Entity.
     */
    data: XOR<EntityCreateInput, EntityUncheckedCreateInput>
  }

  /**
   * Entity createMany
   */
  export type EntityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entities.
     */
    data: EntityCreateManyInput | EntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entity createManyAndReturn
   */
  export type EntityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * The data used to create many Entities.
     */
    data: EntityCreateManyInput | EntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entity update
   */
  export type EntityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The data needed to update a Entity.
     */
    data: XOR<EntityUpdateInput, EntityUncheckedUpdateInput>
    /**
     * Choose, which Entity to update.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity updateMany
   */
  export type EntityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entities.
     */
    data: XOR<EntityUpdateManyMutationInput, EntityUncheckedUpdateManyInput>
    /**
     * Filter which Entities to update
     */
    where?: EntityWhereInput
    /**
     * Limit how many Entities to update.
     */
    limit?: number
  }

  /**
   * Entity updateManyAndReturn
   */
  export type EntityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * The data used to update Entities.
     */
    data: XOR<EntityUpdateManyMutationInput, EntityUncheckedUpdateManyInput>
    /**
     * Filter which Entities to update
     */
    where?: EntityWhereInput
    /**
     * Limit how many Entities to update.
     */
    limit?: number
  }

  /**
   * Entity upsert
   */
  export type EntityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The filter to search for the Entity to update in case it exists.
     */
    where: EntityWhereUniqueInput
    /**
     * In case the Entity found by the `where` argument doesn't exist, create a new Entity with this data.
     */
    create: XOR<EntityCreateInput, EntityUncheckedCreateInput>
    /**
     * In case the Entity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntityUpdateInput, EntityUncheckedUpdateInput>
  }

  /**
   * Entity delete
   */
  export type EntityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter which Entity to delete.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity deleteMany
   */
  export type EntityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entities to delete
     */
    where?: EntityWhereInput
    /**
     * Limit how many Entities to delete.
     */
    limit?: number
  }

  /**
   * Entity.values
   */
  export type Entity$valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    where?: ValueWhereInput
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    cursor?: ValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Entity without action
   */
  export type EntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
  }


  /**
   * Model Attribute
   */

  export type AggregateAttribute = {
    _count: AttributeCountAggregateOutputType | null
    _avg: AttributeAvgAggregateOutputType | null
    _sum: AttributeSumAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  export type AttributeAvgAggregateOutputType = {
    id: number | null
    typeId: number | null
    rangeId: number | null
    KVSetId: number | null
  }

  export type AttributeSumAggregateOutputType = {
    id: number | null
    typeId: number | null
    rangeId: number | null
    KVSetId: number | null
  }

  export type AttributeMinAggregateOutputType = {
    id: number | null
    name: string | null
    typeId: number | null
    rangeId: number | null
    KVSetId: number | null
  }

  export type AttributeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    typeId: number | null
    rangeId: number | null
    KVSetId: number | null
  }

  export type AttributeCountAggregateOutputType = {
    id: number
    name: number
    typeId: number
    rangeId: number
    KVSetId: number
    _all: number
  }


  export type AttributeAvgAggregateInputType = {
    id?: true
    typeId?: true
    rangeId?: true
    KVSetId?: true
  }

  export type AttributeSumAggregateInputType = {
    id?: true
    typeId?: true
    rangeId?: true
    KVSetId?: true
  }

  export type AttributeMinAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
    rangeId?: true
    KVSetId?: true
  }

  export type AttributeMaxAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
    rangeId?: true
    KVSetId?: true
  }

  export type AttributeCountAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
    rangeId?: true
    KVSetId?: true
    _all?: true
  }

  export type AttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attribute to aggregate.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attributes
    **/
    _count?: true | AttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttributeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttributeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeMaxAggregateInputType
  }

  export type GetAttributeAggregateType<T extends AttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttribute[P]>
      : GetScalarType<T[P], AggregateAttribute[P]>
  }




  export type AttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithAggregationInput | AttributeOrderByWithAggregationInput[]
    by: AttributeScalarFieldEnum[] | AttributeScalarFieldEnum
    having?: AttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeCountAggregateInputType | true
    _avg?: AttributeAvgAggregateInputType
    _sum?: AttributeSumAggregateInputType
    _min?: AttributeMinAggregateInputType
    _max?: AttributeMaxAggregateInputType
  }

  export type AttributeGroupByOutputType = {
    id: number
    name: string
    typeId: number
    rangeId: number | null
    KVSetId: number | null
    _count: AttributeCountAggregateOutputType | null
    _avg: AttributeAvgAggregateOutputType | null
    _sum: AttributeSumAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  type GetAttributeGroupByPayload<T extends AttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeGroupByOutputType[P]>
        }
      >
    >


  export type AttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    typeId?: boolean
    rangeId?: boolean
    KVSetId?: boolean
    value?: boolean | Attribute$valueArgs<ExtArgs>
    type?: boolean | AttrTypeDefaultArgs<ExtArgs>
    range?: boolean | Attribute$rangeArgs<ExtArgs>
    kVSet?: boolean | Attribute$kVSetArgs<ExtArgs>
    _count?: boolean | AttributeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    typeId?: boolean
    rangeId?: boolean
    KVSetId?: boolean
    type?: boolean | AttrTypeDefaultArgs<ExtArgs>
    range?: boolean | Attribute$rangeArgs<ExtArgs>
    kVSet?: boolean | Attribute$kVSetArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    typeId?: boolean
    rangeId?: boolean
    KVSetId?: boolean
    type?: boolean | AttrTypeDefaultArgs<ExtArgs>
    range?: boolean | Attribute$rangeArgs<ExtArgs>
    kVSet?: boolean | Attribute$kVSetArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectScalar = {
    id?: boolean
    name?: boolean
    typeId?: boolean
    rangeId?: boolean
    KVSetId?: boolean
  }

  export type AttributeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "typeId" | "rangeId" | "KVSetId", ExtArgs["result"]["attribute"]>
  export type AttributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    value?: boolean | Attribute$valueArgs<ExtArgs>
    type?: boolean | AttrTypeDefaultArgs<ExtArgs>
    range?: boolean | Attribute$rangeArgs<ExtArgs>
    kVSet?: boolean | Attribute$kVSetArgs<ExtArgs>
    _count?: boolean | AttributeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttributeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AttrTypeDefaultArgs<ExtArgs>
    range?: boolean | Attribute$rangeArgs<ExtArgs>
    kVSet?: boolean | Attribute$kVSetArgs<ExtArgs>
  }
  export type AttributeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AttrTypeDefaultArgs<ExtArgs>
    range?: boolean | Attribute$rangeArgs<ExtArgs>
    kVSet?: boolean | Attribute$kVSetArgs<ExtArgs>
  }

  export type $AttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attribute"
    objects: {
      value: Prisma.$ValuePayload<ExtArgs>[]
      type: Prisma.$AttrTypePayload<ExtArgs>
      range: Prisma.$RangePayload<ExtArgs> | null
      kVSet: Prisma.$KVSetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      typeId: number
      rangeId: number | null
      KVSetId: number | null
    }, ExtArgs["result"]["attribute"]>
    composites: {}
  }

  type AttributeGetPayload<S extends boolean | null | undefined | AttributeDefaultArgs> = $Result.GetResult<Prisma.$AttributePayload, S>

  type AttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttributeCountAggregateInputType | true
    }

  export interface AttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attribute'], meta: { name: 'Attribute' } }
    /**
     * Find zero or one Attribute that matches the filter.
     * @param {AttributeFindUniqueArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttributeFindUniqueArgs>(args: SelectSubset<T, AttributeFindUniqueArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attribute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttributeFindUniqueOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttributeFindUniqueOrThrowArgs>(args: SelectSubset<T, AttributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttributeFindFirstArgs>(args?: SelectSubset<T, AttributeFindFirstArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttributeFindFirstOrThrowArgs>(args?: SelectSubset<T, AttributeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attributes
     * const attributes = await prisma.attribute.findMany()
     * 
     * // Get first 10 Attributes
     * const attributes = await prisma.attribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attributeWithIdOnly = await prisma.attribute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttributeFindManyArgs>(args?: SelectSubset<T, AttributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attribute.
     * @param {AttributeCreateArgs} args - Arguments to create a Attribute.
     * @example
     * // Create one Attribute
     * const Attribute = await prisma.attribute.create({
     *   data: {
     *     // ... data to create a Attribute
     *   }
     * })
     * 
     */
    create<T extends AttributeCreateArgs>(args: SelectSubset<T, AttributeCreateArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attributes.
     * @param {AttributeCreateManyArgs} args - Arguments to create many Attributes.
     * @example
     * // Create many Attributes
     * const attribute = await prisma.attribute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttributeCreateManyArgs>(args?: SelectSubset<T, AttributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attributes and returns the data saved in the database.
     * @param {AttributeCreateManyAndReturnArgs} args - Arguments to create many Attributes.
     * @example
     * // Create many Attributes
     * const attribute = await prisma.attribute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attributes and only return the `id`
     * const attributeWithIdOnly = await prisma.attribute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttributeCreateManyAndReturnArgs>(args?: SelectSubset<T, AttributeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attribute.
     * @param {AttributeDeleteArgs} args - Arguments to delete one Attribute.
     * @example
     * // Delete one Attribute
     * const Attribute = await prisma.attribute.delete({
     *   where: {
     *     // ... filter to delete one Attribute
     *   }
     * })
     * 
     */
    delete<T extends AttributeDeleteArgs>(args: SelectSubset<T, AttributeDeleteArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attribute.
     * @param {AttributeUpdateArgs} args - Arguments to update one Attribute.
     * @example
     * // Update one Attribute
     * const attribute = await prisma.attribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttributeUpdateArgs>(args: SelectSubset<T, AttributeUpdateArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attributes.
     * @param {AttributeDeleteManyArgs} args - Arguments to filter Attributes to delete.
     * @example
     * // Delete a few Attributes
     * const { count } = await prisma.attribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttributeDeleteManyArgs>(args?: SelectSubset<T, AttributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attributes
     * const attribute = await prisma.attribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttributeUpdateManyArgs>(args: SelectSubset<T, AttributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes and returns the data updated in the database.
     * @param {AttributeUpdateManyAndReturnArgs} args - Arguments to update many Attributes.
     * @example
     * // Update many Attributes
     * const attribute = await prisma.attribute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attributes and only return the `id`
     * const attributeWithIdOnly = await prisma.attribute.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttributeUpdateManyAndReturnArgs>(args: SelectSubset<T, AttributeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attribute.
     * @param {AttributeUpsertArgs} args - Arguments to update or create a Attribute.
     * @example
     * // Update or create a Attribute
     * const attribute = await prisma.attribute.upsert({
     *   create: {
     *     // ... data to create a Attribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attribute we want to update
     *   }
     * })
     */
    upsert<T extends AttributeUpsertArgs>(args: SelectSubset<T, AttributeUpsertArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeCountArgs} args - Arguments to filter Attributes to count.
     * @example
     * // Count the number of Attributes
     * const count = await prisma.attribute.count({
     *   where: {
     *     // ... the filter for the Attributes we want to count
     *   }
     * })
    **/
    count<T extends AttributeCountArgs>(
      args?: Subset<T, AttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttributeAggregateArgs>(args: Subset<T, AttributeAggregateArgs>): Prisma.PrismaPromise<GetAttributeAggregateType<T>>

    /**
     * Group by Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeGroupByArgs} args - Group by arguments.
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
      T extends AttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeGroupByArgs['orderBy'] }
        : { orderBy?: AttributeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attribute model
   */
  readonly fields: AttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    value<T extends Attribute$valueArgs<ExtArgs> = {}>(args?: Subset<T, Attribute$valueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    type<T extends AttrTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttrTypeDefaultArgs<ExtArgs>>): Prisma__AttrTypeClient<$Result.GetResult<Prisma.$AttrTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    range<T extends Attribute$rangeArgs<ExtArgs> = {}>(args?: Subset<T, Attribute$rangeArgs<ExtArgs>>): Prisma__RangeClient<$Result.GetResult<Prisma.$RangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    kVSet<T extends Attribute$kVSetArgs<ExtArgs> = {}>(args?: Subset<T, Attribute$kVSetArgs<ExtArgs>>): Prisma__KVSetClient<$Result.GetResult<Prisma.$KVSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attribute model
   */
  interface AttributeFieldRefs {
    readonly id: FieldRef<"Attribute", 'Int'>
    readonly name: FieldRef<"Attribute", 'String'>
    readonly typeId: FieldRef<"Attribute", 'Int'>
    readonly rangeId: FieldRef<"Attribute", 'Int'>
    readonly KVSetId: FieldRef<"Attribute", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Attribute findUnique
   */
  export type AttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute findUniqueOrThrow
   */
  export type AttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute findFirst
   */
  export type AttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute findFirstOrThrow
   */
  export type AttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute findMany
   */
  export type AttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attributes to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute create
   */
  export type AttributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The data needed to create a Attribute.
     */
    data: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
  }

  /**
   * Attribute createMany
   */
  export type AttributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attributes.
     */
    data: AttributeCreateManyInput | AttributeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attribute createManyAndReturn
   */
  export type AttributeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * The data used to create many Attributes.
     */
    data: AttributeCreateManyInput | AttributeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attribute update
   */
  export type AttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The data needed to update a Attribute.
     */
    data: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
    /**
     * Choose, which Attribute to update.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute updateMany
   */
  export type AttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attributes.
     */
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to update.
     */
    limit?: number
  }

  /**
   * Attribute updateManyAndReturn
   */
  export type AttributeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * The data used to update Attributes.
     */
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attribute upsert
   */
  export type AttributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The filter to search for the Attribute to update in case it exists.
     */
    where: AttributeWhereUniqueInput
    /**
     * In case the Attribute found by the `where` argument doesn't exist, create a new Attribute with this data.
     */
    create: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
    /**
     * In case the Attribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
  }

  /**
   * Attribute delete
   */
  export type AttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter which Attribute to delete.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute deleteMany
   */
  export type AttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attributes to delete
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to delete.
     */
    limit?: number
  }

  /**
   * Attribute.value
   */
  export type Attribute$valueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    where?: ValueWhereInput
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    cursor?: ValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Attribute.range
   */
  export type Attribute$rangeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Range
     */
    select?: RangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Range
     */
    omit?: RangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RangeInclude<ExtArgs> | null
    where?: RangeWhereInput
  }

  /**
   * Attribute.kVSet
   */
  export type Attribute$kVSetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KVSet
     */
    select?: KVSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KVSet
     */
    omit?: KVSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVSetInclude<ExtArgs> | null
    where?: KVSetWhereInput
  }

  /**
   * Attribute without action
   */
  export type AttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
  }


  /**
   * Model Value
   */

  export type AggregateValue = {
    _count: ValueCountAggregateOutputType | null
    _avg: ValueAvgAggregateOutputType | null
    _sum: ValueSumAggregateOutputType | null
    _min: ValueMinAggregateOutputType | null
    _max: ValueMaxAggregateOutputType | null
  }

  export type ValueAvgAggregateOutputType = {
    id: number | null
    entityId: number | null
    attributeId: number | null
    numberVal: number | null
  }

  export type ValueSumAggregateOutputType = {
    id: number | null
    entityId: number | null
    attributeId: number | null
    numberVal: number | null
  }

  export type ValueMinAggregateOutputType = {
    id: number | null
    ts: Date | null
    entityId: number | null
    attributeId: number | null
    stringVal: string | null
    numberVal: number | null
    boolVal: boolean | null
    dateVal: Date | null
  }

  export type ValueMaxAggregateOutputType = {
    id: number | null
    ts: Date | null
    entityId: number | null
    attributeId: number | null
    stringVal: string | null
    numberVal: number | null
    boolVal: boolean | null
    dateVal: Date | null
  }

  export type ValueCountAggregateOutputType = {
    id: number
    ts: number
    entityId: number
    attributeId: number
    stringVal: number
    numberVal: number
    boolVal: number
    dateVal: number
    _all: number
  }


  export type ValueAvgAggregateInputType = {
    id?: true
    entityId?: true
    attributeId?: true
    numberVal?: true
  }

  export type ValueSumAggregateInputType = {
    id?: true
    entityId?: true
    attributeId?: true
    numberVal?: true
  }

  export type ValueMinAggregateInputType = {
    id?: true
    ts?: true
    entityId?: true
    attributeId?: true
    stringVal?: true
    numberVal?: true
    boolVal?: true
    dateVal?: true
  }

  export type ValueMaxAggregateInputType = {
    id?: true
    ts?: true
    entityId?: true
    attributeId?: true
    stringVal?: true
    numberVal?: true
    boolVal?: true
    dateVal?: true
  }

  export type ValueCountAggregateInputType = {
    id?: true
    ts?: true
    entityId?: true
    attributeId?: true
    stringVal?: true
    numberVal?: true
    boolVal?: true
    dateVal?: true
    _all?: true
  }

  export type ValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Value to aggregate.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Values
    **/
    _count?: true | ValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValueMaxAggregateInputType
  }

  export type GetValueAggregateType<T extends ValueAggregateArgs> = {
        [P in keyof T & keyof AggregateValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValue[P]>
      : GetScalarType<T[P], AggregateValue[P]>
  }




  export type ValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValueWhereInput
    orderBy?: ValueOrderByWithAggregationInput | ValueOrderByWithAggregationInput[]
    by: ValueScalarFieldEnum[] | ValueScalarFieldEnum
    having?: ValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValueCountAggregateInputType | true
    _avg?: ValueAvgAggregateInputType
    _sum?: ValueSumAggregateInputType
    _min?: ValueMinAggregateInputType
    _max?: ValueMaxAggregateInputType
  }

  export type ValueGroupByOutputType = {
    id: number
    ts: Date
    entityId: number
    attributeId: number
    stringVal: string
    numberVal: number | null
    boolVal: boolean | null
    dateVal: Date | null
    _count: ValueCountAggregateOutputType | null
    _avg: ValueAvgAggregateOutputType | null
    _sum: ValueSumAggregateOutputType | null
    _min: ValueMinAggregateOutputType | null
    _max: ValueMaxAggregateOutputType | null
  }

  type GetValueGroupByPayload<T extends ValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValueGroupByOutputType[P]>
            : GetScalarType<T[P], ValueGroupByOutputType[P]>
        }
      >
    >


  export type ValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ts?: boolean
    entityId?: boolean
    attributeId?: boolean
    stringVal?: boolean
    numberVal?: boolean
    boolVal?: boolean
    dateVal?: boolean
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["value"]>

  export type ValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ts?: boolean
    entityId?: boolean
    attributeId?: boolean
    stringVal?: boolean
    numberVal?: boolean
    boolVal?: boolean
    dateVal?: boolean
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["value"]>

  export type ValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ts?: boolean
    entityId?: boolean
    attributeId?: boolean
    stringVal?: boolean
    numberVal?: boolean
    boolVal?: boolean
    dateVal?: boolean
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["value"]>

  export type ValueSelectScalar = {
    id?: boolean
    ts?: boolean
    entityId?: boolean
    attributeId?: boolean
    stringVal?: boolean
    numberVal?: boolean
    boolVal?: boolean
    dateVal?: boolean
  }

  export type ValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ts" | "entityId" | "attributeId" | "stringVal" | "numberVal" | "boolVal" | "dateVal", ExtArgs["result"]["value"]>
  export type ValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }
  export type ValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }
  export type ValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }

  export type $ValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Value"
    objects: {
      entity: Prisma.$EntityPayload<ExtArgs>
      attribute: Prisma.$AttributePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ts: Date
      entityId: number
      attributeId: number
      stringVal: string
      numberVal: number | null
      boolVal: boolean | null
      dateVal: Date | null
    }, ExtArgs["result"]["value"]>
    composites: {}
  }

  type ValueGetPayload<S extends boolean | null | undefined | ValueDefaultArgs> = $Result.GetResult<Prisma.$ValuePayload, S>

  type ValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValueCountAggregateInputType | true
    }

  export interface ValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Value'], meta: { name: 'Value' } }
    /**
     * Find zero or one Value that matches the filter.
     * @param {ValueFindUniqueArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValueFindUniqueArgs>(args: SelectSubset<T, ValueFindUniqueArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Value that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValueFindUniqueOrThrowArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValueFindUniqueOrThrowArgs>(args: SelectSubset<T, ValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Value that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindFirstArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValueFindFirstArgs>(args?: SelectSubset<T, ValueFindFirstArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Value that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindFirstOrThrowArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValueFindFirstOrThrowArgs>(args?: SelectSubset<T, ValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Values that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Values
     * const values = await prisma.value.findMany()
     * 
     * // Get first 10 Values
     * const values = await prisma.value.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const valueWithIdOnly = await prisma.value.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ValueFindManyArgs>(args?: SelectSubset<T, ValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Value.
     * @param {ValueCreateArgs} args - Arguments to create a Value.
     * @example
     * // Create one Value
     * const Value = await prisma.value.create({
     *   data: {
     *     // ... data to create a Value
     *   }
     * })
     * 
     */
    create<T extends ValueCreateArgs>(args: SelectSubset<T, ValueCreateArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Values.
     * @param {ValueCreateManyArgs} args - Arguments to create many Values.
     * @example
     * // Create many Values
     * const value = await prisma.value.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValueCreateManyArgs>(args?: SelectSubset<T, ValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Values and returns the data saved in the database.
     * @param {ValueCreateManyAndReturnArgs} args - Arguments to create many Values.
     * @example
     * // Create many Values
     * const value = await prisma.value.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Values and only return the `id`
     * const valueWithIdOnly = await prisma.value.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ValueCreateManyAndReturnArgs>(args?: SelectSubset<T, ValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Value.
     * @param {ValueDeleteArgs} args - Arguments to delete one Value.
     * @example
     * // Delete one Value
     * const Value = await prisma.value.delete({
     *   where: {
     *     // ... filter to delete one Value
     *   }
     * })
     * 
     */
    delete<T extends ValueDeleteArgs>(args: SelectSubset<T, ValueDeleteArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Value.
     * @param {ValueUpdateArgs} args - Arguments to update one Value.
     * @example
     * // Update one Value
     * const value = await prisma.value.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValueUpdateArgs>(args: SelectSubset<T, ValueUpdateArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Values.
     * @param {ValueDeleteManyArgs} args - Arguments to filter Values to delete.
     * @example
     * // Delete a few Values
     * const { count } = await prisma.value.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValueDeleteManyArgs>(args?: SelectSubset<T, ValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Values
     * const value = await prisma.value.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValueUpdateManyArgs>(args: SelectSubset<T, ValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Values and returns the data updated in the database.
     * @param {ValueUpdateManyAndReturnArgs} args - Arguments to update many Values.
     * @example
     * // Update many Values
     * const value = await prisma.value.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Values and only return the `id`
     * const valueWithIdOnly = await prisma.value.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ValueUpdateManyAndReturnArgs>(args: SelectSubset<T, ValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Value.
     * @param {ValueUpsertArgs} args - Arguments to update or create a Value.
     * @example
     * // Update or create a Value
     * const value = await prisma.value.upsert({
     *   create: {
     *     // ... data to create a Value
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Value we want to update
     *   }
     * })
     */
    upsert<T extends ValueUpsertArgs>(args: SelectSubset<T, ValueUpsertArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueCountArgs} args - Arguments to filter Values to count.
     * @example
     * // Count the number of Values
     * const count = await prisma.value.count({
     *   where: {
     *     // ... the filter for the Values we want to count
     *   }
     * })
    **/
    count<T extends ValueCountArgs>(
      args?: Subset<T, ValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ValueAggregateArgs>(args: Subset<T, ValueAggregateArgs>): Prisma.PrismaPromise<GetValueAggregateType<T>>

    /**
     * Group by Value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueGroupByArgs} args - Group by arguments.
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
      T extends ValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValueGroupByArgs['orderBy'] }
        : { orderBy?: ValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Value model
   */
  readonly fields: ValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Value.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entity<T extends EntityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntityDefaultArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attribute<T extends AttributeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributeDefaultArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Value model
   */
  interface ValueFieldRefs {
    readonly id: FieldRef<"Value", 'Int'>
    readonly ts: FieldRef<"Value", 'DateTime'>
    readonly entityId: FieldRef<"Value", 'Int'>
    readonly attributeId: FieldRef<"Value", 'Int'>
    readonly stringVal: FieldRef<"Value", 'String'>
    readonly numberVal: FieldRef<"Value", 'Float'>
    readonly boolVal: FieldRef<"Value", 'Boolean'>
    readonly dateVal: FieldRef<"Value", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Value findUnique
   */
  export type ValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value findUniqueOrThrow
   */
  export type ValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value findFirst
   */
  export type ValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Values.
     */
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value findFirstOrThrow
   */
  export type ValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Values.
     */
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value findMany
   */
  export type ValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Values to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value create
   */
  export type ValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * The data needed to create a Value.
     */
    data: XOR<ValueCreateInput, ValueUncheckedCreateInput>
  }

  /**
   * Value createMany
   */
  export type ValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Values.
     */
    data: ValueCreateManyInput | ValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Value createManyAndReturn
   */
  export type ValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * The data used to create many Values.
     */
    data: ValueCreateManyInput | ValueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Value update
   */
  export type ValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * The data needed to update a Value.
     */
    data: XOR<ValueUpdateInput, ValueUncheckedUpdateInput>
    /**
     * Choose, which Value to update.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value updateMany
   */
  export type ValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Values.
     */
    data: XOR<ValueUpdateManyMutationInput, ValueUncheckedUpdateManyInput>
    /**
     * Filter which Values to update
     */
    where?: ValueWhereInput
    /**
     * Limit how many Values to update.
     */
    limit?: number
  }

  /**
   * Value updateManyAndReturn
   */
  export type ValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * The data used to update Values.
     */
    data: XOR<ValueUpdateManyMutationInput, ValueUncheckedUpdateManyInput>
    /**
     * Filter which Values to update
     */
    where?: ValueWhereInput
    /**
     * Limit how many Values to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Value upsert
   */
  export type ValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * The filter to search for the Value to update in case it exists.
     */
    where: ValueWhereUniqueInput
    /**
     * In case the Value found by the `where` argument doesn't exist, create a new Value with this data.
     */
    create: XOR<ValueCreateInput, ValueUncheckedCreateInput>
    /**
     * In case the Value was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValueUpdateInput, ValueUncheckedUpdateInput>
  }

  /**
   * Value delete
   */
  export type ValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter which Value to delete.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value deleteMany
   */
  export type ValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Values to delete
     */
    where?: ValueWhereInput
    /**
     * Limit how many Values to delete.
     */
    limit?: number
  }

  /**
   * Value without action
   */
  export type ValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
  }


  /**
   * Model KVSet
   */

  export type AggregateKVSet = {
    _count: KVSetCountAggregateOutputType | null
    _avg: KVSetAvgAggregateOutputType | null
    _sum: KVSetSumAggregateOutputType | null
    _min: KVSetMinAggregateOutputType | null
    _max: KVSetMaxAggregateOutputType | null
  }

  export type KVSetAvgAggregateOutputType = {
    id: number | null
  }

  export type KVSetSumAggregateOutputType = {
    id: number | null
  }

  export type KVSetMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type KVSetMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type KVSetCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type KVSetAvgAggregateInputType = {
    id?: true
  }

  export type KVSetSumAggregateInputType = {
    id?: true
  }

  export type KVSetMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type KVSetMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type KVSetCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type KVSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KVSet to aggregate.
     */
    where?: KVSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KVSets to fetch.
     */
    orderBy?: KVSetOrderByWithRelationInput | KVSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KVSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KVSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KVSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KVSets
    **/
    _count?: true | KVSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KVSetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KVSetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KVSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KVSetMaxAggregateInputType
  }

  export type GetKVSetAggregateType<T extends KVSetAggregateArgs> = {
        [P in keyof T & keyof AggregateKVSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKVSet[P]>
      : GetScalarType<T[P], AggregateKVSet[P]>
  }




  export type KVSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KVSetWhereInput
    orderBy?: KVSetOrderByWithAggregationInput | KVSetOrderByWithAggregationInput[]
    by: KVSetScalarFieldEnum[] | KVSetScalarFieldEnum
    having?: KVSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KVSetCountAggregateInputType | true
    _avg?: KVSetAvgAggregateInputType
    _sum?: KVSetSumAggregateInputType
    _min?: KVSetMinAggregateInputType
    _max?: KVSetMaxAggregateInputType
  }

  export type KVSetGroupByOutputType = {
    id: number
    name: string
    _count: KVSetCountAggregateOutputType | null
    _avg: KVSetAvgAggregateOutputType | null
    _sum: KVSetSumAggregateOutputType | null
    _min: KVSetMinAggregateOutputType | null
    _max: KVSetMaxAggregateOutputType | null
  }

  type GetKVSetGroupByPayload<T extends KVSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KVSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KVSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KVSetGroupByOutputType[P]>
            : GetScalarType<T[P], KVSetGroupByOutputType[P]>
        }
      >
    >


  export type KVSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    values?: boolean | KVSet$valuesArgs<ExtArgs>
    attributes?: boolean | KVSet$attributesArgs<ExtArgs>
    _count?: boolean | KVSetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kVSet"]>

  export type KVSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["kVSet"]>

  export type KVSetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["kVSet"]>

  export type KVSetSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type KVSetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["kVSet"]>
  export type KVSetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    values?: boolean | KVSet$valuesArgs<ExtArgs>
    attributes?: boolean | KVSet$attributesArgs<ExtArgs>
    _count?: boolean | KVSetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KVSetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KVSetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KVSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KVSet"
    objects: {
      values: Prisma.$KVPayload<ExtArgs>[]
      attributes: Prisma.$AttributePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["kVSet"]>
    composites: {}
  }

  type KVSetGetPayload<S extends boolean | null | undefined | KVSetDefaultArgs> = $Result.GetResult<Prisma.$KVSetPayload, S>

  type KVSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KVSetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KVSetCountAggregateInputType | true
    }

  export interface KVSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KVSet'], meta: { name: 'KVSet' } }
    /**
     * Find zero or one KVSet that matches the filter.
     * @param {KVSetFindUniqueArgs} args - Arguments to find a KVSet
     * @example
     * // Get one KVSet
     * const kVSet = await prisma.kVSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KVSetFindUniqueArgs>(args: SelectSubset<T, KVSetFindUniqueArgs<ExtArgs>>): Prisma__KVSetClient<$Result.GetResult<Prisma.$KVSetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KVSet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KVSetFindUniqueOrThrowArgs} args - Arguments to find a KVSet
     * @example
     * // Get one KVSet
     * const kVSet = await prisma.kVSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KVSetFindUniqueOrThrowArgs>(args: SelectSubset<T, KVSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KVSetClient<$Result.GetResult<Prisma.$KVSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KVSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KVSetFindFirstArgs} args - Arguments to find a KVSet
     * @example
     * // Get one KVSet
     * const kVSet = await prisma.kVSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KVSetFindFirstArgs>(args?: SelectSubset<T, KVSetFindFirstArgs<ExtArgs>>): Prisma__KVSetClient<$Result.GetResult<Prisma.$KVSetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KVSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KVSetFindFirstOrThrowArgs} args - Arguments to find a KVSet
     * @example
     * // Get one KVSet
     * const kVSet = await prisma.kVSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KVSetFindFirstOrThrowArgs>(args?: SelectSubset<T, KVSetFindFirstOrThrowArgs<ExtArgs>>): Prisma__KVSetClient<$Result.GetResult<Prisma.$KVSetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KVSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KVSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KVSets
     * const kVSets = await prisma.kVSet.findMany()
     * 
     * // Get first 10 KVSets
     * const kVSets = await prisma.kVSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kVSetWithIdOnly = await prisma.kVSet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KVSetFindManyArgs>(args?: SelectSubset<T, KVSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KVSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KVSet.
     * @param {KVSetCreateArgs} args - Arguments to create a KVSet.
     * @example
     * // Create one KVSet
     * const KVSet = await prisma.kVSet.create({
     *   data: {
     *     // ... data to create a KVSet
     *   }
     * })
     * 
     */
    create<T extends KVSetCreateArgs>(args: SelectSubset<T, KVSetCreateArgs<ExtArgs>>): Prisma__KVSetClient<$Result.GetResult<Prisma.$KVSetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KVSets.
     * @param {KVSetCreateManyArgs} args - Arguments to create many KVSets.
     * @example
     * // Create many KVSets
     * const kVSet = await prisma.kVSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KVSetCreateManyArgs>(args?: SelectSubset<T, KVSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KVSets and returns the data saved in the database.
     * @param {KVSetCreateManyAndReturnArgs} args - Arguments to create many KVSets.
     * @example
     * // Create many KVSets
     * const kVSet = await prisma.kVSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KVSets and only return the `id`
     * const kVSetWithIdOnly = await prisma.kVSet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KVSetCreateManyAndReturnArgs>(args?: SelectSubset<T, KVSetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KVSetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KVSet.
     * @param {KVSetDeleteArgs} args - Arguments to delete one KVSet.
     * @example
     * // Delete one KVSet
     * const KVSet = await prisma.kVSet.delete({
     *   where: {
     *     // ... filter to delete one KVSet
     *   }
     * })
     * 
     */
    delete<T extends KVSetDeleteArgs>(args: SelectSubset<T, KVSetDeleteArgs<ExtArgs>>): Prisma__KVSetClient<$Result.GetResult<Prisma.$KVSetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KVSet.
     * @param {KVSetUpdateArgs} args - Arguments to update one KVSet.
     * @example
     * // Update one KVSet
     * const kVSet = await prisma.kVSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KVSetUpdateArgs>(args: SelectSubset<T, KVSetUpdateArgs<ExtArgs>>): Prisma__KVSetClient<$Result.GetResult<Prisma.$KVSetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KVSets.
     * @param {KVSetDeleteManyArgs} args - Arguments to filter KVSets to delete.
     * @example
     * // Delete a few KVSets
     * const { count } = await prisma.kVSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KVSetDeleteManyArgs>(args?: SelectSubset<T, KVSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KVSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KVSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KVSets
     * const kVSet = await prisma.kVSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KVSetUpdateManyArgs>(args: SelectSubset<T, KVSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KVSets and returns the data updated in the database.
     * @param {KVSetUpdateManyAndReturnArgs} args - Arguments to update many KVSets.
     * @example
     * // Update many KVSets
     * const kVSet = await prisma.kVSet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KVSets and only return the `id`
     * const kVSetWithIdOnly = await prisma.kVSet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KVSetUpdateManyAndReturnArgs>(args: SelectSubset<T, KVSetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KVSetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KVSet.
     * @param {KVSetUpsertArgs} args - Arguments to update or create a KVSet.
     * @example
     * // Update or create a KVSet
     * const kVSet = await prisma.kVSet.upsert({
     *   create: {
     *     // ... data to create a KVSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KVSet we want to update
     *   }
     * })
     */
    upsert<T extends KVSetUpsertArgs>(args: SelectSubset<T, KVSetUpsertArgs<ExtArgs>>): Prisma__KVSetClient<$Result.GetResult<Prisma.$KVSetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KVSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KVSetCountArgs} args - Arguments to filter KVSets to count.
     * @example
     * // Count the number of KVSets
     * const count = await prisma.kVSet.count({
     *   where: {
     *     // ... the filter for the KVSets we want to count
     *   }
     * })
    **/
    count<T extends KVSetCountArgs>(
      args?: Subset<T, KVSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KVSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KVSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KVSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KVSetAggregateArgs>(args: Subset<T, KVSetAggregateArgs>): Prisma.PrismaPromise<GetKVSetAggregateType<T>>

    /**
     * Group by KVSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KVSetGroupByArgs} args - Group by arguments.
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
      T extends KVSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KVSetGroupByArgs['orderBy'] }
        : { orderBy?: KVSetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KVSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKVSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KVSet model
   */
  readonly fields: KVSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KVSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KVSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    values<T extends KVSet$valuesArgs<ExtArgs> = {}>(args?: Subset<T, KVSet$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KVPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attributes<T extends KVSet$attributesArgs<ExtArgs> = {}>(args?: Subset<T, KVSet$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the KVSet model
   */
  interface KVSetFieldRefs {
    readonly id: FieldRef<"KVSet", 'Int'>
    readonly name: FieldRef<"KVSet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * KVSet findUnique
   */
  export type KVSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KVSet
     */
    select?: KVSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KVSet
     */
    omit?: KVSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVSetInclude<ExtArgs> | null
    /**
     * Filter, which KVSet to fetch.
     */
    where: KVSetWhereUniqueInput
  }

  /**
   * KVSet findUniqueOrThrow
   */
  export type KVSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KVSet
     */
    select?: KVSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KVSet
     */
    omit?: KVSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVSetInclude<ExtArgs> | null
    /**
     * Filter, which KVSet to fetch.
     */
    where: KVSetWhereUniqueInput
  }

  /**
   * KVSet findFirst
   */
  export type KVSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KVSet
     */
    select?: KVSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KVSet
     */
    omit?: KVSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVSetInclude<ExtArgs> | null
    /**
     * Filter, which KVSet to fetch.
     */
    where?: KVSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KVSets to fetch.
     */
    orderBy?: KVSetOrderByWithRelationInput | KVSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KVSets.
     */
    cursor?: KVSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KVSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KVSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KVSets.
     */
    distinct?: KVSetScalarFieldEnum | KVSetScalarFieldEnum[]
  }

  /**
   * KVSet findFirstOrThrow
   */
  export type KVSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KVSet
     */
    select?: KVSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KVSet
     */
    omit?: KVSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVSetInclude<ExtArgs> | null
    /**
     * Filter, which KVSet to fetch.
     */
    where?: KVSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KVSets to fetch.
     */
    orderBy?: KVSetOrderByWithRelationInput | KVSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KVSets.
     */
    cursor?: KVSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KVSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KVSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KVSets.
     */
    distinct?: KVSetScalarFieldEnum | KVSetScalarFieldEnum[]
  }

  /**
   * KVSet findMany
   */
  export type KVSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KVSet
     */
    select?: KVSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KVSet
     */
    omit?: KVSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVSetInclude<ExtArgs> | null
    /**
     * Filter, which KVSets to fetch.
     */
    where?: KVSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KVSets to fetch.
     */
    orderBy?: KVSetOrderByWithRelationInput | KVSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KVSets.
     */
    cursor?: KVSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KVSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KVSets.
     */
    skip?: number
    distinct?: KVSetScalarFieldEnum | KVSetScalarFieldEnum[]
  }

  /**
   * KVSet create
   */
  export type KVSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KVSet
     */
    select?: KVSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KVSet
     */
    omit?: KVSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVSetInclude<ExtArgs> | null
    /**
     * The data needed to create a KVSet.
     */
    data: XOR<KVSetCreateInput, KVSetUncheckedCreateInput>
  }

  /**
   * KVSet createMany
   */
  export type KVSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KVSets.
     */
    data: KVSetCreateManyInput | KVSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KVSet createManyAndReturn
   */
  export type KVSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KVSet
     */
    select?: KVSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KVSet
     */
    omit?: KVSetOmit<ExtArgs> | null
    /**
     * The data used to create many KVSets.
     */
    data: KVSetCreateManyInput | KVSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KVSet update
   */
  export type KVSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KVSet
     */
    select?: KVSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KVSet
     */
    omit?: KVSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVSetInclude<ExtArgs> | null
    /**
     * The data needed to update a KVSet.
     */
    data: XOR<KVSetUpdateInput, KVSetUncheckedUpdateInput>
    /**
     * Choose, which KVSet to update.
     */
    where: KVSetWhereUniqueInput
  }

  /**
   * KVSet updateMany
   */
  export type KVSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KVSets.
     */
    data: XOR<KVSetUpdateManyMutationInput, KVSetUncheckedUpdateManyInput>
    /**
     * Filter which KVSets to update
     */
    where?: KVSetWhereInput
    /**
     * Limit how many KVSets to update.
     */
    limit?: number
  }

  /**
   * KVSet updateManyAndReturn
   */
  export type KVSetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KVSet
     */
    select?: KVSetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KVSet
     */
    omit?: KVSetOmit<ExtArgs> | null
    /**
     * The data used to update KVSets.
     */
    data: XOR<KVSetUpdateManyMutationInput, KVSetUncheckedUpdateManyInput>
    /**
     * Filter which KVSets to update
     */
    where?: KVSetWhereInput
    /**
     * Limit how many KVSets to update.
     */
    limit?: number
  }

  /**
   * KVSet upsert
   */
  export type KVSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KVSet
     */
    select?: KVSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KVSet
     */
    omit?: KVSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVSetInclude<ExtArgs> | null
    /**
     * The filter to search for the KVSet to update in case it exists.
     */
    where: KVSetWhereUniqueInput
    /**
     * In case the KVSet found by the `where` argument doesn't exist, create a new KVSet with this data.
     */
    create: XOR<KVSetCreateInput, KVSetUncheckedCreateInput>
    /**
     * In case the KVSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KVSetUpdateInput, KVSetUncheckedUpdateInput>
  }

  /**
   * KVSet delete
   */
  export type KVSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KVSet
     */
    select?: KVSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KVSet
     */
    omit?: KVSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVSetInclude<ExtArgs> | null
    /**
     * Filter which KVSet to delete.
     */
    where: KVSetWhereUniqueInput
  }

  /**
   * KVSet deleteMany
   */
  export type KVSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KVSets to delete
     */
    where?: KVSetWhereInput
    /**
     * Limit how many KVSets to delete.
     */
    limit?: number
  }

  /**
   * KVSet.values
   */
  export type KVSet$valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KV
     */
    select?: KVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KV
     */
    omit?: KVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVInclude<ExtArgs> | null
    where?: KVWhereInput
    orderBy?: KVOrderByWithRelationInput | KVOrderByWithRelationInput[]
    cursor?: KVWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KVScalarFieldEnum | KVScalarFieldEnum[]
  }

  /**
   * KVSet.attributes
   */
  export type KVSet$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    cursor?: AttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * KVSet without action
   */
  export type KVSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KVSet
     */
    select?: KVSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KVSet
     */
    omit?: KVSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVSetInclude<ExtArgs> | null
  }


  /**
   * Model KV
   */

  export type AggregateKV = {
    _count: KVCountAggregateOutputType | null
    _avg: KVAvgAggregateOutputType | null
    _sum: KVSumAggregateOutputType | null
    _min: KVMinAggregateOutputType | null
    _max: KVMaxAggregateOutputType | null
  }

  export type KVAvgAggregateOutputType = {
    id: number | null
    setId: number | null
    key: number | null
  }

  export type KVSumAggregateOutputType = {
    id: number | null
    setId: number | null
    key: number | null
  }

  export type KVMinAggregateOutputType = {
    id: number | null
    setId: number | null
    key: number | null
    value: string | null
  }

  export type KVMaxAggregateOutputType = {
    id: number | null
    setId: number | null
    key: number | null
    value: string | null
  }

  export type KVCountAggregateOutputType = {
    id: number
    setId: number
    key: number
    value: number
    _all: number
  }


  export type KVAvgAggregateInputType = {
    id?: true
    setId?: true
    key?: true
  }

  export type KVSumAggregateInputType = {
    id?: true
    setId?: true
    key?: true
  }

  export type KVMinAggregateInputType = {
    id?: true
    setId?: true
    key?: true
    value?: true
  }

  export type KVMaxAggregateInputType = {
    id?: true
    setId?: true
    key?: true
    value?: true
  }

  export type KVCountAggregateInputType = {
    id?: true
    setId?: true
    key?: true
    value?: true
    _all?: true
  }

  export type KVAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KV to aggregate.
     */
    where?: KVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KVS to fetch.
     */
    orderBy?: KVOrderByWithRelationInput | KVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KVS
    **/
    _count?: true | KVCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KVAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KVSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KVMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KVMaxAggregateInputType
  }

  export type GetKVAggregateType<T extends KVAggregateArgs> = {
        [P in keyof T & keyof AggregateKV]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKV[P]>
      : GetScalarType<T[P], AggregateKV[P]>
  }




  export type KVGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KVWhereInput
    orderBy?: KVOrderByWithAggregationInput | KVOrderByWithAggregationInput[]
    by: KVScalarFieldEnum[] | KVScalarFieldEnum
    having?: KVScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KVCountAggregateInputType | true
    _avg?: KVAvgAggregateInputType
    _sum?: KVSumAggregateInputType
    _min?: KVMinAggregateInputType
    _max?: KVMaxAggregateInputType
  }

  export type KVGroupByOutputType = {
    id: number
    setId: number
    key: number
    value: string
    _count: KVCountAggregateOutputType | null
    _avg: KVAvgAggregateOutputType | null
    _sum: KVSumAggregateOutputType | null
    _min: KVMinAggregateOutputType | null
    _max: KVMaxAggregateOutputType | null
  }

  type GetKVGroupByPayload<T extends KVGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KVGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KVGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KVGroupByOutputType[P]>
            : GetScalarType<T[P], KVGroupByOutputType[P]>
        }
      >
    >


  export type KVSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setId?: boolean
    key?: boolean
    value?: boolean
    set?: boolean | KVSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kV"]>

  export type KVSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setId?: boolean
    key?: boolean
    value?: boolean
    set?: boolean | KVSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kV"]>

  export type KVSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setId?: boolean
    key?: boolean
    value?: boolean
    set?: boolean | KVSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kV"]>

  export type KVSelectScalar = {
    id?: boolean
    setId?: boolean
    key?: boolean
    value?: boolean
  }

  export type KVOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "setId" | "key" | "value", ExtArgs["result"]["kV"]>
  export type KVInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | KVSetDefaultArgs<ExtArgs>
  }
  export type KVIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | KVSetDefaultArgs<ExtArgs>
  }
  export type KVIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | KVSetDefaultArgs<ExtArgs>
  }

  export type $KVPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KV"
    objects: {
      set: Prisma.$KVSetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      setId: number
      key: number
      value: string
    }, ExtArgs["result"]["kV"]>
    composites: {}
  }

  type KVGetPayload<S extends boolean | null | undefined | KVDefaultArgs> = $Result.GetResult<Prisma.$KVPayload, S>

  type KVCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KVFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KVCountAggregateInputType | true
    }

  export interface KVDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KV'], meta: { name: 'KV' } }
    /**
     * Find zero or one KV that matches the filter.
     * @param {KVFindUniqueArgs} args - Arguments to find a KV
     * @example
     * // Get one KV
     * const kV = await prisma.kV.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KVFindUniqueArgs>(args: SelectSubset<T, KVFindUniqueArgs<ExtArgs>>): Prisma__KVClient<$Result.GetResult<Prisma.$KVPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KV that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KVFindUniqueOrThrowArgs} args - Arguments to find a KV
     * @example
     * // Get one KV
     * const kV = await prisma.kV.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KVFindUniqueOrThrowArgs>(args: SelectSubset<T, KVFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KVClient<$Result.GetResult<Prisma.$KVPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KV that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KVFindFirstArgs} args - Arguments to find a KV
     * @example
     * // Get one KV
     * const kV = await prisma.kV.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KVFindFirstArgs>(args?: SelectSubset<T, KVFindFirstArgs<ExtArgs>>): Prisma__KVClient<$Result.GetResult<Prisma.$KVPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KV that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KVFindFirstOrThrowArgs} args - Arguments to find a KV
     * @example
     * // Get one KV
     * const kV = await prisma.kV.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KVFindFirstOrThrowArgs>(args?: SelectSubset<T, KVFindFirstOrThrowArgs<ExtArgs>>): Prisma__KVClient<$Result.GetResult<Prisma.$KVPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KVS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KVFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KVS
     * const kVS = await prisma.kV.findMany()
     * 
     * // Get first 10 KVS
     * const kVS = await prisma.kV.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kVWithIdOnly = await prisma.kV.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KVFindManyArgs>(args?: SelectSubset<T, KVFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KVPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KV.
     * @param {KVCreateArgs} args - Arguments to create a KV.
     * @example
     * // Create one KV
     * const KV = await prisma.kV.create({
     *   data: {
     *     // ... data to create a KV
     *   }
     * })
     * 
     */
    create<T extends KVCreateArgs>(args: SelectSubset<T, KVCreateArgs<ExtArgs>>): Prisma__KVClient<$Result.GetResult<Prisma.$KVPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KVS.
     * @param {KVCreateManyArgs} args - Arguments to create many KVS.
     * @example
     * // Create many KVS
     * const kV = await prisma.kV.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KVCreateManyArgs>(args?: SelectSubset<T, KVCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KVS and returns the data saved in the database.
     * @param {KVCreateManyAndReturnArgs} args - Arguments to create many KVS.
     * @example
     * // Create many KVS
     * const kV = await prisma.kV.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KVS and only return the `id`
     * const kVWithIdOnly = await prisma.kV.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KVCreateManyAndReturnArgs>(args?: SelectSubset<T, KVCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KVPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KV.
     * @param {KVDeleteArgs} args - Arguments to delete one KV.
     * @example
     * // Delete one KV
     * const KV = await prisma.kV.delete({
     *   where: {
     *     // ... filter to delete one KV
     *   }
     * })
     * 
     */
    delete<T extends KVDeleteArgs>(args: SelectSubset<T, KVDeleteArgs<ExtArgs>>): Prisma__KVClient<$Result.GetResult<Prisma.$KVPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KV.
     * @param {KVUpdateArgs} args - Arguments to update one KV.
     * @example
     * // Update one KV
     * const kV = await prisma.kV.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KVUpdateArgs>(args: SelectSubset<T, KVUpdateArgs<ExtArgs>>): Prisma__KVClient<$Result.GetResult<Prisma.$KVPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KVS.
     * @param {KVDeleteManyArgs} args - Arguments to filter KVS to delete.
     * @example
     * // Delete a few KVS
     * const { count } = await prisma.kV.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KVDeleteManyArgs>(args?: SelectSubset<T, KVDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KVUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KVS
     * const kV = await prisma.kV.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KVUpdateManyArgs>(args: SelectSubset<T, KVUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KVS and returns the data updated in the database.
     * @param {KVUpdateManyAndReturnArgs} args - Arguments to update many KVS.
     * @example
     * // Update many KVS
     * const kV = await prisma.kV.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KVS and only return the `id`
     * const kVWithIdOnly = await prisma.kV.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KVUpdateManyAndReturnArgs>(args: SelectSubset<T, KVUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KVPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KV.
     * @param {KVUpsertArgs} args - Arguments to update or create a KV.
     * @example
     * // Update or create a KV
     * const kV = await prisma.kV.upsert({
     *   create: {
     *     // ... data to create a KV
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KV we want to update
     *   }
     * })
     */
    upsert<T extends KVUpsertArgs>(args: SelectSubset<T, KVUpsertArgs<ExtArgs>>): Prisma__KVClient<$Result.GetResult<Prisma.$KVPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KVCountArgs} args - Arguments to filter KVS to count.
     * @example
     * // Count the number of KVS
     * const count = await prisma.kV.count({
     *   where: {
     *     // ... the filter for the KVS we want to count
     *   }
     * })
    **/
    count<T extends KVCountArgs>(
      args?: Subset<T, KVCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KVCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KVAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KVAggregateArgs>(args: Subset<T, KVAggregateArgs>): Prisma.PrismaPromise<GetKVAggregateType<T>>

    /**
     * Group by KV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KVGroupByArgs} args - Group by arguments.
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
      T extends KVGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KVGroupByArgs['orderBy'] }
        : { orderBy?: KVGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KVGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKVGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KV model
   */
  readonly fields: KVFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KV.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KVClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    set<T extends KVSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KVSetDefaultArgs<ExtArgs>>): Prisma__KVSetClient<$Result.GetResult<Prisma.$KVSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the KV model
   */
  interface KVFieldRefs {
    readonly id: FieldRef<"KV", 'Int'>
    readonly setId: FieldRef<"KV", 'Int'>
    readonly key: FieldRef<"KV", 'Int'>
    readonly value: FieldRef<"KV", 'String'>
  }
    

  // Custom InputTypes
  /**
   * KV findUnique
   */
  export type KVFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KV
     */
    select?: KVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KV
     */
    omit?: KVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVInclude<ExtArgs> | null
    /**
     * Filter, which KV to fetch.
     */
    where: KVWhereUniqueInput
  }

  /**
   * KV findUniqueOrThrow
   */
  export type KVFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KV
     */
    select?: KVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KV
     */
    omit?: KVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVInclude<ExtArgs> | null
    /**
     * Filter, which KV to fetch.
     */
    where: KVWhereUniqueInput
  }

  /**
   * KV findFirst
   */
  export type KVFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KV
     */
    select?: KVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KV
     */
    omit?: KVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVInclude<ExtArgs> | null
    /**
     * Filter, which KV to fetch.
     */
    where?: KVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KVS to fetch.
     */
    orderBy?: KVOrderByWithRelationInput | KVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KVS.
     */
    cursor?: KVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KVS.
     */
    distinct?: KVScalarFieldEnum | KVScalarFieldEnum[]
  }

  /**
   * KV findFirstOrThrow
   */
  export type KVFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KV
     */
    select?: KVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KV
     */
    omit?: KVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVInclude<ExtArgs> | null
    /**
     * Filter, which KV to fetch.
     */
    where?: KVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KVS to fetch.
     */
    orderBy?: KVOrderByWithRelationInput | KVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KVS.
     */
    cursor?: KVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KVS.
     */
    distinct?: KVScalarFieldEnum | KVScalarFieldEnum[]
  }

  /**
   * KV findMany
   */
  export type KVFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KV
     */
    select?: KVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KV
     */
    omit?: KVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVInclude<ExtArgs> | null
    /**
     * Filter, which KVS to fetch.
     */
    where?: KVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KVS to fetch.
     */
    orderBy?: KVOrderByWithRelationInput | KVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KVS.
     */
    cursor?: KVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KVS.
     */
    skip?: number
    distinct?: KVScalarFieldEnum | KVScalarFieldEnum[]
  }

  /**
   * KV create
   */
  export type KVCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KV
     */
    select?: KVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KV
     */
    omit?: KVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVInclude<ExtArgs> | null
    /**
     * The data needed to create a KV.
     */
    data: XOR<KVCreateInput, KVUncheckedCreateInput>
  }

  /**
   * KV createMany
   */
  export type KVCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KVS.
     */
    data: KVCreateManyInput | KVCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KV createManyAndReturn
   */
  export type KVCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KV
     */
    select?: KVSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KV
     */
    omit?: KVOmit<ExtArgs> | null
    /**
     * The data used to create many KVS.
     */
    data: KVCreateManyInput | KVCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KV update
   */
  export type KVUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KV
     */
    select?: KVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KV
     */
    omit?: KVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVInclude<ExtArgs> | null
    /**
     * The data needed to update a KV.
     */
    data: XOR<KVUpdateInput, KVUncheckedUpdateInput>
    /**
     * Choose, which KV to update.
     */
    where: KVWhereUniqueInput
  }

  /**
   * KV updateMany
   */
  export type KVUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KVS.
     */
    data: XOR<KVUpdateManyMutationInput, KVUncheckedUpdateManyInput>
    /**
     * Filter which KVS to update
     */
    where?: KVWhereInput
    /**
     * Limit how many KVS to update.
     */
    limit?: number
  }

  /**
   * KV updateManyAndReturn
   */
  export type KVUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KV
     */
    select?: KVSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KV
     */
    omit?: KVOmit<ExtArgs> | null
    /**
     * The data used to update KVS.
     */
    data: XOR<KVUpdateManyMutationInput, KVUncheckedUpdateManyInput>
    /**
     * Filter which KVS to update
     */
    where?: KVWhereInput
    /**
     * Limit how many KVS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KV upsert
   */
  export type KVUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KV
     */
    select?: KVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KV
     */
    omit?: KVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVInclude<ExtArgs> | null
    /**
     * The filter to search for the KV to update in case it exists.
     */
    where: KVWhereUniqueInput
    /**
     * In case the KV found by the `where` argument doesn't exist, create a new KV with this data.
     */
    create: XOR<KVCreateInput, KVUncheckedCreateInput>
    /**
     * In case the KV was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KVUpdateInput, KVUncheckedUpdateInput>
  }

  /**
   * KV delete
   */
  export type KVDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KV
     */
    select?: KVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KV
     */
    omit?: KVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVInclude<ExtArgs> | null
    /**
     * Filter which KV to delete.
     */
    where: KVWhereUniqueInput
  }

  /**
   * KV deleteMany
   */
  export type KVDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KVS to delete
     */
    where?: KVWhereInput
    /**
     * Limit how many KVS to delete.
     */
    limit?: number
  }

  /**
   * KV without action
   */
  export type KVDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KV
     */
    select?: KVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KV
     */
    omit?: KVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KVInclude<ExtArgs> | null
  }


  /**
   * Model Range
   */

  export type AggregateRange = {
    _count: RangeCountAggregateOutputType | null
    _avg: RangeAvgAggregateOutputType | null
    _sum: RangeSumAggregateOutputType | null
    _min: RangeMinAggregateOutputType | null
    _max: RangeMaxAggregateOutputType | null
  }

  export type RangeAvgAggregateOutputType = {
    id: number | null
    min: number | null
    max: number | null
  }

  export type RangeSumAggregateOutputType = {
    id: number | null
    min: number | null
    max: number | null
  }

  export type RangeMinAggregateOutputType = {
    id: number | null
    min: number | null
    max: number | null
  }

  export type RangeMaxAggregateOutputType = {
    id: number | null
    min: number | null
    max: number | null
  }

  export type RangeCountAggregateOutputType = {
    id: number
    min: number
    max: number
    _all: number
  }


  export type RangeAvgAggregateInputType = {
    id?: true
    min?: true
    max?: true
  }

  export type RangeSumAggregateInputType = {
    id?: true
    min?: true
    max?: true
  }

  export type RangeMinAggregateInputType = {
    id?: true
    min?: true
    max?: true
  }

  export type RangeMaxAggregateInputType = {
    id?: true
    min?: true
    max?: true
  }

  export type RangeCountAggregateInputType = {
    id?: true
    min?: true
    max?: true
    _all?: true
  }

  export type RangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Range to aggregate.
     */
    where?: RangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ranges to fetch.
     */
    orderBy?: RangeOrderByWithRelationInput | RangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ranges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ranges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ranges
    **/
    _count?: true | RangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RangeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RangeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RangeMaxAggregateInputType
  }

  export type GetRangeAggregateType<T extends RangeAggregateArgs> = {
        [P in keyof T & keyof AggregateRange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRange[P]>
      : GetScalarType<T[P], AggregateRange[P]>
  }




  export type RangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RangeWhereInput
    orderBy?: RangeOrderByWithAggregationInput | RangeOrderByWithAggregationInput[]
    by: RangeScalarFieldEnum[] | RangeScalarFieldEnum
    having?: RangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RangeCountAggregateInputType | true
    _avg?: RangeAvgAggregateInputType
    _sum?: RangeSumAggregateInputType
    _min?: RangeMinAggregateInputType
    _max?: RangeMaxAggregateInputType
  }

  export type RangeGroupByOutputType = {
    id: number
    min: number | null
    max: number | null
    _count: RangeCountAggregateOutputType | null
    _avg: RangeAvgAggregateOutputType | null
    _sum: RangeSumAggregateOutputType | null
    _min: RangeMinAggregateOutputType | null
    _max: RangeMaxAggregateOutputType | null
  }

  type GetRangeGroupByPayload<T extends RangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RangeGroupByOutputType[P]>
            : GetScalarType<T[P], RangeGroupByOutputType[P]>
        }
      >
    >


  export type RangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min?: boolean
    max?: boolean
    attributes?: boolean | Range$attributesArgs<ExtArgs>
    _count?: boolean | RangeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["range"]>

  export type RangeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min?: boolean
    max?: boolean
  }, ExtArgs["result"]["range"]>

  export type RangeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min?: boolean
    max?: boolean
  }, ExtArgs["result"]["range"]>

  export type RangeSelectScalar = {
    id?: boolean
    min?: boolean
    max?: boolean
  }

  export type RangeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "min" | "max", ExtArgs["result"]["range"]>
  export type RangeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | Range$attributesArgs<ExtArgs>
    _count?: boolean | RangeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RangeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RangeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Range"
    objects: {
      attributes: Prisma.$AttributePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      min: number | null
      max: number | null
    }, ExtArgs["result"]["range"]>
    composites: {}
  }

  type RangeGetPayload<S extends boolean | null | undefined | RangeDefaultArgs> = $Result.GetResult<Prisma.$RangePayload, S>

  type RangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RangeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RangeCountAggregateInputType | true
    }

  export interface RangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Range'], meta: { name: 'Range' } }
    /**
     * Find zero or one Range that matches the filter.
     * @param {RangeFindUniqueArgs} args - Arguments to find a Range
     * @example
     * // Get one Range
     * const range = await prisma.range.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RangeFindUniqueArgs>(args: SelectSubset<T, RangeFindUniqueArgs<ExtArgs>>): Prisma__RangeClient<$Result.GetResult<Prisma.$RangePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Range that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RangeFindUniqueOrThrowArgs} args - Arguments to find a Range
     * @example
     * // Get one Range
     * const range = await prisma.range.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RangeFindUniqueOrThrowArgs>(args: SelectSubset<T, RangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RangeClient<$Result.GetResult<Prisma.$RangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Range that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RangeFindFirstArgs} args - Arguments to find a Range
     * @example
     * // Get one Range
     * const range = await prisma.range.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RangeFindFirstArgs>(args?: SelectSubset<T, RangeFindFirstArgs<ExtArgs>>): Prisma__RangeClient<$Result.GetResult<Prisma.$RangePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Range that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RangeFindFirstOrThrowArgs} args - Arguments to find a Range
     * @example
     * // Get one Range
     * const range = await prisma.range.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RangeFindFirstOrThrowArgs>(args?: SelectSubset<T, RangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RangeClient<$Result.GetResult<Prisma.$RangePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ranges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ranges
     * const ranges = await prisma.range.findMany()
     * 
     * // Get first 10 Ranges
     * const ranges = await prisma.range.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rangeWithIdOnly = await prisma.range.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RangeFindManyArgs>(args?: SelectSubset<T, RangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Range.
     * @param {RangeCreateArgs} args - Arguments to create a Range.
     * @example
     * // Create one Range
     * const Range = await prisma.range.create({
     *   data: {
     *     // ... data to create a Range
     *   }
     * })
     * 
     */
    create<T extends RangeCreateArgs>(args: SelectSubset<T, RangeCreateArgs<ExtArgs>>): Prisma__RangeClient<$Result.GetResult<Prisma.$RangePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ranges.
     * @param {RangeCreateManyArgs} args - Arguments to create many Ranges.
     * @example
     * // Create many Ranges
     * const range = await prisma.range.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RangeCreateManyArgs>(args?: SelectSubset<T, RangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ranges and returns the data saved in the database.
     * @param {RangeCreateManyAndReturnArgs} args - Arguments to create many Ranges.
     * @example
     * // Create many Ranges
     * const range = await prisma.range.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ranges and only return the `id`
     * const rangeWithIdOnly = await prisma.range.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RangeCreateManyAndReturnArgs>(args?: SelectSubset<T, RangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RangePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Range.
     * @param {RangeDeleteArgs} args - Arguments to delete one Range.
     * @example
     * // Delete one Range
     * const Range = await prisma.range.delete({
     *   where: {
     *     // ... filter to delete one Range
     *   }
     * })
     * 
     */
    delete<T extends RangeDeleteArgs>(args: SelectSubset<T, RangeDeleteArgs<ExtArgs>>): Prisma__RangeClient<$Result.GetResult<Prisma.$RangePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Range.
     * @param {RangeUpdateArgs} args - Arguments to update one Range.
     * @example
     * // Update one Range
     * const range = await prisma.range.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RangeUpdateArgs>(args: SelectSubset<T, RangeUpdateArgs<ExtArgs>>): Prisma__RangeClient<$Result.GetResult<Prisma.$RangePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ranges.
     * @param {RangeDeleteManyArgs} args - Arguments to filter Ranges to delete.
     * @example
     * // Delete a few Ranges
     * const { count } = await prisma.range.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RangeDeleteManyArgs>(args?: SelectSubset<T, RangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ranges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ranges
     * const range = await prisma.range.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RangeUpdateManyArgs>(args: SelectSubset<T, RangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ranges and returns the data updated in the database.
     * @param {RangeUpdateManyAndReturnArgs} args - Arguments to update many Ranges.
     * @example
     * // Update many Ranges
     * const range = await prisma.range.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ranges and only return the `id`
     * const rangeWithIdOnly = await prisma.range.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RangeUpdateManyAndReturnArgs>(args: SelectSubset<T, RangeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RangePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Range.
     * @param {RangeUpsertArgs} args - Arguments to update or create a Range.
     * @example
     * // Update or create a Range
     * const range = await prisma.range.upsert({
     *   create: {
     *     // ... data to create a Range
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Range we want to update
     *   }
     * })
     */
    upsert<T extends RangeUpsertArgs>(args: SelectSubset<T, RangeUpsertArgs<ExtArgs>>): Prisma__RangeClient<$Result.GetResult<Prisma.$RangePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ranges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RangeCountArgs} args - Arguments to filter Ranges to count.
     * @example
     * // Count the number of Ranges
     * const count = await prisma.range.count({
     *   where: {
     *     // ... the filter for the Ranges we want to count
     *   }
     * })
    **/
    count<T extends RangeCountArgs>(
      args?: Subset<T, RangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Range.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RangeAggregateArgs>(args: Subset<T, RangeAggregateArgs>): Prisma.PrismaPromise<GetRangeAggregateType<T>>

    /**
     * Group by Range.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RangeGroupByArgs} args - Group by arguments.
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
      T extends RangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RangeGroupByArgs['orderBy'] }
        : { orderBy?: RangeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Range model
   */
  readonly fields: RangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Range.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attributes<T extends Range$attributesArgs<ExtArgs> = {}>(args?: Subset<T, Range$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Range model
   */
  interface RangeFieldRefs {
    readonly id: FieldRef<"Range", 'Int'>
    readonly min: FieldRef<"Range", 'Float'>
    readonly max: FieldRef<"Range", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Range findUnique
   */
  export type RangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Range
     */
    select?: RangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Range
     */
    omit?: RangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RangeInclude<ExtArgs> | null
    /**
     * Filter, which Range to fetch.
     */
    where: RangeWhereUniqueInput
  }

  /**
   * Range findUniqueOrThrow
   */
  export type RangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Range
     */
    select?: RangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Range
     */
    omit?: RangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RangeInclude<ExtArgs> | null
    /**
     * Filter, which Range to fetch.
     */
    where: RangeWhereUniqueInput
  }

  /**
   * Range findFirst
   */
  export type RangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Range
     */
    select?: RangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Range
     */
    omit?: RangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RangeInclude<ExtArgs> | null
    /**
     * Filter, which Range to fetch.
     */
    where?: RangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ranges to fetch.
     */
    orderBy?: RangeOrderByWithRelationInput | RangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ranges.
     */
    cursor?: RangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ranges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ranges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ranges.
     */
    distinct?: RangeScalarFieldEnum | RangeScalarFieldEnum[]
  }

  /**
   * Range findFirstOrThrow
   */
  export type RangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Range
     */
    select?: RangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Range
     */
    omit?: RangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RangeInclude<ExtArgs> | null
    /**
     * Filter, which Range to fetch.
     */
    where?: RangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ranges to fetch.
     */
    orderBy?: RangeOrderByWithRelationInput | RangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ranges.
     */
    cursor?: RangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ranges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ranges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ranges.
     */
    distinct?: RangeScalarFieldEnum | RangeScalarFieldEnum[]
  }

  /**
   * Range findMany
   */
  export type RangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Range
     */
    select?: RangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Range
     */
    omit?: RangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RangeInclude<ExtArgs> | null
    /**
     * Filter, which Ranges to fetch.
     */
    where?: RangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ranges to fetch.
     */
    orderBy?: RangeOrderByWithRelationInput | RangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ranges.
     */
    cursor?: RangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ranges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ranges.
     */
    skip?: number
    distinct?: RangeScalarFieldEnum | RangeScalarFieldEnum[]
  }

  /**
   * Range create
   */
  export type RangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Range
     */
    select?: RangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Range
     */
    omit?: RangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RangeInclude<ExtArgs> | null
    /**
     * The data needed to create a Range.
     */
    data?: XOR<RangeCreateInput, RangeUncheckedCreateInput>
  }

  /**
   * Range createMany
   */
  export type RangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ranges.
     */
    data: RangeCreateManyInput | RangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Range createManyAndReturn
   */
  export type RangeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Range
     */
    select?: RangeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Range
     */
    omit?: RangeOmit<ExtArgs> | null
    /**
     * The data used to create many Ranges.
     */
    data: RangeCreateManyInput | RangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Range update
   */
  export type RangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Range
     */
    select?: RangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Range
     */
    omit?: RangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RangeInclude<ExtArgs> | null
    /**
     * The data needed to update a Range.
     */
    data: XOR<RangeUpdateInput, RangeUncheckedUpdateInput>
    /**
     * Choose, which Range to update.
     */
    where: RangeWhereUniqueInput
  }

  /**
   * Range updateMany
   */
  export type RangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ranges.
     */
    data: XOR<RangeUpdateManyMutationInput, RangeUncheckedUpdateManyInput>
    /**
     * Filter which Ranges to update
     */
    where?: RangeWhereInput
    /**
     * Limit how many Ranges to update.
     */
    limit?: number
  }

  /**
   * Range updateManyAndReturn
   */
  export type RangeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Range
     */
    select?: RangeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Range
     */
    omit?: RangeOmit<ExtArgs> | null
    /**
     * The data used to update Ranges.
     */
    data: XOR<RangeUpdateManyMutationInput, RangeUncheckedUpdateManyInput>
    /**
     * Filter which Ranges to update
     */
    where?: RangeWhereInput
    /**
     * Limit how many Ranges to update.
     */
    limit?: number
  }

  /**
   * Range upsert
   */
  export type RangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Range
     */
    select?: RangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Range
     */
    omit?: RangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RangeInclude<ExtArgs> | null
    /**
     * The filter to search for the Range to update in case it exists.
     */
    where: RangeWhereUniqueInput
    /**
     * In case the Range found by the `where` argument doesn't exist, create a new Range with this data.
     */
    create: XOR<RangeCreateInput, RangeUncheckedCreateInput>
    /**
     * In case the Range was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RangeUpdateInput, RangeUncheckedUpdateInput>
  }

  /**
   * Range delete
   */
  export type RangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Range
     */
    select?: RangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Range
     */
    omit?: RangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RangeInclude<ExtArgs> | null
    /**
     * Filter which Range to delete.
     */
    where: RangeWhereUniqueInput
  }

  /**
   * Range deleteMany
   */
  export type RangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ranges to delete
     */
    where?: RangeWhereInput
    /**
     * Limit how many Ranges to delete.
     */
    limit?: number
  }

  /**
   * Range.attributes
   */
  export type Range$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    cursor?: AttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Range without action
   */
  export type RangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Range
     */
    select?: RangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Range
     */
    omit?: RangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RangeInclude<ExtArgs> | null
  }


  /**
   * Model AttrType
   */

  export type AggregateAttrType = {
    _count: AttrTypeCountAggregateOutputType | null
    _avg: AttrTypeAvgAggregateOutputType | null
    _sum: AttrTypeSumAggregateOutputType | null
    _min: AttrTypeMinAggregateOutputType | null
    _max: AttrTypeMaxAggregateOutputType | null
  }

  export type AttrTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type AttrTypeSumAggregateOutputType = {
    id: number | null
  }

  export type AttrTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AttrTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AttrTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AttrTypeAvgAggregateInputType = {
    id?: true
  }

  export type AttrTypeSumAggregateInputType = {
    id?: true
  }

  export type AttrTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AttrTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AttrTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AttrTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttrType to aggregate.
     */
    where?: AttrTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttrTypes to fetch.
     */
    orderBy?: AttrTypeOrderByWithRelationInput | AttrTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttrTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttrTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttrTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttrTypes
    **/
    _count?: true | AttrTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttrTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttrTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttrTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttrTypeMaxAggregateInputType
  }

  export type GetAttrTypeAggregateType<T extends AttrTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttrType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttrType[P]>
      : GetScalarType<T[P], AggregateAttrType[P]>
  }




  export type AttrTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttrTypeWhereInput
    orderBy?: AttrTypeOrderByWithAggregationInput | AttrTypeOrderByWithAggregationInput[]
    by: AttrTypeScalarFieldEnum[] | AttrTypeScalarFieldEnum
    having?: AttrTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttrTypeCountAggregateInputType | true
    _avg?: AttrTypeAvgAggregateInputType
    _sum?: AttrTypeSumAggregateInputType
    _min?: AttrTypeMinAggregateInputType
    _max?: AttrTypeMaxAggregateInputType
  }

  export type AttrTypeGroupByOutputType = {
    id: number
    name: string
    _count: AttrTypeCountAggregateOutputType | null
    _avg: AttrTypeAvgAggregateOutputType | null
    _sum: AttrTypeSumAggregateOutputType | null
    _min: AttrTypeMinAggregateOutputType | null
    _max: AttrTypeMaxAggregateOutputType | null
  }

  type GetAttrTypeGroupByPayload<T extends AttrTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttrTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttrTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttrTypeGroupByOutputType[P]>
            : GetScalarType<T[P], AttrTypeGroupByOutputType[P]>
        }
      >
    >


  export type AttrTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    attributes?: boolean | AttrType$attributesArgs<ExtArgs>
    _count?: boolean | AttrTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attrType"]>

  export type AttrTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["attrType"]>

  export type AttrTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["attrType"]>

  export type AttrTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AttrTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["attrType"]>
  export type AttrTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | AttrType$attributesArgs<ExtArgs>
    _count?: boolean | AttrTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttrTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AttrTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttrTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttrType"
    objects: {
      attributes: Prisma.$AttributePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["attrType"]>
    composites: {}
  }

  type AttrTypeGetPayload<S extends boolean | null | undefined | AttrTypeDefaultArgs> = $Result.GetResult<Prisma.$AttrTypePayload, S>

  type AttrTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttrTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttrTypeCountAggregateInputType | true
    }

  export interface AttrTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttrType'], meta: { name: 'AttrType' } }
    /**
     * Find zero or one AttrType that matches the filter.
     * @param {AttrTypeFindUniqueArgs} args - Arguments to find a AttrType
     * @example
     * // Get one AttrType
     * const attrType = await prisma.attrType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttrTypeFindUniqueArgs>(args: SelectSubset<T, AttrTypeFindUniqueArgs<ExtArgs>>): Prisma__AttrTypeClient<$Result.GetResult<Prisma.$AttrTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttrType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttrTypeFindUniqueOrThrowArgs} args - Arguments to find a AttrType
     * @example
     * // Get one AttrType
     * const attrType = await prisma.attrType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttrTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, AttrTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttrTypeClient<$Result.GetResult<Prisma.$AttrTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttrType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttrTypeFindFirstArgs} args - Arguments to find a AttrType
     * @example
     * // Get one AttrType
     * const attrType = await prisma.attrType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttrTypeFindFirstArgs>(args?: SelectSubset<T, AttrTypeFindFirstArgs<ExtArgs>>): Prisma__AttrTypeClient<$Result.GetResult<Prisma.$AttrTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttrType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttrTypeFindFirstOrThrowArgs} args - Arguments to find a AttrType
     * @example
     * // Get one AttrType
     * const attrType = await prisma.attrType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttrTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, AttrTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttrTypeClient<$Result.GetResult<Prisma.$AttrTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttrTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttrTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttrTypes
     * const attrTypes = await prisma.attrType.findMany()
     * 
     * // Get first 10 AttrTypes
     * const attrTypes = await prisma.attrType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attrTypeWithIdOnly = await prisma.attrType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttrTypeFindManyArgs>(args?: SelectSubset<T, AttrTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttrTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttrType.
     * @param {AttrTypeCreateArgs} args - Arguments to create a AttrType.
     * @example
     * // Create one AttrType
     * const AttrType = await prisma.attrType.create({
     *   data: {
     *     // ... data to create a AttrType
     *   }
     * })
     * 
     */
    create<T extends AttrTypeCreateArgs>(args: SelectSubset<T, AttrTypeCreateArgs<ExtArgs>>): Prisma__AttrTypeClient<$Result.GetResult<Prisma.$AttrTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttrTypes.
     * @param {AttrTypeCreateManyArgs} args - Arguments to create many AttrTypes.
     * @example
     * // Create many AttrTypes
     * const attrType = await prisma.attrType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttrTypeCreateManyArgs>(args?: SelectSubset<T, AttrTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttrTypes and returns the data saved in the database.
     * @param {AttrTypeCreateManyAndReturnArgs} args - Arguments to create many AttrTypes.
     * @example
     * // Create many AttrTypes
     * const attrType = await prisma.attrType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttrTypes and only return the `id`
     * const attrTypeWithIdOnly = await prisma.attrType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttrTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, AttrTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttrTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttrType.
     * @param {AttrTypeDeleteArgs} args - Arguments to delete one AttrType.
     * @example
     * // Delete one AttrType
     * const AttrType = await prisma.attrType.delete({
     *   where: {
     *     // ... filter to delete one AttrType
     *   }
     * })
     * 
     */
    delete<T extends AttrTypeDeleteArgs>(args: SelectSubset<T, AttrTypeDeleteArgs<ExtArgs>>): Prisma__AttrTypeClient<$Result.GetResult<Prisma.$AttrTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttrType.
     * @param {AttrTypeUpdateArgs} args - Arguments to update one AttrType.
     * @example
     * // Update one AttrType
     * const attrType = await prisma.attrType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttrTypeUpdateArgs>(args: SelectSubset<T, AttrTypeUpdateArgs<ExtArgs>>): Prisma__AttrTypeClient<$Result.GetResult<Prisma.$AttrTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttrTypes.
     * @param {AttrTypeDeleteManyArgs} args - Arguments to filter AttrTypes to delete.
     * @example
     * // Delete a few AttrTypes
     * const { count } = await prisma.attrType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttrTypeDeleteManyArgs>(args?: SelectSubset<T, AttrTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttrTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttrTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttrTypes
     * const attrType = await prisma.attrType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttrTypeUpdateManyArgs>(args: SelectSubset<T, AttrTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttrTypes and returns the data updated in the database.
     * @param {AttrTypeUpdateManyAndReturnArgs} args - Arguments to update many AttrTypes.
     * @example
     * // Update many AttrTypes
     * const attrType = await prisma.attrType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttrTypes and only return the `id`
     * const attrTypeWithIdOnly = await prisma.attrType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttrTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, AttrTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttrTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttrType.
     * @param {AttrTypeUpsertArgs} args - Arguments to update or create a AttrType.
     * @example
     * // Update or create a AttrType
     * const attrType = await prisma.attrType.upsert({
     *   create: {
     *     // ... data to create a AttrType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttrType we want to update
     *   }
     * })
     */
    upsert<T extends AttrTypeUpsertArgs>(args: SelectSubset<T, AttrTypeUpsertArgs<ExtArgs>>): Prisma__AttrTypeClient<$Result.GetResult<Prisma.$AttrTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttrTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttrTypeCountArgs} args - Arguments to filter AttrTypes to count.
     * @example
     * // Count the number of AttrTypes
     * const count = await prisma.attrType.count({
     *   where: {
     *     // ... the filter for the AttrTypes we want to count
     *   }
     * })
    **/
    count<T extends AttrTypeCountArgs>(
      args?: Subset<T, AttrTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttrTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttrType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttrTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttrTypeAggregateArgs>(args: Subset<T, AttrTypeAggregateArgs>): Prisma.PrismaPromise<GetAttrTypeAggregateType<T>>

    /**
     * Group by AttrType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttrTypeGroupByArgs} args - Group by arguments.
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
      T extends AttrTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttrTypeGroupByArgs['orderBy'] }
        : { orderBy?: AttrTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttrTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttrTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttrType model
   */
  readonly fields: AttrTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttrType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttrTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attributes<T extends AttrType$attributesArgs<ExtArgs> = {}>(args?: Subset<T, AttrType$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AttrType model
   */
  interface AttrTypeFieldRefs {
    readonly id: FieldRef<"AttrType", 'Int'>
    readonly name: FieldRef<"AttrType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AttrType findUnique
   */
  export type AttrTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttrType
     */
    select?: AttrTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttrType
     */
    omit?: AttrTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttrTypeInclude<ExtArgs> | null
    /**
     * Filter, which AttrType to fetch.
     */
    where: AttrTypeWhereUniqueInput
  }

  /**
   * AttrType findUniqueOrThrow
   */
  export type AttrTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttrType
     */
    select?: AttrTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttrType
     */
    omit?: AttrTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttrTypeInclude<ExtArgs> | null
    /**
     * Filter, which AttrType to fetch.
     */
    where: AttrTypeWhereUniqueInput
  }

  /**
   * AttrType findFirst
   */
  export type AttrTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttrType
     */
    select?: AttrTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttrType
     */
    omit?: AttrTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttrTypeInclude<ExtArgs> | null
    /**
     * Filter, which AttrType to fetch.
     */
    where?: AttrTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttrTypes to fetch.
     */
    orderBy?: AttrTypeOrderByWithRelationInput | AttrTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttrTypes.
     */
    cursor?: AttrTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttrTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttrTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttrTypes.
     */
    distinct?: AttrTypeScalarFieldEnum | AttrTypeScalarFieldEnum[]
  }

  /**
   * AttrType findFirstOrThrow
   */
  export type AttrTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttrType
     */
    select?: AttrTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttrType
     */
    omit?: AttrTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttrTypeInclude<ExtArgs> | null
    /**
     * Filter, which AttrType to fetch.
     */
    where?: AttrTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttrTypes to fetch.
     */
    orderBy?: AttrTypeOrderByWithRelationInput | AttrTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttrTypes.
     */
    cursor?: AttrTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttrTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttrTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttrTypes.
     */
    distinct?: AttrTypeScalarFieldEnum | AttrTypeScalarFieldEnum[]
  }

  /**
   * AttrType findMany
   */
  export type AttrTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttrType
     */
    select?: AttrTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttrType
     */
    omit?: AttrTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttrTypeInclude<ExtArgs> | null
    /**
     * Filter, which AttrTypes to fetch.
     */
    where?: AttrTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttrTypes to fetch.
     */
    orderBy?: AttrTypeOrderByWithRelationInput | AttrTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttrTypes.
     */
    cursor?: AttrTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttrTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttrTypes.
     */
    skip?: number
    distinct?: AttrTypeScalarFieldEnum | AttrTypeScalarFieldEnum[]
  }

  /**
   * AttrType create
   */
  export type AttrTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttrType
     */
    select?: AttrTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttrType
     */
    omit?: AttrTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttrTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a AttrType.
     */
    data: XOR<AttrTypeCreateInput, AttrTypeUncheckedCreateInput>
  }

  /**
   * AttrType createMany
   */
  export type AttrTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttrTypes.
     */
    data: AttrTypeCreateManyInput | AttrTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttrType createManyAndReturn
   */
  export type AttrTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttrType
     */
    select?: AttrTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttrType
     */
    omit?: AttrTypeOmit<ExtArgs> | null
    /**
     * The data used to create many AttrTypes.
     */
    data: AttrTypeCreateManyInput | AttrTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttrType update
   */
  export type AttrTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttrType
     */
    select?: AttrTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttrType
     */
    omit?: AttrTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttrTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a AttrType.
     */
    data: XOR<AttrTypeUpdateInput, AttrTypeUncheckedUpdateInput>
    /**
     * Choose, which AttrType to update.
     */
    where: AttrTypeWhereUniqueInput
  }

  /**
   * AttrType updateMany
   */
  export type AttrTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttrTypes.
     */
    data: XOR<AttrTypeUpdateManyMutationInput, AttrTypeUncheckedUpdateManyInput>
    /**
     * Filter which AttrTypes to update
     */
    where?: AttrTypeWhereInput
    /**
     * Limit how many AttrTypes to update.
     */
    limit?: number
  }

  /**
   * AttrType updateManyAndReturn
   */
  export type AttrTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttrType
     */
    select?: AttrTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttrType
     */
    omit?: AttrTypeOmit<ExtArgs> | null
    /**
     * The data used to update AttrTypes.
     */
    data: XOR<AttrTypeUpdateManyMutationInput, AttrTypeUncheckedUpdateManyInput>
    /**
     * Filter which AttrTypes to update
     */
    where?: AttrTypeWhereInput
    /**
     * Limit how many AttrTypes to update.
     */
    limit?: number
  }

  /**
   * AttrType upsert
   */
  export type AttrTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttrType
     */
    select?: AttrTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttrType
     */
    omit?: AttrTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttrTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the AttrType to update in case it exists.
     */
    where: AttrTypeWhereUniqueInput
    /**
     * In case the AttrType found by the `where` argument doesn't exist, create a new AttrType with this data.
     */
    create: XOR<AttrTypeCreateInput, AttrTypeUncheckedCreateInput>
    /**
     * In case the AttrType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttrTypeUpdateInput, AttrTypeUncheckedUpdateInput>
  }

  /**
   * AttrType delete
   */
  export type AttrTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttrType
     */
    select?: AttrTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttrType
     */
    omit?: AttrTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttrTypeInclude<ExtArgs> | null
    /**
     * Filter which AttrType to delete.
     */
    where: AttrTypeWhereUniqueInput
  }

  /**
   * AttrType deleteMany
   */
  export type AttrTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttrTypes to delete
     */
    where?: AttrTypeWhereInput
    /**
     * Limit how many AttrTypes to delete.
     */
    limit?: number
  }

  /**
   * AttrType.attributes
   */
  export type AttrType$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    cursor?: AttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * AttrType without action
   */
  export type AttrTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttrType
     */
    select?: AttrTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttrType
     */
    omit?: AttrTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttrTypeInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateAvgAggregateOutputType = {
    id: number | null
  }

  export type TemplateSumAggregateOutputType = {
    id: number | null
  }

  export type TemplateMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TemplateAvgAggregateInputType = {
    id?: true
  }

  export type TemplateSumAggregateInputType = {
    id?: true
  }

  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _avg?: TemplateAvgAggregateInputType
    _sum?: TemplateSumAggregateInputType
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: number
    name: string
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["template"]>

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'Int'>
    readonly name: FieldRef<"Template", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
  }


  /**
   * Model Query
   */

  export type AggregateQuery = {
    _count: QueryCountAggregateOutputType | null
    _avg: QueryAvgAggregateOutputType | null
    _sum: QuerySumAggregateOutputType | null
    _min: QueryMinAggregateOutputType | null
    _max: QueryMaxAggregateOutputType | null
  }

  export type QueryAvgAggregateOutputType = {
    id: number | null
  }

  export type QuerySumAggregateOutputType = {
    id: number | null
  }

  export type QueryMinAggregateOutputType = {
    id: number | null
    name: string | null
    params: string | null
  }

  export type QueryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    params: string | null
  }

  export type QueryCountAggregateOutputType = {
    id: number
    name: number
    params: number
    _all: number
  }


  export type QueryAvgAggregateInputType = {
    id?: true
  }

  export type QuerySumAggregateInputType = {
    id?: true
  }

  export type QueryMinAggregateInputType = {
    id?: true
    name?: true
    params?: true
  }

  export type QueryMaxAggregateInputType = {
    id?: true
    name?: true
    params?: true
  }

  export type QueryCountAggregateInputType = {
    id?: true
    name?: true
    params?: true
    _all?: true
  }

  export type QueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Query to aggregate.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Queries
    **/
    _count?: true | QueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QueryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueryMaxAggregateInputType
  }

  export type GetQueryAggregateType<T extends QueryAggregateArgs> = {
        [P in keyof T & keyof AggregateQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuery[P]>
      : GetScalarType<T[P], AggregateQuery[P]>
  }




  export type QueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueryWhereInput
    orderBy?: QueryOrderByWithAggregationInput | QueryOrderByWithAggregationInput[]
    by: QueryScalarFieldEnum[] | QueryScalarFieldEnum
    having?: QueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueryCountAggregateInputType | true
    _avg?: QueryAvgAggregateInputType
    _sum?: QuerySumAggregateInputType
    _min?: QueryMinAggregateInputType
    _max?: QueryMaxAggregateInputType
  }

  export type QueryGroupByOutputType = {
    id: number
    name: string
    params: string
    _count: QueryCountAggregateOutputType | null
    _avg: QueryAvgAggregateOutputType | null
    _sum: QuerySumAggregateOutputType | null
    _min: QueryMinAggregateOutputType | null
    _max: QueryMaxAggregateOutputType | null
  }

  type GetQueryGroupByPayload<T extends QueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueryGroupByOutputType[P]>
            : GetScalarType<T[P], QueryGroupByOutputType[P]>
        }
      >
    >


  export type QuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    params?: boolean
  }, ExtArgs["result"]["query"]>

  export type QuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    params?: boolean
  }, ExtArgs["result"]["query"]>

  export type QuerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    params?: boolean
  }, ExtArgs["result"]["query"]>

  export type QuerySelectScalar = {
    id?: boolean
    name?: boolean
    params?: boolean
  }

  export type QueryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "params", ExtArgs["result"]["query"]>

  export type $QueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Query"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      params: string
    }, ExtArgs["result"]["query"]>
    composites: {}
  }

  type QueryGetPayload<S extends boolean | null | undefined | QueryDefaultArgs> = $Result.GetResult<Prisma.$QueryPayload, S>

  type QueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QueryCountAggregateInputType | true
    }

  export interface QueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Query'], meta: { name: 'Query' } }
    /**
     * Find zero or one Query that matches the filter.
     * @param {QueryFindUniqueArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueryFindUniqueArgs>(args: SelectSubset<T, QueryFindUniqueArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Query that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QueryFindUniqueOrThrowArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueryFindUniqueOrThrowArgs>(args: SelectSubset<T, QueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Query that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryFindFirstArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueryFindFirstArgs>(args?: SelectSubset<T, QueryFindFirstArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Query that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryFindFirstOrThrowArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueryFindFirstOrThrowArgs>(args?: SelectSubset<T, QueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Queries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Queries
     * const queries = await prisma.query.findMany()
     * 
     * // Get first 10 Queries
     * const queries = await prisma.query.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queryWithIdOnly = await prisma.query.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QueryFindManyArgs>(args?: SelectSubset<T, QueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Query.
     * @param {QueryCreateArgs} args - Arguments to create a Query.
     * @example
     * // Create one Query
     * const Query = await prisma.query.create({
     *   data: {
     *     // ... data to create a Query
     *   }
     * })
     * 
     */
    create<T extends QueryCreateArgs>(args: SelectSubset<T, QueryCreateArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Queries.
     * @param {QueryCreateManyArgs} args - Arguments to create many Queries.
     * @example
     * // Create many Queries
     * const query = await prisma.query.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QueryCreateManyArgs>(args?: SelectSubset<T, QueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Queries and returns the data saved in the database.
     * @param {QueryCreateManyAndReturnArgs} args - Arguments to create many Queries.
     * @example
     * // Create many Queries
     * const query = await prisma.query.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Queries and only return the `id`
     * const queryWithIdOnly = await prisma.query.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QueryCreateManyAndReturnArgs>(args?: SelectSubset<T, QueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Query.
     * @param {QueryDeleteArgs} args - Arguments to delete one Query.
     * @example
     * // Delete one Query
     * const Query = await prisma.query.delete({
     *   where: {
     *     // ... filter to delete one Query
     *   }
     * })
     * 
     */
    delete<T extends QueryDeleteArgs>(args: SelectSubset<T, QueryDeleteArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Query.
     * @param {QueryUpdateArgs} args - Arguments to update one Query.
     * @example
     * // Update one Query
     * const query = await prisma.query.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QueryUpdateArgs>(args: SelectSubset<T, QueryUpdateArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Queries.
     * @param {QueryDeleteManyArgs} args - Arguments to filter Queries to delete.
     * @example
     * // Delete a few Queries
     * const { count } = await prisma.query.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QueryDeleteManyArgs>(args?: SelectSubset<T, QueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Queries
     * const query = await prisma.query.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QueryUpdateManyArgs>(args: SelectSubset<T, QueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queries and returns the data updated in the database.
     * @param {QueryUpdateManyAndReturnArgs} args - Arguments to update many Queries.
     * @example
     * // Update many Queries
     * const query = await prisma.query.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Queries and only return the `id`
     * const queryWithIdOnly = await prisma.query.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QueryUpdateManyAndReturnArgs>(args: SelectSubset<T, QueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Query.
     * @param {QueryUpsertArgs} args - Arguments to update or create a Query.
     * @example
     * // Update or create a Query
     * const query = await prisma.query.upsert({
     *   create: {
     *     // ... data to create a Query
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Query we want to update
     *   }
     * })
     */
    upsert<T extends QueryUpsertArgs>(args: SelectSubset<T, QueryUpsertArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Queries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryCountArgs} args - Arguments to filter Queries to count.
     * @example
     * // Count the number of Queries
     * const count = await prisma.query.count({
     *   where: {
     *     // ... the filter for the Queries we want to count
     *   }
     * })
    **/
    count<T extends QueryCountArgs>(
      args?: Subset<T, QueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Query.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QueryAggregateArgs>(args: Subset<T, QueryAggregateArgs>): Prisma.PrismaPromise<GetQueryAggregateType<T>>

    /**
     * Group by Query.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryGroupByArgs} args - Group by arguments.
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
      T extends QueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueryGroupByArgs['orderBy'] }
        : { orderBy?: QueryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Query model
   */
  readonly fields: QueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Query.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Query model
   */
  interface QueryFieldRefs {
    readonly id: FieldRef<"Query", 'Int'>
    readonly name: FieldRef<"Query", 'String'>
    readonly params: FieldRef<"Query", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Query findUnique
   */
  export type QueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query findUniqueOrThrow
   */
  export type QueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query findFirst
   */
  export type QueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Queries.
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Queries.
     */
    distinct?: QueryScalarFieldEnum | QueryScalarFieldEnum[]
  }

  /**
   * Query findFirstOrThrow
   */
  export type QueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Queries.
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Queries.
     */
    distinct?: QueryScalarFieldEnum | QueryScalarFieldEnum[]
  }

  /**
   * Query findMany
   */
  export type QueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Filter, which Queries to fetch.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Queries.
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    distinct?: QueryScalarFieldEnum | QueryScalarFieldEnum[]
  }

  /**
   * Query create
   */
  export type QueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * The data needed to create a Query.
     */
    data: XOR<QueryCreateInput, QueryUncheckedCreateInput>
  }

  /**
   * Query createMany
   */
  export type QueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Queries.
     */
    data: QueryCreateManyInput | QueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Query createManyAndReturn
   */
  export type QueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * The data used to create many Queries.
     */
    data: QueryCreateManyInput | QueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Query update
   */
  export type QueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * The data needed to update a Query.
     */
    data: XOR<QueryUpdateInput, QueryUncheckedUpdateInput>
    /**
     * Choose, which Query to update.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query updateMany
   */
  export type QueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Queries.
     */
    data: XOR<QueryUpdateManyMutationInput, QueryUncheckedUpdateManyInput>
    /**
     * Filter which Queries to update
     */
    where?: QueryWhereInput
    /**
     * Limit how many Queries to update.
     */
    limit?: number
  }

  /**
   * Query updateManyAndReturn
   */
  export type QueryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * The data used to update Queries.
     */
    data: XOR<QueryUpdateManyMutationInput, QueryUncheckedUpdateManyInput>
    /**
     * Filter which Queries to update
     */
    where?: QueryWhereInput
    /**
     * Limit how many Queries to update.
     */
    limit?: number
  }

  /**
   * Query upsert
   */
  export type QueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * The filter to search for the Query to update in case it exists.
     */
    where: QueryWhereUniqueInput
    /**
     * In case the Query found by the `where` argument doesn't exist, create a new Query with this data.
     */
    create: XOR<QueryCreateInput, QueryUncheckedCreateInput>
    /**
     * In case the Query was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueryUpdateInput, QueryUncheckedUpdateInput>
  }

  /**
   * Query delete
   */
  export type QueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Filter which Query to delete.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query deleteMany
   */
  export type QueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Queries to delete
     */
    where?: QueryWhereInput
    /**
     * Limit how many Queries to delete.
     */
    limit?: number
  }

  /**
   * Query without action
   */
  export type QueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
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


  export const EntityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type EntityScalarFieldEnum = (typeof EntityScalarFieldEnum)[keyof typeof EntityScalarFieldEnum]


  export const AttributeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    typeId: 'typeId',
    rangeId: 'rangeId',
    KVSetId: 'KVSetId'
  };

  export type AttributeScalarFieldEnum = (typeof AttributeScalarFieldEnum)[keyof typeof AttributeScalarFieldEnum]


  export const ValueScalarFieldEnum: {
    id: 'id',
    ts: 'ts',
    entityId: 'entityId',
    attributeId: 'attributeId',
    stringVal: 'stringVal',
    numberVal: 'numberVal',
    boolVal: 'boolVal',
    dateVal: 'dateVal'
  };

  export type ValueScalarFieldEnum = (typeof ValueScalarFieldEnum)[keyof typeof ValueScalarFieldEnum]


  export const KVSetScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type KVSetScalarFieldEnum = (typeof KVSetScalarFieldEnum)[keyof typeof KVSetScalarFieldEnum]


  export const KVScalarFieldEnum: {
    id: 'id',
    setId: 'setId',
    key: 'key',
    value: 'value'
  };

  export type KVScalarFieldEnum = (typeof KVScalarFieldEnum)[keyof typeof KVScalarFieldEnum]


  export const RangeScalarFieldEnum: {
    id: 'id',
    min: 'min',
    max: 'max'
  };

  export type RangeScalarFieldEnum = (typeof RangeScalarFieldEnum)[keyof typeof RangeScalarFieldEnum]


  export const AttrTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AttrTypeScalarFieldEnum = (typeof AttrTypeScalarFieldEnum)[keyof typeof AttrTypeScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const QueryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    params: 'params'
  };

  export type QueryScalarFieldEnum = (typeof QueryScalarFieldEnum)[keyof typeof QueryScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type EntityWhereInput = {
    AND?: EntityWhereInput | EntityWhereInput[]
    OR?: EntityWhereInput[]
    NOT?: EntityWhereInput | EntityWhereInput[]
    id?: IntFilter<"Entity"> | number
    name?: StringFilter<"Entity"> | string
    createdAt?: DateTimeFilter<"Entity"> | Date | string
    values?: ValueListRelationFilter
  }

  export type EntityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    values?: ValueOrderByRelationAggregateInput
  }

  export type EntityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EntityWhereInput | EntityWhereInput[]
    OR?: EntityWhereInput[]
    NOT?: EntityWhereInput | EntityWhereInput[]
    name?: StringFilter<"Entity"> | string
    createdAt?: DateTimeFilter<"Entity"> | Date | string
    values?: ValueListRelationFilter
  }, "id">

  export type EntityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: EntityCountOrderByAggregateInput
    _avg?: EntityAvgOrderByAggregateInput
    _max?: EntityMaxOrderByAggregateInput
    _min?: EntityMinOrderByAggregateInput
    _sum?: EntitySumOrderByAggregateInput
  }

  export type EntityScalarWhereWithAggregatesInput = {
    AND?: EntityScalarWhereWithAggregatesInput | EntityScalarWhereWithAggregatesInput[]
    OR?: EntityScalarWhereWithAggregatesInput[]
    NOT?: EntityScalarWhereWithAggregatesInput | EntityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entity"> | number
    name?: StringWithAggregatesFilter<"Entity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Entity"> | Date | string
  }

  export type AttributeWhereInput = {
    AND?: AttributeWhereInput | AttributeWhereInput[]
    OR?: AttributeWhereInput[]
    NOT?: AttributeWhereInput | AttributeWhereInput[]
    id?: IntFilter<"Attribute"> | number
    name?: StringFilter<"Attribute"> | string
    typeId?: IntFilter<"Attribute"> | number
    rangeId?: IntNullableFilter<"Attribute"> | number | null
    KVSetId?: IntNullableFilter<"Attribute"> | number | null
    value?: ValueListRelationFilter
    type?: XOR<AttrTypeScalarRelationFilter, AttrTypeWhereInput>
    range?: XOR<RangeNullableScalarRelationFilter, RangeWhereInput> | null
    kVSet?: XOR<KVSetNullableScalarRelationFilter, KVSetWhereInput> | null
  }

  export type AttributeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    rangeId?: SortOrderInput | SortOrder
    KVSetId?: SortOrderInput | SortOrder
    value?: ValueOrderByRelationAggregateInput
    type?: AttrTypeOrderByWithRelationInput
    range?: RangeOrderByWithRelationInput
    kVSet?: KVSetOrderByWithRelationInput
  }

  export type AttributeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttributeWhereInput | AttributeWhereInput[]
    OR?: AttributeWhereInput[]
    NOT?: AttributeWhereInput | AttributeWhereInput[]
    name?: StringFilter<"Attribute"> | string
    typeId?: IntFilter<"Attribute"> | number
    rangeId?: IntNullableFilter<"Attribute"> | number | null
    KVSetId?: IntNullableFilter<"Attribute"> | number | null
    value?: ValueListRelationFilter
    type?: XOR<AttrTypeScalarRelationFilter, AttrTypeWhereInput>
    range?: XOR<RangeNullableScalarRelationFilter, RangeWhereInput> | null
    kVSet?: XOR<KVSetNullableScalarRelationFilter, KVSetWhereInput> | null
  }, "id">

  export type AttributeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    rangeId?: SortOrderInput | SortOrder
    KVSetId?: SortOrderInput | SortOrder
    _count?: AttributeCountOrderByAggregateInput
    _avg?: AttributeAvgOrderByAggregateInput
    _max?: AttributeMaxOrderByAggregateInput
    _min?: AttributeMinOrderByAggregateInput
    _sum?: AttributeSumOrderByAggregateInput
  }

  export type AttributeScalarWhereWithAggregatesInput = {
    AND?: AttributeScalarWhereWithAggregatesInput | AttributeScalarWhereWithAggregatesInput[]
    OR?: AttributeScalarWhereWithAggregatesInput[]
    NOT?: AttributeScalarWhereWithAggregatesInput | AttributeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attribute"> | number
    name?: StringWithAggregatesFilter<"Attribute"> | string
    typeId?: IntWithAggregatesFilter<"Attribute"> | number
    rangeId?: IntNullableWithAggregatesFilter<"Attribute"> | number | null
    KVSetId?: IntNullableWithAggregatesFilter<"Attribute"> | number | null
  }

  export type ValueWhereInput = {
    AND?: ValueWhereInput | ValueWhereInput[]
    OR?: ValueWhereInput[]
    NOT?: ValueWhereInput | ValueWhereInput[]
    id?: IntFilter<"Value"> | number
    ts?: DateTimeFilter<"Value"> | Date | string
    entityId?: IntFilter<"Value"> | number
    attributeId?: IntFilter<"Value"> | number
    stringVal?: StringFilter<"Value"> | string
    numberVal?: FloatNullableFilter<"Value"> | number | null
    boolVal?: BoolNullableFilter<"Value"> | boolean | null
    dateVal?: DateTimeNullableFilter<"Value"> | Date | string | null
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
  }

  export type ValueOrderByWithRelationInput = {
    id?: SortOrder
    ts?: SortOrder
    entityId?: SortOrder
    attributeId?: SortOrder
    stringVal?: SortOrder
    numberVal?: SortOrderInput | SortOrder
    boolVal?: SortOrderInput | SortOrder
    dateVal?: SortOrderInput | SortOrder
    entity?: EntityOrderByWithRelationInput
    attribute?: AttributeOrderByWithRelationInput
  }

  export type ValueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    entityId_attributeId_ts?: ValueEntityIdAttributeIdTsCompoundUniqueInput
    AND?: ValueWhereInput | ValueWhereInput[]
    OR?: ValueWhereInput[]
    NOT?: ValueWhereInput | ValueWhereInput[]
    ts?: DateTimeFilter<"Value"> | Date | string
    entityId?: IntFilter<"Value"> | number
    attributeId?: IntFilter<"Value"> | number
    stringVal?: StringFilter<"Value"> | string
    numberVal?: FloatNullableFilter<"Value"> | number | null
    boolVal?: BoolNullableFilter<"Value"> | boolean | null
    dateVal?: DateTimeNullableFilter<"Value"> | Date | string | null
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
  }, "id" | "entityId_attributeId_ts">

  export type ValueOrderByWithAggregationInput = {
    id?: SortOrder
    ts?: SortOrder
    entityId?: SortOrder
    attributeId?: SortOrder
    stringVal?: SortOrder
    numberVal?: SortOrderInput | SortOrder
    boolVal?: SortOrderInput | SortOrder
    dateVal?: SortOrderInput | SortOrder
    _count?: ValueCountOrderByAggregateInput
    _avg?: ValueAvgOrderByAggregateInput
    _max?: ValueMaxOrderByAggregateInput
    _min?: ValueMinOrderByAggregateInput
    _sum?: ValueSumOrderByAggregateInput
  }

  export type ValueScalarWhereWithAggregatesInput = {
    AND?: ValueScalarWhereWithAggregatesInput | ValueScalarWhereWithAggregatesInput[]
    OR?: ValueScalarWhereWithAggregatesInput[]
    NOT?: ValueScalarWhereWithAggregatesInput | ValueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Value"> | number
    ts?: DateTimeWithAggregatesFilter<"Value"> | Date | string
    entityId?: IntWithAggregatesFilter<"Value"> | number
    attributeId?: IntWithAggregatesFilter<"Value"> | number
    stringVal?: StringWithAggregatesFilter<"Value"> | string
    numberVal?: FloatNullableWithAggregatesFilter<"Value"> | number | null
    boolVal?: BoolNullableWithAggregatesFilter<"Value"> | boolean | null
    dateVal?: DateTimeNullableWithAggregatesFilter<"Value"> | Date | string | null
  }

  export type KVSetWhereInput = {
    AND?: KVSetWhereInput | KVSetWhereInput[]
    OR?: KVSetWhereInput[]
    NOT?: KVSetWhereInput | KVSetWhereInput[]
    id?: IntFilter<"KVSet"> | number
    name?: StringFilter<"KVSet"> | string
    values?: KVListRelationFilter
    attributes?: AttributeListRelationFilter
  }

  export type KVSetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    values?: KVOrderByRelationAggregateInput
    attributes?: AttributeOrderByRelationAggregateInput
  }

  export type KVSetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KVSetWhereInput | KVSetWhereInput[]
    OR?: KVSetWhereInput[]
    NOT?: KVSetWhereInput | KVSetWhereInput[]
    name?: StringFilter<"KVSet"> | string
    values?: KVListRelationFilter
    attributes?: AttributeListRelationFilter
  }, "id">

  export type KVSetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: KVSetCountOrderByAggregateInput
    _avg?: KVSetAvgOrderByAggregateInput
    _max?: KVSetMaxOrderByAggregateInput
    _min?: KVSetMinOrderByAggregateInput
    _sum?: KVSetSumOrderByAggregateInput
  }

  export type KVSetScalarWhereWithAggregatesInput = {
    AND?: KVSetScalarWhereWithAggregatesInput | KVSetScalarWhereWithAggregatesInput[]
    OR?: KVSetScalarWhereWithAggregatesInput[]
    NOT?: KVSetScalarWhereWithAggregatesInput | KVSetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"KVSet"> | number
    name?: StringWithAggregatesFilter<"KVSet"> | string
  }

  export type KVWhereInput = {
    AND?: KVWhereInput | KVWhereInput[]
    OR?: KVWhereInput[]
    NOT?: KVWhereInput | KVWhereInput[]
    id?: IntFilter<"KV"> | number
    setId?: IntFilter<"KV"> | number
    key?: IntFilter<"KV"> | number
    value?: StringFilter<"KV"> | string
    set?: XOR<KVSetScalarRelationFilter, KVSetWhereInput>
  }

  export type KVOrderByWithRelationInput = {
    id?: SortOrder
    setId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    set?: KVSetOrderByWithRelationInput
  }

  export type KVWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    setId_key?: KVSetIdKeyCompoundUniqueInput
    AND?: KVWhereInput | KVWhereInput[]
    OR?: KVWhereInput[]
    NOT?: KVWhereInput | KVWhereInput[]
    setId?: IntFilter<"KV"> | number
    key?: IntFilter<"KV"> | number
    value?: StringFilter<"KV"> | string
    set?: XOR<KVSetScalarRelationFilter, KVSetWhereInput>
  }, "id" | "setId_key">

  export type KVOrderByWithAggregationInput = {
    id?: SortOrder
    setId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    _count?: KVCountOrderByAggregateInput
    _avg?: KVAvgOrderByAggregateInput
    _max?: KVMaxOrderByAggregateInput
    _min?: KVMinOrderByAggregateInput
    _sum?: KVSumOrderByAggregateInput
  }

  export type KVScalarWhereWithAggregatesInput = {
    AND?: KVScalarWhereWithAggregatesInput | KVScalarWhereWithAggregatesInput[]
    OR?: KVScalarWhereWithAggregatesInput[]
    NOT?: KVScalarWhereWithAggregatesInput | KVScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"KV"> | number
    setId?: IntWithAggregatesFilter<"KV"> | number
    key?: IntWithAggregatesFilter<"KV"> | number
    value?: StringWithAggregatesFilter<"KV"> | string
  }

  export type RangeWhereInput = {
    AND?: RangeWhereInput | RangeWhereInput[]
    OR?: RangeWhereInput[]
    NOT?: RangeWhereInput | RangeWhereInput[]
    id?: IntFilter<"Range"> | number
    min?: FloatNullableFilter<"Range"> | number | null
    max?: FloatNullableFilter<"Range"> | number | null
    attributes?: AttributeListRelationFilter
  }

  export type RangeOrderByWithRelationInput = {
    id?: SortOrder
    min?: SortOrderInput | SortOrder
    max?: SortOrderInput | SortOrder
    attributes?: AttributeOrderByRelationAggregateInput
  }

  export type RangeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RangeWhereInput | RangeWhereInput[]
    OR?: RangeWhereInput[]
    NOT?: RangeWhereInput | RangeWhereInput[]
    min?: FloatNullableFilter<"Range"> | number | null
    max?: FloatNullableFilter<"Range"> | number | null
    attributes?: AttributeListRelationFilter
  }, "id">

  export type RangeOrderByWithAggregationInput = {
    id?: SortOrder
    min?: SortOrderInput | SortOrder
    max?: SortOrderInput | SortOrder
    _count?: RangeCountOrderByAggregateInput
    _avg?: RangeAvgOrderByAggregateInput
    _max?: RangeMaxOrderByAggregateInput
    _min?: RangeMinOrderByAggregateInput
    _sum?: RangeSumOrderByAggregateInput
  }

  export type RangeScalarWhereWithAggregatesInput = {
    AND?: RangeScalarWhereWithAggregatesInput | RangeScalarWhereWithAggregatesInput[]
    OR?: RangeScalarWhereWithAggregatesInput[]
    NOT?: RangeScalarWhereWithAggregatesInput | RangeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Range"> | number
    min?: FloatNullableWithAggregatesFilter<"Range"> | number | null
    max?: FloatNullableWithAggregatesFilter<"Range"> | number | null
  }

  export type AttrTypeWhereInput = {
    AND?: AttrTypeWhereInput | AttrTypeWhereInput[]
    OR?: AttrTypeWhereInput[]
    NOT?: AttrTypeWhereInput | AttrTypeWhereInput[]
    id?: IntFilter<"AttrType"> | number
    name?: StringFilter<"AttrType"> | string
    attributes?: AttributeListRelationFilter
  }

  export type AttrTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    attributes?: AttributeOrderByRelationAggregateInput
  }

  export type AttrTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttrTypeWhereInput | AttrTypeWhereInput[]
    OR?: AttrTypeWhereInput[]
    NOT?: AttrTypeWhereInput | AttrTypeWhereInput[]
    name?: StringFilter<"AttrType"> | string
    attributes?: AttributeListRelationFilter
  }, "id">

  export type AttrTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AttrTypeCountOrderByAggregateInput
    _avg?: AttrTypeAvgOrderByAggregateInput
    _max?: AttrTypeMaxOrderByAggregateInput
    _min?: AttrTypeMinOrderByAggregateInput
    _sum?: AttrTypeSumOrderByAggregateInput
  }

  export type AttrTypeScalarWhereWithAggregatesInput = {
    AND?: AttrTypeScalarWhereWithAggregatesInput | AttrTypeScalarWhereWithAggregatesInput[]
    OR?: AttrTypeScalarWhereWithAggregatesInput[]
    NOT?: AttrTypeScalarWhereWithAggregatesInput | AttrTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AttrType"> | number
    name?: StringWithAggregatesFilter<"AttrType"> | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: IntFilter<"Template"> | number
    name?: StringFilter<"Template"> | string
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _avg?: TemplateAvgOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
    _sum?: TemplateSumOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Template"> | number
    name?: StringWithAggregatesFilter<"Template"> | string
  }

  export type QueryWhereInput = {
    AND?: QueryWhereInput | QueryWhereInput[]
    OR?: QueryWhereInput[]
    NOT?: QueryWhereInput | QueryWhereInput[]
    id?: IntFilter<"Query"> | number
    name?: StringFilter<"Query"> | string
    params?: StringFilter<"Query"> | string
  }

  export type QueryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    params?: SortOrder
  }

  export type QueryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QueryWhereInput | QueryWhereInput[]
    OR?: QueryWhereInput[]
    NOT?: QueryWhereInput | QueryWhereInput[]
    name?: StringFilter<"Query"> | string
    params?: StringFilter<"Query"> | string
  }, "id">

  export type QueryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    params?: SortOrder
    _count?: QueryCountOrderByAggregateInput
    _avg?: QueryAvgOrderByAggregateInput
    _max?: QueryMaxOrderByAggregateInput
    _min?: QueryMinOrderByAggregateInput
    _sum?: QuerySumOrderByAggregateInput
  }

  export type QueryScalarWhereWithAggregatesInput = {
    AND?: QueryScalarWhereWithAggregatesInput | QueryScalarWhereWithAggregatesInput[]
    OR?: QueryScalarWhereWithAggregatesInput[]
    NOT?: QueryScalarWhereWithAggregatesInput | QueryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Query"> | number
    name?: StringWithAggregatesFilter<"Query"> | string
    params?: StringWithAggregatesFilter<"Query"> | string
  }

  export type EntityCreateInput = {
    name: string
    createdAt?: Date | string
    values?: ValueCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    values?: ValueUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: ValueUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: ValueUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type EntityCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type EntityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeCreateInput = {
    name: string
    value?: ValueCreateNestedManyWithoutAttributeInput
    type: AttrTypeCreateNestedOneWithoutAttributesInput
    range?: RangeCreateNestedOneWithoutAttributesInput
    kVSet?: KVSetCreateNestedOneWithoutAttributesInput
  }

  export type AttributeUncheckedCreateInput = {
    id?: number
    name: string
    typeId: number
    rangeId?: number | null
    KVSetId?: number | null
    value?: ValueUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: ValueUpdateManyWithoutAttributeNestedInput
    type?: AttrTypeUpdateOneRequiredWithoutAttributesNestedInput
    range?: RangeUpdateOneWithoutAttributesNestedInput
    kVSet?: KVSetUpdateOneWithoutAttributesNestedInput
  }

  export type AttributeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    rangeId?: NullableIntFieldUpdateOperationsInput | number | null
    KVSetId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: ValueUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeCreateManyInput = {
    id?: number
    name: string
    typeId: number
    rangeId?: number | null
    KVSetId?: number | null
  }

  export type AttributeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AttributeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    rangeId?: NullableIntFieldUpdateOperationsInput | number | null
    KVSetId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ValueCreateInput = {
    ts: Date | string
    stringVal: string
    numberVal?: number | null
    boolVal?: boolean | null
    dateVal?: Date | string | null
    entity: EntityCreateNestedOneWithoutValuesInput
    attribute: AttributeCreateNestedOneWithoutValueInput
  }

  export type ValueUncheckedCreateInput = {
    id?: number
    ts: Date | string
    entityId: number
    attributeId: number
    stringVal: string
    numberVal?: number | null
    boolVal?: boolean | null
    dateVal?: Date | string | null
  }

  export type ValueUpdateInput = {
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    stringVal?: StringFieldUpdateOperationsInput | string
    numberVal?: NullableFloatFieldUpdateOperationsInput | number | null
    boolVal?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateVal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entity?: EntityUpdateOneRequiredWithoutValuesNestedInput
    attribute?: AttributeUpdateOneRequiredWithoutValueNestedInput
  }

  export type ValueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    entityId?: IntFieldUpdateOperationsInput | number
    attributeId?: IntFieldUpdateOperationsInput | number
    stringVal?: StringFieldUpdateOperationsInput | string
    numberVal?: NullableFloatFieldUpdateOperationsInput | number | null
    boolVal?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateVal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ValueCreateManyInput = {
    id?: number
    ts: Date | string
    entityId: number
    attributeId: number
    stringVal: string
    numberVal?: number | null
    boolVal?: boolean | null
    dateVal?: Date | string | null
  }

  export type ValueUpdateManyMutationInput = {
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    stringVal?: StringFieldUpdateOperationsInput | string
    numberVal?: NullableFloatFieldUpdateOperationsInput | number | null
    boolVal?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateVal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ValueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    entityId?: IntFieldUpdateOperationsInput | number
    attributeId?: IntFieldUpdateOperationsInput | number
    stringVal?: StringFieldUpdateOperationsInput | string
    numberVal?: NullableFloatFieldUpdateOperationsInput | number | null
    boolVal?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateVal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KVSetCreateInput = {
    name: string
    values?: KVCreateNestedManyWithoutSetInput
    attributes?: AttributeCreateNestedManyWithoutKVSetInput
  }

  export type KVSetUncheckedCreateInput = {
    id?: number
    name: string
    values?: KVUncheckedCreateNestedManyWithoutSetInput
    attributes?: AttributeUncheckedCreateNestedManyWithoutKVSetInput
  }

  export type KVSetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    values?: KVUpdateManyWithoutSetNestedInput
    attributes?: AttributeUpdateManyWithoutKVSetNestedInput
  }

  export type KVSetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    values?: KVUncheckedUpdateManyWithoutSetNestedInput
    attributes?: AttributeUncheckedUpdateManyWithoutKVSetNestedInput
  }

  export type KVSetCreateManyInput = {
    id?: number
    name: string
  }

  export type KVSetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type KVSetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type KVCreateInput = {
    key: number
    value: string
    set: KVSetCreateNestedOneWithoutValuesInput
  }

  export type KVUncheckedCreateInput = {
    id?: number
    setId: number
    key: number
    value: string
  }

  export type KVUpdateInput = {
    key?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    set?: KVSetUpdateOneRequiredWithoutValuesNestedInput
  }

  export type KVUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    setId?: IntFieldUpdateOperationsInput | number
    key?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type KVCreateManyInput = {
    id?: number
    setId: number
    key: number
    value: string
  }

  export type KVUpdateManyMutationInput = {
    key?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type KVUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    setId?: IntFieldUpdateOperationsInput | number
    key?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type RangeCreateInput = {
    min?: number | null
    max?: number | null
    attributes?: AttributeCreateNestedManyWithoutRangeInput
  }

  export type RangeUncheckedCreateInput = {
    id?: number
    min?: number | null
    max?: number | null
    attributes?: AttributeUncheckedCreateNestedManyWithoutRangeInput
  }

  export type RangeUpdateInput = {
    min?: NullableFloatFieldUpdateOperationsInput | number | null
    max?: NullableFloatFieldUpdateOperationsInput | number | null
    attributes?: AttributeUpdateManyWithoutRangeNestedInput
  }

  export type RangeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    min?: NullableFloatFieldUpdateOperationsInput | number | null
    max?: NullableFloatFieldUpdateOperationsInput | number | null
    attributes?: AttributeUncheckedUpdateManyWithoutRangeNestedInput
  }

  export type RangeCreateManyInput = {
    id?: number
    min?: number | null
    max?: number | null
  }

  export type RangeUpdateManyMutationInput = {
    min?: NullableFloatFieldUpdateOperationsInput | number | null
    max?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RangeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    min?: NullableFloatFieldUpdateOperationsInput | number | null
    max?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AttrTypeCreateInput = {
    name: string
    attributes?: AttributeCreateNestedManyWithoutTypeInput
  }

  export type AttrTypeUncheckedCreateInput = {
    id?: number
    name: string
    attributes?: AttributeUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AttrTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    attributes?: AttributeUpdateManyWithoutTypeNestedInput
  }

  export type AttrTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    attributes?: AttributeUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AttrTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type AttrTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AttrTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateCreateInput = {
    name: string
  }

  export type TemplateUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type TemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateCreateManyInput = {
    id?: number
    name: string
  }

  export type TemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QueryCreateInput = {
    name: string
    params: string
  }

  export type QueryUncheckedCreateInput = {
    id?: number
    name: string
    params: string
  }

  export type QueryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    params?: StringFieldUpdateOperationsInput | string
  }

  export type QueryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    params?: StringFieldUpdateOperationsInput | string
  }

  export type QueryCreateManyInput = {
    id?: number
    name: string
    params: string
  }

  export type QueryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    params?: StringFieldUpdateOperationsInput | string
  }

  export type QueryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    params?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type ValueListRelationFilter = {
    every?: ValueWhereInput
    some?: ValueWhereInput
    none?: ValueWhereInput
  }

  export type ValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type EntityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EntityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type EntityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type EntitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AttrTypeScalarRelationFilter = {
    is?: AttrTypeWhereInput
    isNot?: AttrTypeWhereInput
  }

  export type RangeNullableScalarRelationFilter = {
    is?: RangeWhereInput | null
    isNot?: RangeWhereInput | null
  }

  export type KVSetNullableScalarRelationFilter = {
    is?: KVSetWhereInput | null
    isNot?: KVSetWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttributeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    rangeId?: SortOrder
    KVSetId?: SortOrder
  }

  export type AttributeAvgOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    rangeId?: SortOrder
    KVSetId?: SortOrder
  }

  export type AttributeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    rangeId?: SortOrder
    KVSetId?: SortOrder
  }

  export type AttributeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    rangeId?: SortOrder
    KVSetId?: SortOrder
  }

  export type AttributeSumOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    rangeId?: SortOrder
    KVSetId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type EntityScalarRelationFilter = {
    is?: EntityWhereInput
    isNot?: EntityWhereInput
  }

  export type AttributeScalarRelationFilter = {
    is?: AttributeWhereInput
    isNot?: AttributeWhereInput
  }

  export type ValueEntityIdAttributeIdTsCompoundUniqueInput = {
    entityId: number
    attributeId: number
    ts: Date | string
  }

  export type ValueCountOrderByAggregateInput = {
    id?: SortOrder
    ts?: SortOrder
    entityId?: SortOrder
    attributeId?: SortOrder
    stringVal?: SortOrder
    numberVal?: SortOrder
    boolVal?: SortOrder
    dateVal?: SortOrder
  }

  export type ValueAvgOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    attributeId?: SortOrder
    numberVal?: SortOrder
  }

  export type ValueMaxOrderByAggregateInput = {
    id?: SortOrder
    ts?: SortOrder
    entityId?: SortOrder
    attributeId?: SortOrder
    stringVal?: SortOrder
    numberVal?: SortOrder
    boolVal?: SortOrder
    dateVal?: SortOrder
  }

  export type ValueMinOrderByAggregateInput = {
    id?: SortOrder
    ts?: SortOrder
    entityId?: SortOrder
    attributeId?: SortOrder
    stringVal?: SortOrder
    numberVal?: SortOrder
    boolVal?: SortOrder
    dateVal?: SortOrder
  }

  export type ValueSumOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    attributeId?: SortOrder
    numberVal?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type KVListRelationFilter = {
    every?: KVWhereInput
    some?: KVWhereInput
    none?: KVWhereInput
  }

  export type AttributeListRelationFilter = {
    every?: AttributeWhereInput
    some?: AttributeWhereInput
    none?: AttributeWhereInput
  }

  export type KVOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KVSetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type KVSetAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KVSetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type KVSetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type KVSetSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KVSetScalarRelationFilter = {
    is?: KVSetWhereInput
    isNot?: KVSetWhereInput
  }

  export type KVSetIdKeyCompoundUniqueInput = {
    setId: number
    key: number
  }

  export type KVCountOrderByAggregateInput = {
    id?: SortOrder
    setId?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type KVAvgOrderByAggregateInput = {
    id?: SortOrder
    setId?: SortOrder
    key?: SortOrder
  }

  export type KVMaxOrderByAggregateInput = {
    id?: SortOrder
    setId?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type KVMinOrderByAggregateInput = {
    id?: SortOrder
    setId?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type KVSumOrderByAggregateInput = {
    id?: SortOrder
    setId?: SortOrder
    key?: SortOrder
  }

  export type RangeCountOrderByAggregateInput = {
    id?: SortOrder
    min?: SortOrder
    max?: SortOrder
  }

  export type RangeAvgOrderByAggregateInput = {
    id?: SortOrder
    min?: SortOrder
    max?: SortOrder
  }

  export type RangeMaxOrderByAggregateInput = {
    id?: SortOrder
    min?: SortOrder
    max?: SortOrder
  }

  export type RangeMinOrderByAggregateInput = {
    id?: SortOrder
    min?: SortOrder
    max?: SortOrder
  }

  export type RangeSumOrderByAggregateInput = {
    id?: SortOrder
    min?: SortOrder
    max?: SortOrder
  }

  export type AttrTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AttrTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AttrTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AttrTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AttrTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TemplateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TemplateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QueryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    params?: SortOrder
  }

  export type QueryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QueryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    params?: SortOrder
  }

  export type QueryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    params?: SortOrder
  }

  export type QuerySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ValueCreateNestedManyWithoutEntityInput = {
    create?: XOR<ValueCreateWithoutEntityInput, ValueUncheckedCreateWithoutEntityInput> | ValueCreateWithoutEntityInput[] | ValueUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutEntityInput | ValueCreateOrConnectWithoutEntityInput[]
    createMany?: ValueCreateManyEntityInputEnvelope
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
  }

  export type ValueUncheckedCreateNestedManyWithoutEntityInput = {
    create?: XOR<ValueCreateWithoutEntityInput, ValueUncheckedCreateWithoutEntityInput> | ValueCreateWithoutEntityInput[] | ValueUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutEntityInput | ValueCreateOrConnectWithoutEntityInput[]
    createMany?: ValueCreateManyEntityInputEnvelope
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ValueUpdateManyWithoutEntityNestedInput = {
    create?: XOR<ValueCreateWithoutEntityInput, ValueUncheckedCreateWithoutEntityInput> | ValueCreateWithoutEntityInput[] | ValueUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutEntityInput | ValueCreateOrConnectWithoutEntityInput[]
    upsert?: ValueUpsertWithWhereUniqueWithoutEntityInput | ValueUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: ValueCreateManyEntityInputEnvelope
    set?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    disconnect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    delete?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    update?: ValueUpdateWithWhereUniqueWithoutEntityInput | ValueUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: ValueUpdateManyWithWhereWithoutEntityInput | ValueUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: ValueScalarWhereInput | ValueScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ValueUncheckedUpdateManyWithoutEntityNestedInput = {
    create?: XOR<ValueCreateWithoutEntityInput, ValueUncheckedCreateWithoutEntityInput> | ValueCreateWithoutEntityInput[] | ValueUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutEntityInput | ValueCreateOrConnectWithoutEntityInput[]
    upsert?: ValueUpsertWithWhereUniqueWithoutEntityInput | ValueUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: ValueCreateManyEntityInputEnvelope
    set?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    disconnect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    delete?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    update?: ValueUpdateWithWhereUniqueWithoutEntityInput | ValueUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: ValueUpdateManyWithWhereWithoutEntityInput | ValueUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: ValueScalarWhereInput | ValueScalarWhereInput[]
  }

  export type ValueCreateNestedManyWithoutAttributeInput = {
    create?: XOR<ValueCreateWithoutAttributeInput, ValueUncheckedCreateWithoutAttributeInput> | ValueCreateWithoutAttributeInput[] | ValueUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutAttributeInput | ValueCreateOrConnectWithoutAttributeInput[]
    createMany?: ValueCreateManyAttributeInputEnvelope
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
  }

  export type AttrTypeCreateNestedOneWithoutAttributesInput = {
    create?: XOR<AttrTypeCreateWithoutAttributesInput, AttrTypeUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: AttrTypeCreateOrConnectWithoutAttributesInput
    connect?: AttrTypeWhereUniqueInput
  }

  export type RangeCreateNestedOneWithoutAttributesInput = {
    create?: XOR<RangeCreateWithoutAttributesInput, RangeUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: RangeCreateOrConnectWithoutAttributesInput
    connect?: RangeWhereUniqueInput
  }

  export type KVSetCreateNestedOneWithoutAttributesInput = {
    create?: XOR<KVSetCreateWithoutAttributesInput, KVSetUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: KVSetCreateOrConnectWithoutAttributesInput
    connect?: KVSetWhereUniqueInput
  }

  export type ValueUncheckedCreateNestedManyWithoutAttributeInput = {
    create?: XOR<ValueCreateWithoutAttributeInput, ValueUncheckedCreateWithoutAttributeInput> | ValueCreateWithoutAttributeInput[] | ValueUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutAttributeInput | ValueCreateOrConnectWithoutAttributeInput[]
    createMany?: ValueCreateManyAttributeInputEnvelope
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
  }

  export type ValueUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<ValueCreateWithoutAttributeInput, ValueUncheckedCreateWithoutAttributeInput> | ValueCreateWithoutAttributeInput[] | ValueUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutAttributeInput | ValueCreateOrConnectWithoutAttributeInput[]
    upsert?: ValueUpsertWithWhereUniqueWithoutAttributeInput | ValueUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: ValueCreateManyAttributeInputEnvelope
    set?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    disconnect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    delete?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    update?: ValueUpdateWithWhereUniqueWithoutAttributeInput | ValueUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: ValueUpdateManyWithWhereWithoutAttributeInput | ValueUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: ValueScalarWhereInput | ValueScalarWhereInput[]
  }

  export type AttrTypeUpdateOneRequiredWithoutAttributesNestedInput = {
    create?: XOR<AttrTypeCreateWithoutAttributesInput, AttrTypeUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: AttrTypeCreateOrConnectWithoutAttributesInput
    upsert?: AttrTypeUpsertWithoutAttributesInput
    connect?: AttrTypeWhereUniqueInput
    update?: XOR<XOR<AttrTypeUpdateToOneWithWhereWithoutAttributesInput, AttrTypeUpdateWithoutAttributesInput>, AttrTypeUncheckedUpdateWithoutAttributesInput>
  }

  export type RangeUpdateOneWithoutAttributesNestedInput = {
    create?: XOR<RangeCreateWithoutAttributesInput, RangeUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: RangeCreateOrConnectWithoutAttributesInput
    upsert?: RangeUpsertWithoutAttributesInput
    disconnect?: RangeWhereInput | boolean
    delete?: RangeWhereInput | boolean
    connect?: RangeWhereUniqueInput
    update?: XOR<XOR<RangeUpdateToOneWithWhereWithoutAttributesInput, RangeUpdateWithoutAttributesInput>, RangeUncheckedUpdateWithoutAttributesInput>
  }

  export type KVSetUpdateOneWithoutAttributesNestedInput = {
    create?: XOR<KVSetCreateWithoutAttributesInput, KVSetUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: KVSetCreateOrConnectWithoutAttributesInput
    upsert?: KVSetUpsertWithoutAttributesInput
    disconnect?: KVSetWhereInput | boolean
    delete?: KVSetWhereInput | boolean
    connect?: KVSetWhereUniqueInput
    update?: XOR<XOR<KVSetUpdateToOneWithWhereWithoutAttributesInput, KVSetUpdateWithoutAttributesInput>, KVSetUncheckedUpdateWithoutAttributesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ValueUncheckedUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<ValueCreateWithoutAttributeInput, ValueUncheckedCreateWithoutAttributeInput> | ValueCreateWithoutAttributeInput[] | ValueUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutAttributeInput | ValueCreateOrConnectWithoutAttributeInput[]
    upsert?: ValueUpsertWithWhereUniqueWithoutAttributeInput | ValueUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: ValueCreateManyAttributeInputEnvelope
    set?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    disconnect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    delete?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    update?: ValueUpdateWithWhereUniqueWithoutAttributeInput | ValueUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: ValueUpdateManyWithWhereWithoutAttributeInput | ValueUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: ValueScalarWhereInput | ValueScalarWhereInput[]
  }

  export type EntityCreateNestedOneWithoutValuesInput = {
    create?: XOR<EntityCreateWithoutValuesInput, EntityUncheckedCreateWithoutValuesInput>
    connectOrCreate?: EntityCreateOrConnectWithoutValuesInput
    connect?: EntityWhereUniqueInput
  }

  export type AttributeCreateNestedOneWithoutValueInput = {
    create?: XOR<AttributeCreateWithoutValueInput, AttributeUncheckedCreateWithoutValueInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutValueInput
    connect?: AttributeWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EntityUpdateOneRequiredWithoutValuesNestedInput = {
    create?: XOR<EntityCreateWithoutValuesInput, EntityUncheckedCreateWithoutValuesInput>
    connectOrCreate?: EntityCreateOrConnectWithoutValuesInput
    upsert?: EntityUpsertWithoutValuesInput
    connect?: EntityWhereUniqueInput
    update?: XOR<XOR<EntityUpdateToOneWithWhereWithoutValuesInput, EntityUpdateWithoutValuesInput>, EntityUncheckedUpdateWithoutValuesInput>
  }

  export type AttributeUpdateOneRequiredWithoutValueNestedInput = {
    create?: XOR<AttributeCreateWithoutValueInput, AttributeUncheckedCreateWithoutValueInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutValueInput
    upsert?: AttributeUpsertWithoutValueInput
    connect?: AttributeWhereUniqueInput
    update?: XOR<XOR<AttributeUpdateToOneWithWhereWithoutValueInput, AttributeUpdateWithoutValueInput>, AttributeUncheckedUpdateWithoutValueInput>
  }

  export type KVCreateNestedManyWithoutSetInput = {
    create?: XOR<KVCreateWithoutSetInput, KVUncheckedCreateWithoutSetInput> | KVCreateWithoutSetInput[] | KVUncheckedCreateWithoutSetInput[]
    connectOrCreate?: KVCreateOrConnectWithoutSetInput | KVCreateOrConnectWithoutSetInput[]
    createMany?: KVCreateManySetInputEnvelope
    connect?: KVWhereUniqueInput | KVWhereUniqueInput[]
  }

  export type AttributeCreateNestedManyWithoutKVSetInput = {
    create?: XOR<AttributeCreateWithoutKVSetInput, AttributeUncheckedCreateWithoutKVSetInput> | AttributeCreateWithoutKVSetInput[] | AttributeUncheckedCreateWithoutKVSetInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutKVSetInput | AttributeCreateOrConnectWithoutKVSetInput[]
    createMany?: AttributeCreateManyKVSetInputEnvelope
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type KVUncheckedCreateNestedManyWithoutSetInput = {
    create?: XOR<KVCreateWithoutSetInput, KVUncheckedCreateWithoutSetInput> | KVCreateWithoutSetInput[] | KVUncheckedCreateWithoutSetInput[]
    connectOrCreate?: KVCreateOrConnectWithoutSetInput | KVCreateOrConnectWithoutSetInput[]
    createMany?: KVCreateManySetInputEnvelope
    connect?: KVWhereUniqueInput | KVWhereUniqueInput[]
  }

  export type AttributeUncheckedCreateNestedManyWithoutKVSetInput = {
    create?: XOR<AttributeCreateWithoutKVSetInput, AttributeUncheckedCreateWithoutKVSetInput> | AttributeCreateWithoutKVSetInput[] | AttributeUncheckedCreateWithoutKVSetInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutKVSetInput | AttributeCreateOrConnectWithoutKVSetInput[]
    createMany?: AttributeCreateManyKVSetInputEnvelope
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type KVUpdateManyWithoutSetNestedInput = {
    create?: XOR<KVCreateWithoutSetInput, KVUncheckedCreateWithoutSetInput> | KVCreateWithoutSetInput[] | KVUncheckedCreateWithoutSetInput[]
    connectOrCreate?: KVCreateOrConnectWithoutSetInput | KVCreateOrConnectWithoutSetInput[]
    upsert?: KVUpsertWithWhereUniqueWithoutSetInput | KVUpsertWithWhereUniqueWithoutSetInput[]
    createMany?: KVCreateManySetInputEnvelope
    set?: KVWhereUniqueInput | KVWhereUniqueInput[]
    disconnect?: KVWhereUniqueInput | KVWhereUniqueInput[]
    delete?: KVWhereUniqueInput | KVWhereUniqueInput[]
    connect?: KVWhereUniqueInput | KVWhereUniqueInput[]
    update?: KVUpdateWithWhereUniqueWithoutSetInput | KVUpdateWithWhereUniqueWithoutSetInput[]
    updateMany?: KVUpdateManyWithWhereWithoutSetInput | KVUpdateManyWithWhereWithoutSetInput[]
    deleteMany?: KVScalarWhereInput | KVScalarWhereInput[]
  }

  export type AttributeUpdateManyWithoutKVSetNestedInput = {
    create?: XOR<AttributeCreateWithoutKVSetInput, AttributeUncheckedCreateWithoutKVSetInput> | AttributeCreateWithoutKVSetInput[] | AttributeUncheckedCreateWithoutKVSetInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutKVSetInput | AttributeCreateOrConnectWithoutKVSetInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutKVSetInput | AttributeUpsertWithWhereUniqueWithoutKVSetInput[]
    createMany?: AttributeCreateManyKVSetInputEnvelope
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutKVSetInput | AttributeUpdateWithWhereUniqueWithoutKVSetInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutKVSetInput | AttributeUpdateManyWithWhereWithoutKVSetInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type KVUncheckedUpdateManyWithoutSetNestedInput = {
    create?: XOR<KVCreateWithoutSetInput, KVUncheckedCreateWithoutSetInput> | KVCreateWithoutSetInput[] | KVUncheckedCreateWithoutSetInput[]
    connectOrCreate?: KVCreateOrConnectWithoutSetInput | KVCreateOrConnectWithoutSetInput[]
    upsert?: KVUpsertWithWhereUniqueWithoutSetInput | KVUpsertWithWhereUniqueWithoutSetInput[]
    createMany?: KVCreateManySetInputEnvelope
    set?: KVWhereUniqueInput | KVWhereUniqueInput[]
    disconnect?: KVWhereUniqueInput | KVWhereUniqueInput[]
    delete?: KVWhereUniqueInput | KVWhereUniqueInput[]
    connect?: KVWhereUniqueInput | KVWhereUniqueInput[]
    update?: KVUpdateWithWhereUniqueWithoutSetInput | KVUpdateWithWhereUniqueWithoutSetInput[]
    updateMany?: KVUpdateManyWithWhereWithoutSetInput | KVUpdateManyWithWhereWithoutSetInput[]
    deleteMany?: KVScalarWhereInput | KVScalarWhereInput[]
  }

  export type AttributeUncheckedUpdateManyWithoutKVSetNestedInput = {
    create?: XOR<AttributeCreateWithoutKVSetInput, AttributeUncheckedCreateWithoutKVSetInput> | AttributeCreateWithoutKVSetInput[] | AttributeUncheckedCreateWithoutKVSetInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutKVSetInput | AttributeCreateOrConnectWithoutKVSetInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutKVSetInput | AttributeUpsertWithWhereUniqueWithoutKVSetInput[]
    createMany?: AttributeCreateManyKVSetInputEnvelope
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutKVSetInput | AttributeUpdateWithWhereUniqueWithoutKVSetInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutKVSetInput | AttributeUpdateManyWithWhereWithoutKVSetInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type KVSetCreateNestedOneWithoutValuesInput = {
    create?: XOR<KVSetCreateWithoutValuesInput, KVSetUncheckedCreateWithoutValuesInput>
    connectOrCreate?: KVSetCreateOrConnectWithoutValuesInput
    connect?: KVSetWhereUniqueInput
  }

  export type KVSetUpdateOneRequiredWithoutValuesNestedInput = {
    create?: XOR<KVSetCreateWithoutValuesInput, KVSetUncheckedCreateWithoutValuesInput>
    connectOrCreate?: KVSetCreateOrConnectWithoutValuesInput
    upsert?: KVSetUpsertWithoutValuesInput
    connect?: KVSetWhereUniqueInput
    update?: XOR<XOR<KVSetUpdateToOneWithWhereWithoutValuesInput, KVSetUpdateWithoutValuesInput>, KVSetUncheckedUpdateWithoutValuesInput>
  }

  export type AttributeCreateNestedManyWithoutRangeInput = {
    create?: XOR<AttributeCreateWithoutRangeInput, AttributeUncheckedCreateWithoutRangeInput> | AttributeCreateWithoutRangeInput[] | AttributeUncheckedCreateWithoutRangeInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutRangeInput | AttributeCreateOrConnectWithoutRangeInput[]
    createMany?: AttributeCreateManyRangeInputEnvelope
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type AttributeUncheckedCreateNestedManyWithoutRangeInput = {
    create?: XOR<AttributeCreateWithoutRangeInput, AttributeUncheckedCreateWithoutRangeInput> | AttributeCreateWithoutRangeInput[] | AttributeUncheckedCreateWithoutRangeInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutRangeInput | AttributeCreateOrConnectWithoutRangeInput[]
    createMany?: AttributeCreateManyRangeInputEnvelope
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type AttributeUpdateManyWithoutRangeNestedInput = {
    create?: XOR<AttributeCreateWithoutRangeInput, AttributeUncheckedCreateWithoutRangeInput> | AttributeCreateWithoutRangeInput[] | AttributeUncheckedCreateWithoutRangeInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutRangeInput | AttributeCreateOrConnectWithoutRangeInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutRangeInput | AttributeUpsertWithWhereUniqueWithoutRangeInput[]
    createMany?: AttributeCreateManyRangeInputEnvelope
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutRangeInput | AttributeUpdateWithWhereUniqueWithoutRangeInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutRangeInput | AttributeUpdateManyWithWhereWithoutRangeInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type AttributeUncheckedUpdateManyWithoutRangeNestedInput = {
    create?: XOR<AttributeCreateWithoutRangeInput, AttributeUncheckedCreateWithoutRangeInput> | AttributeCreateWithoutRangeInput[] | AttributeUncheckedCreateWithoutRangeInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutRangeInput | AttributeCreateOrConnectWithoutRangeInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutRangeInput | AttributeUpsertWithWhereUniqueWithoutRangeInput[]
    createMany?: AttributeCreateManyRangeInputEnvelope
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutRangeInput | AttributeUpdateWithWhereUniqueWithoutRangeInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutRangeInput | AttributeUpdateManyWithWhereWithoutRangeInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type AttributeCreateNestedManyWithoutTypeInput = {
    create?: XOR<AttributeCreateWithoutTypeInput, AttributeUncheckedCreateWithoutTypeInput> | AttributeCreateWithoutTypeInput[] | AttributeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutTypeInput | AttributeCreateOrConnectWithoutTypeInput[]
    createMany?: AttributeCreateManyTypeInputEnvelope
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type AttributeUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<AttributeCreateWithoutTypeInput, AttributeUncheckedCreateWithoutTypeInput> | AttributeCreateWithoutTypeInput[] | AttributeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutTypeInput | AttributeCreateOrConnectWithoutTypeInput[]
    createMany?: AttributeCreateManyTypeInputEnvelope
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type AttributeUpdateManyWithoutTypeNestedInput = {
    create?: XOR<AttributeCreateWithoutTypeInput, AttributeUncheckedCreateWithoutTypeInput> | AttributeCreateWithoutTypeInput[] | AttributeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutTypeInput | AttributeCreateOrConnectWithoutTypeInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutTypeInput | AttributeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: AttributeCreateManyTypeInputEnvelope
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutTypeInput | AttributeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutTypeInput | AttributeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type AttributeUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<AttributeCreateWithoutTypeInput, AttributeUncheckedCreateWithoutTypeInput> | AttributeCreateWithoutTypeInput[] | AttributeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutTypeInput | AttributeCreateOrConnectWithoutTypeInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutTypeInput | AttributeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: AttributeCreateManyTypeInputEnvelope
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutTypeInput | AttributeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutTypeInput | AttributeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type ValueCreateWithoutEntityInput = {
    ts: Date | string
    stringVal: string
    numberVal?: number | null
    boolVal?: boolean | null
    dateVal?: Date | string | null
    attribute: AttributeCreateNestedOneWithoutValueInput
  }

  export type ValueUncheckedCreateWithoutEntityInput = {
    id?: number
    ts: Date | string
    attributeId: number
    stringVal: string
    numberVal?: number | null
    boolVal?: boolean | null
    dateVal?: Date | string | null
  }

  export type ValueCreateOrConnectWithoutEntityInput = {
    where: ValueWhereUniqueInput
    create: XOR<ValueCreateWithoutEntityInput, ValueUncheckedCreateWithoutEntityInput>
  }

  export type ValueCreateManyEntityInputEnvelope = {
    data: ValueCreateManyEntityInput | ValueCreateManyEntityInput[]
    skipDuplicates?: boolean
  }

  export type ValueUpsertWithWhereUniqueWithoutEntityInput = {
    where: ValueWhereUniqueInput
    update: XOR<ValueUpdateWithoutEntityInput, ValueUncheckedUpdateWithoutEntityInput>
    create: XOR<ValueCreateWithoutEntityInput, ValueUncheckedCreateWithoutEntityInput>
  }

  export type ValueUpdateWithWhereUniqueWithoutEntityInput = {
    where: ValueWhereUniqueInput
    data: XOR<ValueUpdateWithoutEntityInput, ValueUncheckedUpdateWithoutEntityInput>
  }

  export type ValueUpdateManyWithWhereWithoutEntityInput = {
    where: ValueScalarWhereInput
    data: XOR<ValueUpdateManyMutationInput, ValueUncheckedUpdateManyWithoutEntityInput>
  }

  export type ValueScalarWhereInput = {
    AND?: ValueScalarWhereInput | ValueScalarWhereInput[]
    OR?: ValueScalarWhereInput[]
    NOT?: ValueScalarWhereInput | ValueScalarWhereInput[]
    id?: IntFilter<"Value"> | number
    ts?: DateTimeFilter<"Value"> | Date | string
    entityId?: IntFilter<"Value"> | number
    attributeId?: IntFilter<"Value"> | number
    stringVal?: StringFilter<"Value"> | string
    numberVal?: FloatNullableFilter<"Value"> | number | null
    boolVal?: BoolNullableFilter<"Value"> | boolean | null
    dateVal?: DateTimeNullableFilter<"Value"> | Date | string | null
  }

  export type ValueCreateWithoutAttributeInput = {
    ts: Date | string
    stringVal: string
    numberVal?: number | null
    boolVal?: boolean | null
    dateVal?: Date | string | null
    entity: EntityCreateNestedOneWithoutValuesInput
  }

  export type ValueUncheckedCreateWithoutAttributeInput = {
    id?: number
    ts: Date | string
    entityId: number
    stringVal: string
    numberVal?: number | null
    boolVal?: boolean | null
    dateVal?: Date | string | null
  }

  export type ValueCreateOrConnectWithoutAttributeInput = {
    where: ValueWhereUniqueInput
    create: XOR<ValueCreateWithoutAttributeInput, ValueUncheckedCreateWithoutAttributeInput>
  }

  export type ValueCreateManyAttributeInputEnvelope = {
    data: ValueCreateManyAttributeInput | ValueCreateManyAttributeInput[]
    skipDuplicates?: boolean
  }

  export type AttrTypeCreateWithoutAttributesInput = {
    name: string
  }

  export type AttrTypeUncheckedCreateWithoutAttributesInput = {
    id?: number
    name: string
  }

  export type AttrTypeCreateOrConnectWithoutAttributesInput = {
    where: AttrTypeWhereUniqueInput
    create: XOR<AttrTypeCreateWithoutAttributesInput, AttrTypeUncheckedCreateWithoutAttributesInput>
  }

  export type RangeCreateWithoutAttributesInput = {
    min?: number | null
    max?: number | null
  }

  export type RangeUncheckedCreateWithoutAttributesInput = {
    id?: number
    min?: number | null
    max?: number | null
  }

  export type RangeCreateOrConnectWithoutAttributesInput = {
    where: RangeWhereUniqueInput
    create: XOR<RangeCreateWithoutAttributesInput, RangeUncheckedCreateWithoutAttributesInput>
  }

  export type KVSetCreateWithoutAttributesInput = {
    name: string
    values?: KVCreateNestedManyWithoutSetInput
  }

  export type KVSetUncheckedCreateWithoutAttributesInput = {
    id?: number
    name: string
    values?: KVUncheckedCreateNestedManyWithoutSetInput
  }

  export type KVSetCreateOrConnectWithoutAttributesInput = {
    where: KVSetWhereUniqueInput
    create: XOR<KVSetCreateWithoutAttributesInput, KVSetUncheckedCreateWithoutAttributesInput>
  }

  export type ValueUpsertWithWhereUniqueWithoutAttributeInput = {
    where: ValueWhereUniqueInput
    update: XOR<ValueUpdateWithoutAttributeInput, ValueUncheckedUpdateWithoutAttributeInput>
    create: XOR<ValueCreateWithoutAttributeInput, ValueUncheckedCreateWithoutAttributeInput>
  }

  export type ValueUpdateWithWhereUniqueWithoutAttributeInput = {
    where: ValueWhereUniqueInput
    data: XOR<ValueUpdateWithoutAttributeInput, ValueUncheckedUpdateWithoutAttributeInput>
  }

  export type ValueUpdateManyWithWhereWithoutAttributeInput = {
    where: ValueScalarWhereInput
    data: XOR<ValueUpdateManyMutationInput, ValueUncheckedUpdateManyWithoutAttributeInput>
  }

  export type AttrTypeUpsertWithoutAttributesInput = {
    update: XOR<AttrTypeUpdateWithoutAttributesInput, AttrTypeUncheckedUpdateWithoutAttributesInput>
    create: XOR<AttrTypeCreateWithoutAttributesInput, AttrTypeUncheckedCreateWithoutAttributesInput>
    where?: AttrTypeWhereInput
  }

  export type AttrTypeUpdateToOneWithWhereWithoutAttributesInput = {
    where?: AttrTypeWhereInput
    data: XOR<AttrTypeUpdateWithoutAttributesInput, AttrTypeUncheckedUpdateWithoutAttributesInput>
  }

  export type AttrTypeUpdateWithoutAttributesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AttrTypeUncheckedUpdateWithoutAttributesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RangeUpsertWithoutAttributesInput = {
    update: XOR<RangeUpdateWithoutAttributesInput, RangeUncheckedUpdateWithoutAttributesInput>
    create: XOR<RangeCreateWithoutAttributesInput, RangeUncheckedCreateWithoutAttributesInput>
    where?: RangeWhereInput
  }

  export type RangeUpdateToOneWithWhereWithoutAttributesInput = {
    where?: RangeWhereInput
    data: XOR<RangeUpdateWithoutAttributesInput, RangeUncheckedUpdateWithoutAttributesInput>
  }

  export type RangeUpdateWithoutAttributesInput = {
    min?: NullableFloatFieldUpdateOperationsInput | number | null
    max?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RangeUncheckedUpdateWithoutAttributesInput = {
    id?: IntFieldUpdateOperationsInput | number
    min?: NullableFloatFieldUpdateOperationsInput | number | null
    max?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type KVSetUpsertWithoutAttributesInput = {
    update: XOR<KVSetUpdateWithoutAttributesInput, KVSetUncheckedUpdateWithoutAttributesInput>
    create: XOR<KVSetCreateWithoutAttributesInput, KVSetUncheckedCreateWithoutAttributesInput>
    where?: KVSetWhereInput
  }

  export type KVSetUpdateToOneWithWhereWithoutAttributesInput = {
    where?: KVSetWhereInput
    data: XOR<KVSetUpdateWithoutAttributesInput, KVSetUncheckedUpdateWithoutAttributesInput>
  }

  export type KVSetUpdateWithoutAttributesInput = {
    name?: StringFieldUpdateOperationsInput | string
    values?: KVUpdateManyWithoutSetNestedInput
  }

  export type KVSetUncheckedUpdateWithoutAttributesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    values?: KVUncheckedUpdateManyWithoutSetNestedInput
  }

  export type EntityCreateWithoutValuesInput = {
    name: string
    createdAt?: Date | string
  }

  export type EntityUncheckedCreateWithoutValuesInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type EntityCreateOrConnectWithoutValuesInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutValuesInput, EntityUncheckedCreateWithoutValuesInput>
  }

  export type AttributeCreateWithoutValueInput = {
    name: string
    type: AttrTypeCreateNestedOneWithoutAttributesInput
    range?: RangeCreateNestedOneWithoutAttributesInput
    kVSet?: KVSetCreateNestedOneWithoutAttributesInput
  }

  export type AttributeUncheckedCreateWithoutValueInput = {
    id?: number
    name: string
    typeId: number
    rangeId?: number | null
    KVSetId?: number | null
  }

  export type AttributeCreateOrConnectWithoutValueInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutValueInput, AttributeUncheckedCreateWithoutValueInput>
  }

  export type EntityUpsertWithoutValuesInput = {
    update: XOR<EntityUpdateWithoutValuesInput, EntityUncheckedUpdateWithoutValuesInput>
    create: XOR<EntityCreateWithoutValuesInput, EntityUncheckedCreateWithoutValuesInput>
    where?: EntityWhereInput
  }

  export type EntityUpdateToOneWithWhereWithoutValuesInput = {
    where?: EntityWhereInput
    data: XOR<EntityUpdateWithoutValuesInput, EntityUncheckedUpdateWithoutValuesInput>
  }

  export type EntityUpdateWithoutValuesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityUncheckedUpdateWithoutValuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeUpsertWithoutValueInput = {
    update: XOR<AttributeUpdateWithoutValueInput, AttributeUncheckedUpdateWithoutValueInput>
    create: XOR<AttributeCreateWithoutValueInput, AttributeUncheckedCreateWithoutValueInput>
    where?: AttributeWhereInput
  }

  export type AttributeUpdateToOneWithWhereWithoutValueInput = {
    where?: AttributeWhereInput
    data: XOR<AttributeUpdateWithoutValueInput, AttributeUncheckedUpdateWithoutValueInput>
  }

  export type AttributeUpdateWithoutValueInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: AttrTypeUpdateOneRequiredWithoutAttributesNestedInput
    range?: RangeUpdateOneWithoutAttributesNestedInput
    kVSet?: KVSetUpdateOneWithoutAttributesNestedInput
  }

  export type AttributeUncheckedUpdateWithoutValueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    rangeId?: NullableIntFieldUpdateOperationsInput | number | null
    KVSetId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KVCreateWithoutSetInput = {
    key: number
    value: string
  }

  export type KVUncheckedCreateWithoutSetInput = {
    id?: number
    key: number
    value: string
  }

  export type KVCreateOrConnectWithoutSetInput = {
    where: KVWhereUniqueInput
    create: XOR<KVCreateWithoutSetInput, KVUncheckedCreateWithoutSetInput>
  }

  export type KVCreateManySetInputEnvelope = {
    data: KVCreateManySetInput | KVCreateManySetInput[]
    skipDuplicates?: boolean
  }

  export type AttributeCreateWithoutKVSetInput = {
    name: string
    value?: ValueCreateNestedManyWithoutAttributeInput
    type: AttrTypeCreateNestedOneWithoutAttributesInput
    range?: RangeCreateNestedOneWithoutAttributesInput
  }

  export type AttributeUncheckedCreateWithoutKVSetInput = {
    id?: number
    name: string
    typeId: number
    rangeId?: number | null
    value?: ValueUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeCreateOrConnectWithoutKVSetInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutKVSetInput, AttributeUncheckedCreateWithoutKVSetInput>
  }

  export type AttributeCreateManyKVSetInputEnvelope = {
    data: AttributeCreateManyKVSetInput | AttributeCreateManyKVSetInput[]
    skipDuplicates?: boolean
  }

  export type KVUpsertWithWhereUniqueWithoutSetInput = {
    where: KVWhereUniqueInput
    update: XOR<KVUpdateWithoutSetInput, KVUncheckedUpdateWithoutSetInput>
    create: XOR<KVCreateWithoutSetInput, KVUncheckedCreateWithoutSetInput>
  }

  export type KVUpdateWithWhereUniqueWithoutSetInput = {
    where: KVWhereUniqueInput
    data: XOR<KVUpdateWithoutSetInput, KVUncheckedUpdateWithoutSetInput>
  }

  export type KVUpdateManyWithWhereWithoutSetInput = {
    where: KVScalarWhereInput
    data: XOR<KVUpdateManyMutationInput, KVUncheckedUpdateManyWithoutSetInput>
  }

  export type KVScalarWhereInput = {
    AND?: KVScalarWhereInput | KVScalarWhereInput[]
    OR?: KVScalarWhereInput[]
    NOT?: KVScalarWhereInput | KVScalarWhereInput[]
    id?: IntFilter<"KV"> | number
    setId?: IntFilter<"KV"> | number
    key?: IntFilter<"KV"> | number
    value?: StringFilter<"KV"> | string
  }

  export type AttributeUpsertWithWhereUniqueWithoutKVSetInput = {
    where: AttributeWhereUniqueInput
    update: XOR<AttributeUpdateWithoutKVSetInput, AttributeUncheckedUpdateWithoutKVSetInput>
    create: XOR<AttributeCreateWithoutKVSetInput, AttributeUncheckedCreateWithoutKVSetInput>
  }

  export type AttributeUpdateWithWhereUniqueWithoutKVSetInput = {
    where: AttributeWhereUniqueInput
    data: XOR<AttributeUpdateWithoutKVSetInput, AttributeUncheckedUpdateWithoutKVSetInput>
  }

  export type AttributeUpdateManyWithWhereWithoutKVSetInput = {
    where: AttributeScalarWhereInput
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyWithoutKVSetInput>
  }

  export type AttributeScalarWhereInput = {
    AND?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
    OR?: AttributeScalarWhereInput[]
    NOT?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
    id?: IntFilter<"Attribute"> | number
    name?: StringFilter<"Attribute"> | string
    typeId?: IntFilter<"Attribute"> | number
    rangeId?: IntNullableFilter<"Attribute"> | number | null
    KVSetId?: IntNullableFilter<"Attribute"> | number | null
  }

  export type KVSetCreateWithoutValuesInput = {
    name: string
    attributes?: AttributeCreateNestedManyWithoutKVSetInput
  }

  export type KVSetUncheckedCreateWithoutValuesInput = {
    id?: number
    name: string
    attributes?: AttributeUncheckedCreateNestedManyWithoutKVSetInput
  }

  export type KVSetCreateOrConnectWithoutValuesInput = {
    where: KVSetWhereUniqueInput
    create: XOR<KVSetCreateWithoutValuesInput, KVSetUncheckedCreateWithoutValuesInput>
  }

  export type KVSetUpsertWithoutValuesInput = {
    update: XOR<KVSetUpdateWithoutValuesInput, KVSetUncheckedUpdateWithoutValuesInput>
    create: XOR<KVSetCreateWithoutValuesInput, KVSetUncheckedCreateWithoutValuesInput>
    where?: KVSetWhereInput
  }

  export type KVSetUpdateToOneWithWhereWithoutValuesInput = {
    where?: KVSetWhereInput
    data: XOR<KVSetUpdateWithoutValuesInput, KVSetUncheckedUpdateWithoutValuesInput>
  }

  export type KVSetUpdateWithoutValuesInput = {
    name?: StringFieldUpdateOperationsInput | string
    attributes?: AttributeUpdateManyWithoutKVSetNestedInput
  }

  export type KVSetUncheckedUpdateWithoutValuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    attributes?: AttributeUncheckedUpdateManyWithoutKVSetNestedInput
  }

  export type AttributeCreateWithoutRangeInput = {
    name: string
    value?: ValueCreateNestedManyWithoutAttributeInput
    type: AttrTypeCreateNestedOneWithoutAttributesInput
    kVSet?: KVSetCreateNestedOneWithoutAttributesInput
  }

  export type AttributeUncheckedCreateWithoutRangeInput = {
    id?: number
    name: string
    typeId: number
    KVSetId?: number | null
    value?: ValueUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeCreateOrConnectWithoutRangeInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutRangeInput, AttributeUncheckedCreateWithoutRangeInput>
  }

  export type AttributeCreateManyRangeInputEnvelope = {
    data: AttributeCreateManyRangeInput | AttributeCreateManyRangeInput[]
    skipDuplicates?: boolean
  }

  export type AttributeUpsertWithWhereUniqueWithoutRangeInput = {
    where: AttributeWhereUniqueInput
    update: XOR<AttributeUpdateWithoutRangeInput, AttributeUncheckedUpdateWithoutRangeInput>
    create: XOR<AttributeCreateWithoutRangeInput, AttributeUncheckedCreateWithoutRangeInput>
  }

  export type AttributeUpdateWithWhereUniqueWithoutRangeInput = {
    where: AttributeWhereUniqueInput
    data: XOR<AttributeUpdateWithoutRangeInput, AttributeUncheckedUpdateWithoutRangeInput>
  }

  export type AttributeUpdateManyWithWhereWithoutRangeInput = {
    where: AttributeScalarWhereInput
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyWithoutRangeInput>
  }

  export type AttributeCreateWithoutTypeInput = {
    name: string
    value?: ValueCreateNestedManyWithoutAttributeInput
    range?: RangeCreateNestedOneWithoutAttributesInput
    kVSet?: KVSetCreateNestedOneWithoutAttributesInput
  }

  export type AttributeUncheckedCreateWithoutTypeInput = {
    id?: number
    name: string
    rangeId?: number | null
    KVSetId?: number | null
    value?: ValueUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeCreateOrConnectWithoutTypeInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutTypeInput, AttributeUncheckedCreateWithoutTypeInput>
  }

  export type AttributeCreateManyTypeInputEnvelope = {
    data: AttributeCreateManyTypeInput | AttributeCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type AttributeUpsertWithWhereUniqueWithoutTypeInput = {
    where: AttributeWhereUniqueInput
    update: XOR<AttributeUpdateWithoutTypeInput, AttributeUncheckedUpdateWithoutTypeInput>
    create: XOR<AttributeCreateWithoutTypeInput, AttributeUncheckedCreateWithoutTypeInput>
  }

  export type AttributeUpdateWithWhereUniqueWithoutTypeInput = {
    where: AttributeWhereUniqueInput
    data: XOR<AttributeUpdateWithoutTypeInput, AttributeUncheckedUpdateWithoutTypeInput>
  }

  export type AttributeUpdateManyWithWhereWithoutTypeInput = {
    where: AttributeScalarWhereInput
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyWithoutTypeInput>
  }

  export type ValueCreateManyEntityInput = {
    id?: number
    ts: Date | string
    attributeId: number
    stringVal: string
    numberVal?: number | null
    boolVal?: boolean | null
    dateVal?: Date | string | null
  }

  export type ValueUpdateWithoutEntityInput = {
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    stringVal?: StringFieldUpdateOperationsInput | string
    numberVal?: NullableFloatFieldUpdateOperationsInput | number | null
    boolVal?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateVal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attribute?: AttributeUpdateOneRequiredWithoutValueNestedInput
  }

  export type ValueUncheckedUpdateWithoutEntityInput = {
    id?: IntFieldUpdateOperationsInput | number
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    attributeId?: IntFieldUpdateOperationsInput | number
    stringVal?: StringFieldUpdateOperationsInput | string
    numberVal?: NullableFloatFieldUpdateOperationsInput | number | null
    boolVal?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateVal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ValueUncheckedUpdateManyWithoutEntityInput = {
    id?: IntFieldUpdateOperationsInput | number
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    attributeId?: IntFieldUpdateOperationsInput | number
    stringVal?: StringFieldUpdateOperationsInput | string
    numberVal?: NullableFloatFieldUpdateOperationsInput | number | null
    boolVal?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateVal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ValueCreateManyAttributeInput = {
    id?: number
    ts: Date | string
    entityId: number
    stringVal: string
    numberVal?: number | null
    boolVal?: boolean | null
    dateVal?: Date | string | null
  }

  export type ValueUpdateWithoutAttributeInput = {
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    stringVal?: StringFieldUpdateOperationsInput | string
    numberVal?: NullableFloatFieldUpdateOperationsInput | number | null
    boolVal?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateVal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entity?: EntityUpdateOneRequiredWithoutValuesNestedInput
  }

  export type ValueUncheckedUpdateWithoutAttributeInput = {
    id?: IntFieldUpdateOperationsInput | number
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    entityId?: IntFieldUpdateOperationsInput | number
    stringVal?: StringFieldUpdateOperationsInput | string
    numberVal?: NullableFloatFieldUpdateOperationsInput | number | null
    boolVal?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateVal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ValueUncheckedUpdateManyWithoutAttributeInput = {
    id?: IntFieldUpdateOperationsInput | number
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    entityId?: IntFieldUpdateOperationsInput | number
    stringVal?: StringFieldUpdateOperationsInput | string
    numberVal?: NullableFloatFieldUpdateOperationsInput | number | null
    boolVal?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateVal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KVCreateManySetInput = {
    id?: number
    key: number
    value: string
  }

  export type AttributeCreateManyKVSetInput = {
    id?: number
    name: string
    typeId: number
    rangeId?: number | null
  }

  export type KVUpdateWithoutSetInput = {
    key?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type KVUncheckedUpdateWithoutSetInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type KVUncheckedUpdateManyWithoutSetInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AttributeUpdateWithoutKVSetInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: ValueUpdateManyWithoutAttributeNestedInput
    type?: AttrTypeUpdateOneRequiredWithoutAttributesNestedInput
    range?: RangeUpdateOneWithoutAttributesNestedInput
  }

  export type AttributeUncheckedUpdateWithoutKVSetInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    rangeId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: ValueUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateManyWithoutKVSetInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    rangeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttributeCreateManyRangeInput = {
    id?: number
    name: string
    typeId: number
    KVSetId?: number | null
  }

  export type AttributeUpdateWithoutRangeInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: ValueUpdateManyWithoutAttributeNestedInput
    type?: AttrTypeUpdateOneRequiredWithoutAttributesNestedInput
    kVSet?: KVSetUpdateOneWithoutAttributesNestedInput
  }

  export type AttributeUncheckedUpdateWithoutRangeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    KVSetId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: ValueUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateManyWithoutRangeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    KVSetId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttributeCreateManyTypeInput = {
    id?: number
    name: string
    rangeId?: number | null
    KVSetId?: number | null
  }

  export type AttributeUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: ValueUpdateManyWithoutAttributeNestedInput
    range?: RangeUpdateOneWithoutAttributesNestedInput
    kVSet?: KVSetUpdateOneWithoutAttributesNestedInput
  }

  export type AttributeUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rangeId?: NullableIntFieldUpdateOperationsInput | number | null
    KVSetId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: ValueUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rangeId?: NullableIntFieldUpdateOperationsInput | number | null
    KVSetId?: NullableIntFieldUpdateOperationsInput | number | null
  }



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
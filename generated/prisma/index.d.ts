
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
 * Model items
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type items = $Result.DefaultSelection<Prisma.$itemsPayload>
/**
 * Model titles
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type titles = $Result.DefaultSelection<Prisma.$titlesPayload>
/**
 * Model values
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type values = $Result.DefaultSelection<Prisma.$valuesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Items
 * const items = await prisma.items.findMany()
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
   * // Fetch zero or more Items
   * const items = await prisma.items.findMany()
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
   * Executes a typed SQL query and returns a typed result
   * @example
   * ```
   * import { myQuery } from '@prisma/client/sql'
   * 
   * const result = await prisma.$queryRawTyped(myQuery())
   * ```
   */
  $queryRawTyped<T>(typedSql: runtime.TypedSql<unknown[], T>): Prisma.PrismaPromise<T[]>

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
   * `prisma.items`: Exposes CRUD operations for the **items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.items.findMany()
    * ```
    */
  get items(): Prisma.itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.titles`: Exposes CRUD operations for the **titles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Titles
    * const titles = await prisma.titles.findMany()
    * ```
    */
  get titles(): Prisma.titlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.values`: Exposes CRUD operations for the **values** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Values
    * const values = await prisma.values.findMany()
    * ```
    */
  get values(): Prisma.valuesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    items: 'items',
    titles: 'titles',
    values: 'values'
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
      modelProps: "items" | "titles" | "values"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      items: {
        payload: Prisma.$itemsPayload<ExtArgs>
        fields: Prisma.itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          findFirst: {
            args: Prisma.itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          findMany: {
            args: Prisma.itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>[]
          }
          create: {
            args: Prisma.itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          createMany: {
            args: Prisma.itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>[]
          }
          delete: {
            args: Prisma.itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          update: {
            args: Prisma.itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          deleteMany: {
            args: Prisma.itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>[]
          }
          upsert: {
            args: Prisma.itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          aggregate: {
            args: Prisma.ItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItems>
          }
          groupBy: {
            args: Prisma.itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemsCountArgs<ExtArgs>
            result: $Utils.Optional<ItemsCountAggregateOutputType> | number
          }
        }
      }
      titles: {
        payload: Prisma.$titlesPayload<ExtArgs>
        fields: Prisma.titlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.titlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$titlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.titlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$titlesPayload>
          }
          findFirst: {
            args: Prisma.titlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$titlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.titlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$titlesPayload>
          }
          findMany: {
            args: Prisma.titlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$titlesPayload>[]
          }
          create: {
            args: Prisma.titlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$titlesPayload>
          }
          createMany: {
            args: Prisma.titlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.titlesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$titlesPayload>[]
          }
          delete: {
            args: Prisma.titlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$titlesPayload>
          }
          update: {
            args: Prisma.titlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$titlesPayload>
          }
          deleteMany: {
            args: Prisma.titlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.titlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.titlesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$titlesPayload>[]
          }
          upsert: {
            args: Prisma.titlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$titlesPayload>
          }
          aggregate: {
            args: Prisma.TitlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTitles>
          }
          groupBy: {
            args: Prisma.titlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TitlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.titlesCountArgs<ExtArgs>
            result: $Utils.Optional<TitlesCountAggregateOutputType> | number
          }
        }
      }
      values: {
        payload: Prisma.$valuesPayload<ExtArgs>
        fields: Prisma.valuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.valuesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.valuesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuesPayload>
          }
          findFirst: {
            args: Prisma.valuesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.valuesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuesPayload>
          }
          findMany: {
            args: Prisma.valuesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuesPayload>[]
          }
          create: {
            args: Prisma.valuesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuesPayload>
          }
          createMany: {
            args: Prisma.valuesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.valuesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuesPayload>[]
          }
          delete: {
            args: Prisma.valuesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuesPayload>
          }
          update: {
            args: Prisma.valuesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuesPayload>
          }
          deleteMany: {
            args: Prisma.valuesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.valuesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.valuesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuesPayload>[]
          }
          upsert: {
            args: Prisma.valuesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuesPayload>
          }
          aggregate: {
            args: Prisma.ValuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValues>
          }
          groupBy: {
            args: Prisma.valuesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.valuesCountArgs<ExtArgs>
            result: $Utils.Optional<ValuesCountAggregateOutputType> | number
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
        $queryRawTyped: {
          args: runtime.UnknownTypedSql,
          result: Prisma.JsonObject
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
    items?: itemsOmit
    titles?: titlesOmit
    values?: valuesOmit
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
   * Count Type ItemsCountOutputType
   */

  export type ItemsCountOutputType = {
    other_items: number
    titles: number
  }

  export type ItemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_items?: boolean | ItemsCountOutputTypeCountOther_itemsArgs
    titles?: boolean | ItemsCountOutputTypeCountTitlesArgs
  }

  // Custom InputTypes
  /**
   * ItemsCountOutputType without action
   */
  export type ItemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsCountOutputType
     */
    select?: ItemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemsCountOutputType without action
   */
  export type ItemsCountOutputTypeCountOther_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemsWhereInput
  }

  /**
   * ItemsCountOutputType without action
   */
  export type ItemsCountOutputTypeCountTitlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: titlesWhereInput
  }


  /**
   * Count Type TitlesCountOutputType
   */

  export type TitlesCountOutputType = {
    values: number
  }

  export type TitlesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    values?: boolean | TitlesCountOutputTypeCountValuesArgs
  }

  // Custom InputTypes
  /**
   * TitlesCountOutputType without action
   */
  export type TitlesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitlesCountOutputType
     */
    select?: TitlesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TitlesCountOutputType without action
   */
  export type TitlesCountOutputTypeCountValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: valuesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model items
   */

  export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  export type ItemsAvgAggregateOutputType = {
    id: number | null
    parent: number | null
  }

  export type ItemsSumAggregateOutputType = {
    id: bigint | null
    parent: bigint | null
  }

  export type ItemsMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    label: string | null
    description: string | null
    comment: string | null
    parent: bigint | null
  }

  export type ItemsMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    label: string | null
    description: string | null
    comment: string | null
    parent: bigint | null
  }

  export type ItemsCountAggregateOutputType = {
    id: number
    created_at: number
    label: number
    description: number
    comment: number
    parent: number
    _all: number
  }


  export type ItemsAvgAggregateInputType = {
    id?: true
    parent?: true
  }

  export type ItemsSumAggregateInputType = {
    id?: true
    parent?: true
  }

  export type ItemsMinAggregateInputType = {
    id?: true
    created_at?: true
    label?: true
    description?: true
    comment?: true
    parent?: true
  }

  export type ItemsMaxAggregateInputType = {
    id?: true
    created_at?: true
    label?: true
    description?: true
    comment?: true
    parent?: true
  }

  export type ItemsCountAggregateInputType = {
    id?: true
    created_at?: true
    label?: true
    description?: true
    comment?: true
    parent?: true
    _all?: true
  }

  export type ItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to aggregate.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned items
    **/
    _count?: true | ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsMaxAggregateInputType
  }

  export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems[P]>
      : GetScalarType<T[P], AggregateItems[P]>
  }




  export type itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemsWhereInput
    orderBy?: itemsOrderByWithAggregationInput | itemsOrderByWithAggregationInput[]
    by: ItemsScalarFieldEnum[] | ItemsScalarFieldEnum
    having?: itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsCountAggregateInputType | true
    _avg?: ItemsAvgAggregateInputType
    _sum?: ItemsSumAggregateInputType
    _min?: ItemsMinAggregateInputType
    _max?: ItemsMaxAggregateInputType
  }

  export type ItemsGroupByOutputType = {
    id: bigint
    created_at: Date
    label: string | null
    description: string | null
    comment: string | null
    parent: bigint | null
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  type GetItemsGroupByPayload<T extends itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsGroupByOutputType[P]>
        }
      >
    >


  export type itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    label?: boolean
    description?: boolean
    comment?: boolean
    parent?: boolean
    items?: boolean | items$itemsArgs<ExtArgs>
    other_items?: boolean | items$other_itemsArgs<ExtArgs>
    titles?: boolean | items$titlesArgs<ExtArgs>
    _count?: boolean | ItemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    label?: boolean
    description?: boolean
    comment?: boolean
    parent?: boolean
    items?: boolean | items$itemsArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    label?: boolean
    description?: boolean
    comment?: boolean
    parent?: boolean
    items?: boolean | items$itemsArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type itemsSelectScalar = {
    id?: boolean
    created_at?: boolean
    label?: boolean
    description?: boolean
    comment?: boolean
    parent?: boolean
  }

  export type itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "label" | "description" | "comment" | "parent", ExtArgs["result"]["items"]>
  export type itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | items$itemsArgs<ExtArgs>
    other_items?: boolean | items$other_itemsArgs<ExtArgs>
    titles?: boolean | items$titlesArgs<ExtArgs>
    _count?: boolean | ItemsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | items$itemsArgs<ExtArgs>
  }
  export type itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | items$itemsArgs<ExtArgs>
  }

  export type $itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "items"
    objects: {
      items: Prisma.$itemsPayload<ExtArgs> | null
      other_items: Prisma.$itemsPayload<ExtArgs>[]
      titles: Prisma.$titlesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      label: string | null
      description: string | null
      comment: string | null
      parent: bigint | null
    }, ExtArgs["result"]["items"]>
    composites: {}
  }

  type itemsGetPayload<S extends boolean | null | undefined | itemsDefaultArgs> = $Result.GetResult<Prisma.$itemsPayload, S>

  type itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemsCountAggregateInputType | true
    }

  export interface itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['items'], meta: { name: 'items' } }
    /**
     * Find zero or one Items that matches the filter.
     * @param {itemsFindUniqueArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itemsFindUniqueArgs>(args: SelectSubset<T, itemsFindUniqueArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {itemsFindUniqueOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindFirstArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itemsFindFirstArgs>(args?: SelectSubset<T, itemsFindFirstArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindFirstOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.items.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemsWithIdOnly = await prisma.items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends itemsFindManyArgs>(args?: SelectSubset<T, itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Items.
     * @param {itemsCreateArgs} args - Arguments to create a Items.
     * @example
     * // Create one Items
     * const Items = await prisma.items.create({
     *   data: {
     *     // ... data to create a Items
     *   }
     * })
     * 
     */
    create<T extends itemsCreateArgs>(args: SelectSubset<T, itemsCreateArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {itemsCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itemsCreateManyArgs>(args?: SelectSubset<T, itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {itemsCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemsWithIdOnly = await prisma.items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Items.
     * @param {itemsDeleteArgs} args - Arguments to delete one Items.
     * @example
     * // Delete one Items
     * const Items = await prisma.items.delete({
     *   where: {
     *     // ... filter to delete one Items
     *   }
     * })
     * 
     */
    delete<T extends itemsDeleteArgs>(args: SelectSubset<T, itemsDeleteArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Items.
     * @param {itemsUpdateArgs} args - Arguments to update one Items.
     * @example
     * // Update one Items
     * const items = await prisma.items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itemsUpdateArgs>(args: SelectSubset<T, itemsUpdateArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {itemsDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itemsDeleteManyArgs>(args?: SelectSubset<T, itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itemsUpdateManyArgs>(args: SelectSubset<T, itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {itemsUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemsWithIdOnly = await prisma.items.updateManyAndReturn({
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
    updateManyAndReturn<T extends itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Items.
     * @param {itemsUpsertArgs} args - Arguments to update or create a Items.
     * @example
     * // Update or create a Items
     * const items = await prisma.items.upsert({
     *   create: {
     *     // ... data to create a Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items we want to update
     *   }
     * })
     */
    upsert<T extends itemsUpsertArgs>(args: SelectSubset<T, itemsUpsertArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.items.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends itemsCountArgs>(
      args?: Subset<T, itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemsAggregateArgs>(args: Subset<T, ItemsAggregateArgs>): Prisma.PrismaPromise<GetItemsAggregateType<T>>

    /**
     * Group by Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsGroupByArgs} args - Group by arguments.
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
      T extends itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemsGroupByArgs['orderBy'] }
        : { orderBy?: itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the items model
   */
  readonly fields: itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends items$itemsArgs<ExtArgs> = {}>(args?: Subset<T, items$itemsArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_items<T extends items$other_itemsArgs<ExtArgs> = {}>(args?: Subset<T, items$other_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    titles<T extends items$titlesArgs<ExtArgs> = {}>(args?: Subset<T, items$titlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$titlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the items model
   */
  interface itemsFieldRefs {
    readonly id: FieldRef<"items", 'BigInt'>
    readonly created_at: FieldRef<"items", 'DateTime'>
    readonly label: FieldRef<"items", 'String'>
    readonly description: FieldRef<"items", 'String'>
    readonly comment: FieldRef<"items", 'String'>
    readonly parent: FieldRef<"items", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * items findUnique
   */
  export type itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items findUniqueOrThrow
   */
  export type itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items findFirst
   */
  export type itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items findFirstOrThrow
   */
  export type itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items findMany
   */
  export type itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items create
   */
  export type itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a items.
     */
    data?: XOR<itemsCreateInput, itemsUncheckedCreateInput>
  }

  /**
   * items createMany
   */
  export type itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many items.
     */
    data: itemsCreateManyInput | itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * items createManyAndReturn
   */
  export type itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * The data used to create many items.
     */
    data: itemsCreateManyInput | itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * items update
   */
  export type itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a items.
     */
    data: XOR<itemsUpdateInput, itemsUncheckedUpdateInput>
    /**
     * Choose, which items to update.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items updateMany
   */
  export type itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update items.
     */
    data: XOR<itemsUpdateManyMutationInput, itemsUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemsWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
  }

  /**
   * items updateManyAndReturn
   */
  export type itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * The data used to update items.
     */
    data: XOR<itemsUpdateManyMutationInput, itemsUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemsWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * items upsert
   */
  export type itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the items to update in case it exists.
     */
    where: itemsWhereUniqueInput
    /**
     * In case the items found by the `where` argument doesn't exist, create a new items with this data.
     */
    create: XOR<itemsCreateInput, itemsUncheckedCreateInput>
    /**
     * In case the items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemsUpdateInput, itemsUncheckedUpdateInput>
  }

  /**
   * items delete
   */
  export type itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter which items to delete.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items deleteMany
   */
  export type itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to delete
     */
    where?: itemsWhereInput
    /**
     * Limit how many items to delete.
     */
    limit?: number
  }

  /**
   * items.items
   */
  export type items$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    where?: itemsWhereInput
  }

  /**
   * items.other_items
   */
  export type items$other_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    where?: itemsWhereInput
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    cursor?: itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items.titles
   */
  export type items$titlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titles
     */
    select?: titlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titles
     */
    omit?: titlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: titlesInclude<ExtArgs> | null
    where?: titlesWhereInput
    orderBy?: titlesOrderByWithRelationInput | titlesOrderByWithRelationInput[]
    cursor?: titlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TitlesScalarFieldEnum | TitlesScalarFieldEnum[]
  }

  /**
   * items without action
   */
  export type itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
  }


  /**
   * Model titles
   */

  export type AggregateTitles = {
    _count: TitlesCountAggregateOutputType | null
    _avg: TitlesAvgAggregateOutputType | null
    _sum: TitlesSumAggregateOutputType | null
    _min: TitlesMinAggregateOutputType | null
    _max: TitlesMaxAggregateOutputType | null
  }

  export type TitlesAvgAggregateOutputType = {
    id: number | null
    item: number | null
  }

  export type TitlesSumAggregateOutputType = {
    id: bigint | null
    item: bigint | null
  }

  export type TitlesMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    item: bigint | null
    description: string | null
  }

  export type TitlesMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    item: bigint | null
    description: string | null
  }

  export type TitlesCountAggregateOutputType = {
    id: number
    created_at: number
    item: number
    description: number
    _all: number
  }


  export type TitlesAvgAggregateInputType = {
    id?: true
    item?: true
  }

  export type TitlesSumAggregateInputType = {
    id?: true
    item?: true
  }

  export type TitlesMinAggregateInputType = {
    id?: true
    created_at?: true
    item?: true
    description?: true
  }

  export type TitlesMaxAggregateInputType = {
    id?: true
    created_at?: true
    item?: true
    description?: true
  }

  export type TitlesCountAggregateInputType = {
    id?: true
    created_at?: true
    item?: true
    description?: true
    _all?: true
  }

  export type TitlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which titles to aggregate.
     */
    where?: titlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of titles to fetch.
     */
    orderBy?: titlesOrderByWithRelationInput | titlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: titlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` titles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` titles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned titles
    **/
    _count?: true | TitlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TitlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TitlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TitlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TitlesMaxAggregateInputType
  }

  export type GetTitlesAggregateType<T extends TitlesAggregateArgs> = {
        [P in keyof T & keyof AggregateTitles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTitles[P]>
      : GetScalarType<T[P], AggregateTitles[P]>
  }




  export type titlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: titlesWhereInput
    orderBy?: titlesOrderByWithAggregationInput | titlesOrderByWithAggregationInput[]
    by: TitlesScalarFieldEnum[] | TitlesScalarFieldEnum
    having?: titlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TitlesCountAggregateInputType | true
    _avg?: TitlesAvgAggregateInputType
    _sum?: TitlesSumAggregateInputType
    _min?: TitlesMinAggregateInputType
    _max?: TitlesMaxAggregateInputType
  }

  export type TitlesGroupByOutputType = {
    id: bigint
    created_at: Date
    item: bigint | null
    description: string | null
    _count: TitlesCountAggregateOutputType | null
    _avg: TitlesAvgAggregateOutputType | null
    _sum: TitlesSumAggregateOutputType | null
    _min: TitlesMinAggregateOutputType | null
    _max: TitlesMaxAggregateOutputType | null
  }

  type GetTitlesGroupByPayload<T extends titlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TitlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TitlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TitlesGroupByOutputType[P]>
            : GetScalarType<T[P], TitlesGroupByOutputType[P]>
        }
      >
    >


  export type titlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    item?: boolean
    description?: boolean
    items?: boolean | titles$itemsArgs<ExtArgs>
    values?: boolean | titles$valuesArgs<ExtArgs>
    _count?: boolean | TitlesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["titles"]>

  export type titlesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    item?: boolean
    description?: boolean
    items?: boolean | titles$itemsArgs<ExtArgs>
  }, ExtArgs["result"]["titles"]>

  export type titlesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    item?: boolean
    description?: boolean
    items?: boolean | titles$itemsArgs<ExtArgs>
  }, ExtArgs["result"]["titles"]>

  export type titlesSelectScalar = {
    id?: boolean
    created_at?: boolean
    item?: boolean
    description?: boolean
  }

  export type titlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "item" | "description", ExtArgs["result"]["titles"]>
  export type titlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | titles$itemsArgs<ExtArgs>
    values?: boolean | titles$valuesArgs<ExtArgs>
    _count?: boolean | TitlesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type titlesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | titles$itemsArgs<ExtArgs>
  }
  export type titlesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | titles$itemsArgs<ExtArgs>
  }

  export type $titlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "titles"
    objects: {
      items: Prisma.$itemsPayload<ExtArgs> | null
      values: Prisma.$valuesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      item: bigint | null
      description: string | null
    }, ExtArgs["result"]["titles"]>
    composites: {}
  }

  type titlesGetPayload<S extends boolean | null | undefined | titlesDefaultArgs> = $Result.GetResult<Prisma.$titlesPayload, S>

  type titlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<titlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TitlesCountAggregateInputType | true
    }

  export interface titlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['titles'], meta: { name: 'titles' } }
    /**
     * Find zero or one Titles that matches the filter.
     * @param {titlesFindUniqueArgs} args - Arguments to find a Titles
     * @example
     * // Get one Titles
     * const titles = await prisma.titles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends titlesFindUniqueArgs>(args: SelectSubset<T, titlesFindUniqueArgs<ExtArgs>>): Prisma__titlesClient<$Result.GetResult<Prisma.$titlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Titles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {titlesFindUniqueOrThrowArgs} args - Arguments to find a Titles
     * @example
     * // Get one Titles
     * const titles = await prisma.titles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends titlesFindUniqueOrThrowArgs>(args: SelectSubset<T, titlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__titlesClient<$Result.GetResult<Prisma.$titlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Titles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {titlesFindFirstArgs} args - Arguments to find a Titles
     * @example
     * // Get one Titles
     * const titles = await prisma.titles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends titlesFindFirstArgs>(args?: SelectSubset<T, titlesFindFirstArgs<ExtArgs>>): Prisma__titlesClient<$Result.GetResult<Prisma.$titlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Titles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {titlesFindFirstOrThrowArgs} args - Arguments to find a Titles
     * @example
     * // Get one Titles
     * const titles = await prisma.titles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends titlesFindFirstOrThrowArgs>(args?: SelectSubset<T, titlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__titlesClient<$Result.GetResult<Prisma.$titlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Titles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {titlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Titles
     * const titles = await prisma.titles.findMany()
     * 
     * // Get first 10 Titles
     * const titles = await prisma.titles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const titlesWithIdOnly = await prisma.titles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends titlesFindManyArgs>(args?: SelectSubset<T, titlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$titlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Titles.
     * @param {titlesCreateArgs} args - Arguments to create a Titles.
     * @example
     * // Create one Titles
     * const Titles = await prisma.titles.create({
     *   data: {
     *     // ... data to create a Titles
     *   }
     * })
     * 
     */
    create<T extends titlesCreateArgs>(args: SelectSubset<T, titlesCreateArgs<ExtArgs>>): Prisma__titlesClient<$Result.GetResult<Prisma.$titlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Titles.
     * @param {titlesCreateManyArgs} args - Arguments to create many Titles.
     * @example
     * // Create many Titles
     * const titles = await prisma.titles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends titlesCreateManyArgs>(args?: SelectSubset<T, titlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Titles and returns the data saved in the database.
     * @param {titlesCreateManyAndReturnArgs} args - Arguments to create many Titles.
     * @example
     * // Create many Titles
     * const titles = await prisma.titles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Titles and only return the `id`
     * const titlesWithIdOnly = await prisma.titles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends titlesCreateManyAndReturnArgs>(args?: SelectSubset<T, titlesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$titlesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Titles.
     * @param {titlesDeleteArgs} args - Arguments to delete one Titles.
     * @example
     * // Delete one Titles
     * const Titles = await prisma.titles.delete({
     *   where: {
     *     // ... filter to delete one Titles
     *   }
     * })
     * 
     */
    delete<T extends titlesDeleteArgs>(args: SelectSubset<T, titlesDeleteArgs<ExtArgs>>): Prisma__titlesClient<$Result.GetResult<Prisma.$titlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Titles.
     * @param {titlesUpdateArgs} args - Arguments to update one Titles.
     * @example
     * // Update one Titles
     * const titles = await prisma.titles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends titlesUpdateArgs>(args: SelectSubset<T, titlesUpdateArgs<ExtArgs>>): Prisma__titlesClient<$Result.GetResult<Prisma.$titlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Titles.
     * @param {titlesDeleteManyArgs} args - Arguments to filter Titles to delete.
     * @example
     * // Delete a few Titles
     * const { count } = await prisma.titles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends titlesDeleteManyArgs>(args?: SelectSubset<T, titlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Titles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {titlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Titles
     * const titles = await prisma.titles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends titlesUpdateManyArgs>(args: SelectSubset<T, titlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Titles and returns the data updated in the database.
     * @param {titlesUpdateManyAndReturnArgs} args - Arguments to update many Titles.
     * @example
     * // Update many Titles
     * const titles = await prisma.titles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Titles and only return the `id`
     * const titlesWithIdOnly = await prisma.titles.updateManyAndReturn({
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
    updateManyAndReturn<T extends titlesUpdateManyAndReturnArgs>(args: SelectSubset<T, titlesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$titlesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Titles.
     * @param {titlesUpsertArgs} args - Arguments to update or create a Titles.
     * @example
     * // Update or create a Titles
     * const titles = await prisma.titles.upsert({
     *   create: {
     *     // ... data to create a Titles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Titles we want to update
     *   }
     * })
     */
    upsert<T extends titlesUpsertArgs>(args: SelectSubset<T, titlesUpsertArgs<ExtArgs>>): Prisma__titlesClient<$Result.GetResult<Prisma.$titlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Titles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {titlesCountArgs} args - Arguments to filter Titles to count.
     * @example
     * // Count the number of Titles
     * const count = await prisma.titles.count({
     *   where: {
     *     // ... the filter for the Titles we want to count
     *   }
     * })
    **/
    count<T extends titlesCountArgs>(
      args?: Subset<T, titlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TitlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Titles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TitlesAggregateArgs>(args: Subset<T, TitlesAggregateArgs>): Prisma.PrismaPromise<GetTitlesAggregateType<T>>

    /**
     * Group by Titles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {titlesGroupByArgs} args - Group by arguments.
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
      T extends titlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: titlesGroupByArgs['orderBy'] }
        : { orderBy?: titlesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, titlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTitlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the titles model
   */
  readonly fields: titlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for titles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__titlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends titles$itemsArgs<ExtArgs> = {}>(args?: Subset<T, titles$itemsArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    values<T extends titles$valuesArgs<ExtArgs> = {}>(args?: Subset<T, titles$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$valuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the titles model
   */
  interface titlesFieldRefs {
    readonly id: FieldRef<"titles", 'BigInt'>
    readonly created_at: FieldRef<"titles", 'DateTime'>
    readonly item: FieldRef<"titles", 'BigInt'>
    readonly description: FieldRef<"titles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * titles findUnique
   */
  export type titlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titles
     */
    select?: titlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titles
     */
    omit?: titlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: titlesInclude<ExtArgs> | null
    /**
     * Filter, which titles to fetch.
     */
    where: titlesWhereUniqueInput
  }

  /**
   * titles findUniqueOrThrow
   */
  export type titlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titles
     */
    select?: titlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titles
     */
    omit?: titlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: titlesInclude<ExtArgs> | null
    /**
     * Filter, which titles to fetch.
     */
    where: titlesWhereUniqueInput
  }

  /**
   * titles findFirst
   */
  export type titlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titles
     */
    select?: titlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titles
     */
    omit?: titlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: titlesInclude<ExtArgs> | null
    /**
     * Filter, which titles to fetch.
     */
    where?: titlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of titles to fetch.
     */
    orderBy?: titlesOrderByWithRelationInput | titlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for titles.
     */
    cursor?: titlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` titles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` titles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of titles.
     */
    distinct?: TitlesScalarFieldEnum | TitlesScalarFieldEnum[]
  }

  /**
   * titles findFirstOrThrow
   */
  export type titlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titles
     */
    select?: titlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titles
     */
    omit?: titlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: titlesInclude<ExtArgs> | null
    /**
     * Filter, which titles to fetch.
     */
    where?: titlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of titles to fetch.
     */
    orderBy?: titlesOrderByWithRelationInput | titlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for titles.
     */
    cursor?: titlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` titles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` titles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of titles.
     */
    distinct?: TitlesScalarFieldEnum | TitlesScalarFieldEnum[]
  }

  /**
   * titles findMany
   */
  export type titlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titles
     */
    select?: titlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titles
     */
    omit?: titlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: titlesInclude<ExtArgs> | null
    /**
     * Filter, which titles to fetch.
     */
    where?: titlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of titles to fetch.
     */
    orderBy?: titlesOrderByWithRelationInput | titlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing titles.
     */
    cursor?: titlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` titles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` titles.
     */
    skip?: number
    distinct?: TitlesScalarFieldEnum | TitlesScalarFieldEnum[]
  }

  /**
   * titles create
   */
  export type titlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titles
     */
    select?: titlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titles
     */
    omit?: titlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: titlesInclude<ExtArgs> | null
    /**
     * The data needed to create a titles.
     */
    data?: XOR<titlesCreateInput, titlesUncheckedCreateInput>
  }

  /**
   * titles createMany
   */
  export type titlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many titles.
     */
    data: titlesCreateManyInput | titlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * titles createManyAndReturn
   */
  export type titlesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titles
     */
    select?: titlesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the titles
     */
    omit?: titlesOmit<ExtArgs> | null
    /**
     * The data used to create many titles.
     */
    data: titlesCreateManyInput | titlesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: titlesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * titles update
   */
  export type titlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titles
     */
    select?: titlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titles
     */
    omit?: titlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: titlesInclude<ExtArgs> | null
    /**
     * The data needed to update a titles.
     */
    data: XOR<titlesUpdateInput, titlesUncheckedUpdateInput>
    /**
     * Choose, which titles to update.
     */
    where: titlesWhereUniqueInput
  }

  /**
   * titles updateMany
   */
  export type titlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update titles.
     */
    data: XOR<titlesUpdateManyMutationInput, titlesUncheckedUpdateManyInput>
    /**
     * Filter which titles to update
     */
    where?: titlesWhereInput
    /**
     * Limit how many titles to update.
     */
    limit?: number
  }

  /**
   * titles updateManyAndReturn
   */
  export type titlesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titles
     */
    select?: titlesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the titles
     */
    omit?: titlesOmit<ExtArgs> | null
    /**
     * The data used to update titles.
     */
    data: XOR<titlesUpdateManyMutationInput, titlesUncheckedUpdateManyInput>
    /**
     * Filter which titles to update
     */
    where?: titlesWhereInput
    /**
     * Limit how many titles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: titlesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * titles upsert
   */
  export type titlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titles
     */
    select?: titlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titles
     */
    omit?: titlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: titlesInclude<ExtArgs> | null
    /**
     * The filter to search for the titles to update in case it exists.
     */
    where: titlesWhereUniqueInput
    /**
     * In case the titles found by the `where` argument doesn't exist, create a new titles with this data.
     */
    create: XOR<titlesCreateInput, titlesUncheckedCreateInput>
    /**
     * In case the titles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<titlesUpdateInput, titlesUncheckedUpdateInput>
  }

  /**
   * titles delete
   */
  export type titlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titles
     */
    select?: titlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titles
     */
    omit?: titlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: titlesInclude<ExtArgs> | null
    /**
     * Filter which titles to delete.
     */
    where: titlesWhereUniqueInput
  }

  /**
   * titles deleteMany
   */
  export type titlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which titles to delete
     */
    where?: titlesWhereInput
    /**
     * Limit how many titles to delete.
     */
    limit?: number
  }

  /**
   * titles.items
   */
  export type titles$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    where?: itemsWhereInput
  }

  /**
   * titles.values
   */
  export type titles$valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the values
     */
    select?: valuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the values
     */
    omit?: valuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valuesInclude<ExtArgs> | null
    where?: valuesWhereInput
    orderBy?: valuesOrderByWithRelationInput | valuesOrderByWithRelationInput[]
    cursor?: valuesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValuesScalarFieldEnum | ValuesScalarFieldEnum[]
  }

  /**
   * titles without action
   */
  export type titlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the titles
     */
    select?: titlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the titles
     */
    omit?: titlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: titlesInclude<ExtArgs> | null
  }


  /**
   * Model values
   */

  export type AggregateValues = {
    _count: ValuesCountAggregateOutputType | null
    _avg: ValuesAvgAggregateOutputType | null
    _sum: ValuesSumAggregateOutputType | null
    _min: ValuesMinAggregateOutputType | null
    _max: ValuesMaxAggregateOutputType | null
  }

  export type ValuesAvgAggregateOutputType = {
    function: number | null
    title: number | null
    should: number | null
    chapter: number | null
    plan: number | null
  }

  export type ValuesSumAggregateOutputType = {
    function: bigint | null
    title: bigint | null
    should: bigint | null
    chapter: bigint | null
    plan: bigint | null
  }

  export type ValuesMinAggregateOutputType = {
    date: Date | null
    is_flexible: boolean | null
    function: bigint | null
    title: bigint | null
    created_at: Date | null
    should: bigint | null
    is_expense: boolean | null
    expense_revenue_type: string | null
    expense_revenue_description: string | null
    group: string | null
    group_description: string | null
    chapter: bigint | null
    chapter_description: string | null
    plan: bigint | null
    plan_description: string | null
  }

  export type ValuesMaxAggregateOutputType = {
    date: Date | null
    is_flexible: boolean | null
    function: bigint | null
    title: bigint | null
    created_at: Date | null
    should: bigint | null
    is_expense: boolean | null
    expense_revenue_type: string | null
    expense_revenue_description: string | null
    group: string | null
    group_description: string | null
    chapter: bigint | null
    chapter_description: string | null
    plan: bigint | null
    plan_description: string | null
  }

  export type ValuesCountAggregateOutputType = {
    date: number
    is_flexible: number
    function: number
    title: number
    created_at: number
    should: number
    is_expense: number
    expense_revenue_type: number
    expense_revenue_description: number
    group: number
    group_description: number
    chapter: number
    chapter_description: number
    plan: number
    plan_description: number
    _all: number
  }


  export type ValuesAvgAggregateInputType = {
    function?: true
    title?: true
    should?: true
    chapter?: true
    plan?: true
  }

  export type ValuesSumAggregateInputType = {
    function?: true
    title?: true
    should?: true
    chapter?: true
    plan?: true
  }

  export type ValuesMinAggregateInputType = {
    date?: true
    is_flexible?: true
    function?: true
    title?: true
    created_at?: true
    should?: true
    is_expense?: true
    expense_revenue_type?: true
    expense_revenue_description?: true
    group?: true
    group_description?: true
    chapter?: true
    chapter_description?: true
    plan?: true
    plan_description?: true
  }

  export type ValuesMaxAggregateInputType = {
    date?: true
    is_flexible?: true
    function?: true
    title?: true
    created_at?: true
    should?: true
    is_expense?: true
    expense_revenue_type?: true
    expense_revenue_description?: true
    group?: true
    group_description?: true
    chapter?: true
    chapter_description?: true
    plan?: true
    plan_description?: true
  }

  export type ValuesCountAggregateInputType = {
    date?: true
    is_flexible?: true
    function?: true
    title?: true
    created_at?: true
    should?: true
    is_expense?: true
    expense_revenue_type?: true
    expense_revenue_description?: true
    group?: true
    group_description?: true
    chapter?: true
    chapter_description?: true
    plan?: true
    plan_description?: true
    _all?: true
  }

  export type ValuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which values to aggregate.
     */
    where?: valuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of values to fetch.
     */
    orderBy?: valuesOrderByWithRelationInput | valuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: valuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned values
    **/
    _count?: true | ValuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValuesMaxAggregateInputType
  }

  export type GetValuesAggregateType<T extends ValuesAggregateArgs> = {
        [P in keyof T & keyof AggregateValues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValues[P]>
      : GetScalarType<T[P], AggregateValues[P]>
  }




  export type valuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: valuesWhereInput
    orderBy?: valuesOrderByWithAggregationInput | valuesOrderByWithAggregationInput[]
    by: ValuesScalarFieldEnum[] | ValuesScalarFieldEnum
    having?: valuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValuesCountAggregateInputType | true
    _avg?: ValuesAvgAggregateInputType
    _sum?: ValuesSumAggregateInputType
    _min?: ValuesMinAggregateInputType
    _max?: ValuesMaxAggregateInputType
  }

  export type ValuesGroupByOutputType = {
    date: Date
    is_flexible: boolean | null
    function: bigint | null
    title: bigint
    created_at: Date
    should: bigint | null
    is_expense: boolean
    expense_revenue_type: string | null
    expense_revenue_description: string | null
    group: string | null
    group_description: string | null
    chapter: bigint | null
    chapter_description: string | null
    plan: bigint | null
    plan_description: string | null
    _count: ValuesCountAggregateOutputType | null
    _avg: ValuesAvgAggregateOutputType | null
    _sum: ValuesSumAggregateOutputType | null
    _min: ValuesMinAggregateOutputType | null
    _max: ValuesMaxAggregateOutputType | null
  }

  type GetValuesGroupByPayload<T extends valuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValuesGroupByOutputType[P]>
            : GetScalarType<T[P], ValuesGroupByOutputType[P]>
        }
      >
    >


  export type valuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    is_flexible?: boolean
    function?: boolean
    title?: boolean
    created_at?: boolean
    should?: boolean
    is_expense?: boolean
    expense_revenue_type?: boolean
    expense_revenue_description?: boolean
    group?: boolean
    group_description?: boolean
    chapter?: boolean
    chapter_description?: boolean
    plan?: boolean
    plan_description?: boolean
    titles?: boolean | titlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["values"]>

  export type valuesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    is_flexible?: boolean
    function?: boolean
    title?: boolean
    created_at?: boolean
    should?: boolean
    is_expense?: boolean
    expense_revenue_type?: boolean
    expense_revenue_description?: boolean
    group?: boolean
    group_description?: boolean
    chapter?: boolean
    chapter_description?: boolean
    plan?: boolean
    plan_description?: boolean
    titles?: boolean | titlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["values"]>

  export type valuesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    is_flexible?: boolean
    function?: boolean
    title?: boolean
    created_at?: boolean
    should?: boolean
    is_expense?: boolean
    expense_revenue_type?: boolean
    expense_revenue_description?: boolean
    group?: boolean
    group_description?: boolean
    chapter?: boolean
    chapter_description?: boolean
    plan?: boolean
    plan_description?: boolean
    titles?: boolean | titlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["values"]>

  export type valuesSelectScalar = {
    date?: boolean
    is_flexible?: boolean
    function?: boolean
    title?: boolean
    created_at?: boolean
    should?: boolean
    is_expense?: boolean
    expense_revenue_type?: boolean
    expense_revenue_description?: boolean
    group?: boolean
    group_description?: boolean
    chapter?: boolean
    chapter_description?: boolean
    plan?: boolean
    plan_description?: boolean
  }

  export type valuesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"date" | "is_flexible" | "function" | "title" | "created_at" | "should" | "is_expense" | "expense_revenue_type" | "expense_revenue_description" | "group" | "group_description" | "chapter" | "chapter_description" | "plan" | "plan_description", ExtArgs["result"]["values"]>
  export type valuesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    titles?: boolean | titlesDefaultArgs<ExtArgs>
  }
  export type valuesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    titles?: boolean | titlesDefaultArgs<ExtArgs>
  }
  export type valuesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    titles?: boolean | titlesDefaultArgs<ExtArgs>
  }

  export type $valuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "values"
    objects: {
      titles: Prisma.$titlesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      date: Date
      is_flexible: boolean | null
      function: bigint | null
      title: bigint
      created_at: Date
      should: bigint | null
      is_expense: boolean
      expense_revenue_type: string | null
      expense_revenue_description: string | null
      group: string | null
      group_description: string | null
      chapter: bigint | null
      chapter_description: string | null
      plan: bigint | null
      plan_description: string | null
    }, ExtArgs["result"]["values"]>
    composites: {}
  }

  type valuesGetPayload<S extends boolean | null | undefined | valuesDefaultArgs> = $Result.GetResult<Prisma.$valuesPayload, S>

  type valuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<valuesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValuesCountAggregateInputType | true
    }

  export interface valuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['values'], meta: { name: 'values' } }
    /**
     * Find zero or one Values that matches the filter.
     * @param {valuesFindUniqueArgs} args - Arguments to find a Values
     * @example
     * // Get one Values
     * const values = await prisma.values.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends valuesFindUniqueArgs>(args: SelectSubset<T, valuesFindUniqueArgs<ExtArgs>>): Prisma__valuesClient<$Result.GetResult<Prisma.$valuesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Values that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {valuesFindUniqueOrThrowArgs} args - Arguments to find a Values
     * @example
     * // Get one Values
     * const values = await prisma.values.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends valuesFindUniqueOrThrowArgs>(args: SelectSubset<T, valuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__valuesClient<$Result.GetResult<Prisma.$valuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Values that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valuesFindFirstArgs} args - Arguments to find a Values
     * @example
     * // Get one Values
     * const values = await prisma.values.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends valuesFindFirstArgs>(args?: SelectSubset<T, valuesFindFirstArgs<ExtArgs>>): Prisma__valuesClient<$Result.GetResult<Prisma.$valuesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Values that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valuesFindFirstOrThrowArgs} args - Arguments to find a Values
     * @example
     * // Get one Values
     * const values = await prisma.values.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends valuesFindFirstOrThrowArgs>(args?: SelectSubset<T, valuesFindFirstOrThrowArgs<ExtArgs>>): Prisma__valuesClient<$Result.GetResult<Prisma.$valuesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Values that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valuesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Values
     * const values = await prisma.values.findMany()
     * 
     * // Get first 10 Values
     * const values = await prisma.values.findMany({ take: 10 })
     * 
     * // Only select the `date`
     * const valuesWithDateOnly = await prisma.values.findMany({ select: { date: true } })
     * 
     */
    findMany<T extends valuesFindManyArgs>(args?: SelectSubset<T, valuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$valuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Values.
     * @param {valuesCreateArgs} args - Arguments to create a Values.
     * @example
     * // Create one Values
     * const Values = await prisma.values.create({
     *   data: {
     *     // ... data to create a Values
     *   }
     * })
     * 
     */
    create<T extends valuesCreateArgs>(args: SelectSubset<T, valuesCreateArgs<ExtArgs>>): Prisma__valuesClient<$Result.GetResult<Prisma.$valuesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Values.
     * @param {valuesCreateManyArgs} args - Arguments to create many Values.
     * @example
     * // Create many Values
     * const values = await prisma.values.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends valuesCreateManyArgs>(args?: SelectSubset<T, valuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Values and returns the data saved in the database.
     * @param {valuesCreateManyAndReturnArgs} args - Arguments to create many Values.
     * @example
     * // Create many Values
     * const values = await prisma.values.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Values and only return the `date`
     * const valuesWithDateOnly = await prisma.values.createManyAndReturn({
     *   select: { date: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends valuesCreateManyAndReturnArgs>(args?: SelectSubset<T, valuesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$valuesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Values.
     * @param {valuesDeleteArgs} args - Arguments to delete one Values.
     * @example
     * // Delete one Values
     * const Values = await prisma.values.delete({
     *   where: {
     *     // ... filter to delete one Values
     *   }
     * })
     * 
     */
    delete<T extends valuesDeleteArgs>(args: SelectSubset<T, valuesDeleteArgs<ExtArgs>>): Prisma__valuesClient<$Result.GetResult<Prisma.$valuesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Values.
     * @param {valuesUpdateArgs} args - Arguments to update one Values.
     * @example
     * // Update one Values
     * const values = await prisma.values.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends valuesUpdateArgs>(args: SelectSubset<T, valuesUpdateArgs<ExtArgs>>): Prisma__valuesClient<$Result.GetResult<Prisma.$valuesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Values.
     * @param {valuesDeleteManyArgs} args - Arguments to filter Values to delete.
     * @example
     * // Delete a few Values
     * const { count } = await prisma.values.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends valuesDeleteManyArgs>(args?: SelectSubset<T, valuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Values
     * const values = await prisma.values.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends valuesUpdateManyArgs>(args: SelectSubset<T, valuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Values and returns the data updated in the database.
     * @param {valuesUpdateManyAndReturnArgs} args - Arguments to update many Values.
     * @example
     * // Update many Values
     * const values = await prisma.values.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Values and only return the `date`
     * const valuesWithDateOnly = await prisma.values.updateManyAndReturn({
     *   select: { date: true },
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
    updateManyAndReturn<T extends valuesUpdateManyAndReturnArgs>(args: SelectSubset<T, valuesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$valuesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Values.
     * @param {valuesUpsertArgs} args - Arguments to update or create a Values.
     * @example
     * // Update or create a Values
     * const values = await prisma.values.upsert({
     *   create: {
     *     // ... data to create a Values
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Values we want to update
     *   }
     * })
     */
    upsert<T extends valuesUpsertArgs>(args: SelectSubset<T, valuesUpsertArgs<ExtArgs>>): Prisma__valuesClient<$Result.GetResult<Prisma.$valuesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valuesCountArgs} args - Arguments to filter Values to count.
     * @example
     * // Count the number of Values
     * const count = await prisma.values.count({
     *   where: {
     *     // ... the filter for the Values we want to count
     *   }
     * })
    **/
    count<T extends valuesCountArgs>(
      args?: Subset<T, valuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ValuesAggregateArgs>(args: Subset<T, ValuesAggregateArgs>): Prisma.PrismaPromise<GetValuesAggregateType<T>>

    /**
     * Group by Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valuesGroupByArgs} args - Group by arguments.
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
      T extends valuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: valuesGroupByArgs['orderBy'] }
        : { orderBy?: valuesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, valuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the values model
   */
  readonly fields: valuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for values.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__valuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    titles<T extends titlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, titlesDefaultArgs<ExtArgs>>): Prisma__titlesClient<$Result.GetResult<Prisma.$titlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the values model
   */
  interface valuesFieldRefs {
    readonly date: FieldRef<"values", 'DateTime'>
    readonly is_flexible: FieldRef<"values", 'Boolean'>
    readonly function: FieldRef<"values", 'BigInt'>
    readonly title: FieldRef<"values", 'BigInt'>
    readonly created_at: FieldRef<"values", 'DateTime'>
    readonly should: FieldRef<"values", 'BigInt'>
    readonly is_expense: FieldRef<"values", 'Boolean'>
    readonly expense_revenue_type: FieldRef<"values", 'String'>
    readonly expense_revenue_description: FieldRef<"values", 'String'>
    readonly group: FieldRef<"values", 'String'>
    readonly group_description: FieldRef<"values", 'String'>
    readonly chapter: FieldRef<"values", 'BigInt'>
    readonly chapter_description: FieldRef<"values", 'String'>
    readonly plan: FieldRef<"values", 'BigInt'>
    readonly plan_description: FieldRef<"values", 'String'>
  }
    

  // Custom InputTypes
  /**
   * values findUnique
   */
  export type valuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the values
     */
    select?: valuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the values
     */
    omit?: valuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valuesInclude<ExtArgs> | null
    /**
     * Filter, which values to fetch.
     */
    where: valuesWhereUniqueInput
  }

  /**
   * values findUniqueOrThrow
   */
  export type valuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the values
     */
    select?: valuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the values
     */
    omit?: valuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valuesInclude<ExtArgs> | null
    /**
     * Filter, which values to fetch.
     */
    where: valuesWhereUniqueInput
  }

  /**
   * values findFirst
   */
  export type valuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the values
     */
    select?: valuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the values
     */
    omit?: valuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valuesInclude<ExtArgs> | null
    /**
     * Filter, which values to fetch.
     */
    where?: valuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of values to fetch.
     */
    orderBy?: valuesOrderByWithRelationInput | valuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for values.
     */
    cursor?: valuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of values.
     */
    distinct?: ValuesScalarFieldEnum | ValuesScalarFieldEnum[]
  }

  /**
   * values findFirstOrThrow
   */
  export type valuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the values
     */
    select?: valuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the values
     */
    omit?: valuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valuesInclude<ExtArgs> | null
    /**
     * Filter, which values to fetch.
     */
    where?: valuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of values to fetch.
     */
    orderBy?: valuesOrderByWithRelationInput | valuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for values.
     */
    cursor?: valuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of values.
     */
    distinct?: ValuesScalarFieldEnum | ValuesScalarFieldEnum[]
  }

  /**
   * values findMany
   */
  export type valuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the values
     */
    select?: valuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the values
     */
    omit?: valuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valuesInclude<ExtArgs> | null
    /**
     * Filter, which values to fetch.
     */
    where?: valuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of values to fetch.
     */
    orderBy?: valuesOrderByWithRelationInput | valuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing values.
     */
    cursor?: valuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` values.
     */
    skip?: number
    distinct?: ValuesScalarFieldEnum | ValuesScalarFieldEnum[]
  }

  /**
   * values create
   */
  export type valuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the values
     */
    select?: valuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the values
     */
    omit?: valuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valuesInclude<ExtArgs> | null
    /**
     * The data needed to create a values.
     */
    data: XOR<valuesCreateInput, valuesUncheckedCreateInput>
  }

  /**
   * values createMany
   */
  export type valuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many values.
     */
    data: valuesCreateManyInput | valuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * values createManyAndReturn
   */
  export type valuesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the values
     */
    select?: valuesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the values
     */
    omit?: valuesOmit<ExtArgs> | null
    /**
     * The data used to create many values.
     */
    data: valuesCreateManyInput | valuesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valuesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * values update
   */
  export type valuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the values
     */
    select?: valuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the values
     */
    omit?: valuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valuesInclude<ExtArgs> | null
    /**
     * The data needed to update a values.
     */
    data: XOR<valuesUpdateInput, valuesUncheckedUpdateInput>
    /**
     * Choose, which values to update.
     */
    where: valuesWhereUniqueInput
  }

  /**
   * values updateMany
   */
  export type valuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update values.
     */
    data: XOR<valuesUpdateManyMutationInput, valuesUncheckedUpdateManyInput>
    /**
     * Filter which values to update
     */
    where?: valuesWhereInput
    /**
     * Limit how many values to update.
     */
    limit?: number
  }

  /**
   * values updateManyAndReturn
   */
  export type valuesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the values
     */
    select?: valuesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the values
     */
    omit?: valuesOmit<ExtArgs> | null
    /**
     * The data used to update values.
     */
    data: XOR<valuesUpdateManyMutationInput, valuesUncheckedUpdateManyInput>
    /**
     * Filter which values to update
     */
    where?: valuesWhereInput
    /**
     * Limit how many values to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valuesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * values upsert
   */
  export type valuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the values
     */
    select?: valuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the values
     */
    omit?: valuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valuesInclude<ExtArgs> | null
    /**
     * The filter to search for the values to update in case it exists.
     */
    where: valuesWhereUniqueInput
    /**
     * In case the values found by the `where` argument doesn't exist, create a new values with this data.
     */
    create: XOR<valuesCreateInput, valuesUncheckedCreateInput>
    /**
     * In case the values was found with the provided `where` argument, update it with this data.
     */
    update: XOR<valuesUpdateInput, valuesUncheckedUpdateInput>
  }

  /**
   * values delete
   */
  export type valuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the values
     */
    select?: valuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the values
     */
    omit?: valuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valuesInclude<ExtArgs> | null
    /**
     * Filter which values to delete.
     */
    where: valuesWhereUniqueInput
  }

  /**
   * values deleteMany
   */
  export type valuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which values to delete
     */
    where?: valuesWhereInput
    /**
     * Limit how many values to delete.
     */
    limit?: number
  }

  /**
   * values without action
   */
  export type valuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the values
     */
    select?: valuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the values
     */
    omit?: valuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valuesInclude<ExtArgs> | null
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


  export const ItemsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    label: 'label',
    description: 'description',
    comment: 'comment',
    parent: 'parent'
  };

  export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum]


  export const TitlesScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    item: 'item',
    description: 'description'
  };

  export type TitlesScalarFieldEnum = (typeof TitlesScalarFieldEnum)[keyof typeof TitlesScalarFieldEnum]


  export const ValuesScalarFieldEnum: {
    date: 'date',
    is_flexible: 'is_flexible',
    function: 'function',
    title: 'title',
    created_at: 'created_at',
    should: 'should',
    is_expense: 'is_expense',
    expense_revenue_type: 'expense_revenue_type',
    expense_revenue_description: 'expense_revenue_description',
    group: 'group',
    group_description: 'group_description',
    chapter: 'chapter',
    chapter_description: 'chapter_description',
    plan: 'plan',
    plan_description: 'plan_description'
  };

  export type ValuesScalarFieldEnum = (typeof ValuesScalarFieldEnum)[keyof typeof ValuesScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type itemsWhereInput = {
    AND?: itemsWhereInput | itemsWhereInput[]
    OR?: itemsWhereInput[]
    NOT?: itemsWhereInput | itemsWhereInput[]
    id?: BigIntFilter<"items"> | bigint | number
    created_at?: DateTimeFilter<"items"> | Date | string
    label?: StringNullableFilter<"items"> | string | null
    description?: StringNullableFilter<"items"> | string | null
    comment?: StringNullableFilter<"items"> | string | null
    parent?: BigIntNullableFilter<"items"> | bigint | number | null
    items?: XOR<ItemsNullableScalarRelationFilter, itemsWhereInput> | null
    other_items?: ItemsListRelationFilter
    titles?: TitlesListRelationFilter
  }

  export type itemsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    label?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    parent?: SortOrderInput | SortOrder
    items?: itemsOrderByWithRelationInput
    other_items?: itemsOrderByRelationAggregateInput
    titles?: titlesOrderByRelationAggregateInput
  }

  export type itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: itemsWhereInput | itemsWhereInput[]
    OR?: itemsWhereInput[]
    NOT?: itemsWhereInput | itemsWhereInput[]
    created_at?: DateTimeFilter<"items"> | Date | string
    label?: StringNullableFilter<"items"> | string | null
    description?: StringNullableFilter<"items"> | string | null
    comment?: StringNullableFilter<"items"> | string | null
    parent?: BigIntNullableFilter<"items"> | bigint | number | null
    items?: XOR<ItemsNullableScalarRelationFilter, itemsWhereInput> | null
    other_items?: ItemsListRelationFilter
    titles?: TitlesListRelationFilter
  }, "id">

  export type itemsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    label?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    parent?: SortOrderInput | SortOrder
    _count?: itemsCountOrderByAggregateInput
    _avg?: itemsAvgOrderByAggregateInput
    _max?: itemsMaxOrderByAggregateInput
    _min?: itemsMinOrderByAggregateInput
    _sum?: itemsSumOrderByAggregateInput
  }

  export type itemsScalarWhereWithAggregatesInput = {
    AND?: itemsScalarWhereWithAggregatesInput | itemsScalarWhereWithAggregatesInput[]
    OR?: itemsScalarWhereWithAggregatesInput[]
    NOT?: itemsScalarWhereWithAggregatesInput | itemsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"items"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"items"> | Date | string
    label?: StringNullableWithAggregatesFilter<"items"> | string | null
    description?: StringNullableWithAggregatesFilter<"items"> | string | null
    comment?: StringNullableWithAggregatesFilter<"items"> | string | null
    parent?: BigIntNullableWithAggregatesFilter<"items"> | bigint | number | null
  }

  export type titlesWhereInput = {
    AND?: titlesWhereInput | titlesWhereInput[]
    OR?: titlesWhereInput[]
    NOT?: titlesWhereInput | titlesWhereInput[]
    id?: BigIntFilter<"titles"> | bigint | number
    created_at?: DateTimeFilter<"titles"> | Date | string
    item?: BigIntNullableFilter<"titles"> | bigint | number | null
    description?: StringNullableFilter<"titles"> | string | null
    items?: XOR<ItemsNullableScalarRelationFilter, itemsWhereInput> | null
    values?: ValuesListRelationFilter
  }

  export type titlesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    item?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    items?: itemsOrderByWithRelationInput
    values?: valuesOrderByRelationAggregateInput
  }

  export type titlesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: titlesWhereInput | titlesWhereInput[]
    OR?: titlesWhereInput[]
    NOT?: titlesWhereInput | titlesWhereInput[]
    created_at?: DateTimeFilter<"titles"> | Date | string
    item?: BigIntNullableFilter<"titles"> | bigint | number | null
    description?: StringNullableFilter<"titles"> | string | null
    items?: XOR<ItemsNullableScalarRelationFilter, itemsWhereInput> | null
    values?: ValuesListRelationFilter
  }, "id">

  export type titlesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    item?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: titlesCountOrderByAggregateInput
    _avg?: titlesAvgOrderByAggregateInput
    _max?: titlesMaxOrderByAggregateInput
    _min?: titlesMinOrderByAggregateInput
    _sum?: titlesSumOrderByAggregateInput
  }

  export type titlesScalarWhereWithAggregatesInput = {
    AND?: titlesScalarWhereWithAggregatesInput | titlesScalarWhereWithAggregatesInput[]
    OR?: titlesScalarWhereWithAggregatesInput[]
    NOT?: titlesScalarWhereWithAggregatesInput | titlesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"titles"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"titles"> | Date | string
    item?: BigIntNullableWithAggregatesFilter<"titles"> | bigint | number | null
    description?: StringNullableWithAggregatesFilter<"titles"> | string | null
  }

  export type valuesWhereInput = {
    AND?: valuesWhereInput | valuesWhereInput[]
    OR?: valuesWhereInput[]
    NOT?: valuesWhereInput | valuesWhereInput[]
    date?: DateTimeFilter<"values"> | Date | string
    is_flexible?: BoolNullableFilter<"values"> | boolean | null
    function?: BigIntNullableFilter<"values"> | bigint | number | null
    title?: BigIntFilter<"values"> | bigint | number
    created_at?: DateTimeFilter<"values"> | Date | string
    should?: BigIntNullableFilter<"values"> | bigint | number | null
    is_expense?: BoolFilter<"values"> | boolean
    expense_revenue_type?: StringNullableFilter<"values"> | string | null
    expense_revenue_description?: StringNullableFilter<"values"> | string | null
    group?: StringNullableFilter<"values"> | string | null
    group_description?: StringNullableFilter<"values"> | string | null
    chapter?: BigIntNullableFilter<"values"> | bigint | number | null
    chapter_description?: StringNullableFilter<"values"> | string | null
    plan?: BigIntNullableFilter<"values"> | bigint | number | null
    plan_description?: StringNullableFilter<"values"> | string | null
    titles?: XOR<TitlesScalarRelationFilter, titlesWhereInput>
  }

  export type valuesOrderByWithRelationInput = {
    date?: SortOrder
    is_flexible?: SortOrderInput | SortOrder
    function?: SortOrderInput | SortOrder
    title?: SortOrder
    created_at?: SortOrder
    should?: SortOrderInput | SortOrder
    is_expense?: SortOrder
    expense_revenue_type?: SortOrderInput | SortOrder
    expense_revenue_description?: SortOrderInput | SortOrder
    group?: SortOrderInput | SortOrder
    group_description?: SortOrderInput | SortOrder
    chapter?: SortOrderInput | SortOrder
    chapter_description?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
    plan_description?: SortOrderInput | SortOrder
    titles?: titlesOrderByWithRelationInput
  }

  export type valuesWhereUniqueInput = Prisma.AtLeast<{
    date_title?: valuesDateTitleCompoundUniqueInput
    AND?: valuesWhereInput | valuesWhereInput[]
    OR?: valuesWhereInput[]
    NOT?: valuesWhereInput | valuesWhereInput[]
    date?: DateTimeFilter<"values"> | Date | string
    is_flexible?: BoolNullableFilter<"values"> | boolean | null
    function?: BigIntNullableFilter<"values"> | bigint | number | null
    title?: BigIntFilter<"values"> | bigint | number
    created_at?: DateTimeFilter<"values"> | Date | string
    should?: BigIntNullableFilter<"values"> | bigint | number | null
    is_expense?: BoolFilter<"values"> | boolean
    expense_revenue_type?: StringNullableFilter<"values"> | string | null
    expense_revenue_description?: StringNullableFilter<"values"> | string | null
    group?: StringNullableFilter<"values"> | string | null
    group_description?: StringNullableFilter<"values"> | string | null
    chapter?: BigIntNullableFilter<"values"> | bigint | number | null
    chapter_description?: StringNullableFilter<"values"> | string | null
    plan?: BigIntNullableFilter<"values"> | bigint | number | null
    plan_description?: StringNullableFilter<"values"> | string | null
    titles?: XOR<TitlesScalarRelationFilter, titlesWhereInput>
  }, "date_title">

  export type valuesOrderByWithAggregationInput = {
    date?: SortOrder
    is_flexible?: SortOrderInput | SortOrder
    function?: SortOrderInput | SortOrder
    title?: SortOrder
    created_at?: SortOrder
    should?: SortOrderInput | SortOrder
    is_expense?: SortOrder
    expense_revenue_type?: SortOrderInput | SortOrder
    expense_revenue_description?: SortOrderInput | SortOrder
    group?: SortOrderInput | SortOrder
    group_description?: SortOrderInput | SortOrder
    chapter?: SortOrderInput | SortOrder
    chapter_description?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
    plan_description?: SortOrderInput | SortOrder
    _count?: valuesCountOrderByAggregateInput
    _avg?: valuesAvgOrderByAggregateInput
    _max?: valuesMaxOrderByAggregateInput
    _min?: valuesMinOrderByAggregateInput
    _sum?: valuesSumOrderByAggregateInput
  }

  export type valuesScalarWhereWithAggregatesInput = {
    AND?: valuesScalarWhereWithAggregatesInput | valuesScalarWhereWithAggregatesInput[]
    OR?: valuesScalarWhereWithAggregatesInput[]
    NOT?: valuesScalarWhereWithAggregatesInput | valuesScalarWhereWithAggregatesInput[]
    date?: DateTimeWithAggregatesFilter<"values"> | Date | string
    is_flexible?: BoolNullableWithAggregatesFilter<"values"> | boolean | null
    function?: BigIntNullableWithAggregatesFilter<"values"> | bigint | number | null
    title?: BigIntWithAggregatesFilter<"values"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"values"> | Date | string
    should?: BigIntNullableWithAggregatesFilter<"values"> | bigint | number | null
    is_expense?: BoolWithAggregatesFilter<"values"> | boolean
    expense_revenue_type?: StringNullableWithAggregatesFilter<"values"> | string | null
    expense_revenue_description?: StringNullableWithAggregatesFilter<"values"> | string | null
    group?: StringNullableWithAggregatesFilter<"values"> | string | null
    group_description?: StringNullableWithAggregatesFilter<"values"> | string | null
    chapter?: BigIntNullableWithAggregatesFilter<"values"> | bigint | number | null
    chapter_description?: StringNullableWithAggregatesFilter<"values"> | string | null
    plan?: BigIntNullableWithAggregatesFilter<"values"> | bigint | number | null
    plan_description?: StringNullableWithAggregatesFilter<"values"> | string | null
  }

  export type itemsCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    label?: string | null
    description?: string | null
    comment?: string | null
    items?: itemsCreateNestedOneWithoutOther_itemsInput
    other_items?: itemsCreateNestedManyWithoutItemsInput
    titles?: titlesCreateNestedManyWithoutItemsInput
  }

  export type itemsUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    label?: string | null
    description?: string | null
    comment?: string | null
    parent?: bigint | number | null
    other_items?: itemsUncheckedCreateNestedManyWithoutItemsInput
    titles?: titlesUncheckedCreateNestedManyWithoutItemsInput
  }

  export type itemsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemsUpdateOneWithoutOther_itemsNestedInput
    other_items?: itemsUpdateManyWithoutItemsNestedInput
    titles?: titlesUpdateManyWithoutItemsNestedInput
  }

  export type itemsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    other_items?: itemsUncheckedUpdateManyWithoutItemsNestedInput
    titles?: titlesUncheckedUpdateManyWithoutItemsNestedInput
  }

  export type itemsCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    label?: string | null
    description?: string | null
    comment?: string | null
    parent?: bigint | number | null
  }

  export type itemsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type itemsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type titlesCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    items?: itemsCreateNestedOneWithoutTitlesInput
    values?: valuesCreateNestedManyWithoutTitlesInput
  }

  export type titlesUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    item?: bigint | number | null
    description?: string | null
    values?: valuesUncheckedCreateNestedManyWithoutTitlesInput
  }

  export type titlesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemsUpdateOneWithoutTitlesNestedInput
    values?: valuesUpdateManyWithoutTitlesNestedInput
  }

  export type titlesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    values?: valuesUncheckedUpdateManyWithoutTitlesNestedInput
  }

  export type titlesCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    item?: bigint | number | null
    description?: string | null
  }

  export type titlesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type titlesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type valuesCreateInput = {
    date?: Date | string
    is_flexible?: boolean | null
    function?: bigint | number | null
    created_at?: Date | string
    should?: bigint | number | null
    is_expense: boolean
    expense_revenue_type?: string | null
    expense_revenue_description?: string | null
    group?: string | null
    group_description?: string | null
    chapter?: bigint | number | null
    chapter_description?: string | null
    plan?: bigint | number | null
    plan_description?: string | null
    titles: titlesCreateNestedOneWithoutValuesInput
  }

  export type valuesUncheckedCreateInput = {
    date?: Date | string
    is_flexible?: boolean | null
    function?: bigint | number | null
    title: bigint | number
    created_at?: Date | string
    should?: bigint | number | null
    is_expense: boolean
    expense_revenue_type?: string | null
    expense_revenue_description?: string | null
    group?: string | null
    group_description?: string | null
    chapter?: bigint | number | null
    chapter_description?: string | null
    plan?: bigint | number | null
    plan_description?: string | null
  }

  export type valuesUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_flexible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    function?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    should?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_expense?: BoolFieldUpdateOperationsInput | boolean
    expense_revenue_type?: NullableStringFieldUpdateOperationsInput | string | null
    expense_revenue_description?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    group_description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chapter_description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    titles?: titlesUpdateOneRequiredWithoutValuesNestedInput
  }

  export type valuesUncheckedUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_flexible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    function?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    should?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_expense?: BoolFieldUpdateOperationsInput | boolean
    expense_revenue_type?: NullableStringFieldUpdateOperationsInput | string | null
    expense_revenue_description?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    group_description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chapter_description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type valuesCreateManyInput = {
    date?: Date | string
    is_flexible?: boolean | null
    function?: bigint | number | null
    title: bigint | number
    created_at?: Date | string
    should?: bigint | number | null
    is_expense: boolean
    expense_revenue_type?: string | null
    expense_revenue_description?: string | null
    group?: string | null
    group_description?: string | null
    chapter?: bigint | number | null
    chapter_description?: string | null
    plan?: bigint | number | null
    plan_description?: string | null
  }

  export type valuesUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_flexible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    function?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    should?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_expense?: BoolFieldUpdateOperationsInput | boolean
    expense_revenue_type?: NullableStringFieldUpdateOperationsInput | string | null
    expense_revenue_description?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    group_description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chapter_description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type valuesUncheckedUpdateManyInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_flexible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    function?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    should?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_expense?: BoolFieldUpdateOperationsInput | boolean
    expense_revenue_type?: NullableStringFieldUpdateOperationsInput | string | null
    expense_revenue_description?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    group_description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chapter_description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type ItemsNullableScalarRelationFilter = {
    is?: itemsWhereInput | null
    isNot?: itemsWhereInput | null
  }

  export type ItemsListRelationFilter = {
    every?: itemsWhereInput
    some?: itemsWhereInput
    none?: itemsWhereInput
  }

  export type TitlesListRelationFilter = {
    every?: titlesWhereInput
    some?: titlesWhereInput
    none?: titlesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type titlesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type itemsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    label?: SortOrder
    description?: SortOrder
    comment?: SortOrder
    parent?: SortOrder
  }

  export type itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    parent?: SortOrder
  }

  export type itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    label?: SortOrder
    description?: SortOrder
    comment?: SortOrder
    parent?: SortOrder
  }

  export type itemsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    label?: SortOrder
    description?: SortOrder
    comment?: SortOrder
    parent?: SortOrder
  }

  export type itemsSumOrderByAggregateInput = {
    id?: SortOrder
    parent?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type ValuesListRelationFilter = {
    every?: valuesWhereInput
    some?: valuesWhereInput
    none?: valuesWhereInput
  }

  export type valuesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type titlesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    item?: SortOrder
    description?: SortOrder
  }

  export type titlesAvgOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
  }

  export type titlesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    item?: SortOrder
    description?: SortOrder
  }

  export type titlesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    item?: SortOrder
    description?: SortOrder
  }

  export type titlesSumOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TitlesScalarRelationFilter = {
    is?: titlesWhereInput
    isNot?: titlesWhereInput
  }

  export type valuesDateTitleCompoundUniqueInput = {
    date: Date | string
    title: bigint | number
  }

  export type valuesCountOrderByAggregateInput = {
    date?: SortOrder
    is_flexible?: SortOrder
    function?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    should?: SortOrder
    is_expense?: SortOrder
    expense_revenue_type?: SortOrder
    expense_revenue_description?: SortOrder
    group?: SortOrder
    group_description?: SortOrder
    chapter?: SortOrder
    chapter_description?: SortOrder
    plan?: SortOrder
    plan_description?: SortOrder
  }

  export type valuesAvgOrderByAggregateInput = {
    function?: SortOrder
    title?: SortOrder
    should?: SortOrder
    chapter?: SortOrder
    plan?: SortOrder
  }

  export type valuesMaxOrderByAggregateInput = {
    date?: SortOrder
    is_flexible?: SortOrder
    function?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    should?: SortOrder
    is_expense?: SortOrder
    expense_revenue_type?: SortOrder
    expense_revenue_description?: SortOrder
    group?: SortOrder
    group_description?: SortOrder
    chapter?: SortOrder
    chapter_description?: SortOrder
    plan?: SortOrder
    plan_description?: SortOrder
  }

  export type valuesMinOrderByAggregateInput = {
    date?: SortOrder
    is_flexible?: SortOrder
    function?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    should?: SortOrder
    is_expense?: SortOrder
    expense_revenue_type?: SortOrder
    expense_revenue_description?: SortOrder
    group?: SortOrder
    group_description?: SortOrder
    chapter?: SortOrder
    chapter_description?: SortOrder
    plan?: SortOrder
    plan_description?: SortOrder
  }

  export type valuesSumOrderByAggregateInput = {
    function?: SortOrder
    title?: SortOrder
    should?: SortOrder
    chapter?: SortOrder
    plan?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type itemsCreateNestedOneWithoutOther_itemsInput = {
    create?: XOR<itemsCreateWithoutOther_itemsInput, itemsUncheckedCreateWithoutOther_itemsInput>
    connectOrCreate?: itemsCreateOrConnectWithoutOther_itemsInput
    connect?: itemsWhereUniqueInput
  }

  export type itemsCreateNestedManyWithoutItemsInput = {
    create?: XOR<itemsCreateWithoutItemsInput, itemsUncheckedCreateWithoutItemsInput> | itemsCreateWithoutItemsInput[] | itemsUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutItemsInput | itemsCreateOrConnectWithoutItemsInput[]
    createMany?: itemsCreateManyItemsInputEnvelope
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
  }

  export type titlesCreateNestedManyWithoutItemsInput = {
    create?: XOR<titlesCreateWithoutItemsInput, titlesUncheckedCreateWithoutItemsInput> | titlesCreateWithoutItemsInput[] | titlesUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: titlesCreateOrConnectWithoutItemsInput | titlesCreateOrConnectWithoutItemsInput[]
    createMany?: titlesCreateManyItemsInputEnvelope
    connect?: titlesWhereUniqueInput | titlesWhereUniqueInput[]
  }

  export type itemsUncheckedCreateNestedManyWithoutItemsInput = {
    create?: XOR<itemsCreateWithoutItemsInput, itemsUncheckedCreateWithoutItemsInput> | itemsCreateWithoutItemsInput[] | itemsUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutItemsInput | itemsCreateOrConnectWithoutItemsInput[]
    createMany?: itemsCreateManyItemsInputEnvelope
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
  }

  export type titlesUncheckedCreateNestedManyWithoutItemsInput = {
    create?: XOR<titlesCreateWithoutItemsInput, titlesUncheckedCreateWithoutItemsInput> | titlesCreateWithoutItemsInput[] | titlesUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: titlesCreateOrConnectWithoutItemsInput | titlesCreateOrConnectWithoutItemsInput[]
    createMany?: titlesCreateManyItemsInputEnvelope
    connect?: titlesWhereUniqueInput | titlesWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type itemsUpdateOneWithoutOther_itemsNestedInput = {
    create?: XOR<itemsCreateWithoutOther_itemsInput, itemsUncheckedCreateWithoutOther_itemsInput>
    connectOrCreate?: itemsCreateOrConnectWithoutOther_itemsInput
    upsert?: itemsUpsertWithoutOther_itemsInput
    disconnect?: itemsWhereInput | boolean
    delete?: itemsWhereInput | boolean
    connect?: itemsWhereUniqueInput
    update?: XOR<XOR<itemsUpdateToOneWithWhereWithoutOther_itemsInput, itemsUpdateWithoutOther_itemsInput>, itemsUncheckedUpdateWithoutOther_itemsInput>
  }

  export type itemsUpdateManyWithoutItemsNestedInput = {
    create?: XOR<itemsCreateWithoutItemsInput, itemsUncheckedCreateWithoutItemsInput> | itemsCreateWithoutItemsInput[] | itemsUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutItemsInput | itemsCreateOrConnectWithoutItemsInput[]
    upsert?: itemsUpsertWithWhereUniqueWithoutItemsInput | itemsUpsertWithWhereUniqueWithoutItemsInput[]
    createMany?: itemsCreateManyItemsInputEnvelope
    set?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    disconnect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    delete?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    update?: itemsUpdateWithWhereUniqueWithoutItemsInput | itemsUpdateWithWhereUniqueWithoutItemsInput[]
    updateMany?: itemsUpdateManyWithWhereWithoutItemsInput | itemsUpdateManyWithWhereWithoutItemsInput[]
    deleteMany?: itemsScalarWhereInput | itemsScalarWhereInput[]
  }

  export type titlesUpdateManyWithoutItemsNestedInput = {
    create?: XOR<titlesCreateWithoutItemsInput, titlesUncheckedCreateWithoutItemsInput> | titlesCreateWithoutItemsInput[] | titlesUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: titlesCreateOrConnectWithoutItemsInput | titlesCreateOrConnectWithoutItemsInput[]
    upsert?: titlesUpsertWithWhereUniqueWithoutItemsInput | titlesUpsertWithWhereUniqueWithoutItemsInput[]
    createMany?: titlesCreateManyItemsInputEnvelope
    set?: titlesWhereUniqueInput | titlesWhereUniqueInput[]
    disconnect?: titlesWhereUniqueInput | titlesWhereUniqueInput[]
    delete?: titlesWhereUniqueInput | titlesWhereUniqueInput[]
    connect?: titlesWhereUniqueInput | titlesWhereUniqueInput[]
    update?: titlesUpdateWithWhereUniqueWithoutItemsInput | titlesUpdateWithWhereUniqueWithoutItemsInput[]
    updateMany?: titlesUpdateManyWithWhereWithoutItemsInput | titlesUpdateManyWithWhereWithoutItemsInput[]
    deleteMany?: titlesScalarWhereInput | titlesScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type itemsUncheckedUpdateManyWithoutItemsNestedInput = {
    create?: XOR<itemsCreateWithoutItemsInput, itemsUncheckedCreateWithoutItemsInput> | itemsCreateWithoutItemsInput[] | itemsUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutItemsInput | itemsCreateOrConnectWithoutItemsInput[]
    upsert?: itemsUpsertWithWhereUniqueWithoutItemsInput | itemsUpsertWithWhereUniqueWithoutItemsInput[]
    createMany?: itemsCreateManyItemsInputEnvelope
    set?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    disconnect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    delete?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    update?: itemsUpdateWithWhereUniqueWithoutItemsInput | itemsUpdateWithWhereUniqueWithoutItemsInput[]
    updateMany?: itemsUpdateManyWithWhereWithoutItemsInput | itemsUpdateManyWithWhereWithoutItemsInput[]
    deleteMany?: itemsScalarWhereInput | itemsScalarWhereInput[]
  }

  export type titlesUncheckedUpdateManyWithoutItemsNestedInput = {
    create?: XOR<titlesCreateWithoutItemsInput, titlesUncheckedCreateWithoutItemsInput> | titlesCreateWithoutItemsInput[] | titlesUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: titlesCreateOrConnectWithoutItemsInput | titlesCreateOrConnectWithoutItemsInput[]
    upsert?: titlesUpsertWithWhereUniqueWithoutItemsInput | titlesUpsertWithWhereUniqueWithoutItemsInput[]
    createMany?: titlesCreateManyItemsInputEnvelope
    set?: titlesWhereUniqueInput | titlesWhereUniqueInput[]
    disconnect?: titlesWhereUniqueInput | titlesWhereUniqueInput[]
    delete?: titlesWhereUniqueInput | titlesWhereUniqueInput[]
    connect?: titlesWhereUniqueInput | titlesWhereUniqueInput[]
    update?: titlesUpdateWithWhereUniqueWithoutItemsInput | titlesUpdateWithWhereUniqueWithoutItemsInput[]
    updateMany?: titlesUpdateManyWithWhereWithoutItemsInput | titlesUpdateManyWithWhereWithoutItemsInput[]
    deleteMany?: titlesScalarWhereInput | titlesScalarWhereInput[]
  }

  export type itemsCreateNestedOneWithoutTitlesInput = {
    create?: XOR<itemsCreateWithoutTitlesInput, itemsUncheckedCreateWithoutTitlesInput>
    connectOrCreate?: itemsCreateOrConnectWithoutTitlesInput
    connect?: itemsWhereUniqueInput
  }

  export type valuesCreateNestedManyWithoutTitlesInput = {
    create?: XOR<valuesCreateWithoutTitlesInput, valuesUncheckedCreateWithoutTitlesInput> | valuesCreateWithoutTitlesInput[] | valuesUncheckedCreateWithoutTitlesInput[]
    connectOrCreate?: valuesCreateOrConnectWithoutTitlesInput | valuesCreateOrConnectWithoutTitlesInput[]
    createMany?: valuesCreateManyTitlesInputEnvelope
    connect?: valuesWhereUniqueInput | valuesWhereUniqueInput[]
  }

  export type valuesUncheckedCreateNestedManyWithoutTitlesInput = {
    create?: XOR<valuesCreateWithoutTitlesInput, valuesUncheckedCreateWithoutTitlesInput> | valuesCreateWithoutTitlesInput[] | valuesUncheckedCreateWithoutTitlesInput[]
    connectOrCreate?: valuesCreateOrConnectWithoutTitlesInput | valuesCreateOrConnectWithoutTitlesInput[]
    createMany?: valuesCreateManyTitlesInputEnvelope
    connect?: valuesWhereUniqueInput | valuesWhereUniqueInput[]
  }

  export type itemsUpdateOneWithoutTitlesNestedInput = {
    create?: XOR<itemsCreateWithoutTitlesInput, itemsUncheckedCreateWithoutTitlesInput>
    connectOrCreate?: itemsCreateOrConnectWithoutTitlesInput
    upsert?: itemsUpsertWithoutTitlesInput
    disconnect?: itemsWhereInput | boolean
    delete?: itemsWhereInput | boolean
    connect?: itemsWhereUniqueInput
    update?: XOR<XOR<itemsUpdateToOneWithWhereWithoutTitlesInput, itemsUpdateWithoutTitlesInput>, itemsUncheckedUpdateWithoutTitlesInput>
  }

  export type valuesUpdateManyWithoutTitlesNestedInput = {
    create?: XOR<valuesCreateWithoutTitlesInput, valuesUncheckedCreateWithoutTitlesInput> | valuesCreateWithoutTitlesInput[] | valuesUncheckedCreateWithoutTitlesInput[]
    connectOrCreate?: valuesCreateOrConnectWithoutTitlesInput | valuesCreateOrConnectWithoutTitlesInput[]
    upsert?: valuesUpsertWithWhereUniqueWithoutTitlesInput | valuesUpsertWithWhereUniqueWithoutTitlesInput[]
    createMany?: valuesCreateManyTitlesInputEnvelope
    set?: valuesWhereUniqueInput | valuesWhereUniqueInput[]
    disconnect?: valuesWhereUniqueInput | valuesWhereUniqueInput[]
    delete?: valuesWhereUniqueInput | valuesWhereUniqueInput[]
    connect?: valuesWhereUniqueInput | valuesWhereUniqueInput[]
    update?: valuesUpdateWithWhereUniqueWithoutTitlesInput | valuesUpdateWithWhereUniqueWithoutTitlesInput[]
    updateMany?: valuesUpdateManyWithWhereWithoutTitlesInput | valuesUpdateManyWithWhereWithoutTitlesInput[]
    deleteMany?: valuesScalarWhereInput | valuesScalarWhereInput[]
  }

  export type valuesUncheckedUpdateManyWithoutTitlesNestedInput = {
    create?: XOR<valuesCreateWithoutTitlesInput, valuesUncheckedCreateWithoutTitlesInput> | valuesCreateWithoutTitlesInput[] | valuesUncheckedCreateWithoutTitlesInput[]
    connectOrCreate?: valuesCreateOrConnectWithoutTitlesInput | valuesCreateOrConnectWithoutTitlesInput[]
    upsert?: valuesUpsertWithWhereUniqueWithoutTitlesInput | valuesUpsertWithWhereUniqueWithoutTitlesInput[]
    createMany?: valuesCreateManyTitlesInputEnvelope
    set?: valuesWhereUniqueInput | valuesWhereUniqueInput[]
    disconnect?: valuesWhereUniqueInput | valuesWhereUniqueInput[]
    delete?: valuesWhereUniqueInput | valuesWhereUniqueInput[]
    connect?: valuesWhereUniqueInput | valuesWhereUniqueInput[]
    update?: valuesUpdateWithWhereUniqueWithoutTitlesInput | valuesUpdateWithWhereUniqueWithoutTitlesInput[]
    updateMany?: valuesUpdateManyWithWhereWithoutTitlesInput | valuesUpdateManyWithWhereWithoutTitlesInput[]
    deleteMany?: valuesScalarWhereInput | valuesScalarWhereInput[]
  }

  export type titlesCreateNestedOneWithoutValuesInput = {
    create?: XOR<titlesCreateWithoutValuesInput, titlesUncheckedCreateWithoutValuesInput>
    connectOrCreate?: titlesCreateOrConnectWithoutValuesInput
    connect?: titlesWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type titlesUpdateOneRequiredWithoutValuesNestedInput = {
    create?: XOR<titlesCreateWithoutValuesInput, titlesUncheckedCreateWithoutValuesInput>
    connectOrCreate?: titlesCreateOrConnectWithoutValuesInput
    upsert?: titlesUpsertWithoutValuesInput
    connect?: titlesWhereUniqueInput
    update?: XOR<XOR<titlesUpdateToOneWithWhereWithoutValuesInput, titlesUpdateWithoutValuesInput>, titlesUncheckedUpdateWithoutValuesInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type itemsCreateWithoutOther_itemsInput = {
    id?: bigint | number
    created_at?: Date | string
    label?: string | null
    description?: string | null
    comment?: string | null
    items?: itemsCreateNestedOneWithoutOther_itemsInput
    titles?: titlesCreateNestedManyWithoutItemsInput
  }

  export type itemsUncheckedCreateWithoutOther_itemsInput = {
    id?: bigint | number
    created_at?: Date | string
    label?: string | null
    description?: string | null
    comment?: string | null
    parent?: bigint | number | null
    titles?: titlesUncheckedCreateNestedManyWithoutItemsInput
  }

  export type itemsCreateOrConnectWithoutOther_itemsInput = {
    where: itemsWhereUniqueInput
    create: XOR<itemsCreateWithoutOther_itemsInput, itemsUncheckedCreateWithoutOther_itemsInput>
  }

  export type itemsCreateWithoutItemsInput = {
    id?: bigint | number
    created_at?: Date | string
    label?: string | null
    description?: string | null
    comment?: string | null
    other_items?: itemsCreateNestedManyWithoutItemsInput
    titles?: titlesCreateNestedManyWithoutItemsInput
  }

  export type itemsUncheckedCreateWithoutItemsInput = {
    id?: bigint | number
    created_at?: Date | string
    label?: string | null
    description?: string | null
    comment?: string | null
    other_items?: itemsUncheckedCreateNestedManyWithoutItemsInput
    titles?: titlesUncheckedCreateNestedManyWithoutItemsInput
  }

  export type itemsCreateOrConnectWithoutItemsInput = {
    where: itemsWhereUniqueInput
    create: XOR<itemsCreateWithoutItemsInput, itemsUncheckedCreateWithoutItemsInput>
  }

  export type itemsCreateManyItemsInputEnvelope = {
    data: itemsCreateManyItemsInput | itemsCreateManyItemsInput[]
    skipDuplicates?: boolean
  }

  export type titlesCreateWithoutItemsInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    values?: valuesCreateNestedManyWithoutTitlesInput
  }

  export type titlesUncheckedCreateWithoutItemsInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    values?: valuesUncheckedCreateNestedManyWithoutTitlesInput
  }

  export type titlesCreateOrConnectWithoutItemsInput = {
    where: titlesWhereUniqueInput
    create: XOR<titlesCreateWithoutItemsInput, titlesUncheckedCreateWithoutItemsInput>
  }

  export type titlesCreateManyItemsInputEnvelope = {
    data: titlesCreateManyItemsInput | titlesCreateManyItemsInput[]
    skipDuplicates?: boolean
  }

  export type itemsUpsertWithoutOther_itemsInput = {
    update: XOR<itemsUpdateWithoutOther_itemsInput, itemsUncheckedUpdateWithoutOther_itemsInput>
    create: XOR<itemsCreateWithoutOther_itemsInput, itemsUncheckedCreateWithoutOther_itemsInput>
    where?: itemsWhereInput
  }

  export type itemsUpdateToOneWithWhereWithoutOther_itemsInput = {
    where?: itemsWhereInput
    data: XOR<itemsUpdateWithoutOther_itemsInput, itemsUncheckedUpdateWithoutOther_itemsInput>
  }

  export type itemsUpdateWithoutOther_itemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemsUpdateOneWithoutOther_itemsNestedInput
    titles?: titlesUpdateManyWithoutItemsNestedInput
  }

  export type itemsUncheckedUpdateWithoutOther_itemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    titles?: titlesUncheckedUpdateManyWithoutItemsNestedInput
  }

  export type itemsUpsertWithWhereUniqueWithoutItemsInput = {
    where: itemsWhereUniqueInput
    update: XOR<itemsUpdateWithoutItemsInput, itemsUncheckedUpdateWithoutItemsInput>
    create: XOR<itemsCreateWithoutItemsInput, itemsUncheckedCreateWithoutItemsInput>
  }

  export type itemsUpdateWithWhereUniqueWithoutItemsInput = {
    where: itemsWhereUniqueInput
    data: XOR<itemsUpdateWithoutItemsInput, itemsUncheckedUpdateWithoutItemsInput>
  }

  export type itemsUpdateManyWithWhereWithoutItemsInput = {
    where: itemsScalarWhereInput
    data: XOR<itemsUpdateManyMutationInput, itemsUncheckedUpdateManyWithoutItemsInput>
  }

  export type itemsScalarWhereInput = {
    AND?: itemsScalarWhereInput | itemsScalarWhereInput[]
    OR?: itemsScalarWhereInput[]
    NOT?: itemsScalarWhereInput | itemsScalarWhereInput[]
    id?: BigIntFilter<"items"> | bigint | number
    created_at?: DateTimeFilter<"items"> | Date | string
    label?: StringNullableFilter<"items"> | string | null
    description?: StringNullableFilter<"items"> | string | null
    comment?: StringNullableFilter<"items"> | string | null
    parent?: BigIntNullableFilter<"items"> | bigint | number | null
  }

  export type titlesUpsertWithWhereUniqueWithoutItemsInput = {
    where: titlesWhereUniqueInput
    update: XOR<titlesUpdateWithoutItemsInput, titlesUncheckedUpdateWithoutItemsInput>
    create: XOR<titlesCreateWithoutItemsInput, titlesUncheckedCreateWithoutItemsInput>
  }

  export type titlesUpdateWithWhereUniqueWithoutItemsInput = {
    where: titlesWhereUniqueInput
    data: XOR<titlesUpdateWithoutItemsInput, titlesUncheckedUpdateWithoutItemsInput>
  }

  export type titlesUpdateManyWithWhereWithoutItemsInput = {
    where: titlesScalarWhereInput
    data: XOR<titlesUpdateManyMutationInput, titlesUncheckedUpdateManyWithoutItemsInput>
  }

  export type titlesScalarWhereInput = {
    AND?: titlesScalarWhereInput | titlesScalarWhereInput[]
    OR?: titlesScalarWhereInput[]
    NOT?: titlesScalarWhereInput | titlesScalarWhereInput[]
    id?: BigIntFilter<"titles"> | bigint | number
    created_at?: DateTimeFilter<"titles"> | Date | string
    item?: BigIntNullableFilter<"titles"> | bigint | number | null
    description?: StringNullableFilter<"titles"> | string | null
  }

  export type itemsCreateWithoutTitlesInput = {
    id?: bigint | number
    created_at?: Date | string
    label?: string | null
    description?: string | null
    comment?: string | null
    items?: itemsCreateNestedOneWithoutOther_itemsInput
    other_items?: itemsCreateNestedManyWithoutItemsInput
  }

  export type itemsUncheckedCreateWithoutTitlesInput = {
    id?: bigint | number
    created_at?: Date | string
    label?: string | null
    description?: string | null
    comment?: string | null
    parent?: bigint | number | null
    other_items?: itemsUncheckedCreateNestedManyWithoutItemsInput
  }

  export type itemsCreateOrConnectWithoutTitlesInput = {
    where: itemsWhereUniqueInput
    create: XOR<itemsCreateWithoutTitlesInput, itemsUncheckedCreateWithoutTitlesInput>
  }

  export type valuesCreateWithoutTitlesInput = {
    date?: Date | string
    is_flexible?: boolean | null
    function?: bigint | number | null
    created_at?: Date | string
    should?: bigint | number | null
    is_expense: boolean
    expense_revenue_type?: string | null
    expense_revenue_description?: string | null
    group?: string | null
    group_description?: string | null
    chapter?: bigint | number | null
    chapter_description?: string | null
    plan?: bigint | number | null
    plan_description?: string | null
  }

  export type valuesUncheckedCreateWithoutTitlesInput = {
    date?: Date | string
    is_flexible?: boolean | null
    function?: bigint | number | null
    created_at?: Date | string
    should?: bigint | number | null
    is_expense: boolean
    expense_revenue_type?: string | null
    expense_revenue_description?: string | null
    group?: string | null
    group_description?: string | null
    chapter?: bigint | number | null
    chapter_description?: string | null
    plan?: bigint | number | null
    plan_description?: string | null
  }

  export type valuesCreateOrConnectWithoutTitlesInput = {
    where: valuesWhereUniqueInput
    create: XOR<valuesCreateWithoutTitlesInput, valuesUncheckedCreateWithoutTitlesInput>
  }

  export type valuesCreateManyTitlesInputEnvelope = {
    data: valuesCreateManyTitlesInput | valuesCreateManyTitlesInput[]
    skipDuplicates?: boolean
  }

  export type itemsUpsertWithoutTitlesInput = {
    update: XOR<itemsUpdateWithoutTitlesInput, itemsUncheckedUpdateWithoutTitlesInput>
    create: XOR<itemsCreateWithoutTitlesInput, itemsUncheckedCreateWithoutTitlesInput>
    where?: itemsWhereInput
  }

  export type itemsUpdateToOneWithWhereWithoutTitlesInput = {
    where?: itemsWhereInput
    data: XOR<itemsUpdateWithoutTitlesInput, itemsUncheckedUpdateWithoutTitlesInput>
  }

  export type itemsUpdateWithoutTitlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemsUpdateOneWithoutOther_itemsNestedInput
    other_items?: itemsUpdateManyWithoutItemsNestedInput
  }

  export type itemsUncheckedUpdateWithoutTitlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    other_items?: itemsUncheckedUpdateManyWithoutItemsNestedInput
  }

  export type valuesUpsertWithWhereUniqueWithoutTitlesInput = {
    where: valuesWhereUniqueInput
    update: XOR<valuesUpdateWithoutTitlesInput, valuesUncheckedUpdateWithoutTitlesInput>
    create: XOR<valuesCreateWithoutTitlesInput, valuesUncheckedCreateWithoutTitlesInput>
  }

  export type valuesUpdateWithWhereUniqueWithoutTitlesInput = {
    where: valuesWhereUniqueInput
    data: XOR<valuesUpdateWithoutTitlesInput, valuesUncheckedUpdateWithoutTitlesInput>
  }

  export type valuesUpdateManyWithWhereWithoutTitlesInput = {
    where: valuesScalarWhereInput
    data: XOR<valuesUpdateManyMutationInput, valuesUncheckedUpdateManyWithoutTitlesInput>
  }

  export type valuesScalarWhereInput = {
    AND?: valuesScalarWhereInput | valuesScalarWhereInput[]
    OR?: valuesScalarWhereInput[]
    NOT?: valuesScalarWhereInput | valuesScalarWhereInput[]
    date?: DateTimeFilter<"values"> | Date | string
    is_flexible?: BoolNullableFilter<"values"> | boolean | null
    function?: BigIntNullableFilter<"values"> | bigint | number | null
    title?: BigIntFilter<"values"> | bigint | number
    created_at?: DateTimeFilter<"values"> | Date | string
    should?: BigIntNullableFilter<"values"> | bigint | number | null
    is_expense?: BoolFilter<"values"> | boolean
    expense_revenue_type?: StringNullableFilter<"values"> | string | null
    expense_revenue_description?: StringNullableFilter<"values"> | string | null
    group?: StringNullableFilter<"values"> | string | null
    group_description?: StringNullableFilter<"values"> | string | null
    chapter?: BigIntNullableFilter<"values"> | bigint | number | null
    chapter_description?: StringNullableFilter<"values"> | string | null
    plan?: BigIntNullableFilter<"values"> | bigint | number | null
    plan_description?: StringNullableFilter<"values"> | string | null
  }

  export type titlesCreateWithoutValuesInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    items?: itemsCreateNestedOneWithoutTitlesInput
  }

  export type titlesUncheckedCreateWithoutValuesInput = {
    id?: bigint | number
    created_at?: Date | string
    item?: bigint | number | null
    description?: string | null
  }

  export type titlesCreateOrConnectWithoutValuesInput = {
    where: titlesWhereUniqueInput
    create: XOR<titlesCreateWithoutValuesInput, titlesUncheckedCreateWithoutValuesInput>
  }

  export type titlesUpsertWithoutValuesInput = {
    update: XOR<titlesUpdateWithoutValuesInput, titlesUncheckedUpdateWithoutValuesInput>
    create: XOR<titlesCreateWithoutValuesInput, titlesUncheckedCreateWithoutValuesInput>
    where?: titlesWhereInput
  }

  export type titlesUpdateToOneWithWhereWithoutValuesInput = {
    where?: titlesWhereInput
    data: XOR<titlesUpdateWithoutValuesInput, titlesUncheckedUpdateWithoutValuesInput>
  }

  export type titlesUpdateWithoutValuesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    items?: itemsUpdateOneWithoutTitlesNestedInput
  }

  export type titlesUncheckedUpdateWithoutValuesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type itemsCreateManyItemsInput = {
    id?: bigint | number
    created_at?: Date | string
    label?: string | null
    description?: string | null
    comment?: string | null
  }

  export type titlesCreateManyItemsInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
  }

  export type itemsUpdateWithoutItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    other_items?: itemsUpdateManyWithoutItemsNestedInput
    titles?: titlesUpdateManyWithoutItemsNestedInput
  }

  export type itemsUncheckedUpdateWithoutItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    other_items?: itemsUncheckedUpdateManyWithoutItemsNestedInput
    titles?: titlesUncheckedUpdateManyWithoutItemsNestedInput
  }

  export type itemsUncheckedUpdateManyWithoutItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type titlesUpdateWithoutItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    values?: valuesUpdateManyWithoutTitlesNestedInput
  }

  export type titlesUncheckedUpdateWithoutItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    values?: valuesUncheckedUpdateManyWithoutTitlesNestedInput
  }

  export type titlesUncheckedUpdateManyWithoutItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type valuesCreateManyTitlesInput = {
    date?: Date | string
    is_flexible?: boolean | null
    function?: bigint | number | null
    created_at?: Date | string
    should?: bigint | number | null
    is_expense: boolean
    expense_revenue_type?: string | null
    expense_revenue_description?: string | null
    group?: string | null
    group_description?: string | null
    chapter?: bigint | number | null
    chapter_description?: string | null
    plan?: bigint | number | null
    plan_description?: string | null
  }

  export type valuesUpdateWithoutTitlesInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_flexible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    function?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    should?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_expense?: BoolFieldUpdateOperationsInput | boolean
    expense_revenue_type?: NullableStringFieldUpdateOperationsInput | string | null
    expense_revenue_description?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    group_description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chapter_description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type valuesUncheckedUpdateWithoutTitlesInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_flexible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    function?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    should?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_expense?: BoolFieldUpdateOperationsInput | boolean
    expense_revenue_type?: NullableStringFieldUpdateOperationsInput | string | null
    expense_revenue_description?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    group_description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chapter_description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type valuesUncheckedUpdateManyWithoutTitlesInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_flexible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    function?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    should?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_expense?: BoolFieldUpdateOperationsInput | boolean
    expense_revenue_type?: NullableStringFieldUpdateOperationsInput | string | null
    expense_revenue_description?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    group_description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chapter_description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
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
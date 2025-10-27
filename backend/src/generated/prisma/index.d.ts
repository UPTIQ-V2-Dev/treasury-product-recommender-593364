
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model BankStatement
 * 
 */
export type BankStatement = $Result.DefaultSelection<Prisma.$BankStatementPayload>
/**
 * Model AnalysisResult
 * 
 */
export type AnalysisResult = $Result.DefaultSelection<Prisma.$AnalysisResultPayload>
/**
 * Model TreasuryProduct
 * 
 */
export type TreasuryProduct = $Result.DefaultSelection<Prisma.$TreasuryProductPayload>
/**
 * Model SupportedFormat
 * 
 */
export type SupportedFormat = $Result.DefaultSelection<Prisma.$SupportedFormatPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AnalysisStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type AnalysisStatus = (typeof AnalysisStatus)[keyof typeof AnalysisStatus]

}

export type AnalysisStatus = $Enums.AnalysisStatus

export const AnalysisStatus: typeof $Enums.AnalysisStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankStatement`: Exposes CRUD operations for the **BankStatement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankStatements
    * const bankStatements = await prisma.bankStatement.findMany()
    * ```
    */
  get bankStatement(): Prisma.BankStatementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analysisResult`: Exposes CRUD operations for the **AnalysisResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisResults
    * const analysisResults = await prisma.analysisResult.findMany()
    * ```
    */
  get analysisResult(): Prisma.AnalysisResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treasuryProduct`: Exposes CRUD operations for the **TreasuryProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreasuryProducts
    * const treasuryProducts = await prisma.treasuryProduct.findMany()
    * ```
    */
  get treasuryProduct(): Prisma.TreasuryProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supportedFormat`: Exposes CRUD operations for the **SupportedFormat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportedFormats
    * const supportedFormats = await prisma.supportedFormat.findMany()
    * ```
    */
  get supportedFormat(): Prisma.SupportedFormatDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Token: 'Token',
    BankStatement: 'BankStatement',
    AnalysisResult: 'AnalysisResult',
    TreasuryProduct: 'TreasuryProduct',
    SupportedFormat: 'SupportedFormat'
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
      modelProps: "user" | "token" | "bankStatement" | "analysisResult" | "treasuryProduct" | "supportedFormat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      BankStatement: {
        payload: Prisma.$BankStatementPayload<ExtArgs>
        fields: Prisma.BankStatementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankStatementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankStatementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankStatementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankStatementPayload>
          }
          findFirst: {
            args: Prisma.BankStatementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankStatementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankStatementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankStatementPayload>
          }
          findMany: {
            args: Prisma.BankStatementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankStatementPayload>[]
          }
          create: {
            args: Prisma.BankStatementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankStatementPayload>
          }
          createMany: {
            args: Prisma.BankStatementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankStatementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankStatementPayload>[]
          }
          delete: {
            args: Prisma.BankStatementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankStatementPayload>
          }
          update: {
            args: Prisma.BankStatementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankStatementPayload>
          }
          deleteMany: {
            args: Prisma.BankStatementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankStatementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankStatementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankStatementPayload>[]
          }
          upsert: {
            args: Prisma.BankStatementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankStatementPayload>
          }
          aggregate: {
            args: Prisma.BankStatementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankStatement>
          }
          groupBy: {
            args: Prisma.BankStatementGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankStatementGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankStatementCountArgs<ExtArgs>
            result: $Utils.Optional<BankStatementCountAggregateOutputType> | number
          }
        }
      }
      AnalysisResult: {
        payload: Prisma.$AnalysisResultPayload<ExtArgs>
        fields: Prisma.AnalysisResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>
          }
          findFirst: {
            args: Prisma.AnalysisResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>
          }
          findMany: {
            args: Prisma.AnalysisResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>[]
          }
          create: {
            args: Prisma.AnalysisResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>
          }
          createMany: {
            args: Prisma.AnalysisResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>[]
          }
          delete: {
            args: Prisma.AnalysisResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>
          }
          update: {
            args: Prisma.AnalysisResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>[]
          }
          upsert: {
            args: Prisma.AnalysisResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>
          }
          aggregate: {
            args: Prisma.AnalysisResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisResult>
          }
          groupBy: {
            args: Prisma.AnalysisResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisResultCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisResultCountAggregateOutputType> | number
          }
        }
      }
      TreasuryProduct: {
        payload: Prisma.$TreasuryProductPayload<ExtArgs>
        fields: Prisma.TreasuryProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreasuryProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreasuryProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryProductPayload>
          }
          findFirst: {
            args: Prisma.TreasuryProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreasuryProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryProductPayload>
          }
          findMany: {
            args: Prisma.TreasuryProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryProductPayload>[]
          }
          create: {
            args: Prisma.TreasuryProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryProductPayload>
          }
          createMany: {
            args: Prisma.TreasuryProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreasuryProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryProductPayload>[]
          }
          delete: {
            args: Prisma.TreasuryProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryProductPayload>
          }
          update: {
            args: Prisma.TreasuryProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryProductPayload>
          }
          deleteMany: {
            args: Prisma.TreasuryProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreasuryProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TreasuryProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryProductPayload>[]
          }
          upsert: {
            args: Prisma.TreasuryProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryProductPayload>
          }
          aggregate: {
            args: Prisma.TreasuryProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreasuryProduct>
          }
          groupBy: {
            args: Prisma.TreasuryProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreasuryProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreasuryProductCountArgs<ExtArgs>
            result: $Utils.Optional<TreasuryProductCountAggregateOutputType> | number
          }
        }
      }
      SupportedFormat: {
        payload: Prisma.$SupportedFormatPayload<ExtArgs>
        fields: Prisma.SupportedFormatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportedFormatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportedFormatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportedFormatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportedFormatPayload>
          }
          findFirst: {
            args: Prisma.SupportedFormatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportedFormatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportedFormatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportedFormatPayload>
          }
          findMany: {
            args: Prisma.SupportedFormatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportedFormatPayload>[]
          }
          create: {
            args: Prisma.SupportedFormatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportedFormatPayload>
          }
          createMany: {
            args: Prisma.SupportedFormatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportedFormatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportedFormatPayload>[]
          }
          delete: {
            args: Prisma.SupportedFormatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportedFormatPayload>
          }
          update: {
            args: Prisma.SupportedFormatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportedFormatPayload>
          }
          deleteMany: {
            args: Prisma.SupportedFormatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportedFormatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupportedFormatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportedFormatPayload>[]
          }
          upsert: {
            args: Prisma.SupportedFormatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportedFormatPayload>
          }
          aggregate: {
            args: Prisma.SupportedFormatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportedFormat>
          }
          groupBy: {
            args: Prisma.SupportedFormatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportedFormatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportedFormatCountArgs<ExtArgs>
            result: $Utils.Optional<SupportedFormatCountAggregateOutputType> | number
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
    user?: UserOmit
    token?: TokenOmit
    bankStatement?: BankStatementOmit
    analysisResult?: AnalysisResultOmit
    treasuryProduct?: TreasuryProductOmit
    supportedFormat?: SupportedFormatOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Token: number
    statements: number
    analyses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Token?: boolean | UserCountOutputTypeCountTokenArgs
    statements?: boolean | UserCountOutputTypeCountStatementsArgs
    analyses?: boolean | UserCountOutputTypeCountAnalysesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStatementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankStatementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisResultWhereInput
  }


  /**
   * Count Type BankStatementCountOutputType
   */

  export type BankStatementCountOutputType = {
    analyses: number
  }

  export type BankStatementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyses?: boolean | BankStatementCountOutputTypeCountAnalysesArgs
  }

  // Custom InputTypes
  /**
   * BankStatementCountOutputType without action
   */
  export type BankStatementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankStatementCountOutputType
     */
    select?: BankStatementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankStatementCountOutputType without action
   */
  export type BankStatementCountOutputTypeCountAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: string | null
    isEmailVerified: boolean | null
    clientType: string | null
    companyName: string | null
    phone: string | null
    agreeToTerms: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: string | null
    isEmailVerified: boolean | null
    clientType: string | null
    companyName: string | null
    phone: string | null
    agreeToTerms: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    isEmailVerified: number
    clientType: number
    companyName: number
    phone: number
    agreeToTerms: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isEmailVerified?: true
    clientType?: true
    companyName?: true
    phone?: true
    agreeToTerms?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isEmailVerified?: true
    clientType?: true
    companyName?: true
    phone?: true
    agreeToTerms?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isEmailVerified?: true
    clientType?: true
    companyName?: true
    phone?: true
    agreeToTerms?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    password: string
    role: string
    isEmailVerified: boolean
    clientType: string | null
    companyName: string | null
    phone: string | null
    agreeToTerms: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    clientType?: boolean
    companyName?: boolean
    phone?: boolean
    agreeToTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Token?: boolean | User$TokenArgs<ExtArgs>
    statements?: boolean | User$statementsArgs<ExtArgs>
    analyses?: boolean | User$analysesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    clientType?: boolean
    companyName?: boolean
    phone?: boolean
    agreeToTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    clientType?: boolean
    companyName?: boolean
    phone?: boolean
    agreeToTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    clientType?: boolean
    companyName?: boolean
    phone?: boolean
    agreeToTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "isEmailVerified" | "clientType" | "companyName" | "phone" | "agreeToTerms" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Token?: boolean | User$TokenArgs<ExtArgs>
    statements?: boolean | User$statementsArgs<ExtArgs>
    analyses?: boolean | User$analysesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Token: Prisma.$TokenPayload<ExtArgs>[]
      statements: Prisma.$BankStatementPayload<ExtArgs>[]
      analyses: Prisma.$AnalysisResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string
      role: string
      isEmailVerified: boolean
      clientType: string | null
      companyName: string | null
      phone: string | null
      agreeToTerms: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Token<T extends User$TokenArgs<ExtArgs> = {}>(args?: Subset<T, User$TokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    statements<T extends User$statementsArgs<ExtArgs> = {}>(args?: Subset<T, User$statementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankStatementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analyses<T extends User$analysesArgs<ExtArgs> = {}>(args?: Subset<T, User$analysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly clientType: FieldRef<"User", 'String'>
    readonly companyName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly agreeToTerms: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Token
   */
  export type User$TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * User.statements
   */
  export type User$statementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankStatement
     */
    select?: BankStatementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankStatement
     */
    omit?: BankStatementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankStatementInclude<ExtArgs> | null
    where?: BankStatementWhereInput
    orderBy?: BankStatementOrderByWithRelationInput | BankStatementOrderByWithRelationInput[]
    cursor?: BankStatementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankStatementScalarFieldEnum | BankStatementScalarFieldEnum[]
  }

  /**
   * User.analyses
   */
  export type User$analysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    where?: AnalysisResultWhereInput
    orderBy?: AnalysisResultOrderByWithRelationInput | AnalysisResultOrderByWithRelationInput[]
    cursor?: AnalysisResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisResultScalarFieldEnum | AnalysisResultScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    type: string | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    type: string | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    token: number
    type: number
    expires: number
    blacklisted: number
    createdAt: number
    userId: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: number
    token: string
    type: string
    expires: Date
    blacklisted: boolean
    createdAt: Date
    userId: number
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "type" | "expires" | "blacklisted" | "createdAt" | "userId", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      type: string
      expires: Date
      blacklisted: boolean
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
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
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'Int'>
    readonly token: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'String'>
    readonly expires: FieldRef<"Token", 'DateTime'>
    readonly blacklisted: FieldRef<"Token", 'Boolean'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly userId: FieldRef<"Token", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model BankStatement
   */

  export type AggregateBankStatement = {
    _count: BankStatementCountAggregateOutputType | null
    _avg: BankStatementAvgAggregateOutputType | null
    _sum: BankStatementSumAggregateOutputType | null
    _min: BankStatementMinAggregateOutputType | null
    _max: BankStatementMaxAggregateOutputType | null
  }

  export type BankStatementAvgAggregateOutputType = {
    fileSize: number | null
    userId: number | null
  }

  export type BankStatementSumAggregateOutputType = {
    fileSize: number | null
    userId: number | null
  }

  export type BankStatementMinAggregateOutputType = {
    id: string | null
    filename: string | null
    uploadedAt: Date | null
    fileSize: number | null
    bankName: string | null
    accountType: string | null
    processingStatus: string | null
    cloudStorageUrl: string | null
    signedUrl: string | null
    storageProvider: string | null
    storageKey: string | null
    userId: number | null
  }

  export type BankStatementMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    uploadedAt: Date | null
    fileSize: number | null
    bankName: string | null
    accountType: string | null
    processingStatus: string | null
    cloudStorageUrl: string | null
    signedUrl: string | null
    storageProvider: string | null
    storageKey: string | null
    userId: number | null
  }

  export type BankStatementCountAggregateOutputType = {
    id: number
    filename: number
    uploadedAt: number
    fileSize: number
    bankName: number
    accountType: number
    statementPeriod: number
    processingStatus: number
    cloudStorageUrl: number
    signedUrl: number
    storageProvider: number
    storageKey: number
    userId: number
    _all: number
  }


  export type BankStatementAvgAggregateInputType = {
    fileSize?: true
    userId?: true
  }

  export type BankStatementSumAggregateInputType = {
    fileSize?: true
    userId?: true
  }

  export type BankStatementMinAggregateInputType = {
    id?: true
    filename?: true
    uploadedAt?: true
    fileSize?: true
    bankName?: true
    accountType?: true
    processingStatus?: true
    cloudStorageUrl?: true
    signedUrl?: true
    storageProvider?: true
    storageKey?: true
    userId?: true
  }

  export type BankStatementMaxAggregateInputType = {
    id?: true
    filename?: true
    uploadedAt?: true
    fileSize?: true
    bankName?: true
    accountType?: true
    processingStatus?: true
    cloudStorageUrl?: true
    signedUrl?: true
    storageProvider?: true
    storageKey?: true
    userId?: true
  }

  export type BankStatementCountAggregateInputType = {
    id?: true
    filename?: true
    uploadedAt?: true
    fileSize?: true
    bankName?: true
    accountType?: true
    statementPeriod?: true
    processingStatus?: true
    cloudStorageUrl?: true
    signedUrl?: true
    storageProvider?: true
    storageKey?: true
    userId?: true
    _all?: true
  }

  export type BankStatementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankStatement to aggregate.
     */
    where?: BankStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankStatements to fetch.
     */
    orderBy?: BankStatementOrderByWithRelationInput | BankStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankStatements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankStatements
    **/
    _count?: true | BankStatementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankStatementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankStatementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankStatementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankStatementMaxAggregateInputType
  }

  export type GetBankStatementAggregateType<T extends BankStatementAggregateArgs> = {
        [P in keyof T & keyof AggregateBankStatement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankStatement[P]>
      : GetScalarType<T[P], AggregateBankStatement[P]>
  }




  export type BankStatementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankStatementWhereInput
    orderBy?: BankStatementOrderByWithAggregationInput | BankStatementOrderByWithAggregationInput[]
    by: BankStatementScalarFieldEnum[] | BankStatementScalarFieldEnum
    having?: BankStatementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankStatementCountAggregateInputType | true
    _avg?: BankStatementAvgAggregateInputType
    _sum?: BankStatementSumAggregateInputType
    _min?: BankStatementMinAggregateInputType
    _max?: BankStatementMaxAggregateInputType
  }

  export type BankStatementGroupByOutputType = {
    id: string
    filename: string
    uploadedAt: Date
    fileSize: number
    bankName: string | null
    accountType: string | null
    statementPeriod: JsonValue
    processingStatus: string
    cloudStorageUrl: string | null
    signedUrl: string | null
    storageProvider: string | null
    storageKey: string | null
    userId: number
    _count: BankStatementCountAggregateOutputType | null
    _avg: BankStatementAvgAggregateOutputType | null
    _sum: BankStatementSumAggregateOutputType | null
    _min: BankStatementMinAggregateOutputType | null
    _max: BankStatementMaxAggregateOutputType | null
  }

  type GetBankStatementGroupByPayload<T extends BankStatementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankStatementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankStatementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankStatementGroupByOutputType[P]>
            : GetScalarType<T[P], BankStatementGroupByOutputType[P]>
        }
      >
    >


  export type BankStatementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    uploadedAt?: boolean
    fileSize?: boolean
    bankName?: boolean
    accountType?: boolean
    statementPeriod?: boolean
    processingStatus?: boolean
    cloudStorageUrl?: boolean
    signedUrl?: boolean
    storageProvider?: boolean
    storageKey?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    analyses?: boolean | BankStatement$analysesArgs<ExtArgs>
    _count?: boolean | BankStatementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankStatement"]>

  export type BankStatementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    uploadedAt?: boolean
    fileSize?: boolean
    bankName?: boolean
    accountType?: boolean
    statementPeriod?: boolean
    processingStatus?: boolean
    cloudStorageUrl?: boolean
    signedUrl?: boolean
    storageProvider?: boolean
    storageKey?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankStatement"]>

  export type BankStatementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    uploadedAt?: boolean
    fileSize?: boolean
    bankName?: boolean
    accountType?: boolean
    statementPeriod?: boolean
    processingStatus?: boolean
    cloudStorageUrl?: boolean
    signedUrl?: boolean
    storageProvider?: boolean
    storageKey?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankStatement"]>

  export type BankStatementSelectScalar = {
    id?: boolean
    filename?: boolean
    uploadedAt?: boolean
    fileSize?: boolean
    bankName?: boolean
    accountType?: boolean
    statementPeriod?: boolean
    processingStatus?: boolean
    cloudStorageUrl?: boolean
    signedUrl?: boolean
    storageProvider?: boolean
    storageKey?: boolean
    userId?: boolean
  }

  export type BankStatementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "uploadedAt" | "fileSize" | "bankName" | "accountType" | "statementPeriod" | "processingStatus" | "cloudStorageUrl" | "signedUrl" | "storageProvider" | "storageKey" | "userId", ExtArgs["result"]["bankStatement"]>
  export type BankStatementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    analyses?: boolean | BankStatement$analysesArgs<ExtArgs>
    _count?: boolean | BankStatementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BankStatementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BankStatementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BankStatementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankStatement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      analyses: Prisma.$AnalysisResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      uploadedAt: Date
      fileSize: number
      bankName: string | null
      accountType: string | null
      statementPeriod: Prisma.JsonValue
      processingStatus: string
      cloudStorageUrl: string | null
      signedUrl: string | null
      storageProvider: string | null
      storageKey: string | null
      userId: number
    }, ExtArgs["result"]["bankStatement"]>
    composites: {}
  }

  type BankStatementGetPayload<S extends boolean | null | undefined | BankStatementDefaultArgs> = $Result.GetResult<Prisma.$BankStatementPayload, S>

  type BankStatementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankStatementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankStatementCountAggregateInputType | true
    }

  export interface BankStatementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankStatement'], meta: { name: 'BankStatement' } }
    /**
     * Find zero or one BankStatement that matches the filter.
     * @param {BankStatementFindUniqueArgs} args - Arguments to find a BankStatement
     * @example
     * // Get one BankStatement
     * const bankStatement = await prisma.bankStatement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankStatementFindUniqueArgs>(args: SelectSubset<T, BankStatementFindUniqueArgs<ExtArgs>>): Prisma__BankStatementClient<$Result.GetResult<Prisma.$BankStatementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankStatement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankStatementFindUniqueOrThrowArgs} args - Arguments to find a BankStatement
     * @example
     * // Get one BankStatement
     * const bankStatement = await prisma.bankStatement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankStatementFindUniqueOrThrowArgs>(args: SelectSubset<T, BankStatementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankStatementClient<$Result.GetResult<Prisma.$BankStatementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankStatement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankStatementFindFirstArgs} args - Arguments to find a BankStatement
     * @example
     * // Get one BankStatement
     * const bankStatement = await prisma.bankStatement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankStatementFindFirstArgs>(args?: SelectSubset<T, BankStatementFindFirstArgs<ExtArgs>>): Prisma__BankStatementClient<$Result.GetResult<Prisma.$BankStatementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankStatement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankStatementFindFirstOrThrowArgs} args - Arguments to find a BankStatement
     * @example
     * // Get one BankStatement
     * const bankStatement = await prisma.bankStatement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankStatementFindFirstOrThrowArgs>(args?: SelectSubset<T, BankStatementFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankStatementClient<$Result.GetResult<Prisma.$BankStatementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankStatements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankStatementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankStatements
     * const bankStatements = await prisma.bankStatement.findMany()
     * 
     * // Get first 10 BankStatements
     * const bankStatements = await prisma.bankStatement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankStatementWithIdOnly = await prisma.bankStatement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankStatementFindManyArgs>(args?: SelectSubset<T, BankStatementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankStatementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankStatement.
     * @param {BankStatementCreateArgs} args - Arguments to create a BankStatement.
     * @example
     * // Create one BankStatement
     * const BankStatement = await prisma.bankStatement.create({
     *   data: {
     *     // ... data to create a BankStatement
     *   }
     * })
     * 
     */
    create<T extends BankStatementCreateArgs>(args: SelectSubset<T, BankStatementCreateArgs<ExtArgs>>): Prisma__BankStatementClient<$Result.GetResult<Prisma.$BankStatementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankStatements.
     * @param {BankStatementCreateManyArgs} args - Arguments to create many BankStatements.
     * @example
     * // Create many BankStatements
     * const bankStatement = await prisma.bankStatement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankStatementCreateManyArgs>(args?: SelectSubset<T, BankStatementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankStatements and returns the data saved in the database.
     * @param {BankStatementCreateManyAndReturnArgs} args - Arguments to create many BankStatements.
     * @example
     * // Create many BankStatements
     * const bankStatement = await prisma.bankStatement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankStatements and only return the `id`
     * const bankStatementWithIdOnly = await prisma.bankStatement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankStatementCreateManyAndReturnArgs>(args?: SelectSubset<T, BankStatementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankStatementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BankStatement.
     * @param {BankStatementDeleteArgs} args - Arguments to delete one BankStatement.
     * @example
     * // Delete one BankStatement
     * const BankStatement = await prisma.bankStatement.delete({
     *   where: {
     *     // ... filter to delete one BankStatement
     *   }
     * })
     * 
     */
    delete<T extends BankStatementDeleteArgs>(args: SelectSubset<T, BankStatementDeleteArgs<ExtArgs>>): Prisma__BankStatementClient<$Result.GetResult<Prisma.$BankStatementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankStatement.
     * @param {BankStatementUpdateArgs} args - Arguments to update one BankStatement.
     * @example
     * // Update one BankStatement
     * const bankStatement = await prisma.bankStatement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankStatementUpdateArgs>(args: SelectSubset<T, BankStatementUpdateArgs<ExtArgs>>): Prisma__BankStatementClient<$Result.GetResult<Prisma.$BankStatementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankStatements.
     * @param {BankStatementDeleteManyArgs} args - Arguments to filter BankStatements to delete.
     * @example
     * // Delete a few BankStatements
     * const { count } = await prisma.bankStatement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankStatementDeleteManyArgs>(args?: SelectSubset<T, BankStatementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankStatements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankStatementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankStatements
     * const bankStatement = await prisma.bankStatement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankStatementUpdateManyArgs>(args: SelectSubset<T, BankStatementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankStatements and returns the data updated in the database.
     * @param {BankStatementUpdateManyAndReturnArgs} args - Arguments to update many BankStatements.
     * @example
     * // Update many BankStatements
     * const bankStatement = await prisma.bankStatement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BankStatements and only return the `id`
     * const bankStatementWithIdOnly = await prisma.bankStatement.updateManyAndReturn({
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
    updateManyAndReturn<T extends BankStatementUpdateManyAndReturnArgs>(args: SelectSubset<T, BankStatementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankStatementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BankStatement.
     * @param {BankStatementUpsertArgs} args - Arguments to update or create a BankStatement.
     * @example
     * // Update or create a BankStatement
     * const bankStatement = await prisma.bankStatement.upsert({
     *   create: {
     *     // ... data to create a BankStatement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankStatement we want to update
     *   }
     * })
     */
    upsert<T extends BankStatementUpsertArgs>(args: SelectSubset<T, BankStatementUpsertArgs<ExtArgs>>): Prisma__BankStatementClient<$Result.GetResult<Prisma.$BankStatementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankStatements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankStatementCountArgs} args - Arguments to filter BankStatements to count.
     * @example
     * // Count the number of BankStatements
     * const count = await prisma.bankStatement.count({
     *   where: {
     *     // ... the filter for the BankStatements we want to count
     *   }
     * })
    **/
    count<T extends BankStatementCountArgs>(
      args?: Subset<T, BankStatementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankStatementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankStatement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankStatementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BankStatementAggregateArgs>(args: Subset<T, BankStatementAggregateArgs>): Prisma.PrismaPromise<GetBankStatementAggregateType<T>>

    /**
     * Group by BankStatement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankStatementGroupByArgs} args - Group by arguments.
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
      T extends BankStatementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankStatementGroupByArgs['orderBy'] }
        : { orderBy?: BankStatementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BankStatementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankStatementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankStatement model
   */
  readonly fields: BankStatementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankStatement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankStatementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    analyses<T extends BankStatement$analysesArgs<ExtArgs> = {}>(args?: Subset<T, BankStatement$analysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BankStatement model
   */
  interface BankStatementFieldRefs {
    readonly id: FieldRef<"BankStatement", 'String'>
    readonly filename: FieldRef<"BankStatement", 'String'>
    readonly uploadedAt: FieldRef<"BankStatement", 'DateTime'>
    readonly fileSize: FieldRef<"BankStatement", 'Int'>
    readonly bankName: FieldRef<"BankStatement", 'String'>
    readonly accountType: FieldRef<"BankStatement", 'String'>
    readonly statementPeriod: FieldRef<"BankStatement", 'Json'>
    readonly processingStatus: FieldRef<"BankStatement", 'String'>
    readonly cloudStorageUrl: FieldRef<"BankStatement", 'String'>
    readonly signedUrl: FieldRef<"BankStatement", 'String'>
    readonly storageProvider: FieldRef<"BankStatement", 'String'>
    readonly storageKey: FieldRef<"BankStatement", 'String'>
    readonly userId: FieldRef<"BankStatement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BankStatement findUnique
   */
  export type BankStatementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankStatement
     */
    select?: BankStatementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankStatement
     */
    omit?: BankStatementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankStatementInclude<ExtArgs> | null
    /**
     * Filter, which BankStatement to fetch.
     */
    where: BankStatementWhereUniqueInput
  }

  /**
   * BankStatement findUniqueOrThrow
   */
  export type BankStatementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankStatement
     */
    select?: BankStatementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankStatement
     */
    omit?: BankStatementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankStatementInclude<ExtArgs> | null
    /**
     * Filter, which BankStatement to fetch.
     */
    where: BankStatementWhereUniqueInput
  }

  /**
   * BankStatement findFirst
   */
  export type BankStatementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankStatement
     */
    select?: BankStatementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankStatement
     */
    omit?: BankStatementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankStatementInclude<ExtArgs> | null
    /**
     * Filter, which BankStatement to fetch.
     */
    where?: BankStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankStatements to fetch.
     */
    orderBy?: BankStatementOrderByWithRelationInput | BankStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankStatements.
     */
    cursor?: BankStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankStatements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankStatements.
     */
    distinct?: BankStatementScalarFieldEnum | BankStatementScalarFieldEnum[]
  }

  /**
   * BankStatement findFirstOrThrow
   */
  export type BankStatementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankStatement
     */
    select?: BankStatementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankStatement
     */
    omit?: BankStatementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankStatementInclude<ExtArgs> | null
    /**
     * Filter, which BankStatement to fetch.
     */
    where?: BankStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankStatements to fetch.
     */
    orderBy?: BankStatementOrderByWithRelationInput | BankStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankStatements.
     */
    cursor?: BankStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankStatements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankStatements.
     */
    distinct?: BankStatementScalarFieldEnum | BankStatementScalarFieldEnum[]
  }

  /**
   * BankStatement findMany
   */
  export type BankStatementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankStatement
     */
    select?: BankStatementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankStatement
     */
    omit?: BankStatementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankStatementInclude<ExtArgs> | null
    /**
     * Filter, which BankStatements to fetch.
     */
    where?: BankStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankStatements to fetch.
     */
    orderBy?: BankStatementOrderByWithRelationInput | BankStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankStatements.
     */
    cursor?: BankStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankStatements.
     */
    skip?: number
    distinct?: BankStatementScalarFieldEnum | BankStatementScalarFieldEnum[]
  }

  /**
   * BankStatement create
   */
  export type BankStatementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankStatement
     */
    select?: BankStatementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankStatement
     */
    omit?: BankStatementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankStatementInclude<ExtArgs> | null
    /**
     * The data needed to create a BankStatement.
     */
    data: XOR<BankStatementCreateInput, BankStatementUncheckedCreateInput>
  }

  /**
   * BankStatement createMany
   */
  export type BankStatementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankStatements.
     */
    data: BankStatementCreateManyInput | BankStatementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankStatement createManyAndReturn
   */
  export type BankStatementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankStatement
     */
    select?: BankStatementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankStatement
     */
    omit?: BankStatementOmit<ExtArgs> | null
    /**
     * The data used to create many BankStatements.
     */
    data: BankStatementCreateManyInput | BankStatementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankStatementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankStatement update
   */
  export type BankStatementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankStatement
     */
    select?: BankStatementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankStatement
     */
    omit?: BankStatementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankStatementInclude<ExtArgs> | null
    /**
     * The data needed to update a BankStatement.
     */
    data: XOR<BankStatementUpdateInput, BankStatementUncheckedUpdateInput>
    /**
     * Choose, which BankStatement to update.
     */
    where: BankStatementWhereUniqueInput
  }

  /**
   * BankStatement updateMany
   */
  export type BankStatementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankStatements.
     */
    data: XOR<BankStatementUpdateManyMutationInput, BankStatementUncheckedUpdateManyInput>
    /**
     * Filter which BankStatements to update
     */
    where?: BankStatementWhereInput
    /**
     * Limit how many BankStatements to update.
     */
    limit?: number
  }

  /**
   * BankStatement updateManyAndReturn
   */
  export type BankStatementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankStatement
     */
    select?: BankStatementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankStatement
     */
    omit?: BankStatementOmit<ExtArgs> | null
    /**
     * The data used to update BankStatements.
     */
    data: XOR<BankStatementUpdateManyMutationInput, BankStatementUncheckedUpdateManyInput>
    /**
     * Filter which BankStatements to update
     */
    where?: BankStatementWhereInput
    /**
     * Limit how many BankStatements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankStatementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankStatement upsert
   */
  export type BankStatementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankStatement
     */
    select?: BankStatementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankStatement
     */
    omit?: BankStatementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankStatementInclude<ExtArgs> | null
    /**
     * The filter to search for the BankStatement to update in case it exists.
     */
    where: BankStatementWhereUniqueInput
    /**
     * In case the BankStatement found by the `where` argument doesn't exist, create a new BankStatement with this data.
     */
    create: XOR<BankStatementCreateInput, BankStatementUncheckedCreateInput>
    /**
     * In case the BankStatement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankStatementUpdateInput, BankStatementUncheckedUpdateInput>
  }

  /**
   * BankStatement delete
   */
  export type BankStatementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankStatement
     */
    select?: BankStatementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankStatement
     */
    omit?: BankStatementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankStatementInclude<ExtArgs> | null
    /**
     * Filter which BankStatement to delete.
     */
    where: BankStatementWhereUniqueInput
  }

  /**
   * BankStatement deleteMany
   */
  export type BankStatementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankStatements to delete
     */
    where?: BankStatementWhereInput
    /**
     * Limit how many BankStatements to delete.
     */
    limit?: number
  }

  /**
   * BankStatement.analyses
   */
  export type BankStatement$analysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    where?: AnalysisResultWhereInput
    orderBy?: AnalysisResultOrderByWithRelationInput | AnalysisResultOrderByWithRelationInput[]
    cursor?: AnalysisResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisResultScalarFieldEnum | AnalysisResultScalarFieldEnum[]
  }

  /**
   * BankStatement without action
   */
  export type BankStatementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankStatement
     */
    select?: BankStatementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankStatement
     */
    omit?: BankStatementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankStatementInclude<ExtArgs> | null
  }


  /**
   * Model AnalysisResult
   */

  export type AggregateAnalysisResult = {
    _count: AnalysisResultCountAggregateOutputType | null
    _avg: AnalysisResultAvgAggregateOutputType | null
    _sum: AnalysisResultSumAggregateOutputType | null
    _min: AnalysisResultMinAggregateOutputType | null
    _max: AnalysisResultMaxAggregateOutputType | null
  }

  export type AnalysisResultAvgAggregateOutputType = {
    liquidityCoverage: number | null
    averageBalance: number | null
    cashFlowVolatility: number | null
    progress: number | null
    userId: number | null
  }

  export type AnalysisResultSumAggregateOutputType = {
    liquidityCoverage: number | null
    averageBalance: number | null
    cashFlowVolatility: number | null
    progress: number | null
    userId: number | null
  }

  export type AnalysisResultMinAggregateOutputType = {
    id: string | null
    statementId: string | null
    analysisDate: Date | null
    riskProfile: string | null
    liquidityCoverage: number | null
    averageBalance: number | null
    cashFlowVolatility: number | null
    status: $Enums.AnalysisStatus | null
    progress: number | null
    currentStep: string | null
    error: string | null
    userId: number | null
  }

  export type AnalysisResultMaxAggregateOutputType = {
    id: string | null
    statementId: string | null
    analysisDate: Date | null
    riskProfile: string | null
    liquidityCoverage: number | null
    averageBalance: number | null
    cashFlowVolatility: number | null
    status: $Enums.AnalysisStatus | null
    progress: number | null
    currentStep: string | null
    error: string | null
    userId: number | null
  }

  export type AnalysisResultCountAggregateOutputType = {
    id: number
    statementId: number
    analysisDate: number
    financialInsights: number
    recommendations: number
    riskProfile: number
    liquidityCoverage: number
    averageBalance: number
    cashFlowVolatility: number
    status: number
    progress: number
    currentStep: number
    error: number
    userId: number
    _all: number
  }


  export type AnalysisResultAvgAggregateInputType = {
    liquidityCoverage?: true
    averageBalance?: true
    cashFlowVolatility?: true
    progress?: true
    userId?: true
  }

  export type AnalysisResultSumAggregateInputType = {
    liquidityCoverage?: true
    averageBalance?: true
    cashFlowVolatility?: true
    progress?: true
    userId?: true
  }

  export type AnalysisResultMinAggregateInputType = {
    id?: true
    statementId?: true
    analysisDate?: true
    riskProfile?: true
    liquidityCoverage?: true
    averageBalance?: true
    cashFlowVolatility?: true
    status?: true
    progress?: true
    currentStep?: true
    error?: true
    userId?: true
  }

  export type AnalysisResultMaxAggregateInputType = {
    id?: true
    statementId?: true
    analysisDate?: true
    riskProfile?: true
    liquidityCoverage?: true
    averageBalance?: true
    cashFlowVolatility?: true
    status?: true
    progress?: true
    currentStep?: true
    error?: true
    userId?: true
  }

  export type AnalysisResultCountAggregateInputType = {
    id?: true
    statementId?: true
    analysisDate?: true
    financialInsights?: true
    recommendations?: true
    riskProfile?: true
    liquidityCoverage?: true
    averageBalance?: true
    cashFlowVolatility?: true
    status?: true
    progress?: true
    currentStep?: true
    error?: true
    userId?: true
    _all?: true
  }

  export type AnalysisResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisResult to aggregate.
     */
    where?: AnalysisResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisResults to fetch.
     */
    orderBy?: AnalysisResultOrderByWithRelationInput | AnalysisResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisResults
    **/
    _count?: true | AnalysisResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisResultMaxAggregateInputType
  }

  export type GetAnalysisResultAggregateType<T extends AnalysisResultAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisResult[P]>
      : GetScalarType<T[P], AggregateAnalysisResult[P]>
  }




  export type AnalysisResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisResultWhereInput
    orderBy?: AnalysisResultOrderByWithAggregationInput | AnalysisResultOrderByWithAggregationInput[]
    by: AnalysisResultScalarFieldEnum[] | AnalysisResultScalarFieldEnum
    having?: AnalysisResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisResultCountAggregateInputType | true
    _avg?: AnalysisResultAvgAggregateInputType
    _sum?: AnalysisResultSumAggregateInputType
    _min?: AnalysisResultMinAggregateInputType
    _max?: AnalysisResultMaxAggregateInputType
  }

  export type AnalysisResultGroupByOutputType = {
    id: string
    statementId: string
    analysisDate: Date
    financialInsights: JsonValue | null
    recommendations: JsonValue | null
    riskProfile: string | null
    liquidityCoverage: number | null
    averageBalance: number | null
    cashFlowVolatility: number | null
    status: $Enums.AnalysisStatus
    progress: number
    currentStep: string | null
    error: string | null
    userId: number
    _count: AnalysisResultCountAggregateOutputType | null
    _avg: AnalysisResultAvgAggregateOutputType | null
    _sum: AnalysisResultSumAggregateOutputType | null
    _min: AnalysisResultMinAggregateOutputType | null
    _max: AnalysisResultMaxAggregateOutputType | null
  }

  type GetAnalysisResultGroupByPayload<T extends AnalysisResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisResultGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisResultGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statementId?: boolean
    analysisDate?: boolean
    financialInsights?: boolean
    recommendations?: boolean
    riskProfile?: boolean
    liquidityCoverage?: boolean
    averageBalance?: boolean
    cashFlowVolatility?: boolean
    status?: boolean
    progress?: boolean
    currentStep?: boolean
    error?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    statement?: boolean | BankStatementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisResult"]>

  export type AnalysisResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statementId?: boolean
    analysisDate?: boolean
    financialInsights?: boolean
    recommendations?: boolean
    riskProfile?: boolean
    liquidityCoverage?: boolean
    averageBalance?: boolean
    cashFlowVolatility?: boolean
    status?: boolean
    progress?: boolean
    currentStep?: boolean
    error?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    statement?: boolean | BankStatementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisResult"]>

  export type AnalysisResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statementId?: boolean
    analysisDate?: boolean
    financialInsights?: boolean
    recommendations?: boolean
    riskProfile?: boolean
    liquidityCoverage?: boolean
    averageBalance?: boolean
    cashFlowVolatility?: boolean
    status?: boolean
    progress?: boolean
    currentStep?: boolean
    error?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    statement?: boolean | BankStatementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisResult"]>

  export type AnalysisResultSelectScalar = {
    id?: boolean
    statementId?: boolean
    analysisDate?: boolean
    financialInsights?: boolean
    recommendations?: boolean
    riskProfile?: boolean
    liquidityCoverage?: boolean
    averageBalance?: boolean
    cashFlowVolatility?: boolean
    status?: boolean
    progress?: boolean
    currentStep?: boolean
    error?: boolean
    userId?: boolean
  }

  export type AnalysisResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "statementId" | "analysisDate" | "financialInsights" | "recommendations" | "riskProfile" | "liquidityCoverage" | "averageBalance" | "cashFlowVolatility" | "status" | "progress" | "currentStep" | "error" | "userId", ExtArgs["result"]["analysisResult"]>
  export type AnalysisResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    statement?: boolean | BankStatementDefaultArgs<ExtArgs>
  }
  export type AnalysisResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    statement?: boolean | BankStatementDefaultArgs<ExtArgs>
  }
  export type AnalysisResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    statement?: boolean | BankStatementDefaultArgs<ExtArgs>
  }

  export type $AnalysisResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisResult"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      statement: Prisma.$BankStatementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      statementId: string
      analysisDate: Date
      financialInsights: Prisma.JsonValue | null
      recommendations: Prisma.JsonValue | null
      riskProfile: string | null
      liquidityCoverage: number | null
      averageBalance: number | null
      cashFlowVolatility: number | null
      status: $Enums.AnalysisStatus
      progress: number
      currentStep: string | null
      error: string | null
      userId: number
    }, ExtArgs["result"]["analysisResult"]>
    composites: {}
  }

  type AnalysisResultGetPayload<S extends boolean | null | undefined | AnalysisResultDefaultArgs> = $Result.GetResult<Prisma.$AnalysisResultPayload, S>

  type AnalysisResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisResultCountAggregateInputType | true
    }

  export interface AnalysisResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisResult'], meta: { name: 'AnalysisResult' } }
    /**
     * Find zero or one AnalysisResult that matches the filter.
     * @param {AnalysisResultFindUniqueArgs} args - Arguments to find a AnalysisResult
     * @example
     * // Get one AnalysisResult
     * const analysisResult = await prisma.analysisResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisResultFindUniqueArgs>(args: SelectSubset<T, AnalysisResultFindUniqueArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalysisResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisResultFindUniqueOrThrowArgs} args - Arguments to find a AnalysisResult
     * @example
     * // Get one AnalysisResult
     * const analysisResult = await prisma.analysisResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisResultFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisResultFindFirstArgs} args - Arguments to find a AnalysisResult
     * @example
     * // Get one AnalysisResult
     * const analysisResult = await prisma.analysisResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisResultFindFirstArgs>(args?: SelectSubset<T, AnalysisResultFindFirstArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisResultFindFirstOrThrowArgs} args - Arguments to find a AnalysisResult
     * @example
     * // Get one AnalysisResult
     * const analysisResult = await prisma.analysisResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisResultFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalysisResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisResults
     * const analysisResults = await prisma.analysisResult.findMany()
     * 
     * // Get first 10 AnalysisResults
     * const analysisResults = await prisma.analysisResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisResultWithIdOnly = await prisma.analysisResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisResultFindManyArgs>(args?: SelectSubset<T, AnalysisResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalysisResult.
     * @param {AnalysisResultCreateArgs} args - Arguments to create a AnalysisResult.
     * @example
     * // Create one AnalysisResult
     * const AnalysisResult = await prisma.analysisResult.create({
     *   data: {
     *     // ... data to create a AnalysisResult
     *   }
     * })
     * 
     */
    create<T extends AnalysisResultCreateArgs>(args: SelectSubset<T, AnalysisResultCreateArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalysisResults.
     * @param {AnalysisResultCreateManyArgs} args - Arguments to create many AnalysisResults.
     * @example
     * // Create many AnalysisResults
     * const analysisResult = await prisma.analysisResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisResultCreateManyArgs>(args?: SelectSubset<T, AnalysisResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisResults and returns the data saved in the database.
     * @param {AnalysisResultCreateManyAndReturnArgs} args - Arguments to create many AnalysisResults.
     * @example
     * // Create many AnalysisResults
     * const analysisResult = await prisma.analysisResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisResults and only return the `id`
     * const analysisResultWithIdOnly = await prisma.analysisResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisResultCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalysisResult.
     * @param {AnalysisResultDeleteArgs} args - Arguments to delete one AnalysisResult.
     * @example
     * // Delete one AnalysisResult
     * const AnalysisResult = await prisma.analysisResult.delete({
     *   where: {
     *     // ... filter to delete one AnalysisResult
     *   }
     * })
     * 
     */
    delete<T extends AnalysisResultDeleteArgs>(args: SelectSubset<T, AnalysisResultDeleteArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalysisResult.
     * @param {AnalysisResultUpdateArgs} args - Arguments to update one AnalysisResult.
     * @example
     * // Update one AnalysisResult
     * const analysisResult = await prisma.analysisResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisResultUpdateArgs>(args: SelectSubset<T, AnalysisResultUpdateArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalysisResults.
     * @param {AnalysisResultDeleteManyArgs} args - Arguments to filter AnalysisResults to delete.
     * @example
     * // Delete a few AnalysisResults
     * const { count } = await prisma.analysisResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisResultDeleteManyArgs>(args?: SelectSubset<T, AnalysisResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisResults
     * const analysisResult = await prisma.analysisResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisResultUpdateManyArgs>(args: SelectSubset<T, AnalysisResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisResults and returns the data updated in the database.
     * @param {AnalysisResultUpdateManyAndReturnArgs} args - Arguments to update many AnalysisResults.
     * @example
     * // Update many AnalysisResults
     * const analysisResult = await prisma.analysisResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalysisResults and only return the `id`
     * const analysisResultWithIdOnly = await prisma.analysisResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnalysisResultUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalysisResult.
     * @param {AnalysisResultUpsertArgs} args - Arguments to update or create a AnalysisResult.
     * @example
     * // Update or create a AnalysisResult
     * const analysisResult = await prisma.analysisResult.upsert({
     *   create: {
     *     // ... data to create a AnalysisResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisResult we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisResultUpsertArgs>(args: SelectSubset<T, AnalysisResultUpsertArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalysisResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisResultCountArgs} args - Arguments to filter AnalysisResults to count.
     * @example
     * // Count the number of AnalysisResults
     * const count = await prisma.analysisResult.count({
     *   where: {
     *     // ... the filter for the AnalysisResults we want to count
     *   }
     * })
    **/
    count<T extends AnalysisResultCountArgs>(
      args?: Subset<T, AnalysisResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisResultAggregateArgs>(args: Subset<T, AnalysisResultAggregateArgs>): Prisma.PrismaPromise<GetAnalysisResultAggregateType<T>>

    /**
     * Group by AnalysisResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisResultGroupByArgs} args - Group by arguments.
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
      T extends AnalysisResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisResultGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalysisResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisResult model
   */
  readonly fields: AnalysisResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    statement<T extends BankStatementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BankStatementDefaultArgs<ExtArgs>>): Prisma__BankStatementClient<$Result.GetResult<Prisma.$BankStatementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnalysisResult model
   */
  interface AnalysisResultFieldRefs {
    readonly id: FieldRef<"AnalysisResult", 'String'>
    readonly statementId: FieldRef<"AnalysisResult", 'String'>
    readonly analysisDate: FieldRef<"AnalysisResult", 'DateTime'>
    readonly financialInsights: FieldRef<"AnalysisResult", 'Json'>
    readonly recommendations: FieldRef<"AnalysisResult", 'Json'>
    readonly riskProfile: FieldRef<"AnalysisResult", 'String'>
    readonly liquidityCoverage: FieldRef<"AnalysisResult", 'Float'>
    readonly averageBalance: FieldRef<"AnalysisResult", 'Float'>
    readonly cashFlowVolatility: FieldRef<"AnalysisResult", 'Float'>
    readonly status: FieldRef<"AnalysisResult", 'AnalysisStatus'>
    readonly progress: FieldRef<"AnalysisResult", 'Int'>
    readonly currentStep: FieldRef<"AnalysisResult", 'String'>
    readonly error: FieldRef<"AnalysisResult", 'String'>
    readonly userId: FieldRef<"AnalysisResult", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisResult findUnique
   */
  export type AnalysisResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisResult to fetch.
     */
    where: AnalysisResultWhereUniqueInput
  }

  /**
   * AnalysisResult findUniqueOrThrow
   */
  export type AnalysisResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisResult to fetch.
     */
    where: AnalysisResultWhereUniqueInput
  }

  /**
   * AnalysisResult findFirst
   */
  export type AnalysisResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisResult to fetch.
     */
    where?: AnalysisResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisResults to fetch.
     */
    orderBy?: AnalysisResultOrderByWithRelationInput | AnalysisResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisResults.
     */
    cursor?: AnalysisResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisResults.
     */
    distinct?: AnalysisResultScalarFieldEnum | AnalysisResultScalarFieldEnum[]
  }

  /**
   * AnalysisResult findFirstOrThrow
   */
  export type AnalysisResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisResult to fetch.
     */
    where?: AnalysisResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisResults to fetch.
     */
    orderBy?: AnalysisResultOrderByWithRelationInput | AnalysisResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisResults.
     */
    cursor?: AnalysisResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisResults.
     */
    distinct?: AnalysisResultScalarFieldEnum | AnalysisResultScalarFieldEnum[]
  }

  /**
   * AnalysisResult findMany
   */
  export type AnalysisResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisResults to fetch.
     */
    where?: AnalysisResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisResults to fetch.
     */
    orderBy?: AnalysisResultOrderByWithRelationInput | AnalysisResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisResults.
     */
    cursor?: AnalysisResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisResults.
     */
    skip?: number
    distinct?: AnalysisResultScalarFieldEnum | AnalysisResultScalarFieldEnum[]
  }

  /**
   * AnalysisResult create
   */
  export type AnalysisResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalysisResult.
     */
    data: XOR<AnalysisResultCreateInput, AnalysisResultUncheckedCreateInput>
  }

  /**
   * AnalysisResult createMany
   */
  export type AnalysisResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisResults.
     */
    data: AnalysisResultCreateManyInput | AnalysisResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisResult createManyAndReturn
   */
  export type AnalysisResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * The data used to create many AnalysisResults.
     */
    data: AnalysisResultCreateManyInput | AnalysisResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisResult update
   */
  export type AnalysisResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalysisResult.
     */
    data: XOR<AnalysisResultUpdateInput, AnalysisResultUncheckedUpdateInput>
    /**
     * Choose, which AnalysisResult to update.
     */
    where: AnalysisResultWhereUniqueInput
  }

  /**
   * AnalysisResult updateMany
   */
  export type AnalysisResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisResults.
     */
    data: XOR<AnalysisResultUpdateManyMutationInput, AnalysisResultUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisResults to update
     */
    where?: AnalysisResultWhereInput
    /**
     * Limit how many AnalysisResults to update.
     */
    limit?: number
  }

  /**
   * AnalysisResult updateManyAndReturn
   */
  export type AnalysisResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * The data used to update AnalysisResults.
     */
    data: XOR<AnalysisResultUpdateManyMutationInput, AnalysisResultUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisResults to update
     */
    where?: AnalysisResultWhereInput
    /**
     * Limit how many AnalysisResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisResult upsert
   */
  export type AnalysisResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalysisResult to update in case it exists.
     */
    where: AnalysisResultWhereUniqueInput
    /**
     * In case the AnalysisResult found by the `where` argument doesn't exist, create a new AnalysisResult with this data.
     */
    create: XOR<AnalysisResultCreateInput, AnalysisResultUncheckedCreateInput>
    /**
     * In case the AnalysisResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisResultUpdateInput, AnalysisResultUncheckedUpdateInput>
  }

  /**
   * AnalysisResult delete
   */
  export type AnalysisResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * Filter which AnalysisResult to delete.
     */
    where: AnalysisResultWhereUniqueInput
  }

  /**
   * AnalysisResult deleteMany
   */
  export type AnalysisResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisResults to delete
     */
    where?: AnalysisResultWhereInput
    /**
     * Limit how many AnalysisResults to delete.
     */
    limit?: number
  }

  /**
   * AnalysisResult without action
   */
  export type AnalysisResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
  }


  /**
   * Model TreasuryProduct
   */

  export type AggregateTreasuryProduct = {
    _count: TreasuryProductCountAggregateOutputType | null
    _avg: TreasuryProductAvgAggregateOutputType | null
    _sum: TreasuryProductSumAggregateOutputType | null
    _min: TreasuryProductMinAggregateOutputType | null
    _max: TreasuryProductMaxAggregateOutputType | null
  }

  export type TreasuryProductAvgAggregateOutputType = {
    minInvestment: number | null
    expectedReturn: number | null
  }

  export type TreasuryProductSumAggregateOutputType = {
    minInvestment: number | null
    expectedReturn: number | null
  }

  export type TreasuryProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    description: string | null
    minInvestment: number | null
    expectedReturn: number | null
    riskLevel: string | null
    tenure: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TreasuryProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    description: string | null
    minInvestment: number | null
    expectedReturn: number | null
    riskLevel: string | null
    tenure: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TreasuryProductCountAggregateOutputType = {
    id: number
    name: number
    category: number
    description: number
    minInvestment: number
    expectedReturn: number
    riskLevel: number
    tenure: number
    features: number
    eligibility: number
    documents: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TreasuryProductAvgAggregateInputType = {
    minInvestment?: true
    expectedReturn?: true
  }

  export type TreasuryProductSumAggregateInputType = {
    minInvestment?: true
    expectedReturn?: true
  }

  export type TreasuryProductMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    minInvestment?: true
    expectedReturn?: true
    riskLevel?: true
    tenure?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TreasuryProductMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    minInvestment?: true
    expectedReturn?: true
    riskLevel?: true
    tenure?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TreasuryProductCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    minInvestment?: true
    expectedReturn?: true
    riskLevel?: true
    tenure?: true
    features?: true
    eligibility?: true
    documents?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TreasuryProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreasuryProduct to aggregate.
     */
    where?: TreasuryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryProducts to fetch.
     */
    orderBy?: TreasuryProductOrderByWithRelationInput | TreasuryProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreasuryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreasuryProducts
    **/
    _count?: true | TreasuryProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreasuryProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreasuryProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreasuryProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreasuryProductMaxAggregateInputType
  }

  export type GetTreasuryProductAggregateType<T extends TreasuryProductAggregateArgs> = {
        [P in keyof T & keyof AggregateTreasuryProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreasuryProduct[P]>
      : GetScalarType<T[P], AggregateTreasuryProduct[P]>
  }




  export type TreasuryProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreasuryProductWhereInput
    orderBy?: TreasuryProductOrderByWithAggregationInput | TreasuryProductOrderByWithAggregationInput[]
    by: TreasuryProductScalarFieldEnum[] | TreasuryProductScalarFieldEnum
    having?: TreasuryProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreasuryProductCountAggregateInputType | true
    _avg?: TreasuryProductAvgAggregateInputType
    _sum?: TreasuryProductSumAggregateInputType
    _min?: TreasuryProductMinAggregateInputType
    _max?: TreasuryProductMaxAggregateInputType
  }

  export type TreasuryProductGroupByOutputType = {
    id: string
    name: string
    category: string
    description: string
    minInvestment: number
    expectedReturn: number
    riskLevel: string
    tenure: string
    features: JsonValue
    eligibility: JsonValue
    documents: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: TreasuryProductCountAggregateOutputType | null
    _avg: TreasuryProductAvgAggregateOutputType | null
    _sum: TreasuryProductSumAggregateOutputType | null
    _min: TreasuryProductMinAggregateOutputType | null
    _max: TreasuryProductMaxAggregateOutputType | null
  }

  type GetTreasuryProductGroupByPayload<T extends TreasuryProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreasuryProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreasuryProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreasuryProductGroupByOutputType[P]>
            : GetScalarType<T[P], TreasuryProductGroupByOutputType[P]>
        }
      >
    >


  export type TreasuryProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    minInvestment?: boolean
    expectedReturn?: boolean
    riskLevel?: boolean
    tenure?: boolean
    features?: boolean
    eligibility?: boolean
    documents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["treasuryProduct"]>

  export type TreasuryProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    minInvestment?: boolean
    expectedReturn?: boolean
    riskLevel?: boolean
    tenure?: boolean
    features?: boolean
    eligibility?: boolean
    documents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["treasuryProduct"]>

  export type TreasuryProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    minInvestment?: boolean
    expectedReturn?: boolean
    riskLevel?: boolean
    tenure?: boolean
    features?: boolean
    eligibility?: boolean
    documents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["treasuryProduct"]>

  export type TreasuryProductSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    minInvestment?: boolean
    expectedReturn?: boolean
    riskLevel?: boolean
    tenure?: boolean
    features?: boolean
    eligibility?: boolean
    documents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TreasuryProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "description" | "minInvestment" | "expectedReturn" | "riskLevel" | "tenure" | "features" | "eligibility" | "documents" | "createdAt" | "updatedAt", ExtArgs["result"]["treasuryProduct"]>

  export type $TreasuryProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreasuryProduct"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      description: string
      minInvestment: number
      expectedReturn: number
      riskLevel: string
      tenure: string
      features: Prisma.JsonValue
      eligibility: Prisma.JsonValue
      documents: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["treasuryProduct"]>
    composites: {}
  }

  type TreasuryProductGetPayload<S extends boolean | null | undefined | TreasuryProductDefaultArgs> = $Result.GetResult<Prisma.$TreasuryProductPayload, S>

  type TreasuryProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreasuryProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreasuryProductCountAggregateInputType | true
    }

  export interface TreasuryProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreasuryProduct'], meta: { name: 'TreasuryProduct' } }
    /**
     * Find zero or one TreasuryProduct that matches the filter.
     * @param {TreasuryProductFindUniqueArgs} args - Arguments to find a TreasuryProduct
     * @example
     * // Get one TreasuryProduct
     * const treasuryProduct = await prisma.treasuryProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreasuryProductFindUniqueArgs>(args: SelectSubset<T, TreasuryProductFindUniqueArgs<ExtArgs>>): Prisma__TreasuryProductClient<$Result.GetResult<Prisma.$TreasuryProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TreasuryProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreasuryProductFindUniqueOrThrowArgs} args - Arguments to find a TreasuryProduct
     * @example
     * // Get one TreasuryProduct
     * const treasuryProduct = await prisma.treasuryProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreasuryProductFindUniqueOrThrowArgs>(args: SelectSubset<T, TreasuryProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreasuryProductClient<$Result.GetResult<Prisma.$TreasuryProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreasuryProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryProductFindFirstArgs} args - Arguments to find a TreasuryProduct
     * @example
     * // Get one TreasuryProduct
     * const treasuryProduct = await prisma.treasuryProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreasuryProductFindFirstArgs>(args?: SelectSubset<T, TreasuryProductFindFirstArgs<ExtArgs>>): Prisma__TreasuryProductClient<$Result.GetResult<Prisma.$TreasuryProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreasuryProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryProductFindFirstOrThrowArgs} args - Arguments to find a TreasuryProduct
     * @example
     * // Get one TreasuryProduct
     * const treasuryProduct = await prisma.treasuryProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreasuryProductFindFirstOrThrowArgs>(args?: SelectSubset<T, TreasuryProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreasuryProductClient<$Result.GetResult<Prisma.$TreasuryProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TreasuryProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreasuryProducts
     * const treasuryProducts = await prisma.treasuryProduct.findMany()
     * 
     * // Get first 10 TreasuryProducts
     * const treasuryProducts = await prisma.treasuryProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treasuryProductWithIdOnly = await prisma.treasuryProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreasuryProductFindManyArgs>(args?: SelectSubset<T, TreasuryProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TreasuryProduct.
     * @param {TreasuryProductCreateArgs} args - Arguments to create a TreasuryProduct.
     * @example
     * // Create one TreasuryProduct
     * const TreasuryProduct = await prisma.treasuryProduct.create({
     *   data: {
     *     // ... data to create a TreasuryProduct
     *   }
     * })
     * 
     */
    create<T extends TreasuryProductCreateArgs>(args: SelectSubset<T, TreasuryProductCreateArgs<ExtArgs>>): Prisma__TreasuryProductClient<$Result.GetResult<Prisma.$TreasuryProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TreasuryProducts.
     * @param {TreasuryProductCreateManyArgs} args - Arguments to create many TreasuryProducts.
     * @example
     * // Create many TreasuryProducts
     * const treasuryProduct = await prisma.treasuryProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreasuryProductCreateManyArgs>(args?: SelectSubset<T, TreasuryProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TreasuryProducts and returns the data saved in the database.
     * @param {TreasuryProductCreateManyAndReturnArgs} args - Arguments to create many TreasuryProducts.
     * @example
     * // Create many TreasuryProducts
     * const treasuryProduct = await prisma.treasuryProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TreasuryProducts and only return the `id`
     * const treasuryProductWithIdOnly = await prisma.treasuryProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreasuryProductCreateManyAndReturnArgs>(args?: SelectSubset<T, TreasuryProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TreasuryProduct.
     * @param {TreasuryProductDeleteArgs} args - Arguments to delete one TreasuryProduct.
     * @example
     * // Delete one TreasuryProduct
     * const TreasuryProduct = await prisma.treasuryProduct.delete({
     *   where: {
     *     // ... filter to delete one TreasuryProduct
     *   }
     * })
     * 
     */
    delete<T extends TreasuryProductDeleteArgs>(args: SelectSubset<T, TreasuryProductDeleteArgs<ExtArgs>>): Prisma__TreasuryProductClient<$Result.GetResult<Prisma.$TreasuryProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TreasuryProduct.
     * @param {TreasuryProductUpdateArgs} args - Arguments to update one TreasuryProduct.
     * @example
     * // Update one TreasuryProduct
     * const treasuryProduct = await prisma.treasuryProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreasuryProductUpdateArgs>(args: SelectSubset<T, TreasuryProductUpdateArgs<ExtArgs>>): Prisma__TreasuryProductClient<$Result.GetResult<Prisma.$TreasuryProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TreasuryProducts.
     * @param {TreasuryProductDeleteManyArgs} args - Arguments to filter TreasuryProducts to delete.
     * @example
     * // Delete a few TreasuryProducts
     * const { count } = await prisma.treasuryProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreasuryProductDeleteManyArgs>(args?: SelectSubset<T, TreasuryProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreasuryProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreasuryProducts
     * const treasuryProduct = await prisma.treasuryProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreasuryProductUpdateManyArgs>(args: SelectSubset<T, TreasuryProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreasuryProducts and returns the data updated in the database.
     * @param {TreasuryProductUpdateManyAndReturnArgs} args - Arguments to update many TreasuryProducts.
     * @example
     * // Update many TreasuryProducts
     * const treasuryProduct = await prisma.treasuryProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TreasuryProducts and only return the `id`
     * const treasuryProductWithIdOnly = await prisma.treasuryProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends TreasuryProductUpdateManyAndReturnArgs>(args: SelectSubset<T, TreasuryProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TreasuryProduct.
     * @param {TreasuryProductUpsertArgs} args - Arguments to update or create a TreasuryProduct.
     * @example
     * // Update or create a TreasuryProduct
     * const treasuryProduct = await prisma.treasuryProduct.upsert({
     *   create: {
     *     // ... data to create a TreasuryProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreasuryProduct we want to update
     *   }
     * })
     */
    upsert<T extends TreasuryProductUpsertArgs>(args: SelectSubset<T, TreasuryProductUpsertArgs<ExtArgs>>): Prisma__TreasuryProductClient<$Result.GetResult<Prisma.$TreasuryProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TreasuryProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryProductCountArgs} args - Arguments to filter TreasuryProducts to count.
     * @example
     * // Count the number of TreasuryProducts
     * const count = await prisma.treasuryProduct.count({
     *   where: {
     *     // ... the filter for the TreasuryProducts we want to count
     *   }
     * })
    **/
    count<T extends TreasuryProductCountArgs>(
      args?: Subset<T, TreasuryProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreasuryProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreasuryProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreasuryProductAggregateArgs>(args: Subset<T, TreasuryProductAggregateArgs>): Prisma.PrismaPromise<GetTreasuryProductAggregateType<T>>

    /**
     * Group by TreasuryProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryProductGroupByArgs} args - Group by arguments.
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
      T extends TreasuryProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreasuryProductGroupByArgs['orderBy'] }
        : { orderBy?: TreasuryProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TreasuryProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreasuryProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreasuryProduct model
   */
  readonly fields: TreasuryProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreasuryProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreasuryProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TreasuryProduct model
   */
  interface TreasuryProductFieldRefs {
    readonly id: FieldRef<"TreasuryProduct", 'String'>
    readonly name: FieldRef<"TreasuryProduct", 'String'>
    readonly category: FieldRef<"TreasuryProduct", 'String'>
    readonly description: FieldRef<"TreasuryProduct", 'String'>
    readonly minInvestment: FieldRef<"TreasuryProduct", 'Float'>
    readonly expectedReturn: FieldRef<"TreasuryProduct", 'Float'>
    readonly riskLevel: FieldRef<"TreasuryProduct", 'String'>
    readonly tenure: FieldRef<"TreasuryProduct", 'String'>
    readonly features: FieldRef<"TreasuryProduct", 'Json'>
    readonly eligibility: FieldRef<"TreasuryProduct", 'Json'>
    readonly documents: FieldRef<"TreasuryProduct", 'Json'>
    readonly createdAt: FieldRef<"TreasuryProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"TreasuryProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TreasuryProduct findUnique
   */
  export type TreasuryProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryProduct
     */
    select?: TreasuryProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryProduct
     */
    omit?: TreasuryProductOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryProduct to fetch.
     */
    where: TreasuryProductWhereUniqueInput
  }

  /**
   * TreasuryProduct findUniqueOrThrow
   */
  export type TreasuryProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryProduct
     */
    select?: TreasuryProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryProduct
     */
    omit?: TreasuryProductOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryProduct to fetch.
     */
    where: TreasuryProductWhereUniqueInput
  }

  /**
   * TreasuryProduct findFirst
   */
  export type TreasuryProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryProduct
     */
    select?: TreasuryProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryProduct
     */
    omit?: TreasuryProductOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryProduct to fetch.
     */
    where?: TreasuryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryProducts to fetch.
     */
    orderBy?: TreasuryProductOrderByWithRelationInput | TreasuryProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreasuryProducts.
     */
    cursor?: TreasuryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreasuryProducts.
     */
    distinct?: TreasuryProductScalarFieldEnum | TreasuryProductScalarFieldEnum[]
  }

  /**
   * TreasuryProduct findFirstOrThrow
   */
  export type TreasuryProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryProduct
     */
    select?: TreasuryProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryProduct
     */
    omit?: TreasuryProductOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryProduct to fetch.
     */
    where?: TreasuryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryProducts to fetch.
     */
    orderBy?: TreasuryProductOrderByWithRelationInput | TreasuryProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreasuryProducts.
     */
    cursor?: TreasuryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreasuryProducts.
     */
    distinct?: TreasuryProductScalarFieldEnum | TreasuryProductScalarFieldEnum[]
  }

  /**
   * TreasuryProduct findMany
   */
  export type TreasuryProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryProduct
     */
    select?: TreasuryProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryProduct
     */
    omit?: TreasuryProductOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryProducts to fetch.
     */
    where?: TreasuryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryProducts to fetch.
     */
    orderBy?: TreasuryProductOrderByWithRelationInput | TreasuryProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreasuryProducts.
     */
    cursor?: TreasuryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryProducts.
     */
    skip?: number
    distinct?: TreasuryProductScalarFieldEnum | TreasuryProductScalarFieldEnum[]
  }

  /**
   * TreasuryProduct create
   */
  export type TreasuryProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryProduct
     */
    select?: TreasuryProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryProduct
     */
    omit?: TreasuryProductOmit<ExtArgs> | null
    /**
     * The data needed to create a TreasuryProduct.
     */
    data: XOR<TreasuryProductCreateInput, TreasuryProductUncheckedCreateInput>
  }

  /**
   * TreasuryProduct createMany
   */
  export type TreasuryProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreasuryProducts.
     */
    data: TreasuryProductCreateManyInput | TreasuryProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TreasuryProduct createManyAndReturn
   */
  export type TreasuryProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryProduct
     */
    select?: TreasuryProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryProduct
     */
    omit?: TreasuryProductOmit<ExtArgs> | null
    /**
     * The data used to create many TreasuryProducts.
     */
    data: TreasuryProductCreateManyInput | TreasuryProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TreasuryProduct update
   */
  export type TreasuryProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryProduct
     */
    select?: TreasuryProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryProduct
     */
    omit?: TreasuryProductOmit<ExtArgs> | null
    /**
     * The data needed to update a TreasuryProduct.
     */
    data: XOR<TreasuryProductUpdateInput, TreasuryProductUncheckedUpdateInput>
    /**
     * Choose, which TreasuryProduct to update.
     */
    where: TreasuryProductWhereUniqueInput
  }

  /**
   * TreasuryProduct updateMany
   */
  export type TreasuryProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreasuryProducts.
     */
    data: XOR<TreasuryProductUpdateManyMutationInput, TreasuryProductUncheckedUpdateManyInput>
    /**
     * Filter which TreasuryProducts to update
     */
    where?: TreasuryProductWhereInput
    /**
     * Limit how many TreasuryProducts to update.
     */
    limit?: number
  }

  /**
   * TreasuryProduct updateManyAndReturn
   */
  export type TreasuryProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryProduct
     */
    select?: TreasuryProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryProduct
     */
    omit?: TreasuryProductOmit<ExtArgs> | null
    /**
     * The data used to update TreasuryProducts.
     */
    data: XOR<TreasuryProductUpdateManyMutationInput, TreasuryProductUncheckedUpdateManyInput>
    /**
     * Filter which TreasuryProducts to update
     */
    where?: TreasuryProductWhereInput
    /**
     * Limit how many TreasuryProducts to update.
     */
    limit?: number
  }

  /**
   * TreasuryProduct upsert
   */
  export type TreasuryProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryProduct
     */
    select?: TreasuryProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryProduct
     */
    omit?: TreasuryProductOmit<ExtArgs> | null
    /**
     * The filter to search for the TreasuryProduct to update in case it exists.
     */
    where: TreasuryProductWhereUniqueInput
    /**
     * In case the TreasuryProduct found by the `where` argument doesn't exist, create a new TreasuryProduct with this data.
     */
    create: XOR<TreasuryProductCreateInput, TreasuryProductUncheckedCreateInput>
    /**
     * In case the TreasuryProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreasuryProductUpdateInput, TreasuryProductUncheckedUpdateInput>
  }

  /**
   * TreasuryProduct delete
   */
  export type TreasuryProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryProduct
     */
    select?: TreasuryProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryProduct
     */
    omit?: TreasuryProductOmit<ExtArgs> | null
    /**
     * Filter which TreasuryProduct to delete.
     */
    where: TreasuryProductWhereUniqueInput
  }

  /**
   * TreasuryProduct deleteMany
   */
  export type TreasuryProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreasuryProducts to delete
     */
    where?: TreasuryProductWhereInput
    /**
     * Limit how many TreasuryProducts to delete.
     */
    limit?: number
  }

  /**
   * TreasuryProduct without action
   */
  export type TreasuryProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryProduct
     */
    select?: TreasuryProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryProduct
     */
    omit?: TreasuryProductOmit<ExtArgs> | null
  }


  /**
   * Model SupportedFormat
   */

  export type AggregateSupportedFormat = {
    _count: SupportedFormatCountAggregateOutputType | null
    _avg: SupportedFormatAvgAggregateOutputType | null
    _sum: SupportedFormatSumAggregateOutputType | null
    _min: SupportedFormatMinAggregateOutputType | null
    _max: SupportedFormatMaxAggregateOutputType | null
  }

  export type SupportedFormatAvgAggregateOutputType = {
    id: number | null
  }

  export type SupportedFormatSumAggregateOutputType = {
    id: number | null
  }

  export type SupportedFormatMinAggregateOutputType = {
    id: number | null
    extension: string | null
    mimeType: string | null
    description: string | null
  }

  export type SupportedFormatMaxAggregateOutputType = {
    id: number | null
    extension: string | null
    mimeType: string | null
    description: string | null
  }

  export type SupportedFormatCountAggregateOutputType = {
    id: number
    extension: number
    mimeType: number
    description: number
    _all: number
  }


  export type SupportedFormatAvgAggregateInputType = {
    id?: true
  }

  export type SupportedFormatSumAggregateInputType = {
    id?: true
  }

  export type SupportedFormatMinAggregateInputType = {
    id?: true
    extension?: true
    mimeType?: true
    description?: true
  }

  export type SupportedFormatMaxAggregateInputType = {
    id?: true
    extension?: true
    mimeType?: true
    description?: true
  }

  export type SupportedFormatCountAggregateInputType = {
    id?: true
    extension?: true
    mimeType?: true
    description?: true
    _all?: true
  }

  export type SupportedFormatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportedFormat to aggregate.
     */
    where?: SupportedFormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportedFormats to fetch.
     */
    orderBy?: SupportedFormatOrderByWithRelationInput | SupportedFormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportedFormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportedFormats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportedFormats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportedFormats
    **/
    _count?: true | SupportedFormatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupportedFormatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupportedFormatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportedFormatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportedFormatMaxAggregateInputType
  }

  export type GetSupportedFormatAggregateType<T extends SupportedFormatAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportedFormat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportedFormat[P]>
      : GetScalarType<T[P], AggregateSupportedFormat[P]>
  }




  export type SupportedFormatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportedFormatWhereInput
    orderBy?: SupportedFormatOrderByWithAggregationInput | SupportedFormatOrderByWithAggregationInput[]
    by: SupportedFormatScalarFieldEnum[] | SupportedFormatScalarFieldEnum
    having?: SupportedFormatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportedFormatCountAggregateInputType | true
    _avg?: SupportedFormatAvgAggregateInputType
    _sum?: SupportedFormatSumAggregateInputType
    _min?: SupportedFormatMinAggregateInputType
    _max?: SupportedFormatMaxAggregateInputType
  }

  export type SupportedFormatGroupByOutputType = {
    id: number
    extension: string
    mimeType: string
    description: string
    _count: SupportedFormatCountAggregateOutputType | null
    _avg: SupportedFormatAvgAggregateOutputType | null
    _sum: SupportedFormatSumAggregateOutputType | null
    _min: SupportedFormatMinAggregateOutputType | null
    _max: SupportedFormatMaxAggregateOutputType | null
  }

  type GetSupportedFormatGroupByPayload<T extends SupportedFormatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportedFormatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportedFormatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportedFormatGroupByOutputType[P]>
            : GetScalarType<T[P], SupportedFormatGroupByOutputType[P]>
        }
      >
    >


  export type SupportedFormatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    extension?: boolean
    mimeType?: boolean
    description?: boolean
  }, ExtArgs["result"]["supportedFormat"]>

  export type SupportedFormatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    extension?: boolean
    mimeType?: boolean
    description?: boolean
  }, ExtArgs["result"]["supportedFormat"]>

  export type SupportedFormatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    extension?: boolean
    mimeType?: boolean
    description?: boolean
  }, ExtArgs["result"]["supportedFormat"]>

  export type SupportedFormatSelectScalar = {
    id?: boolean
    extension?: boolean
    mimeType?: boolean
    description?: boolean
  }

  export type SupportedFormatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "extension" | "mimeType" | "description", ExtArgs["result"]["supportedFormat"]>

  export type $SupportedFormatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportedFormat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      extension: string
      mimeType: string
      description: string
    }, ExtArgs["result"]["supportedFormat"]>
    composites: {}
  }

  type SupportedFormatGetPayload<S extends boolean | null | undefined | SupportedFormatDefaultArgs> = $Result.GetResult<Prisma.$SupportedFormatPayload, S>

  type SupportedFormatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupportedFormatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupportedFormatCountAggregateInputType | true
    }

  export interface SupportedFormatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportedFormat'], meta: { name: 'SupportedFormat' } }
    /**
     * Find zero or one SupportedFormat that matches the filter.
     * @param {SupportedFormatFindUniqueArgs} args - Arguments to find a SupportedFormat
     * @example
     * // Get one SupportedFormat
     * const supportedFormat = await prisma.supportedFormat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportedFormatFindUniqueArgs>(args: SelectSubset<T, SupportedFormatFindUniqueArgs<ExtArgs>>): Prisma__SupportedFormatClient<$Result.GetResult<Prisma.$SupportedFormatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupportedFormat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupportedFormatFindUniqueOrThrowArgs} args - Arguments to find a SupportedFormat
     * @example
     * // Get one SupportedFormat
     * const supportedFormat = await prisma.supportedFormat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportedFormatFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportedFormatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportedFormatClient<$Result.GetResult<Prisma.$SupportedFormatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportedFormat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportedFormatFindFirstArgs} args - Arguments to find a SupportedFormat
     * @example
     * // Get one SupportedFormat
     * const supportedFormat = await prisma.supportedFormat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportedFormatFindFirstArgs>(args?: SelectSubset<T, SupportedFormatFindFirstArgs<ExtArgs>>): Prisma__SupportedFormatClient<$Result.GetResult<Prisma.$SupportedFormatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportedFormat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportedFormatFindFirstOrThrowArgs} args - Arguments to find a SupportedFormat
     * @example
     * // Get one SupportedFormat
     * const supportedFormat = await prisma.supportedFormat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportedFormatFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportedFormatFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportedFormatClient<$Result.GetResult<Prisma.$SupportedFormatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupportedFormats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportedFormatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportedFormats
     * const supportedFormats = await prisma.supportedFormat.findMany()
     * 
     * // Get first 10 SupportedFormats
     * const supportedFormats = await prisma.supportedFormat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportedFormatWithIdOnly = await prisma.supportedFormat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportedFormatFindManyArgs>(args?: SelectSubset<T, SupportedFormatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportedFormatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupportedFormat.
     * @param {SupportedFormatCreateArgs} args - Arguments to create a SupportedFormat.
     * @example
     * // Create one SupportedFormat
     * const SupportedFormat = await prisma.supportedFormat.create({
     *   data: {
     *     // ... data to create a SupportedFormat
     *   }
     * })
     * 
     */
    create<T extends SupportedFormatCreateArgs>(args: SelectSubset<T, SupportedFormatCreateArgs<ExtArgs>>): Prisma__SupportedFormatClient<$Result.GetResult<Prisma.$SupportedFormatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupportedFormats.
     * @param {SupportedFormatCreateManyArgs} args - Arguments to create many SupportedFormats.
     * @example
     * // Create many SupportedFormats
     * const supportedFormat = await prisma.supportedFormat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportedFormatCreateManyArgs>(args?: SelectSubset<T, SupportedFormatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupportedFormats and returns the data saved in the database.
     * @param {SupportedFormatCreateManyAndReturnArgs} args - Arguments to create many SupportedFormats.
     * @example
     * // Create many SupportedFormats
     * const supportedFormat = await prisma.supportedFormat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupportedFormats and only return the `id`
     * const supportedFormatWithIdOnly = await prisma.supportedFormat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportedFormatCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportedFormatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportedFormatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupportedFormat.
     * @param {SupportedFormatDeleteArgs} args - Arguments to delete one SupportedFormat.
     * @example
     * // Delete one SupportedFormat
     * const SupportedFormat = await prisma.supportedFormat.delete({
     *   where: {
     *     // ... filter to delete one SupportedFormat
     *   }
     * })
     * 
     */
    delete<T extends SupportedFormatDeleteArgs>(args: SelectSubset<T, SupportedFormatDeleteArgs<ExtArgs>>): Prisma__SupportedFormatClient<$Result.GetResult<Prisma.$SupportedFormatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupportedFormat.
     * @param {SupportedFormatUpdateArgs} args - Arguments to update one SupportedFormat.
     * @example
     * // Update one SupportedFormat
     * const supportedFormat = await prisma.supportedFormat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportedFormatUpdateArgs>(args: SelectSubset<T, SupportedFormatUpdateArgs<ExtArgs>>): Prisma__SupportedFormatClient<$Result.GetResult<Prisma.$SupportedFormatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupportedFormats.
     * @param {SupportedFormatDeleteManyArgs} args - Arguments to filter SupportedFormats to delete.
     * @example
     * // Delete a few SupportedFormats
     * const { count } = await prisma.supportedFormat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportedFormatDeleteManyArgs>(args?: SelectSubset<T, SupportedFormatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportedFormats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportedFormatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportedFormats
     * const supportedFormat = await prisma.supportedFormat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportedFormatUpdateManyArgs>(args: SelectSubset<T, SupportedFormatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportedFormats and returns the data updated in the database.
     * @param {SupportedFormatUpdateManyAndReturnArgs} args - Arguments to update many SupportedFormats.
     * @example
     * // Update many SupportedFormats
     * const supportedFormat = await prisma.supportedFormat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupportedFormats and only return the `id`
     * const supportedFormatWithIdOnly = await prisma.supportedFormat.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupportedFormatUpdateManyAndReturnArgs>(args: SelectSubset<T, SupportedFormatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportedFormatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupportedFormat.
     * @param {SupportedFormatUpsertArgs} args - Arguments to update or create a SupportedFormat.
     * @example
     * // Update or create a SupportedFormat
     * const supportedFormat = await prisma.supportedFormat.upsert({
     *   create: {
     *     // ... data to create a SupportedFormat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportedFormat we want to update
     *   }
     * })
     */
    upsert<T extends SupportedFormatUpsertArgs>(args: SelectSubset<T, SupportedFormatUpsertArgs<ExtArgs>>): Prisma__SupportedFormatClient<$Result.GetResult<Prisma.$SupportedFormatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupportedFormats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportedFormatCountArgs} args - Arguments to filter SupportedFormats to count.
     * @example
     * // Count the number of SupportedFormats
     * const count = await prisma.supportedFormat.count({
     *   where: {
     *     // ... the filter for the SupportedFormats we want to count
     *   }
     * })
    **/
    count<T extends SupportedFormatCountArgs>(
      args?: Subset<T, SupportedFormatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportedFormatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportedFormat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportedFormatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupportedFormatAggregateArgs>(args: Subset<T, SupportedFormatAggregateArgs>): Prisma.PrismaPromise<GetSupportedFormatAggregateType<T>>

    /**
     * Group by SupportedFormat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportedFormatGroupByArgs} args - Group by arguments.
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
      T extends SupportedFormatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportedFormatGroupByArgs['orderBy'] }
        : { orderBy?: SupportedFormatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupportedFormatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportedFormatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportedFormat model
   */
  readonly fields: SupportedFormatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportedFormat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportedFormatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SupportedFormat model
   */
  interface SupportedFormatFieldRefs {
    readonly id: FieldRef<"SupportedFormat", 'Int'>
    readonly extension: FieldRef<"SupportedFormat", 'String'>
    readonly mimeType: FieldRef<"SupportedFormat", 'String'>
    readonly description: FieldRef<"SupportedFormat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SupportedFormat findUnique
   */
  export type SupportedFormatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportedFormat
     */
    select?: SupportedFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportedFormat
     */
    omit?: SupportedFormatOmit<ExtArgs> | null
    /**
     * Filter, which SupportedFormat to fetch.
     */
    where: SupportedFormatWhereUniqueInput
  }

  /**
   * SupportedFormat findUniqueOrThrow
   */
  export type SupportedFormatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportedFormat
     */
    select?: SupportedFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportedFormat
     */
    omit?: SupportedFormatOmit<ExtArgs> | null
    /**
     * Filter, which SupportedFormat to fetch.
     */
    where: SupportedFormatWhereUniqueInput
  }

  /**
   * SupportedFormat findFirst
   */
  export type SupportedFormatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportedFormat
     */
    select?: SupportedFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportedFormat
     */
    omit?: SupportedFormatOmit<ExtArgs> | null
    /**
     * Filter, which SupportedFormat to fetch.
     */
    where?: SupportedFormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportedFormats to fetch.
     */
    orderBy?: SupportedFormatOrderByWithRelationInput | SupportedFormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportedFormats.
     */
    cursor?: SupportedFormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportedFormats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportedFormats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportedFormats.
     */
    distinct?: SupportedFormatScalarFieldEnum | SupportedFormatScalarFieldEnum[]
  }

  /**
   * SupportedFormat findFirstOrThrow
   */
  export type SupportedFormatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportedFormat
     */
    select?: SupportedFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportedFormat
     */
    omit?: SupportedFormatOmit<ExtArgs> | null
    /**
     * Filter, which SupportedFormat to fetch.
     */
    where?: SupportedFormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportedFormats to fetch.
     */
    orderBy?: SupportedFormatOrderByWithRelationInput | SupportedFormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportedFormats.
     */
    cursor?: SupportedFormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportedFormats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportedFormats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportedFormats.
     */
    distinct?: SupportedFormatScalarFieldEnum | SupportedFormatScalarFieldEnum[]
  }

  /**
   * SupportedFormat findMany
   */
  export type SupportedFormatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportedFormat
     */
    select?: SupportedFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportedFormat
     */
    omit?: SupportedFormatOmit<ExtArgs> | null
    /**
     * Filter, which SupportedFormats to fetch.
     */
    where?: SupportedFormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportedFormats to fetch.
     */
    orderBy?: SupportedFormatOrderByWithRelationInput | SupportedFormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportedFormats.
     */
    cursor?: SupportedFormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportedFormats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportedFormats.
     */
    skip?: number
    distinct?: SupportedFormatScalarFieldEnum | SupportedFormatScalarFieldEnum[]
  }

  /**
   * SupportedFormat create
   */
  export type SupportedFormatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportedFormat
     */
    select?: SupportedFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportedFormat
     */
    omit?: SupportedFormatOmit<ExtArgs> | null
    /**
     * The data needed to create a SupportedFormat.
     */
    data: XOR<SupportedFormatCreateInput, SupportedFormatUncheckedCreateInput>
  }

  /**
   * SupportedFormat createMany
   */
  export type SupportedFormatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportedFormats.
     */
    data: SupportedFormatCreateManyInput | SupportedFormatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportedFormat createManyAndReturn
   */
  export type SupportedFormatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportedFormat
     */
    select?: SupportedFormatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportedFormat
     */
    omit?: SupportedFormatOmit<ExtArgs> | null
    /**
     * The data used to create many SupportedFormats.
     */
    data: SupportedFormatCreateManyInput | SupportedFormatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportedFormat update
   */
  export type SupportedFormatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportedFormat
     */
    select?: SupportedFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportedFormat
     */
    omit?: SupportedFormatOmit<ExtArgs> | null
    /**
     * The data needed to update a SupportedFormat.
     */
    data: XOR<SupportedFormatUpdateInput, SupportedFormatUncheckedUpdateInput>
    /**
     * Choose, which SupportedFormat to update.
     */
    where: SupportedFormatWhereUniqueInput
  }

  /**
   * SupportedFormat updateMany
   */
  export type SupportedFormatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportedFormats.
     */
    data: XOR<SupportedFormatUpdateManyMutationInput, SupportedFormatUncheckedUpdateManyInput>
    /**
     * Filter which SupportedFormats to update
     */
    where?: SupportedFormatWhereInput
    /**
     * Limit how many SupportedFormats to update.
     */
    limit?: number
  }

  /**
   * SupportedFormat updateManyAndReturn
   */
  export type SupportedFormatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportedFormat
     */
    select?: SupportedFormatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportedFormat
     */
    omit?: SupportedFormatOmit<ExtArgs> | null
    /**
     * The data used to update SupportedFormats.
     */
    data: XOR<SupportedFormatUpdateManyMutationInput, SupportedFormatUncheckedUpdateManyInput>
    /**
     * Filter which SupportedFormats to update
     */
    where?: SupportedFormatWhereInput
    /**
     * Limit how many SupportedFormats to update.
     */
    limit?: number
  }

  /**
   * SupportedFormat upsert
   */
  export type SupportedFormatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportedFormat
     */
    select?: SupportedFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportedFormat
     */
    omit?: SupportedFormatOmit<ExtArgs> | null
    /**
     * The filter to search for the SupportedFormat to update in case it exists.
     */
    where: SupportedFormatWhereUniqueInput
    /**
     * In case the SupportedFormat found by the `where` argument doesn't exist, create a new SupportedFormat with this data.
     */
    create: XOR<SupportedFormatCreateInput, SupportedFormatUncheckedCreateInput>
    /**
     * In case the SupportedFormat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportedFormatUpdateInput, SupportedFormatUncheckedUpdateInput>
  }

  /**
   * SupportedFormat delete
   */
  export type SupportedFormatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportedFormat
     */
    select?: SupportedFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportedFormat
     */
    omit?: SupportedFormatOmit<ExtArgs> | null
    /**
     * Filter which SupportedFormat to delete.
     */
    where: SupportedFormatWhereUniqueInput
  }

  /**
   * SupportedFormat deleteMany
   */
  export type SupportedFormatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportedFormats to delete
     */
    where?: SupportedFormatWhereInput
    /**
     * Limit how many SupportedFormats to delete.
     */
    limit?: number
  }

  /**
   * SupportedFormat without action
   */
  export type SupportedFormatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportedFormat
     */
    select?: SupportedFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportedFormat
     */
    omit?: SupportedFormatOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    isEmailVerified: 'isEmailVerified',
    clientType: 'clientType',
    companyName: 'companyName',
    phone: 'phone',
    agreeToTerms: 'agreeToTerms',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    type: 'type',
    expires: 'expires',
    blacklisted: 'blacklisted',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const BankStatementScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    uploadedAt: 'uploadedAt',
    fileSize: 'fileSize',
    bankName: 'bankName',
    accountType: 'accountType',
    statementPeriod: 'statementPeriod',
    processingStatus: 'processingStatus',
    cloudStorageUrl: 'cloudStorageUrl',
    signedUrl: 'signedUrl',
    storageProvider: 'storageProvider',
    storageKey: 'storageKey',
    userId: 'userId'
  };

  export type BankStatementScalarFieldEnum = (typeof BankStatementScalarFieldEnum)[keyof typeof BankStatementScalarFieldEnum]


  export const AnalysisResultScalarFieldEnum: {
    id: 'id',
    statementId: 'statementId',
    analysisDate: 'analysisDate',
    financialInsights: 'financialInsights',
    recommendations: 'recommendations',
    riskProfile: 'riskProfile',
    liquidityCoverage: 'liquidityCoverage',
    averageBalance: 'averageBalance',
    cashFlowVolatility: 'cashFlowVolatility',
    status: 'status',
    progress: 'progress',
    currentStep: 'currentStep',
    error: 'error',
    userId: 'userId'
  };

  export type AnalysisResultScalarFieldEnum = (typeof AnalysisResultScalarFieldEnum)[keyof typeof AnalysisResultScalarFieldEnum]


  export const TreasuryProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    description: 'description',
    minInvestment: 'minInvestment',
    expectedReturn: 'expectedReturn',
    riskLevel: 'riskLevel',
    tenure: 'tenure',
    features: 'features',
    eligibility: 'eligibility',
    documents: 'documents',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TreasuryProductScalarFieldEnum = (typeof TreasuryProductScalarFieldEnum)[keyof typeof TreasuryProductScalarFieldEnum]


  export const SupportedFormatScalarFieldEnum: {
    id: 'id',
    extension: 'extension',
    mimeType: 'mimeType',
    description: 'description'
  };

  export type SupportedFormatScalarFieldEnum = (typeof SupportedFormatScalarFieldEnum)[keyof typeof SupportedFormatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AnalysisStatus'
   */
  export type EnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisStatus'>
    


  /**
   * Reference to a field of type 'AnalysisStatus[]'
   */
  export type ListEnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    clientType?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    agreeToTerms?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Token?: TokenListRelationFilter
    statements?: BankStatementListRelationFilter
    analyses?: AnalysisResultListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    clientType?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    agreeToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Token?: TokenOrderByRelationAggregateInput
    statements?: BankStatementOrderByRelationAggregateInput
    analyses?: AnalysisResultOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    clientType?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    agreeToTerms?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Token?: TokenListRelationFilter
    statements?: BankStatementListRelationFilter
    analyses?: AnalysisResultListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    clientType?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    agreeToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    clientType?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    agreeToTerms?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    type?: StringFilter<"Token"> | string
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    token?: StringFilter<"Token"> | string
    type?: StringFilter<"Token"> | string
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Token"> | number
    token?: StringWithAggregatesFilter<"Token"> | string
    type?: StringWithAggregatesFilter<"Token"> | string
    expires?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    blacklisted?: BoolWithAggregatesFilter<"Token"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    userId?: IntWithAggregatesFilter<"Token"> | number
  }

  export type BankStatementWhereInput = {
    AND?: BankStatementWhereInput | BankStatementWhereInput[]
    OR?: BankStatementWhereInput[]
    NOT?: BankStatementWhereInput | BankStatementWhereInput[]
    id?: StringFilter<"BankStatement"> | string
    filename?: StringFilter<"BankStatement"> | string
    uploadedAt?: DateTimeFilter<"BankStatement"> | Date | string
    fileSize?: IntFilter<"BankStatement"> | number
    bankName?: StringNullableFilter<"BankStatement"> | string | null
    accountType?: StringNullableFilter<"BankStatement"> | string | null
    statementPeriod?: JsonFilter<"BankStatement">
    processingStatus?: StringFilter<"BankStatement"> | string
    cloudStorageUrl?: StringNullableFilter<"BankStatement"> | string | null
    signedUrl?: StringNullableFilter<"BankStatement"> | string | null
    storageProvider?: StringNullableFilter<"BankStatement"> | string | null
    storageKey?: StringNullableFilter<"BankStatement"> | string | null
    userId?: IntFilter<"BankStatement"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    analyses?: AnalysisResultListRelationFilter
  }

  export type BankStatementOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    uploadedAt?: SortOrder
    fileSize?: SortOrder
    bankName?: SortOrderInput | SortOrder
    accountType?: SortOrderInput | SortOrder
    statementPeriod?: SortOrder
    processingStatus?: SortOrder
    cloudStorageUrl?: SortOrderInput | SortOrder
    signedUrl?: SortOrderInput | SortOrder
    storageProvider?: SortOrderInput | SortOrder
    storageKey?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    analyses?: AnalysisResultOrderByRelationAggregateInput
  }

  export type BankStatementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BankStatementWhereInput | BankStatementWhereInput[]
    OR?: BankStatementWhereInput[]
    NOT?: BankStatementWhereInput | BankStatementWhereInput[]
    filename?: StringFilter<"BankStatement"> | string
    uploadedAt?: DateTimeFilter<"BankStatement"> | Date | string
    fileSize?: IntFilter<"BankStatement"> | number
    bankName?: StringNullableFilter<"BankStatement"> | string | null
    accountType?: StringNullableFilter<"BankStatement"> | string | null
    statementPeriod?: JsonFilter<"BankStatement">
    processingStatus?: StringFilter<"BankStatement"> | string
    cloudStorageUrl?: StringNullableFilter<"BankStatement"> | string | null
    signedUrl?: StringNullableFilter<"BankStatement"> | string | null
    storageProvider?: StringNullableFilter<"BankStatement"> | string | null
    storageKey?: StringNullableFilter<"BankStatement"> | string | null
    userId?: IntFilter<"BankStatement"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    analyses?: AnalysisResultListRelationFilter
  }, "id">

  export type BankStatementOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    uploadedAt?: SortOrder
    fileSize?: SortOrder
    bankName?: SortOrderInput | SortOrder
    accountType?: SortOrderInput | SortOrder
    statementPeriod?: SortOrder
    processingStatus?: SortOrder
    cloudStorageUrl?: SortOrderInput | SortOrder
    signedUrl?: SortOrderInput | SortOrder
    storageProvider?: SortOrderInput | SortOrder
    storageKey?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: BankStatementCountOrderByAggregateInput
    _avg?: BankStatementAvgOrderByAggregateInput
    _max?: BankStatementMaxOrderByAggregateInput
    _min?: BankStatementMinOrderByAggregateInput
    _sum?: BankStatementSumOrderByAggregateInput
  }

  export type BankStatementScalarWhereWithAggregatesInput = {
    AND?: BankStatementScalarWhereWithAggregatesInput | BankStatementScalarWhereWithAggregatesInput[]
    OR?: BankStatementScalarWhereWithAggregatesInput[]
    NOT?: BankStatementScalarWhereWithAggregatesInput | BankStatementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BankStatement"> | string
    filename?: StringWithAggregatesFilter<"BankStatement"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"BankStatement"> | Date | string
    fileSize?: IntWithAggregatesFilter<"BankStatement"> | number
    bankName?: StringNullableWithAggregatesFilter<"BankStatement"> | string | null
    accountType?: StringNullableWithAggregatesFilter<"BankStatement"> | string | null
    statementPeriod?: JsonWithAggregatesFilter<"BankStatement">
    processingStatus?: StringWithAggregatesFilter<"BankStatement"> | string
    cloudStorageUrl?: StringNullableWithAggregatesFilter<"BankStatement"> | string | null
    signedUrl?: StringNullableWithAggregatesFilter<"BankStatement"> | string | null
    storageProvider?: StringNullableWithAggregatesFilter<"BankStatement"> | string | null
    storageKey?: StringNullableWithAggregatesFilter<"BankStatement"> | string | null
    userId?: IntWithAggregatesFilter<"BankStatement"> | number
  }

  export type AnalysisResultWhereInput = {
    AND?: AnalysisResultWhereInput | AnalysisResultWhereInput[]
    OR?: AnalysisResultWhereInput[]
    NOT?: AnalysisResultWhereInput | AnalysisResultWhereInput[]
    id?: StringFilter<"AnalysisResult"> | string
    statementId?: StringFilter<"AnalysisResult"> | string
    analysisDate?: DateTimeFilter<"AnalysisResult"> | Date | string
    financialInsights?: JsonNullableFilter<"AnalysisResult">
    recommendations?: JsonNullableFilter<"AnalysisResult">
    riskProfile?: StringNullableFilter<"AnalysisResult"> | string | null
    liquidityCoverage?: FloatNullableFilter<"AnalysisResult"> | number | null
    averageBalance?: FloatNullableFilter<"AnalysisResult"> | number | null
    cashFlowVolatility?: FloatNullableFilter<"AnalysisResult"> | number | null
    status?: EnumAnalysisStatusFilter<"AnalysisResult"> | $Enums.AnalysisStatus
    progress?: IntFilter<"AnalysisResult"> | number
    currentStep?: StringNullableFilter<"AnalysisResult"> | string | null
    error?: StringNullableFilter<"AnalysisResult"> | string | null
    userId?: IntFilter<"AnalysisResult"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    statement?: XOR<BankStatementScalarRelationFilter, BankStatementWhereInput>
  }

  export type AnalysisResultOrderByWithRelationInput = {
    id?: SortOrder
    statementId?: SortOrder
    analysisDate?: SortOrder
    financialInsights?: SortOrderInput | SortOrder
    recommendations?: SortOrderInput | SortOrder
    riskProfile?: SortOrderInput | SortOrder
    liquidityCoverage?: SortOrderInput | SortOrder
    averageBalance?: SortOrderInput | SortOrder
    cashFlowVolatility?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    currentStep?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    statement?: BankStatementOrderByWithRelationInput
  }

  export type AnalysisResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalysisResultWhereInput | AnalysisResultWhereInput[]
    OR?: AnalysisResultWhereInput[]
    NOT?: AnalysisResultWhereInput | AnalysisResultWhereInput[]
    statementId?: StringFilter<"AnalysisResult"> | string
    analysisDate?: DateTimeFilter<"AnalysisResult"> | Date | string
    financialInsights?: JsonNullableFilter<"AnalysisResult">
    recommendations?: JsonNullableFilter<"AnalysisResult">
    riskProfile?: StringNullableFilter<"AnalysisResult"> | string | null
    liquidityCoverage?: FloatNullableFilter<"AnalysisResult"> | number | null
    averageBalance?: FloatNullableFilter<"AnalysisResult"> | number | null
    cashFlowVolatility?: FloatNullableFilter<"AnalysisResult"> | number | null
    status?: EnumAnalysisStatusFilter<"AnalysisResult"> | $Enums.AnalysisStatus
    progress?: IntFilter<"AnalysisResult"> | number
    currentStep?: StringNullableFilter<"AnalysisResult"> | string | null
    error?: StringNullableFilter<"AnalysisResult"> | string | null
    userId?: IntFilter<"AnalysisResult"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    statement?: XOR<BankStatementScalarRelationFilter, BankStatementWhereInput>
  }, "id">

  export type AnalysisResultOrderByWithAggregationInput = {
    id?: SortOrder
    statementId?: SortOrder
    analysisDate?: SortOrder
    financialInsights?: SortOrderInput | SortOrder
    recommendations?: SortOrderInput | SortOrder
    riskProfile?: SortOrderInput | SortOrder
    liquidityCoverage?: SortOrderInput | SortOrder
    averageBalance?: SortOrderInput | SortOrder
    cashFlowVolatility?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    currentStep?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: AnalysisResultCountOrderByAggregateInput
    _avg?: AnalysisResultAvgOrderByAggregateInput
    _max?: AnalysisResultMaxOrderByAggregateInput
    _min?: AnalysisResultMinOrderByAggregateInput
    _sum?: AnalysisResultSumOrderByAggregateInput
  }

  export type AnalysisResultScalarWhereWithAggregatesInput = {
    AND?: AnalysisResultScalarWhereWithAggregatesInput | AnalysisResultScalarWhereWithAggregatesInput[]
    OR?: AnalysisResultScalarWhereWithAggregatesInput[]
    NOT?: AnalysisResultScalarWhereWithAggregatesInput | AnalysisResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalysisResult"> | string
    statementId?: StringWithAggregatesFilter<"AnalysisResult"> | string
    analysisDate?: DateTimeWithAggregatesFilter<"AnalysisResult"> | Date | string
    financialInsights?: JsonNullableWithAggregatesFilter<"AnalysisResult">
    recommendations?: JsonNullableWithAggregatesFilter<"AnalysisResult">
    riskProfile?: StringNullableWithAggregatesFilter<"AnalysisResult"> | string | null
    liquidityCoverage?: FloatNullableWithAggregatesFilter<"AnalysisResult"> | number | null
    averageBalance?: FloatNullableWithAggregatesFilter<"AnalysisResult"> | number | null
    cashFlowVolatility?: FloatNullableWithAggregatesFilter<"AnalysisResult"> | number | null
    status?: EnumAnalysisStatusWithAggregatesFilter<"AnalysisResult"> | $Enums.AnalysisStatus
    progress?: IntWithAggregatesFilter<"AnalysisResult"> | number
    currentStep?: StringNullableWithAggregatesFilter<"AnalysisResult"> | string | null
    error?: StringNullableWithAggregatesFilter<"AnalysisResult"> | string | null
    userId?: IntWithAggregatesFilter<"AnalysisResult"> | number
  }

  export type TreasuryProductWhereInput = {
    AND?: TreasuryProductWhereInput | TreasuryProductWhereInput[]
    OR?: TreasuryProductWhereInput[]
    NOT?: TreasuryProductWhereInput | TreasuryProductWhereInput[]
    id?: StringFilter<"TreasuryProduct"> | string
    name?: StringFilter<"TreasuryProduct"> | string
    category?: StringFilter<"TreasuryProduct"> | string
    description?: StringFilter<"TreasuryProduct"> | string
    minInvestment?: FloatFilter<"TreasuryProduct"> | number
    expectedReturn?: FloatFilter<"TreasuryProduct"> | number
    riskLevel?: StringFilter<"TreasuryProduct"> | string
    tenure?: StringFilter<"TreasuryProduct"> | string
    features?: JsonFilter<"TreasuryProduct">
    eligibility?: JsonFilter<"TreasuryProduct">
    documents?: JsonFilter<"TreasuryProduct">
    createdAt?: DateTimeFilter<"TreasuryProduct"> | Date | string
    updatedAt?: DateTimeFilter<"TreasuryProduct"> | Date | string
  }

  export type TreasuryProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    minInvestment?: SortOrder
    expectedReturn?: SortOrder
    riskLevel?: SortOrder
    tenure?: SortOrder
    features?: SortOrder
    eligibility?: SortOrder
    documents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreasuryProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TreasuryProductWhereInput | TreasuryProductWhereInput[]
    OR?: TreasuryProductWhereInput[]
    NOT?: TreasuryProductWhereInput | TreasuryProductWhereInput[]
    name?: StringFilter<"TreasuryProduct"> | string
    category?: StringFilter<"TreasuryProduct"> | string
    description?: StringFilter<"TreasuryProduct"> | string
    minInvestment?: FloatFilter<"TreasuryProduct"> | number
    expectedReturn?: FloatFilter<"TreasuryProduct"> | number
    riskLevel?: StringFilter<"TreasuryProduct"> | string
    tenure?: StringFilter<"TreasuryProduct"> | string
    features?: JsonFilter<"TreasuryProduct">
    eligibility?: JsonFilter<"TreasuryProduct">
    documents?: JsonFilter<"TreasuryProduct">
    createdAt?: DateTimeFilter<"TreasuryProduct"> | Date | string
    updatedAt?: DateTimeFilter<"TreasuryProduct"> | Date | string
  }, "id">

  export type TreasuryProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    minInvestment?: SortOrder
    expectedReturn?: SortOrder
    riskLevel?: SortOrder
    tenure?: SortOrder
    features?: SortOrder
    eligibility?: SortOrder
    documents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TreasuryProductCountOrderByAggregateInput
    _avg?: TreasuryProductAvgOrderByAggregateInput
    _max?: TreasuryProductMaxOrderByAggregateInput
    _min?: TreasuryProductMinOrderByAggregateInput
    _sum?: TreasuryProductSumOrderByAggregateInput
  }

  export type TreasuryProductScalarWhereWithAggregatesInput = {
    AND?: TreasuryProductScalarWhereWithAggregatesInput | TreasuryProductScalarWhereWithAggregatesInput[]
    OR?: TreasuryProductScalarWhereWithAggregatesInput[]
    NOT?: TreasuryProductScalarWhereWithAggregatesInput | TreasuryProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TreasuryProduct"> | string
    name?: StringWithAggregatesFilter<"TreasuryProduct"> | string
    category?: StringWithAggregatesFilter<"TreasuryProduct"> | string
    description?: StringWithAggregatesFilter<"TreasuryProduct"> | string
    minInvestment?: FloatWithAggregatesFilter<"TreasuryProduct"> | number
    expectedReturn?: FloatWithAggregatesFilter<"TreasuryProduct"> | number
    riskLevel?: StringWithAggregatesFilter<"TreasuryProduct"> | string
    tenure?: StringWithAggregatesFilter<"TreasuryProduct"> | string
    features?: JsonWithAggregatesFilter<"TreasuryProduct">
    eligibility?: JsonWithAggregatesFilter<"TreasuryProduct">
    documents?: JsonWithAggregatesFilter<"TreasuryProduct">
    createdAt?: DateTimeWithAggregatesFilter<"TreasuryProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TreasuryProduct"> | Date | string
  }

  export type SupportedFormatWhereInput = {
    AND?: SupportedFormatWhereInput | SupportedFormatWhereInput[]
    OR?: SupportedFormatWhereInput[]
    NOT?: SupportedFormatWhereInput | SupportedFormatWhereInput[]
    id?: IntFilter<"SupportedFormat"> | number
    extension?: StringFilter<"SupportedFormat"> | string
    mimeType?: StringFilter<"SupportedFormat"> | string
    description?: StringFilter<"SupportedFormat"> | string
  }

  export type SupportedFormatOrderByWithRelationInput = {
    id?: SortOrder
    extension?: SortOrder
    mimeType?: SortOrder
    description?: SortOrder
  }

  export type SupportedFormatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    extension_mimeType?: SupportedFormatExtensionMimeTypeCompoundUniqueInput
    AND?: SupportedFormatWhereInput | SupportedFormatWhereInput[]
    OR?: SupportedFormatWhereInput[]
    NOT?: SupportedFormatWhereInput | SupportedFormatWhereInput[]
    extension?: StringFilter<"SupportedFormat"> | string
    mimeType?: StringFilter<"SupportedFormat"> | string
    description?: StringFilter<"SupportedFormat"> | string
  }, "id" | "extension_mimeType">

  export type SupportedFormatOrderByWithAggregationInput = {
    id?: SortOrder
    extension?: SortOrder
    mimeType?: SortOrder
    description?: SortOrder
    _count?: SupportedFormatCountOrderByAggregateInput
    _avg?: SupportedFormatAvgOrderByAggregateInput
    _max?: SupportedFormatMaxOrderByAggregateInput
    _min?: SupportedFormatMinOrderByAggregateInput
    _sum?: SupportedFormatSumOrderByAggregateInput
  }

  export type SupportedFormatScalarWhereWithAggregatesInput = {
    AND?: SupportedFormatScalarWhereWithAggregatesInput | SupportedFormatScalarWhereWithAggregatesInput[]
    OR?: SupportedFormatScalarWhereWithAggregatesInput[]
    NOT?: SupportedFormatScalarWhereWithAggregatesInput | SupportedFormatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SupportedFormat"> | number
    extension?: StringWithAggregatesFilter<"SupportedFormat"> | string
    mimeType?: StringWithAggregatesFilter<"SupportedFormat"> | string
    description?: StringWithAggregatesFilter<"SupportedFormat"> | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    clientType?: string | null
    companyName?: string | null
    phone?: string | null
    agreeToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenCreateNestedManyWithoutUserInput
    statements?: BankStatementCreateNestedManyWithoutUserInput
    analyses?: AnalysisResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    clientType?: string | null
    companyName?: string | null
    phone?: string | null
    agreeToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    statements?: BankStatementUncheckedCreateNestedManyWithoutUserInput
    analyses?: AnalysisResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateManyWithoutUserNestedInput
    statements?: BankStatementUpdateManyWithoutUserNestedInput
    analyses?: AnalysisResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    statements?: BankStatementUncheckedUpdateManyWithoutUserNestedInput
    analyses?: AnalysisResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    clientType?: string | null
    companyName?: string | null
    phone?: string | null
    agreeToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    token: string
    type: string
    expires: Date | string
    blacklisted?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    token: string
    type: string
    expires: Date | string
    blacklisted?: boolean
    createdAt?: Date | string
    userId: number
  }

  export type TokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TokenCreateManyInput = {
    id?: number
    token: string
    type: string
    expires: Date | string
    blacklisted?: boolean
    createdAt?: Date | string
    userId: number
  }

  export type TokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BankStatementCreateInput = {
    id?: string
    filename: string
    uploadedAt?: Date | string
    fileSize: number
    bankName?: string | null
    accountType?: string | null
    statementPeriod: JsonNullValueInput | InputJsonValue
    processingStatus?: string
    cloudStorageUrl?: string | null
    signedUrl?: string | null
    storageProvider?: string | null
    storageKey?: string | null
    user: UserCreateNestedOneWithoutStatementsInput
    analyses?: AnalysisResultCreateNestedManyWithoutStatementInput
  }

  export type BankStatementUncheckedCreateInput = {
    id?: string
    filename: string
    uploadedAt?: Date | string
    fileSize: number
    bankName?: string | null
    accountType?: string | null
    statementPeriod: JsonNullValueInput | InputJsonValue
    processingStatus?: string
    cloudStorageUrl?: string | null
    signedUrl?: string | null
    storageProvider?: string | null
    storageKey?: string | null
    userId: number
    analyses?: AnalysisResultUncheckedCreateNestedManyWithoutStatementInput
  }

  export type BankStatementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileSize?: IntFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    statementPeriod?: JsonNullValueInput | InputJsonValue
    processingStatus?: StringFieldUpdateOperationsInput | string
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutStatementsNestedInput
    analyses?: AnalysisResultUpdateManyWithoutStatementNestedInput
  }

  export type BankStatementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileSize?: IntFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    statementPeriod?: JsonNullValueInput | InputJsonValue
    processingStatus?: StringFieldUpdateOperationsInput | string
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    analyses?: AnalysisResultUncheckedUpdateManyWithoutStatementNestedInput
  }

  export type BankStatementCreateManyInput = {
    id?: string
    filename: string
    uploadedAt?: Date | string
    fileSize: number
    bankName?: string | null
    accountType?: string | null
    statementPeriod: JsonNullValueInput | InputJsonValue
    processingStatus?: string
    cloudStorageUrl?: string | null
    signedUrl?: string | null
    storageProvider?: string | null
    storageKey?: string | null
    userId: number
  }

  export type BankStatementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileSize?: IntFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    statementPeriod?: JsonNullValueInput | InputJsonValue
    processingStatus?: StringFieldUpdateOperationsInput | string
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BankStatementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileSize?: IntFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    statementPeriod?: JsonNullValueInput | InputJsonValue
    processingStatus?: StringFieldUpdateOperationsInput | string
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AnalysisResultCreateInput = {
    id?: string
    analysisDate?: Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: string | null
    liquidityCoverage?: number | null
    averageBalance?: number | null
    cashFlowVolatility?: number | null
    status?: $Enums.AnalysisStatus
    progress?: number
    currentStep?: string | null
    error?: string | null
    user: UserCreateNestedOneWithoutAnalysesInput
    statement: BankStatementCreateNestedOneWithoutAnalysesInput
  }

  export type AnalysisResultUncheckedCreateInput = {
    id?: string
    statementId: string
    analysisDate?: Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: string | null
    liquidityCoverage?: number | null
    averageBalance?: number | null
    cashFlowVolatility?: number | null
    status?: $Enums.AnalysisStatus
    progress?: number
    currentStep?: string | null
    error?: string | null
    userId: number
  }

  export type AnalysisResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    liquidityCoverage?: NullableFloatFieldUpdateOperationsInput | number | null
    averageBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    cashFlowVolatility?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    progress?: IntFieldUpdateOperationsInput | number
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAnalysesNestedInput
    statement?: BankStatementUpdateOneRequiredWithoutAnalysesNestedInput
  }

  export type AnalysisResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statementId?: StringFieldUpdateOperationsInput | string
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    liquidityCoverage?: NullableFloatFieldUpdateOperationsInput | number | null
    averageBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    cashFlowVolatility?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    progress?: IntFieldUpdateOperationsInput | number
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AnalysisResultCreateManyInput = {
    id?: string
    statementId: string
    analysisDate?: Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: string | null
    liquidityCoverage?: number | null
    averageBalance?: number | null
    cashFlowVolatility?: number | null
    status?: $Enums.AnalysisStatus
    progress?: number
    currentStep?: string | null
    error?: string | null
    userId: number
  }

  export type AnalysisResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    liquidityCoverage?: NullableFloatFieldUpdateOperationsInput | number | null
    averageBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    cashFlowVolatility?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    progress?: IntFieldUpdateOperationsInput | number
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalysisResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    statementId?: StringFieldUpdateOperationsInput | string
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    liquidityCoverage?: NullableFloatFieldUpdateOperationsInput | number | null
    averageBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    cashFlowVolatility?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    progress?: IntFieldUpdateOperationsInput | number
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TreasuryProductCreateInput = {
    id?: string
    name: string
    category: string
    description: string
    minInvestment: number
    expectedReturn: number
    riskLevel: string
    tenure: string
    features: JsonNullValueInput | InputJsonValue
    eligibility: JsonNullValueInput | InputJsonValue
    documents: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreasuryProductUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    description: string
    minInvestment: number
    expectedReturn: number
    riskLevel: string
    tenure: string
    features: JsonNullValueInput | InputJsonValue
    eligibility: JsonNullValueInput | InputJsonValue
    documents: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreasuryProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minInvestment?: FloatFieldUpdateOperationsInput | number
    expectedReturn?: FloatFieldUpdateOperationsInput | number
    riskLevel?: StringFieldUpdateOperationsInput | string
    tenure?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    eligibility?: JsonNullValueInput | InputJsonValue
    documents?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minInvestment?: FloatFieldUpdateOperationsInput | number
    expectedReturn?: FloatFieldUpdateOperationsInput | number
    riskLevel?: StringFieldUpdateOperationsInput | string
    tenure?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    eligibility?: JsonNullValueInput | InputJsonValue
    documents?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryProductCreateManyInput = {
    id?: string
    name: string
    category: string
    description: string
    minInvestment: number
    expectedReturn: number
    riskLevel: string
    tenure: string
    features: JsonNullValueInput | InputJsonValue
    eligibility: JsonNullValueInput | InputJsonValue
    documents: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreasuryProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minInvestment?: FloatFieldUpdateOperationsInput | number
    expectedReturn?: FloatFieldUpdateOperationsInput | number
    riskLevel?: StringFieldUpdateOperationsInput | string
    tenure?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    eligibility?: JsonNullValueInput | InputJsonValue
    documents?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minInvestment?: FloatFieldUpdateOperationsInput | number
    expectedReturn?: FloatFieldUpdateOperationsInput | number
    riskLevel?: StringFieldUpdateOperationsInput | string
    tenure?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    eligibility?: JsonNullValueInput | InputJsonValue
    documents?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportedFormatCreateInput = {
    extension: string
    mimeType: string
    description: string
  }

  export type SupportedFormatUncheckedCreateInput = {
    id?: number
    extension: string
    mimeType: string
    description: string
  }

  export type SupportedFormatUpdateInput = {
    extension?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SupportedFormatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    extension?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SupportedFormatCreateManyInput = {
    id?: number
    extension: string
    mimeType: string
    description: string
  }

  export type SupportedFormatUpdateManyMutationInput = {
    extension?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SupportedFormatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    extension?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type BankStatementListRelationFilter = {
    every?: BankStatementWhereInput
    some?: BankStatementWhereInput
    none?: BankStatementWhereInput
  }

  export type AnalysisResultListRelationFilter = {
    every?: AnalysisResultWhereInput
    some?: AnalysisResultWhereInput
    none?: AnalysisResultWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BankStatementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalysisResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    clientType?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    agreeToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    clientType?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    agreeToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    clientType?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    agreeToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BankStatementCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    uploadedAt?: SortOrder
    fileSize?: SortOrder
    bankName?: SortOrder
    accountType?: SortOrder
    statementPeriod?: SortOrder
    processingStatus?: SortOrder
    cloudStorageUrl?: SortOrder
    signedUrl?: SortOrder
    storageProvider?: SortOrder
    storageKey?: SortOrder
    userId?: SortOrder
  }

  export type BankStatementAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    userId?: SortOrder
  }

  export type BankStatementMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    uploadedAt?: SortOrder
    fileSize?: SortOrder
    bankName?: SortOrder
    accountType?: SortOrder
    processingStatus?: SortOrder
    cloudStorageUrl?: SortOrder
    signedUrl?: SortOrder
    storageProvider?: SortOrder
    storageKey?: SortOrder
    userId?: SortOrder
  }

  export type BankStatementMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    uploadedAt?: SortOrder
    fileSize?: SortOrder
    bankName?: SortOrder
    accountType?: SortOrder
    processingStatus?: SortOrder
    cloudStorageUrl?: SortOrder
    signedUrl?: SortOrder
    storageProvider?: SortOrder
    storageKey?: SortOrder
    userId?: SortOrder
  }

  export type BankStatementSumOrderByAggregateInput = {
    fileSize?: SortOrder
    userId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type EnumAnalysisStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusFilter<$PrismaModel> | $Enums.AnalysisStatus
  }

  export type BankStatementScalarRelationFilter = {
    is?: BankStatementWhereInput
    isNot?: BankStatementWhereInput
  }

  export type AnalysisResultCountOrderByAggregateInput = {
    id?: SortOrder
    statementId?: SortOrder
    analysisDate?: SortOrder
    financialInsights?: SortOrder
    recommendations?: SortOrder
    riskProfile?: SortOrder
    liquidityCoverage?: SortOrder
    averageBalance?: SortOrder
    cashFlowVolatility?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    currentStep?: SortOrder
    error?: SortOrder
    userId?: SortOrder
  }

  export type AnalysisResultAvgOrderByAggregateInput = {
    liquidityCoverage?: SortOrder
    averageBalance?: SortOrder
    cashFlowVolatility?: SortOrder
    progress?: SortOrder
    userId?: SortOrder
  }

  export type AnalysisResultMaxOrderByAggregateInput = {
    id?: SortOrder
    statementId?: SortOrder
    analysisDate?: SortOrder
    riskProfile?: SortOrder
    liquidityCoverage?: SortOrder
    averageBalance?: SortOrder
    cashFlowVolatility?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    currentStep?: SortOrder
    error?: SortOrder
    userId?: SortOrder
  }

  export type AnalysisResultMinOrderByAggregateInput = {
    id?: SortOrder
    statementId?: SortOrder
    analysisDate?: SortOrder
    riskProfile?: SortOrder
    liquidityCoverage?: SortOrder
    averageBalance?: SortOrder
    cashFlowVolatility?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    currentStep?: SortOrder
    error?: SortOrder
    userId?: SortOrder
  }

  export type AnalysisResultSumOrderByAggregateInput = {
    liquidityCoverage?: SortOrder
    averageBalance?: SortOrder
    cashFlowVolatility?: SortOrder
    progress?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type EnumAnalysisStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisStatusFilter<$PrismaModel>
    _max?: NestedEnumAnalysisStatusFilter<$PrismaModel>
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

  export type TreasuryProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    minInvestment?: SortOrder
    expectedReturn?: SortOrder
    riskLevel?: SortOrder
    tenure?: SortOrder
    features?: SortOrder
    eligibility?: SortOrder
    documents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreasuryProductAvgOrderByAggregateInput = {
    minInvestment?: SortOrder
    expectedReturn?: SortOrder
  }

  export type TreasuryProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    minInvestment?: SortOrder
    expectedReturn?: SortOrder
    riskLevel?: SortOrder
    tenure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreasuryProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    minInvestment?: SortOrder
    expectedReturn?: SortOrder
    riskLevel?: SortOrder
    tenure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreasuryProductSumOrderByAggregateInput = {
    minInvestment?: SortOrder
    expectedReturn?: SortOrder
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

  export type SupportedFormatExtensionMimeTypeCompoundUniqueInput = {
    extension: string
    mimeType: string
  }

  export type SupportedFormatCountOrderByAggregateInput = {
    id?: SortOrder
    extension?: SortOrder
    mimeType?: SortOrder
    description?: SortOrder
  }

  export type SupportedFormatAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupportedFormatMaxOrderByAggregateInput = {
    id?: SortOrder
    extension?: SortOrder
    mimeType?: SortOrder
    description?: SortOrder
  }

  export type SupportedFormatMinOrderByAggregateInput = {
    id?: SortOrder
    extension?: SortOrder
    mimeType?: SortOrder
    description?: SortOrder
  }

  export type SupportedFormatSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type BankStatementCreateNestedManyWithoutUserInput = {
    create?: XOR<BankStatementCreateWithoutUserInput, BankStatementUncheckedCreateWithoutUserInput> | BankStatementCreateWithoutUserInput[] | BankStatementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankStatementCreateOrConnectWithoutUserInput | BankStatementCreateOrConnectWithoutUserInput[]
    createMany?: BankStatementCreateManyUserInputEnvelope
    connect?: BankStatementWhereUniqueInput | BankStatementWhereUniqueInput[]
  }

  export type AnalysisResultCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalysisResultCreateWithoutUserInput, AnalysisResultUncheckedCreateWithoutUserInput> | AnalysisResultCreateWithoutUserInput[] | AnalysisResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisResultCreateOrConnectWithoutUserInput | AnalysisResultCreateOrConnectWithoutUserInput[]
    createMany?: AnalysisResultCreateManyUserInputEnvelope
    connect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type BankStatementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BankStatementCreateWithoutUserInput, BankStatementUncheckedCreateWithoutUserInput> | BankStatementCreateWithoutUserInput[] | BankStatementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankStatementCreateOrConnectWithoutUserInput | BankStatementCreateOrConnectWithoutUserInput[]
    createMany?: BankStatementCreateManyUserInputEnvelope
    connect?: BankStatementWhereUniqueInput | BankStatementWhereUniqueInput[]
  }

  export type AnalysisResultUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalysisResultCreateWithoutUserInput, AnalysisResultUncheckedCreateWithoutUserInput> | AnalysisResultCreateWithoutUserInput[] | AnalysisResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisResultCreateOrConnectWithoutUserInput | AnalysisResultCreateOrConnectWithoutUserInput[]
    createMany?: AnalysisResultCreateManyUserInputEnvelope
    connect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type BankStatementUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankStatementCreateWithoutUserInput, BankStatementUncheckedCreateWithoutUserInput> | BankStatementCreateWithoutUserInput[] | BankStatementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankStatementCreateOrConnectWithoutUserInput | BankStatementCreateOrConnectWithoutUserInput[]
    upsert?: BankStatementUpsertWithWhereUniqueWithoutUserInput | BankStatementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankStatementCreateManyUserInputEnvelope
    set?: BankStatementWhereUniqueInput | BankStatementWhereUniqueInput[]
    disconnect?: BankStatementWhereUniqueInput | BankStatementWhereUniqueInput[]
    delete?: BankStatementWhereUniqueInput | BankStatementWhereUniqueInput[]
    connect?: BankStatementWhereUniqueInput | BankStatementWhereUniqueInput[]
    update?: BankStatementUpdateWithWhereUniqueWithoutUserInput | BankStatementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankStatementUpdateManyWithWhereWithoutUserInput | BankStatementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankStatementScalarWhereInput | BankStatementScalarWhereInput[]
  }

  export type AnalysisResultUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalysisResultCreateWithoutUserInput, AnalysisResultUncheckedCreateWithoutUserInput> | AnalysisResultCreateWithoutUserInput[] | AnalysisResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisResultCreateOrConnectWithoutUserInput | AnalysisResultCreateOrConnectWithoutUserInput[]
    upsert?: AnalysisResultUpsertWithWhereUniqueWithoutUserInput | AnalysisResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalysisResultCreateManyUserInputEnvelope
    set?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    disconnect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    delete?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    connect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    update?: AnalysisResultUpdateWithWhereUniqueWithoutUserInput | AnalysisResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalysisResultUpdateManyWithWhereWithoutUserInput | AnalysisResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalysisResultScalarWhereInput | AnalysisResultScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type BankStatementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankStatementCreateWithoutUserInput, BankStatementUncheckedCreateWithoutUserInput> | BankStatementCreateWithoutUserInput[] | BankStatementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankStatementCreateOrConnectWithoutUserInput | BankStatementCreateOrConnectWithoutUserInput[]
    upsert?: BankStatementUpsertWithWhereUniqueWithoutUserInput | BankStatementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankStatementCreateManyUserInputEnvelope
    set?: BankStatementWhereUniqueInput | BankStatementWhereUniqueInput[]
    disconnect?: BankStatementWhereUniqueInput | BankStatementWhereUniqueInput[]
    delete?: BankStatementWhereUniqueInput | BankStatementWhereUniqueInput[]
    connect?: BankStatementWhereUniqueInput | BankStatementWhereUniqueInput[]
    update?: BankStatementUpdateWithWhereUniqueWithoutUserInput | BankStatementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankStatementUpdateManyWithWhereWithoutUserInput | BankStatementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankStatementScalarWhereInput | BankStatementScalarWhereInput[]
  }

  export type AnalysisResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalysisResultCreateWithoutUserInput, AnalysisResultUncheckedCreateWithoutUserInput> | AnalysisResultCreateWithoutUserInput[] | AnalysisResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisResultCreateOrConnectWithoutUserInput | AnalysisResultCreateOrConnectWithoutUserInput[]
    upsert?: AnalysisResultUpsertWithWhereUniqueWithoutUserInput | AnalysisResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalysisResultCreateManyUserInputEnvelope
    set?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    disconnect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    delete?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    connect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    update?: AnalysisResultUpdateWithWhereUniqueWithoutUserInput | AnalysisResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalysisResultUpdateManyWithWhereWithoutUserInput | AnalysisResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalysisResultScalarWhereInput | AnalysisResultScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokenInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    upsert?: UserUpsertWithoutTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokenInput, UserUpdateWithoutTokenInput>, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserCreateNestedOneWithoutStatementsInput = {
    create?: XOR<UserCreateWithoutStatementsInput, UserUncheckedCreateWithoutStatementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatementsInput
    connect?: UserWhereUniqueInput
  }

  export type AnalysisResultCreateNestedManyWithoutStatementInput = {
    create?: XOR<AnalysisResultCreateWithoutStatementInput, AnalysisResultUncheckedCreateWithoutStatementInput> | AnalysisResultCreateWithoutStatementInput[] | AnalysisResultUncheckedCreateWithoutStatementInput[]
    connectOrCreate?: AnalysisResultCreateOrConnectWithoutStatementInput | AnalysisResultCreateOrConnectWithoutStatementInput[]
    createMany?: AnalysisResultCreateManyStatementInputEnvelope
    connect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
  }

  export type AnalysisResultUncheckedCreateNestedManyWithoutStatementInput = {
    create?: XOR<AnalysisResultCreateWithoutStatementInput, AnalysisResultUncheckedCreateWithoutStatementInput> | AnalysisResultCreateWithoutStatementInput[] | AnalysisResultUncheckedCreateWithoutStatementInput[]
    connectOrCreate?: AnalysisResultCreateOrConnectWithoutStatementInput | AnalysisResultCreateOrConnectWithoutStatementInput[]
    createMany?: AnalysisResultCreateManyStatementInputEnvelope
    connect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStatementsNestedInput = {
    create?: XOR<UserCreateWithoutStatementsInput, UserUncheckedCreateWithoutStatementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatementsInput
    upsert?: UserUpsertWithoutStatementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatementsInput, UserUpdateWithoutStatementsInput>, UserUncheckedUpdateWithoutStatementsInput>
  }

  export type AnalysisResultUpdateManyWithoutStatementNestedInput = {
    create?: XOR<AnalysisResultCreateWithoutStatementInput, AnalysisResultUncheckedCreateWithoutStatementInput> | AnalysisResultCreateWithoutStatementInput[] | AnalysisResultUncheckedCreateWithoutStatementInput[]
    connectOrCreate?: AnalysisResultCreateOrConnectWithoutStatementInput | AnalysisResultCreateOrConnectWithoutStatementInput[]
    upsert?: AnalysisResultUpsertWithWhereUniqueWithoutStatementInput | AnalysisResultUpsertWithWhereUniqueWithoutStatementInput[]
    createMany?: AnalysisResultCreateManyStatementInputEnvelope
    set?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    disconnect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    delete?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    connect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    update?: AnalysisResultUpdateWithWhereUniqueWithoutStatementInput | AnalysisResultUpdateWithWhereUniqueWithoutStatementInput[]
    updateMany?: AnalysisResultUpdateManyWithWhereWithoutStatementInput | AnalysisResultUpdateManyWithWhereWithoutStatementInput[]
    deleteMany?: AnalysisResultScalarWhereInput | AnalysisResultScalarWhereInput[]
  }

  export type AnalysisResultUncheckedUpdateManyWithoutStatementNestedInput = {
    create?: XOR<AnalysisResultCreateWithoutStatementInput, AnalysisResultUncheckedCreateWithoutStatementInput> | AnalysisResultCreateWithoutStatementInput[] | AnalysisResultUncheckedCreateWithoutStatementInput[]
    connectOrCreate?: AnalysisResultCreateOrConnectWithoutStatementInput | AnalysisResultCreateOrConnectWithoutStatementInput[]
    upsert?: AnalysisResultUpsertWithWhereUniqueWithoutStatementInput | AnalysisResultUpsertWithWhereUniqueWithoutStatementInput[]
    createMany?: AnalysisResultCreateManyStatementInputEnvelope
    set?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    disconnect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    delete?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    connect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    update?: AnalysisResultUpdateWithWhereUniqueWithoutStatementInput | AnalysisResultUpdateWithWhereUniqueWithoutStatementInput[]
    updateMany?: AnalysisResultUpdateManyWithWhereWithoutStatementInput | AnalysisResultUpdateManyWithWhereWithoutStatementInput[]
    deleteMany?: AnalysisResultScalarWhereInput | AnalysisResultScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAnalysesInput = {
    create?: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalysesInput
    connect?: UserWhereUniqueInput
  }

  export type BankStatementCreateNestedOneWithoutAnalysesInput = {
    create?: XOR<BankStatementCreateWithoutAnalysesInput, BankStatementUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: BankStatementCreateOrConnectWithoutAnalysesInput
    connect?: BankStatementWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAnalysisStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnalysisStatus
  }

  export type UserUpdateOneRequiredWithoutAnalysesNestedInput = {
    create?: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalysesInput
    upsert?: UserUpsertWithoutAnalysesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnalysesInput, UserUpdateWithoutAnalysesInput>, UserUncheckedUpdateWithoutAnalysesInput>
  }

  export type BankStatementUpdateOneRequiredWithoutAnalysesNestedInput = {
    create?: XOR<BankStatementCreateWithoutAnalysesInput, BankStatementUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: BankStatementCreateOrConnectWithoutAnalysesInput
    upsert?: BankStatementUpsertWithoutAnalysesInput
    connect?: BankStatementWhereUniqueInput
    update?: XOR<XOR<BankStatementUpdateToOneWithWhereWithoutAnalysesInput, BankStatementUpdateWithoutAnalysesInput>, BankStatementUncheckedUpdateWithoutAnalysesInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumAnalysisStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusFilter<$PrismaModel> | $Enums.AnalysisStatus
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisStatusFilter<$PrismaModel>
    _max?: NestedEnumAnalysisStatusFilter<$PrismaModel>
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

  export type TokenCreateWithoutUserInput = {
    token: string
    type: string
    expires: Date | string
    blacklisted?: boolean
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    type: string
    expires: Date | string
    blacklisted?: boolean
    createdAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BankStatementCreateWithoutUserInput = {
    id?: string
    filename: string
    uploadedAt?: Date | string
    fileSize: number
    bankName?: string | null
    accountType?: string | null
    statementPeriod: JsonNullValueInput | InputJsonValue
    processingStatus?: string
    cloudStorageUrl?: string | null
    signedUrl?: string | null
    storageProvider?: string | null
    storageKey?: string | null
    analyses?: AnalysisResultCreateNestedManyWithoutStatementInput
  }

  export type BankStatementUncheckedCreateWithoutUserInput = {
    id?: string
    filename: string
    uploadedAt?: Date | string
    fileSize: number
    bankName?: string | null
    accountType?: string | null
    statementPeriod: JsonNullValueInput | InputJsonValue
    processingStatus?: string
    cloudStorageUrl?: string | null
    signedUrl?: string | null
    storageProvider?: string | null
    storageKey?: string | null
    analyses?: AnalysisResultUncheckedCreateNestedManyWithoutStatementInput
  }

  export type BankStatementCreateOrConnectWithoutUserInput = {
    where: BankStatementWhereUniqueInput
    create: XOR<BankStatementCreateWithoutUserInput, BankStatementUncheckedCreateWithoutUserInput>
  }

  export type BankStatementCreateManyUserInputEnvelope = {
    data: BankStatementCreateManyUserInput | BankStatementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnalysisResultCreateWithoutUserInput = {
    id?: string
    analysisDate?: Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: string | null
    liquidityCoverage?: number | null
    averageBalance?: number | null
    cashFlowVolatility?: number | null
    status?: $Enums.AnalysisStatus
    progress?: number
    currentStep?: string | null
    error?: string | null
    statement: BankStatementCreateNestedOneWithoutAnalysesInput
  }

  export type AnalysisResultUncheckedCreateWithoutUserInput = {
    id?: string
    statementId: string
    analysisDate?: Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: string | null
    liquidityCoverage?: number | null
    averageBalance?: number | null
    cashFlowVolatility?: number | null
    status?: $Enums.AnalysisStatus
    progress?: number
    currentStep?: string | null
    error?: string | null
  }

  export type AnalysisResultCreateOrConnectWithoutUserInput = {
    where: AnalysisResultWhereUniqueInput
    create: XOR<AnalysisResultCreateWithoutUserInput, AnalysisResultUncheckedCreateWithoutUserInput>
  }

  export type AnalysisResultCreateManyUserInputEnvelope = {
    data: AnalysisResultCreateManyUserInput | AnalysisResultCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    type?: StringFilter<"Token"> | string
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
  }

  export type BankStatementUpsertWithWhereUniqueWithoutUserInput = {
    where: BankStatementWhereUniqueInput
    update: XOR<BankStatementUpdateWithoutUserInput, BankStatementUncheckedUpdateWithoutUserInput>
    create: XOR<BankStatementCreateWithoutUserInput, BankStatementUncheckedCreateWithoutUserInput>
  }

  export type BankStatementUpdateWithWhereUniqueWithoutUserInput = {
    where: BankStatementWhereUniqueInput
    data: XOR<BankStatementUpdateWithoutUserInput, BankStatementUncheckedUpdateWithoutUserInput>
  }

  export type BankStatementUpdateManyWithWhereWithoutUserInput = {
    where: BankStatementScalarWhereInput
    data: XOR<BankStatementUpdateManyMutationInput, BankStatementUncheckedUpdateManyWithoutUserInput>
  }

  export type BankStatementScalarWhereInput = {
    AND?: BankStatementScalarWhereInput | BankStatementScalarWhereInput[]
    OR?: BankStatementScalarWhereInput[]
    NOT?: BankStatementScalarWhereInput | BankStatementScalarWhereInput[]
    id?: StringFilter<"BankStatement"> | string
    filename?: StringFilter<"BankStatement"> | string
    uploadedAt?: DateTimeFilter<"BankStatement"> | Date | string
    fileSize?: IntFilter<"BankStatement"> | number
    bankName?: StringNullableFilter<"BankStatement"> | string | null
    accountType?: StringNullableFilter<"BankStatement"> | string | null
    statementPeriod?: JsonFilter<"BankStatement">
    processingStatus?: StringFilter<"BankStatement"> | string
    cloudStorageUrl?: StringNullableFilter<"BankStatement"> | string | null
    signedUrl?: StringNullableFilter<"BankStatement"> | string | null
    storageProvider?: StringNullableFilter<"BankStatement"> | string | null
    storageKey?: StringNullableFilter<"BankStatement"> | string | null
    userId?: IntFilter<"BankStatement"> | number
  }

  export type AnalysisResultUpsertWithWhereUniqueWithoutUserInput = {
    where: AnalysisResultWhereUniqueInput
    update: XOR<AnalysisResultUpdateWithoutUserInput, AnalysisResultUncheckedUpdateWithoutUserInput>
    create: XOR<AnalysisResultCreateWithoutUserInput, AnalysisResultUncheckedCreateWithoutUserInput>
  }

  export type AnalysisResultUpdateWithWhereUniqueWithoutUserInput = {
    where: AnalysisResultWhereUniqueInput
    data: XOR<AnalysisResultUpdateWithoutUserInput, AnalysisResultUncheckedUpdateWithoutUserInput>
  }

  export type AnalysisResultUpdateManyWithWhereWithoutUserInput = {
    where: AnalysisResultScalarWhereInput
    data: XOR<AnalysisResultUpdateManyMutationInput, AnalysisResultUncheckedUpdateManyWithoutUserInput>
  }

  export type AnalysisResultScalarWhereInput = {
    AND?: AnalysisResultScalarWhereInput | AnalysisResultScalarWhereInput[]
    OR?: AnalysisResultScalarWhereInput[]
    NOT?: AnalysisResultScalarWhereInput | AnalysisResultScalarWhereInput[]
    id?: StringFilter<"AnalysisResult"> | string
    statementId?: StringFilter<"AnalysisResult"> | string
    analysisDate?: DateTimeFilter<"AnalysisResult"> | Date | string
    financialInsights?: JsonNullableFilter<"AnalysisResult">
    recommendations?: JsonNullableFilter<"AnalysisResult">
    riskProfile?: StringNullableFilter<"AnalysisResult"> | string | null
    liquidityCoverage?: FloatNullableFilter<"AnalysisResult"> | number | null
    averageBalance?: FloatNullableFilter<"AnalysisResult"> | number | null
    cashFlowVolatility?: FloatNullableFilter<"AnalysisResult"> | number | null
    status?: EnumAnalysisStatusFilter<"AnalysisResult"> | $Enums.AnalysisStatus
    progress?: IntFilter<"AnalysisResult"> | number
    currentStep?: StringNullableFilter<"AnalysisResult"> | string | null
    error?: StringNullableFilter<"AnalysisResult"> | string | null
    userId?: IntFilter<"AnalysisResult"> | number
  }

  export type UserCreateWithoutTokenInput = {
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    clientType?: string | null
    companyName?: string | null
    phone?: string | null
    agreeToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    statements?: BankStatementCreateNestedManyWithoutUserInput
    analyses?: AnalysisResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    clientType?: string | null
    companyName?: string | null
    phone?: string | null
    agreeToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    statements?: BankStatementUncheckedCreateNestedManyWithoutUserInput
    analyses?: AnalysisResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
  }

  export type UserUpsertWithoutTokenInput = {
    update: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserUpdateWithoutTokenInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statements?: BankStatementUpdateManyWithoutUserNestedInput
    analyses?: AnalysisResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statements?: BankStatementUncheckedUpdateManyWithoutUserNestedInput
    analyses?: AnalysisResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStatementsInput = {
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    clientType?: string | null
    companyName?: string | null
    phone?: string | null
    agreeToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenCreateNestedManyWithoutUserInput
    analyses?: AnalysisResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStatementsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    clientType?: string | null
    companyName?: string | null
    phone?: string | null
    agreeToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    analyses?: AnalysisResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStatementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatementsInput, UserUncheckedCreateWithoutStatementsInput>
  }

  export type AnalysisResultCreateWithoutStatementInput = {
    id?: string
    analysisDate?: Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: string | null
    liquidityCoverage?: number | null
    averageBalance?: number | null
    cashFlowVolatility?: number | null
    status?: $Enums.AnalysisStatus
    progress?: number
    currentStep?: string | null
    error?: string | null
    user: UserCreateNestedOneWithoutAnalysesInput
  }

  export type AnalysisResultUncheckedCreateWithoutStatementInput = {
    id?: string
    analysisDate?: Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: string | null
    liquidityCoverage?: number | null
    averageBalance?: number | null
    cashFlowVolatility?: number | null
    status?: $Enums.AnalysisStatus
    progress?: number
    currentStep?: string | null
    error?: string | null
    userId: number
  }

  export type AnalysisResultCreateOrConnectWithoutStatementInput = {
    where: AnalysisResultWhereUniqueInput
    create: XOR<AnalysisResultCreateWithoutStatementInput, AnalysisResultUncheckedCreateWithoutStatementInput>
  }

  export type AnalysisResultCreateManyStatementInputEnvelope = {
    data: AnalysisResultCreateManyStatementInput | AnalysisResultCreateManyStatementInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStatementsInput = {
    update: XOR<UserUpdateWithoutStatementsInput, UserUncheckedUpdateWithoutStatementsInput>
    create: XOR<UserCreateWithoutStatementsInput, UserUncheckedCreateWithoutStatementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatementsInput, UserUncheckedUpdateWithoutStatementsInput>
  }

  export type UserUpdateWithoutStatementsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateManyWithoutUserNestedInput
    analyses?: AnalysisResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStatementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    analyses?: AnalysisResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnalysisResultUpsertWithWhereUniqueWithoutStatementInput = {
    where: AnalysisResultWhereUniqueInput
    update: XOR<AnalysisResultUpdateWithoutStatementInput, AnalysisResultUncheckedUpdateWithoutStatementInput>
    create: XOR<AnalysisResultCreateWithoutStatementInput, AnalysisResultUncheckedCreateWithoutStatementInput>
  }

  export type AnalysisResultUpdateWithWhereUniqueWithoutStatementInput = {
    where: AnalysisResultWhereUniqueInput
    data: XOR<AnalysisResultUpdateWithoutStatementInput, AnalysisResultUncheckedUpdateWithoutStatementInput>
  }

  export type AnalysisResultUpdateManyWithWhereWithoutStatementInput = {
    where: AnalysisResultScalarWhereInput
    data: XOR<AnalysisResultUpdateManyMutationInput, AnalysisResultUncheckedUpdateManyWithoutStatementInput>
  }

  export type UserCreateWithoutAnalysesInput = {
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    clientType?: string | null
    companyName?: string | null
    phone?: string | null
    agreeToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenCreateNestedManyWithoutUserInput
    statements?: BankStatementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnalysesInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    clientType?: string | null
    companyName?: string | null
    phone?: string | null
    agreeToTerms?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    statements?: BankStatementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnalysesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
  }

  export type BankStatementCreateWithoutAnalysesInput = {
    id?: string
    filename: string
    uploadedAt?: Date | string
    fileSize: number
    bankName?: string | null
    accountType?: string | null
    statementPeriod: JsonNullValueInput | InputJsonValue
    processingStatus?: string
    cloudStorageUrl?: string | null
    signedUrl?: string | null
    storageProvider?: string | null
    storageKey?: string | null
    user: UserCreateNestedOneWithoutStatementsInput
  }

  export type BankStatementUncheckedCreateWithoutAnalysesInput = {
    id?: string
    filename: string
    uploadedAt?: Date | string
    fileSize: number
    bankName?: string | null
    accountType?: string | null
    statementPeriod: JsonNullValueInput | InputJsonValue
    processingStatus?: string
    cloudStorageUrl?: string | null
    signedUrl?: string | null
    storageProvider?: string | null
    storageKey?: string | null
    userId: number
  }

  export type BankStatementCreateOrConnectWithoutAnalysesInput = {
    where: BankStatementWhereUniqueInput
    create: XOR<BankStatementCreateWithoutAnalysesInput, BankStatementUncheckedCreateWithoutAnalysesInput>
  }

  export type UserUpsertWithoutAnalysesInput = {
    update: XOR<UserUpdateWithoutAnalysesInput, UserUncheckedUpdateWithoutAnalysesInput>
    create: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnalysesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnalysesInput, UserUncheckedUpdateWithoutAnalysesInput>
  }

  export type UserUpdateWithoutAnalysesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateManyWithoutUserNestedInput
    statements?: BankStatementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnalysesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    statements?: BankStatementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BankStatementUpsertWithoutAnalysesInput = {
    update: XOR<BankStatementUpdateWithoutAnalysesInput, BankStatementUncheckedUpdateWithoutAnalysesInput>
    create: XOR<BankStatementCreateWithoutAnalysesInput, BankStatementUncheckedCreateWithoutAnalysesInput>
    where?: BankStatementWhereInput
  }

  export type BankStatementUpdateToOneWithWhereWithoutAnalysesInput = {
    where?: BankStatementWhereInput
    data: XOR<BankStatementUpdateWithoutAnalysesInput, BankStatementUncheckedUpdateWithoutAnalysesInput>
  }

  export type BankStatementUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileSize?: IntFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    statementPeriod?: JsonNullValueInput | InputJsonValue
    processingStatus?: StringFieldUpdateOperationsInput | string
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutStatementsNestedInput
  }

  export type BankStatementUncheckedUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileSize?: IntFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    statementPeriod?: JsonNullValueInput | InputJsonValue
    processingStatus?: StringFieldUpdateOperationsInput | string
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TokenCreateManyUserInput = {
    id?: number
    token: string
    type: string
    expires: Date | string
    blacklisted?: boolean
    createdAt?: Date | string
  }

  export type BankStatementCreateManyUserInput = {
    id?: string
    filename: string
    uploadedAt?: Date | string
    fileSize: number
    bankName?: string | null
    accountType?: string | null
    statementPeriod: JsonNullValueInput | InputJsonValue
    processingStatus?: string
    cloudStorageUrl?: string | null
    signedUrl?: string | null
    storageProvider?: string | null
    storageKey?: string | null
  }

  export type AnalysisResultCreateManyUserInput = {
    id?: string
    statementId: string
    analysisDate?: Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: string | null
    liquidityCoverage?: number | null
    averageBalance?: number | null
    cashFlowVolatility?: number | null
    status?: $Enums.AnalysisStatus
    progress?: number
    currentStep?: string | null
    error?: string | null
  }

  export type TokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankStatementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileSize?: IntFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    statementPeriod?: JsonNullValueInput | InputJsonValue
    processingStatus?: StringFieldUpdateOperationsInput | string
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    analyses?: AnalysisResultUpdateManyWithoutStatementNestedInput
  }

  export type BankStatementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileSize?: IntFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    statementPeriod?: JsonNullValueInput | InputJsonValue
    processingStatus?: StringFieldUpdateOperationsInput | string
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    analyses?: AnalysisResultUncheckedUpdateManyWithoutStatementNestedInput
  }

  export type BankStatementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileSize?: IntFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    statementPeriod?: JsonNullValueInput | InputJsonValue
    processingStatus?: StringFieldUpdateOperationsInput | string
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalysisResultUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    liquidityCoverage?: NullableFloatFieldUpdateOperationsInput | number | null
    averageBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    cashFlowVolatility?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    progress?: IntFieldUpdateOperationsInput | number
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    statement?: BankStatementUpdateOneRequiredWithoutAnalysesNestedInput
  }

  export type AnalysisResultUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    statementId?: StringFieldUpdateOperationsInput | string
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    liquidityCoverage?: NullableFloatFieldUpdateOperationsInput | number | null
    averageBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    cashFlowVolatility?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    progress?: IntFieldUpdateOperationsInput | number
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalysisResultUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    statementId?: StringFieldUpdateOperationsInput | string
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    liquidityCoverage?: NullableFloatFieldUpdateOperationsInput | number | null
    averageBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    cashFlowVolatility?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    progress?: IntFieldUpdateOperationsInput | number
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalysisResultCreateManyStatementInput = {
    id?: string
    analysisDate?: Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: string | null
    liquidityCoverage?: number | null
    averageBalance?: number | null
    cashFlowVolatility?: number | null
    status?: $Enums.AnalysisStatus
    progress?: number
    currentStep?: string | null
    error?: string | null
    userId: number
  }

  export type AnalysisResultUpdateWithoutStatementInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    liquidityCoverage?: NullableFloatFieldUpdateOperationsInput | number | null
    averageBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    cashFlowVolatility?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    progress?: IntFieldUpdateOperationsInput | number
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAnalysesNestedInput
  }

  export type AnalysisResultUncheckedUpdateWithoutStatementInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    liquidityCoverage?: NullableFloatFieldUpdateOperationsInput | number | null
    averageBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    cashFlowVolatility?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    progress?: IntFieldUpdateOperationsInput | number
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AnalysisResultUncheckedUpdateManyWithoutStatementInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    financialInsights?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    liquidityCoverage?: NullableFloatFieldUpdateOperationsInput | number | null
    averageBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    cashFlowVolatility?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    progress?: IntFieldUpdateOperationsInput | number
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
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
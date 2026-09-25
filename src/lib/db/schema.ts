import {
  mysqlTable,
  mysqlEnum,
  varchar,
  text,
  timestamp,
  int,
  boolean,
  decimal,
  json,
  uniqueIndex,
  index,
} from "drizzle-orm/mysql-core";
import { randomUUID } from "node:crypto";

const cuid = () => randomUUID();

// ============================================
// ENUMS
// ============================================

// Factory functions so every table gets its own column builder instance
export const roleEnum = () =>
  mysqlEnum("role", ["SUPER_ADMIN", "BLUD_ADMIN", "UNIT_ADMIN", "CUSTOMER"]);

export const productTypeEnum = () =>
  mysqlEnum("product_type", ["PRODUCT", "SERVICE", "DIGITAL_SERVICE"]);

export const orderStatusEnum = () =>
  mysqlEnum("order_status", [
    "PENDING_PAYMENT",
    "PAID",
    "PROCESSING",
    "IN_PROGRESS",
    "COMPLETED",
    "CANCELLED",
  ]);

export const publicationStatusEnum = () =>
  mysqlEnum("status", ["DRAFT", "PUBLISHED", "UNPUBLISHED"]);

const createdAt = () => timestamp("created_at").notNull().defaultNow();
const updatedAt = () => timestamp("updated_at").notNull().defaultNow();

// ============================================
// USER & AUTHENTICATION
// ============================================

export const users = mysqlTable(
  "users",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    name: varchar("name", { length: 191 }),
    email: varchar("email", { length: 191 }).notNull(),
    emailVerified: timestamp("email_verified"),
    image: varchar("image", { length: 512 }),
    password: varchar("password", { length: 191 }),
    role: roleEnum().notNull().default("CUSTOMER"),
    unitId: varchar("unit_id", { length: 36 }),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("users_email_unique").on(t.email)],
);

export const accounts = mysqlTable(
  "accounts",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    userId: varchar("user_id", { length: 36 }).notNull(),
    type: varchar("type", { length: 64 }).notNull(),
    provider: varchar("provider", { length: 64 }).notNull(),
    providerAccountId: varchar("provider_account_id", { length: 191 }).notNull(),
    refreshToken: text("refresh_token"),
    accessToken: text("access_token"),
    expiresAt: int("expires_at"),
    tokenType: varchar("token_type", { length: 64 }),
    scope: varchar("scope", { length: 191 }),
    idToken: text("id_token"),
  },
  (t) => [
    uniqueIndex("accounts_provider_unique").on(t.provider, t.providerAccountId),
  ],
);

export const sessions = mysqlTable(
  "sessions",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    sessionToken: varchar("session_token", { length: 191 }).notNull(),
    userId: varchar("user_id", { length: 36 }).notNull(),
    expires: timestamp("expires").notNull(),
  },
  (t) => [uniqueIndex("sessions_token_unique").on(t.sessionToken)],
);

export const verificationTokens = mysqlTable(
  "verification_tokens",
  {
    identifier: varchar("identifier", { length: 191 }).notNull(),
    token: varchar("token", { length: 191 }).notNull(),
    expires: timestamp("expires").notNull(),
  },
  (t) => [uniqueIndex("verification_tokens_unique").on(t.identifier, t.token)],
);

// ============================================
// SCHOOL BASE WEBSITE
// ============================================

export const schoolPages = mysqlTable(
  "school_pages",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    title: varchar("title", { length: 191 }).notNull(),
    slug: varchar("slug", { length: 191 }).notNull(),
    content: text("content"),
    excerpt: varchar("excerpt", { length: 512 }),
    featuredImage: varchar("featured_image", { length: 512 }),
    status: publicationStatusEnum().notNull().default("DRAFT"),
    publishedAt: timestamp("published_at"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("school_pages_slug_unique").on(t.slug)],
);

export const schoolNews = mysqlTable(
  "school_news",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    title: varchar("title", { length: 191 }).notNull(),
    slug: varchar("slug", { length: 191 }).notNull(),
    content: text("content"),
    excerpt: varchar("excerpt", { length: 512 }),
    featuredImage: varchar("featured_image", { length: 512 }),
    authorId: varchar("author_id", { length: 36 }),
    publishedAt: timestamp("published_at"),
    status: publicationStatusEnum().notNull().default("DRAFT"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("school_news_slug_unique").on(t.slug)],
);

export const schoolEvents = mysqlTable(
  "school_events",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    title: varchar("title", { length: 191 }).notNull(),
    slug: varchar("slug", { length: 191 }).notNull(),
    description: text("description"),
    startDate: timestamp("start_date").notNull(),
    endDate: timestamp("end_date"),
    location: varchar("location", { length: 191 }),
    featuredImage: varchar("featured_image", { length: 512 }),
    status: publicationStatusEnum().notNull().default("DRAFT"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("school_events_slug_unique").on(t.slug)],
);

// ============================================
// BLUD & UNIT PRODUCTION
// ============================================

export const units = mysqlTable(
  "units",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    name: varchar("name", { length: 191 }).notNull(),
    slug: varchar("slug", { length: 191 }).notNull(),
    description: text("description"),
    category: varchar("category", { length: 191 }),
    logo: varchar("logo", { length: 512 }),
    coverImage: varchar("cover_image", { length: 512 }),
    isPublic: boolean("is_public").notNull().default(true),
    isActive: boolean("is_active").notNull().default(true),
    isDemo: boolean("is_demo").notNull().default(false),
    adminId: varchar("admin_id", { length: 36 }),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("units_slug_unique").on(t.slug)],
);

export const unitMembers = mysqlTable(
  "unit_members",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    unitId: varchar("unit_id", { length: 36 }).notNull(),
    userId: varchar("user_id", { length: 36 }).notNull(),
    role: varchar("role", { length: 64 }).notNull(),
    joinedAt: timestamp("joined_at").notNull().defaultNow(),
  },
  (t) => [uniqueIndex("unit_members_unique").on(t.unitId, t.userId)],
);

// ============================================
// PRODUCTS & SERVICES
// ============================================

export const products = mysqlTable(
  "products",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    name: varchar("name", { length: 191 }).notNull(),
    slug: varchar("slug", { length: 191 }).notNull(),
    description: text("description"),
    type: productTypeEnum().notNull().default("PRODUCT"),
    price: decimal("price", { precision: 10, scale: 2 }).notNull(),
    unitId: varchar("unit_id", { length: 36 }).notNull(),
    categoryId: varchar("category_id", { length: 36 }),
    images: json("images").$type<string[]>().notNull().default([]),
    status: publicationStatusEnum().notNull().default("DRAFT"),
    estimatedDuration: varchar("estimated_duration", { length: 191 }),
    isDemo: boolean("is_demo").notNull().default(false),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [
    uniqueIndex("products_slug_unique").on(t.slug),
    index("products_unit_idx").on(t.unitId),
  ],
);

export const services = mysqlTable(
  "services",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    name: varchar("name", { length: 191 }).notNull(),
    slug: varchar("slug", { length: 191 }).notNull(),
    description: text("description"),
    unitId: varchar("unit_id", { length: 36 }).notNull(),
    priceFrom: decimal("price_from", { precision: 10, scale: 2 }),
    duration: varchar("duration", { length: 191 }),
    requirements: text("requirements"),
    status: publicationStatusEnum().notNull().default("DRAFT"),
    isDemo: boolean("is_demo").notNull().default(false),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [
    uniqueIndex("services_slug_unique").on(t.slug),
    index("services_unit_idx").on(t.unitId),
  ],
);

export const categories = mysqlTable(
  "categories",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    name: varchar("name", { length: 191 }).notNull(),
    slug: varchar("slug", { length: 191 }).notNull(),
    description: varchar("description", { length: 512 }),
    unitId: varchar("unit_id", { length: 36 }),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("categories_slug_unique").on(t.slug)],
);

// ============================================
// PORTFOLIO & STUDENT WORKS
// ============================================

export const portfolios = mysqlTable("portfolios", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => cuid()),
  title: varchar("title", { length: 191 }).notNull(),
  description: text("description"),
  unitId: varchar("unit_id", { length: 36 }).notNull(),
  category: varchar("category", { length: 191 }),
  images: json("images").$type<string[]>().notNull().default([]),
  year: int("year"),
  status: publicationStatusEnum().notNull().default("DRAFT"),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
});

export const studentWorks = mysqlTable(
  "student_works",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    title: varchar("title", { length: 191 }).notNull(),
    slug: varchar("slug", { length: 191 }).notNull(),
    description: text("description"),
    major: varchar("major", { length: 64 }),
    unitId: varchar("unit_id", { length: 36 }),
    studentTeam: text("student_team"),
    year: int("year"),
    images: json("images").$type<string[]>().notNull().default([]),
    status: publicationStatusEnum().notNull().default("DRAFT"),
    isDemo: boolean("is_demo").notNull().default(false),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("student_works_slug_unique").on(t.slug)],
);

// ============================================
// SHOPPING CART & ORDERS
// ============================================

export const carts = mysqlTable(
  "carts",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    userId: varchar("user_id", { length: 36 }).notNull(),
    unitId: varchar("unit_id", { length: 36 }),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("carts_user_unique").on(t.userId)],
);

export const cartItems = mysqlTable(
  "cart_items",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    cartId: varchar("cart_id", { length: 36 }).notNull(),
    productId: varchar("product_id", { length: 36 }),
    unitId: varchar("unit_id", { length: 36 }).notNull(),
    quantity: int("quantity").notNull().default(1),
    notes: text("notes"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("cart_items_unique").on(t.cartId, t.productId)],
);

export const orders = mysqlTable(
  "orders",
  {
    id: varchar("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => cuid()),
    orderId: varchar("order_id", { length: 64 }).notNull(),
    userId: varchar("user_id", { length: 36 }).notNull(),
    unitId: varchar("unit_id", { length: 36 }).notNull(),
    status: orderStatusEnum().notNull().default("PENDING_PAYMENT"),
    subtotal: decimal("subtotal", { precision: 10, scale: 2 }).notNull(),
    tax: decimal("tax", { precision: 10, scale: 2 }).notNull().default("0"),
    total: decimal("total", { precision: 10, scale: 2 }).notNull(),
    customerName: varchar("customer_name", { length: 191 }).notNull(),
    customerEmail: varchar("customer_email", { length: 191 }),
    customerPhone: varchar("customer_phone", { length: 32 }).notNull(),
    customerAddress: text("customer_address"),
    notes: text("notes"),
    paymentMethod: varchar("payment_method", { length: 64 }),
    paidAt: timestamp("paid_at"),
    completedAt: timestamp("completed_at"),
    cancelledAt: timestamp("cancelled_at"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("orders_order_id_unique").on(t.orderId)],
);

export const orderItems = mysqlTable("order_items", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => cuid()),
  orderId: varchar("order_id", { length: 36 }).notNull(),
  productId: varchar("product_id", { length: 36 }),
  productName: varchar("product_name", { length: 191 }).notNull(),
  productType: productTypeEnum().notNull(),
  quantity: int("quantity").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  subtotal: decimal("subtotal", { precision: 10, scale: 2 }).notNull(),
  notes: text("notes"),
});

export const payments = mysqlTable("payments", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => cuid()),
  orderId: varchar("order_id", { length: 36 }).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  method: varchar("method", { length: 64 }).notNull(),
  status: varchar("status", { length: 32 }).notNull(),
  transactionId: varchar("transaction_id", { length: 191 }),
  paymentProof: varchar("payment_proof", { length: 512 }),
  paidAt: timestamp("paid_at"),
  createdAt: createdAt(),
});

export const addresses = mysqlTable("addresses", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => cuid()),
  userId: varchar("user_id", { length: 36 }).notNull(),
  label: varchar("label", { length: 64 }),
  fullName: varchar("full_name", { length: 191 }).notNull(),
  phone: varchar("phone", { length: 32 }).notNull(),
  province: varchar("province", { length: 191 }),
  city: varchar("city", { length: 191 }),
  district: varchar("district", { length: 191 }),
  postalCode: varchar("postal_code", { length: 16 }),
  address: text("address").notNull(),
  isDefault: boolean("is_default").notNull().default(false),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
});

// Inferred types
export type User = typeof users.$inferSelect;
export type Unit = typeof units.$inferSelect;
export type Product = typeof products.$inferSelect;
export type Service = typeof services.$inferSelect;
export type StudentWork = typeof studentWorks.$inferSelect;
export type Portfolio = typeof portfolios.$inferSelect;
export type Order = typeof orders.$inferSelect;
export type OrderItem = typeof orderItems.$inferSelect;

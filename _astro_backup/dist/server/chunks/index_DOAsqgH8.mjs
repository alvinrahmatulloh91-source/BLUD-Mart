import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { mysqlTable, varchar, timestamp, uniqueIndex, text, int, boolean, json, decimal, index, mysqlEnum } from 'drizzle-orm/mysql-core';
import { randomUUID } from 'node:crypto';

const cuid = () => randomUUID();
const roleEnum = () => mysqlEnum("role", ["SUPER_ADMIN", "BLUD_ADMIN", "UNIT_ADMIN", "CUSTOMER"]);
const productTypeEnum = () => mysqlEnum("product_type", ["PRODUCT", "SERVICE", "DIGITAL_SERVICE"]);
const orderStatusEnum = () => mysqlEnum("order_status", [
  "PENDING_PAYMENT",
  "PAID",
  "PROCESSING",
  "IN_PROGRESS",
  "COMPLETED",
  "CANCELLED"
]);
const publicationStatusEnum = () => mysqlEnum("status", ["DRAFT", "PUBLISHED", "UNPUBLISHED"]);
const createdAt = () => timestamp("created_at").notNull().defaultNow();
const updatedAt = () => timestamp("updated_at").notNull().defaultNow();
const users = mysqlTable(
  "users",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
    name: varchar("name", { length: 191 }),
    email: varchar("email", { length: 191 }).notNull(),
    emailVerified: timestamp("email_verified"),
    image: varchar("image", { length: 512 }),
    password: varchar("password", { length: 191 }),
    role: roleEnum().notNull().default("CUSTOMER"),
    unitId: varchar("unit_id", { length: 36 }),
    createdAt: createdAt(),
    updatedAt: updatedAt()
  },
  (t) => [uniqueIndex("users_email_unique").on(t.email)]
);
const accounts = mysqlTable(
  "accounts",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
    userId: varchar("user_id", { length: 36 }).notNull(),
    type: varchar("type", { length: 64 }).notNull(),
    provider: varchar("provider", { length: 64 }).notNull(),
    providerAccountId: varchar("provider_account_id", { length: 191 }).notNull(),
    refreshToken: text("refresh_token"),
    accessToken: text("access_token"),
    expiresAt: int("expires_at"),
    tokenType: varchar("token_type", { length: 64 }),
    scope: varchar("scope", { length: 191 }),
    idToken: text("id_token")
  },
  (t) => [
    uniqueIndex("accounts_provider_unique").on(t.provider, t.providerAccountId)
  ]
);
const sessions = mysqlTable(
  "sessions",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
    sessionToken: varchar("session_token", { length: 191 }).notNull(),
    userId: varchar("user_id", { length: 36 }).notNull(),
    expires: timestamp("expires").notNull()
  },
  (t) => [uniqueIndex("sessions_token_unique").on(t.sessionToken)]
);
const verificationTokens = mysqlTable(
  "verification_tokens",
  {
    identifier: varchar("identifier", { length: 191 }).notNull(),
    token: varchar("token", { length: 191 }).notNull(),
    expires: timestamp("expires").notNull()
  },
  (t) => [uniqueIndex("verification_tokens_unique").on(t.identifier, t.token)]
);
const schoolPages = mysqlTable(
  "school_pages",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
    title: varchar("title", { length: 191 }).notNull(),
    slug: varchar("slug", { length: 191 }).notNull(),
    content: text("content"),
    excerpt: varchar("excerpt", { length: 512 }),
    featuredImage: varchar("featured_image", { length: 512 }),
    status: publicationStatusEnum().notNull().default("DRAFT"),
    publishedAt: timestamp("published_at"),
    createdAt: createdAt(),
    updatedAt: updatedAt()
  },
  (t) => [uniqueIndex("school_pages_slug_unique").on(t.slug)]
);
const schoolNews = mysqlTable(
  "school_news",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
    title: varchar("title", { length: 191 }).notNull(),
    slug: varchar("slug", { length: 191 }).notNull(),
    content: text("content"),
    excerpt: varchar("excerpt", { length: 512 }),
    featuredImage: varchar("featured_image", { length: 512 }),
    authorId: varchar("author_id", { length: 36 }),
    publishedAt: timestamp("published_at"),
    status: publicationStatusEnum().notNull().default("DRAFT"),
    createdAt: createdAt(),
    updatedAt: updatedAt()
  },
  (t) => [uniqueIndex("school_news_slug_unique").on(t.slug)]
);
const schoolEvents = mysqlTable(
  "school_events",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
    title: varchar("title", { length: 191 }).notNull(),
    slug: varchar("slug", { length: 191 }).notNull(),
    description: text("description"),
    startDate: timestamp("start_date").notNull(),
    endDate: timestamp("end_date"),
    location: varchar("location", { length: 191 }),
    featuredImage: varchar("featured_image", { length: 512 }),
    status: publicationStatusEnum().notNull().default("DRAFT"),
    createdAt: createdAt(),
    updatedAt: updatedAt()
  },
  (t) => [uniqueIndex("school_events_slug_unique").on(t.slug)]
);
const units = mysqlTable(
  "units",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
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
    updatedAt: updatedAt()
  },
  (t) => [uniqueIndex("units_slug_unique").on(t.slug)]
);
const unitMembers = mysqlTable(
  "unit_members",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
    unitId: varchar("unit_id", { length: 36 }).notNull(),
    userId: varchar("user_id", { length: 36 }).notNull(),
    role: varchar("role", { length: 64 }).notNull(),
    joinedAt: timestamp("joined_at").notNull().defaultNow()
  },
  (t) => [uniqueIndex("unit_members_unique").on(t.unitId, t.userId)]
);
const products = mysqlTable(
  "products",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
    name: varchar("name", { length: 191 }).notNull(),
    slug: varchar("slug", { length: 191 }).notNull(),
    description: text("description"),
    type: productTypeEnum().notNull().default("PRODUCT"),
    price: decimal("price", { precision: 10, scale: 2 }).notNull(),
    unitId: varchar("unit_id", { length: 36 }).notNull(),
    categoryId: varchar("category_id", { length: 36 }),
    images: json("images").$type().notNull().default([]),
    status: publicationStatusEnum().notNull().default("DRAFT"),
    estimatedDuration: varchar("estimated_duration", { length: 191 }),
    isDemo: boolean("is_demo").notNull().default(false),
    createdAt: createdAt(),
    updatedAt: updatedAt()
  },
  (t) => [
    uniqueIndex("products_slug_unique").on(t.slug),
    index("products_unit_idx").on(t.unitId)
  ]
);
const services = mysqlTable(
  "services",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
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
    updatedAt: updatedAt()
  },
  (t) => [
    uniqueIndex("services_slug_unique").on(t.slug),
    index("services_unit_idx").on(t.unitId)
  ]
);
const categories = mysqlTable(
  "categories",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
    name: varchar("name", { length: 191 }).notNull(),
    slug: varchar("slug", { length: 191 }).notNull(),
    description: varchar("description", { length: 512 }),
    unitId: varchar("unit_id", { length: 36 }),
    createdAt: createdAt(),
    updatedAt: updatedAt()
  },
  (t) => [uniqueIndex("categories_slug_unique").on(t.slug)]
);
const portfolios = mysqlTable("portfolios", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
  title: varchar("title", { length: 191 }).notNull(),
  description: text("description"),
  unitId: varchar("unit_id", { length: 36 }).notNull(),
  category: varchar("category", { length: 191 }),
  images: json("images").$type().notNull().default([]),
  year: int("year"),
  status: publicationStatusEnum().notNull().default("DRAFT"),
  createdAt: createdAt(),
  updatedAt: updatedAt()
});
const studentWorks = mysqlTable(
  "student_works",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
    title: varchar("title", { length: 191 }).notNull(),
    slug: varchar("slug", { length: 191 }).notNull(),
    description: text("description"),
    major: varchar("major", { length: 64 }),
    unitId: varchar("unit_id", { length: 36 }),
    studentTeam: text("student_team"),
    year: int("year"),
    images: json("images").$type().notNull().default([]),
    status: publicationStatusEnum().notNull().default("DRAFT"),
    isDemo: boolean("is_demo").notNull().default(false),
    createdAt: createdAt(),
    updatedAt: updatedAt()
  },
  (t) => [uniqueIndex("student_works_slug_unique").on(t.slug)]
);
const carts = mysqlTable(
  "carts",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
    userId: varchar("user_id", { length: 36 }).notNull(),
    unitId: varchar("unit_id", { length: 36 }),
    createdAt: createdAt(),
    updatedAt: updatedAt()
  },
  (t) => [uniqueIndex("carts_user_unique").on(t.userId)]
);
const cartItems = mysqlTable(
  "cart_items",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
    cartId: varchar("cart_id", { length: 36 }).notNull(),
    productId: varchar("product_id", { length: 36 }),
    unitId: varchar("unit_id", { length: 36 }).notNull(),
    quantity: int("quantity").notNull().default(1),
    notes: text("notes"),
    createdAt: createdAt(),
    updatedAt: updatedAt()
  },
  (t) => [uniqueIndex("cart_items_unique").on(t.cartId, t.productId)]
);
const orders = mysqlTable(
  "orders",
  {
    id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
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
    updatedAt: updatedAt()
  },
  (t) => [uniqueIndex("orders_order_id_unique").on(t.orderId)]
);
const orderItems = mysqlTable("order_items", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
  orderId: varchar("order_id", { length: 36 }).notNull(),
  productId: varchar("product_id", { length: 36 }),
  productName: varchar("product_name", { length: 191 }).notNull(),
  productType: productTypeEnum().notNull(),
  quantity: int("quantity").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  subtotal: decimal("subtotal", { precision: 10, scale: 2 }).notNull(),
  notes: text("notes")
});
const payments = mysqlTable("payments", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
  orderId: varchar("order_id", { length: 36 }).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  method: varchar("method", { length: 64 }).notNull(),
  status: varchar("status", { length: 32 }).notNull(),
  transactionId: varchar("transaction_id", { length: 191 }),
  paymentProof: varchar("payment_proof", { length: 512 }),
  paidAt: timestamp("paid_at"),
  createdAt: createdAt()
});
const addresses = mysqlTable("addresses", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => cuid()),
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
  updatedAt: updatedAt()
});

const schema = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  accounts,
  addresses,
  cartItems,
  carts,
  categories,
  orderItems,
  orderStatusEnum,
  orders,
  payments,
  portfolios,
  productTypeEnum,
  products,
  publicationStatusEnum,
  roleEnum,
  schoolEvents,
  schoolNews,
  schoolPages,
  services,
  sessions,
  studentWorks,
  unitMembers,
  units,
  users,
  verificationTokens
}, Symbol.toStringTag, { value: 'Module' }));

const globalForDb = globalThis;
function createPool() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Copy .env.example to .env and configure your MySQL connection."
    );
  }
  return mysql.createPool({
    uri: url,
    connectionLimit: 10
  });
}
const pool = globalForDb.mysqlPool ?? createPool();
if (process.env.NODE_ENV !== "production") globalForDb.mysqlPool = pool;
const db = drizzle(pool, { schema, mode: "default" });

export { services as a, db as d, products as p, studentWorks as s, units as u };

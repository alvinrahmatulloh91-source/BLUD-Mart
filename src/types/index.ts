import { Role, ProductType, OrderStatus, PublicationStatus } from '@prisma/client'

export type { Role, ProductType, OrderStatus, PublicationStatus }

export interface Unit {
  id: string
  name: string
  slug: string
  description: string | null
  category: string | null
  logo: string | null
  coverImage: string | null
  isPublic: boolean
  isActive: boolean
  isDemo: boolean
  adminId: string | null
  createdAt: Date
  updatedAt: Date
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string | null
  type: ProductType
  price: number
  unitId: string
  categoryId: string | null
  images: string[]
  status: PublicationStatus
  estimatedDuration: string | null
  isDemo: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Service {
  id: string
  name: string
  slug: string
  description: string | null
  unitId: string
  priceFrom: number | null
  duration: string | null
  requirements: string | null
  status: PublicationStatus
  isDemo: boolean
  createdAt: Date
  updatedAt: Date
}

export interface StudentWork {
  id: string
  title: string
  slug: string
  description: string | null
  major: string | null
  unitId: string | null
  studentTeam: string | null
  year: number | null
  images: string[]
  status: PublicationStatus
  isDemo: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CartItem {
  productId: string
  name: string
  price: number
  quantity: number
  unitId: string
  unitName: string
  notes?: string
}

export interface Cart {
  id: string
  userId: string
  unitId: string | null
  items: CartItem[]
}

export interface OrderItem {
  productId: string | null
  productName: string
  productType: ProductType
  quantity: number
  price: number
  subtotal: number
  notes?: string
}

export interface Order {
  id: string
  orderId: string
  userId: string
  unitId: string
  status: OrderStatus
  subtotal: number
  tax: number
  total: number
  customerName: string
  customerEmail: string | null
  customerPhone: string
  customerAddress: string | null
  notes: string | null
  paymentMethod: string | null
  paidAt: Date | null
  completedAt: Date | null
  cancelledAt: Date | null
  createdAt: Date
  updatedAt: Date
  items: OrderItem[]
}

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  PENDING_PAYMENT: 'Menunggu Pembayaran',
  PAID: 'Dibayar',
  PROCESSING: 'Diproses',
  IN_PROGRESS: 'Dalam Pengerjaan',
  COMPLETED: 'Selesai',
  CANCELLED: 'Dibatalkan',
}

export const ORDER_STATUS_COLORS: Record<OrderStatus, string> = {
  PENDING_PAYMENT: 'bg-yellow-100 text-yellow-800',
  PAID: 'bg-blue-100 text-blue-800',
  PROCESSING: 'bg-purple-100 text-purple-800',
  IN_PROGRESS: 'bg-orange-100 text-orange-800',
  COMPLETED: 'bg-green-100 text-green-800',
  CANCELLED: 'bg-red-100 text-red-800',
}

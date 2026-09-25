import { z } from 'zod'

export const orderSchema = z.object({
  customerName: z.string().min(2, 'Nama harus minimal 2 karakter'),
  customerEmail: z.string().email('Email tidak valid').optional().or(z.literal('')),
  customerPhone: z.string().min(10, 'Nomor HP harus minimal 10 digit'),
  customerAddress: z.string().optional(),
  notes: z.string().optional(),
  paymentMethod: z.enum(['QRIS', 'TRANSFER']),
})

export const productSchema = z.object({
  name: z.string().min(2, 'Nama produk harus minimal 2 karakter'),
  slug: z.string().min(2, 'Slug harus minimal 2 karakter'),
  description: z.string().optional(),
  type: z.enum(['PRODUCT', 'SERVICE', 'DIGITAL_SERVICE']),
  price: z.number().positive('Harga harus lebih dari 0'),
  categoryId: z.string().optional(),
  estimatedDuration: z.string().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'UNPUBLISHED']),
})

export const serviceSchema = z.object({
  name: z.string().min(2, 'Nama layanan harus minimal 2 karakter'),
  slug: z.string().min(2, 'Slug harus minimal 2 karakter'),
  description: z.string().optional(),
  priceFrom: z.number().positive().optional().or(z.null()),
  duration: z.string().optional(),
  requirements: z.string().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'UNPUBLISHED']),
})

export const unitSchema = z.object({
  name: z.string().min(2, 'Nama unit harus minimal 2 karakter'),
  slug: z.string().min(2, 'Slug harus minimal 2 karakter'),
  description: z.string().optional(),
  category: z.string().optional(),
  isPublic: z.boolean().default(true),
  isActive: z.boolean().default(true),
})

export const studentWorkSchema = z.object({
  title: z.string().min(2, 'Judul harus minimal 2 karakter'),
  slug: z.string().min(2, 'Slug harus minimal 2 karakter'),
  description: z.string().optional(),
  major: z.string().optional(),
  unitId: z.string().optional().or(z.null()),
  studentTeam: z.string().optional(),
  year: z.number().int().positive().optional().or(z.null()),
  status: z.enum(['DRAFT', 'PUBLISHED', 'UNPUBLISHED']),
})

export type OrderInput = z.infer<typeof orderSchema>
export type ProductInput = z.infer<typeof productSchema>
export type ServiceInput = z.infer<typeof serviceSchema>
export type UnitInput = z.infer<typeof unitSchema>
export type StudentWorkInput = z.infer<typeof studentWorkSchema>

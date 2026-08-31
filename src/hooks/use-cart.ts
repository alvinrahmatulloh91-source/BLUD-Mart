import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  productId: string
  name: string
  price: number
  quantity: number
  unitId: string
  unitName: string
  notes?: string
}

interface CartState {
  items: CartItem[]
  unitId: string | null
  unitName: string | null
  addItem: (item: CartItem) => { success: boolean; message: string }
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  total: () => number
  itemCount: () => number
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      unitId: null,
      unitName: null,
      
      addItem: (item) => {
        const currentUnitId = get().unitId
        
        // Check if cart is empty or item is from same unit
        if (currentUnitId === null) {
          set({
            unitId: item.unitId,
            unitName: item.unitName,
            items: [...get().items, item],
          })
          return { success: true, message: '' }
        }
        
        if (currentUnitId !== item.unitId) {
          return { 
            success: false, 
            message: `Anda sedang berbelanja dari ${get().unitName}. Kosongkan keranjang untuk berpindah ke unit lain.`
          }
        }
        
        // Check if item already exists
        const existingItem = get().items.find(i => i.productId === item.productId)
        if (existingItem) {
          get().updateQuantity(item.productId, existingItem.quantity + item.quantity)
          return { success: true, message: '' }
        }
        
        set({ items: [...get().items, item] })
        return { success: true, message: '' }
      },
      
      removeItem: (productId) => {
        const newItems = get().items.filter(i => i.productId !== productId)
        set({ 
          items: newItems,
          unitId: newItems.length > 0 ? get().unitId : null,
          unitName: newItems.length > 0 ? get().unitName : null,
        })
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        
        const newItems = get().items.map(item =>
          item.productId === productId ? { ...item, quantity } : item
        )
        set({ items: newItems })
      },
      
      clearCart: () => {
        set({ items: [], unitId: null, unitName: null })
      },
      
      total: () => {
        return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      },
      
      itemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      },
    }),
    {
      name: 'skansaba-cart',
    }
  )
)

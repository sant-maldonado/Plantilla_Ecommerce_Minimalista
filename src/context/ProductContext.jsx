import { createContext, useState, useEffect, useContext } from 'react'
import { supabase } from '../lib/supabase'

const ProductContext = createContext()

export const useProducts = () => useContext(ProductContext)

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true })
      
      if (error) throw error
      setProducts(data || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const addProduct = async (product) => {
    try {
      const { error } = await supabase
        .from('products')
        .insert([product])
      
      if (error) throw error
      await fetchProducts()
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const updateProduct = async (id, updates) => {
    try {
      const { error } = await supabase
        .from('products')
        .update(updates)
        .eq('id', id)
      
      if (error) throw error
      await fetchProducts()
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const deleteProduct = async (id) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      await fetchProducts()
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const getPassword = async () => {
    try {
      const { data, error } = await supabase
      .from('admin_config')
      .select('password')
      .eq('id', 1)
      
      if (error) {
        // Fallback if table doesn't exist or has no data
        return 'admin123'
      }
      return data?.password || 'admin123'
    } catch (err) {
      return 'admin123'
    }
  }

  const updatePassword = async (newPassword) => {
    try {
      const { error } = await supabase
        .from('admin_config')
        .update({ password: newPassword, updated_at: new Date().toISOString() })
        .eq('id', 1)
      
      if (error) throw error
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ 
      products, 
      loading, 
      error,
      fetchProducts,
      addProduct, 
      updateProduct, 
      deleteProduct,
      getPassword,
      updatePassword
    }}>
      {children}
    </ProductContext.Provider>
  )
}
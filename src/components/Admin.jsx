import { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const categories = ['Urbana', 'Montaña', 'Carretera', 'Fija']

const Admin = () => {
  const { products, loading, addProduct, updateProduct, deleteProduct, getPassword, updatePassword } = useProducts()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [isAdding, setIsAdding] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [passwordForm, setPasswordForm] = useState({
    current: '',
    new: '',
    confirm: ''
  })
  const [passwordMessage, setPasswordMessage] = useState({ type: '', text: '' })
  
  const [form, setForm] = useState({
    name: '',
    category: 'Urbana',
    price: '',
    description: '',
    image: ''
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginError('')
    
    const storedPassword = await getPassword()
    const validPassword = storedPassword || 'admin123'
    
    if (password === validPassword) {
      setIsLoggedIn(true)
      setPassword('')
    } else {
      setLoginError('Contraseña incorrecta')
    }
  }

  const handlePasswordChange = async (e) => {
    e.preventDefault()
    setPasswordMessage({ type: '', text: '' })
    
    if (passwordForm.new !== passwordForm.confirm) {
      setPasswordMessage({ type: 'error', text: 'Las contraseñas no coinciden' })
      return
    }
    
    if (passwordForm.new.length < 4) {
      setPasswordMessage({ type: 'error', text: 'La contraseña debe tener al menos 4 caracteres' })
      return
    }
    
    const storedPassword = await getPassword()
    const validPassword = storedPassword || 'admin123'
    
    if (passwordForm.current !== validPassword) {
      setPasswordMessage({ type: 'error', text: 'La contraseña actual es incorrecta' })
      return
    }
    
    const result = await updatePassword(passwordForm.new)
    
    if (result.success) {
      setPasswordMessage({ type: 'success', text: 'Contraseña actualizada correctamente' })
      setPasswordForm({ current: '', new: '', confirm: '' })
    } else {
      setPasswordMessage({ type: 'error', text: 'Error al actualizar: ' + result.error })
    }
  }

  const handleEdit = (product) => {
    setEditingId(product.id)
    setForm({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      description: product.description,
      image: product.image
    })
    setIsAdding(false)
    setShowSettings(false)
  }

  const handleSave = async () => {
    const productData = {
      name: form.name,
      category: form.category,
      price: parseFloat(form.price),
      description: form.description,
      image: form.image
    }

    let result
    if (editingId) {
      result = await updateProduct(editingId, productData)
      if (result.success) {
        setEditingId(null)
        setForm({ name: '', category: 'Urbana', price: '', description: '', image: '' })
      }
    } else if (isAdding) {
      result = await addProduct(productData)
      if (result.success) {
        setIsAdding(false)
        setForm({ name: '', category: 'Urbana', price: '', description: '', image: '' })
      }
    }
  }

  const handleDelete = async (id) => {
    if (confirm('¿Estás seguro de eliminar esta bici?')) {
      await deleteProduct(id)
    }
  }

  const handleCancel = () => {
    setEditingId(null)
    setIsAdding(false)
    setForm({ name: '', category: 'Urbana', price: '', description: '', image: '' })
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Admin Login</h1>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-900"
          />
          {loginError && <p className="text-red-600 text-sm mb-4">{loginError}</p>}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Ingresar
          </button>
          <div className="mt-4 text-center">
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
              ← Volver al inicio
            </Link>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8" style={{ background: '#f3f4f6', padding: '16px', borderRadius: '8px' }}>
          <h1 className="text-3xl font-semibold text-gray-900">Admin - Gestión de Bicis</h1>
          <div className="flex gap-3">
            <button 
              onClick={() => { setShowSettings(!showSettings); setEditingId(null); setIsAdding(false) }}
              style={{ background: '#374151', color: 'white', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '14px' }}
            >
              ⚙️ Configuración
            </button>
            <Link to="/" style={{ background: '#374151', color: 'white', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '14px' }}>← Ver tienda</Link>
            <button onClick={() => setIsLoggedIn(false)} style={{ background: '#dc2626', color: 'white', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '14px' }}>Salir</button>
          </div>
        </div>

        {loading && (
          <div className="text-center py-8">
            <p className="text-gray-500">Cargando productos...</p>
          </div>
        )}

        {showSettings && (
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border">
            <h2 className="text-xl font-semibold mb-4">Cambiar Contraseña</h2>
            <form onSubmit={handlePasswordChange} className="max-w-md">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña Actual</label>
                <input
                  type="password"
                  value={passwordForm.current}
                  onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Nueva Contraseña</label>
                <input
                  type="password"
                  value={passwordForm.new}
                  onChange={(e) => setPasswordForm({ ...passwordForm, new: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar Nueva Contraseña</label>
                <input
                  type="password"
                  value={passwordForm.confirm}
                  onChange={(e) => setPasswordForm({ ...passwordForm, confirm: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>
              {passwordMessage.text && (
                <p className={`text-sm mb-4 ${passwordMessage.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                  {passwordMessage.text}
                </p>
              )}
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
              >
                Cambiar Contraseña
              </button>
            </form>
          </div>
        )}

        {(editingId || isAdding) && !showSettings && (
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border">
            <h2 className="text-xl font-semibold mb-4">
              {editingId ? 'Editar Bici' : 'Agregar Nueva Bici'}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                >
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Precio ($)</label>
                <input
                  type="number"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL de Imagen</label>
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleSave}
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
              >
                Guardar
              </button>
              <button
                onClick={handleCancel}
                className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Imagen</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Nombre</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Categoría</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Precio</th>
                  <th className="text-right px-6 py-4 text-sm font-medium text-gray-500">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <img src={product.image} alt={product.name} className="w-16 h-12 object-cover rounded" />
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{product.name}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-semibold">${product.price?.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleEdit(product)}
                        className="text-blue-600 hover:text-blue-800 mr-4"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <button
          onClick={() => { setIsAdding(true); setEditingId(null); setForm({ name: '', category: 'Urbana', price: '', description: '', image: '' }); setShowSettings(false) }}
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          + Agregar Nueva Bici
        </button>
      </div>
    </div>
  )
}

export default Admin
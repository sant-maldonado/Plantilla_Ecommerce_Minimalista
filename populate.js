const products = [
  { name: 'Urbana Classic', category: 'Urbana', price: 450, description: 'Perfecta para city rides, cuadro de aluminio ligero', image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600&h=400&fit=crop' },
  { name: 'Mountain Pro', category: 'Montaña', price: 890, description: 'Suspensión frontal, ideal para senderos', image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600&h=400&fit=crop' },
  { name: 'Road Speed', category: 'Carretera', price: 1200, description: 'Cuadro de carbono, rendimiento máximo', image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=400&fit=crop' },
  { name: 'City Cruiser', category: 'Urbana', price: 380, description: 'Estilo retro, cómoda para el día a día', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop' },
  { name: 'Elite MTB', category: 'Montaña', price: 1450, description: 'Suspensión completa, disco hidráulico', image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600&h=400&fit=crop' },
  { name: 'Fixie Original', category: 'Fija', price: 520, description: 'Diseño minimalista, cuadro acero', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=400&fit=crop' },
  { name: 'XC Sport', category: 'Montaña', price: 550, description: 'Cuadro aluminio, suspensión SR Suntour, 21 velocidades', image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=600&h=400&fit=crop' },
  { name: 'Trail Basic', category: 'Montaña', price: 650, description: 'Ideal para senderos, cuadro de aleación, frenos mecánicos', image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=400&fit=crop' },
  { name: 'All Mountain', category: 'Montaña', price: 750, description: 'Suspensión Rockshox, cuadros de carbono, transmisión Shimano', image: 'https://images.unsplash.com/photo-1597335607070-39b257d9534c?w=600&h=400&fit=crop' },
  { name: 'Enduro Pro', category: 'Montaña', price: 850, description: '160mm recorrido, para descensos extremos, cuadro alloy', image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600&h=400&fit=crop' },
  { name: 'Downhill Elite', category: 'Montaña', price: 950, description: '200mm suspensión, para competencias, freeride', image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600&h=400&fit=crop' },
  { name: 'Fat Bike Winter', category: 'Montaña', price: 700, description: 'Ruedas 4.8", parfait para nieve y arena, cuadro acero', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=400&fit=crop' },
  { name: 'Trail Advanced', category: 'Montaña', price: 800, description: 'Mixta carbono/aluminio, grupaje Deore,hidraulicos', image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=400&fit=crop' },
  { name: 'Mountain Junior', category: 'Montaña', price: 500, description: 'Para jóvenes, cuadro 26", transmisión Shimano 18 velocidades', image: 'https://images.unsplash.com/photo-1625037505749-8f568147d9bf?w=600&h=400&fit=crop' }
]

const supabaseUrl = 'https://yiezyplikyrfeaiiiiog.supabase.co'
const supabaseKey = 'sb_publishable_V9BI9oEmVMcXZG-mDgyUlQ_DVAd4ROj'

async function populateProducts() {
  const response = await fetch(`${supabaseUrl}/rest/v1/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(products)
  })

  if (response.ok) {
    console.log('✅ Productos insertados correctamente!')
    console.log(`Total: ${products.length} bicis`)
  } else {
    const error = await response.text()
    console.error('❌ Error:', error)
  }
}

populateProducts()
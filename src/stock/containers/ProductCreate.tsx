import React from 'react'
import { useParams } from 'react-router-dom'

const ProductCreate: React.FC = () => {
  const params = useParams()
  return <div>Product Create {params.productId}</div>
}

export default ProductCreate

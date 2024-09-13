import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'

function Category({image, name}) {
  return (
    <div className="category-card">
      <Link>
      <img src={image} alt={name} className="category-image" />
      </Link>
    </div>
  )
}

export default Category

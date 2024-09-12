import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div className="category-card">
      <Link>
      <img src="/images/annoounce2.jpg" alt="Category" className="category-image" />
      </Link>
    </div>
  )
}

export default Category

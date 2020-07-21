import React, { useState } from 'react'

import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category, index) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}

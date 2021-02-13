import React from 'react'

function CategoryItem({cat}) {
    console.log(cat)
    return (
            <a href="#" className="mr-5 hover:text-gray-900">{cat.name}</a>
    )
}

export default CategoryItem

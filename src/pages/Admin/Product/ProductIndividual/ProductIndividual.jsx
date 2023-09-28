//import react packages
import { Card } from '@mantine/core'
import React from 'react'

//import ProductIndividual css
import './ProductIndividual.css'

const ProductIndividual = () => {
  return (
    <div>
      <div className="productindividual-div">
        <Card className='productindividual-div-card'>
          <div className="productindividual-div-card-head">
            <h3>Product Details</h3>
          </div>
          <div className="productindividual-div-card-body">
            <div className="productindividual-div-card-body-image">
              <div className="productindividual-div-card-body-image-show-div">

              </div>
              <div className="productindividual-div-card-body-image-show-div">

              </div>
            </div>
            <div className="productindividual-div-card-body-product-details">
              <div className="productindividual-div-card-body-product-details-left">Link</div>
              <div className="productindividual-div-card-body-product-details-right">http://localhost/code/modesy-v2.3.2/colorful-women-scarfs-45</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ProductIndividual
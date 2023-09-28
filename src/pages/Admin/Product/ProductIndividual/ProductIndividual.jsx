//import react packages
import { Card, Rating } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

//import ProductIndividual css
import './ProductIndividual.css'

const ProductIndividual = () => {

  const category = 'Table_Linen';
  const subcategory = 'Table_Napkins';
  const heading = 'This_is_a_heading';

  const individualProductArray = [
    {
      Link: 'http://localhost/code/modesy-v2.3.2/colorful-women-scarfs-45',
      Status: 'Active',
      Visibility: 'Visibile',
      Id: '10',
      Title: 'Tea Shirt',
      Slug: 'tea-shirt',
      Category: 'Dress,mens wear',
      Currency_symbol: '$',
      Price: '200',
      Stock: '200',
      User: 'Admin',
      Reviews: '0',
      Drafts: 'No',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla modi sint quia praesentium maiores consequuntur amet, eos qui officiis cumque dolorum vel esse suscipit odit culpa tenetur dignissimos ab. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, iusto aut nobis provident quas, ratione exercitationem eius ex corrupti explicabo illo officiis enim quos facilis rem. Reiciendis eius eaque corporis.',
    }
  ]

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
            {
              individualProductArray.map((individualProduct, index) => {
                return (
                  <div key={index}>
                    <div className="productindividual-div-card-body-product-details">
                      <div className="productindividual-div-card-body-product-details-left">Link</div>
                      <div className="productindividual-div-card-body-product-details-right"><Link to={`/product/${category}/${subcategory}/${heading}`}>{individualProduct.Link}</Link></div>
                    </div>
                    <div className='hr-line mt-10' />
                    <div className="productindividual-div-card-body-product-details">
                      <div className="productindividual-div-card-body-product-details-left">Status</div>
                      <div className="productindividual-div-card-body-product-details-right"><span className='individual-product-status'>{individualProduct.Status}</span></div>
                    </div>
                    <div className='hr-line mt-10' />
                    <div className="productindividual-div-card-body-product-details">
                      <div className="productindividual-div-card-body-product-details-left">Visibility</div>
                      <div className="productindividual-div-card-body-product-details-right"><span className='individual-product-status'>{individualProduct.Visibility}</span></div>
                    </div>
                    <div className='hr-line mt-10' />
                    <div className="productindividual-div-card-body-product-details">
                      <div className="productindividual-div-card-body-product-details-left">Id</div>
                      <div className="productindividual-div-card-body-product-details-right">{individualProduct.Id}</div>
                    </div>
                    <div className='hr-line mt-10' />
                    <div className="productindividual-div-card-body-product-details">
                      <div className="productindividual-div-card-body-product-details-left">Title</div>
                      <div className="productindividual-div-card-body-product-details-right">{individualProduct.Title}</div>
                    </div>
                    <div className='hr-line mt-10' />
                    <div className="productindividual-div-card-body-product-details">
                      <div className="productindividual-div-card-body-product-details-left">Slug</div>
                      <div className="productindividual-div-card-body-product-details-right">{individualProduct.Slug}</div>
                    </div>
                    <div className='hr-line mt-10' />
                    <div className="productindividual-div-card-body-product-details">
                      <div className="productindividual-div-card-body-product-details-left">Category</div>
                      <div className="productindividual-div-card-body-product-details-right">{individualProduct.Category}</div>
                    </div>
                    <div className='hr-line mt-10' />
                    <div className="productindividual-div-card-body-product-details">
                      <div className="productindividual-div-card-body-product-details-left">Price</div>
                      <div className="productindividual-div-card-body-product-details-right">{individualProduct.Currency_symbol} {individualProduct.Price}</div>
                    </div>
                    <div className='hr-line mt-10' />
                    <div className="productindividual-div-card-body-product-details">
                      <div className="productindividual-div-card-body-product-details-left">Stock</div>
                      <div className="productindividual-div-card-body-product-details-right">{individualProduct.Stock}</div>
                    </div>
                    <div className='hr-line mt-10' />
                    <div className="productindividual-div-card-body-product-details">
                      <div className="productindividual-div-card-body-product-details-left">User</div>
                      <div className="productindividual-div-card-body-product-details-right">{individualProduct.User}</div>
                    </div>
                    <div className='hr-line mt-10' />
                    <div className="productindividual-div-card-body-product-details">
                      <div className="productindividual-div-card-body-product-details-left">Reviews</div>
                      <div className="productindividual-div-card-body-product-details-right"><span className='individual-product-rating'><Rating readOnly value={individualProduct.Reviews} /> ({individualProduct.Reviews})</span></div>
                    </div>
                    <div className='hr-line mt-10' />
                    <div className="productindividual-div-card-body-product-details">
                      <div className="productindividual-div-card-body-product-details-left">Drafts</div>
                      <div className="productindividual-div-card-body-product-details-right"><span className='individual-product-drafts'>{individualProduct.Drafts}</span></div>
                    </div>
                    <div className='hr-line mt-10' />
                    <div className="productindividual-div-card-body-product-details">
                      <div className="productindividual-div-card-body-product-details-left">Description</div>
                      <div className="productindividual-div-card-body-product-details-right">{individualProduct.Description}</div>
                    </div>
                    <div className='hr-line mt-10' />
                  </div>
                )
              })
            }

          </div>
        </Card>
      </div>
    </div>
  )
}

export default ProductIndividual
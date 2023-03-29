import ProductPageDetail from './ProductPageDetail'
import products from '../../assets/products'


const ProductDetail = (id) => {
  return (
    <>
      {products.map((product) => {
        if (product.id == id.id) {
          return (
            <>
              <ProductPageDetail product={product} key={product.id} />
            </>
          )
        }
      })}
    </>
  )
}

export default ProductDetail
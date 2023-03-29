import { Flex } from "@chakra-ui/react"
import products from "../../assets/products"
import ProductListingPage from "./ProductListingPage"

export default function ProductListing() {
  return (
    <Flex wrap="wrap">
      {products.map((product) => {
        return (
          <>
             <ProductListingPage product={product} key={product.id} /> 
          </>
        )
      })}
    </Flex>
  )

  
}


import { useState, useEffect } from 'react';
import { Box, Button, ButtonGroup, Flex, Stack, Text, Image, Icon, useMediaQuery } from '@chakra-ui/react'
import {HiOutlineShoppingBag} from "react-icons/hi"

export default function ProductPageDetail({ product }) {
    const [isLargerThan800] = useMediaQuery('(max-width: 800px)')
    const [skuCode, setSkuCode] = useState(product.skus[0].code);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(sku) {
            const url = `http://localhost:3000/api/stock-price/${sku}`;
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        }

        fetchData(skuCode);

        const intervalId = setInterval(fetchData, 5000, skuCode);

        return () => clearInterval(intervalId);

    }, [skuCode]);

    function handleClick(sku) {
        setSkuCode(sku);
    }

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Flex justify="center" direction="column" w={isLargerThan800? "100%": "50%"} >
            <Flex align={isLargerThan800? "center": null} justify= "center">     
            <Image
                src={product.image}
                width="100%"
                height={300}
                priority fill style={{ objectFit: "contain" }}
                alt={product.brand}
                marginBottom={isLargerThan800? 3: 5}
            />
            </Flex>
            <Box>
                <Flex direction="row" justify="space-between">
                    <Text fontSize={"2xl"} fontWeight="700">{product.brand}</Text>
                    <Text color="#FF9F24" fontSize="4xl" fontWeight="700">
                        ${(data.price / 100).toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                    </Text>
                </Flex>
            </Box>
            <Flex>
                <Text color="#969696"> Origin: {product.origin} | </Text>
                <Text color="#969696">&nbsp; Stock: {data.stock} </Text>
            </Flex>
            <Flex direction="column" marginTop={isLargerThan800? 5: 10}>
                <Text fontSize={isLargerThan800 ? "lg" : "2xl"} fontWeight="700">Description</Text>
                <Text color="#969696" fontSize={isLargerThan800? "sm": "lg"}>{product.information}</Text>
            </Flex>
            <Flex direction="column" marginTop={5}>
                <Text fontSize="lg" fontWeight="700">Size</Text>
                <Flex marginTop={3}>
                    {product.skus.map((sku) => (
                        <Button margin={2} colorScheme='orange' variant='outline' fontWeight="400" borderRadius="50px" onClick={() => handleClick(sku.code)} key={sku.code}>{sku.name}</Button>
                    ))}
                </Flex>
                <Flex direction="row" justify="space-between" align="center">
                <Button marginTop={5} colorScheme='white' border="1px solid #FF9F24" color="#FF9F24" h={50} w="10%" borderRadius="30px">
                    <Icon as={HiOutlineShoppingBag} w={8} h={8}/>
                </Button>
                <Button marginTop={8} colorScheme='orange' h={50} w="60%">
                    Add cart
                </Button>
                </Flex>
                </Flex>
        </Flex>
        </div>
    )
}

import { useState, useEffect } from 'react';
import Link from 'next/link'
import { Button, Card, CardBody, Image, Text, Icon, Flex, Heading, useMediaQuery, Wrap } from '@chakra-ui/react';
import { BsPlusLg } from "react-icons/bs"

export default function Item({ product }) {
    const [isLargerThan800] = useMediaQuery('(max-width: 800px)')
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const url = `http://localhost:3000/api/stock-price/${product.skus[0].code}`;
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                console.error(`Something went wrong... ${err}`)
            }
        }

        fetchData();
        const intervalId = setInterval(fetchData, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Flex wrap="wrap" marginTop="10px" marginBottom={5}>
            <Card w={isLargerThan800? 170: 300} margin={2} >
                <CardBody>
                    <Flex spacing="2" direction="column" align="center">
                        <Heading fontSize="2x1" fontWeight="600" marginBottom={5}>{product.brand}</Heading>
                        <Image align="center" src={product.image} w="fit-content" h={isLargerThan800 ? 130 : 300} />
                    </Flex>
                </CardBody>

                <Flex direction="row" justify="space-between" padding={0} >
                    <Text fontWeight="600" marginLeft={5}> ${(data.price / 100).toLocaleString('es-ES', { minimumFractionDigits: 2 })}</Text>
                    <Button bg="#FF9F24">
                        <Link href={`${product.id}`} >
                            <Icon color="#ffff" as={BsPlusLg} />
                        </Link>
                    </Button>
                </Flex>
            </Card>
        </Flex>
    )
}

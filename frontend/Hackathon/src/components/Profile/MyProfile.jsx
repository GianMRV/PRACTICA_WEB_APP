import {
    Box,
    Button,
    chakra,
    Flex,
    Switch,
    useColorModeValue,
    FormControl,
    FormLabel,
    Heading,
    Input,
} from '@chakra-ui/react';

function MyProfile(){
    return(
        <Flex
            minH={'562.13px'}
            bg='gray.700'
            rounded={'xl'}
            width={{ base: 'full', sm: 'lg', lg: 'xl' }}
            margin={'auto'}
            direction={'column'}
            alignItems={'space-between'}
            justifyContent={'space-between'}
            p={10}>
            <Heading
                color={'yellow.200'}
                textAlign={'left'}
                fontWeight={'bold'}
                fontSize={'120%'}>
                Mi perfil
            </Heading>
            <chakra.p textAlign={'justify'} color={'gray.400'} fontSize={'80%'}>
                Datos personales
            </chakra.p>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'5%'}
                maxW={'full'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    Nombre y Apellido
                </chakra.h3>
                <Box
                    color={'gray.500'}
                    bg={'gray.800'}
                    minW={'175px'}>
                    Alan Turing
                </Box>         
            </Flex>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'5%'}
                maxW={'full'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    Dirección de correo
                </chakra.h3>
                <Box
                    color={'gray.500'}
                    bg={'gray.800'}
                    minW={'175px'}>
                    alan@turing.com
                </Box>         
            </Flex>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'5%'}
                maxW={'full'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    ID de usuario
                </chakra.h3>
                <Box
                    color={'gray.500'}
                    bg={'gray.800'}
                    minW={'175px'}>
                    xx-xx-xx-xx
                </Box>         
            </Flex>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'3%'}
                maxW={'full'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    Dirección de depósito
                </chakra.h3>
                <Box
                    color={'gray.500'}
                    bg={'gray.800'}
                    minW={'175px'}>
                    xxx-xxx-xxx-xxx
                </Box>         
            </Flex>
            <chakra.hr></chakra.hr>
            <Heading
                color={'yellow.200'}
                textAlign={'left'}
                fontWeight={'bold'}
                fontSize={'120%'}
                mt={'3%'}>
                Cambiar dirección de correo electrónico
            </Heading>
            <chakra.p textAlign={'justify'} color={'gray.400'} fontSize={'80%'}>
                Te recomendamos usar una contraseña que no utilices para conectarte en otros sitios web
            </chakra.p>
            <form>
                <Flex
                    direction={'column'}
                    >
                    <FormControl id="email" color={'gray.400'} w={'auto'}>
                        <FormLabel>Nuevo correo</FormLabel>
                        <Input type="email" />
                    </FormControl>
                        <Button colorScheme={'blue'} variant={'solid'} mt={2}>
                            Guardar correo
                        </Button>
                </Flex>
            </form>
        </Flex>
    )
}

export default MyProfile;
import {
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
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

function WalletMode(){
    return(
        <Flex
            minH={'562.13px'}
            bg='gray.700'
            rounded={'xl'}
            width={{ base: 'full', sm: 'lg', lg: 'xl' }}
            margin={'auto'}
            direction={'column'}
            alignItems={'space-around'}
            justifyContent={'space-between'}
            p={10}>
            <Heading
                color={'yellow.200'}
                textAlign={'left'}
                fontWeight={'bold'}
                fontSize={'120%'}>
                Tipo de Wallet
            </Heading>
            <chakra.p textAlign={'justify'} color={'gray.500'} fontSize={'80%'}>
                Te recomendamos, por tu seguridad, utilizar una doble autenticación o la autenticación de Google
            </chakra.p>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'5%'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    <EmailIcon w={'5'} h={'5'}></EmailIcon>
                    {' '}Email Authentication
                </chakra.h3>
                <Switch id='email-alerts' />            
            </Flex>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'5%'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    <PhoneIcon w={'5'} h={'5'}></PhoneIcon>
                    {' '}SMS Authentication
                </chakra.h3>
                <Switch id='email-alerts' />            
            </Flex>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'3%'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    Google Authentication
                </chakra.h3>
                <Switch id='email-alerts' />            
            </Flex>
            <chakra.hr></chakra.hr>
            <Heading
                color={'yellow.200'}
                textAlign={'left'}
                fontWeight={'bold'}
                fontSize={'120%'}
                mt={'3%'}>
                Cambiar contraseña
            </Heading>
            <chakra.p textAlign={'justify'} color={'gray.500'} fontSize={'80%'}>
                Te recomendamos usar una contraseña que no utilices para conectarte en otros sitios web
            </chakra.p>
            <form>
                <Flex
                    direction={'column'}
                    >
                    <FormControl id="password" color={'gray.400'} w={'auto'}>
                        <FormLabel>Old Password</FormLabel>
                        <Input type="password" />
                    </FormControl>
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        justifyContent={'space-between'}>
                        <FormControl id="password" color={'black'} mr={'2%'}>
                            <FormLabel>New Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <FormControl id="confirmpassword" color={'black'}>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                    </Flex>
                        <Button colorScheme={'blue'} variant={'solid'} mt={2}>
                            Guardar contraseña
                        </Button>
                </Flex>
            </form>
        </Flex>
    )
}

export default WalletMode;
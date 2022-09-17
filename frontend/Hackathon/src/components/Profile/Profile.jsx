import {
    Avatar,
    Button,
    ButtonGroup,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link, Route, Routes} from 'react-router-dom'

import Balance from './Balance';
import History from './History';
import MyProfile from './MyProfile';
import Security from './Security';
import Support from './Support';
import WalletMode from './WalletMode';

const testimonials = [
    {
      name: 'Name',
      lastname: 'Lastname',
      username: 'username',
      id: 'id',
/*      avatar:
        'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    */},
];
  

  
function TestimonialCard(props) {
    const { name, lastname, LinkedIn, GitHub, Correo, Nacionalidad, avatar, username, id, index } = props;
    return (
        <Flex
            boxShadow={'dark-lg'}
            maxW={'540px'}
            direction={{ base: 'column', md: 'column' }}
            width={'full'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            bg={useColorModeValue('gray.800', 'gray.800')}>
            <Flex
                direction={{ base: 'column', md: 'column' }}
                textAlign={'center'}
                justifyContent={'space-around'}>
                <chakra.p>
                    <Avatar
                    src={avatar}
                    height={'100px'}
                    width={'100px'}
                    alignSelf={'center'}
                    m={{ base: '0 0 35px 0', md: '0 0 0 0' }}
                    mb={'-0.5'}
                    />
                    <chakra.p
                        mb={2}
                        fontFamily={'Work Sans'}
                        fontWeight={'bold'}
                        fontSize={'120%'}
                        color={'white'}>
                        {name}{' '}{lastname}
                    </chakra.p>
                    <chakra.p 
                        color={'yellow'}
                        fontFamily={'Work Sans'}
                        fontWeight={'bold'}
                        fontSize={16}
                        mt={-4}
                        mb={'4%'}>
                        {username}
                        <chakra.span
                            fontFamily={'Inter'}
                            fontWeight={'medium'}
                            fontStyle={'italic'}
                            color={'yellow'}>
                            {' '}
                            {id}
                        </chakra.span>
                    </chakra.p>
                </chakra.p>
                <Flex
                    fontSize={'100%'}
                    flexDirection={'column'}
                    alignItems={'space-between'}
                    textAlign={'center'}
                    color={'white'}>
                    <Button variant={'ghost'} width={'full'} mt={'5%'}>
                        <Link to="/MyProfile">Mi perfil</Link>
                    </Button>
                    <Button variant={'ghost'} width={'full'} mt={'5%'}>
                        <Link to="/WalletMode">Tipo de Wallet</Link>
                    </Button>
                    <Button variant={'ghost'} width={'full'} mt={'5%'}>
                        <Link to="/Balance">Balance de activos</Link>
                    </Button>
                    <Button variant={'ghost'} width={'full'} mt={'5%'}>
                        <Link to="/History">Historial</Link>
                    </Button>
                    <Button variant={'ghost'} width={'full'} mt={'5%'}>
                        <Link to="/Security">Seguridad</Link>
                    </Button>
                    <Button variant={'ghost'} width={'full'} mt={'5%'}>
                        <Link to="/Support">Soporte</Link>
                    </Button>
                    <Button variant={'outline'} bg={'red.600'} mt={'5%'}>
                        Cerrar sesion
                    </Button>
                </Flex>
            </Flex>
        </Flex>
        
    );
}
  
function Profile() {
    return (
      <Flex
        direction={{ base: 'column-reverse', md: 'row-reverse' }}
        width={'full'}>
        <Routes>
            <Route path="/Balance" element={<Balance />} />
            <Route path="/History" element={<History />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/Security" element={<Security />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/WalletMode" element={<WalletMode />} />
        </Routes>
        <SimpleGrid
          columns={'1'}>
          {testimonials.map((cardInfo, index) => (
            <TestimonialCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>
      </Flex>
    );
}

export default Profile;
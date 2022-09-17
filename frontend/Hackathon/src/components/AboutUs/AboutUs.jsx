import {
    Avatar,
    Box,
    Button,
    chakra,
    Container,
    Flex,
    Icon,
    Link,
    SimpleGrid,
    useColorModeValue,
} from '@chakra-ui/react';
import { transform } from 'framer-motion';
import './AboutUs.css'

const testimonials = [
    {
      name: 'Pedro Carvajal',
      role: 'Full-Stack Developer. Co-Founder of Turing Testers',
      author: 'Edward Teller',
      phrase: '\"La tecnología de hoy es la tecnología del mañana.\"',
      LinkedIn: 'https://www.linkedin.com/in/pedro-carvajal-b426a2175/',
      GitHub: 'https://github.com/Pecarvajal246',
      Correo: 'pecarvajal246@gmail.com',
      Nacionalidad: 'Venezuela',
/*      avatar:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    */    },
    {
      name: 'Rafael Delgado',
      role: 'Full-Stack Developer. Co-Founder of Turing Testers',
      author: 'Drew Houston',
      phrase: '\"No te preocupes por el fracaso. Solo debes acertar una vez.\"',
      LinkedIn: 'https://www.linkedin.com/in/rafael-delgado-dorante/',
      GitHub: 'https://github.com/rafael1delgado',
      Correo: 'delgadorafael2011@gmail.com',
      Nacionalidad: 'Venezuela',
/*      avatar:
        'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    */    },
    {
      name: 'Sebastian Navas',
      role: 'Full-Stack Developer. Co-Founder of Turing Testers',
      author: 'Salvador Dalí',
      phrase: '\"No tengas miedo de la perfección, nunca la alcanzarás.\"',
      LinkedIn: 'https://linkedin.com/in/sebastiaan-navas',
      GitHub: 'https://github.com/sebastiaannavas',
      Correo: 'sebastiannavas06@gmail.com',
      Nacionalidad: 'Venezuela',
/*      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    */    },
    {
      name: 'Gianny Marquina',
      role: 'Full-Stack Developer. Co-Founder of Turing Testers',
      author: 'Matt Mullenweg',
      phrase: '\"La tecnología es mejor cuando reúne a la gente.\"',
      LinkedIn: 'https://www.linkedin.com/feed/',
      GitHub: 'https://github.com/GianMRV',
      Correo: 'gira.208@gmail.com',
      Nacionalidad: 'Venezuela',
/*      avatar:
        'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    */    },
];
  
const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

/*
let props = {
    "name": testimonials[0].name,
    "role": testimonials[0].role,
    "content": testimonials[0].content,
    "avatar": testimonials[0].avatar,
}
*/
  
function TestimonialCard(props) {
    const { name, role, LinkedIn, GitHub, Correo, Nacionalidad, avatar, author, phrase, index } = props;
    return (
        <Flex className='EjectCard'
            boxShadow={'dark-lg'}
            maxW={'440px'}
            direction={{ base: 'column', md: 'column' }}
            width={'full'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            bg={useColorModeValue('linear-gradient(45deg, #902DFE, #1537E5)', 'gray.800')}>
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
                        fontWeight={'bold'}
                        fontSize={'120%'}
                        color={'white'}>
                        {name}
                    </chakra.p>
                    <chakra.p 
                        mt={-2}
                        mb={'4%'}
                        fontWeight={'medium'}
                        fontSize={'75%'}
                        color={'yellow'}>
                        {role}
                    </chakra.p>
                </chakra.p>
                <chakra.p
                    fontWeight={'medium'}
                    fontSize={'100%'}
                    pb={4}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                    textAlign={'center'}
                    color={'white'}>
                    <Link href={LinkedIn}>                       
                        LinkedIn
                    </Link>
                    <Link href={LinkedIn}>                       
                        GitHub
                    </Link>
                    {Correo} <br />
                    {Nacionalidad}
                </chakra.p>
                
            </Flex>
            <chakra.p 
                color={'#3B082B'}
                fontWeight={'bold'}
                fontSize={14}
                mt={'3%'}
                mb={'-7%'}>
                {author}
                <chakra.span
                  fontWeight={'medium'}
                  fontStyle={'italic'}
                  color={'white'}>
                  {' '}
                  - {phrase}
                </chakra.span>
            </chakra.p>
        </Flex>
    );
  }
  
function AboutUs() {
    return (
      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
        bg='#5F31F3'>
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
          <chakra.h3
            fontWeight={'bold'}
            fontSize={20}
            textTransform={'uppercase'}
            color={'lightyellow'}>
            About us
          </chakra.h3>
          <chakra.h1
            py={5}
            fontSize={48}
            fontWeight={'bold'}
            color={useColorModeValue('yellow', 'gray.50')}>
            Turing Testers
          </chakra.h1>
          <chakra.h2
            margin={'auto'}
            width={'70%'}
            fontWeight={'medium'}
            color={useColorModeValue('gray.500', 'gray.400')}>
            See why over{' '}
            <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
              150,000+
            </chakra.strong>{' '}
            influencers use EEZY to manage their social media content!
          </chakra.h2>
        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={16}
          mx={'auto'}>
          {testimonials.map((cardInfo, index) => (
            <TestimonialCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>
        <Box>
          <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'purple.400'}>
            <path
              fill={'currentColor'}
              d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
            />
          </Icon>
        </Box>
      </Flex>
    );
}

export default AboutUs;
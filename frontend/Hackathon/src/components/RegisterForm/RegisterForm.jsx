//Mensajes en espanol y personalizados

import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
  
function RegisterForm() {

  const schema = yup.object().shape({
    Name: yup.string().required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "), //Restringir espacios intermedios. Pasarlo en Capitalcase
    Lastname: yup.string().required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "), //Restringir espacios intermedios. Pasarlo en Capitalcase
    Username: yup.string().required().min(5), // Que el primer caracter no sea numero. Acepte letras y numeros. Restringir espacios intermedios TRIM
    Email: yup.string().email().required(), // Pasarlo a lowercase
    Password: yup.string().required().min(8).max(18).matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    "Password must contain at least one uppercase, one number and one special case character"),
    ConfirmPassword: yup.string().required().min(8).max(18).label('Confirm Password').oneOf([yup.ref('Password'),null],'Passwords must match')
  });

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    console.log(data);
/*    axios.post('http://localhost:8888/api/register', {
      "name": data.Name,
      "last_name": data.Lastname,
      "email": data.Email,
      "password": data.Password,
    },
    {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "http://localhost:8888",
      "Access-Control-Allow-Origin": "http://localhost:8888",
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
*/
    alert(JSON.stringify(data));
  }
    return (
      <div>

    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <form>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" {...register("Name")} />
              <p>{errors.Name?.message}</p>
            </FormControl>
            <FormControl id="lastname">
              <FormLabel>Lastname</FormLabel>
              <Input type="text" {...register("Lastname")} />
              <p>{errors.Lastname?.message}</p>
            </FormControl>
            <FormControl id="Username">
              <FormLabel>Username</FormLabel>
              <Input type="text" {...register("Username")} />
              <p>{errors.Username?.message}</p>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="your-email@example.com" _placeholder={{ color: 'gray.500' }} {...register("Email")} />
              <p>{errors.Email?.message}</p>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("Password")} />
              <p>{errors.Password?.message}</p>
            </FormControl>
            <FormControl id="confirmpassword">
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" {...register("ConfirmPassword")} />
              <p>{errors.ConfirmPassword?.message}</p>
            </FormControl>
          </form>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} onClick={handleSubmit(onSubmit)}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
      </div>
    );
}

export default RegisterForm;
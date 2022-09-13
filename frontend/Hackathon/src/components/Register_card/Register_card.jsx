import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react';

import "./Register_card.css";


let schema = yup.object().shape({
    Name: yup.string().required(),
    Lastname: yup.string().required(),
    Email: yup.string().email().required(),
    Password: yup.string().required().min(8).max(18)
  });

function Register_card(){

    const {register, formState:{ errors, isSubmitting }, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        alert(JSON.stringify(data));
    }


    return(
        <div>
            <h1>Esto es con react-hook-form</h1>
            <form className="Register" onSubmit={handleSubmit(onSubmit)}>
                <div className="Field">
                    <label className="Label">Name</label>
                    <input type="text" className="Text" {...register("Name")}/>
                    <p>{errors.Name?.message}</p>
                </div>
                <div className="Field">
                    <label className="Label">Lastame</label>
                    <input type="text" className="Text" {...register("Lastname")}/>
                    <p>{errors.Lastname?.message}</p>
                </div>
                <div className="Field">
                    <label className="Label">Email</label>
                    <input type="email" className="Text" {...register("Email")}/>
                    <p>{errors.Email?.message}</p>
                </div>
                <div className="Field">
                    <label className="Label">Password</label>
                    <input type="password" className="Text" {...register("Password")}/>
                    <p>{errors.Password?.message}</p>
                </div>
                <div className="Field">
                    <label className="Label">Confirm Password</label>
                    <input type="password" className="Text" {...register("Password")}/>
                    <p>{errors.Password?.message}</p>
                </div>
                <div>
                    <button className="Submit">Submit</button>
                </div>
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor='name'>First name</FormLabel>
                    <Input
                    id='name'
                    placeholder='name'
                    {...register('name', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Register_card;
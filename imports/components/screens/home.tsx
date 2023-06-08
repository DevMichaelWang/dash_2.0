import React from 'react';
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface FormValues {
    email: string;
    password: string;
}

const Home: React.FC = () => {

    const initialValues: FormValues = {
        email: '',
        password: '',
    };

    const validateForm = (values: FormValues) => {
        const errors: Partial<FormValues> = {};

        if (!values.email) {
            errors.email = 'Email is required';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        }

        return errors;
    };

    const handleSubmit = (values: FormValues) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={handleSubmit}
        >
            <Form>
                <div className='bg-darkBlack h-screen px-6 font-sans overflow-auto flex flex-col'>
                    <div>
                        <img src="./images/food.png" className='-mr-6 float-right' />
                    </div>
                    <div className=''>
                        <img src="./images/logo.png" />
                    </div>
                    <div className="mt-6">                        
                        <Field type="email" id="email" name="email" required as={Input} className='bg-white' placeholder='Email' />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                    </div>
                    <div className="mt-4">                        
                        <Field type="password" id="password" name="password" required as={Input} className='bg-white' placeholder='Password' />
                        <ErrorMessage name="password" component="div" className="text-red-500" />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mt-8">
                        <Button type="submit" className='bg-buttonPrimary hover:bg-buttonDark'>Login</Button>
                    </div>
                    <div className='text-textBlue mt-8 cursor-pointer'>Forgot Password?</div>
                    <div className='flex text-white justify-center mt-auto mb-8'>
                        <div>Don’t have an account?</div>
                        <div className='ml-1 text-textBlue cursor-pointer'>Sign up</div>
                    </div>
                </div>
            </Form>
        </Formik>
    )

}

export default Home
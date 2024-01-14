'use client';
import {AiFillGithub} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import {ChangeEvent, FormEvent, useState} from "react";

const Auth = () => {

    // Create and set default data for state + event handlers for inputs
    const defaultData = {
        name: "",
        email: "",
        password: "",
    }
    console.log(defaultData);
    const [formData, setFormData] = useState(defaultData)

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const onSubmitFormHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
        console.log(formData)
        } catch (e) {
        console.log(e)
        } finally {
            //clear form data
            setFormData(defaultData)
        }
    }

    const inputStyles = "border border-gray-300 sm:text-sm text-black rounded:lg block w-full p-2.5 focus:outline-none"
    return (
        <section className="container mx-auto">
            {/*    sm = small devices , md = medium devices*/}
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
                <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
                    <h1 className={'text-xl font-bold leading-tight tracking-tight md:text-2xl'}>
                        CREATE AN ACCOUNT
                    </h1>
                    <p>OR</p>
                    <span className={'inline-flex items-center'}>
                    <AiFillGithub className={'mr-3 text-4xl cursor-pointer text-black dark:text-white'}/>
                    <FcGoogle className={'ml-3 text-4xl cursor-pointer '}/>
                </span>
                </div>
                <form className={'space-y-4 md:space-y-6'} onSubmit={onSubmitFormHandler}>
                    <input
                        type="text"
                        name={'name'}
                        placeholder="User name"
                        required
                        className={inputStyles}
                        value={formData.name}
                        onChange={onChangeInputHandler}
                    />
                    <input
                        type="email"
                        name={'email'}
                        placeholder="Email@gmail.com"
                        required
                        className={inputStyles}
                        value={formData.email}
                        onChange={onChangeInputHandler}
                    />
                    <input
                        type="password"
                        name='password'
                        placeholder="Password"
                        required
                        minLength={6}
                        className={inputStyles}
                        value={formData.password}
                        onChange={onChangeInputHandler}
                    />
                    <button
                        type={'submit'}
                        className={'w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'}>
                        Sign up
                    </button>
                    <button
                        className={'text-blue-700 underline w-full hover:no-underline'}>
                        Login
                    </button>

                </form>
            </div>
        </section>
    )
}

export default Auth;
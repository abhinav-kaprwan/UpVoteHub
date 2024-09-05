'use client'

import { useCallback, useState } from "react";
import AuthSocialButton from "./AuthSocialButton";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input/Input";
import { BsGithub, BsGoogle } from "react-icons/bs";


type variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
    const [variant,setVariant] = useState<variant>("LOGIN");
    const [isLoading,setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if(variant ==="LOGIN") setVariant("REGISTER");
        else setVariant("LOGIN");
    },[variant])

    // onSubmit 

    // socialAction

    

    return (
        <div
        className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md"
    >
       <div
        className="
        bg-white
        py-8
        px-4
        shadow
        sm:rounded-lg
        sm:px-10
        "
       >
        <form 
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
        >
        {variant === "REGISTER" && (
            <Input 
            id ="name" 
            label="Name" 
            register={register}
            errors={errors}
            disabled={isLoading}
            />
        )}
        <Input
        id="email"
        label="Email address"
        type="email"
        register={register}
        errors={errors}
        disabled={isLoading}
        />
        <Input
        id="password"
        label="Password"
        type="password"
        register={register}
        errors={errors}
        disabled={isLoading}
        />
        <div>
            <Button
            disabled={isLoading}
            fullWidth
            type="submit"
            >
                {variant==="LOGIN" ? "Login" : "Register"}
            </Button>
        </div>
        </form>
        <div className="mt-6">
            <div className="relative">
                <div className="
                absolute
                inset-0
                flex
                items-center
                ">
                    <div
                    className="
                    w-full
                    border-t
                    border-gray-300"/>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                        Or continue with
                    </span>
                </div>
            </div>

            <div className="mt-6 flex gap-2">
                <AuthSocialButton
                    icon={BsGithub}
                    onClick = {()=>socialAction("github")}
                />
                <AuthSocialButton
                    icon={BsGoogle}
                    onClick = {()=>socialAction("google")}
                />
            </div>
        </div>
            <div className="
            flex
            gap-2
            justify-center
            text-sm
            mt-6">
                <div>
                    {variant === "LOGIN" ? 'New User?': 'Already have an account?'}
                </div>
            <div
                onClick={toggleVariant}
                className="underline cursor-pointer"
            >
                {variant==='LOGIN'?'Create an account':'Login'}

            </div>
            </div>
        </div> 
    </div>
    )
}
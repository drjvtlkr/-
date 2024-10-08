'use server'

import connectDB from "@/lib/db";
import { NextResponse } from "next/server";
import { User } from "../models/User";
import { redirect } from "next/navigation";

const registerUser = async(formData: FormData)=>{
    try {
        const firstName = formData.get("firstname") as string;
        const lastName= formData.get("lastname") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        console.log(firstName, lastName, email, password);
        if (!firstName || !lastName || !email ||!password) {
            throw new Error("Please fill all fields")
        }

        await connectDB()

        const existingUser = await User.findOne({email});
        if(existingUser) throw new Error("User already exists")

        await User.create({firstName, lastName, email, password})
        console.log(`User created successfully`);

        redirect('/login')
        
    } catch (error) {
        console.error(`Error: ${error}`);
        // return NextResponse.sen
    }
}

export{registerUser}
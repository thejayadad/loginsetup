'use server'

import User from "@/models/User"
import { connectToDatabase } from "../database"


export const createUser = async (user) => {
    try {
        await connectToDatabase()
    const newUser = await User.create(user)
    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    console.log("Error " + error)
  }

}
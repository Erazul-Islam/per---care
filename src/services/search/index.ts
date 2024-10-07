/* eslint-disable prettier/prettier */

"use server"

import axiosInstance from "@/src/lib/axiosInstance"


export const searchPosts = async (searchTerm:string) => {
    try {
        const res = await axiosInstance.get(`/search-items?searchTerm=${searchTerm}`)

        return res.data
    }
    catch (error){
        console.log(error)
    }
}
import { Router } from "express";

const router = Router();

router.get("/employee", (req,res)=>{
    try {
        res.json({
            employees :[
                {
                    id: 1,
                    name: "John Doe",
                    position: "Software Engineer"
                },
                {
                    id: 2,
                    name: "Jane Smith",
                    position: "Product Manager"
                }       
            ]
        })
        
    } catch (error) {
        console.log(error);
    }
})
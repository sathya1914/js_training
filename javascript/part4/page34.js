import express from 'express';
const app=express();
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views","views");
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})


let users=[
    {name:"Snehitha",
        email:"sne@gmail.com",
        password:"shinchan"
    },
    {name:"Sathya",
        email:"sat@gmail.com",
        password:"peppapig"
    },
    {name:"Shreegna",
        email:"shr@gmail.com",
        password:"doreman"
    }
];
app.get("/login",(req,res)=>{
    res.render("login");
})
app.post("/login",(req,res)=>{
    const{email,password}=req.body  //destructuring
    const user=users.find((user)=>user.email===email);
    if(user){
        if(user.password==password){
            res.redirect("/");
        }
        else{
            res.render("login");
        }
    }
    else{
        res.render("login");
    }
 
})
app.get("/register",(req,res)=>{
    res.render("register");
})
app.post("/register",(req,res)=>{

    const {name,email,password}=req.body;

    let user=users.find((user)=> user.email === email);
    if(user){
        res.send("already exits");
    }
    else{
        users.push({
            name:name,
            email:email,
            password:password,
        })
        res.redirect("/")
    }
})
app.get("/",(req,res)=>{
    res.render("dashboard",{users});
})
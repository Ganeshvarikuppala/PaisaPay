const userrouter = require("./user");
const accountrouter = require("./account");
const express = require("express");
const app = express();

app.use("/user", userrouter);
app.use("/account", accountrouter);

module.exports = app;




// const userrouter=require("./user")
// const accountrouter=require("./account")
// const express=require("express");
// const app=express();
// const router=express.Router();
// router.use("/api/v1/user",userrouter)

// router.use("api/v1/account,",accountrouter)

// module.exports=router



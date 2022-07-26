import { ProductController } from "./Controller/ProductController";
import { UserController } from "./Controller/UserController";
import { app } from "./Services/app";

const userController = new UserController()
const productController = new ProductController()


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.post("/signup", userController.signup)

app.post("/login", userController.login)

app.post("/create/product", productController.insertProduct)

app.get("/get/products", productController.getProduct)


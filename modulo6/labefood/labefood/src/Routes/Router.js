import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Signup/Signup"
import SignupAdress from "../Pages/SignupAdress/SignupAdress"
import Feed from "../Pages/Feed/Feed"
import Restaurant from "../Pages/Restaurant/Restaurant"
import Profile from "../Pages/Profile/Profile"
import Cart from "../Pages/Cart/Cart"

export default function Router () {
    return(
        <BrowserRouter>
            <Routes>
                
                <Route index element={<Login/>} />

                <Route path="/signup" element={<Signup/>}/>

                <Route path="/signup/adress" element={<SignupAdress/>} />

                <Route path="/feed" element={<Feed/>} />

                <Route path="/restaurant/:id" element={<Restaurant/>} />

                <Route path="/profile" element={<Profile/>} />

                <Route path="/cart" element={<Cart/>} />

            </Routes>
        
        </BrowserRouter>
    )
}
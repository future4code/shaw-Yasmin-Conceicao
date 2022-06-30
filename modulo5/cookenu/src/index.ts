import app from "./app"
import { Login } from "./endpoints/Login"
import { Signup } from "./endpoints/Signup"


//--------------------------------------------------------------------Signup-------------------------------------------------------------------------------------------------

app.post("/signup" , Signup)


//--------------------------------------------------------------------Login-------------------------------------------------------------------------------------------------


app.post("/login", Login )


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTY2MjI1MjIsImV4cCI6MTY1NjYyNjEyMn0.0wDhfZXv5vUZUj9ytG6TEU4xG0PaqiV0b7XhHAM3PdI
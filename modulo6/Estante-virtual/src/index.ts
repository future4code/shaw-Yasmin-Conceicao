import { CompetitionController } from "./Controller/CompetitionController";
import { UserController } from "./Controller/UserController";
import { app } from "./Services/app";

const userController = new UserController()
const competitionController = new CompetitionController()


//--------------------------------------------------------------Signup--------------------------------------------------------------------------------------------------------

app.post("/signup", userController.signup)


//--------------------------------------------------------------Login--------------------------------------------------------------------------------------------------------


app.post("/login", userController.login)


//--------------------------------------------------------------Insert Competition--------------------------------------------------------------------------------------------------------


app.post("/insert/competition", competitionController.insertCompetition)


//--------------------------------------------------------------get swimming winner--------------------------------------------------------------------------------------------------------


app.get("/swimming", competitionController.getSwimminWiner)


//--------------------------------------------------------------get running winner--------------------------------------------------------------------------------------------------------


app.get("/running", competitionController.getRunningWinner)


//--------------------------------------------------------------get dart winner--------------------------------------------------------------------------------------------------------


app.get("/dart", competitionController.getDartWinner)


//--------------------------------------------------------------get all ranking--------------------------------------------------------------------------------------------------------


app.get("/getAllRanking", competitionController.getWinner)
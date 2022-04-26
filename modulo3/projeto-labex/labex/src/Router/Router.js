import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../components/AdminHomePage";
import ApplicationFormPage from "../components/ApplicationFormPage";
import CreateTripPage from "../components/CreateTripPage";
import HomePage from "../components/HomePage";
import ListTripsPage from "../components/ListTripsPage";
import LoginPage from "../components/LoginPage";
import TripDetailsPage from "../components/TripDetailsPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route 
            exact path={"/"}>
           <HomePage />
        </Route>

        <Route 
            exact path={"/trips/list"}>
            <ListTripsPage />
        </Route>

        <Route 
            exact path={"/login"}>
            <LoginPage />
        </Route>

        <Route 
            exact path={"/admin/trips/list"}>
            <AdminHomePage />
        </Route>

        <Route 
            exact path={"/admin/trips/:id"}>
            <TripDetailsPage/>
        </Route>

        
      </Routes>
    </BrowserRouter>
  );
}

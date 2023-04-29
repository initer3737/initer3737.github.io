import React from "react";
import Login from "./auth/login";
import ProtectedRoutes from "./protectedRoutes";
import ProtectedRoutesAuth from "./protectedRoutesAuth";
import LoadingData from "./loading";
import Weather from "./weather";
import ServiceWorker__initialize from "./pwa/worker";
import  Kuki__initialize from "./cookies";
import SingleTips from "./tipsLoading";
export{
    Kuki__initialize,
    ServiceWorker__initialize,
    Login,
    ProtectedRoutes,
    ProtectedRoutesAuth,
    LoadingData,
    Weather,
    SingleTips,
}
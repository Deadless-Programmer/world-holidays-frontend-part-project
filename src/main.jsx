import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./providers/AuthProviders.jsx";
// max-w-screen-xl mx-auto
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <div className=" ">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProviders>
  </StrictMode>
);

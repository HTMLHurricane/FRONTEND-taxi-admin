import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "@/pages/login";
import NotFound from "@/pages/not-found";
import PageLoader from "@/components/PageLoader";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import { privateRoutes } from "./privateRoutes";
import MainLayout from "@/components/Layout";
import useAuthStore from "@/store/auth/slice";

const Router: React.FC = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {isLoggedIn && (
            <Route path="/" element={<MainLayout />}>
              {privateRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<ProtectedRoute>{route.element}</ProtectedRoute>}
                />
              ))}
            </Route>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export { Router };

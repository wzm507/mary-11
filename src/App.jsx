import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import { LanguageProvider } from "./contexts/LanguageContext";
import RouteTransition from "./components/RouteTransition";
import "./i18n";
import { Suspense } from 'react';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <LanguageProvider>
        <Suspense fallback="loading">
          <HashRouter>
            <Routes>
              {navItems.map(({ to, page }) => (
                <Route 
                  key={to} 
                  path={to} 
                  element={
                    <RouteTransition>
                      {page}
                    </RouteTransition>
                  } 
                />
              ))}
            </Routes>
          </HashRouter>
        </Suspense>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

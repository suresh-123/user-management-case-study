import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./common/reactQueryClient";
import Layout from "./components/layout";

const CreateUser = React.lazy(() => import("./views/User/CreateUser"));
const UserList = React.lazy(() => import("./views/User/UserList"));

const App: React.FC = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/create-user" element={<CreateUser />} />
              </Routes>
            </Layout>
          </Suspense>
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;

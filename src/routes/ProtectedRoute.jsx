// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const userStr = localStorage.getItem("user");
//   let user = null;
//   try {
//     user = userStr ? JSON.parse(userStr) : null;
//   } catch (e) {
//     console.error("Failed to parse user:", e);
//   }

//   return user?.role === "admin" ? <Outlet /> : <Navigate to="/" replace />;
// };

// export default ProtectedRoute;




import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const userStr = localStorage.getItem("user");
  const token = sessionStorage.getItem("token");

  let user = null;

  try {
    user = userStr ? JSON.parse(userStr) : null;
  } catch (e) {
    console.error("Failed to parse user:", e);
    localStorage.removeItem("user");
  }

  if (!token || user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
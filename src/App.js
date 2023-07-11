import "./App.css";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { productsData, blogsData, useGetDataBlogs } from "./api/Api";
import ProductDetails from "./components/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";
import LoginSeller from "./pages/LoginSeller";
import Seller from "./pages/Seller";
import ManagementProducts from "./components/sellerComponent/ManagementProducts";
import { Fragment } from "react";
import SlideBar from "./components/sellerComponent/SlideBar";
import AddProduct from "./components/sellerComponent/AddProduct";
import AddBlog from "./components/sellerComponent/AddBlog";
import ManagementBlogs from "./components/sellerComponent/ManagementBlogs";
import ManagementMessages from "./components/sellerComponent/ManagementMessages";
import ManagementUsers from "./components/sellerComponent/ManagementUsers";
import ManagementOrders from "./components/sellerComponent/ManagementOrders";
import BlogDetail from "./pages/BlogDetail";
import Register from "./pages/Register";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};
const AdminLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row gap-2">
        <SlideBar />
        <ScrollRestoration />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: productsData,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
        // element: <Register />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: blogsData,
      },
      {
        path: "/login-seller",
        element: <LoginSeller />,
      },
    ],
  },
  {
    path: "/seller",
    element: <AdminLayout />,
    children: [
      {
        path: "/seller/",
        element: <Seller />,
      },
      {
        path: "/seller/managementproduct",

        element: <ManagementProducts />,
      },
      {
        path: "/seller/addproduct",

        element: <AddProduct />,
      },
      {
        path: "/seller/addblog",

        element: <AddBlog />,
      },
      {
        path: "/seller/managementblog",

        element: <ManagementBlogs />,
      },
      {
        path: "/seller/managementmessages",

        element: <ManagementMessages />,
      },
      {
        path: "/seller/managementusers",

        element: <ManagementUsers />,
      },
      {
        path: "/seller/managementorders",

        element: <ManagementOrders />,
      },
    ],
  },
]);

function App() {
  return (
    <div className=" font-bodyFont">
      <RouterProvider router={router} />
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;

import Button from "@components/atoms/Button";
import { Footer, NavBar } from "@components/organisms";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="flex min-h-screen flex-col items-center justify-center bg-primary px-5 text-primary">
        <h1 className="mb-5 text-7xl font-bold ">Oops!</h1>
        <p className="mb-12 text-center text-lg">{`Sorry, we cannot find the page you are looking for :(`}</p>
        <Button size="w-fit" className="bg-accent">
          <Link to="/"> Back to main page</Link>
        </Button>
      </div>
      <Footer />
    </>
  );
};

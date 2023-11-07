import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-10 border-t border-primary">
      <div className="flex flex-col items-center justify-between gap-y-5 px-6 py-10 md:flex-row md:px-12">
        <div className="flex flex-col items-center gap-x-4 md:flex-row">
          <h3 className="text-xl font-bold">Bukapedia</h3>
        </div>
        <p className="text-center text-sm">
          This website was created for Final Project 2 of Hacktiv8 Kampus
          Merdeka.
        </p>
        <div className="flex flex-col items-center justify-center">
          <Link to="/about" className="font-semibold underline">
            About Dev
          </Link>
        </div>
      </div>
    </footer>
  );
};

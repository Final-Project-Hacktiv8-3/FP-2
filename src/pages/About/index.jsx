import { DevCard, Footer, NavBar } from "@components/organisms";
import { developer } from "@lib/constant";

export const About = () => {
  return (
    <>
      <NavBar />
      <div className="mt-[10vh] flex min-h-screen flex-col items-center justify-center px-6 md:px-12 lg:mt-0">
        <div className="mb-12 flex justify-center">
          <h1 className="border-b border-secondary text-center text-3xl font-semibold capitalize text-primary shadow-md">
            About Developers
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {developer.map((dev) => (
            <div key={dev.id}>
              <DevCard data={dev} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

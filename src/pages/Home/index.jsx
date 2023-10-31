import { Button, DarkThemeToggle } from "flowbite-react";

export const Home = () => {
  return (
    <div>
      <h1 className="text-primary bg-primary text-3xl">Home</h1>
      <Button className="dark:text-red-500">Click me</Button>
      <DarkThemeToggle />
    </div>
  );
};

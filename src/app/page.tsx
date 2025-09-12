import Image from "next/image";
import Project from "../../component/project";
import Dashboard from "../../component/Dashboard";
import SgnUp from "../../component/SgnUp";

export default function Home() {
  return (
   <Project onLogin={function (): void {
      throw new Error("Function not implemented.");
    } }/>
  );
}

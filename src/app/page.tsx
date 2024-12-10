import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen justify-center items-center text-2xl font-bold">
      Click{" "}
      <Link href={"/documents/123"}>
        {" "}
        &nbsp; <span className="text-blue-500 underline">here</span>&nbsp;{" "}
      </Link>{" "}
      to go to document id
    </div>
  );
};
export default Home;

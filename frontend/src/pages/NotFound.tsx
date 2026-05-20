import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-7xl font-bold text-slate-800">
          404
        </h1>

        <p className="text-slate-500 mt-4 text-lg">
          Page not found
        </p>
      </div>
    </Layout>
  );
}
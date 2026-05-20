export default function Navbar() {
  return (
    <header className="h-24 bg-white border-b border-slate-200 shadow-sm px-10 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          CRM Dashboard
        </h1>

        <p className="text-slate-500">
          Manage your leads efficiently
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-slate-300"></div>

        <div>
          <h2 className="font-semibold text-lg">
            Admin
          </h2>

          <p className="text-slate-500 text-sm">
            Administrator
          </p>
        </div>
      </div>

      <button
  onClick={() => {
    localStorage.removeItem(
      "token"
    );

    window.location.href =
      "/login";
  }}
  className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600"
>
  Logout
</button>
    </header>
  );
}
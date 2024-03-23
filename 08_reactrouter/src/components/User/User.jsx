import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-3xl p-4 text-white bg-slate-900  flex flex-row min-h-screen justify-center items-center size-13">
      User: {userid}
    </div>
  );
}

export default User;

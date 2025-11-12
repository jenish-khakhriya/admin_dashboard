
import UsersTable from "@/components/molecules/UsersTable";
import { apiGet } from "@/utils/api"; 
import { cookies } from "next/headers";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value || null;

  let data = [];
  let count = 0;
  let fullName = "";

  try {
    if (userId) {
      const response = await apiGet({}, `/${userId}`);
      data = response?.data ?? [];
      count = response?.dataCount ?? 0;
      fullName = response?.fullName ?? "";
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    data = [];
    count = 0;
  }

  return (
    <div className="flex w-full h-[calc(100vh-80px)] overflow-auto items-center justify-center px-7 py-7">
      <div className="w-full h-full rounded-lg">
          <UsersTable count={count} data={data} userId={userId as string}/>
      </div>
    </div>
  );
}

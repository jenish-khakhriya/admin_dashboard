
import { apiGet } from "@/utils/api";  // Import the SetCookie component
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
    <div className="flex h-[calc(100vh-80px)] overflow-auto items-center justify-center px-7 py-7">
      <div className="border border-gray-100 bg-green-50 shadow-custom w-full h-full rounded-lg">
        {/* <p>User ID: {userId || "Not found"}</p>
        <p>Data count: {count}</p>
        <pre>{JSON.stringify(data, null, 2)}</pre> */}

      </div>
    </div>
  );
}

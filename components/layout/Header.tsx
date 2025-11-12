


import HeaderClient from './HeaderClient';
import { cookies } from 'next/headers';

const Header = async () => {
  const cookieStore = await cookies();
  const userName = cookieStore.get("fullName")?.value || null;

  return <HeaderClient userName={userName} />;
};

export default Header;

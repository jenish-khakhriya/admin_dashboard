// app/about/layout.tsx
import Header from '@/components/layout/Header';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;  // Type for children prop
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <section>
      <Header />
      <div>{children}</div>
    </section>
  );
}

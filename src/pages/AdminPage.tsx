import { AdminPanel } from "@/components/admin/AdminPanel";
import { PageMeta } from "@/components/PageMeta";

export default function AdminPage() {
  return (
    <>
      <PageMeta title="Admin | Inquiries" noIndex />
      <AdminPanel />
    </>
  );
}

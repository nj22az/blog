
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <main className="pt-24 pb-8 px-4 ml-64">
        <div className="max-w-3xl mx-auto">
          <MainContent />
        </div>
      </main>
    </div>
  );
};

export default Index;

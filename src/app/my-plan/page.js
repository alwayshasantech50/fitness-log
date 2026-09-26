import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import MyPlanContainer from "@/components/myPlan/MyPlanContainer";


const MyPlanPage = () => {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <MyPlanContainer />
      </main>

      <Footer />
    </>
  );
};

export default MyPlanPage;
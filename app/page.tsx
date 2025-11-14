import Appointment from "@/components/home/Appointment";
import Connect from "@/components/home/Connect";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HomeBanner from "@/components/home/HomeBanner";
import PocketPay from "@/components/home/PocketPay";
import RechargeModule from "@/components/home/RechargeModule";
import Store from "@/components/home/Store";
import UpcomingAppointments from "@/components/home/UpcomingAppointments";
import { appointment, connect, faqData, HomeBannerObj, paymentObj, pocketData, store, upcomingAppointments } from "@/constant/home";
import { AppointmentType } from "@/utils/type";


export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Header />

       <main className="w-full flex flex-col">
        <HomeBanner data={HomeBannerObj} />
        <RechargeModule data={paymentObj} />
        <Appointment data={appointment as AppointmentType} />
        <Store data={store} />
        <UpcomingAppointments data={upcomingAppointments} />
        <PocketPay data={pocketData} />
        <Faq data={faqData} />
        <Connect data={connect}/>
      </main>
      <Footer />
      
    </div>
  );
}

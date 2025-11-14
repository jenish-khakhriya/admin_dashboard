import Appointment from "@/components/home/Appointment";
import Connect from "@/components/home/Connect";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HomeBanner from "@/components/home/HomeBanner";
import PocketPay from "@/components/home/PocketPay";
import RechargeModule from "@/components/home/RechargeModule";
import ScrollAnimate from "@/components/home/ScrollAnimate";
import Store from "@/components/home/Store";
import UpcomingAppointments from "@/components/home/UpcomingAppointments";
import { appointment, connect, faqData, HomeBannerObj, paymentObj, pocketData, store, upcomingAppointments } from "@/constant/home";
import { AppointmentType } from "@/utils/type";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Header />

      <main className="w-full flex flex-col overflow-hidden">

        <ScrollAnimate>
          <HomeBanner data={HomeBannerObj} />
        </ScrollAnimate>

        <ScrollAnimate direction="left">
          <RechargeModule data={paymentObj} />
        </ScrollAnimate>

        <ScrollAnimate direction="right">
          <Appointment data={appointment as AppointmentType} />
        </ScrollAnimate>

        <ScrollAnimate direction="up">
          <Store data={store} />
        </ScrollAnimate>

        <ScrollAnimate direction="left">
          <UpcomingAppointments data={upcomingAppointments} />
        </ScrollAnimate>

        <ScrollAnimate direction="right">
          <PocketPay data={pocketData} />
        </ScrollAnimate>

        <ScrollAnimate direction="left">
          <Faq data={faqData} />
        </ScrollAnimate>

        <ScrollAnimate direction="right">
          <Connect data={connect} />
        </ScrollAnimate>

      </main>

      <Footer />
    </div>
  );
}

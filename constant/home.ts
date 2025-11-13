import HomeLogo from "../public/assets/homeLogo.svg";
import mobileIcon from "../public/assets/mobileIcon.svg";
import electricIcon from "../public/assets/electricIcon.svg";
import dthIcon from "../public/assets/dthIcon.svg";
import carIcon from "../public/assets/cartIcon.svg";
import insuranceIcon from "../public/assets/insuranceIcon.svg";
import investIcon from "../public/assets/investIcon.svg";
import vector from "../public/assets/Vector.svg";
import scanicon from "../public/assets/scanicon.svg";
import vector1 from "../public/assets/Vector1.svg";
import routeIcon from "../public/assets/routeIcon.svg";
import dataIcon from "../public/assets/dataIcon.svg";
import security from "../public/assets/security.svg";
import reduce from "../public/assets/reduce.svg";
import plane from "../public/assets/plane.svg";
import { AppointmentType } from "@/utils/type";

export const HomeBannerObj = {
  image: HomeLogo,
  title: "Quick, Easy, and Safe Payments",
  description:
    "Make payments in-store or online, plus send money to any bank account in a flash directly from your bank account.",

  arr: [
    "Swift QR scanning for instant payments at lightspeed.",
    "24/7 money transfers to anyone, anytime",
    "100% safe & secure",
  ],
};

export const paymentObj = [
  {
    name: "Mobile Recharge",
    icon: mobileIcon,
  },
  {
    name: "Electricity Bill",
    icon: electricIcon,
  },
  {
    name: "DTH Recharge",
    icon: dthIcon,
  },
  {
    name: "Mobile  Postpaid",
    icon: mobileIcon,
  },
  {
    name: "FASTag",
    icon: carIcon,
  },
  {
    name: "Buy Insurance",
    icon: insuranceIcon,
  },
  {
    name: "Investment",
    icon: investIcon,
  },
];

export const appointment : AppointmentType = {
  image: vector,
  title: "Appointments",
  subTitle: "made easy.",
  description:
    "Streamline your schedule with our user-friendly app, making appointments effortlessly accessible and hassle-free. Enjoy the convenience of seamless booking and efficient management for a stress-free experience.",
};

export const store = {
  image: scanicon,
  title: "In-store transactions empowered by Pocketpay",
  description:
    "Millions of small & big businesses use Pocketpay to accept payments anywhere any time with a wide range of solutions for all kind of merchants",
};

export const upcomingAppointments = {
  image: vector1,
  title: "Recharges & Bill Payments",
  description:
    "Lightning fast payments, exciting rewards and seamless transactions on every recharge & bill payment.",
  arr: [
    "Unlock easy, exciting deals",
    "No hidden charges",
    "Win gifts and vouchers",
  ],
};

export const pocketData = {
  title: "Why Pocketpay?",
  description:
    "We are obsessed with technology and use it extensively to solve the payments needs of your business",
  arr: [
    {
      icon: routeIcon,
      title: "Flexible",
      description:
        "Multiple feature launches, optimizations and improvements through the year to ensure you are always ahead of the curve",
    },
    {
      icon: dataIcon,
      title: "Comprehensive",
      description:
        "Reduce your operational expenses using our fully managed platform that is designed for Security, Reliability and Scale",
    },
    {
      icon: security,
      title: "Lorem Ipsum",
      description:
        "Reduce your operational expenses using our fully managed platform that is designed for Security, Reliability and Scale",
    },
    {
      icon: reduce,
      title: "Lorem Ipsum",
      description:
        "Reduce your operational expenses using our fully managed platform that is designed for Security, Reliability and Scale",
    },
  ],
};

export const faqData = {
  title: "Frequently Answered Questions",
  data: [
    {
      question: "Are there really zero fees?",
      answer:
        "At Pocketpay, we believe businesses shouldn’t have to wait or pay to access money they’ve already earned. We don’t charge you to sign up. We don’t charge you when you receive payments. And we don’t charge you when you make payments. There are zero fees. Seriously.",
    },
    {
      question: "Is Pocketpay secure?",
      answer:
        "At Pocketpay, we believe businesses shouldn’t have to wait or pay to access money they’ve already earned. We don’t charge you to sign up. We don’t charge you when you receive payments. And we don’t charge you when you make payments. There are zero fees. Seriously.",
    },
    {
      question: "Does Pocketpay replace my accounting software?",
      answer:
        "At Pocketpay, we believe businesses shouldn’t have to wait or pay to access money they’ve already earned. We don’t charge you to sign up. We don’t charge you when you receive payments. And we don’t charge you when you make payments. There are zero fees. Seriously.",
    },
    {
      question: "Is Pocketpay a bank?",
      answer:
        "At Pocketpay, we believe businesses shouldn’t have to wait or pay to access money they’ve already earned. We don’t charge you to sign up. We don’t charge you when you receive payments. And we don’t charge you when you make payments. There are zero fees. Seriously.",
    },
    {
      question: "Are the payments really instant?",
      answer:
        "At Pocketpay, we believe businesses shouldn’t have to wait or pay to access money they’ve already earned. We don’t charge you to sign up. We don’t charge you when you receive payments. And we don’t charge you when you make payments. There are zero fees. Seriously.",
    },
    {
      question: "Do my clients and vendors have to sign up for Pocketpay too?",
      answer:
        "At Pocketpay, we believe businesses shouldn’t have to wait or pay to access money they’ve already earned. We don’t charge you to sign up. We don’t charge you when you receive payments. And we don’t charge you when you make payments. There are zero fees. Seriously.",
    },
  ],
};

export const connect = {
  title: "Connect With Our Sales Team.",
  description:
    "Our sales team always active to support you. Any kind of questions about to our product they can answer to you.",
  image: plane,
};

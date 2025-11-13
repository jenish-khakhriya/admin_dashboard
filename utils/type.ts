export type User = {
  id: string;
  fullName: string;
  Email: string;
  mobileNumber: string;
  createdDate: string;
};

export type UsersTableProps = {
  data: User[];
  count: number;
};

export type UserFormProps = {
  handleUpdateUserData: () => void;
  data?: User;
  isEdit?: boolean;
  userData ?: User[];
  handleClose : () => {};
  userId : string;
  id ?: number;
}
export type DeleteModelProps = {
  handleClose: () => void;
  handleUpdateUserData: () => void;
  userData?: User[];
  id?: number;
  userId: string;
};


//! home page 

// types.ts

export interface HomeBannerType {
  image: string | any;
  title: string;
  description: string;
  arr: string[];
}

export interface PaymentType {
  name: string;
  icon: string | any;
}

export interface AppointmentType {
  image: string | any;
  title: string;
  subTitle: string;
  description: string;
}

export interface StoreType {
  image: string | any;
  title: string;
  description: string;
}

export interface UpcomingAppointmentsType {
  image: string | any;
  title: string;
  description: string;
  arr: string[];
}

export interface PocketFeature {
  icon: string | any;
  title: string;
  description: string;
}

export interface PocketDataType {
  title: string;
  description: string;
  arr: PocketFeature[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQDataType {
  title: string;
  data: FAQItem[];
}

export interface ConnectType {
  title: string;
  description: string;
  image: string | any;
}

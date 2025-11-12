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
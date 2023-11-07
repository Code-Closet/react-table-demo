import { format } from "date-fns";

export type JSONObject<T = any> = { [key: string]: T };
type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  phone: string;
  username: string;
  status: string;
  dob: string;
};
export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    disableFilters: true,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    Footer: "Role",
    accessor: "role",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
  {
    Header: "Username",
    Footer: "Username",
    accessor: "username",
  },
  {
    Header: "Status",
    Footer: "Status",
    accessor: "status",
  },
  {
    Header: "DOB",
    Footer: "DOB",
    accessor: "dob",
    Cell: ({ value }: JSONObject) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
      },
      {
        Header: "Role",
        Footer: "Role",
        accessor: "role",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];

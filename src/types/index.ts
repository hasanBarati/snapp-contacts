export type ApiStatus = "IDLE" | "PENDING" | "SUCCESS" | "ERROR";

export interface IContact {
  address: string;
  avatar: string;
  company: string;
  email: string;
  first_name: string;
  gender: string;
  id: number;
  last_name: string;
  note: string;
  phone: string;
  telegram: string;
}

export interface Imeta {
  skipped:number;
  limit: number;
  total: number;
  criteria:object;
}

export interface IContactResponse{
    items:IContact[]
    meta:Imeta
}

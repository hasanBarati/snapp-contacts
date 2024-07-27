
export interface IContact {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  phone: string;
  note: string;
  telegram: string;
  avatar: string;
  company: string;
  address: string | null;
  createdAt: number;
  updatedAt: number;
  id: number;
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



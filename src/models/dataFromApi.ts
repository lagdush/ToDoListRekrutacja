export interface DataFromApi {
  completed: boolean;
  created_at: string;
  id: number;
  title: string;
  updated_at: string;
  user_id: number;
}

enum Status {
   INACTIVE = "Inactive",
   ACTIVE = "Active"
}

export interface UserDataFromApi {
        id: number,
        name: string,
        email: string,
        gender: string,
        status: Status.ACTIVE | Status.INACTIVE,
        created_at: string,
        updated_at: string
}
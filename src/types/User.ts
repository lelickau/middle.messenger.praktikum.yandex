export interface IUser {
    id: number,
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: number,
    avatar: string
}
  
export interface IPasswordsData {
    oldPassword: string;
    newPassword: string;
}

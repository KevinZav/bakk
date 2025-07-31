export class Profile {
  constructor(
    public username: string,
    public name: string,
    public lastName: string,
    public gender: string,
    public birthdate: Date,
    public active: boolean = true,
    public phoneNumber?: string,
    public avatarUrl?: string,
    public bio?: string,
  ) {}
}
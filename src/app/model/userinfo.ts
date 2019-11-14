export class Userinfo {
    username: string;
    token: string;
    suid: string;
    constructor(username: string, token: string, suid: string) {
        this.username = username;
        this.token = token;
        this.suid = suid;
    }
}
export class SharedToken {
    public setToken(token:string): void {
        localStorage.setItem('token', token);
}
}

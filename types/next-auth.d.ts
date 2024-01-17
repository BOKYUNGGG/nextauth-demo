import {User, Session, Account} from 'next-auth'


declare module 'next-auth' {
    interface User {
        id             : number;
        name           : string;
        email          : string;
        email_verified : Date;
        image          : string;
        created_at     : Date;
        updated_at     : Date;
    }
    interface Session {
        id              : number;
        user_id         : number;
        expires         : Date;
        session_token   : string;
        access_token    : string;
        created_at      : Date;
        updated_at      : Date;
    }
    interface Account {
        id                   : number;
        compound_id          : string;
        user_id              : number;
        provider_type        : string;
        provider_id          : string;
        provider_account_id  : string;
        refresh_token        : string;
        access_token         : string;
        access_token_expires : Date;
        created_at           : Date;
        updated_at           : Date;
    }
}
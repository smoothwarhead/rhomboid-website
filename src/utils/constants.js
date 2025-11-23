import AccountRouter from "../routers/AccountRouter";
import CareerRouter from "../routers/CareerRouter";
import CorporateRouter from "../routers/CorporateRouter";

export const APPS = [
    {
        subdomain: "www",
        app: CorporateRouter,
        main: true

    },
    {
        subdomain: "career",
        app: CareerRouter,
        main: false

    },
    {
        subdomain: "account",
        app: AccountRouter,
        main: false

    },
]
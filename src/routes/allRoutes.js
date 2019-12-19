import { ROUTES_PATH } from "../constants";
import Service from "../components/Service";
import Industries from "../components/Industries";
import Technologies from "../components/Technologies";
import Solutions from "../components/Solutions";
import Insight from "../components/Insight";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Success from "../components/Success";

export const allRoutes = [
    {
        path: ROUTES_PATH.SERVICE,
        exact: true,
        component: Service
    },
    {
        path: ROUTES_PATH.INDUSTRIES,
        exact: true,
        component: Industries
    },
    {
        path: ROUTES_PATH.TECHNOLOGIES,
        exact: true,
        component: Technologies
    },
    {
        path: ROUTES_PATH.SOLUTIONS,
        exact: true,
        component: Solutions
    },
    {
        path: ROUTES_PATH.INSIGHTS,
        exact: true,
        component: Insight
    },
    {
        path: ROUTES_PATH.CAREER,
        exact: true,
        component: Career
    },
    {
        path: ROUTES_PATH.CONTACT,
        exact: true,
        component: Contact
    },
    {
        path: ROUTES_PATH.SUCCESS,
        exact: true,
        component: Success
    }
]

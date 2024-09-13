
import { Balance } from "../Comp/Balance"
import { Users } from "../Comp/Users"

import { Appbar } from "../Comp/APPbar"

export const Dashboard = () => {
    return <div className="ml-2">
        <Appbar />
        <div className="m-10">
            <Balance value={"10,000"} />
            <Users />
        </div>
    </div>
}
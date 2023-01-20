import AppContext from "../../Components/AppContext";
import { useContext } from "react";
import Link from "next/link";

const Index = () => {
    const context = useContext(AppContext);

    function changeNameContext() {
        context.setNameContext("maman");
    }

    return (
        <div>
            <h1>{context.nameContext}</h1>
            <Link href={"/partnership"} passHref>
                partnership
            </Link>
            <button onClick={changeNameContext}>change context</button>
        </div>
    );
};

export default Index;

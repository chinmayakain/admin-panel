import { useEffect, useState } from "react";

import Header from "./components/AppHeader";
import AppChart from "./components/AppChart";
import AppTable from "./components/AppTable";

import "./App.css";

function App() {
    const [responseData, setResponseData] = useState("");
    const [value, setValue] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const url = `http://fetest.pangeatech.net/data`;
        const headers = {
            "Content-Security-Policy": "upgrade-insecure-requests",
        };
        try {
            const response = await fetch(url, headers);
            setResponseData(await response.json());
        } catch (error) {
            throw new Error("Failed to fetch data!");
        }
    };
    return responseData ? renderApp(responseData, setValue, value) : <></>;
}

export default App;

function renderApp(responseData, setValue, value) {
    return (
        <div>
            <Header
                data={responseData}
                filterData={setValue}
                filterInitialData={value}
            />
            <div className="flex flex-col">
                <div className="flex justify-center my-5 h-[100%] w-[100%]">
                    <AppChart data={responseData} selectedFilter={value} />
                </div>
                <div className="px-20 py-10">
                    <AppTable data={responseData} selectedFilter={value} />
                </div>
            </div>
        </div>
    );
}

import React from "react";
import Select from "react-select";

const Header = ({ data, filterData, filterInitialData }) => {
    let revenueType = [];
    data.map((item) => {
        revenueType.push({
            value: item.revenue_type,
            label: item.revenue_type,
        });
    });

    const uniqueRevenueTypesArr = [
        ...new Map(revenueType.map((item) => [item["value"], item])).values(),
    ];

    const updateValue = (event) => {
        filterData(event);
    };

    return (
        <div className="navbar bg-blue-700 flex flex-row justify-between px-12">
            <div className="dropdown dropdown-end">
                <Select
                    options={uniqueRevenueTypesArr}
                    placeholder="All Revenue Type"
                    value={filterInitialData}
                    onChange={(e) => updateValue(e)}
                    isMulti
                />
            </div>
            <div className="flex-1 px-2 lg:flex-none">
                <a className="text-lg font-bold text-white cursor-pointer">
                    Hi John Doe
                </a>
            </div>
        </div>
    );
};

export default Header;

import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";

import Pagination from "./AppPagination";

import { compareArrays } from "../helper/arrayComparer";

const AppTable = ({ data, selectedFilter }) => {
    const [multiFilterData, setMultiFilterData] = useState([]);
    const [filterableData, setFilterableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const recordsPerPage = 20;

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const currentRecords = !isEmpty(filterableData)
        ? filterableData.slice(indexOfFirstRecord, indexOfLastRecord)
        : data.slice(indexOfFirstRecord, indexOfLastRecord);

    const nPages = !isEmpty(filterableData)
        ? Math.ceil(filterableData.length / recordsPerPage)
        : Math.ceil(data.length / recordsPerPage);

    useEffect(() => {
        if (!isEmpty(selectedFilter)) {
            let multiFilter = [];
            selectedFilter.map((item) => {
                multiFilter.push(item.value);
            });
            setMultiFilterData(multiFilter);
        } else {
            setFilterableData(null);
        }
    }, [selectedFilter]);

    useEffect(() => {
        if (data && multiFilterData) {
            setFilterableData(compareArrays(data, multiFilterData));
        }
    }, [multiFilterData]);

    const headers = [
        "Sl No",
        "Line Of Business",
        "Revenue Type",
        "Product",
        "Year",
        "Month",
        "ACV",
        "TCV",
        "Revenue",
    ];

    const renderTableData = (filterRefData) => {
        return filterRefData.map((item, index) => (
            <>
                <tr key={index}>
                    <th>{item?.S_no}</th>
                    <td>{item?.line_of_business}</td>
                    <td>{item?.revenue_type}</td>
                    <td>{item?.product}</td>
                    <td>{item?.year}</td>
                    <td>{item?.month}</td>
                    <td>{item?.acv}</td>
                    <td>{item?.tcv}</td>
                    <td>{item?.revenue}</td>
                </tr>
            </>
        ));
    };

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th
                                    className="bg-blue-600 text-white"
                                    key={index}
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>{renderTableData(currentRecords)}</tbody>
                </table>
                <div className="flex justify-center mt-12">
                    <Pagination
                        nPages={nPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </>
    );
};

export default AppTable;

import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

import { compareArrays } from "../helper/arrayComparer";

const AppChart = ({ data, selectedFilter }) => {
    const [multiFilterData, setMultiFilterData] = useState([]);
    const [filterableData, setFilterableData] = useState([]);

    useEffect(() => {
        if (!isEmpty(selectedFilter)) {
            let multiFilter = [];
            selectedFilter.map((item) => {
                multiFilter.push(item.value);
                return;
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

    return (
        <LineChart
            width={1500}
            height={400}
            data={!isEmpty(filterableData) ? filterableData : data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis dataKey="acv" />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="acv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
        </LineChart>
    );
};

export default AppChart;

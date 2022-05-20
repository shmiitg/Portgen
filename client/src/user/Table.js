import React from "react";
import "./Table.css";
import { Link } from "react-router-dom";

const Table = ({ ids, types }) => {
    return (
        <div class="dashboard__table customer">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Type</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {ids.map((id, index) => (
                        <tr>
                            <td>
                                <Link to={`/portfolio/developer/${id}`}>{id}</Link>
                            </td>
                            <td>{types[index]}</td>
                            <td>25 May 2022</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

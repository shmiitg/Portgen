import React from "react";
import "./Table.css";
import { Link } from "react-router-dom";

const Table = ({ ids, dates }) => {
    return (
        <div class="dashboard__table customer">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {ids.map((id, index) => (
                        <tr key={index}>
                            <td>
                                <Link to={`/portfolio/preview/${id}`}>{id}</Link>
                            </td>
                            <td>{dates[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

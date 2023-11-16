import React from 'react'

const DisplayTable = ({ data }) => {
    if (data.length > 0) {
        console.log(data);
        const headers = data[0]
        // const body=data.shift();
        // console.log(body);
        const rows = data.map((row, rowIndex) => (
            <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                ))}
            </tr>
        ));
        return (
            <table className="table table-bordered" style={{width:'100%'}}>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

export default DisplayTable
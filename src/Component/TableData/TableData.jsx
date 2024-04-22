import React from 'react'

function TableData({ name, arr, deletedata, edidtdata }) {
    // console.log(arr);


    return (
        <div>

            <table className='table mt-4'>
                <thead>
                    <tr >
                        {name.map((x, i) => (
                            <>
                                <th key={i}>{x}</th>
                            </>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>





                    {arr?.map((x, i) => {
                        console.log(x);
                        return <tr>
                            {
                                name?.map((e, i) => {
                                    // console.log(x[e]);
                                    return <> <td>{e === "skill" ? x[e].join(",") : e === "file" ?
                                        <img src={x[e]} style={{ width: '50px', height: '50px', objectFit: "cover" } } alt=""/> : x[e]}</td>

                                    </>

                                })

                            }

                            <td>
                                <button className='btn btn-danger me-1 px-1' onClick={() => deletedata(x.id)}>delete</button>
                                <button className='btn btn-warning px-1' onClick={() => edidtdata(x.id)}>edit</button>
                            </td>

                        </tr>
                    })}

                </tbody>
            </table>

        </div>
    )
}

export default TableData
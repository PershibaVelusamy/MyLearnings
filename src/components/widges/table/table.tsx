import React from 'react'
import './table.css';
export const Table=(props:any)=> {
const    {tableHeaders,TableContent  }=props;
  return (
    <div>
       <table>


<tr>
    {tableHeaders.map((item: any) => {
        return (<>
            <th>{item}</th>


        </>)
    })}
</tr>
{
    TableContent.map((data: any) => {

        return (
            <>
                <tr>
                    <td>{data.name}</td>

                    <td>{data.age}</td>

                    <td>{data.Designation}</td>
                </tr>
            </>
        )
    }





    )
}

</table>
    </div>
  )
}

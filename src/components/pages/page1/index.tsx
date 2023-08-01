import React from 'react'
import { Table, List,Basichtml } from '../../widges/index'
import { TableContent } from '../../../constants/utilities'

export const Login = () => {
    let tableHeaders: Array<any> = Object.keys(TableContent[0]);
    return (
        <div>

<Basichtml/>


            {/* <h1>Login Form</h1>
            <p title='lorem Text'>

                We do not know who does what in our groups or networks. Years of being in touch with friends, <br /> work colleagues, communities and we still don’t know how they stay busy.
            </p>
            <a href='https://elred.io/'> Click here!.</a> */}





            <Table TableContent={TableContent} tableHeaders={tableHeaders} />
            <h2>Technologies</h2>
            <List />
        </div>
    )
}

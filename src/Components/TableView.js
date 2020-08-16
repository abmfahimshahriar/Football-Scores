import React from 'react'
import Columns from './Columns'
import MatchList from './MatchList'

const TableView = () => {
    return (
        <table className="table table-bordered">
            <Columns />
            <tbody>
                <MatchList />
            </tbody>
        </table>
    )
}

export default TableView
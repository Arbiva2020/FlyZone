import React from 'react'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import SideBar from '../../components/SideBar/SideBar'
import "./UsersStatisticsPage.css"
import fakeData from '../../fakeData.json'
import { useTable } from "react-table"

const UsersStatisticsPage = () => {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name", 
        accessor: 'firstName'
      }, 
      {
        Header: "Last Name", 
        accessor: 'lastName'
      }, 
      {
        Header: "Level", 
        accessor: 'currentLevel'
      }, 
      {
        Header: "MMR", 
        accessor: 'MMR'
      }, 
      {
        Header: "No. of Badges", 
        accessor: 'badges'
      }, 
      {
        Header: "Total Score", 
        accessor: 'totalScore'
      }, 
    ], []
  );

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data})
console.log(fakeData)
  return (
    <div>
      <div className='users_main'>
      <AuthHeader />
      <div className='users_content'>
        <div className='users_sideContent'>
          <SideBar />
        </div>
          <div className='users_data'>
            <div className='users_headline'>Users Stats</div>
            <div className='users_chart'>
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        ))}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
        </div>
        <div className='users_summary'>
            <p className='users_summary_total'>Total users: {}</p>
            <p className='users_summary_total'>Score avg. : {}</p>
            <p className='users_summary_total'>Level avg. : {}</p>
            <p className='users_summary_total'>Total drone losses: {}</p>
          </div>
      </div>
    </div>
    </div>
  )
}

export default UsersStatisticsPage
import React from 'react'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import SideBar from '../../components/SideBar/SideBar'
import "./UsersStatisticsPage.css"
import fakeData from '../../fakeData.json'
import { useFilters, useSortBy, useTable } from "react-table"
import { FaSortAmountDownAlt } from "react-icons/fa"
import { FaSortAmountDown } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import Input from '../../components/Generic/Input/Input'
import SearchPopup from '../../components/SearchPopup/SearchPopup'
import Popup from '../../components/Popup/Popup'
import { searchDefaultState, searchDefaultValidState } from '../../constants/FormDeaults'


const UsersStatisticsPage = () => {
const [filterInput, setFilterInput] = React.useState("")
const [popupVisibility, setPopupVisibility] = React.useState(false)

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


  const handleFilterChange = (event) => {
    const value = event.target.value
    setFilter("firstName", event.target.value)
    setFilterInput(value);
  }

const popupClosehandler = (e) => {
  setPopupVisibility(e);
}

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter} = useTable({columns, data}, useFilters, useSortBy)
  return (
    <div>
      <div className='users_main'>
      <AuthHeader />
      <SearchPopup 
        onClose={popupClosehandler}
        show= {popupVisibility}
        title = ""
      />
      <Popup />
      <div className='users_content'>
        <div className='users_sideContent'>
          <SideBar />
        </div>
          <div className='users_data'>
            <div className='users_headline'>Users Stats</div>
            <div className='users_table_operations'>
              <Input 
                name={"search"}
                value={filterInput}
                placeholder="Search"
                onChange={handleFilterChange}
                customStyles={{width:"300px"}}
                onBlur={(event) => handleFilterChange(event.target.name, event.target.value)}
              />
              <i className='users_icon'><FaSearch /></i>
            </div>
            <div className='users_chart'>
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}className='usersStats_tr'>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())} className='usersStats_th'>
                          {column.render("Header")}
                          <span className='usersStats_span'>
                            {column.isSorted
                            ? column.isSortedDesc
                            ? <FaSortAmountDown />
                            : <FaSortAmountDownAlt />
                            : ''}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row, i) => {
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

            <div className='users_headline'>Stats Summary</div>
            <div className='users_chart'>
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}className='usersStats_tr'>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())} className='usersStats_th'>
                          {column.render("Header")}
                          <span className='usersStats_span'>
                            {column.isSorted
                            ? column.isSortedDesc
                            ? <FaSortAmountDown />
                            : <FaSortAmountDownAlt />
                            : ''}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row, i) => {
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
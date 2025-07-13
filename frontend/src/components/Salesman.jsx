import React, { useState } from 'react'
import { DummySalesmanData } from "../pages/DummyData.js";

const Salesman = ({ onEditSalesman, onAddSalesman }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter salesmen based on search term
  const filteredSalesmen = DummySalesmanData.filter(salesman => {
    const matchesSearch = salesman.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         salesman.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         salesman.mobile.includes(searchTerm);
    return matchesSearch;
  });

  const handleEditClick = (salesman) => {
    console.log('Edit button clicked for salesman:', salesman);
    onEditSalesman(salesman);
  };

  const handleAddClick = () => {
    console.log('Add Salesman button clicked');
    onAddSalesman();
  };

  return (
    <div className='h-full w-full px-2'>
      <div className='SalesmanHeader py-[38px] bg-secondary flex justify-between px-3'>
        <h1 className='text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer'>
          Salesman <span className='font-normal'>/ Yasir</span>
        </h1>
        <button 
          onClick={handleAddClick}
          className='bg-green py-2 px-8 text-lg text-textColor rounded-lg cursor-pointer'
        >
          Add Salesman
        </button>
      </div>

      <div className='my-4 mx-3'>
        <div className="filters border-textColor border-1 p-4 rounded-md flex items-center gap-5">
          <input 
            type="text" 
            placeholder='Search By Name, Email or Mobile' 
            className='w-[50%] py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="salesmanTable my-4 mx-3 flex justify-center text-textColor">
        <div className="table-container w-full max-w-full h-[500px] overflow-auto border border-textColor rounded-lg">
          <table className='w-full min-w-[1000px] table-fixed'>
            <thead className='bg-secondary text-textColor sticky top-0 z-10'>
              <tr>
                <th className='px-4 py-3 w-[60px] text-left whitespace-nowrap'>Index</th>
                <th className='px-4 py-3 w-[200px] text-left whitespace-nowrap'>Name</th>
                <th className='px-4 py-3 w-[250px] text-left whitespace-nowrap'>Email</th>
                <th className='px-4 py-3 w-[150px] text-left whitespace-nowrap'>Mobile</th>
                <th className='px-4 py-3 w-[120px] text-left whitespace-nowrap'>Sales</th>
                <th className='px-4 py-3 w-[120px] text-left whitespace-nowrap'>Salary</th>
                <th className='px-4 py-3 w-[200px] text-left whitespace-nowrap'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                filteredSalesmen.map((item, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}
                  >
                    <td className='px-4 py-4 text-left'>{index + 1}</td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={item.name}>{item.name}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={item.email}>{item.email}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={item.mobile}>{item.mobile}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={item.sales}>${item.sales}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={item.salary}>${item.salary}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='flex items-center gap-2'>
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleEditClick(item);
                          }}
                          className='bg-green py-1 px-3 text-sm text-textColor rounded-lg whitespace-nowrap cursor-pointer'
                        >
                          Edit
                        </button>
                        <button className='bg-red py-1 px-3 text-sm text-textColor rounded-lg whitespace-nowrap cursor-pointer'>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Salesman; 
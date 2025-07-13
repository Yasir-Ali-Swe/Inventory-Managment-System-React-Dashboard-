import React, { useState } from 'react'
import { DummySalesmanData } from "../pages/DummyData.js";

const Salesman = ({ onEditSalesman, onAddSalesman }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSalesmen = DummySalesmanData.filter(salesman => {
    return salesman.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleEditClick = (salesman) => {
    onEditSalesman(salesman);
  };

  const handleAddClick = () => {
    onAddSalesman();
  };

  return (
    <div className='min-h-screen w-full p-2 lg:p-4'>
      <div className='SalesmanHeader py-6 lg:py-8 rounded-lg mb-4'>
        <h1 className='text-xl lg:text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer px-4 lg:px-0 text-center'>Manage All Salesmen</h1>
      </div>
      
      <div className='my-4 mx-2 lg:mx-3'>
        <div className="filters border-textColor border-1 p-3 lg:p-4 rounded-md flex flex-col lg:flex-row items-center gap-3 lg:gap-5">
          <input 
            type="text" 
            placeholder='Search By Name' 
            className='w-full lg:w-[30%] py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            onClick={handleAddClick} 
            className='w-full lg:w-auto bg-green py-2 px-4 lg:px-8 text-base lg:text-lg text-textColor rounded-lg hover:bg-opacity-80 transition-colors'
          >
            Add Salesman
          </button>
        </div>
      </div>
      
      <div className="lg:hidden my-4 mx-2">
        <div className="grid grid-cols-1 gap-3">
          {filteredSalesmen.map((salesman, index) => (
            <div key={index} className="bg-secondary rounded-lg p-4 border border-textColor">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-textColor text-lg">{salesman.name}</h3>
                <span className="px-2 py-1 rounded text-xs font-semibold text-green">
                  ${salesman.sales}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                <div>
                  <span className="text-textColor opacity-70">Email:</span>
                  <p className="font-semibold">{salesman.email}</p>
                </div>
                <div>
                  <span className="text-textColor opacity-70">Mobile:</span>
                  <p className="font-semibold">{salesman.mobile}</p>
                </div>
                <div>
                  <span className="text-textColor opacity-70">Sales:</span>
                  <p className="font-semibold">${salesman.sales}</p>
                </div>
                <div>
                  <span className="text-textColor opacity-70">Salary:</span>
                  <p className="font-semibold">${salesman.salary}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleEditClick(salesman)}
                  className='bg-green py-1 px-3 text-sm text-textColor rounded-lg flex-1'
                >
                  Edit
                </button>
                <button className='bg-red py-1 px-3 text-sm text-textColor rounded-lg flex-1'>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block tableData my-4 mx-3 flex justify-center text-textColor">
        <div className="table-container w-full max-w-full h-[500px] overflow-auto border border-textColor rounded-lg">
          <table className='w-full min-w-[1000px] table-fixed'>
            <thead className='bg-secondary text-textColor sticky top-0 z-10'>
              <tr>
                <th className='px-4 py-3 w-[60px] text-left whitespace-nowrap'>Index</th>
                <th className='px-4 py-3 w-[200px] text-left whitespace-nowrap'>Name</th>
                <th className='px-4 py-3 w-[200px] text-left whitespace-nowrap'>Email</th>
                <th className='px-4 py-3 w-[150px] text-left whitespace-nowrap'>Mobile</th>
                <th className='px-4 py-3 w-[120px] text-left whitespace-nowrap'>Sales</th>
                <th className='px-4 py-3 w-[120px] text-left whitespace-nowrap'>Salary</th>
                <th className='px-4 py-3 w-[200px] text-left whitespace-nowrap'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                filteredSalesmen.map((salesman, index) => (
                  <tr key={index} className={` ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}>
                    <td className='px-4 py-4 text-left'>{index + 1}</td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={salesman.name}>{salesman.name}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={salesman.email}>{salesman.email}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={salesman.mobile}>{salesman.mobile}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate font-semibold text-green' title={`$${salesman.sales}`}>${salesman.sales}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='truncate' title={`$${salesman.salary}`}>${salesman.salary}</div>
                    </td>
                    <td className='px-4 py-4 text-left'>
                      <div className='flex items-center gap-2'>
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleEditClick(salesman);
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
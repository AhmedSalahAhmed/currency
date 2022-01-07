import React from 'react'
import styled from 'styled-components';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'رمز العملة', width: 170 },
  { field: 'currency', headerName: 'العملة', width: 170 },
  { field: 'buy', headerName: 'سعر البيع',type: 'number', width: 170 },
  { field: 'sell', headerName: 'سعر الشراء',type: 'number', width: 170 },
  {field: 'average', headerName: 'المتوسط', type: 'number', width: 150,},
  {field: 'edit', headerName: 'تعديل', type: 'number', width: 150,
    renderCell: (params)=>{
        return(
            <>
                <Link to={"/ex/"+params.row.id}>
                    <Button>تعديل</Button>

                </Link>
            
            </>
        )
    }
},
];

const rows = [
    { id: 1, currency: 'الدولار الامريكي', buy: 436.2799, sell: 439.5520, average: 437.9159 },
    { id: 2, currency: 'الريال السعودي', buy: 116.1616, sell: 117.0328, average: 116.5972 },
    { id: 3, currency: 'الجنيه الاسترليني', buy: 898, sell: 893, average: 45 },
    { id: 4, currency: 'الفرنك السويسري', buy: 100, sell: 100, average: 16 },
    { id: 5, currency: 'الدولار الكندي', buy: 100, sell: 100, average: 100 },
    { id: 6, currency: 'الدينار الكويتي', buy: 100, sell: 100, average: 150 },
    { id: 7, currency: 'الريال السعودي', buy: 100, sell: 100, average: 44 },
    { id: 8, currency: 'الدرهم الاماراتي', buy: 100, sell: 100, average: 36 },
    { id: 9, currency: 'الريال القطري', buy: 100, sell: 100, average: 65 },
  ];
  

function Exchange() {
    return (
        <div style={{ height: 600, width: '80%' ,direction: 'rtl'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        
      />
    </div>
    )
}

const Button = styled.button`

    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;



`;

export default Exchange

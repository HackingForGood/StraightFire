import React from 'react';
import {DataTable,TableHeader} from 'react-mdl';

export default class UserData extends React.Component{

render(){
  return(
    <div>
      <DataTable
    shadow={0}
    rows={[
        {material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
        {material: 'Plywood (Birch)', quantity: 50, price: 1.25},
        {material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
    ]}
>
    <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
    <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
    <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
</DataTable>
    </div>
  )
}
}

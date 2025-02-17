import React from 'react'
import PageHeader from '../PageHeader/PageHeader'

const BookOnRooutes = () => {
  return (
    <div>
        <PageHeader heading={'Explore details to updated flight price'} paragraph={'Book On'} bgImage={'https://images.unsplash.com/photo-1619898381495-5416f6c8045c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
        <div className="container max-w-7xl p-2 mx-auto sm:p-4 dark:text-gray-800">
	{/* <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2> */}
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			{/* <colgroup>
				<col className="w-5" />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-5" />
			</colgroup> */}
			<thead>
				<tr className="bg-gray-100">
					<th className="p-3">Flight No.</th>
					<th className="p-3">Destintion</th>
					<th className="p-3">One Way</th>
					<th className="p-3">Return</th>
					<th className="p-3">Departurel</th>
					<th className="p-3">Arrival</th>
					{/* <th className="p-3">
						<span className="sr-only">Edit</span>
					</th> */}
				</tr>
			</thead>
			<tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
				<tr>
					<td className="px-3  font-medium dark:text-gray-600">007A4</td>
					<td className="px-3 py-2">
						<p>Bali</p>
					</td>
					<td className="px-3 py-2">
						<span>38,064 bdt</span>
						
					</td>
					<td className="px-3 py-2">
						<p>58,258 bdt</p>
					</td>
					<td className="px-3 py-2">
						<p>10:45 pm</p>
					</td>
					<td className="px-3 py-2">
						<p>04:30 am</p>
						
					</td>
					
				</tr>
				
			</tbody>
			
			
		</table>
	</div>
</div>
    </div>
  )
}

export default BookOnRooutes
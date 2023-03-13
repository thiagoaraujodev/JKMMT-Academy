import React from 'react';
import { HistoricData } from '../../../interfaces/historic';

interface Props {
	historicData: HistoricData[];
}

const HistoricTable: React.FC<Props> = ({ historicData }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Código</th>
					<th>Descrição</th>
					<th>Progresso</th>
					<th>Início</th>
					<th>Término</th>
					<th>Diploma</th>
				</tr>
			</thead>
			<tbody>
				{historicData.map((data, index) => (
					<tr key={index}>
						<td>{data.code}</td>
						<td>{data.description}</td>
						<td>{data.progress}%</td>
						<td>{data.start}</td>
						<td>{data.finish}</td>
						<td>&#8942;</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default HistoricTable;

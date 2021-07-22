import React from 'react';
import { connect } from 'react-redux';
import { getCep } from '../../services/cepService';

function TelaRedux2(props) {
	async function handlePesquisarCep(data) {
		await getCep(data)
			.then(response => console.log('1..: ', response))
			.catch(errors => {
				console.error(errors);
			});
	}

	return (
		<>
			<h1>Tela Redux 2</h1>
		</>
	);
}

export default TelaRedux2;

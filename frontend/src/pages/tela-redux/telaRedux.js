import React from 'react';
import { connect } from 'react-redux';
import { getCep } from '../../services/cepService';

function TelaRedux(props) {
	async function handlePesquisarCep(data) {
		await getCep(data)
			.then(response => console.log('1..: ', response))
			.catch(errors => {
				console.error(errors);
			});
	}

	return (
		<>
			<h1>Tela Redux</h1>
			<button onClick={() => handlePesquisarCep()}>Busca município</button>
			<div>Dados municipio: </div>
			<div>
				{props.cep.map(e => {
					return 'id: ' + e.id + ' nome: ' + e.nome;
				})}
			</div>
		</>
	);
}

function mapStateToProps(state) {
	return {
		cep: state.cepReducer.cep
	};
}

export default connect(mapStateToProps)(TelaRedux);

import React from 'react'
import './LatestNotices.css'
function LatestNotices() {
    return (
      
<div className="container mt-5 mb-5">
	<div className="row">
		
		<div className="col-md-3 ">
					<div className="card">
						<h3>hola</h3>
						<p>content</p>
					</div>
		</div>

		<div className="col-md-4 offset-md-5">
			<h4>Latest News</h4>
			<ul className="timeline">
				<li>
					<a  href="https://www.totoprayogo.com/#">Vacina contra coronavírus</a>
					<a href="/" className="float-right">21 March, 2014</a>
					<p>Vacina contra coronavírus: por que o Brasil é considerado o ‘laboratório perfeito’ para testar imunização contra a Covid-19...</p>
					<hr/>
				</li>
				<li>
					<a href="/">BRASIL REGISTRA 4,33 MILHÕES DE CASOS</a>
					<a href="/" className="float-right">4 March, 2014</a>
					<p>O Ministério da Saúde informou, neste domingo (13), que foram registrados 14.768 novas infecções de covid-19 nas últimas 24 horas, totalizando 4.330.455 casos desde o início da pandemia. Deste total, 3.573.958 são de recu...</p>
				</li>
				<hr/>
				<li>
					<a href="/">Covid-19: Brasil tem 415 mortes nas últimas 24h</a>
					<a href="/" className="float-right">1 April, 2014</a>
					<p>O Conselho Nacional de Secretários de Saúde (Conass) e o Ministério da Saúde atualizaram, neste domingo (13), os dados sobre a situação da Covid-19 no Brasil. Veja os números do último levantamento. ...</p>
				</li>
				<hr/>
			</ul>
		</div>

	</div>
</div>
    )
}

export default LatestNotices

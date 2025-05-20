import vars from '../modules/crypto-js.js';

const check = async (page, code) => {
	await page.goto(`${vars.PICKIT_API_URL1}`, {
		waitUntil: 'load',
	});
	await page.type(
		'#app > div._home_1thne_16 > form > div._input-container_1thne_1 > input',
		`${code}`,
	);

	return await (
		await Promise.all([
			page.waitForResponse((res) => res.url().startsWith(`${vars.PICKIT_API_URL2}`)),
			page.click('#button-id'),
		])
	)[0].json();
};

export default { check };

// let result = {
// 	trackingNumber: '96KOJVEJ',
// 	pickitNumber: '96KOJVEJ',
// 	tracking: [
// 		{
// 			title: 'EN PREPARACIÓN',
// 			description: 'Te avisaremos cuando busquemos el paquete de Dafiti.',
// 			date: '29/06/2023 10:21:46',
// 			pointId: null,
// 			marker: 'ready',
// 			color: '#888080',
// 		},
// 		{
// 			title: '',
// 			description: 'Tu paquete está en viaje a Rancan Pinturerías 74 y 23.',
// 			date: '29/06/2023 15:45:41',
// 			pointId: null,
// 			marker: 'ready',
// 			color: '#888080',
// 		},
// 		{
// 			title: '',
// 			description:
// 				'Tu paquete está en el centro de distribución. Te avisaremos cuando estemos en camino a Rancan Pinturerías 74 y 23.',
// 			date: '30/06/2023 05:48:04',
// 			pointId: null,
// 			marker: 'ready',
// 			color: '#888080',
// 		},
// 		{
// 			title: 'EN CAMINO',
// 			description:
// 				'Tu paquete está en proceso de distribución, te avisaremos cuando llegue al punto pickit.',
// 			date: '30/06/2023 08:20:22',
// 			pointId: null,
// 			marker: 'ready',
// 			color: '#888080',
// 		},
// 		{
// 			title: 'EN DEVOLUCIÓN A REMITENTE',
// 			description: 'Te pedimos disculpas, tu paquete no pudo ser entregado.',
// 			date: '03/07/2023 08:41:54',
// 			pointId: null,
// 			marker: 'inconvenient',
// 			color: '#888080',
// 		},
// 		{
// 			title: 'EN PUNTO PICKIT',
// 			description:
// 				'Para retirar tu paquete, no te olvides de llevar tu DNI y código de seguimiento.',
// 			date: '25/07/2023 16:07:09',
// 			pointId: 5729,
// 			marker: 'ready',
// 			color: '#888080',
// 		},
// 		{
// 			title: 'EN DEVOLUCIÓN A REMITENTE',
// 			description: 'Te pedimos disculpas, tu paquete no pudo ser entregado.',
// 			date: '25/07/2023 16:22:18',
// 			pointId: null,
// 			marker: 'inconvenient',
// 			color: '#888080',
// 		},
// 		{
// 			title: 'DEVUELTO A REMITENTE',
// 			description: 'Te pedimos disculpas, tu paquete no pudo ser entregado.',
// 			date: '04/08/2023 13:27:45',
// 			pointId: null,
// 			marker: 'inconvenient',
// 			color: '#FF8672',
// 		},
// 	],
// 	status: '',
// 	title: '¡Hola Eliana! Devolvimos tu paquete a Dafiti',
// 	subscription: false,
// 	statusTransaction: 0,
// 	retailerName: 'Dafiti',
// 	transaction: {
// 		workflow: {
// 			tag: 'dispatch',
// 		},
// 		firstState: 2,
// 		operationType: 1,
// 		destination: {
// 			point: {
// 				name: 'Rancan Pinturerías 74 y 23',
// 			},
// 			address: {
// 				name: 'Diagonal 74',
// 				postalCode: '1900',
// 			},
// 		},
// 		origin: {
// 			point: {
// 				name: null,
// 			},
// 			address: {
// 				name: 'Mozart 1, Garin, Provincia de Buenos Aires, Argentina',
// 				postalCode: '1896',
// 			},
// 		},
// 		logisticSolutionType: 'traditional',
// 	},
// };

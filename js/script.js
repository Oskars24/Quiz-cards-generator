document.addEventListener("DOMContentLoaded", function() {
	// Odczytuje pytania z pola textarea
	function catchQuest () {
		const questions = Array.from(eval('['+document.querySelector('.qarea').value+']'))
		const numOfpages = Math.ceil(questions.length/54)
		return questions
		}
	// Wybór tła:
	const bgChoice = (currentPage) => {
		if (currentPage % 2 > 0) {return bgCanvasFront(0)} else {return bgCanvasBack(38)}
	}
	// Canvas object ze strzałką
	function simpleArrow (color, lineColor, lineWidth, strokeOpacity,x,y) {
		return {
			type: 'polyline',
			color: color,
			lineWidth: lineWidth,
			lineColor: lineColor,
			lineJoin: 'round',
			strokeOpacity: strokeOpacity,
			points: [{x: 26.2+x, y: 14.9+y},{x: 24.9+x, y: 17.78+y},{x: +24.2+x, y: 20.66+y},
					 {x: 24+x, y: 23.55+y},{x: 24.2+x, y: 26.44+y},{x: 24.9+x, y: 29.32+y},
					 {x: 26.2+x, y: 32.2+y},{x: 43.2+x, y: 23.55+y},{x: 26.2+x, y: 14.9+y}]
		}
	}
	// Canvas object ze strzałką z podświetleniem
	function catArrow (color, lineWidth, strokeOpacity,x,y) {
		return [
			simpleArrow(0,'#fff',lineWidth+4.25,0.045,x,y),
			simpleArrow(0,'#fff',lineWidth+3.85,0.10,x,y),
			simpleArrow(0,'#fff',lineWidth+3.45,0.165,x,y),
			simpleArrow(0,'#fff',lineWidth+3.05,0.185,x,y),
			simpleArrow(0,'#fff',lineWidth+2.65,0.18,x,y),
			
			simpleArrow(0,'#fff',lineWidth+2.25,0.32,x,y),
			simpleArrow(0,'#fff',lineWidth+1.85,0.34,x,y),
			
			simpleArrow(0,'#fff',lineWidth+1.45,0.355,x,y),
			simpleArrow(0,'#fff',lineWidth+1.05,0.75,x,y),
			simpleArrow(color, color, lineWidth, strokeOpacity,x,y)
	]
	}
	
	// Tło canvas przód
	function bgCanvasFront(x) {
		return {
			canvas: [
			{
				type: 'rect',
				x: 0,
				y: 0,
				w: 252.283464567,
				h: 167.244094488,
				r: 12.5,
				//lineWidth: 1,
				//lineColor: 'black',
				color: '#0073d6',
			}
		].concat(
				catArrow('#780d97',0.6250,1,x,0),
				catArrow('#0391f1',0.6250,1,x,24),
				catArrow('#e90687',0.6250,1,x,48),
				catArrow('#f75116',0.6250,1,x,72),
				catArrow('#fddb01',0.6250,1,x,96),
				catArrow('#06bb69',0.6250,1,x,120)
			)
		
		}
	}
	// Tło canvas tył
	function bgCanvasBack(x) {
		const bgCanvasBack = new bgCanvasFront(x)
		return bgCanvasBack
	}
	
	// Pojedyncza karta (przód)
	function fCard (startQuestion) {
		return {
			table: {
				widths: [39.606299213, 190],
				body: [
					['',(questions[startQuestion] != null) ? questions[startQuestion][0] : ' '],
					['',(questions[startQuestion+1] != null) ? questions[startQuestion+1][0] : ' '],
					['',(questions[startQuestion+2] != null) ? questions[startQuestion+2][0] : ' '],
					['',(questions[startQuestion+3] != null) ? questions[startQuestion+3][0] : ' '],
					['',(questions[startQuestion+4] != null) ? questions[startQuestion+4][0] : ' '],
					['',(questions[startQuestion+5] != null) ? questions[startQuestion+5][0] : ' ']
				]
			},
			layout: {
				hLineWidth: function (i, node) {return (i === 0 || i === node.table.body.length) ? 0 : 1;},
				vLineWidth: function (i, node) {return 0;},
				paddingLeft: function (i, node) {return 0;},
				paddingRight: function (i, node) {return 0;},
				paddingTop: function (i, node) {return 0;},
				paddingBottom: function (i, node) {return 0;},
				paddingTop: function (i, node) {if (node.table.body[i][1]._maxWidth <= 190) {return 7.95}
				else if(node.table.body[i][1]._maxWidth <= 380) {return 4.47} else {return 0.85}},
				paddingBottom: function (i, node) {if (node.table.body[i][1]._maxWidth <= 190) {return 7.95}
				else if(node.table.body[i][1]._maxWidth <= 380) {return 4.47} else {return 0.85}},
				hLineColor: function (i, node) {return '#003b8f';},
				fillColor: function (rowIndex, node, columnIndex) {return (columnIndex % 2 === 0) ? null : '#0383e8';}
			}
		}
	}
	//Pojedyncza karta (tył)
	function bCard (startQuestion) {
		const bCard = new fCard(startQuestion)
		bCard.table.widths = [37.4,39.606299213,105,47.6]
		bCard.table.body=[
					['',{border: [0,0,0,1], text: ''},{border: [0,0,0,1], text: (questions[startQuestion] != null) ? questions[startQuestion][1] : ' '},''],
					['',{border: [0,0,0,1], text: ''},{border: [0,0,0,1], text: (questions[startQuestion+1] != null) ? questions[startQuestion+1][1] : ' '},''],
					['',{border: [0,0,0,1], text: ''},{border: [0,0,0,1], text: (questions[startQuestion+2] != null) ? questions[startQuestion+2][1] : ' '},''],
					['',{border: [0,0,0,1], text: ''},{border: [0,0,0,1], text: (questions[startQuestion+3] != null) ? questions[startQuestion+3][1] : ' '},''],
					['',{border: [0,0,0,1], text: ''},{border: [0,0,0,1], text: (questions[startQuestion+4] != null) ? questions[startQuestion+4][1] : ' '},''],
					['',{border: [0,0,0,1], text: ''},(questions[startQuestion+5] != null) ? questions[startQuestion+5][1] : ' ','']
				]
		bCard.layout.fillColor= function (rowIndex, node, columnIndex) {return (columnIndex != 2) ? null : '#0383e8';}
		bCard.layout.defaultBorder= false
		return bCard
	}
	// Pojedyncza strona (przód)
	function pdfFrontPage () {
		return {
					style: 'cardStyle',
					table: {
						body: [
							[fCard(0),fCard(6),fCard(12)],
							[fCard(18),fCard(24),fCard(30)],
							[fCard(36),fCard(42),fCard(48)]
						]
					},
					layout: {
						hLineWidth: function (i, node) {return 0;},
						vLineWidth: function (i, node) {return 0;},
						paddingTop: function(i, node) {return 12.12204724;},
						paddingLeft: function(i, node) {return 11.338582677;},
						paddingRight: function(i, node) {return 11.338582677;},
						paddingBottom: function(i, node) { return 12.12204724;},
					},
					pageBreak: 'after'
		}
	}
	function pdfBackPage() {
		const pdfBackPage = new pdfFrontPage()
		pdfBackPage.table.body = [
								[bCard(12),bCard(6),bCard(0)],
								[bCard(30),bCard(24),bCard(18)],
								[bCard(48),bCard(42),bCard(36)]
							]
		pdfBackPage.pageBreak = null
		return pdfBackPage
	}
	
	// TA FUNKCJA GENERUJE CAŁY PDF:
	function createCards () {
		questions = catchQuest()
		const cardsDef = {
			info: {
				title: 'Trivial Pursuit card generator',
				author: 'Oscar',
			},
			
			pagesize: 'A4',
			pageOrientation: 'landscape',
			pageMargins: [42.58503937,46.771653543],
			
			background: function(currentPage) { return {
					table: {
						body: [
							[bgChoice(currentPage), bgChoice(currentPage), bgChoice(currentPage)],
							[bgChoice(currentPage), bgChoice(currentPage), bgChoice(currentPage)],
							[bgChoice(currentPage), bgChoice(currentPage), bgChoice(currentPage)]
						]
					},
					layout: {
							hLineWidth: function (i, node) {return 0;},
							vLineWidth: function (i, node) {return 0;},
							paddingTop: function(i, node) {return 0;},
							paddingLeft: function(i, node) {return 0;},
							paddingRight: function(i, node) {return 0;},
							paddingBottom: function(i, node) { return 0;}
					},
					margin: [42.58503937,46.771653543]
			}},
			//Tutaj generuje się główny kontent
			content: [pdfFrontPage(),pdfBackPage()],
			
			styles: {
				cardStyle: {
					color: 'white',
					fontSize: 6,
					alignment: 'left'
				}
			}
		}
		return cardsDef
	}
	// Wywołanie funkcji generującej po kliknięciu w przycisk:
	const gButton = document.querySelector('.generate')
	function generateCards () {pdfMake.createPdf(createCards()).download('karty.pdf')}
	gButton.addEventListener('click', catchQuest)
	gButton.addEventListener('click', generateCards)
	
});


document.addEventListener("DOMContentLoaded", function() {
	// Odczytuje pytania z pola textarea
	function catchQuest () {
		const questions = Array.from(eval('['+document.querySelector('.qarea').value+']'))
		//const numOfpages = Math.ceil(questions.length/54)
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
			stack: [{
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
					},
					{
						type: 'rect',
						x: 11.338582677,
						y: 12.12204724,
						w: 229.606299213,
						h: 144,
						//r: 12.5,
						//lineWidth: 1,
						//lineColor: 'black',
						color: '#0383e8',
					}
				].concat(
						catArrow('#780d97',0.6250,1,x,0),
						catArrow('#0391f1',0.6250,1,x,24),
						catArrow('#e90687',0.6250,1,x,48),
						catArrow('#f75116',0.6250,1,x,72),
						catArrow('#fddb01',0.6250,1,x,96),
						catArrow('#06bb69',0.6250,1,x,120)
					)
			}]
		}
	}
	//Lewe logo na tle karty
	function leftLogoImage() {
		return {
			image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAIrCAMAAAAqWBzLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFHR0bHBwaDZPP////JBkYHBslAAAAQkJBDQ0MmJiXHh4cFyAXc3NxFRIGa2trJBYmuLi4ISEe19fWRkZFYwk6paWjGBkWaCNUNTU1IiIgxsbGOjo5GxsZPj4+GhoYEhIRT6ctUlJSSklJW1paoRNkQEA/FhYVKSko4+PiHR4YJSUkfHx7NDUwjY2M+JUSTk1NMjIxZGRjr6+tjjWOFQUCLi4tKCgm6+vrHB0XGxwYGhwWIXKUHR0dzQ13CRUGJCQiNlgmFQIUFBQSZKFGFB8k2gKCET5Sqqqq+vr5WlpXBQUFrKyqgoKBspZb/NwHFVBrHh8a/usNGhoaoIklHRwbBhMXVVVV9PTzmWcZMTEuFCAdLCwqHhkZGB4dBQcZ/Pz7Ex0THRsdaTpqHh4f+ug1KAEW/v79IBoJ6KMzFxcXHxAbGSELCQkI4dVjhEGEwX8c2aFQGhMTRnEu/Pz6WFVWDQMBODg2PT07eW8tZkkm0pIw6dgrFhMdGx4aAREAWVdY854LIBsay7UlGxsbHR4RHRwadVgXDyQYAwMCVFFSIgcB850gVlNUHR0aDwMNRERCqKinIBsVIBsdGRgfBRouUU9QHBwgT01OBQQPGCASKyABVz0CCyYCGx0aAQ4iOwgk39/dHxwX+Pj3TExMUFBOGx0cGx8d2sMsAxAPIBogIz8VGQQed3d2YWBeSUdIS0pKXl1dBwEALD0oRioCEzYHcHFtU1NSHBgtGBoQAik8R0dFHxoPIR4Un5+eLBMZ6OjniYmIREREsrKxTE1KMRQAGh4g7+/vkZGQQyRHaGhnLy4uR0VGNw4CGA0NSDobGRkZHBcWAAgAQ0JD0NDPQSUUIyMhJichJyclR0dHEwwTGgwWMDAwUFBQGxcbFhwaAwkDCAAGIyMkIiQeDxoOwMC/KyssPDw8Ozs5/f39V1ZWQ0NDQ0RDQ0REBAEJo5JcSEhINDQ0NDQxb29vYGBgODg4DRYaORM4KyspLSkofnMaT09PS0tLFAQ8hoaGvpYnAAAAPjvQdwAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAEsfSURBVHja7L1/XFT3mfh7TgcOw4EgR8opA4czK5ZBoCzgCg50Gtapu8EJ3y2dTrTyI0inIT1xdr+bmkC7DbHsQJ20TlTckNotLWDwhhYXcnf90SgR7SoL+00nLUuwIXFrRH7du1cEs9zV63Kf53PODAPMwICT1/3nfqJILfLmeT7P5/nx+UnNr6VldEZGQevv78/uXNM/pAL8us1FRZGRUTOd6UXp6emdM1Gzm7oy75yM3B1ETM/Dh0V9fT1PPnH0iaOxPeHu1pt+5o2uXx/p2hwMTGxRUV/Plejoo+EZRemdnZHQzpyJjOyM7Czq7e3rLcr+dc29O0WPiInO6I0dHY3uyQCVpReRhkrrVICdnUUZvenZd3Kn0x8BExveEx0fDdpJL+rN6C3qnMnenZRcM1aTmJicuev06eyZM52R2F1FkbuzkrPD14fZ2nMlPv7Jh529GRkZ6VG7p7LSCjSCpJMknU4n0UMFaSPJb0+ejpqZAeGKoibHErLXgRkNf3Jw8MmiyN6enofZU6UsL/I6kRZFihYoaKIk8YJAp6VVb8ruj4w609k5czArpXOtmPCjgxu3Qu/Hhkd2ZXE6nUixAk3RNM3Cb4qmWAp+iTwv8Zq5mt39MzMIunM7LGMtmOjYwZbRh509sRnZiZxRZ6RZQRRYpNAUaTRIAp/D3wqCKN2sTpqFQRXZmT023R84pif6Ukv4TN/W8O4RTjTyLEvDNxVEGj/wIn5rwIA40ChKECySzj4SMzsDvXTmbG5YoJjY+GvxnTNHrxRV6ySe5lj4vvAtBVAQ0mjSQAhQGZFNMFssZpd9etPMTH/kzGxWSl9AmCdatl+J7L3Sl2S22/FH5nmOpeFbsgW5pSNZ2PbuHRkonUsb4kBpNMsaDHaXZDZbwrL7ozpn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',
			width: 24.5,
			relativePosition: {x: 17.638582677,y: -149.62204724}
		}
	}
	// Prawe logo na tle karty
	function rightLogoImage() {
		return {
			image: 'data:image/png;base64,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',
			width: 44.2,
			relativePosition: {x: 196.74488189,y: -154.57204724}
		}
	}
	
	// Tło canvas tył
	function bgCanvasBack(x) {
		const bgCanvasBack = new bgCanvasFront(x)
		bgCanvasBack.stack.push(leftLogoImage(),rightLogoImage())
		return bgCanvasBack
	}

	// Mierzy długość podanego tekstu przy zadanym stylu np. '6px, Arial'
	function getTextWidth(text, font) {
		const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
		const context = canvas.getContext("2d");
		context.font = font;
		const metrics = context.measureText(text);
		return metrics.width;
	};
	// Dopasowuje padding w zalezności od podziału tekstu na linie
	function adjustPadding(string, lineWidth, firstPadding, secondPadding, thirdPadding) {
		text=string.trim().replace(/\s+/g,' ')
		if (text==='') {text='_'}
		text=text.split(' ')
		// Sprawdza na ile wierszy zostanie podzielony text
		let sumLine=1
		let j=0
		for (let i=0; i<text.length; i++) {
			fragment=text.slice(j,i+1).join(' ')
			if(getTextWidth(fragment,'6px Roboto')>lineWidth) {
				sumLine++
				j=i
				i--
			}
		}
		// Przypisuje wartość paddingu w zależności od ilości wierszy
		if (sumLine===1) {
			return firstPadding
			} else if (sumLine===2) {
				return secondPadding
			} else {return thirdPadding}
	}
	
	// Pojedyncza karta (przód)
	function fCard (startQuestion) {
		return {
			table: {
				widths: [39.606299213, 190],
				
				body: [
					['',{maxHeight: 24, text: (questions[startQuestion] != null) ? questions[startQuestion][0] : ' '}],
					['',{maxHeight: 24, text: (questions[startQuestion+1] != null) ? questions[startQuestion+1][0] : ' '}],
					['',{maxHeight: 24, text: (questions[startQuestion+2] != null) ? questions[startQuestion+2][0] : ' '}],
					['',{maxHeight: 24, text: (questions[startQuestion+3] != null) ? questions[startQuestion+3][0] : ' '}],
					['',{maxHeight: 24, text: (questions[startQuestion+4] != null) ? questions[startQuestion+4][0] : ' '}],
					['',{maxHeight: 24, text: (questions[startQuestion+5] != null) ? questions[startQuestion+5][0] : ' '}]
				]
			},
			layout: {
				hLineWidth: function (i, node) {return (i === 0 || i === node.table.body.length) ? 0 : 1;},
				vLineWidth: function (i, node) {return 0;},
				paddingLeft: function (i, node) {return 0;},
				paddingRight: function (i, node) {return 0;},
				paddingTop: function (i, node) {return adjustPadding(node.table.body[i][1].text,190,7.95,4.47,0.85)},
				paddingBottom: function (i, node) {return adjustPadding(node.table.body[i][1].text,190,7.95,4.465,0.85)},
				hLineColor: function (i, node) {return '#003b8f';},

			}
		}
	}
	//Pojedyncza karta (tył)
	function bCard (startQuestion) {
		const bCard = new fCard(startQuestion)
		bCard.table.widths = [37.4,39.606299213,105,47.6]
		bCard.table.body=[
					['',{border: [0,0,0,1], text: ''},{maxHeight: 24, border: [0,0,0,1], text: (questions[startQuestion] != null) ? questions[startQuestion][1] : ' '},''],
					['',{border: [0,0,0,1], text: ''},{maxHeight: 24, border: [0,0,0,1], text: (questions[startQuestion+1] != null) ? questions[startQuestion+1][1] : ' '},''],
					['',{border: [0,0,0,1], text: ''},{maxHeight: 24, border: [0,0,0,1], text: (questions[startQuestion+2] != null) ? questions[startQuestion+2][1] : ' '},''],
					['',{border: [0,0,0,1], text: ''},{maxHeight: 24, border: [0,0,0,1], text: (questions[startQuestion+3] != null) ? questions[startQuestion+3][1] : ' '},''],
					['',{border: [0,0,0,1], text: ''},{maxHeight: 24, border: [0,0,0,1], text: (questions[startQuestion+4] != null) ? questions[startQuestion+4][1] : ' '},''],
					['',{border: [0,0,0,1], text: ''},{maxHeight: 24, text: (questions[startQuestion+5] != null) ? questions[startQuestion+5][1] : ' '},'']
				]
		bCard.layout.paddingTop= function (i, node) {return adjustPadding(node.table.body[i][2].text,105,7.95,4.47,0.85)},
		bCard.layout.paddingBottom= function (i, node) {return adjustPadding(node.table.body[i][2].text,105,7.95,4.465,0.85)},
		bCard.layout.defaultBorder= false
		return bCard
	}
	// Pojedyncza strona (przód)
	function pdfFrontPage (page) {
		return {
					style: 'cardStyle',
					table: {
						body: [
							[fCard(0+(page-1)*54),fCard(6+(page-1)*54),fCard(12+(page-1)*54)],
							[fCard(18+(page-1)*54),fCard(24+(page-1)*54),fCard(30+(page-1)*54)],
							[fCard(36+(page-1)*54),fCard(42+(page-1)*54),fCard(48+(page-1)*54)]
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
	function pdfBackPage(page) {
		const pdfBackPage = new pdfFrontPage(page)
		pdfBackPage.table.body = [
								[bCard(12+(page-1)*54),bCard(6+(page-1)*54),bCard(0+(page-1)*54)],
								[bCard(30+(page-1)*54),bCard(24+(page-1)*54),bCard(18+(page-1)*54)],
								[bCard(48+(page-1)*54),bCard(42+(page-1)*54),bCard(36+(page-1)*54)]
							]
		return pdfBackPage
	}
	
	// TA FUNKCJA GENERUJE CAŁY PDF:
	function createCards () {
		questions = catchQuest()
		const numOfpages=Math.ceil(questions.length/54)
		function contentArray () {
				let pagesArray = []
				for (let i=1;i<=numOfpages;i++) {
					pagesArray.push(pdfFrontPage(i),pdfBackPage(i))
				}
				pagesArray[pagesArray.length-1].pageBreak=null
				return pagesArray
			}
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
			content: contentArray(),
			
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


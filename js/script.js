// Zmienne "val" pochodzą z pliku js/canvas.js
document.addEventListener("DOMContentLoaded", function() {
	// Definicje stałych
	const importButton = document.querySelector('.importButton')
	const error1 = document.querySelector('.error1')
	const previousButton = document.querySelector('.previousButton')
	const nextButton = document.querySelector('.nextButton')
	const previousButton2 = document.querySelector('.previousButton2')
	const generateButton = document.querySelector('.generateButton')
	const resetButton = document.querySelector('.resetButton')
	const textAreaContent = document.querySelector('.textAreaContent')
	const questionsContent = document.querySelector('.questionsContent')
	const styleContent = document.querySelector('.styleContent')
	const loader = document.querySelector('.loader')
	
	// Definicje przycisków
	importButton.addEventListener('click', catchQuest)
	previousButton.addEventListener('click', previousButtonAction)
	nextButton.addEventListener('click', nextButtonAction)
	previousButton2.addEventListener('click', previousButton2Action)
	generateButton.addEventListener('click', generateCards)
	resetButton.addEventListener('click', resetImg)
	
	// Sprawdza długość pola input i przypisuje odpowiednią klasę
	function checkInputLength (text, maxLength) {
				if(checkNumOfLines(text, '6px Roboto medium', maxLength,4)>3) {
					return ' tooLong'
				} else {return ''}
			}
	
	// Waliduje pola input w czasie rzeczywistym
	questionsContent.addEventListener('input', function(event){
		if (event.target.classList.contains('question')) {
			if(checkNumOfLines(event.target.value, '6px  medium', 190,4)>3) {
				event.target.classList.add('tooLong')
			} else {
				event.target.classList.remove('tooLong')
			}
		} else {
			if(checkNumOfLines(event.target.value, '6px Roboto medium', 105,4)>3) {
				event.target.classList.add('tooLong')
			} else {
				event.target.classList.remove('tooLong')
			}
		}
	});
	
	// Importuje pytania i porządkuje w polach input
	function catchQuest () {
		viewLoader (0)
		setTimeout(function(){
		try {
			const questions = Array.from(eval('['+document.querySelector('.qarea').value.replace(/"/g,'&quot;')+']'))
			error1.classList.add('disable')
			textAreaContent.classList.add('disable')
			previousButton.classList.toggle('disable')
			nextButton.classList.toggle('disable')
			importButton.classList.add('disable')
			questionsContent.classList.toggle('disable')
			function makeInputs() {
				let inputs=''
				for (i=0;i<questions.length;i++) {
					inputs=inputs+'<div class="qaLine"><label class="label">Q:<input class="question'+checkInputLength(questions[i][0], 190)+'" type="text" value="'+questions[i][0]+'"></label><label class="label">A:<input class="anserw'+checkInputLength(questions[i][1], 105)+'" type="text" value="'+questions[i][1]+'"></label></div>'
				}
				viewLoader(100)
				return inputs
			}
			questionsContent.insertAdjacentHTML('afterbegin', makeInputs())
		} catch {
				viewLoader (100)
				error1.classList.remove('disable')
			}},100)
			
		}
		
	// Funkcja przycisku "wróć_1"	
	function previousButtonAction () {
		error1.classList.add('disable')
		previousButton.classList.toggle('disable')
		nextButton.classList.toggle('disable')
		questionsContent.classList.toggle('disable')
		textAreaContent.classList.toggle('disable')
		importButton.classList.toggle('disable')
		while (questionsContent.firstChild) {
			questionsContent.firstChild.remove()
		}
	}
	
	// Funkcja przycisku "dalej"	
	function nextButtonAction () {
		questionsContent.classList.toggle('disable')
		previousButton.classList.toggle('disable')
		nextButton.classList.toggle('disable')
		styleContent.classList.toggle('disable')
		previousButton2.classList.toggle('disable')
		generateButton.classList.toggle('disable')
	}
	
	// Funkcja przycisku "wróć_2"
	function previousButton2Action () {
		styleContent.classList.toggle('disable')
		previousButton2.classList.toggle('disable')
		generateButton.classList.toggle('disable')
		questionsContent.classList.toggle('disable')
		previousButton.classList.toggle('disable')
		nextButton.classList.toggle('disable')
	}

	// Funkcja przycisku resetButton
	function resetImg () {
		leftLogoImageInput.value=''
		rightLogoImageInput.value=''
		leftLogoImageSrc= leftLogoDefault
		rightLogoImageSrc= rightLogoDefault
		drawCanvas()
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
		if (val.arrowBorderStyle != 'obrys') {return [
			simpleArrow(0,val.arrowBorderColor,lineWidth+4.25,0.045,x,y),
			simpleArrow(0,val.arrowBorderColor,lineWidth+3.85,0.10,x,y),
			simpleArrow(0,val.arrowBorderColor,lineWidth+3.45,0.165,x,y),
			simpleArrow(0,val.arrowBorderColor,lineWidth+3.05,0.185,x,y),
			simpleArrow(0,val.arrowBorderColor,lineWidth+2.65,0.18,x,y),
			
			simpleArrow(0,val.arrowBorderColor,lineWidth+2.25,0.32,x,y),
			simpleArrow(0,val.arrowBorderColor,lineWidth+1.85,0.34,x,y),
			
			simpleArrow(0,val.arrowBorderColor,lineWidth+1.45,0.355,x,y),
			simpleArrow(0,val.arrowBorderColor,lineWidth+1.05,0.75,x,y),
			simpleArrow(color, color, lineWidth, strokeOpacity,x,y)
		]} else {return simpleArrow(color, val.arrowBorderColor, lineWidth, strokeOpacity,x,y)}
	}
	// Tło canvas przód
	function bgCanvasFront(x) {
		lineWidthBg = parseFloat(val.fbgBorderWidth)
		lineWidthBox = parseFloat(val.fboxBorderWidth)
		function canvasStock (y_relative) {
			return {
				stack: [{
					canvas: [
					{
						type: 'rect',
						x: lineWidthBg/2,
						y: lineWidthBg/2,
						w: 252.283464567-lineWidthBg,
						h: 167.244094488-lineWidthBg,
						r: val.fbgCornersRound,
						color: val.fbgColor,
						fillOpacity: val.fbgColorOpacity,
						lineWidth: lineWidthBg,
						lineColor: (val.fbgBorderWidth>0) ? val.fbgBorderCornersColor : null,
						strokeOpacity: (val.fbgBorderWidth>0) ? val.fbgBorderCornersColorOpacity : null,
						lineJoin: (val.fbgBorderWidth>0) ? val.fbgBorderCornersLineJoin : null,
						lineCap: (val.fbgBorderWidth>0) ? val.fbgBorderCornersLineCap : null,
						dash: (lineWidthBg>0 && val.fbgBorderCornersDashLength!=0 && val.fbgBorderCornersDashSpace!=0) ? {
							length: parseFloat(val.fbgBorderCornersDashLength),
							space: parseFloat(val.fbgBorderCornersDashSpace),
							phase: val.fbgBorderCornersDashPhase
							} : null,
					},
					{
						type: 'rect',
						x: 11.338582677+lineWidthBox/2,
						y: 12.12204724+lineWidthBox/2,
						w: 229.606299213-lineWidthBox,
						h: 144-lineWidthBox,
						r: val.fboxCornersRound,
						color: val.fboxColor,
						fillOpacity: val.fboxColorOpacity,
						lineWidth: lineWidthBox,
						lineColor: (val.fboxBorderWidth>0) ? val.fboxBorderCornersColor : null,
						strokeOpacity: (val.fboxBorderWidth>0) ? val.fboxBorderCornersColorOpacity : null,
						lineJoin: (val.fboxBorderWidth>0) ? val.fboxBorderCornersLineJoin : null,
						lineCap: (val.fboxBorderWidth>0) ? val.fboxBorderCornersLineCap : null,
						dash: (lineWidthBox>0 && val.fboxBorderCornersDashLength!=0 && val.fboxBorderCornersDashSpace!=0) ? {
							length: parseFloat(val.fboxBorderCornersDashLength),
							space: parseFloat(val.fboxBorderCornersDashSpace),
							phase: val.fboxBorderCornersDashPhase
							} : null,
					}
				].concat(
						catArrow(val.arrowCatColor1,0.6250,1,x,0),
						catArrow(val.arrowCatColor2,0.6250,1,x,24),
						catArrow(val.arrowCatColor3,0.6250,1,x,48),
						catArrow(val.arrowCatColor4,0.6250,1,x,72),
						catArrow(val.arrowCatColor5,0.6250,1,x,96),
						catArrow(val.arrowCatColor6,0.6250,1,x,120),
					),relativePosition: {x: 0,y: 167.244094488*y_relative},
				}]
			}
		}
		return {
			width: 252.283464567,
			stack: [canvasStock(0),canvasStock(1),canvasStock(2)]
		}
	}

	//Lewe logo na tle karty
	function leftLogoImage(y_relative) {
		return {
			image: leftLogoImageSrc,
			//width: 24.5,
			fit: [24.5,133.3],
			relativePosition: {x: 17.638582677,y: 16.972047244+167.244094488*y_relative}
		}
	}
	
	// Prawe logo na tle karty
	function rightLogoImage(y_relative) {
		return {
			image: rightLogoImageSrc,
			//width: 44.2,
			fit: [44.2,142.9],
			relativePosition: {x: 196.74488189,y: 12.12204724+167.244094488*y_relative}
		}
	}
	
	// Tło canvas tył
	function bgCanvasBack(x) {
		lineWidthBg = parseFloat(val.bbgBorderWidth)
		lineWidthBox = parseFloat(val.bboxBorderWidth)
		function canvasStock (y_relative) {
			return {
				stack: [{
					canvas: [
					{
						type: 'rect',
						x: lineWidthBg/2,
						y: lineWidthBg/2,
						w: 252.283464567-lineWidthBg,
						h: 167.244094488-lineWidthBg,
						r: val.bbgCornersRound,
						color: val.bbgColor,
						fillOpacity: val.bbgColorOpacity,
						lineWidth: lineWidthBg,
						lineColor: (val.bbgBorderWidth>0) ? val.bbgBorderCornersColor : null,
						strokeOpacity: (val.bbgBorderWidth>0) ? val.bbgBorderCornersColorOpacity : null,
						lineJoin: (val.bbgBorderWidth>0) ? val.bbgBorderCornersLineJoin : null,
						lineCap: (val.bbgBorderWidth>0) ? val.bbgBorderCornersLineCap : null,
						dash: (lineWidthBg>0 && val.bbgBorderCornersDashLength!=0 && val.bbgBorderCornersDashSpace!=0) ? {
							length: parseFloat(val.bbgBorderCornersDashLength),
							space: parseFloat(val.bbgBorderCornersDashSpace),
							phase: val.bbgBorderCornersDashPhase
							} : null,
					},
					{
						type: 'rect',
						x: 11.338582677+lineWidthBox/2,
						y: 12.12204724+lineWidthBox/2,
						w: 229.606299213-lineWidthBox,
						h: 144-lineWidthBox,
						r: val.bboxCornersRound,
						color: val.bboxColor,
						fillOpacity: val.bboxColorOpacity,
						lineWidth: lineWidthBox,
						lineColor: (val.bboxBorderWidth>0) ? val.bboxBorderCornersColor : null,
						strokeOpacity: (val.bboxBorderWidth>0) ? val.bboxBorderCornersColorOpacity : null,
						lineJoin: (val.bboxBorderWidth>0) ? val.bboxBorderCornersLineJoin : null,
						lineCap: (val.bboxBorderWidth>0) ? val.bboxBorderCornersLineCap : null,
						dash: (lineWidthBox>0 && val.bboxBorderCornersDashLength!=0 && val.bboxBorderCornersDashSpace!=0) ? {
							length: parseFloat(val.bboxBorderCornersDashLength),
							space: parseFloat(val.bboxBorderCornersDashSpace),
							phase: val.bboxBorderCornersDashPhase
							} : null,
					}
				].concat(
						catArrow(val.arrowCatColor1,0.6250,1,x,0),
						catArrow(val.arrowCatColor2,0.6250,1,x,24),
						catArrow(val.arrowCatColor3,0.6250,1,x,48),
						catArrow(val.arrowCatColor4,0.6250,1,x,72),
						catArrow(val.arrowCatColor5,0.6250,1,x,96),
						catArrow(val.arrowCatColor6,0.6250,1,x,120),
					),relativePosition: {x: 0,y: 167.244094488*y_relative},
				},leftLogoImage(y_relative),rightLogoImage(y_relative)]
			}
		}
		return {
			width: 252.283464567,
			stack: [canvasStock(0),canvasStock(1),canvasStock(2)]
		}
	}

	// Mierzy długość podanego tekstu przy zadanym stylu np. '6px, Arial'
	function getTextWidth(text, font) {
		const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
		const context = canvas.getContext("2d");
		context.font = font;
		const metrics = context.measureText(text);
		return metrics.width;
	};
	// Sprawdza na ile wierszy zostanie podzielony text
	function checkNumOfLines (text, font, lineWidth,limit) {
		text=text.split(' ')
		let sumLine=1
		let j=0
		for (let i=0; i<text.length; i++) {
			fragment=text.slice(j,i+1).join(' ')
			if(getTextWidth(fragment,font)>lineWidth) {
				sumLine++
				if (sumLine===limit) {break}
				j=i
				i--
			}
		}
		return sumLine
	}
	
	// Dopasowuje padding w zalezności od podziału tekstu na linie
	function adjustPadding(string, lineWidth, firstPadding, secondPadding, thirdPadding) {
		text=string.trim().replace(/\s+/g,' ')
		if (text==='') {text='_'}
		sumLine=checkNumOfLines(text, '6px Roboto medium',lineWidth,3)
		// Przypisuje wartość paddingu w zależności od ilości wierszy
		if (sumLine===1) {
			return firstPadding
			} else if (sumLine===2) {
				return secondPadding
			} else {return thirdPadding}
	}
	
	// Pojedyncza karta (przód)
	function fCard (startQuestion) {
		const paddingZero=function (i, node) {return 0;}
		const paddingAdjust=function (i, node) {return adjustPadding(node.table.body[i][1].text,190,7.9844,4.4688,0.9532)}
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
				vLineWidth: paddingZero,
				paddingLeft: paddingZero,
				paddingRight: paddingZero,
				paddingTop: paddingAdjust,
				paddingBottom: paddingAdjust,
				hLineColor: function (i, node) {return val.ftableLineColor;},

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
		bCard.layout.paddingTop= function (i, node) {return adjustPadding(node.table.body[i][2].text,105,7.9844,4.4688,0.9532)},
		bCard.layout.paddingBottom= bCard.layout.paddingTop,
		bCard.layout.defaultBorder= false
		bCard.layout.hLineColor= function (i, node) {return val.btableLineColor;}
		return bCard
	}
	
	// Pojedyncza strona (przód)
	function pdfFrontPage (page) {
		return {
				style: 'frontCardStyle',
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
	
	// Pojedyncza strona (tył)
	function pdfBackPage(page) {
		return {
				style: 'backCardStyle',
				table: {
					body: [
							[bCard(12+(page-1)*54),bCard(6+(page-1)*54),bCard(0+(page-1)*54)],
							[bCard(30+(page-1)*54),bCard(24+(page-1)*54),bCard(18+(page-1)*54)],
							[bCard(48+(page-1)*54),bCard(42+(page-1)*54),bCard(36+(page-1)*54)]
						]
					},
				layout: pdfFrontPage(page).layout,
				pageBreak: 'after'
		}
	}

	// Importuje pytania z kroku drugiego
	function takeQuestions() {
		let questions=[]
		inputList=questionsContent.childNodes
		for (i=0;i<inputList.length;i++) {
			questions.push([inputList[i].querySelector('.question').value,inputList[i].querySelector('.anserw').value])
		}
		questions.forEach(function(el) {
			if (el[0].length===0) {el[0]=' '}
			if (el[1].length===0) {el[1]=' '}
		})
		return questions
	}
	
	// TA FUNKCJA GENERUJE CAŁY PDF:
	function createCards () {
		questions = takeQuestions()
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
			
			background: function(currentPage) {
			return {
						style: 'bgColumn',
						columns: [bgChoice(currentPage),bgChoice(currentPage),bgChoice(currentPage)]
					}
			},
			
			//Tutaj generuje się główny kontent
			content: contentArray(),
			
			styles: {
				frontCardStyle: {
					color: val.ftextColor,
					fontSize: 6,
					bold: true,
					alignment: 'left'
				},
				backCardStyle: {
					color: val.btextColor,
					fontSize: 6,
					bold: true,
					alignment: 'left'
				},
				bgColumn: {
					columnGap: 0,
					margin: [42.58503937,46.771653543,0,0],
				},
			}
		}
		return cardsDef
	}
	
	function viewLoader (delay) {
		setTimeout(function(){loader.classList.toggle('disable')},delay)
	}

	// Funkcja generująca pdf
	function generateCards () {
		viewLoader (0)
		setTimeout(function () {pdfMake.createPdf(createCards()).download('karty.pdf', viewLoader())},100)
	}
	
});


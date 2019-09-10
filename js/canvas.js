function reloadVariables () {
	return {
// Style strzałek
    arrowCatColor1 : document.querySelector('.arrow1').value,
    arrowCatColor2 : document.querySelector('.arrow2').value,
    arrowCatColor3 : document.querySelector('.arrow3').value,
    arrowCatColor4 : document.querySelector('.arrow4').value,
    arrowCatColor5 : document.querySelector('.arrow5').value,
    arrowCatColor6 : document.querySelector('.arrow6').value,
	arrowBorderStyle : document.querySelector('.arrowBorderStyle').value,
	arrowBorderColor : document.querySelector('.arrowBorderColor').value,

// Tło karty pierwszej:
    fbgColor : document.querySelector('.fbgColor').value,
	fbgColorOpacity : document.querySelector('.fbgColorOpacity').value,
    fbgCornersRound : document.querySelector('.fbgCornersRound').value,
    fbgBorderWidth : document.querySelector('.fbgBorderWidth').value,
    fbgBorderCornersColor : document.querySelector('.fbgBorderCornersColor').value,
	fbgBorderCornersColorOpacity : document.querySelector('.fbgBorderCornersColorOpacity').value,
    fbgBorderCornersLineJoin : document.querySelector('.fbgBorderCornersLineJoin').value,
    fbgBorderCornersLineCap : document.querySelector('.fbgBorderCornersLineCap').value,
	fbgBorderCornersDashSpace : document.querySelector('.fbgBorderCornersDashSpace').value,
    fbgBorderCornersDashLength : document.querySelector('.fbgBorderCornersDashLength').value,
	fbgBorderCornersDashPhase : document.querySelector('.fbgBorderCornersDashPhase').value,

// Box karty pierwszej:
    fboxColor : document.querySelector('.fboxColor').value,
	fboxColorOpacity: document.querySelector('.fboxColorOpacity').value,
    fboxCornersRound : document.querySelector('.fboxCornersRound').value,
    fboxBorderWidth : document.querySelector('.fboxBorderWidth').value,
    fboxBorderCornersColor : document.querySelector('.fboxBorderCornersColor').value,
	fboxBorderCornersColorOpacity : document.querySelector('.fboxBorderCornersColorOpacity').value,
    fboxBorderCornersLineJoin : document.querySelector('.fboxBorderCornersLineJoin').value,
    fboxBorderCornersLineCap : document.querySelector('.fboxBorderCornersLineCap').value,
	fboxBorderCornersDashSpace : document.querySelector('.fboxBorderCornersDashSpace').value,
    fboxBorderCornersDashLength : document.querySelector('.fboxBorderCornersDashLength').value,
	fboxBorderCornersDashPhase : document.querySelector('.fboxBorderCornersDashPhase').value,
// Tabela karty pierwszej
    ftableLineColor : document.querySelector('.ftableLineColor').value,
    ftextColor : document.querySelector('.ftextColor').value,

// Tło karty drugiej:
    bbgColor : document.querySelector('.bbgColor').value,
	bbgColorOpacity : document.querySelector('.bbgColorOpacity').value,
    bbgCornersRound : document.querySelector('.bbgCornersRound').value,
    bbgBorderWidth : document.querySelector('.bbgBorderWidth').value,
    bbgBorderCornersColor : document.querySelector('.bbgBorderCornersColor').value,
	bbgBorderCornersColorOpacity : document.querySelector('.bbgBorderCornersColorOpacity').value,
    bbgBorderCornersLineJoin : document.querySelector('.bbgBorderCornersLineJoin').value,
    bbgBorderCornersLineCap : document.querySelector('.bbgBorderCornersLineCap').value,
	bbgBorderCornersDashSpace : document.querySelector('.bbgBorderCornersDashSpace').value,
    bbgBorderCornersDashLength : document.querySelector('.bbgBorderCornersDashLength').value,
	bbgBorderCornersDashPhase : document.querySelector('.bbgBorderCornersDashPhase').value,
// Box karty drugiej:
    bboxColor : document.querySelector('.bboxColor').value,
	bboxColorOpacity : document.querySelector('.bboxColorOpacity').value,
    bboxCornersRound : document.querySelector('.bboxCornersRound').value,
    bboxBorderWidth : document.querySelector('.bboxBorderWidth').value,
    bboxBorderCornersColor : document.querySelector('.bboxBorderCornersColor').value,
	bboxBorderCornersColorOpacity : document.querySelector('.bboxBorderCornersColorOpacity').value,
    bboxBorderCornersLineJoin : document.querySelector('.bboxBorderCornersLineJoin').value,
    bboxBorderCornersLineCap : document.querySelector('.bboxBorderCornersLineCap').value,
	bboxBorderCornersDashSpace : document.querySelector('.bboxBorderCornersDashSpace').value,
    bboxBorderCornersDashLength : document.querySelector('.bboxBorderCornersDashLength').value,
	bboxBorderCornersDashPhase : document.querySelector('.bboxBorderCornersDashPhase').value,
// Tabela karty drugiej
    btableLineColor : document.querySelector('.btableLineColor').value,
    btextColor : document.querySelector('.btextColor').value,
	}
}

// Asynchroniczna odczytu obrazów na Base64
const toBase64 = file => new Promise((resolve, reject) => {
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = () => resolve(reader.result);
	reader.onerror = error => reject(error);	
});

// definicje obrazów karty drugiej
const leftLogoDefault= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAIrCAMAAAAqWBzLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAATVQTFRFAAAA////WVlZAwMDKSkp0dHRCwsLQEBAFxcXa2trGBgYCgoKPz8/nJycJiYm9PT0AQEBWFhYjY2N6enpQkJCuLi43d3dfX19AgICqqqqxcXFBwcHBgYGBAQEBQUFCAgIDQ0NDAwMKioqDw8PCQkJQUFBGRkZDg4OEBAQHR0dIiIiEhISERERFhYWFRUVFBQUIyMjNjY2GxsbREREMjIyNzc3LCwsKysrHBwcHx8fJCQkLi4uRUVFICAgJycnQ0NDLS0tJSUlGhoaLy8vTU1NT09PMzMzSUlJNTU1Ozs7SEhINDQ0R0dHSkpKPj4+RkZGUFBQOTk5VlZWExMTUVFRKCgoMDAwV1dXPT09Hh4eMTExODg4UlJSTk5OOjo6ISEhVFRUS0tLTExMVVVVPDw8U1NTAAAAb307gwAAAGd0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ABQWungAABF/SURBVHja7J1nY5s8EIAJDomxAxiM9x7xSBw7cfbee++ddOb//4QXMGDAYlqkaV/0rXXrxyedpLvT6YR82Gmootn6j4gtwP23m93XnZ3X3ZvfV7ZgiEUE/fLjZH341+Xs1MHx8fHB7OXhGXt+enFlEYVYYdycrj88723PDZJLk++rXHsfWyJv55dnpg5HT3avLJAQU8jFycjzzNza5OJCxd9sjTcatVqjMd5q+ivtxzGyuD31sLJzbwZCjCH3P0af7wYnH7cmrmvVwlA5l0qluZZK5crBQrU23gzUx9aWD86OXoxFQowgV6dnx/NLdf91LR/MpbMZXzweklrc58umU+VCaXyi/X779LZyY8RBDCD7D3uDq5VWaSiX5gihEKJtHCyTzQWr4/7HzeXLlRd9EKJL+X62d7sYGM+X0xkQokvyZXNDtebC5vbhke4YITqQG/aguBpoFHJZTg7EsPEypYKlZn1tZvhVh4OAKftvG2MVARIygXRIPKjmX51/PrlCrWLQ3+vH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'
const rightLogoDefault= 'data:image/png;base64,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'
let leftLogoImageSrc= leftLogoDefault
let rightLogoImageSrc= rightLogoDefault
const leftLogoImageInput=document.querySelector('.leftLogoImageSrc')
const rightLogoImageInput=document.querySelector('.rightLogoImageSrc')

// Funkcja generująca zaokrąglone prostokąty canvas
function roundedRect(ctx, x ,y, width, height, radius){
    ctx.beginPath();
    ctx.moveTo(x,y+radius);
    ctx.lineTo(x,y+height-radius);
    ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
    ctx.lineTo(x+width-radius,y+height);
    ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
    ctx.lineTo(x+width,y+radius);
    ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
    ctx.lineTo(x+radius,y);
    ctx.quadraticCurveTo(x,y,x,y+radius);
}
// Funkcja generująca zaokrąglone trójkąty canvas
function roundedTriangle(ctx, x ,y, width, height, radius){
    ctx.beginPath();
    ctx.moveTo(x,y+radius);
    ctx.lineTo(x,y+height-radius);
    ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
    ctx.lineTo(x+width,y+height/2+radius/2);
    ctx.quadraticCurveTo(x+width+radius,y+height/2,x+width,y+height/2-radius/2);
    ctx.lineTo(x+radius,y);
    ctx.quadraticCurveTo(x,y,x,y+radius);
}

// Dodaje preźroczystość do koloru i konwertuje na rgba
function hexToRgba(hexColor,opacity) {
	hexColor = hexColor.replace('#','');
    r = parseInt(hexColor.substring(0,2), 16);
    g = parseInt(hexColor.substring(2,4), 16);
    b = parseInt(hexColor.substring(4,6), 16);
    rgbaColor = 'rgba('+r+','+g+','+b+','+opacity+')';
    return rgbaColor;
}

// Definicje obiektów formularzy wymagających akcji
const arrowLabel1 = document.querySelector('.arrowLabel1')
const arrowLabel2 = document.querySelector('.arrowLabel2')
const arrowLabel3 = document.querySelector('.arrowLabel3')
const arrowLabel4 = document.querySelector('.arrowLabel4')
const arrowLabel5 = document.querySelector('.arrowLabel5')
const arrowLabel6 = document.querySelector('.arrowLabel6')

// Funkcja śledzenia aktywności w formularzu stylu
document.querySelector('.styleContent').addEventListener('input', async function() {
	val= await reloadVariables()
	if (leftLogoImageInput.value != "") {
		leftLogoImageSrc = await toBase64(document.querySelector('.leftLogoImageSrc').files[0])
	} else {true}
	if (rightLogoImageInput.value != "") {
		rightLogoImageSrc = await toBase64(document.querySelector('.rightLogoImageSrc').files[0])
	} else {true}
	const redraw=await drawCanvas()
	
    arrowLabel1.style.setProperty('color', val.arrowCatColor1)
	arrowLabel2.style.setProperty('color', val.arrowCatColor2)
	arrowLabel3.style.setProperty('color', val.arrowCatColor3)
	arrowLabel4.style.setProperty('color', val.arrowCatColor4)
	arrowLabel5.style.setProperty('color', val.arrowCatColor5)
	arrowLabel6.style.setProperty('color', val.arrowCatColor6)
	drawCanvas()
})

// Rysuje cały canvas
let val=reloadVariables()
function drawCanvas(){
	// RYSUJE CANVAS1
	const canvasFront = document.querySelector('.canvasFront');
		const ctx = canvasFront.getContext('2d');
		ctx.clearRect(0, 0, canvasFront.width, canvasFront.height)
		ctx.save()

	// TŁO karty przedniej
		ctx.fillStyle = hexToRgba(val.fbgColor, val.fbgColorOpacity)
			roundedRect(ctx,val.fbgBorderWidth/2,val.fbgBorderWidth/2,252-val.fbgBorderWidth,167-val.fbgBorderWidth,Math.ceil(val.fbgCornersRound))
		ctx.fill()
		if(val.fbgBorderWidth>0) {
			ctx.strokeStyle = hexToRgba(val.fbgBorderCornersColor, val.fbgBorderCornersColorOpacity)
			ctx.lineWidth= val.fbgBorderWidth
			ctx.lineCap= val.fbgBorderCornersLineCap
			ctx.lineJoin= val.fbgBorderCornersLineJoin
			ctx.setLineDash([val.fbgBorderCornersDashLength, val.fbgBorderCornersDashSpace]);
			ctx.lineDashOffset= val.fbgBorderCornersDashPhase
			roundedRect(ctx,val.fbgBorderWidth/2,val.fbgBorderWidth/2,252-val.fbgBorderWidth,167-val.fbgBorderWidth,Math.ceil(val.fbgCornersRound))
			ctx.closePath()
			ctx.stroke()
		}
	// BOX karty przedniej
		ctx.restore()
		ctx.fillStyle = hexToRgba(val.fboxColor, val.fboxColorOpacity)
		roundedRect(ctx,11,12,229,144,Math.ceil(val.fboxCornersRound))
		ctx.fill()
		if(val.fboxBorderWidth>0) {
			ctx.strokeStyle = hexToRgba(val.fboxBorderCornersColor, val.fboxBorderCornersColorOpacity)
			ctx.lineWidth= val.fboxBorderWidth
			ctx.lineCap= val.fboxBorderCornersLineCap
			ctx.lineJoin= val.fboxBorderCornersLineJoin
			ctx.setLineDash([val.fboxBorderCornersDashLength, val.fboxBorderCornersDashSpace]);
			ctx.lineDashOffset=val.fboxBorderCornersDashPhase
			roundedRect(ctx,11+val.fboxBorderWidth/2,12+val.fboxBorderWidth/2,229-val.fboxBorderWidth,144-val.fboxBorderWidth,Math.ceil(val.fboxCornersRound))
			ctx.stroke()
		}
	// Strzałki karty przedniej
		ctx.restore()
		ctx.shadowColor = val.arrowBorderColor
		ctx.shadowBlur = (val.arrowBorderStyle != 'blask') ? 0 : 3
		ctx.setLineDash([0,0])
		ctx.fillStyle = val.arrowCatColor1
		ctx.strokeStyle = val.arrowBorderColor
		ctx.lineWidth=2
		roundedTriangle(ctx,22,15,19,18,3)
		ctx.stroke()
		ctx.fill();
		ctx.fillStyle = val.arrowCatColor2
		roundedTriangle(ctx,22,39,19,18,3)
		ctx.stroke()
		ctx.fill();
		ctx.fillStyle = val.arrowCatColor3
		roundedTriangle(ctx,22,63,19,18,3)
		ctx.stroke()
		ctx.fill();
		ctx.fillStyle = val.arrowCatColor4
		roundedTriangle(ctx,22,87,19,18,3)
		ctx.stroke()
		ctx.fill();
		ctx.fillStyle = val.arrowCatColor5
		roundedTriangle(ctx,22,111,19,18,3)
		ctx.stroke()
		ctx.fill();
		ctx.fillStyle = val.arrowCatColor6
		roundedTriangle(ctx,22,135,19,18,3)
		ctx.stroke()
		ctx.fill();
	// Linie tabeli karty przedniej
		ctx.restore()
		ctx.setLineDash([0,0])
		ctx.shadowBlur = 0
		ctx.strokeStyle=val.ftableLineColor
		ctx.lineWidth=1
		ctx.beginPath();ctx.moveTo(11,36);ctx.lineTo(241,36);ctx.moveTo(241,60);ctx.lineTo(11,60);ctx.moveTo(11,84);
		ctx.lineTo(241,84);ctx.moveTo(241,108);ctx.lineTo(11,108);ctx.moveTo(11,132);ctx.lineTo(241,132);
		ctx.stroke();
	// Przykłądowy tekst karty przedniej
		ctx.restore()
		ctx.fillStyle = val.ftextColor
		ctx.font = "6pt Roboto medium";
		ctx.fillText('To jest przykładowa treść do pytania nr 1', 51, 27);
		ctx.fillText('To jest przykładowa treść do pytania nr 2', 51, 51);
		ctx.fillText('To jest przykładowa treść do pytania nr 3', 51, 75);
		ctx.fillText('To jest przykładowa treść do pytania nr 4', 51, 99);
		ctx.fillText('To jest przykładowa treść do pytania nr 5', 51,123);
		ctx.fillText('To jest przykładowa treść do pytania nr 6', 51,147);

	// RYSUJE canvasBack ---------------------------------------------------------------------------------------------------------------
	const canvasBack = document.querySelector('.canvasBack');
		const ctx2 = canvasBack.getContext('2d');
		ctx2.clearRect(0, 0, canvasBack.width, canvasBack.height)
		ctx2.save()
	// Tło karty drugiej
		ctx2.restore()
		ctx2.fillStyle = hexToRgba(val.bbgColor, val.bbgColorOpacity) 
			roundedRect(ctx2,val.bbgBorderWidth/2,val.bbgBorderWidth/2,252-val.bbgBorderWidth,167-val.bbgBorderWidth,Math.ceil(val.bbgCornersRound))
		ctx2.fill()
		if(val.bbgBorderWidth>0) {
			ctx2.strokeStyle= hexToRgba(val.bbgBorderCornersColor, val.bbgBorderCornersColorOpacity)
			ctx2.lineWidth= val.bbgBorderWidth
			ctx2.lineCap= val.bbgBorderCornersLineCap
			ctx2.lineJoin= val.bbgBorderCornersLineJoin
			ctx2.setLineDash([val.bbgBorderCornersDashLength, val.bbgBorderCornersDashSpace]);
			ctx2.lineDashOffset=val.bbgBorderCornersDashPhase
			roundedRect(ctx2,val.bbgBorderWidth/2,val.bbgBorderWidth/2,252-val.bbgBorderWidth,167-val.bbgBorderWidth,Math.ceil(val.bbgCornersRound))
			ctx2.stroke()
		}
	// BOX karty drugiej
		ctx2.restore()
		ctx2.fillStyle = hexToRgba(val.bboxColor, val.bboxColorOpacity)
		roundedRect(ctx2,11,12,229,144,Math.ceil(val.bboxCornersRound))
		ctx2.fill()
		if(val.bboxBorderWidth>0) {
			ctx2.strokeStyle = hexToRgba(val.bboxBorderCornersColor, val.bboxBorderCornersColorOpacity)
			ctx2.lineWidth= val.bboxBorderWidth
			ctx2.lineCap= val.bboxBorderCornersLineCap
			ctx2.lineJoin= val.bboxBorderCornersLineJoin
			ctx2.setLineDash([val.bboxBorderCornersDashLength, val.bboxBorderCornersDashSpace]);
			ctx2.lineDashOffset= val.bboxBorderCornersDashPhase
			roundedRect(ctx2,11+val.bboxBorderWidth/2,12+val.bboxBorderWidth/2,229-val.bboxBorderWidth,144-val.bboxBorderWidth,Math.ceil(val.bboxCornersRound))
			ctx2.stroke()
		}
	// Strzałki karty drugiej
		ctx2.restore()
		ctx2.shadowColor = val.arrowBorderColor
		ctx2.shadowBlur = (val.arrowBorderStyle != 'blask') ? 0 : 3
		ctx2.setLineDash([0,0])
		ctx2.fillStyle = val.arrowCatColor1
		ctx2.strokeStyle = val.arrowBorderColor
		ctx2.lineWidth=2
		roundedTriangle(ctx2,60,15,19,18,3)
		ctx2.stroke()
		ctx2.fill();
		ctx2.fillStyle = val.arrowCatColor2
		roundedTriangle(ctx2,60,39,19,18,3)
		ctx2.stroke()
		ctx2.fill();
		ctx2.fillStyle = val.arrowCatColor3
		roundedTriangle(ctx2,60,63,19,18,3)
		ctx2.stroke()
		ctx2.fill();
		ctx2.fillStyle = val.arrowCatColor4
		roundedTriangle(ctx2,60,87,19,18,3)
		ctx2.stroke()
		ctx2.fill();
		ctx2.fillStyle = val.arrowCatColor5
		roundedTriangle(ctx2,60,111,19,18,3)
		ctx2.stroke()
		ctx2.fill();
		ctx2.fillStyle = val.arrowCatColor6
		roundedTriangle(ctx2,60,135,19,18,3)
		ctx2.stroke()
		ctx2.fill();
	// Linie tabeli karty drugiej
		ctx2.restore()
		ctx2.shadowBlur = 0
		ctx2.setLineDash([0,0])
		ctx2.strokeStyle=val.btableLineColor
		ctx2.lineWidth=1
		ctx2.beginPath();ctx2.moveTo(49,36);ctx2.lineTo(193,36);ctx2.moveTo(193,60);ctx2.lineTo(49,60);ctx2.moveTo(49,84);
		ctx2.lineTo(193,84);ctx2.moveTo(193,108);ctx2.lineTo(49,108);ctx2.moveTo(49,132);ctx2.lineTo(193,132);
		ctx2.stroke();
	// Przykłądowy tekst karty drugiej
		ctx2.restore()
		ctx2.fillStyle = val.btextColor
		ctx2.font = "6pt Roboto medium";
		ctx2.fillText('To jest odpowiedź nr 1', 88, 27);
		ctx2.fillText('To jest odpowiedź nr 2', 88, 51);
		ctx2.fillText('To jest odpowiedź nr 3', 88, 75);
		ctx2.fillText('To jest odpowiedź nr 4', 88, 99);
		ctx2.fillText('To jest odpowiedź nr 5', 88,123);
		ctx2.fillText('To jest odpowiedź nr 6', 88,147);
	// Zdjęcia karty drugiej
		ctx2.restore()
		leftImage=new Image()
		leftImage.src = leftLogoImageSrc
		ctx2.drawImage(leftImage, 18, 18, 24,131)
		rightImage=new Image()
		rightImage.src = rightLogoImageSrc
		ctx2.drawImage(rightImage, 196, 12, 44,144)
		
}
drawCanvas()

	
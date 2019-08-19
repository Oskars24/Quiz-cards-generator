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
let leftLogoImageSrc= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAIrCAMAAAAqWBzLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAnxQTFRFAAAA////AwMDWVlZKSkpAQEBAgICCwsLFxcXQEBACgoKGBgYBQUFPz8/DAwMCAgIBgYGDw8PBwcHGRkZHh4eCQkJBAQELCwsDg4OFhYWMTExJycnEREREBAQ29vbDQ0NIyMjSUlJHBwcExMTPT09EhISKysrFRUVGxsbFBQUICAgHR0dODg4KioqHx8fIiIiMjIyJiYmsbGxJCQkKCgo2traLS0tGhoaQ0NDPj4+QkJC7e3tMzMzJSUlMDAwLy8v9vb2Li4uQUFBNzc3PDw8Ozs7i4uLNjY2OTk5NTU1Ojo6ISEh19fXRUVFREREs7OzSEhINDQ0R0dHRkZG1tbWsLCw5OTkkJCQ0dHRx8fHSkpKVFRUTExMrq6upKSkUVFR2dnZxsbG2NjYT09PUFBQVlZWTU1NUlJSr6+vd3d3mJiYsrKyS0tLiYmJu7u7hoaGV1dXvb29VVVVampqfHx8bW1th4eHWlpaxMTEqKio0NDQ4+Pjp6enWFhYbGxsTk5OvLy8XV1df39/l5eXU1NTaGhoxcXFjY2NiIiIoaGhhISEjIyM1dXVo6OjgICAioqKa2trpaWlg4ODubm5Z2dnnJycrKysqampra2thYWFZmZmj4+Pmpqaz8/Pfn5+aWlpW1tbeXl5eHh4bm5umZmZe3t7YGBgurq6ZGRkqqqqcHBwcnJy6+vrnZ2ddHR0enp6jo6OY2NjlpaWlZWVXFxc7OzslJSUzMzMoqKikpKSk5OTzs7Ovr6+c3Nzw8PDYmJi4uLiX19ffX19tbW1q6urdnZ2pqamgoKCcXFxy8vLZWVlXl5ewsLCdXV1YWFhwcHBnp6et7e3gYGBAAAAWBpjTwAAANR0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////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'
let rightLogoImageSrc= 'data:image/png;base64,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'
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
const fbgBorder = document.querySelector('.fbgBorder')
const fboxTableBorder = document.querySelector('.fboxTableBorder')
const bbgBorder = document.querySelector('.bbgBorder')
const bboxTableBorder = document.querySelector('.bboxTableBorder')

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
	
	if (val.fbgBorderWidth != 0) {fbgBorder.classList.remove('disable')} else {fbgBorder.classList.add('disable')}
	if (val.fboxBorderWidth != 0) {fboxTableBorder.classList.remove('disable')} else {fboxTableBorder.classList.add('disable')}
	if (val.bbgBorderWidth != 0) {bbgBorder.classList.remove('disable')} else {bbgBorder.classList.add('disable')}
	if (val.bboxBorderWidth != 0) {bboxTableBorder.classList.remove('disable')} else {bboxTableBorder.classList.add('disable')}
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
		ctx.font = "6pt Roboto-Regular";
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
		ctx2.font = "6pt Roboto-Regular";
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
		ctx2.drawImage(rightImage, 196, 12, 44,142)
		
}
drawCanvas()

	
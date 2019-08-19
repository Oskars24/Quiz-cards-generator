document.addEventListener("DOMContentLoaded", function() {
	function reloadVariables () {
		return {
	// Kolory strzałek
		arrowCatColor1 : document.querySelector('.arrow1').value,
		arrowCatColor2 : document.querySelector('.arrow2').value,
		arrowCatColor3 : document.querySelector('.arrow3').value,
		arrowCatColor4 : document.querySelector('.arrow4').value,
		arrowCatColor5 : document.querySelector('.arrow5').value,
		arrowCatColor6 : document.querySelector('.arrow6').value,
	
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
	// Tabela karty drugiej
		btableLineColor : document.querySelector('.btableLineColor').value,
		btextColor : document.querySelector('.btextColor').value,
		}
	}
	
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
	
	const arrowLabel1 = document.querySelector('.arrowLabel1')
	const arrowLabel2 = document.querySelector('.arrowLabel2')
	const arrowLabel3 = document.querySelector('.arrowLabel3')
	const arrowLabel4 = document.querySelector('.arrowLabel4')
	const arrowLabel5 = document.querySelector('.arrowLabel5')
	const arrowLabel6 = document.querySelector('.arrowLabel6')
	
	document.querySelector('.styleContent').addEventListener('input', function() {
		val=reloadVariables()
		//console.log(val.fbgColor)
		drawCanvas()
		arrowLabel1.style.setProperty('color', val.arrowCatColor1)
		arrowLabel2.style.setProperty('color', val.arrowCatColor2)
		arrowLabel3.style.setProperty('color', val.arrowCatColor3)
		arrowLabel4.style.setProperty('color', val.arrowCatColor4)
		arrowLabel5.style.setProperty('color', val.arrowCatColor5)
		arrowLabel6.style.setProperty('color', val.arrowCatColor6)
		
	})
	
	// Rysuje cały canvas
	let val=reloadVariables()
	//console.log(val.fbgColor)
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
				roundedRect(ctx,11+val.fboxBorderWidth/2,12+val.fboxBorderWidth/2,229-val.fboxBorderWidth,144-val.fboxBorderWidth,Math.ceil(val.fboxCornersRound))
				ctx.stroke()
			}
		// Strzałki karty przedniej
			ctx.restore()
			ctx.shadowColor = 'white'
			ctx.shadowBlur = 4
			ctx.setLineDash([0,0])
			ctx.fillStyle = val.arrowCatColor1
			ctx.strokeStyle = "white"
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
			ctx.fillText('To jest przykładowa treść pytania nr 2', 51, 51);
			ctx.fillText('To jest przykładowa treść pytania nr 3', 51, 75);
			ctx.fillText('To jest przykładowa treść pytania nr 4', 51, 99);
			ctx.fillText('To jest przykładowa treść pytania nr 5', 51,123);
			ctx.fillText('To jest przykładowa treść pytania nr 6', 51,147);
	
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
				roundedRect(ctx2,11+val.bboxBorderWidth/2,12+val.bboxBorderWidth/2,229-val.bboxBorderWidth,144-val.bboxBorderWidth,Math.ceil(val.bboxCornersRound))
				ctx2.stroke()
			}
		// Strzałki karty drugiej
			ctx2.restore()
			ctx2.shadowColor = 'white'
			ctx2.shadowBlur = 4
			ctx2.setLineDash([0,0])
			ctx2.fillStyle = val.arrowCatColor1
			ctx2.strokeStyle = "white"
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
			ctx2.fillText('To jest odpowiedź pytania nr 1', 88, 27);
			ctx2.fillText('To jest odpowiedź pytania nr 2', 88, 51);
			ctx2.fillText('To jest odpowiedź pytania nr 3', 88, 75);
			ctx2.fillText('To jest odpowiedź pytania nr 4', 88, 99);
			ctx2.fillText('To jest odpowiedź pytania nr 5', 88,123);
			ctx2.fillText('To jest odpowiedź pytania nr 6', 88,147);
	}
	drawCanvas()
	})
		
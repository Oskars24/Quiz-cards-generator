document.addEventListener("DOMContentLoaded", function() {

function reloadVariables () {
	return {
// Kolory strzałek
    arrowCatColor1 : '#780d97',
    let arrowCatColor2 : '#0391f1',
    let arrowCatColor3 : '#e90687',
    let arrowCatColor4 : '#f75116',
    let arrowCatColor5 : '#fddb01',
    let arrowCatColor6 : '#06bb69',

// Tło karty pierwszej:
    let fbgColor = "#0073d6"
    let fbgCornersRound = 12.5
    let fbgBorderWidth = 0
    let fbgBorderCornersColor = "#000"
    let fbgBorderCornersLineJoin = 'round'
    let fbgBorderCornersLineCap = 'round'
    let fbgBorderCornersDashLength = null
    let fbgBorderCornersDashSpace = null
// Box karty pierwszej:
    let fboxColor = "#0383e8"
    let fboxCornersRound = 0
    let fboxBorderWidth = 0
    let fboxBorderCornersColor = null
    let fboxBorderCornersLineJoin = null
    let fboxBorderCornersLineCap = null
    let fboxBorderCornersDashLength = null
    let fboxBorderCornersDashSpace = null
// Tabela karty pierwszej
    let ftableLineColor = "#003b8f"
    let ftextColor = "#fff"

// Tło karty drugiej:
    let bbgColor = "#0073d6"
    let bbgCornersRound = 12.5
    let bbgBorderWidth = 0
    let bbgBorderCornersColor = "#000"
    let bbgBorderCornersLineJoin = 'round'
    let bbgBorderCornersLineCap = 'round'
    let bbgBorderCornersDashLength = null
    let bbgBorderCornersDashSpace = null
// Box karty drugiej:
    let bboxColor = "#0383e8"
    let bboxCornersRound = 0
    let bboxBorderWidth = 0
    let bboxBorderCornersColor = null
    let bboxBorderCornersLineJoin = null
    let bboxBorderCornersLineCap = null
    let bboxBorderCornersDashLength = null
    let bboxBorderCornersDashSpace = null
// Tabela karty drugiej
    let btableLineColor = "#003b8f"
    let btextColor = "#fff"
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

const arrowLabel1 = document.querySelector('.arrowLabel1')
const arrowLabel2 = document.querySelector('.arrowLabel2')
const arrowLabel3 = document.querySelector('.arrowLabel3')
const arrowLabel4 = document.querySelector('.arrowLabel4')
const arrowLabel5 = document.querySelector('.arrowLabel5')
const arrowLabel6 = document.querySelector('.arrowLabel6')

document.querySelector('.styleContent').addEventListener('input', function() {
	const arrowColor1 = document.querySelector('.arrow1').value
	const arrowColor2 = document.querySelector('.arrow2').value
	const arrowColor3 = document.querySelector('.arrow3').value
	const arrowColor4 = document.querySelector('.arrow4').value
	const arrowColor5 = document.querySelector('.arrow5').value
	const arrowColor6 = document.querySelector('.arrow6').value
    arrowLabel1.style.setProperty('color', arrowColor1)
	arrowLabel2.style.setProperty('color', arrowColor2)
	arrowLabel3.style.setProperty('color', arrowColor3)
	arrowLabel4.style.setProperty('color', arrowColor4)
	arrowLabel5.style.setProperty('color', arrowColor5)
	arrowLabel6.style.setProperty('color', arrowColor6)
	arrowCatColor1=arrowColor1
	arrowCatColor2=arrowColor2
	arrowCatColor3=arrowColor3
	arrowCatColor4=arrowColor4
	arrowCatColor5=arrowColor5
	arrowCatColor6=arrowColor6
	drawCanvas()
})

// Rysuje cały canvas
function drawCanvas(){
	reloadVariables()
	// RYSUJE CANVAS1
	const canvasFront = document.querySelector('.canvasFront');
			const ctx = canvasFront.getContext('2d');
		ctx.save()

	// TŁO karty przedniej
		ctx.fillStyle = fbgColor  
			roundedRect(ctx,fbgBorderWidth/2,fbgBorderWidth/2,252-fbgBorderWidth,167-fbgBorderWidth,fbgCornersRound)
		ctx.fill()
		if(fbgBorderWidth>0) {
			ctx.strokeStyle = fbgBorderCornersColor
			ctx.lineWidth= fbgBorderWidth
			ctx.lineCap= fbgBorderCornersLineCap
			ctx.lineJoin= fbgBorderCornersLineJoin
			ctx.setLineDash([fbgBorderCornersDashLength, fbgBorderCornersDashSpace]);
			roundedRect(ctx,fbgBorderWidth/2,fbgBorderWidth/2,252-fbgBorderWidth,167-fbgBorderWidth,fbgCornersRound)
			ctx.stroke()
		}
	// BOX karty przedniej
		ctx.restore()
		ctx.fillStyle = fboxColor
		roundedRect(ctx,11,12,229,144,fboxCornersRound)
		ctx.fill()
		if(fboxBorderWidth>0) {
			ctx.strokeStyle = fboxBorderCornersColor
			ctx.lineWidth= fboxBorderWidth
			ctx.lineCap= fboxBorderCornersLineCap
			ctx.lineJoin= fboxBorderCornersLineJoin
			ctx.setLineDash([fboxBorderCornersDashLength, fboxBorderCornersDashSpace]);
			roundedRect(ctx,11+fboxBorderWidth/2,12+fboxBorderWidth/2,229-fboxBorderWidth,144-fboxBorderWidth,fboxCornersRound)
			ctx.stroke()
		}
	// Strzałki karty przedniej
		ctx.restore()
		ctx.shadowColor = 'white'
		ctx.shadowBlur = 4
		ctx.fillStyle = arrowCatColor1
		ctx.strokeStyle = "white"
		ctx.lineWidth=2
		roundedTriangle(ctx,22,15,19,18,3)
		ctx.stroke()
		ctx.fill();
		ctx.fillStyle = arrowCatColor2
		roundedTriangle(ctx,22,39,19,18,3)
		ctx.stroke()
		ctx.fill();
		ctx.fillStyle = arrowCatColor3
		roundedTriangle(ctx,22,63,19,18,3)
		ctx.stroke()
		ctx.fill();
		ctx.fillStyle = arrowCatColor4
		roundedTriangle(ctx,22,87,19,18,3)
		ctx.stroke()
		ctx.fill();
		ctx.fillStyle = arrowCatColor5
		roundedTriangle(ctx,22,111,19,18,3)
		ctx.stroke()
		ctx.fill();
		ctx.fillStyle = arrowCatColor6
		roundedTriangle(ctx,22,135,19,18,3)
		ctx.stroke()
		ctx.fill();
	// Linie tabeli karty przedniej
		ctx.restore()
		ctx.shadowBlur = 0
		ctx.strokeStyle=ftableLineColor
		ctx.lineWidth=1
		ctx.beginPath();ctx.moveTo(11,36);ctx.lineTo(241,36);ctx.moveTo(241,60);ctx.lineTo(11,60);ctx.moveTo(11,84);
		ctx.lineTo(241,84);ctx.moveTo(241,108);ctx.lineTo(11,108);ctx.moveTo(11,132);ctx.lineTo(241,132);
		ctx.stroke();
	// Przykłądowy tekst karty przedniej
		ctx.restore()
		ctx.fillStyle = ftextColor
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
		ctx2.save()
	// Tło karty drugiej
		ctx2.restore()
		ctx2.fillStyle = bbgColor  
			roundedRect(ctx2,bbgBorderWidth/2,bbgBorderWidth/2,252-bbgBorderWidth,167-bbgBorderWidth,bbgCornersRound)
		ctx2.fill()
		if(bbgBorderWidth>0) {
			ctx2.strokeStyle= bbgBorderCornersColor
			ctx2.lineWidth= bbgBorderWidth
			ctx2.lineCap= bbgBorderCornersLineCap
			ctx2.lineJoin= bbgBorderCornersLineJoin
			ctx2.setLineDash([bbgBorderCornersDashLength, bbgBorderCornersDashSpace]);
			roundedRect(ctx2,bbgBorderWidth/2,bbgBorderWidth/2,252-bbgBorderWidth,167-bbgBorderWidth,bbgCornersRound)
			ctx2.stroke()
		}
	// BOX karty drugiej
		ctx2.restore()
		ctx2.fillStyle = bboxColor
		roundedRect(ctx2,11,12,229,144,bboxCornersRound)
		ctx2.fill()
		if(bboxBorderWidth>0) {
			ctx2.strokeStyle = bboxBorderCornersColor
			ctx2.lineWidth= bboxBorderWidth
			ctx2.lineCap= bboxBorderCornersLineCap
			ctx2.lineJoin= bboxBorderCornersLineJoin
			ctx2.setLineDash([bboxBorderCornersDashLength, bboxBorderCornersDashSpace]);
			roundedRect(ctx2,11+bboxBorderWidth/2,12+bboxBorderWidth/2,229-bboxBorderWidth,144-bboxBorderWidth,bboxCornersRound)
			ctx2.stroke()
		}
	// Strzałki karty drugiej
		ctx2.restore()
		ctx2.shadowColor = 'white'
		ctx2.shadowBlur = 4
		ctx2.fillStyle = arrowCatColor1
		ctx2.strokeStyle = "white"
		ctx2.lineWidth=2
		roundedTriangle(ctx2,60,15,19,18,3)
		ctx2.stroke()
		ctx2.fill();
		ctx2.fillStyle = arrowCatColor2
		roundedTriangle(ctx2,60,39,19,18,3)
		ctx2.stroke()
		ctx2.fill();
		ctx2.fillStyle = arrowCatColor3
		roundedTriangle(ctx2,60,63,19,18,3)
		ctx2.stroke()
		ctx2.fill();
		ctx2.fillStyle = arrowCatColor4
		roundedTriangle(ctx2,60,87,19,18,3)
		ctx2.stroke()
		ctx2.fill();
		ctx2.fillStyle = arrowCatColor5
		roundedTriangle(ctx2,60,111,19,18,3)
		ctx2.stroke()
		ctx2.fill();
		ctx2.fillStyle = arrowCatColor6
		roundedTriangle(ctx2,60,135,19,18,3)
		ctx2.stroke()
		ctx2.fill();
	// Linie tabeli karty drugiej
		ctx2.restore()
		ctx2.shadowBlur = 0
		ctx2.strokeStyle=btableLineColor
		ctx2.lineWidth=1
		ctx2.beginPath();ctx2.moveTo(49,36);ctx2.lineTo(193,36);ctx2.moveTo(193,60);ctx2.lineTo(49,60);ctx2.moveTo(49,84);
		ctx2.lineTo(193,84);ctx2.moveTo(193,108);ctx2.lineTo(49,108);ctx2.moveTo(49,132);ctx2.lineTo(193,132);
		ctx2.stroke();
	// Przykłądowy tekst karty drugiej
		ctx2.restore()
		ctx2.fillStyle = btextColor
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
	
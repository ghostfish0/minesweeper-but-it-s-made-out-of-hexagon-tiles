let gradientOutline	= 1;
class Pattern {
	constructor(num, margin, xonRate, yonRate) {
		this.num = num;
		this.margin = margin;
		this.unitlength = (width - 2*this.margin) / this.num;
		this.xonRate = xonRate;
		this.yonRate = yonRate;
		this.xoffset = [];
		this.yoffset = [];

	}

	generate() {
	  for(let j = 0; j < (width - 2*this.margin) / this.unitlength; j++) {
	    this.xoffset.push(random(1) < this.xonRate);
	  }

	  for(let i = 0; i < (height - 2*this.margin) / this.unitlength; i++) {
	    this.yoffset.push(random(1) < this.yonRate);
	  }

	}

	drawOutline() {
		// stroke(color(255, 255, 255));
	  	strokeWeight(10);
	 	for(let i = 0; i < (height - 2*this.margin) / this.unitlength; i++) {
		    stroke(255, 0, 0);

		    if (!this.xoffset[i]) {
		    	for(let j = 0; j < (width - 2*this.margin) / this.unitlength; j+=2) {
		        	if (gradientOutline)
		          			gradientLine(this.margin + i * this.unitlength, this.margin + j * this.unitlength, this.margin + i * this.unitlength, this.margin + (j + 1) * this.unitlength, colorA, colorB, 10);
	        		else
		    		    	line(this.margin + i * this.unitlength, this.margin + j * this.unitlength, this.margin + i * this.unitlength, this.margin + (j + 1) * this.unitlength);
		      }
		    }
		    else {
		      	for(let j = 0; j < (width - 2*this.margin) / this.unitlength - 2; j+=2) {
		        	if (gradientOutline)
		        		  	gradientLine(this.margin + i * this.unitlength, this.margin + (j + 1) * this.unitlength, this.margin + i * this.unitlength, this.margin + (j + 2) * this.unitlength, colorA, colorB, 10);
		        	else
			          	line(this.margin + i * this.unitlength, this.margin + (j + 1) * this.unitlength, this.margin + i * this.unitlength, this.margin + (j + 2) * this.unitlength);
		      }
		    }
	  	}

	  	for(let j = 0; j < (width - 2*this.margin) / this.unitlength; j++) {
	  	  	stroke(0, 0, 255);
	  	  	if (!this.yoffset[j]) {
	  	    	for(let i = 0; i < (height - 2*this.margin) / this.unitlength; i+=2) {
		  	      	if (gradientOutline)
		  	        	gradientLine(this.margin + i * this.unitlength, this.margin + j * this.unitlength, this.margin + (i + 1) * this.unitlength, this.margin + j * this.unitlength, colorA, colorB, 10);
		  	      	else
		  	        	line(this.margin + i * this.unitlength, this.margin + j * this.unitlength, this.margin + (i + 1) * this.unitlength, this.margin + j * this.unitlength);
	  	    }
	  	}
	    else {
	    	for(let i = 0; i < (height - 2*this.margin) / this.unitlength - 2; i+=2) {
	    		if (gradientOutline)
	          		gradientLine(this.margin + (i + 1) * this.unitlength, this.margin + j * this.unitlength, this.margin + (i + 2) * this.unitlength, this.margin + j * this.unitlength, colorA, colorB, 10);
	        	else
	          		line(this.margin + (i + 1) * this.unitlength, this.margin + j * this.unitlength, this.margin + (i + 2) * this.unitlength, this.margin + j * this.unitlength);
	      }
	    }

	}
		if (gradientOutline) {
		    gradientLine(this.margin, this.margin, this.margin, height - this.margin, colorA, colorB, 10);
		    gradientLine(this.margin, this.margin, width - this.margin, this.margin, colorA, colorB, 10);
		    gradientLine(width - this.margin, height - this.margin, this.margin, height - this.margin, colorA, colorB, 10);
		    gradientLine(width - this.margin, height - this.margin, width - this.margin, this.margin, colorA, colorB, 10);
	  	}
	  	else {
		    stroke(255, 0, 255);
		    line(this.margin, this.margin, this.margin, height - this.margin);
		    line(this.margin, this.margin, width - this.margin, this.margin);
		    line(width - this.margin, height - this.margin, this.margin, height - this.margin);
		    line(width - this.margin, height - this.margin, width - this.margin, this.margin);    
		}
	}

	drawFill() {
		
	}

}
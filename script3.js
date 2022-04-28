 "use strict"
//will represent same data in a pie chart and a bar chart
           function loadJSON() {
                
                $.getJSON( "data.json", 
                    function( dataReturned ) {
                      
                      doPie(dataReturned);
                      
                      doBar( dataReturned );
                      
                    }
                );
            }
function doPie(data) {
 
                var canvas1 = document.getElementById('chart1');
                
                var context1 = canvas1.getContext('2d');
                
                
                var centerX = canvas1.width / 2;
                var centerY = canvas1.height / 2;
                var radius = Math.min(canvas1.width, canvas1.height) / 2;
                var lastPosition = 0, total = 0, i, pie, x, y;

                // percentage for slices
                for ( i = 0; i < data.length; i++ ) {
                    total += data[i].val;
                
                }
                
                
                for ( i = 0; i < data.length; i++ ) {
                    
                    context1.beginPath();
                    context1.moveTo( centerX, centerY );
                    pie = Math.PI * 2 * ( data[i].val / total );
                    context1.arc( centerX, centerY, radius, lastPosition, lastPosition + pie, false );
                    context1.lineTo( centerX, centerY );
                  context1.fillStyle = data[i].color;
                    context1.fill();
                  
                    
                    // draw text label for segment at 75% of the circle radius in middle of slice
                    x = centerX + ( radius * .75) * Math.cos( lastPosition + ( pie / 2 ) );
                    y = centerY + ( radius * .75) * Math.sin( lastPosition + ( pie / 2 ) );
                    context1.fillStyle = "white";
                    context1.font = "bold 16px Arial";
                    context1.fillText( data[i].val + " " + data[i].text , x-25, y);
                    
                    // increment angle around circle
                    lastPosition += pie;
                  
                }
            }//end of doPie()
            
            
           function doBar(data) {
              
                var canvas2 = document.getElementById('chart2');
                var context2 = canvas2.getContext('2d');
                
                var startX = (canvas2.width);
                var bottomY = canvas2.height;
                var maxVal = getMax(data);
                var scaleY = bottomY / maxVal;
                var scaleX = startX / (data.length);
                var i, height, lastX = 0;
                
                // axis scale lines
                for (i=0; i <= maxVal; i = i + maxVal / 10) {
                    context2.beginPath();
                    context2.moveTo(0, i * scaleY);
                    context2.lineTo(startX + 10, i * scaleY);
                    context2.strokeStyle="red";
                    context2.stroke();
                    //want to move these over
                    // draw text for each axis scale line
                    context2.fillStyle = "black";
                    context2.textAlign ="left";
                    context2.font = "bold 24px Arial";
                    context2.fillText( maxVal - i, 0, (i*scaleY) - 2);
                }
                
                // loop thru each data array element and draw rect scaled
                for ( i=0; i < data.length; i++) {
                    // set fill color
                    context2.fillStyle = data[i].color;
                    context2.globalAlpha = 0.7;
                    // calc height of rect using scale
                    height = data[i].val * scaleY;
                    // draw rect
                    context2.fillRect( lastX + 40, bottomY - height, scaleX - 30, height );
                    lastX += scaleX;
                
                    
                  }
                }
            
            
            // 3. loops thru json array and finds biggest val property value
            function getMax(data) {
                var max = 0;
                for (var i=0; i < data.length; i++) {
                    if ( data[i].val > max ) {
                        max = data[i].val;
                    }
                }
                return max;
            }





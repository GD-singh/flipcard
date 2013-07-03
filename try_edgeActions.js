
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){yepnope({nope:['edge_includes/hammer.js'],complete:init});function init(){var element=sym.element[0];var hammer=Hammer(element);hammer.on("swipeleft",function(event){sym.play();});hammer.on("swiperight",function(event){sym.playReverse();});window.addEventListener("touchstart",function(event){event.stopPreventDefault();event.stopPropagation();return false;});}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",400,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",800,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1200,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1600,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2400,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2800,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3200,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3600,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Q1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_right-Flip}","click",function(sym,e){sym.play("Q1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_left-Flip}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","play",function(sym,e){$(document).ready(function(){var i=0;var j=0;function pulsate(){if(i>=2)return;sym.$("right-Flip").animate({opacity:0.2},1000,'linear').animate({opacity:1},1000,'linear',pulsate);i++;}
pulsate();});});
//Edge binding end
})("Q1");
//Edge symbol end:'Q1'

//=========================================================

//Edge symbol: 'Q1_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_right-Flip}","click",function(sym,e){sym.play("Q1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_left-Flip}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("Q2");
//Edge symbol end:'Q2'

//=========================================================

//Edge symbol: 'Q2_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_right-Flip}","click",function(sym,e){sym.play("Q1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_left-Flip}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("Q3");
//Edge symbol end:'Q3'

//=========================================================

//Edge symbol: 'Q3_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_right-Flip}","click",function(sym,e){sym.play("Q1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_left-Flip}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("Q4");
//Edge symbol end:'Q4'

//=========================================================

//Edge symbol: 'Q4_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_right-Flip}","click",function(sym,e){sym.play("Q1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_left-Flip}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("Q5");
//Edge symbol end:'Q5'

//=========================================================

//Edge symbol: 'Q5_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_right-Flip}","click",function(sym,e){sym.play("Q1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_left-Flip}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("Q6");
//Edge symbol end:'Q6'

//=========================================================

//Edge symbol: 'Q6_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_right-Flip}","click",function(sym,e){sym.play("Q1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_left-Flip}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("Q7");
//Edge symbol end:'Q7'

//=========================================================

//Edge symbol: 'Q7_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_right-Flip}","click",function(sym,e){sym.play("Q1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_left-Flip}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("Q8");
//Edge symbol end:'Q8'

//=========================================================

//Edge symbol: 'Q8_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_right-Flip}","click",function(sym,e){sym.play("Q1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_left-Flip}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("Q9");
//Edge symbol end:'Q9'

//=========================================================

//Edge symbol: 'Q9_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_right-Flip}","click",function(sym,e){sym.play("Q1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_left-Flip}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("Q10");
//Edge symbol end:'Q10'

//=========================================================

//Edge symbol: 'finger_slide'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop();});
//Edge binding end
})("finger_slide");
//Edge symbol end:'finger_slide'
})(jQuery,AdobeEdge,"EDGE-281342041");
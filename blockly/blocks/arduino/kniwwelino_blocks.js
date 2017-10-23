/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for for the Kniwwelino Library.
 * Kniwwelino library docs: https://kniwwelino.github.io/en/reference/
 */
'use strict';

goog.provide('Blockly.Blocks.kniwwelino_Kniwwelino');
goog.provide('Blockly.Blocks.kniwwelino_RGB');
goog.provide('Blockly.Blocks.kniwwelino_MATRIX');
goog.provide('Blockly.Blocks.kniwwelino_BUTTONS');
goog.provide('Blockly.Blocks.kniwwelino_MQTT');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.kniwwelino_Kniwwelino.HUE = 5;
Blockly.Blocks.kniwwelino_RGB.HUE = 5;
Blockly.Blocks.kniwwelino_MATRIX.HUE = 5;
Blockly.Blocks.kniwwelino_BUTTONS.HUE = 5;
Blockly.Blocks.kniwwelino_MQTT.HUE = 5;

//==== Kniwwelino functions===================================================

Blockly.Blocks['kniwwelino_getID'] = {
		  init: function() {
		    this.appendDummyInput()
		    	.appendField(Blockly.Msg.KNIWWELINO_GETID);
		    this.setOutput(true, Blockly.Types.TEXT.output);
		    this.setTooltip(Blockly.Msg.KNIWWELINO_GETID_TIP);
		    this.setColour(Blockly.Blocks.kniwwelino_Kniwwelino.HUE);
		    this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'kniwwelino');
		  },getBlockType: function() {
			    return Blockly.Types.TEXT;
		  }
};

Blockly.Blocks['kniwwelino_getName'] = {
		  init: function() {
		    this.appendDummyInput()
		    	.appendField(Blockly.Msg.KNIWWELINO_GETNAME);
		    this.setOutput(true, Blockly.Types.TEXT.output);
		    this.setTooltip(Blockly.Msg.KNIWWELINO_GETNAME_TIP);
		    this.setColour(Blockly.Blocks.kniwwelino_Kniwwelino.HUE);
		    this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'kniwwelino');
		  },getBlockType: function() {
			    return Blockly.Types.TEXT;
		  }
};

Blockly.Blocks['kniwwelino_getIP'] = {
		  init: function() {
		    this.appendDummyInput()
		    	.appendField(Blockly.Msg.KNIWWELINO_GETIP);
		    this.setOutput(true, Blockly.Types.TEXT.output);
		    this.setTooltip(Blockly.Msg.KNIWWELINO_GETIP_TIP);
		    this.setColour(Blockly.Blocks.kniwwelino_Kniwwelino.HUE);
		    this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'kniwwelino');
		  },getBlockType: function() {
			    return Blockly.Types.TEXT;
		  }
};

Blockly.Blocks['kniwwelino_getMAC'] = {
		  init: function() {
		    this.appendDummyInput()
		    	.appendField(Blockly.Msg.KNIWWELINO_GETMAC);
		    this.setOutput(true, Blockly.Types.TEXT.output);
		    this.setTooltip(Blockly.Msg.KNIWWELINO_GETMAC_TIP);
		    this.setColour(Blockly.Blocks.kniwwelino_Kniwwelino.HUE);
		    this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'kniwwelino');
		  }
};

Blockly.Blocks['kniwwelino_sleep'] = {
		init: function() {
		    this.appendValueInput('DELAY_TIME_MILI')
		        .setCheck(Blockly.Types.NUMBER.checkList)
		        .appendField(Blockly.Msg.ARD_TIME_DELAY);
		    this.appendDummyInput()
		        .appendField(Blockly.Msg.ARD_TIME_MS);
		    this.setInputsInline(true);
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setColour(Blockly.Blocks.kniwwelino_Kniwwelino.HUE);
		    this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'kniwwelino');
		  }
};
		

//==== RGB LED  functions ====================================================
//void RGBsetColor(uint32 color);
//void RGBsetColorEffect(uint32 color, uint8_t effect, int count);
//void RGBsetColorEffect(uint8_t red ,uint8_t green, uint8_t blue, uint8_t effect, int count);


Blockly.Blocks['kniwwelino_RGBselectColor'] = {
		   init: function() {
		     this.appendDummyInput()
		         .appendField(Blockly.Msg.KNIWWELINO_RGB_SELECTCOLOR)
		         .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
		     this.setOutput(true, Blockly.Types.TEXT.output);
		     this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
		     this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_SELECTCOLOR_TIP);
		     this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'rgb');
		   },getBlockType: function() {
			    return Blockly.Types.TEXT;
		   }
		};

Blockly.Blocks['kniwwelino_RGBsetColor'] = {
		   init: function() {
		     this.appendDummyInput()
		         .appendField(Blockly.Msg.KNIWWELINO_RGB_SETCOLOR)
		         .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
		     this.setPreviousStatement(true, null);
		     this.setNextStatement(true, null);
		     this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
		     this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_SETCOLOR_TIP);
		     this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'rgb');
		   }
		};

Blockly.Blocks['kniwwelino_RGBsetColorEffect'] = {
		  init: function() {
		    this.appendDummyInput()
		        .appendField(Blockly.Msg.KNIWWELINO_RGB_SETCOLOREFFECT)
		        .appendField(new Blockly.FieldColour("#ff0000"), "COLOR")
		        .appendField(new Blockly.FieldDropdown([["ON","RGB_ON"], ["BLINK","RGB_BLINK"], ["FLASH","RGB_FLASH"]]), "EFFECT");
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
			this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_SETCOLOREFFECT_TIP);
			this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'rgb');
		  }
		};

Blockly.Blocks['kniwwelino_RGBsetColorFromString'] = {
		   init: function() {
			 this.setInputsInline(true);
		     this.appendValueInput("COLOR")
		         .appendField(Blockly.Msg.KNIWWELINO_RGB_SETCOLORFROMSTRING)
			     .setCheck(Blockly.Types.TEXT.checkList)
		     this.setPreviousStatement(true, null);
		     this.setNextStatement(true, null);
		     this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
		     this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_SETCOLORFROMSTRING_TIP);
		     this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'rgb');
		   }
		};

Blockly.Blocks['kniwwelino_RGBclear'] = {
		   init: function() {
		     this.appendDummyInput()
		     	.appendField(Blockly.Msg.KNIWWELINO_RGB_CLEAR);
		     this.setPreviousStatement(true, null);
		     this.setNextStatement(true, null);
		     this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
		     this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_CLEAR_TIP);
		     this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'rgb');
		   }
		};

//==== LED MATRIX functions ==================================================
//void MATRIXwriteOnce(String text);
//void MATRIXwriteAndWait(String text);
//void MATRIXwrite(String text, int count, boolean wait);
//void MATRIXsetPixel(uint8_t x, uint8_t y, boolean on);

Blockly.Blocks['kniwwelino_MATRIXdrawIconCreator'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICONCREATOR);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldCheckbox("FALSE"), "1_1")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "1_2")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "1_3")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "1_4")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "1_5");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldCheckbox("FALSE"), "2_1")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "2_2")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "2_3")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "2_4")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "2_5");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldCheckbox("FALSE"), "3_1")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "3_2")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "3_3")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "3_4")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "3_5");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldCheckbox("FALSE"), "4_1")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "4_2")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "4_3")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "4_4")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "4_5");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldCheckbox("FALSE"), "5_1")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "5_2")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "5_3")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "5_4")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "5_5");
    this.appendDummyInput();
	this.setOutput(true, Blockly.Types.TEXT.output);
    this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
    this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICONCREATOR_TIP);
    this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
  },getBlockType: function() {
	    return Blockly.Types.TEXT;
  }
};


Blockly.Blocks['kniwwelino_MATRIXdrawIconChooser'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICONCHOOSER)
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.KNIWWELINO_DRAWICON_HEART,		"ICON_HEART"],
          [Blockly.Msg.KNIWWELINO_DRAWICON_SMILE,		"ICON_SMILE"],
          [Blockly.Msg.KNIWWELINO_DRAWICON_SAD,			"ICON_SAD"],
          [Blockly.Msg.KNIWWELINO_DRAWICON_ARROW_UP,	"ICON_ARROW_UP"],
          [Blockly.Msg.KNIWWELINO_DRAWICON_ARROW_DOWN,	"ICON_ARROW_DOWN"],
          [Blockly.Msg.KNIWWELINO_DRAWICON_ARROW_LEFT,	"ICON_ARROW_LEFT"],
          [Blockly.Msg.KNIWWELINO_DRAWICON_ARROW_RIGHT,	"ICON_ARROW_RIGHT"]])
        , "ICON");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
    this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICONCHOOSER_TIP);
    this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
  }
};

Blockly.Blocks['kniwwelino_MATRIXdrawIcon'] = {
		  init: function() {
			this.setInputsInline(true);
			this.appendValueInput("TEXT")
		        .appendField(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICON);
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
		    this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICON_TIP);
		    this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
		  }
		};

Blockly.Blocks['kniwwelino_MATRIXwrite'] = {
   init: function() {
		 this.setInputsInline(true);
		 this.appendValueInput("TEXT").appendField(Blockly.Msg.KNIWWELINO_MATRIX_WRITE)
		 this.appendDummyInput()
	     	.appendField(new Blockly.FieldDropdown([
	            [Blockly.Msg.KNIWWELINO_MATRIX_WRITE_NORMAL,"SCROLL"],
	            [Blockly.Msg.KNIWWELINO_MATRIX_WRITE_WAIT,	"WAIT"],
	            [Blockly.Msg.KNIWWELINO_MATRIX_WRITE_ONCE,	"ONCE"]])
	          , "TYPE");
	     this.setPreviousStatement(true, null);
	     this.setNextStatement(true, null);
	     this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
	     this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_WRITE_TIP);
	     this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
   }
};

Blockly.Blocks['kniwwelino_MATRIXsetBrightness'] = {
   init: function() {
     this.appendDummyInput()
         .appendField(Blockly.Msg.KNIWWELINO_MATRIX_SETBRIGHTNESS)
         .appendField(new Blockly.FieldNumber(10, 0, 15, 0), 'BRIGHTNESS');
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
     this.setTooltip(Blockly.Msg.KNIWWELINO_SETBRIGHTNESS_TIP);
     this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
   },

   onchange: function() {
     if (this.getFieldValue('BRIGHTNESS') < 0 | this.getFieldValue('BRIGHTNESS') > 15) {
       this.setWarningText(Blockly.Msg.KNIWWELINO_MATRIX_SETBRIGHTNESS_ALERT);
       if (this.getFieldValue('BRIGHTNESS') < 0) {
         this.setFieldValue(0, 'BRIGHTNESS');
       } else if (this.getFieldValue('BRIGHTNESS') > 15) {
         this.setFieldValue(15, 'BRIGHTNESS');
       }
     } else {
       this.setWarningText(null);
     }
   }

};

Blockly.Blocks['kniwwelino_MATRIXsetBlinkRate'] = {
		   init: function() {
		     this.appendDummyInput()
		        .appendField(Blockly.Msg.KNIWWELINO_MATRIX_BLINKRATE)
		        .appendField(new Blockly.FieldDropdown(
		            [["on","MATRIX_STATIC"],
		            ["1/2Hz","MATRIX_BLINK_HALFHZ"],
		            ["1Hz","MATRIX_BLINK_1HZ"],
		            ["2Hz","MATRIX_BLINK_2HZ"]]), "RATE");
		     this.setPreviousStatement(true, null);
		     this.setNextStatement(true, null);
		     this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
		     this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_BLINKRATE_TIP);
		     this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
		   }
		};

Blockly.Blocks['kniwwelino_MATRIXclear'] = {
   init: function() {
     this.appendDummyInput()
         .appendField(Blockly.Msg.KNIWWELINO_MATRIX_CLEAR);
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
     this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_CLEAR_TIP);
     this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
   }
};

//==== Onboard Button functions ==============================================


Blockly.Blocks['kniwwelino_BUTTONdown'] = {
		  init: function() {
		    this.appendDummyInput()
		    .appendField(Blockly.Msg.KNIWWELINO_BUTTON)
		        .appendField(new Blockly.FieldDropdown(
		    [["A","A"],
		    ["B","B"],
		    ["A and B","AandB"],
		    ["A or B","AorB"]]), "BUTTON")
		    .appendField(Blockly.Msg.KNIWWELINO_BUTTON_DOWN);
		    this.setOutput(true, Blockly.Types.BOOLEAN.output);
		    this.setTooltip(Blockly.Msg.KNIWWELINO_BUTTON_DOWN_TIP);
		    this.setColour(Blockly.Blocks.kniwwelino_BUTTONS.HUE);
		    this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'buttons');
		  },getBlockType: function() {
			    return Blockly.Types.BOOLEAN;
		  }
};

Blockly.Blocks['kniwwelino_BUTTONclicked'] = {
		  init: function() {
		    this.appendDummyInput()
		    .appendField(Blockly.Msg.KNIWWELINO_BUTTON)
		        .appendField(new Blockly.FieldDropdown(
		    [["A","A"],
		    ["B","B"],
		    ["A and B","AandB"],
		    ["A or B","AorB"]]), "BUTTON")
		    .appendField(Blockly.Msg.KNIWWELINO_BUTTON_CLICKED);
		    this.setOutput(true, Blockly.Types.BOOLEAN.output);
		    this.setTooltip(Blockly.Msg.KNIWWELINO_BUTTON_CLICKED_TIP);
		    this.setColour(Blockly.Blocks.kniwwelino_BUTTONS.HUE);
		    this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'buttons');
		  },getBlockType: function() {
			    return Blockly.Types.BOOLEAN;
		  }
};


//==== IOT functions ==============================================


Blockly.Blocks['kniwwelino_MQTTsetGroup'] = {
		   init: function() {
				 this.setInputsInline(true);
			     this.appendValueInput("GROUP")
			         .appendField(Blockly.Msg.KNIWWELINO_MQTT_GROUP);
//			     this.setPreviousStatement(true, null);
//			     this.setNextStatement(true, null);
			     this.setColour(Blockly.Blocks.kniwwelino_MQTT.HUE);
			     this.setTooltip(Blockly.Msg.KNIWWELINO_TEXTDISPLAY_TIP);
			     this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'mqtt');
		   }
		};

Blockly.Blocks['kniwwelino_MQTTconnectRGB'] = {
		   init: function() {
		     this.appendDummyInput()
		         .appendField("Connect RGB Led to Messaging");
//		     this.setPreviousStatement(true, null);
//		     this.setNextStatement(true, null);
		     this.setColour(Blockly.Blocks.kniwwelino_MQTT.HUE);
		     this.setTooltip(Blockly.Msg.KNIWWELINO_CLEAR_TIP);
		     this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'mqtt');
		   }
};

Blockly.Blocks['kniwwelino_MQTTconnectMATRIX'] = {
		   init: function() {
		     this.appendDummyInput()
		         .appendField("Connect MATRIX to Messaging");
//		     this.setPreviousStatement(true, null);
//		     this.setNextStatement(true, null);
		     this.setColour(Blockly.Blocks.kniwwelino_MQTT.HUE);
		     this.setTooltip(Blockly.Msg.KNIWWELINO_CLEAR_TIP);
		     this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'mqtt');
		   }
};

Blockly.Blocks['kniwwelino_MQTTpublishSimple'] = {
		   init: function() {
				 this.setInputsInline(true);
			     this.appendValueInput("MESSAGE").appendField("Sent Message ");
			     this.appendDummyInput()
			 		.appendField("to Message Topic")
			 		.appendField(new Blockly.FieldDropdown([
			 			["/MATRIX/TEXT","/MATRIX/TEXT"],
			 			["/RGB/COLOR","/RGB/COLOR"],
			 			["/MATRIX/ICON","/MATRIX/ICON"]])
			      , "TOPIC");
			     this.setPreviousStatement(true, null);
			     this.setNextStatement(true, null);
			     this.setColour(Blockly.Blocks.kniwwelino_MQTT.HUE);
			     this.setTooltip(Blockly.Msg.KNIWWELINO_TEXTDISPLAY_TIP);
			     this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'mqtt');
		   }
};

Blockly.Blocks['kniwwelino_MQTTsubscribe'] = {
		   init: function() {
				 this.setInputsInline(true);
			     this.appendValueInput("TOPIC")
			         .appendField("Attach").appendField(new Blockly.FieldVariable("item"), "VAR")
			         .appendField("to Message Topic");
			     
//			     this.setPreviousStatement(true, null);
//			     this.setNextStatement(true, null);
			     this.setColour(Blockly.Blocks.kniwwelino_MQTT.HUE);
			     this.setTooltip(Blockly.Msg.KNIWWELINO_TEXTDISPLAY_TIP);
			     this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'mqtt');
		   }
};

Blockly.Blocks['kniwwelino_MQTTpublish'] = {
		   init: function() {
				 this.setInputsInline(true);
			     this.appendValueInput("MESSAGE").appendField("Sent Message ");
				 this.appendValueInput("TOPIC").appendField("to MQTT Topic");
			     this.setPreviousStatement(true, null);
			     this.setNextStatement(true, null);
			     this.setColour(Blockly.Blocks.kniwwelino_MQTT.HUE);
			     this.setTooltip(Blockly.Msg.KNIWWELINO_TEXTDISPLAY_TIP);
			     this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'mqtt');
		   }
};


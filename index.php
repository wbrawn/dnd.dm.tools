<!DOCTYPE HTML>
<html>

<body>
<head>
	<center>
	<title>DM Cheat Sheets & Tools</title>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" >
	<script type="text/javascript" language="JavaScript" src="dice.js" ></script>
	<link href="dice.css" type="text/css" rel="stylesheet" rel="dice.png" >
	</center>

	<a src="horizline.png" width="100%" alt="no image"></a>

	<!-- HACK TO GET 24-bit PNGs with alpha to work right in IE...  I hate Microsoft. -->
	<!--[if gte IE 5.5000]>
	<script type="text/javascript" src="pngfix.js"></script>
	<![endif]-->
<body onload="initPage();">


<!--FANCY BOX CODE START-->

<!--*href="http://cdnjs.cloudflare.com/ajax/libs/fancybox/1.3.4/jquery.fancybox-1.3.4.css" (old href)-->

<link rel="stylesheet" type="text/css" media="screen" href="fancybox.css"/>
<style type="text/css" >
    a.fancybox img {
        border: none;
        box-shadow: 0 1px 7px rgba(0,0,0,0.6);
        -o-transform: scale(1,1); -ms-transform: scale(1,1); -moz-transform: scale(1,1); -webkit-transform: scale(1,1); transform: scale(1,1); -o-transition: all 0.2s ease-in-out; -ms-transition: all 0.2s ease-in-out; -moz-transition: all 0.2s ease-in-out; -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out;
    } 

    a.fancybox:hover img 
    {
        position: relative; z-index: 999; -o-transform: scale(1.5,1.5); -ms-transform: scale(1.5,1.5); -moz-transform: scale(1.5,1.5); -webkit-transform: scale(1.5,1.5); transform: scale(1.5,1.5);
    }

</style>


<script type="text/javascript" src="fancyBoxCode1.js"></script>
<!--https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js-->
<script type="text/javascript" src="fancyBoxCode2.js"></script> 
<!--http://code.jquery.com/jquery-1.11.0.min.js-->
<script type="text/javascript" src="fancyBoxCode3.js"></script>
<!--http://code.jquery.com/jquery-migrate-1.2.1.min.jshttp://code.jquery.com/jquery-migrate-1.2.1.min.js-->
<script type="text/javascript" src="fancyBoxCode4.js"></script>
<!--http://cdnjs.cloudflare.com/ajax/libs/fancybox/1.3.4/jquery.fancybox-1.3.4.pack.min.js-->
</head>

<!--FANCY BOX CODE END-->

<p><b><font size="4">Random Character(NPC) Generator &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</font> Original Generator, <a href="http://swshinn.com/5e-pregens/" target="_blank" >Listo,</a> created by Mike Risher</b></p>
<font size="3">This version of "Listo" is an alteration of the original code to allow for characters generated to be above level 10. Also the spell list section is slightly different in that each spell listed is also a hyperlink-ish, that opens a popup window  with a discription of the spell selected. <BR>(using this website <a href="https://www.dnd-spells.com/spells" target="_blank" >dnd-spells.com</a>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</font><BR><BR>
<button id="printScreen" onclick="saveScreen()">Save Page Image</button><font size="2"> <BR>After clicking the  "Save Page Image" button, press the "change" button and selected the option you want, I suggest using the "save as pdf" option, the .jpg or .png options are also good, then save. If using Chrome, you can save the image to your google drive.</font>

<!-- Character Generator Start -->

<head>
<meta name="keywords" content="DM Screen, D&D Resources, Dice, Dice Roller, Rules, Basic Rules, Spell Cards, All in One, Spells, DnD, D&D, Dungeons and Dragons, Character Generator, Character Maker, 5e, 5th edition, random, dm, DM, dm tools, dm cheat sheet, Adventurers League">

<!--<title>Listo v1.03 - Quick Character Generator for 5th Edition D&D by Mike Risher</title>
<meta charset="UTF-8">
<meta name="author" content="Mike Risher">
<meta name="description" content="Listo is a 5th Edition D&D Character Generator for level 1-10 Characters created by Mike Risher.  Listo version 1.03 was released in July, 2015.">
<meta name="keywords" content="listo, DnD, D&D, Dungeons and Dragons, Character Generator, Character Maker, 5e, 5th edition, random, dm, DM, dm tools, dm cheat sheet">
<link rel="icon" type="image/gif" src="dice.png">
-->
<style>
.complete {



font: 12pt helvetica;
width: 100%;
}

.top {
font: 11pt helvetica;
width: 100%;
}

.alText {
font: 11pt helvetica;
float: right;
}

.detailed {
	font: 12pt helvetica;
	display: none;
}


.rawAbils {
	font: 10pt helvetica;
	padding-left: 5px;
}

.buyDropdowns {
	display: none;
}

.classOptions {
	display: none;
}

.armorhp {
	float: right;
	padding-right: 1em;
	padding-bottom: 1em;

	padding-top: 1em;
	padding-bottom: .5em;

}


.spells {
	border-top: 1px solid;
	width: 100%;
	margin-top: .5em;
	padding-top: .5em;
/*	padding: .5em;
	margin: .5em;
	visibility: hidden; 
*/
}


.bg {
	font-weight: bold;
}

.main-area {

}

.side-area {
	float: right;
	width: 350px;
	padding-bottom: .5em;
	padding-left: .5em;
	border-left:  1px solid;
	border-bottom:  1px solid;
	margin-left: .5em;
  }

</style>
</head>


<body onload="checkRun()">
<div class="top">
	<button id="reset" onclick="reset()">Reset</button> 

	<select id="selLevel">
	<option value="1">1st level</option>
	<option value="2">2nd level</option>
	<option value="3">3rd level</option>
	<option value="4">4th level</option>
	<option value="5">5th level</option>
	<option value="6">6th level</option>
	<option value="7">7th level</option>
	<option value="8">8th level</option>
	<option value="9">9th level</option>
	<option value="10">10th level</option>
	<option value="11">11th level</option>
	<option value="12">12th level</option>
	<option value="13">13th level</option>
	<option value="14">14th level</option>
	<option value="15">15th level</option>
	<option value="16">16th level</option>
	<option value="17">17th level</option>
	<option value="18">18th level</option>
	<option value="19">19th level</option>
	<option value="20">20th level</option>
	<option value="21">Level 1-4</option>
	<option value="22">Level 5-10</option>
	<option value="23">Level 8-12<option>
	<option value="24">Level 12-16</option>
	<option value="25">Level 17-20</option>
	<option value="0">Level 1-10</option>

	</select> 

	<select id="selGender"><option value="0">Any Gender</option>
	<option value="1">Male</option>
	<option value="2">Female</option>
	</select>

	<select id="selRace"><option value="0">Any Race</option>
	<option value="21">Aarakocra</option>	
	<option value="1">Dragonborn</option>
	<option value="11">Dwarf (Hill)</option>
	<option value="12">Dwarf (Mountain)</option>
	<option value="6">Elf (Drow)</option>
	<option value="14">Elf (High)</option>
	<option value="15">Elf (Wood)</option>
	<option value="23">Genasi (Air)</option>
	<option value="24">Genasi (Earth)</option>
	<option value="25">Genasi (Fire)</option>
	<option value="26">Genasi (Water)</option>
	<option value="2">Gnome (Forest)</option>
	<option value="7">Gnome (Rock)</option>
	<option value="22">Gnome (Svirfneblin)</option>
	<option value="27">Goliath</option>
	<option value="3">Half-Elf</option>
	<option value="4">Half-Orc</option>
	<option value="17">Halfling (Lightfoot)</option>
	<option value="16">Halfling (Stout)</option>
	<option value="13">Human</option>
	<option value="5">Tiefling</option>
	</select>

	 
	<select id="selClass" onchange="selectClass()"><option value="0">Any Class</option>
	<option value="1">Barbarian</option>
	<option value="2">Bard</option>
	<option value="3">Cleric</option>
	<option value="4">Druid</option>
	<option value="5">Fighter (Eldritch Knight)</option>
	<option value="6">Fighter (High Dexterity)</option>
	<option value="7">Fighter (High Strength)</option>
	<option value="8">Monk</option>
	<option value="9">Paladin</option>
	<option value="10">Ranger</option>
	<option value="11">Rogue (Thief or Assassin)</option>
	<option value="12">Rogue (Arcane Trickster)</option>
	<option value="13">Sorcerer</option>
	<option value="14">Warlock</option>
	<option value="15">Wizard</option>
	</select>

	<span id="clericOptions" class="classOptions">
		<select id="selCleric"><option value="-1">Any Cleric Domain</option>
		<option value="0">Knowledge</option>
		<option value="1">Life</option>
		<option value="2">Light</option>
		<option value="3">Nature</option>
		<option value="4">Tempest</option>
		<option value="5">Trickery</option>
		<option value="6">War</option>
		<option value="7">Death</option>
		</select>
	</span>

	<span id="wizardOptions" class="classOptions">
		<select id="selWizard"><option value="-1">Any Wizard School</option>
		<option value="0">Abjuration</option>
		<option value="1">Conjuration</option>
		<option value="2">Divination Ritual</option>
		<option value="3">Enchantment</option>
		<option value="4">Evocation</option>
		<option value="5">Illusion</option>
		<option value="6">Necromancy</option>
		<option value="7">Transmutation</option>
		</select>
	</span>


	<span id="druidOptions" class="classOptions">
		<select id="selDruid"><option value="-1">Any Druid Circle</option>
		<option value="0">Circle of the Moon</option>
		<option value="1">Circle of Land - Arctic</option>
		<option value="2">Circle of Land - Coast</option>
		<option value="3">Circle of Land - Desert</option>
		<option value="4">Circle of Land - Forest</option>
		<option value="5">Circle of Land - Grassland</option>
		<option value="6">Circle of Land - Mountain</option>
		<option value="7">Circle of Land - Swamp</option>
		<option value="8">Circle of Land - Underdark</option>
		</select>
	</span>

	<span id="barbarianOptions" class="classOptions">
		<select id="selBarbarian"><option value="-1">Any Barbarian Path</option>
		<option value="0">Path of the Berserker</option>
		<option value="1">Path of the Totem Warrior (any)</option>
		<option value="2">Path of the Totem Warrior (Bear)</option>
		<option value="3">Path of the Totem Warrior (Eagle)</option>
		<option value="4">Path of the Totem Warrior (Wolf)</option>
		</select>
	</span>
	<span id="bardOptions" class="classOptions">
		<select id="selBard"><option value="-1">Any Bard College</option>
		<option value="0">College of Lore</option>
		<option value="1">College of Valor</option>
		</select>
	</span>

	<span id="fighterOptions" class="classOptions">
		<select id="selFighter"><option value="-1">Any Fighter Archetype</option>
		<option value="0">Champion</option>
		<option value="1">Battle Master</option>
		</select>
	</span>
	<span id="monkOptions" class="classOptions">
		<select id="selMonk"><option value="-1">Any Monastic Tradition</option>
		<option value="0">Way of the Open Hand</option>
		<option value="1">Way of Shadow</option>
		<option value="2">Way of the Four Elements</option>
		</select>
	</span>
	<span id="paladinOptions" class="classOptions">
		<select id="selPaladin"><option value="-1">Any Sacred Oath</option>
		<option value="0">Oath of Devotion</option>
		<option value="1">Oath of the Ancients</option>
		<option value="2">Oath of Vengeance</option>
		
		</select>
	</span>
	<span id="rangerOptions" class="classOptions">
		<select id="selRanger"><option value="-1">Any Ranger Archetype</option>
		<option value="0">Hunter</option>
		<option value="1">Beast Master</option>
		</select>
	</span>
	<span id="rogueOptions" class="classOptions">
		<select id="selRogue"><option value="-1">Any Rogue Archetype</option>
		<option value="0">Thief</option>
		<option value="1">Assassin</option>
		</select>
	</span>
	<span id="sorcererOptions" class="classOptions">
		<select id="selSorcerer"><option value="-1">Any Sorcerous Origin</option>
		<option value="0">Draconic Bloodline</option>
		<option value="1">Wild Magic</option>
		</select>
	</span>
	<span id="warlockOptions" class="classOptions">
		<select id="selWarlock"><option value="-1">Any Patron</option>
		<option value="0">The Archfey</option>
		<option value="1">The Fiend</option>
		<option value="2">The Great Old One</option>
		</select>

		<select id="selWarlockPact"><option value="-1">Any Pact Boon</option>
		<option value="0">Pact of the Chain</option>
		<option value="1">Pact of the Blade</option>
		<option value="2">Pact of the Tome</option>
		
		</select>
	</span>








	
	<select id="selBg"><option value="0">Any Background</option>
	<option value="1">Acolyte</option>
	<option value="2">Charlatan</option>
	<option value="3">Criminal</option>
	<option value="4">Entertainer</option>
	<option value="7">Folk Hero</option>
	<option value="5">Guild Artisan</option>
	<option value="6">Hermit</option>
	<option value="8">Noble</option>
	<option value="9">Outlander</option>
	<option value="10">Sage</option>
	<option value="11">Sailor</option>
	<option value="12">Soldier</option>
	<option value="13">Urchin</option>
	</select>





	<button id="go" onclick="checkRun()" >Generate Character</button>
	

</div>
<div>
<span style="font: 10pt helvetica;">

	<select id="genMethod" onClick="switchBuy()">
	<option value="0" selected="selected">Roll abilities</option>
	<option value="1">Buy abilities (random)</option>
	<option value="2">Buy abilities (manual)</option>
	<option value="3">Buy abilities (detailed)</option>
	</select>

	<select id="selAbil">
	<option value="0" selected="selected">Reroll if the total is under 65</option>
	<option value="35">35</option>
	<option value="40">40</option>
	<option value="45">45</option>
	<option value="50">50</option>
	<option value="55">55</option>
	<option value="60">60</option>
	<option value="70">70</option>
	<option value="75">75</option>
	<option value="80">80</option>
	<option value="85">85</option>
	<option value="90">90</option>
	<option value="95">95</option>
	</select>

</span>

<span id="ro" class="rawAbils"></span> 

<span id="buyDropdowns" class="buyDropdowns">
	<span class="rawAbils">Abilities:</span> &nbsp; 


	<span class="detailed">STR</span>

	<select id="a1" onchange="addAbils(false)">
	<option value="1" selected="selected">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
	<option value="6">6</option>
	<option value="7">7</option>
	<option value="8">8</option>
	<option value="9">9</option>
	<option value="10">10</option>
	<option value="11">11</option>
	<option value="12">12</option>
	<option value="13">13</option>
	<option value="14">14</option>
	<option value="15">15</option>
	<option value="16">16</option>
	<option value="17">17</option>
	<option value="18">18</option>
	</select>

	 &nbsp;  
	 <span class="detailed">DEX</span>
	<select id="a2" onchange="addAbils(false)">
	<option value="1" selected="selected">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
	<option value="6">6</option>
	<option value="7">7</option>
	<option value="8">8</option>
	<option value="9">9</option>
	<option value="10">10</option>
	<option value="11">11</option>
	<option value="12">12</option>
	<option value="13">13</option>
	<option value="14">14</option>
	<option value="15">15</option>
	<option value="16">16</option>
	<option value="17">17</option>
	<option value="18">18</option>
	</select>

	 &nbsp;  
	 <span class="detailed">CON</span>
	<select id="a3" onchange="addAbils(false)">
	<option value="1" selected="selected">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
	<option value="6">6</option>
	<option value="7">7</option>
	<option value="8">8</option>
	<option value="9">9</option>
	<option value="10">10</option>
	<option value="11">11</option>
	<option value="12">12</option>
	<option value="13">13</option>
	<option value="14">14</option>
	<option value="15">15</option>
	<option value="16">16</option>
	<option value="17">17</option>
	<option value="18">18</option>
	</select>

	 &nbsp;  
	 <span class="detailed">INT</span>
	<select id="a4" onchange="addAbils(false)">
	<option value="1" selected="selected">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
	<option value="6">6</option>
	<option value="7">7</option>
	<option value="8">8</option>
	<option value="9">9</option>
	<option value="10">10</option>
	<option value="11">11</option>
	<option value="12">12</option>
	<option value="13">13</option>
	<option value="14">14</option>
	<option value="15">15</option>
	<option value="16">16</option>
	<option value="17">17</option>
	<option value="18">18</option>
	</select>

	 &nbsp;  
	 <span class="detailed">WIS</span>
	<select id="a5" onchange="addAbils(false)">
	<option value="1" selected="selected">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
	<option value="6">6</option>
	<option value="7">7</option>
	<option value="8">8</option>
	<option value="9">9</option>
	<option value="10">10</option>
	<option value="11">11</option>
	<option value="12">12</option>
	<option value="13">13</option>
	<option value="14">14</option>
	<option value="15">15</option>
	<option value="16">16</option>
	<option value="17">17</option>
	<option value="18">18</option>
	</select>

	 &nbsp;  
	 <span class="detailed">CHA</span>
	<select id="a6" onchange="addAbils(false)">
	<option value="1" selected="selected">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
	<option value="6">6</option>
	<option value="7">7</option>
	<option value="8">8</option>
	<option value="9">9</option>
	<option value="10">10</option>
	<option value="11">11</option>
	<option value="12">12</option>
	<option value="13">13</option>
	<option value="14">14</option>
	<option value="15">15</option>
	<option value="16">16</option>
	<option value="17">17</option>
	<option value="18">18</option>
	</select>


	<span id="points" style="font: 10pt helvetica;"></span>
	<button id="resetabil" onclick="resetAbil()">Reset Abilities</button> 
</span>
	
	<span class="alText"><input type="checkbox" id="al" onclick="aLeague()">Adventurer's League</span>
	

</div>




<hr>
<div class="complete">
	<div class="main-area">
		<div class="side-area">
			<span id="bg"></span><br>
		</div>
		<span id="status">Loading...</span>
		<div class="armorhp">
			<span id="ar"></span>
		</div>
		<div style="weapons">
			<b>Melee weapons:</b>
			<br>
			<span id="wp"></span>
		</div>
		<b>Proficient skills:</b>  <span id="sk"></span><br>
		<span id="ab"></span><br>

		<b>Equipment:</b>  <span id="eq"></span>
		<div>
		</div>
		<div class="spells" id="spellspot"><span id="sp"></span></div>

<button id="spellSlotsbutton" onclick="toggleTable();" href="#">Hide/Show Spells and Slots</button><br>

<table id="spellSlotsTable" style="display: none;"><tr><td>

<b>Spell Slots</b> 

    <div class="box" id="one"> 
    	<button id="down" changeValue="-1" onclick="modify_qty(this,-1)">-</button>   
        <label for="qty"><abbr title="Quantity"></abbr></label>
        <input id="qty1" value="0" style="width: 25px;" />  
        <button id="up" onclick="modify_qty(this,1)">+</button>1 &nbsp;&nbsp; <span id="spell1"></span>
    </div>
    <div class="box" id="two"> 
    	<button id="down" onclick="modify_qty(this,-1)">-</button>   
        <label for="qty"><abbr title="Quantity"></abbr></label>
        <input id="qty2" value="0" style="width: 25px;" />  
        <button id="up" onclick="modify_qty(this,1)">+</button>2 &nbsp;&nbsp; <span id="spell2"></span>
    </div>
    <div class="box" id="three"> 
    	<button id="down" onclick="modify_qty(this,-1)">-</button>   
        <label for="qty"><abbr title="Quantity"></abbr></label>
        <input id="qty3" value="0" style="width: 25px;" />  
        <button id="up" onclick="modify_qty(this,1)">+</button>3 &nbsp;&nbsp; <span id="spell3"></span>
    </div>
    <div class="box" id="four"> 
    	<button id="down" onclick="modify_qty(this,-1)">-</button>   
        <label for="qty"><abbr title="Quantity"></abbr></label>
        <input id="qty4" value="0" style="width: 25px;" />  
        <button id="up" onclick="modify_qty(this,1)">+</button>4 &nbsp;&nbsp; <span id="spell4"></span>
    </div>
    <div class="box" id="five"> 
    	<button id="down" onclick="modify_qty(this,-1)">-</button>   
        <label for="qty"><abbr title="Quantity"></abbr></label>
        <input id="qty5" value="0" style="width: 25px;" /> 
        <button id="up" onclick="modify_qty(this,1)">+</button>5  &nbsp;&nbsp; <span id="spell5"></span>
    </div>
    <div class="box" id="six"> 
    	<button id="down" onclick="modify_qty(this,-1)">-</button>   
        <label for="qty"><abbr title="Quantity"></abbr></label>
        <input id="qty6" value="0" style="width: 25px;" />  
        <button id="up" onclick="modify_qty(this,1)">+</button>6 &nbsp;&nbsp; <span id="spell6"></span>
    </div>
    <div class="box" id="seven"> 
    	<button id="down" onclick="modify_qty(this,-1)">-</button>   
        <label for="qty"><abbr title="Quantity"></abbr></label>
        <input id="qty7" value="0" style="width: 25px;" />  
        <button id="up" onclick="modify_qty(this,1)">+</button>7 &nbsp;&nbsp; <span id="spell7"></span>
    </div> 
    <div class="box" id="eight"> 
    	<button id="down" onclick="modify_qty(this,-1)">-</button>   
        <label for="qty"><abbr title="Quantity"></abbr></label>
        <input id="qty8" value="0" style="width: 25px;" />  
        <button id="up" onclick="modify_qty(this,1)">+</button>8 &nbsp;&nbsp; <span id="spell8"></span>
    </div>
    <div class="box" id="nine"> 
    	<button id="down" onclick="modify_qty(this,-1)">-</button>   
        <label for="qty"><abbr title="Quantity"></abbr></label>
        <input id="qty9" value="0" style="width: 25px;" />  
        <button id="up" onclick="modify_qty(this,1)">+</button>9 &nbsp;&nbsp; <span id="spell9"></span>
    </div>
        <button id="Reset" onclick="reset_qty()">Rest</button> <br> Push the "Rest" Button<br> to apply/restore spell <br>slots if applicable.
	</div>

</table></tr></td>

<script language="javascript" src="htmlCode.js"></script>

<!--<script language="javascript" src="classSpells.js"></script>-->


<style>
a:hover {
    background-color: yellow;
}
</style>

<!-- IMAGES START -->

<figure>
<p><b>DM Screens and Sheets</b></p>
<!--
<img src="DDNextLogo.png" width="100%" alt="D&D Cheat Sheets">
-->
<TABLE BORDER="3" CELLPADDING="10" CELLSPACING="10">
<td>
<a href="dms_cs00.png"><img class="fancybox" src="dms_cs00.png" width="4%" alt="no image"></a>Basic Rules 1
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="dms_cs01.png"><img class="fancybox" src="dms_cs01.png" width="4%" alt="no image"></a>Basic Rules 2
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="dms_cs02.png"><img class="fancybox" src="dms_cs02.png" width="4%" alt="no image"></a>Basic Rules 3
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="dms_cs3.png"><img class="fancybox" src="dms_cs3.png" width="4%" alt="no image"></a>Basic Rules 4
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="dms_cs5.png"><img class="fancybox" src="dms_cs5.png" width="4%" alt="no image"></a>Misc Statistics
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</figure>
</td>
<TABLE BORDER="3" CELLPADDING="10" CELLSPACING="10">
<td>
<a href="dms_cs1.png"><img class="fancybox" src="dms_cs1.png" width="4%" alt="no image"></a>Ability Checks 1
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="dms_cs2.png"><img class="fancybox" src="dms_cs2.png" width="4%" alt="no image"></a>Ability Checks 2
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="dms_cs0.png"><img class="fancybox" src="dms_cs0.png" width="4%" alt="no image"></a>Combat
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="dms_cs4.png"><img class="fancybox" src="dms_cs4.png" width="4%" alt="no image"></a>Gear, Goods & Services
</figure>
</td>

</table>
<br>

<!-- Resource Links START -->


<TABLE BORDER="3">
<p><b>USEFUL (ONLINE) RPG RESOURCES</b></p>

	<td>
<a href="https://donjon.bin.sh/" target="_blank"><font color="blue"> <b>donjon; RPG Tools</b></font></a>
	</td>

	<td>
<a href="http://jtevans.kilnar.com/rpg/dnd/tools/" target="_blank"><font color="blue"> <b>D&D Utilities</b></font></a><br>
	</td>

	<td>
<a href="http://www.d20pfsrd.com/" target="_blank"><font color="blue"> <b>D20 pfsrd</b><br> (pathfinder)</font></a><br>
	</td>

	<td>
<a href="http://www.d20srd.org/" target="_blank"><font color="blue"> <b>The Hypertext D20 srd</b><br> (3.Xe)</font></a>
	</td>

	<td>
<a href="http://dndtools.pw/" target="_blank"><font color="blue"> <b>D&D Tools</b><br> (3.Xe)</font></a><br>
	</td>


	<td>
<a href="http://hardcodex.ru/" target="_blank"><font color="blue"> <b>D&D Next Spell Cards</b><br> (5e)</font></a>
	</td>

<!--
	<td>
<a href="http://www.miniaturemarket.com/gf973904.html" target="_blank"><font color="blue"> <b>D&D Next Spell Cards<br> (5e)<font color="RED">[ PAY ]</font></b></font></a>
	</td>
-->
	<td>
<a href="http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Dtoys-and-games&field-keywords=D%26D+Next+SPELL+CARDS" target="_blank"><font color="blue"> <b>D&D Next Spell Cards</b> (Amazon)<br> (5e)</font></a>
	</td>

	<td>
<a href="http://www.hexographer.com/free-version/" target="_blank"><font color="blue"> <b>Hexographer</b><br>(Map Maker)</font></a><br>
	</td>

	<td>
<a href="http://www.dmsguild.com/" target="_blank"><font color="blue"> <b>DM's Guild</b><br>(Various resources)</font></a><br>
	</td>

</table>

<!--Buttons-->
<TABLE BORDER="3">
	<p><b>Commonly used Tools and Generators</b></p>
	<td>
	<button id="categoryLinksButton" onclick="toggleCategory();" href="#"><b>donjon</b></button>&nbsp;|&nbsp;<button id="categoryD20srdLinksButton" onclick="toggleCategoryD20srd();" href="#"><b>D20 srd</b></button>&nbsp;|&nbsp;<button id="categoryDmsGuildLinksButton" onclick="toggleCategoryDmsGuild();" href="#"><b>DM's Guild</b></button>
	</td>
</table>
<!--
<TABLE BORDER="3">
	<td>
	<button id="categoryD20srdLinksButton" onclick="toggleCategoryD20srd();" href="#"><b>Useful Tools (D20 srd)</b></button>
	</td>
</table>

</table>
-->
<!--
<button id="pathfinderLinksButton" onclick="togglePathfinderLinks();" href="#">Pathfinder</button>
<button id="fourthEditionLinksButton" onclick="fourthEditionLinks();" href="#">4e</button>
<button id="fifthEditionLinksButton" onclick="fifthEditionLinks();" href="#">5e</button><BR>
-->
<TABLE BORDER="3" id="categoryLinks" style="display: none;">
<td>

		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/fantasy/demographics/" target="_blank"><font color="blue"><b>Fantasy Demographics</b></font> </a><br>
		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/fantasy/name/#type=common;common=Human Male" target="_blank"><font color="blue"><b>Fantasy Names</b></font> </a><br>
		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/fantasy/world/" target="_blank"><font color="blue"><b>Fantasy Worlds</b></font> </a><br>

		-----------------------------------------------<br>

		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/d20/dungeon/" target="_blank"><font color="blue"><b>D20 Fantasy (3.X), Dungeons</b></font> </a><br>
		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/d20/encounter/" target="_blank"><font color="blue"><b>D20 Fantasy (3.X), Encounters</b></font> </a><br>
		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/d20/treasure/" target="_blank"><font color="blue"><b>D20 Fantasy (3.X), Treasure</b></font> </a><br>

	<td>

		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/adnd/dungeon/" target="_blank"><font color="blue"><b>AD&D Edition, Dungeons</b></font> </a><br>
		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/adnd/magic/shop.html" target="_blank"><font color="blue"><b>AD&D Edition, Magic Shops</b></font> </a><br>
		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/adnd/treasure/" target="_blank"><font color="blue"><b>AD&D Edition, Treasure</b></font> </a><br>

		---------------------------------------------<br>

		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/4e/dungeon/" target="_blank"><font color="blue"><b>4th Edition, Dungeons</b></font> </a><br>
		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/4e/encounter/" target="_blank"><font color="blue"><b>4th Edition, Encounters</b></font></a><br>
		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/4e/treasure/" target="_blank"><font color="blue"><b>4th Edition, Treasure </b></font></a><br>

	</td>

	<td>

		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/pathfinder/dungeon/" target="_blank"><font color="blue"><b>Pathfinder, Dungeons</b></font> </a><br>
		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/pathfinder/encounter/" target="_blank"><font color="blue"><b>Pathfinder, Encounters</b></font> </a><br>
		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/pathfinder/treasure/" target="_blank"><font color="blue"><b>Pathfinder, Treasure</b></font> </a><br>

		---------------------------------------------<br>

		&nbsp;&nbsp;&nbsp;<a href="https://donjon.bin.sh/5e/dungeon/" target="_blank"><font color="blue"><b>5th Edition, Dungeons</b></font> </a><br>
		&nbsp;&nbsp;&nbsp;<a href="http://donjon.bin.sh/5e/random/#type=encounter;n_pc=4;level=1;difficulty=any;environment=Underdark" target="_blank"><font color="blue"><b>5th Edition, Encounters</b></font> </a><br>
		&nbsp;&nbsp;&nbsp;<a href="http://donjon.bin.sh/5e/random/#type=treasure;cr=0;loot_type=Individual Treasure" target="_blank"><font color="blue"><b>5th Edition, Treasure</b></font> </a><br>

	</td>

</td>

</table>


<TABLE BORDER="3" id="categoryD20srdLinks" style="display: none;">
<td>
			&nbsp;&nbsp;&nbsp;<a href="http://www.d20srd.org/fantasy/inn/" target="_blank"><font color="blue"><b>Fantasy Inn Generator</b></font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.d20srd.org/d20/magic/shop.html" target="_blank"><font color="blue"><b>Magic Shop Generator</b></font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.d20srd.org/d20/treasure/" target="_blank"><font color="blue"><b>Treasure Generator</b></font> </a><br>
		

		<td>
			&nbsp;&nbsp;&nbsp;<a href="http://www.d20srd.org/d20/random/#type=npc" target="_blank"><font color="blue"><b>MiSCellaneous Generators</b></font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.d20srd.org/d20/demographics/" target="_blank"><font color="blue"><b>Demographics Generator</b></font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.d20srd.org/d20/encounter/" target="_blank"><font color="blue"><b>Encounter Generator</b></font> </a><br>
		</td>

		<td>
			&nbsp;&nbsp;&nbsp;<a href="http://www.d20srd.org/extras/d20monsterfilter/" target="_blank"><font color="blue"><b>Monster Filter</b></font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.d20srd.org/extras/d20spellfilter/" target="_blank"><font color="blue"><b>Spell Filter</b></font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.d20srd.org/extras/d20encountercalculator/" target="_blank"><font color="blue"><b>Encounter Calculator</b></font> </a><br>
		</td>


</td>

</table>

<TABLE BORDER="3" id="categoryDmsGuildLinks" style="display: none;">
<td>
			
			&nbsp;&nbsp;&nbsp;<a href="http://www.dmsguild.com/product/170777/Blood-Hunter-Class?hot60=0&src=slider_view&filters=45469" target="_blank"><font color="blue"><b>Blood Hunter Class</b></font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.dmsguild.com/product/175606/Order-of-the-Lycan-for-Blood-Hunters?hot60=0&src=slider_view&filters=45469" target="_blank"><font color="blue"><b>Order of the Lycan</b><br>(Blood Hunter Archetype)</font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.dmsguild.com/product/170778/Gunslinger-Martial-Archetype-for-Fighters?hot60=0&src=slider_view&filters=45469" target="_blank"><font color="blue"><b>Gunslinger</b><br>(Fighter Archetype)</font> </a><br>
		

		<td>
			&nbsp;&nbsp;&nbsp;<a href="http://www.dmsguild.com/product/183630/College-of-the-Maestro--Bard-College-Option?hot60=0&src=slider_view&filters=45469" target="_blank"><font color="blue"><b>College of the Maestro</b><br>(Bard College)</font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.dmsguild.com/product/171258/18-Extra-Feats-5e?filters=45469_0_0_0_0_0" target="_blank"><font color="blue"><b>18 Extra Feats</b><br> (5e Feats)</font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.dmsguild.com/product/170966/Blood-Magic-5e?filters=45469_0_0_0_0_0" target="_blank"><font color="blue"><b>Blood Magic</b></font> </a><br>
			
		</td>

		<td>
			&nbsp;&nbsp;&nbsp;<a href="http://www.dmsguild.com/product/177464/5e-Racial-Handbook--Over-40-New-Races-and-Subraces?filters=45469_0_0_0_0_0" target="_blank"><font color="blue"><b>5e Racial Handbook</b> (40  Races)</font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.dmsguild.com/product/182849/The-Lightborn--New-Race?filters=45469_0_0_0_0_0" target="_blank"><font color="blue"><b>The Lightborn</b> (Race)</font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.dmsguild.com/product/170851/Shaman-Class-5e?filters=45469_0_0_0_0_0" target="_blank"><font color="blue"><b>Shaman</b> (Class)</font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.dmsguild.com/product/182519/The-Eidolist-A-New-Class?filters=45469_0_0_0_0_0" target="_blank"><font color="blue"><b>The Eidolist</b> (Class)</font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.dmsguild.com/product/170971/Swordmage-Class?filters=45469_0_0_0_0_0" target="_blank"><font color="blue"><b>Swordmage</b> (Class)</font> </a><br>
		</td>

		<td>
			&nbsp;&nbsp;&nbsp;<a href="http://www.dmsguild.com/product/175177/Race-Compendium--Volume-One?filters=45469_0_0_0_0_0" target="_blank"><font color="blue"><b>Race Compendium</b><br> (Volume One)</b></font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.dmsguild.com/product/180283/Race-Compendium--Volume-Two?filters=45469_0_0_0_0_0" target="_blank"><font color="blue"><b>Race Compendium</b><br> (Volume Two)</font> </a><br>
			&nbsp;&nbsp;&nbsp;<a href="http://www.dmsguild.com/product/177212/Magic-Item-Compilation-Set-1?filters=45469_0_0_0_0_0" target="_blank"><font color="blue"><b>Magic Item Compilation</b></font> </a><br>
		</td>


</td>

</table>


<BR><BR>

<!-- Resource Links END -->

<script type="text/javascript">
    $(function($){
        var addToAll = false;
        var gallery = true;
        var titlePosition = 'inside';
        $(addToAll ? 'img' : 'img.fancybox').each(function(){
            var $this = $(this);
            var title = $this.attr('title');
            var src = $this.attr('data-big') || $this.attr('src');
            var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
            $this.wrap(a);
        });
        if (gallery)
            $('a.fancybox').attr('rel', 'fancyboxgallery');
        $('a.fancybox').fancybox({
            titlePosition: titlePosition
        });
    });
    $.noConflict();

</script>

<!-- IMAGES END -->

	<td>
<a href="http://www.brockjones.com/dieroller/dice.htm" target="_blank"><font color="blue"><b>Dice Roller. Originally created by Brock H. Jones</b></a> </font><br>
	</td>

<body onload="initPage();">

<dialog style="width:75%; height:75%" id="spell_dialog" align="center" close onclick="document.getElementById('spell_dialog').open = false"></dialog>

<table id="mainTable" class="mainTable" width="100%" valign="left" ><tr><td>

<!--<img src="header2.png" width="256" height="64" alt="Online Die Roller">-->
<!--<img src="header.png" width="256" height="64" alt="Online Die Roller">-->

<!--
<font size="4"> Online Die Roller &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</font></b></p>
-->

<!-- QUICK ROLL -->


<table id="rollHistoryTable" >


	<tr>
		<th>Roll History</th>
	</tr>
	<tr>

		<td>
			<textarea id="rollhistory" cols="90" rows="10" readonly="readonly"></textarea>
			<script type="text/javascript">
				document.getElementById('rollhistory').value = ""
			</script>
		</td>
	</tr>
	<tr>
		<td align="center"><input type="button" id="btnClearRollHistory" onclick="clearRollHistory();" value="Clear Roll History"></td>
	</tr>




</table>

<table class="sectionTable" cellpadding="0" cellspacing="0">
<col width="15"><col width="100%">
<tr>
	<td rowspan="2" class="sectionCellL"><input type="button" id="btndivQuickRoll" class="divtogglebtn" value="-" onclick="toggleDiv( 'divQuickRoll' );" ></td>
	<td><span class="heading">Quick Roll</span></td>
</tr>
<tr>
	<td class="sectionContent">
		<div id="divQuickRoll" style="display:block;">
		<p>Press a button to roll a single die with the specified number of sides.</p>
		<table class="quickRollTable">
		<tr>
			<td><input type="button" value="d2" onclick="rollDie( 2 );"><br><div class="divQuickResult" id="divQuickd2">&nbsp;</div></td>
			<td><input type="button" value="d3" onclick="rollDie( 3 );"><br><div class="divQuickResult" id="divQuickd3">&nbsp;</div></td>
			<td><input type="button" value="d4" onclick="rollDie( 4 );"><br><div class="divQuickResult" id="divQuickd4">&nbsp;</div></td>
			<td><input type="button" value="d6" onclick="rollDie( 6 );"><br><div class="divQuickResult" id="divQuickd6">&nbsp;</div></td>
			<td><input type="button" value="d8" onclick="rollDie( 8 );"><br><div class="divQuickResult" id="divQuickd8">&nbsp;</div></td>
			<td><input type="button" value="d10" onclick="rollDie( 10 );"><br><div class="divQuickResult" id="divQuickd10">&nbsp;</div></td>
			<td><input type="button" value="d12" onclick="rollDie( 12 );"><br><div class="divQuickResult" id="divQuickd12">&nbsp;</div></td>
			<td><input type="button" value="d20" onclick="rollDie( 20 );"><br><div class="divQuickResult" id="divQuickd20">&nbsp;</div></td>
			<td><input type="button" value="d100" onclick="rollDie( 100 );"><br><div class="divQuickResult" id="divQuickd100">&nbsp;</div></td>
		</tr>
		</table>

		</div>
	</td>
</tr>
<tr>
	<td class="sectionCellBL"></td>
	<td class="sectionCellB"></td>
</tr>
</table>


</body>
<!-- END QUICK ROLL -->


</html>
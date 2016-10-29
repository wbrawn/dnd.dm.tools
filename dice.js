var rollHistory = "";
var rollBuilder = "";

function positionHistory()
{
	mTable = document.getElementById('mainTable');
	hTable = document.getElementById('rollHistoryTable');
	

	//sTable = document.getElementById('statRollTable');
	//hTable.style.position = "absolute";
	//hTable.style.left = mTable.offsetLeft + mTable.offsetWidth;
	//hTable.style.top = window.document.body.scrollTop;
}

function initPage()
{
	generateMyRollTable();
	updateFullRoll( true );
	window.onscroll = positionHistory;
	
	//if( badPNGBrowser )
	//{
	//	correctPNG();
	//}	
}

function addToRollBuilder( rollString )
{
	rollBuilder += rollString;		
}

function addRollToHistory()
{
	rollHistory = rollBuilder + rollHistory;
	document.getElementById('rollhistory').value = rollHistory;
	rollBuilder = "";
}

function clearRollHistory()
{
	rollHistory = "";
	rollBuilder = "";
	document.getElementById('rollhistory').value = rollHistory;	
}

function randomInt( intMin, intMax )
{
	intMax = Math.round( intMax );
	intMin = Math.round( intMin );
	return intMin + Math.floor( intMax * (Math.random() % 1));
}

function rollDice( numRolls, numSides, bonus, rollingRules )
{
	var total = 0;
	var rolls = new Array( numRolls );
	rollString = "Rolling " + getRollDescription( 1, numRolls, numSides, bonus, 0, rollingRules );	
	rollString += "\n( ";

	for( var i = 0; i < numRolls; i++ )
	{	
		var roll = randomInt( 1, numSides );
		if( i == 0 )
			rollString += roll;
		else
			rollString += " + " + roll;
		rolls[i] = roll;
		total += roll;		
	}
	rollString += " )";
	
	
	switch( rollingRules )
	{
	case 1:
		break;
	case 2:
		// dropLowest
		drop = getLowest( rolls );
		total -= drop;
		rollString += "[ drop " + drop + " ]";
		break;
	case 3:
		// dropHighest
		drop = getHighest( rolls );
		total -= drop;
		rollString += "[ drop " + drop + " ]";
		break;
	case 4:
		// dropHigestAndLowest
		drop = getLowest( rolls );
		total -= drop;
		rollString += "[ drop " + drop;

		drop = getHighest( rolls );
		total -= drop;
		rollString += " AND " + drop + " ]";
		break;
	case 5:
		// drop all but lowest
		keep = getLowest( rolls );
		total = keep;
		rollString += "[ keep " + keep + " ]";
		break;
	case 6:
		// drop all but highest
		keep = getHighest( rolls );
		total = keep;
		rollString += "[ keep " + keep + " ]";
		break;
	}
	
	total += bonus;
	if( bonus != 0 )
		rollString += " + " + bonus;
		
	rollString += " = " + total + "\n";
	addToRollBuilder( rollString );
	
	return total;
}

function getLowest( rollArray )
{
	var lowest = rollArray[0];
	
	for( var i = 1; i < rollArray.length; i++ )
	{
		if( rollArray[i] < lowest )
		{
			lowest = rollArray[i];
		}
	}
	
	return lowest;
}

function getHighest( rollArray )
{
	var highest = rollArray[0];
	
	for( var i = 1; i < rollArray.length; i++ )
	{
		if( rollArray[i] > highest )
		{
			highest = rollArray[i];
		}
	}
	
	return highest;
}

function toggleDiv( divName )
{
	var myDiv = eval( divName );
	var myButton = eval( "btn" + divName );

	if( myDiv && myButton )
	{
		if( myDiv.style.display == "block" )
		{
			myDiv.style.display = "none";
			myButton.value = "+";
		}
		else
		{
			myDiv.style.display = "block";
			myButton.value = "-";
		}
	}
}

function setInnerHTMLDelay( blockName, value )
{
	var myBlock = eval( blockName );
	myBlock.innerHTML = "<span class=\"busyNotification\">ROLL";
	var cmd = "setInnerHTMLNow(\"" + blockName + "\",\"" + escape( value ) + "\");";
	setTimeout( cmd, 333 );
}

function setInnerHTMLNow( blockName, value )
{
	var myBlock = eval( blockName );
	myBlock.innerHTML = unescape( value );
}

function getRollDescription( multiplier, numRolls, numSides, perRollBonus, finalBonus, rollingRules )
{
	var d = "";

	if( multiplier > 1 && numRolls == 1 && perRollBonus == 0 )
	{
		numRolls = multiplier;
		multiplier = 1;
	}

	if( multiplier == 1 )
	{
		perRollBonus += finalBonus;
		finalBonus = 0;
	}

	if( multiplier > 1 )
	{
		d += multiplier + " * ( ";
	}

	d += numRolls + "d" + numSides;

	switch( rollingRules )
	{
	case 1:
		// Standard rules
		break;
	case 2:
		// Drop lowest
		d += " (drop lowest) ";
		break;
	case 3:
		// Drop highest
		d += " (drop highest) ";
		break;
	case 4:
		// Drop highest and lowest
		d += " (drop highest and lowest) ";
		break;
	case 5:
		// Drop all but lowest
		d += " (drop all but lowest) ";
		break;
	case 6:
		// Drop all but highest
		d += " (drop all but highest) ";
		break;
	}


	if( perRollBonus > 0 )
	{
		d += " + " + perRollBonus;
	}
	else if( perRollBonus < 0 )
	{
		d += " - " + Math.abs( perRollBonus );
	}

	if( multiplier > 1 )
	{
		d += " )";
	}

	if( finalBonus > 0 )
	{
		d += " + " + finalBonus;
	}
	else if( finalBonus < 0 )
	{
		d += " - " + Math.abs( finalBonus );
	}
	
	return d;
}

function getMinMedianMaxString( multiplier, numRolls, numSides, perRollBonus, finalBonus, rollingRules )
{
	if( rollingRules > 1 )
		numRolls--;
	if( rollingRules == 4 )
		numRolls--;
		
	var roll = 1;
	rollMin = ( multiplier * ( ( numRolls * roll ) + perRollBonus ) ) + finalBonus;
	roll = ( numSides + 1 ) / 2;
	rollMedian = ( multiplier * ( ( numRolls * roll ) + perRollBonus ) ) + finalBonus;
	roll = numSides;
	rollMax = ( multiplier * ( ( numRolls * roll ) + perRollBonus ) ) + finalBonus;

	return "min " + rollMin + " / median " + rollMedian + " / max " + rollMax;
}

function querySRD()
{
	var query = frmSRDQuery.txtSRDQuery.value;
	if( query )
	{
		var url = "http://www.d20srd.org/cgi-bin/search.cgi?config=www_d20srd_org&results_template=" + escape('d20srd/find/results.htm') + "&words=" + escape(query);
		window.open( url );
	}
}

function rollDie( numSides )
{
	var roll = randomInt( 1, numSides );
	var quickDiv = eval( "divQuickd" + numSides );
	if( quickDiv )
	{
		setInnerHTMLDelay( "divQuickd" + numSides, roll );
		addToRollBuilder( "1d" + numSides + " = " + roll + "\n\n" );
		addRollToHistory();
	}
}

function getCustomRolls()
{
	var rollList;

	var customrolls;
	// Check for the cookie
	var dc = document.cookie;
	if( dc.length > 0 )
	{
		var searchString = "customrolls="
		begin = dc.indexOf( searchString );
		if( begin != -1 )
		{
			begin += searchString.length;
			end = dc.indexOf( ";", begin );
			if( end == -1 )
			{
				end = dc.length;
			}

			customrolls = dc.substring( begin, end );
		}
	}


	if( customrolls )
	{

		var rollArray;
		customrolls = unescape( customrolls );
		rollArray = customrolls.split( ";" );

		if( rollArray )
		{
			rollList = new Array( rollArray.length );

			for( var i = 0; i < rollArray.length; i++ )
			{
				var rollData = rollArray[i].split( "," );

				if( rollData && ( rollData.length == 6 || rollData.length == 7 ) )
				{
					//name,multiplier,numRolls,numSides,perRollBonus,finalBonus,rollingRules
					var rollName = rollData[0];
					var rollParameters = [1,1,6,0,0,1];

					// Grab the values
					for( var j = 1; j < 7; j++ )
					{
						if( rollData[j] && !isNaN( rollData[j] ) )
						{
							if( rollData[j] )
								rollParameters[j-1] = parseInt( rollData[j] );
						}
					}

					rollList[ rollName ] = rollParameters;
				}
			}
		}
	}


	return rollList;
}

function generateMyRollTable()
{
	var rollList = getCustomRolls();
	var customRoll;
	var i = 0;
	var tableRows = "";

	for( customRoll in rollList )
	{
		var p = rollList[ customRoll ];
		// Write out the HTML for this roll
		tableRows += "<tr><td class=\"myRollName\">" + customRoll + "<br><input type=\"button\" value=\"Delete\" onclick=\"removeCustomRoll('" + customRoll + "');\" ></td>";
		tableRows += "<td class=\"myRollDescription\" nowrap><b>" + getRollDescription( p[0],p[1],p[2],p[3],p[4],p[5] ) + "</b><br>( " + getMinMedianMaxString(p[0],p[1],p[2],p[3],p[4],p[5]) + " )</td>";
		tableRows += "<td class=\"myRollButton\"><input type=\"hidden\" name=\"myRollData" + i + "\" value=\"" + p[0] + "," + p[1] + "," + p[2] + "," + p[3] + "," + p[4] + "," + p[5] + "\" >";
		tableRows += "<input type=\"button\" value=\"Roll\" onclick=\"doCustomRoll('" + customRoll + "');\" ></td>";
		tableRows += "<td class=\"myRollResult\"><div id=\"divMyRollResult" + i + "\" class=\"result\">&nbsp;</div></td></tr>";

		i++;
	}
	divMyRollTable.innerHTML = "<table class=\"myRolls\">" + tableRows + "</table>";
}


function addCustomRoll()
{
	var rollList = getCustomRolls();

	// Prompt the user for a name for the roll
	var customRollCount = (rollList) ? rollList.length : 1;
	var rollName = prompt( "Roll Name: ", "My Roll " + customRollCount );
	if( !rollName || rollName == "" )
		return;

	var multiplier, numRolls, numSides, perRollBonus, finalBonus, rollingRules;
	var val;

	multiplier = (txtFullRollMultiplier.value && !isNaN(txtFullRollMultiplier.value)) ? parseInt( txtFullRollMultiplier.value ) : 1;
	multiplier = (multiplier == 0) ? 1 : multiplier;

	numRolls = (txtFullRollNumRolls.value && !isNaN(txtFullRollNumRolls.value)) ? parseInt( txtFullRollNumRolls.value ) : 1;
	numRolls = (numRolls == 0) ? 1 : numRolls;

	numSides = (txtFullRollNumSides.value && !isNaN(txtFullRollNumSides.value)) ? parseInt( txtFullRollNumSides.value ) : 6;
	numSides = (numSides < 2 ) ? 2 : numSides;

	perRollBonus = (txtFullRollPerRollBonus.value && !isNaN(txtFullRollPerRollBonus.value)) ? parseInt( txtFullRollPerRollBonus.value ) : 0;

	finalBonus = (txtFullRollFinalBonus.value && !isNaN(txtFullRollFinalBonus.value)) ? parseInt( txtFullRollFinalBonus.value ) : 0;
	
	if( multiplier > 1 && numRolls == 1 && perRollBonus == 0 )
	{
		numRolls = multiplier;
		multiplier = 1;
	}
	
	if( multiplier == 1 )
	{
		perRollBonus += finalBonus;
		finalBonus = 0;
	}
	
	rollingRules = parseInt( selectFullRollRules.options[ selectFullRollRules.selectedIndex ].value );
	if( ( rollingRules > 1 && numRolls < 2 ) ||
	    ( rollingRules == 4 && numRolls < 3 ) )
	{
		rollingRules = 1;
	}
		
	if( !rollList )
	{
		rollList = new Array(1);
	}
	var rollParameters = [ multiplier,numRolls,numSides,perRollBonus,finalBonus,rollingRules ];
	var rollString = "";

	rollList[ rollName ] = rollParameters;
	for( customKey in rollList )
	{
		var p = rollList[ customKey ];
		if( p )
		{
			if( p.length == 5 )
				rollString += customKey + "," + p[0] + "," + p[1] + "," + p[2] + "," + p[3] + "," + p[4] + ",1;";
			else if( p.length == 6 )
				rollString += customKey + "," + p[0] + "," + p[1] + "," + p[2] + "," + p[3] + "," + p[4] + "," + p[5] + ";";
		}
	}
	
	if( rollString != "" )
	{
		rollString = escape( rollString );
		// Always write/update the cookie!
		var today = new Date();
		var expiry = new Date(today.getTime() + (1000 * 60 * 60 * 24 * 365)); // 365 days in the future
		document.cookie = "customrolls=" + rollString + "; expires=" + expiry.toGMTString();
		
		document.location = document.location; //document.location.href="http:// my website address";
	}
}

function removeCustomRoll( rollName )
{
	var rollList = getCustomRolls();
	var rollString = "";

	if( rollList )
	{
		for( customKey in rollList )
		{
			if( customKey != rollName )
			{
				var p = rollList[ customKey ];
				if( p )
				{
					if( p.length == 5 )
						rollString += customKey + "," + p[0] + "," + p[1] + "," + p[2] + "," + p[3] + "," + p[4] + ",1;";
					else if( p.length == 6 )
						rollString += customKey + "," + p[0] + "," + p[1] + "," + p[2] + "," + p[3] + "," + p[4] + "," + p[5] + ";";
				}
			}
		}
	}

	rollString = escape( rollString );
	// Always write/update the cookie!
	var today = new Date();
	var expiry = new Date(today.getTime() + (1000 * 60 * 60 * 24 * 365)); // 365 days in the future
	document.cookie = "customrolls=" + rollString + "; expires=" + expiry.toGMTString();

	document.location = document.location;

}

function touchCookie()
{
	// update the expiry on the cookie
	var rollList = getCustomRolls();
	var rollString = "";

	// we only bother to update the cookie if there is anything in it.
	if( rollList )
	{
		for( customKey in rollList )
		{
			var p = rollList[ customKey ];
			if( p )
			{	
				if( p.length == 5 )
					rollString += customKey + "," + p[0] + "," + p[1] + "," + p[2] + "," + p[3] + "," + p[4] + ",1;";
				else if( p.length == 6 )
					rollString += customKey + "," + p[0] + "," + p[1] + "," + p[2] + "," + p[3] + "," + p[4] + "," + p[5] + ";";
				
			}
		}
		
		rollString = escape( rollString );	
		var today = new Date();
		var expiry = new Date(today.getTime() + (1000 * 60 * 60 * 24 * 365)); // 365 days in the future
		document.cookie = "customrolls=" + rollString + "; expires=" + expiry.toGMTString();
	}
}

function doCustomRoll( rollName )
{
	var rollList = getCustomRolls();

	if( rollList )
	{
		var i = 0;
		for( customRoll in rollList )
		{
			if( customRoll == rollName )
			{
				var p = rollList[ customRoll ];
				if( p )
				{
					addToRollBuilder( "Rolling \"" + rollName + "\" : " + getRollDescription( p[0], p[1], p[2], p[3], p[4], p[5] ) + "\n" );
					var total = 0;
					var rollString = "----\n( ";
					for( var j = 0; j < p[0]; j++ )
					{
						var rollingRules = (p[5]) ? p[5] : 1;
						roll = rollDice( p[1], p[2], p[3], rollingRules );
						total += roll
						if( j == 0 )
							rollString += roll;
						else
							rollString += " + " + roll;
					}
					total += p[4];
					
					rollString += " ) + " + p[4] + " = " + total + "\n";
					if( p[4] != 0 )
						addToRollBuilder( rollString );

					addToRollBuilder( "\n" );
						
					addRollToHistory();
					setInnerHTMLDelay( "divMyRollResult" + i, total );
					return;
				}
			}

			i++;
		}
	}
}

function updateFullRoll( validate )
{
	var multiplier, numRolls, numSides, perRollBonus, finalBonus, rollingRules;
	var val;

	val = txtFullRollMultiplier.value;
	multiplier = (val && !isNaN(val)) ? parseInt( val ) : 1;
	multiplier = (multiplier == 0) ? 1 : multiplier;
	if( validate )
		txtFullRollMultiplier.value = multiplier;

	val = txtFullRollNumRolls.value;
	numRolls = (val && !isNaN(val)) ? parseInt( val ) : 1;
	numRolls = (numRolls == 0) ? 1 : numRolls;
	if( validate )
		txtFullRollNumRolls.value = numRolls;

	val = txtFullRollNumSides.value;
	numSides = (val && !isNaN(val)) ? parseInt( val ) : 6;
	if( validate )
		txtFullRollNumSides.value = numSides;

	val = txtFullRollPerRollBonus.value;
	perRollBonus = (val && !isNaN(val)) ? parseInt( val ) : 0;
	if( validate )
		txtFullRollPerRollBonus.value = perRollBonus;

	val = txtFullRollFinalBonus.value;
	finalBonus = (val && !isNaN(val)) ? parseInt( val ) : 0;
	if( validate )
		txtFullRollFinalBonus.value = finalBonus;
		
	rollingRules = parseInt( selectFullRollRules.options[ selectFullRollRules.selectedIndex ].value );
		
	if( numRolls == 1 && multiplier > 1 && perRollBonus == 0 )
	{
		numRolls = multiplier;
		multiplier = 1;
	}
	
	if( numRolls > 1 )
	{
		divFullRollRules.style.display = "block";
	}
	else
	{
		divFullRollRules.style.display = "none";
		rollingRules = 1;
		selectFullRollRules.selectedIndex = rollingRules - 1;
	}
	
	if( rollingRules == 4 && numRolls < 3 )
	{
		rollingRules = 1;
		selectFullRollRules.selectedIndex = rollingRules - 1;
	}
	
	var rollDescription = getRollDescription( multiplier, numRolls, numSides, perRollBonus, finalBonus, rollingRules );
	var rollMinMax = getMinMedianMaxString( multiplier, numRolls, numSides, perRollBonus, finalBonus, rollingRules );
	var rollCell = "<b>" + rollDescription + "</b><br>" + rollMinMax;

	var buttonCell = "<input type=\"button\" value=\"Roll\" onclick=\"doFullRoll();\"><br>";
	buttonCell += "<input type=\"button\" value=\"Add to 'My Rolls'\" onclick=\"addCustomRoll();\" " + ">";
	buttonCell += "<input type=\"hidden\" value=\"" + multiplier + "," + numRolls + "," + numSides + "," + perRollBonus + "," + finalBonus + "," + rollingRules + "\" >";
		
	divFullRollDescription.innerHTML = rollCell;
	divFullRollButton.innerHTML = buttonCell;
}

function doFullRoll()
{
	var multiplier, numRolls, numSides, perRollBonus, finalBonus, rollingRules;
	var val;
	
	val = txtFullRollMultiplier.value;
	multiplier = (val && !isNaN(val)) ? parseInt( val ) : 1;
	multiplier = (multiplier == 0) ? 1 : multiplier;
	txtFullRollMultiplier.value = multiplier;

	val = txtFullRollNumRolls.value;
	numRolls = (val && !isNaN(val)) ? parseInt( val ) : 1;
	numRolls = (numRolls == 0) ? 1 : numRolls;
	txtFullRollNumRolls.value = numRolls;

	val = txtFullRollNumSides.value;
	numSides = (val && !isNaN(val)) ? parseInt( val ) : 6;
	txtFullRollNumSides.value = numSides;

	val = txtFullRollPerRollBonus.value;
	perRollBonus = (val && !isNaN(val)) ? parseInt( val ) : 0;
	txtFullRollPerRollBonus.value = perRollBonus;

	val = txtFullRollFinalBonus.value;
	finalBonus = (val && !isNaN(val)) ? parseInt( val ) : 0;
	txtFullRollFinalBonus.value = finalBonus;

	if( multiplier > 1 && numRolls == 1 && perRollBonus == 0 )
	{
		numRolls = multiplier;
		multiplier = 1;
	}
	if( multiplier == 1 )
	{
		perRollBonus += finalBonus;
		finalBonus = 0;
	}
	
	val = selectFullRollRules.options[ selectFullRollRules.selectedIndex ].value;
	rollingRules = (val && !isNaN( val ) ) ? parseInt( val ) : 1;
	selectFullRollRules.selectedIndex = rollingRules - 1;

	var total = 0;
	var rollString = "----\n";
	if( multiplier > 1 )
	{
		addToRollBuilder( getRollDescription( multiplier, numRolls, numSides, perRollBonus, finalBonus, rollingRules ) + "\n" );
		rollString += "( ";
		
	}
	for( var i = 0; i < multiplier; i++ )
	{
		roll = rollDice( numRolls, numSides, perRollBonus, rollingRules );
		total += roll;
		if( i == 0 )
			rollString += roll;
		else
			rollString += " + " + roll;
	}

	total += finalBonus;
	if( multiplier > 1 )
		rollString += " )";
		
	if( finalBonus != 0 )
		rollString += " + " + finalBonus;
	rollString += " = " + total + "\n";
	if( multiplier > 1 || finalBonus != 0 )
		addToRollBuilder( rollString );

	addToRollBuilder( "\n" );
	addRollToHistory();

	var report = "<span class=\"result\">" + total + "</span>";

	setInnerHTMLDelay( "divFullRollResult", report );

}

function rollStats()
{
	var val = selectStatRollStyle.value;
	var style = (val) ? parseInt( val ) : 3;
	var results = new Array(6);
	var statTotal = 0;
	var bonusTotal = 0;
	var pbe = 0;
	var report = "";

	switch( style )
	{
	case 1:
		for( var i = 0; i < 6; i++ )
		{
			var roll = 0;
			for( var j = 0; j < 3; j++ )
			{
				roll += randomInt( 1,6 );
			}
			results[i] = roll;
		}
		break;

	case 2:
		for( var i = 0; i < 6; i++ )
		{
			var roll = 0;
			var roll1 = 0;
			for( var j = 0; j < 3; j++ )
			{
				roll1 += randomInt( 1,6 );
			}

			var roll2 = 0;
			for( var j = 0; j < 3; j++ )
			{
				roll2 += randomInt( 1,6 );
			}

			var roll3 = 0;
			for( var j = 0; j < 3; j++ )
			{
				roll3 += randomInt( 1,6 );
			}

			roll = roll1;
			roll = (roll2 > roll ) ? roll1 : roll;
			roll = (roll3 > roll ) ? roll1 : roll;

			results[i] = roll;
		}
		break;

	case 3:
		for( var i = 0; i < 6; i++ )
		{
			var roll;
			var roll1, roll2, roll3, roll4;
			var least;

			roll1 = randomInt( 1,6 );
			roll2 = randomInt( 1,6 );
			roll3 = randomInt( 1,6 );
			roll4 = randomInt( 1,6 );

			roll = roll1 + roll2 + roll3 + roll4;

			least = roll1;
			least = ( roll2 < least ) ? roll2 : least;
			least = ( roll3 < least ) ? roll3 : least;
			least = ( roll4 < least ) ? roll4 : least;

			roll -= least;

			results[i] = roll;
		}
		break;

	case 4:
		for( var i = 0; i < 6; i++ )
		{
			var roll = 0;
			for( var j = 0; j < 2; j++ )
			{
				roll += randomInt( 1,6 );
			}
			roll += 6;

			results[i] = roll;
		}

		break;
		
	case 5:
		for( var i = 0; i < 6; i++ )
		{
			var rolls = new Array( 4 );
			var pickedRolls = new Array( 3 );
			var total = 0;
			for( var j = 0; j < 4; j++ )
			{
				rolls[j] = randomInt( 1,6 );
			}
			
			var low = getLowest( rolls );
			var k = 0;
			var dropped = false;
			for( var j = 0; j < 4; j++ )
			{
				if( rolls[j] == low && !dropped )
				{
					dropped = true;
				}
				else
				{
					pickedRolls[k++] = rolls[j];
				}
			}
			
			for( var j = 0; j < 3; j++ )
			{
				while( pickedRolls[j] == 1 )
				{
					pickedRolls[j] = randomInt( 1,6 );
				}
				total += pickedRolls[j];
			}
			
			results[i] = total;
		}
		break;
		
	}

	report = "<table cellpadding=\"5\" class=\"resultTable\"><tr><th>&nbsp;</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>Total</th></tr><tr><th>Roll</th>";
	for( var i = 0; i < 6; i++ )
	{
		statTotal += results[i];
		report += "<td align=\"center\">" + results[i] + "</td>";
	}
	report += "<th>" + statTotal + "</th></tr><tr><th>Bonus</th>"

	// Tally bonus scores
	for( var i = 0; i < 6; i++ )
	{
	
		var bonus = Math.floor( results[i] / 2 ) - 5;
		bonusTotal += bonus;
		report += "<td align=\"center\">" + ( ( bonus >= 0 ) ? "+" : "" ) + bonus + "</td>"
	}

	bonusTotal = ( bonusTotal >= 0 ) ? "+" + bonusTotal : bonusTotal;
	report += "<th>" + bonusTotal + "</th></tr>";
	
	if( chkShowPBE.checked )
	{
		report += "<tr><th>PBE</th>";

		// Tally point buy equivalents
		for( var i = 0; i < 6; i++ )
		{
			var points = ( Math.min( 14, results[i] ) - 8 ) + ( 2 * Math.max( 0, results[i] - 14 ) );
			pbe += points;
			report += "<td align=\"center\">" + points + "</td>"	
		}
		report += "<th>" + pbe + "</th></tr>";
	}
	
	report += "</table>";

	setInnerHTMLDelay( "divStatRollResults", report );
}


function modify_qty(el,value_change) {
	x = el;
	
	qnty_el = $(el).parent().children()[2];
	//console.log(qnty_el);
	$(qnty_el).val(Number($(qnty_el).val()) + value_change);
return;

}
/*
function reset_qty(){
	x = "0";

	document.getElementById('qty1').value = x;
	document.getElementById('qty2').value = x;
	document.getElementById('qty3').value = x;
	document.getElementById('qty4').value = x;
	document.getElementById('qty5').value = x;
	document.getElementById('qty6').value = x;
	document.getElementById('qty7').value = x;
	document.getElementById('qty8').value = x;
	document.getElementById('qty9').value = x;

}
*/
/*
var obj = $('[id=qty]');
	for (var i = 0, x = obj.length; i <x; i++){
		$('[id=qty]')[0].val(i);


	}
$('[id=qty]').val(0);
}
*/
reset_qty = function ()
{
	//x = "0";

	document.getElementById('qty1').value = ss1;
	document.getElementById('qty2').value = ss2;
	document.getElementById('qty3').value = ss3;
	document.getElementById('qty4').value = ss4;
	document.getElementById('qty5').value = ss5;
	document.getElementById('qty6').value = ss6;
	document.getElementById('qty7').value = ss7;
	document.getElementById('qty8').value = ss8;
	document.getElementById('qty9').value = ss9;

}


function saveScreen() 
{ 
    window.print();
} 

/*

function printDiv(div)
{
    html2canvas([document.getElementById('cardview')], {   
        onrendered: function(canvas)  
        {
            var img = canvas.toDataURL()
            $.post("save.php", {data: img}, function (file) {
            window.location.href =  "download.php?path="+ file});   
        }
    });         
}

html2canvas(element) {
    onrendered: function(canvas) {
        // canvas is the final rendered <canvas> element
    }
});
*/









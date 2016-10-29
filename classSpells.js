var bardSpells = "";

bardSpells = function (cl)
{
        ss1 = level + 1;
        ss2 = 0;
        
        
        if (level > 2) 
        {
            ss2 = 2;
        }
        if (level > 3) 
        {
            ss1 = 4;
            ss2 = 3;
        }
        if (level > 3) 
        {
            ss1 = 4;
            ss2 = 3;
        }
        if (level == 5) 
        {
            ss3 = 2;
        }
        if (level > 5) 
        {
            ss3 = 3;
        }
        if (level == 6) 
        {
            ss4 = 1;
        }
        if (level > 6) 
        {
            ss4 = 2;
        }
        if (level > 8) 
        {
            ss4 = 3;
            ss5 = 1;
        }
        if (level > 9) 
        {
            ss5 = 2;
        }
        if (level > 10) 
        {
            ss5 = 2;
            ss6 = 1;
        }
        
        if (level > 12) 
        {
            ss7 = 1;
        }
        if (level > 14) 
        {
            ss8 = 1;
        }
        if (level > 16) 
        {
            ss9 = 1;
        }
        if (level > 17) 
        {
            ss5 = 3;
        }
        if (level > 18) 
        {
            ss6 = 2;
        }
        if (level > 19) 
        {
            ss7 = 2;
        }
        
        sp1 = 4;
        sp2 = 0;
        if (level > 1) 
        {
            sp1 = 5;
        }
        if (level > 2) 
        {
            sp1 = 4;
            sp2 = 2;
        }
        if (level > 3) 
        {
            sp2 = 3;
        }
        if (level > 4) 
        {
            sp3 = 2;
        }
        if (level > 5) 
        {
            sp4 = 1;
        }
        if (level > 6) 
        {
            sp3 = 3;
        }
        if (level > 8) 
        {
            sp4 = 2;
            sp5 = 1;
        }
        //14 spells at level 10
        if (level > 9) 
        {
            sp5 = 2;
            sp2 = 2;
            sp3 = 2;
        }
        if (level > 10) 
        {
            sp6 = 1;
        }
        //3rd level spells trippled at this point, sp3=1/sp1=2 is temp fix for total spells known, but it works, i just want to make it better
        if (level > 12) 
        {
            sp6 = 2;
            sp7 = 1;
            sp3 = 1;
            sp1 = 2;
        }
        if (level > 13) 
        {
            sp7 = 2;
            sp6 = 1;
        }
        if (level > 14) 
        {
            sp8 = 1;
        }
        if (level > 16) 
        {
            sp9 = 1;
        }
        //22 spells at level 20
        if (level > 17) 
        {
            sp9 = 1;
        }
        //4th level spells trippled at this point, sp4=1;/sp2=2;/sp5=1; is temp fix for total spells known, but it works, i just want to make it better
        if (level > 18) 
        {
            sp4 = 1;
            sp2 = 2;
            sp5 = 1;
        }
        
        
        console.log("spellsknown:  " + sp1 + "/" + sp2 + "/" + sp3 + "/" + sp4 + "/" + sp5 + "/" + sp6 + "/" + sp7 + "/" + sp8 + "/" + sp9 + "/");
        //alert("spellsknown:  "+sp1+"/"+sp2+"/"+sp3+"/"+sp4+"/"+sp5+"/"+sp6+"/"+sp7+"/"+sp8+"/"+sp9+"/");
        
        sp = sp1 + sp2 + sp3 + sp4 + sp5 + sp6 + sp7 + sp8 + sp9;
        
        
        
        
        //cantrips
        x = 2;
        if (level > 3)
            x = 3;
        if (level > 9)
            x = 4;
        while (x > 0) {
            tempAr = baCantrip;
            if (Math.random() < 0.66)
                tempAr = ["Blade Ward", "Minor Illusion", "True Strike", "Vicious Mockery", "Vicious Mockery"];
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            // check if we already know spell
            if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                // add cantrip
                myCantrips.push(temp);
                x--;
            }
        }
        //put in alphabetical order
        myCantrips.sort();
        
        tempSpells = [];
        
        
        //1st Level
        x = sp1;
        while (x > 0) {
            tempAr = ba1;
            if (Math.random() < 0.66)
                tempAr = ["Charm Person", "Cure Wounds", "Cure Wounds", "Dissonant Whispers", "Dissonant Whispers", "Healing Word", "Healing Word", "Silent Image", "Sleep", "Tasha's Hideous Laughter", "Thunderwave", "Thunderwave"];
            
            
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) > -1) {
            } 
            else {
                // add it
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells0 = mySpells0.concat(tempSpells);
        
        //2nd level
        tempSpells = [];
        x = sp2;
        
        while (x > 0) {
            tempAr = ba2;
            if (Math.random() < 0.66)
                tempAr = ["Blindness/Deafness", "Cloud of Daggers", "Crown of Madness", "Enhance Ability", "Heat Metal", "Hold Person", "Invisibility", "Phantasmal Force", "Shatter", "Suggestion"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells1 = mySpells1.concat(tempSpells);
        
        
        //3rd level
        tempSpells = [];
        x = sp3;
        
        while (x > 0) {
            tempAr = ba3;
            if (Math.random() < 0.5)
                tempAr = ["Bestow Curse", "Clairvoyance", "Dispel Magic", "Fear", "Glyph of Warding", "Hypnotic Pattern", "Leomund’s Tiny Hut Ritual", "Major Image", "Stinking Cloud"];
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells2 = mySpells2.concat(tempSpells);
        
        
        //4th level
        tempSpells = [];
        x = sp4;
        while (x > 0) {
            tempAr = ba4;
            if (Math.random() < 0.5)
                tempAr = ["Compulsion", "Confusion", "Dimension Door", "Greater Invisibility", "Polymorph"];
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells3 = mySpells3.concat(tempSpells);
        
        
        //5th level
        tempSpells = [];
        x = sp5;
        
        while (x > 0) {
            tempAr = ba5;
            if (Math.random() < 0.5)
                tempAr = ["Animate Objects", "Dominate Person", "Geas", "Greater Restoration", "Hold Monster", "Legend Lore", "Mass Cure Wounds", "Mass Cure Wounds", "Mislead", "Modify Memory", "Planar Binding", "Raise Dead", "Seeming", "Teleportation Circle"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells4 = mySpells4.concat(tempSpells);
        
        // 6th level bard lore spells
        if (abOutput.indexOf("Additional Magic") > -1) {
            tempSpells = [];
            x = 2;
            while (x > 0) {
                tempAr = ["Fireball", "Lightning Bolt", "Fly", "Gaseous Form", "Mass Healing Word", "Revivify", "Call Lightning", "Conjure Animals", "Wind Wall", "Blinding Smite", "Lightning Arrow", "Conjure Barrage", "Aura of Vitality"];
                temp = tempAr[Math.floor(Math.random() * tempAr.length)];
                if (tempSpells.indexOf(temp) == -1) {
                    tempSpells.push(temp);
                    x--;
                }
            
            }
            tempSpells.sort();
            loSpells = loSpells.concat(tempSpells);
        }
        
        //6th level
        tempSpells = [];
        x = sp6;
        
        while (x > 0) {
            tempAr = ba6;
            if (Math.random() < 0.5)
                tempAr = ["Eyebite", "Find the Path", "Guards and Wards", "Mass Suggestion", "Otto's Irresistible Dance", "Otto's Irresistible Dance", "Otto's Irresistible Dance", "Programmed IlIusion", "True Seeing"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells5 = mySpells5.concat(tempSpells);
        
        //7th level
        tempSpells = [];
        x = sp7;
        
        while (x > 0) {
            tempAr = ba7;
            if (Math.random() < 0.5)
                tempAr = ["Etherealness", "Forcecage", "Mirage Arcane", "Mordenkainen's Magnificent Mansion", "Mordenkainen's Sword", "Project Image", "Regenerate", "Resurrection", "Symbol", "Teleport", "Teleport"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells6 = mySpells6.concat(tempSpells);
        
        
        //8th level
        tempSpells = [];
        x = sp8;
        
        while (x > 0) {
            tempAr = ba8;
            if (Math.random() < 0.5)
                tempAr = ["Dominate Monster", "Dominate Monster", "Feeblemind", "Glibness", "Glibness", "Mind Blank", "Power Word Stun"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells7 = mySpells7.concat(tempSpells);
        
        
        //9th level
        tempSpells = [];
        x = sp9;
        
        while (x > 0) {
            tempAr = ba9;
            if (Math.random() < 0.5)
                tempAr = ["Foresight", "Power Word Heal", "True Polymorph", "True Polymorph"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells8 = mySpells8.concat(tempSpells);
        
        
        
        //10th level secrets
        if (level > 9) {
            tempSpells = [];
            x = 2;
            while (x > 0) {
                tempAr = ["Ice Storm", "Bigby’s Hand", "CloudkilI", "Cone of Cold", "Conjure Elemental", "Passwall", "Wall of Force", "Wall of Stone", "Antilife Shell", "Contagion", "Insect Plague", "Flame Strike", "Death Ward", "Conjure Volley", "Conjure Woodland Beings", "Banishing Smite"];
                
                temp = tempAr[Math.floor(Math.random() * tempAr.length)];
                if (tempSpells.indexOf(temp) == -1) {
                    tempSpells.push(temp);
                    x--;
                }
            
            }
            tempSpells.sort();
            loSpells = loSpells.concat(tempSpells);
        }
        
        
        
        //14th level secrets
        if (level > 13) {
            tempSpells = [];
            x = 2;
            while (x > 0) {
                tempAr = ["Harm", "Heal", "Heroes' Feast", "Heroes' Feast", "Conjure Celestial", "Fire Storm", "Sunbeam", "Wind Walk", "Reverse Gravity", "Raise Dead", "Banishing Smite", "Banishing Smite", "Destructive Wave", "Dispel Evil and Good", "Geas", "Banishment", "Banishment", "Aura of Life", "Aura of Life", "Staggering Smite", "Swift Quiver", "Swift Quiver", "Swift Quiver", "Swift Quiver", "Conjure Volley", "Delayed Blast Fireball", "Mordenkainen's Private Sanetum", "Modify Memory", "Modify Memory", "Modify Memory"];
                
                temp = tempAr[Math.floor(Math.random() * tempAr.length)];
                if (tempSpells.indexOf(temp) == -1) {
                    tempSpells.push(temp);
                    x--;
                }
            
            }
            tempSpells.sort();
            loSpells = loSpells.concat(tempSpells);
        }
        
        
        
        //18th level secrets
        if (level > 17) {
            tempSpells = [];
            x = 2;
            while (x > 0) {
                tempAr = ["Antimagic Field", "Control Weather", "Earthquake", "Holy Aura", "Astral Projection", "Gate", "Mass Heal", "True Resurrection", "Animal Shapes", "Antipathy/Sympathy", "Sunburst", "Tsunami", "Foresight", "Foresight", "Shapechange", "Storm ofVengeance", "Incendiary Cloud", "Meteor Swarm", "Time Stop", "Time Stop", "Time Stop", "Wish", "Wish", "Wish", "Wish", "Wish", "Imprisonment", "Demiplane", "Clone", "Clone", "Maze", "Mind Blank", "Telepathy", "Trap the Soul"];
                
                temp = tempAr[Math.floor(Math.random() * tempAr.length)];
                if (tempSpells.indexOf(temp) == -1) {
                    tempSpells.push(temp);
                    x--;
                }
            
            }
            tempSpells.sort();
            loSpells = loSpells.concat(tempSpells);
        }
    
    }


function clericSpells()

    {
        ss1 = level + 1;
        ss2 = 0;
        if (level > 2)
            ss2 = 2;
        if (level > 3) 
        {
            ss1 = 4;
            ss2 = 3;
        }
        if (level == 5)
            ss3 = 2;
        if (level > 5)
            ss3 = 3;
        if (level > 6)
            ss4 = (level - 6);
        if (level > 8) {
            ss4 = 3;
            ss5 = 1;
        }
        
        if (level > 9)
            ss5 = 2;
        if (level > 10) 
        {
            ss5 = 2;
            ss6 = 1;
        }
        
        if (level > 12)
            ss7 = 1;
        
        if (level > 14)
            ss8 = 1;
        
        if (level > 16)
            ss9 = 1;
        
        if (level > 17)
            ss5 = 3;
        
        if (level > 18)
            ss6 = 2;
        
        if (level > 19)
            ss7 = 2;
        
        
        sp = level + mod[4];
        sp1 = 0;
        sp2 = 0;
        sp3 = 0;
        sp4 = 0;
        sp5 = 0;
        sp6 = 0;
        sp7 = 0;
        sp8 = 0;
        sp9 = 0;
        if (level < 3) 
        {
            sp1 = sp;
            sp2 = 0;
        } 
        else if (level < 5) 
        {
            x = Math.floor(sp * .7);
            sp1 = x;
            sp2 = (sp - x);
        } 
        else if (level < 7) 
        {
            x = Math.floor(sp * .35);
            y = Math.floor(sp * .35);
            
            sp1 = x;
            z = sp - x - y;
            sp2 = y;
            sp3 = z;
        
        } 
        else if (level < 9) 
        {
            x = Math.floor(sp * .28);
            y = Math.floor(sp * .28);
            z = Math.floor(sp * .28);
            
            sum = sp - x - y - z;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = x;
        
        } 
        else if (level < 11) 
        {
            x = Math.floor(sp * .21);
            y = Math.floor(sp * .18);
            z = Math.floor(sp * .18);
            xx = Math.floor(sp * .21);
            
            sum = sp - x - y - z - xx;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
        
        
        } 
        else if (level < 13) 
        {
            x = Math.floor(sp * .14);
            y = Math.floor(sp * .14);
            z = Math.floor(sp * .14);
            xx = Math.floor(sp * .14);
            yy = Math.floor(sp * .14);
            
            sum = sp - x - y - z - xx - yy;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
        
        } 
        else if (level < 15) 
        {
            
            x = Math.floor(sp * .12);
            y = Math.floor(sp * .12);
            z = Math.floor(sp * .11);
            xx = Math.floor(sp * .12);
            yy = Math.floor(sp * .12);
            zz = Math.floor(sp * .12);
            
            sum = sp - x - y - z - xx - yy - zz - 2;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
            sp7 = zz;
        
        } 
        else if (level < 17) 
        {
            x = Math.floor(sp * .12);
            y = Math.floor(sp * .10);
            z = Math.floor(sp * .08);
            xx = Math.floor(sp * .10);
            yy = Math.floor(sp * .12);
            zz = Math.floor(sp * .10);
            yyy = Math.floor(sp * .10);
            
            sum = sp - x - y - z - xx - yy - zz - yyy - 2;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
            sp7 = zz;
            sp8 = yyy;
        
        } 
        else if (level >= 17) 
        {
            x = Math.floor(sp * .1);
            y = Math.floor(sp * .1);
            z = Math.floor(sp * .08);
            xx = Math.floor(sp * .1);
            yy = Math.floor(sp * .1);
            zz = Math.floor(sp * .1);
            yyy = Math.floor(sp * .1);
            zzz = Math.floor(sp * .1);
            
            sum = sp - x - y - z - xx - yy - zz - yyy - zzz - 2;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
            sp7 = zz;
            sp8 = yyy;
            sp9 = zzz;
        
        
        }
        console.log("Spells known:  " + sp1 + "/ " + sp2 + "/ " + sp3 + "/ " + sp4 + "/ " + sp5 + " / " + sp6 + " / " + sp7 + " / " + sp8 + " / " + sp9 + " / Total = " + sp);
        
        //if ((sp1+sp2+sp3+sp4+sp5+sp6+sp7+sp8+sp9) != sp)
        //  console.log("not the right number of spells known");
        
        //cantrips
        x = 0;
        //1 druid cantrip for nature clerics
        if (clDomain == 3) {
            x = 1;
            while (x > 0) {
                tempAr = drCantrip;
                if (Math.random() < 0.66)
                    tempAr = ["Druidcraft", "Guidance", "Poison Spray", "Resistance", "Shillelagh", "Thorn Whip"];
                temp = tempAr[Math.floor(Math.random() * tempAr.length)];
                // check if we already know spell
                
                if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                    
                    myCantrips.push(temp);
                    x--;
                }
            }
        }
        
        
        //1 necro cantrip for death cleric
        if (clDomain == 7) {
            x = 1;
            while (x > 0) {
                tempAr = ["Chill Touch", "Chill Touch", "Spare the Dying"];
                temp = tempAr[Math.floor(Math.random() * tempAr.length)];
                // check if we already know spell
                
                if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                    
                    myCantrips.push(temp);
                    x--;
                }
            }
        }
        
        
        
        x = 3;
        if (level > 3)
            x = 4;
        if (level > 9)
            x = 5;
        //cantrips
        while (x > 0) {
            if (Math.random() < 0.66)
                tempAr = ["Guidance", "Sacred Flame", "Spare the Dying"];
            else
                tempAr = clCantrip;
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            // check if we already know spell
            if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                // add cantrip
                myCantrips.push(temp);
                x--;
            }
        }
        //put in alphabetical order
        myCantrips.sort();
        
        tempSpells = [];
        
        //1st level
        switch (clDomain) {
        case 0:
            doSpells.push("Command");
            doSpells.push("Identify Ritual");
            if (level > 2) {
                doSpells.push("Augury Ritual");
                doSpells.push("Suggestion");
            }
            if (level > 4) {
                doSpells.push("Nondetection");
                doSpells.push("Speak with Dead");
            }
            if (level > 6) {
                doSpells.push("Arcane Eye");
                doSpells.push("Confusion");
            }
            if (level > 8) {
                doSpells.push("Legend Lore");
                doSpells.push("Scrying");
            }
            break;
        case 1:
            doSpells.push("Bless");
            doSpells.push("Cure Wounds");
            if (level > 2) {
                doSpells.push("Lesser Restoration");
                doSpells.push("Spiritual Weapon");
            }
            if (level > 4) {
                doSpells.push("Beacon of Hope");
                doSpells.push("Revivify");
            }
            if (level > 6) {
                doSpells.push("Death Ward");
                doSpells.push("Guardian of Faith");
            }
            if (level > 8) {
                doSpells.push("Mass Cure Wounds");
                doSpells.push("Raise Dead");
            }
            
            break;
        case 2:
            doSpells.push("Burning Hands");
            doSpells.push("Faerie Fire");
            if (level > 2) {
                doSpells.push("Flaming Sphere");
                doSpells.push("Scorching Ray");
            }
            if (level > 4) {
                doSpells.push("Daylight");
                doSpells.push("Fireball");
            }
            if (level > 6) {
                doSpells.push("Guardian of Faith");
                doSpells.push("Wall of Fire");
            }
            if (level > 8) {
                doSpells.push("Flame Strike");
                doSpells.push("Scrying");
            }
            break;
        case 3:
            doSpells.push("Animal Friendship");
            doSpells.push("Speak with Animals");
            if (level > 2) {
                doSpells.push("Barkskin");
                doSpells.push("Spike Growth");
            }
            if (level > 4) {
                doSpells.push("Plant Growth");
                doSpells.push("Wind Wall");
            }
            if (level > 6) {
                doSpells.push("Dominate Beast");
                doSpells.push("Grasping Vine");
            }
            if (level > 8) {
                doSpells.push("Insect Plague");
                doSpells.push("Tree Stride");
            }
            break;
        case 4:
            doSpells.push("Fog Cloud");
            doSpells.push("Thunderwave");
            if (level > 2) {
                doSpells.push("Gust of Wind");
                doSpells.push("Shatter");
            }
            if (level > 4) {
                doSpells.push("Call Lightning");
                doSpells.push("Sleet Storm");
            }
            if (level > 6) {
                doSpells.push("Control Water");
                doSpells.push("Ice Storm");
            }
            if (level > 8) {
                doSpells.push("Destructive Wave");
                doSpells.push("Insect Plague");
            }
            break;
        case 5:
            doSpells.push("Charm Person");
            doSpells.push("Disguise Self");
            if (level > 2) {
                doSpells.push("Mirror Image");
                doSpells.push("Pass without Trace");
            }
            if (level > 4) {
                doSpells.push("Blink");
                doSpells.push("Dispel Magic");
            }
            if (level > 6) {
                doSpells.push("Dimension Door");
                doSpells.push("Polymorph");
            }
            if (level > 8) {
                doSpells.push("Dominate Person");
                doSpells.push("Modify Memory");
            }
            break;
        case 6:
            doSpells.push("Divine Favor");
            doSpells.push("Shield of Faith");
            if (level > 2) {
                doSpells.push("Magic Weapon");
                doSpells.push("Spiritual Weapon");
            }
            if (level > 4) {
                doSpells.push("Crusader's Mantle");
                doSpells.push("Spirit Guardians");
            }
            if (level > 6) {
                doSpells.push("Freedom of Movement");
                doSpells.push("Stoneskin");
            }
            if (level > 8) {
                doSpells.push("Flame Strike");
                doSpells.push("Hold Monster");
            }
            break;
        }
        
        x = sp1;
        
        
        
        while (x > 0) {
            tempAr = cl1;
            if (Math.random() < 0.66)
                tempAr = ["Bane", "Bless", "Command", "Cure Wounds", "Cure Wounds", "Guiding Bolt", "Guiding Bolt", "Healing Word", "Healing Word", "Inflict Wounds", "Shield of Faith"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if ((tempSpells.indexOf(temp) > -1) || (doSpells.indexOf(temp) > -1)) {
            } 
            else {
                // add it
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells0 = mySpells0.concat(tempSpells);
        
        //2nd level
        tempSpells = [];
        
        x = sp2;
        while (x > 0) {
            tempAr = cl2;
            if (Math.random() < 0.66)
                tempAr = ["Aid", "Blindness/Deafness", "Enhance Ability", "Hold Person", "Lesser Restoration", "Prayer of Healing", "Silence Ritual", "Spiritual Weapon", "Warding Bond"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if ((tempSpells.indexOf(temp) > -1) || (doSpells.indexOf(temp) > -1)) {
            } 
            else {
                // add it
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells1 = mySpells1.concat(tempSpells);
        
        
        
        
        
        //3rd level
        tempSpells = [];
        x = sp3;
        
        while (x > 0) {
            tempAr = cl3;
            if (Math.random() < 0.66)
                tempAr = ["Animate Dead", "Beacon of Hope", "Bestow Curse", "Dispel Magic", "Glyph of Warding", "Magic Circle", "Mass Healing Word", "Mass Healing Word", "Meld into Stone Ritual", "Protection from Energy", "Revivify", "Spirit Guardians"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (doSpells.indexOf(temp) == -1)) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells2 = mySpells2.concat(tempSpells);
        
        
        
        
        //4th level
        tempSpells = [];
        x = sp4;
        
        while (x > 0) {
            tempAr = cl4;
            if (Math.random() < 0.5)
                tempAr = ["Banishment", "Control Water", "Death Ward", "Guardian of Faith", "Stone Shape"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (doSpells.indexOf(temp) == -1)) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells3 = mySpells3.concat(tempSpells);
        
        
        
        
        
        //5th level
        tempSpells = [];
        x = sp5;
        
        while (x > 0) {
            tempAr = cl5;
            if (Math.random() < 0.5)
                tempAr = ["Commune Ritual", "Contagion", "Dispel Evil and Good", "Flame Strike", "Geas", "Greater Restoration", "Hallow", "Insect Plague", "Legend Lore", "Mass Cure Wounds", "Mass Cure Wounds", "Planar Binding", "Raise Dead"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (doSpells.indexOf(temp) == -1)) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells4 = mySpells4.concat(tempSpells);
        
        
        //6th level
        tempSpells = [];
        x = sp6;
        
        while (x > 0) {
            tempAr = cl6;
            if (Math.random() < 0.5)
                tempAr = ["Blade Barrier", "Create Undead", "Find the Path", "Forbiddance Ritual", "Harm", "Heal", "Heroes' Feast", "Planar Ally", "True Seeing", "Word of Recall"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells5 = mySpells5.concat(tempSpells);
        
        //7th level
        tempSpells = [];
        x = sp7;
        
        while (x > 0) {
            tempAr = cl7;
            if (Math.random() < 0.5)
                tempAr = ["Conjure Celestial", "Divine Word", "Etherealness", "Fire Storm", "Plane Shift", "Regenerate", "Resurrection", "Symbol"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells6 = mySpells6.concat(tempSpells);
        
        
        //8th level
        tempSpells = [];
        x = sp8;
        
        while (x > 0) {
            tempAr = cl8;
            if (Math.random() < 0.5)
                tempAr = ["Antimagic Field", "Control Weather", "Earthquake", "Holy Aura"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells7 = mySpells7.concat(tempSpells);
        
        
        //9th level
        tempSpells = [];
        x = sp9;
        
        while (x > 0) {
            tempAr = cl9;
            if (Math.random() < 0.5)
                tempAr = ["Astral Projection", "Gate", "Mass Heal", "True Resurrection", "True Resurrection"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells8 = mySpells8.concat(tempSpells);
    
    
    
    
    
    }
    
    
    
    
    
    
    
    //DRUIDS
    function druidSpells()
 
    {
        ss1 = level + 1;
        ss2 = 0;
        if (level > 2)
            ss2 = 2;
        if (level > 3) {
            ss1 = 4;
            ss2 = 3;
        }
        if (level > 4)
            ss3 = 2;
        if (level > 5)
            ss3 = 3;
        if (level > 6)
            ss4 = (level - 6);
        if (level > 8) {
            ss4 = 3;
            ss5 = 1;
        }
        
        if (level > 9)
            ss5 = 2;
        if (level > 10) {
            ss5 = 2;
            ss6 = 1;
        }
        
        if (level > 12)
            ss7 = 1;
        
        if (level > 14)
            ss8 = 1;
        
        if (level > 16)
            ss9 = 1;
        
        if (level > 17)
            ss5 = 3;
        
        if (level > 18)
            ss6 = 2;
        
        if (level > 19)
            ss7 = 2;
        
        
        
        
        sp = level + mod[4];
        sp1 = 0;
        sp2 = 0;
        sp3 = 0;
        sp4 = 0;
        sp5 = 0;
        sp6 = 0;
        sp7 = 0;
        sp8 = 0;
        sp9 = 0;
        if (level < 3) {
            sp1 = sp;
            sp2 = 0;
        } else if (level < 5) {
            x = Math.floor(sp * .9);
            sp1 = x;
            sp2 = (sp - x);
        } else if (level < 7) {
            x = Math.ceil(sp * .45);
            y = Math.floor(sp * .45);
            
            sp1 = x;
            z = sp - x - y;
            sp2 = y;
            sp3 = z;
        
        } else if (level < 9) {
            x = Math.floor(sp * .3);
            y = Math.floor(sp * .3);
            z = Math.floor(sp * .3);
            
            sum = sp - x - y - z;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = x;
        
        } else if (level < 11) {
            x = Math.floor(sp * .22);
            y = Math.ceil(sp * .22);
            z = Math.ceil(sp * .22);
            xx = Math.floor(sp * .22);
            
            sum = sp - x - y - z - xx;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
        
        
        } else if (level < 13) {
            x = Math.floor(sp * .18);
            y = Math.ceil(sp * .18);
            z = Math.ceil(sp * .18);
            xx = Math.floor(sp * .18);
            yy = Math.ceil(sp * .18);
            
            sum = sp - x - y - z - xx - yy;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
        
        } else if (level < 15) {
            x = Math.floor(sp * .15);
            y = Math.floor(sp * .15);
            z = Math.floor(sp * .09);
            xx = Math.floor(sp * .15);
            yy = Math.floor(sp * .15);
            zz = Math.floor(sp * .15);
            
            sum = sp - x - y - z - xx - yy - zz - 2;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
            sp7 = zz;
        
        } else if (level < 17) {
            x = Math.floor(sp * .13);
            y = Math.ceil(sp * .1);
            z = Math.ceil(sp * .05);
            xx = Math.floor(sp * .12);
            yy = Math.ceil(sp * .13);
            zz = Math.ceil(sp * .13);
            yyy = Math.floor(sp * .13);
            
            sum = sp - x - y - z - xx - yy - zz - yyy - 2;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
            sp7 = zz;
            sp8 = yyy;
        
        } else if (level >= 17) {
            x = Math.floor(sp * .11);
            y = Math.ceil(sp * .11);
            z = Math.ceil(sp * .01);
            xx = Math.floor(sp * .11);
            yy = Math.ceil(sp * .06);
            zz = Math.ceil(sp * .06);
            yyy = Math.floor(sp * .08);
            zzz = Math.floor(sp * .12);
            
            sum = sp - x - y - z - xx - yy - zz - yyy - zzz - 2;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
            sp7 = zz;
            sp8 = yyy;
            sp9 = zzz;
        
        
        }
        console.log("Spells known:  " + sp1 + "/ " + sp2 + "/ " + sp3 + "/ " + sp4 + "/ " + sp5 + " / " + sp6 + " / " + sp7 + " / " + sp8 + " / " + sp9 + " / Total = " + sp);
        
        
        //cantrips
        x = 2;
        if (level > 3)
            x = 3;
        if (level > 9)
            x = 4;
        
        // bonus cantrip for circle of land
        if (drCircle == 0)
            x++;
        
        while (x > 0) {
            tempAr = drCantrip;
            if (Math.random() < 0.66)
                tempAr = ["Guidance", "Poison Spray", "Resistance", "Shillelagh", "Thorn Whip"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                // add cantrip
                myCantrips.push(temp);
                x--;
            }
        }
        //put in alphabetical order
        myCantrips.sort();
        
        tempSpells = [];
        
        //1st level
        x = sp1;
        while (x > 0) {
            tempAr = dr1;
            if (Math.random() < 0.66)
                tempAr = ["Charm Person", "Cure Wounds", "Cure Wounds", "Cure Wounds", "Entangle", "Fog Cloud", "Healing Word", "Healing Word", "Thunderwave", "Thunderwave"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (ciSpells.indexOf(temp) == -1)) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells0 = mySpells0.concat(tempSpells);
        
        //2nd level
        tempSpells = [];
        x = sp2;
        
        while (x > 0) {
            tempAr = dr2;
            if (Math.random() < 0.66) {
                tempAr = ["Barkskin", "Barkskin", "Barkskin", "Enhance Ability", "Flame Blade", "Flaming Sphere", "Heat Metal", "Heat Metal", "Hold Person", "Lesser Restoration", "Moonbeam", "Pass without Trace", "Spike Growth"];
            }
            /*
        //add circle spells twice to make them more likely
        if (ciSpells.length > 0) {

            tempAr.unshift(ciSpells[0]);
            tempAr.unshift(ciSpells[1]);
            tempAr.unshift(ciSpells[0]);
            tempAr.unshift(ciSpells[1]);

        }

        */
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (ciSpells.indexOf(temp) == -1)) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells1 = mySpells1.concat(tempSpells);
        
        
        //3rd level
        tempSpells = [];
        x = sp3;
        while (x > 0) {
            tempAr = dr3;
            if (Math.random() < 0.66)
                tempAr = ["Call Lightning", "Conjure Animals", "Dispel Magic", "Meld into Stone Ritual", "Protection from Energy", "Sleet Storm", "Speak with Plants", "Wind Wall"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (ciSpells.indexOf(temp) == -1)) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells2 = mySpells2.concat(tempSpells);
        
        
        
        
        //4th level
        tempSpells = [];
        x = sp4;
        while (x > 0) {
            tempAr = dr4;
            if (Math.random() < 0.5)
                tempAr = ["Blight", "Confusion", "Conjure Minor Elementals", "Conjure Woodland Beings", "Control Water", "Dominate Beast", "Giant Insect", "Grasping Vine", "Ice Storm", "Locate Creature", "Polymorph", "Stone Shape", "Stoneskin", "Wall of Fire"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (ciSpells.indexOf(temp) == -1)) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells3 = mySpells3.concat(tempSpells);
        
        
        
        
        //5th level
        tempSpells = [];
        x = sp5;
        while (x > 0) {
            tempAr = dr5;
            if (Math.random() < 0.5)
                tempAr = ["Antilife Shell", "Commune with Nature Ritual", "Conjure Elemental", "Contagion", "Geas", "Greater Restoration", "Insect Plague", "Mass Cure Wounds", "Mass Cure Wounds", "Planar Binding", "Reincarnate", "Tree Stride", "Wall of Stone"];
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (ciSpells.indexOf(temp) == -1)) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells4 = mySpells4.concat(tempSpells);
        
        
        
        
        //6th level
        tempSpells = [];
        x = sp6;
        
        while (x > 0) {
            tempAr = dr6;
            if (Math.random() < 0.5)
                tempAr = ["Conjure Fey", "Find the Path", "Heal", "Heroes' Feast", "Heroes' Feast", "Move Earth", "Sunbeam", "Transport via Plants", "Wall ofThorns", "Wind Walk"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells5 = mySpells5.concat(tempSpells);
        
        //7th level
        tempSpells = [];
        x = sp7;
        
        while (x > 0) {
            tempAr = dr7;
            if (Math.random() < 0.5)
                tempAr = ["Fire Storm", "Fire Storm", "Mirage Arcane", "Plane Shift", "Regenerate", "Regenerate", "Reverse Gravity"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells6 = mySpells6.concat(tempSpells);
        
        
        //8th level
        tempSpells = [];
        x = sp8;
        
        while (x > 0) {
            tempAr = dr8;
            if (Math.random() < 0.5)
                tempAr = ["Animal Shapes", "Antipathy/Sympathy", "Control Weather", "Earthquake", "Feeblemind", "Sunburst", "Tsunami"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells7 = mySpells7.concat(tempSpells);
        
        
        //9th level
        tempSpells = [];
        x = sp9;
        
        while (x > 0) {
            tempAr = dr9;
            if (Math.random() < 0.5)
                tempAr = ["Foresight", "Shapechange", "Shapechange", "Storm ofVengeance", "True Resurrection", "True Resurrection"];
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells8 = mySpells8.concat(tempSpells);
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //eldritch knight
    function eldritchKnightSpells()

    {
        
        ss1 = 0;
        ss2 = 0;
        if (level == 3)
            ss1 = 2;
        if (level > 3)
            ss1 = 3;
        if (level > 6) {
            ss1 = 4;
            ss2 = 2;
        }
        if (level > 9)
            ss2 = 3;
        if (level > 12)
            ss3 = 2;
        if (level > 15)
            ss3 = 3;
        if (level > 18)
            ss4 = 1;
        
        
        if (level < 3) 
        {
            cantrips = 0;
            sp1 = 0;
            sp2 = 0;
            sp3 = 0;
            sp4 = 0;
            sp = 0;
        }
        //Cantrips
        if (level > 2)
            cantrips = 2;
        if (level > 9)
            cantrips = 3;
        //1st level spells
        if (level > 2) 
        {
            sp1 = 2;
        }
        if (level > 3) 
        {
            sp1 = 3;
        }
        if (level > 6) 
        {
            sp1 = 4;
        }
        //2nd level spells
        if (level > 6) 
        {
            sp2 = 1;
        }
        if (level > 7) 
        {
            sp2 = 2;
        }
        if (level > 9) 
        {
            sp2 = 3;
        }
        //3rd level spells
        if (level == 13) 
        {
            sp1 = 2;
            sp2 = 3;
            sp3 = 1;
        }
        if (level == 14) 
        {
            sp1 = 2;
            sp2 = 2;
            sp3 = 2;
        }
        if (level == 15) 
        {
            sp1 = 4;
            sp2 = 2;
            sp3 = 1;
        }
        if (level >= 16) 
        {
            sp1 = 4;
            sp2 = 3;
            sp3 = 1;
        }
        //4th level spells
        if (level == 19) 
        {
            sp1 = 2;
            sp2 = 2;
            sp3 = 2;
            sp4 = 1;
        }
        if (level == 20) 
        {
            sp1 = 3;
            sp2 = 2;
            sp3 = 2;
            sp4 = 1;
        }
        //sp1 = sp-sp2;
        //console.log("Cantrips =" + " " + cantrips + "/" + "Spells Known =" + " " + sp + "/" + "1st level =" + " " + sp1 + "/" + "2nd level =" + " " + sp2 + "/" + "3rd level =" + " " + sp3 + "/" + "4th level =" + " " + sp4);
        
        
        console.log("Spells slots:  " + sp1 + "/ " + sp2 + "/ " + sp3 + "/ " + sp4 + " / Total Known = " + sp);
        
        x = 0;
        //cantrips
        if (level > 2)
            x = 2;
        if (level > 9)
            x = 3;
        while (x > 0) {
            if (Math.random() < 0.5) {
                tempAr = ["Acid Splash", "Blade Ward", "Chill Touch", "Fire Bolt", "Minor Illusion", "Poison Spray", "Ray of Frost", "Shocking Grasp", "True Strike"];
            } else
                tempAr = wiCantrip;
            
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                // add cantrip
                myCantrips.push(temp);
                x--;
            }
        }
        //put in alphabetical order
        myCantrips.sort();
        
        
        
        //1st level
        x = sp1;
        //1 of any spell
        if (x > 2) {
            tempAr = wi1;
            if (Math.random() < 0.66) {
                tempAr = ["Color Spray", "False Life", "Magic Missile", "Ray of Sickness", "Sleep", "Tasha's Hideous Laughter", "Thunderwave"];
            } else {
                tempAr = wi1;
            }
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            tempSpells.push(temp);
            x--;
        
        }
        
        // limited to evoc / abjuration
        tempAr = [0, 1, 1, 3, 18, 19, 20, 22, 27, 27, 29];
        
        while (x > 0) {
            i = Math.floor(Math.random() * tempAr.length);
            temp = wi1[tempAr[i]];
            // check if we already know spell
            if (tempSpells.indexOf(temp) > -1) {
            } 
            else {
                // add it
                tempSpells.push(temp);
                x--;
            
            }
        }
        tempSpells.sort();
        mySpells0 = mySpells0.concat(tempSpells);
        
        
        
        //2nd level
        tempSpells = [];
        x = sp2;
        //1 of any spell if level 8
        if (level > 6) {
            if (x > 0) {
                tempAr = wi1;
                if (Math.random() < 0.66) {
                    tempAr = ["Blindness/Deafness", "Blur", "Cloud of Daggers", "Crown of Madness", "Flaming Sphere", "Hold Person", "Invisibility", "Mirror Image", "Phantasmal Force", "Ray of Enfeeblement", "Scorching Ray", "Suggestion", "Web"];
                
                } else {
                    tempAr = wi2;
                }
                
                temp = tempAr[Math.floor(Math.random() * tempAr.length)];
                tempSpells.push(temp);
                x--;
            
            }
        }
        
        // limited to evoc / abjuration
        tempAr = [5, 7, 13, 21, 28, 30, 1];
        
        while (x > 0) {
            i = Math.floor(Math.random() * tempAr.length);
            temp = wi2[tempAr[i]];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                // add it
                tempSpells.push(temp);
                x--;
            
            }
        }
        tempSpells.sort();
        mySpells1 = mySpells1.concat(tempSpells);
    
    }
    
    
    //3rd level
    tempSpells = [];
    x = sp3;
    
    if (level > 12) {
        if (x > 0) {
            tempAr = wi1;
            if (Math.random() < 0.66) {
                tempAr = wi3;
                
                temp = tempAr[Math.floor(Math.random() * tempAr.length)];
                tempSpells.push(temp);
                x--;
            
            }
        }
        
        // limited to evoc / abjuration
        tempAr = [5, 7, 13, 21, 28, 30, 1];
        
        while (x > 0) {
            i = Math.floor(Math.random() * tempAr.length);
            temp = wi2[tempAr[i]];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                // add it
                tempSpells.push(temp);
                x--;
            
            }
        }
        tempSpells.sort();
        mySpells2 = mySpells2.concat(tempSpells);
    
    }
    
    
    //4th level
    tempSpells = [];
    x = sp4;
    
    if (level > 18) {
        if (x > 0) {
            tempAr = wi1;
            if (Math.random() < 0.66) {
                tempAr = wi4;
                
                
                temp = tempAr[Math.floor(Math.random() * tempAr.length)];
                tempSpells.push(temp);
                x--;
            
            }
        }
        
        // limited to evoc / abjuration
        tempAr = [5, 7, 13, 21, 28, 30, 1];
        
        while (x > 0) {
            i = Math.floor(Math.random() * tempAr.length);
            temp = wi2[tempAr[i]];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                // add it
                tempSpells.push(temp);
                x--;
            
            }
        }
        tempSpells.sort();
        mySpells3 = mySpells3.concat(tempSpells);
    
    }
    
    
    
    
    
    
    
    
    //paladins
    function paladinSpells()

    {
        ss1 = 0;
        ss2 = 0;
        ss3 = 0;
        ss4 = 0;
        ss5 = 0;
        if (level == 2)
            ss1 = 2;
        if (level > 2)
            ss1 = 3;
        if (level > 4) 
        {
            ss1 = 4;
            ss2 = 2;
        }
        if (level > 6) 
        {
            ss2 = 3;
        }
        if (level > 8) 
        {
            ss3 = 2;
        }
        if (level > 10) 
        {
            ss3 = 3;
        }
        if (level > 12) 
        {
            ss4 = 1;
        }
        if (level > 14) 
        {
            ss4 = 2;
        }
        if (level > 16) 
        {
            ss4 = 3;
            ss5 = 1;
        }
        if (level > 18) 
        {
            ss5 = 2;
        }
        
        
        sp = mod[5] + Math.floor(level / 2);
        if (sp < 2) 
        {
            sp = 0;
        }
        if (level < 5) 
        {
            sp1 = sp;
            sp2 = 0;
        } 
        else if (level < 9) 
        {
            sp1 = Math.ceil(sp / 2);
            sp2 = sp - sp1;
        } 
        else if (level < 13) 
        {
            sp1 = Math.floor(sp * .35);
            sp2 = Math.ceil(sp * .35);
            sp3 = sp - sp1 - sp2;
        } 
        else if (level < 17) 
        {
            sp1 = Math.floor(sp * .4);
            sp2 = Math.floor(sp * .3);
            sp3 = Math.floor(sp * .3);
            sp4 = sp - sp1 - sp2 - sp3 +1;
        } 
        else if (level < 19) 
        {
            sp1 = Math.ceil(sp * .20);
            sp2 = Math.ceil(sp * .25);
            sp3 = Math.floor(sp * .25);
            sp4 = Math.floor(sp * .20);
            sp5 = sp - sp1 - sp2 - sp3 - sp4 +1;
        } 
        else 
        {
            sp1 = Math.ceil(sp * .20);
            sp2 = Math.ceil(sp * .25);
            sp3 = Math.floor(sp * .25);
            sp4 = Math.floor(sp * .20);
            sp5 = sp - sp1 - sp2 - sp3 - sp4 +1;
        }
        
        console.log(sp + "/" + sp1 + "/" + sp2 + "/" + sp3 + "/" + sp4 + "/" + sp5);
        //alert(sp+"/"+sp1+"/"+sp2+"/"+sp3+"/"+sp4+"/"+sp5);
        
        
        //1st level spells
        
        x = sp1;
        tempSpells = [];
        while (x > 1) {
            tempAr = pa1;
            if (Math.random() < 0.66) {
                tempAr = ["Command", "Cure Wounds", "Cure Wounds", "Heroism", "Searing Smite", "Shield of Faith", "Thunderous Smite", "Thunderous Smite", "Wrathful Smite"];
            }
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (oaSpells.indexOf(temp) == -1)) {
                // add it
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells0 = mySpells0.concat(tempSpells);
        
        
        
        //2nd level
        x = sp2;
        tempSpells = [];
        while (x > 0) {
            tempAr = pa2;
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (oaSpells.indexOf(temp) == -1)) {
                // add it
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells1 = mySpells1.concat(tempSpells);
        
        
        //3rd level
        x = sp3;
        tempSpells = [];
        while (x > 0) 
        {
            tempAr = pa3;
            if (Math.random() < 0.66) 
            {
                tempAr = ["Aura of Vitality", "Aura of Vitality", "Blinding Smite", "Blinding Smite", "Crusader's Mantle", "Dispel Magic", "Elemental Weapon", "Revivify", "Revivify", "Revivify"];
            }
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (oaSpells.indexOf(temp) == -1)) 
            {
                // add it
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells2 = mySpells2.concat(tempSpells);
        
        
        
        //4th level
        x = sp4;
        tempSpells = [];
        while (x > 0) 
        {
            tempAr = pa4;
            if (Math.random() < 0.66) {
                tempAr = ["Aura of Life", "Aura of Purity", "Banishment", "Death Ward", "Locate Creature", "Staggering Smite"];
            }
            
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (oaSpells.indexOf(temp) == -1)) {
                // add it
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells3 = mySpells3.concat(tempSpells);
        
        
        //5th level
        x = sp5;
        tempSpells = [];
        while (x > 0) 
        {
            tempAr = pa5;
            if (Math.random() < 0.66) 
            {
                tempAr = ["Banishing Smite", "Banishing Smite", "Circle of Power", "Destructive Wave", "Dispel Evil and Good", "Geas", "Raise Dead", "Raise Dead", "Raise Dead"];
                ;
            }
            
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (oaSpells.indexOf(temp) == -1)) 
            {
                // add it
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells4 = mySpells4.concat(tempSpells);
    
    
    }
    
    
    
    
    
    
    
    //rangers
    function rangerSpells()
 
    {
        ss1 = 0;
        ss2 = 0;
        ss3 = 0;
        ss4 = 0;
        ss5 = 0;
        if (level > 1) 
        {
            ss1 = 2;
        }
        if (level > 2) 
        {
            ss1 = 3;
        }
        if (level > 4) 
        {
            ss1 = 4;
            ss2 = 2;
        }
        if (level > 6) 
        {
            ss2 = 3;
        }
        if (level > 8) 
        {
            ss3 = 2;
        }
        if (level > 10) 
        {
            ss3 = 3;
        }
        if (level > 12) 
        {
            ss4 = 1;
        }
        if (level > 14) 
        {
            ss4 = 2;
        }
        if (level > 16) 
        {
            ss4 = 3;
            ss5 = 1;
        }
        if (level > 18) 
        {
            ss5 = 2;
        }
        
        
        
        sp = Math.ceil(level / 2) + 1;
        
        if (level > 1) 
        {
            sp1 = sp;
        }
        if (level < 5) 
        {
            sp2 = 0;
        } 
        else if (level < 9) 
        {
            sp1 = Math.ceil(sp / 2);
            sp2 = sp - sp1;
        } 
        else if (level < 13) 
        {
            sp1 = Math.ceil(sp * .35);
            sp2 = Math.floor(sp * .35);
            sp3 = sp - sp1 - sp2;
        } 
        else if (level < 17) 
        {
            sp1 = Math.ceil(sp * .25);
            sp2 = Math.ceil(sp * .25);
            sp3 = Math.floor(sp * .25);
            sp4 = sp - sp1 - sp2 - sp3;
        } 
        else 
        {
            sp1 = Math.ceil(sp * .20);
            sp2 = Math.ceil(sp * .20);
            sp3 = Math.ceil(sp * .20);
            sp4 = Math.floor(sp * .20);
            sp5 = sp - sp1 - sp2 - sp3 - sp4;
        }
        console.log(sp + "/" + sp1 + "/" + sp2 + "/" + sp3 + "/" + sp4 + "/" + sp5);
        //alert(sp+"/"+sp1+"/"+sp2+"/"+sp3+"/"+sp4+"/"+sp5);
        
        
        
        
        //1st level spells
        x = sp1;
        tempSpells = [];
        while (x > 1) 
        {
            tempAr = ra1;
            if (Math.random() < 0.66) {
                tempAr = ["Cure Wounds", "Cure Wounds", "Ensnaring Strike", "Hail of Thorns", "Hunter's Mark"];
            
            }
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) 
            {
                tempSpells.push(temp);
                x--;
            }
            
            tempSpells.sort();
            mySpells0 = mySpells0.concat(tempSpells);
            
            // 2nd
            tempSpells = [];
            x = sp2;
            
            while (x > 0) 
            {
                tempAr = ra2;
                if (Math.random() < 0.66)
                    tempAr = ["Cordon of Arrows", "Cordon of Arrows", "Find Traps", "Pass without Trace", "Protection from Poison", "Silence Ritual", "Spike Growth"];
                
                temp = tempAr[Math.floor(Math.random() * tempAr.length)];
                // check if we already know spell
                if ((tempSpells.indexOf(temp) == -1) && (oaSpells.indexOf(temp) == -1)) 
                {
                    // add it
                    tempSpells.push(temp);
                    x--;
                }
            }
            tempSpells.sort();
            mySpells1 = mySpells1.concat(tempSpells);
            
            
            
            // 3rd
            tempSpells = [];
            x = sp3;
            
            while (x > 0) 
            {
                tempAr = ra3;
                if (Math.random() < 0.66)
                    tempAr = ["Conjure Animals", "Conjure Barrage", "Lightning Arrow", "Protection from Energy", "Wind Wall"];
                
                temp = tempAr[Math.floor(Math.random() * tempAr.length)];
                // check if we already know spell
                if ((tempSpells.indexOf(temp) == -1) && (oaSpells.indexOf(temp) == -1)) 
                {
                    // add it
                    tempSpells.push(temp);
                    x--;
                }
            }
            tempSpells.sort();
            mySpells2 = mySpells2.concat(tempSpells);
        
        }
        
        
        // 4th
        tempSpells = [];
        x = sp4;
        
        while (x > 0) 
        {
            tempAr = ra4;
            if (Math.random() < 0.66)
                tempAr = ra4;
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (oaSpells.indexOf(temp) == -1)) 
            {
                // add it
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells3 = mySpells3.concat(tempSpells);
        
        
        
        // 5th
        tempSpells = [];
        x = sp5;
        
        if (level > 18) {
            
            x = sp5 + 1;
        }
        
        while (x > 0) 
        {
            tempAr = ra5;
            if (Math.random() < 0.66)
                tempAr = ra5;
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if ((tempSpells.indexOf(temp) == -1) && (oaSpells.indexOf(temp) == -1)) 
            {
                // add it
                tempSpells.push(temp);
                x--;
            }
        }
        
        tempSpells.sort();
        mySpells4 = mySpells4.concat(tempSpells);
    
    }
    
    
    
    
    
    //arcane trickster
    function arcaneTricksterSpells()
 
    {
        ss1 = 0;
        ss2 = 0;
        if (level == 3)
            ss1 = 2;
        if (level > 3)
            ss1 = 3;
        if (level > 6) {
            ss1 = 4;
            ss2 = 2;
        }
        if (level > 9)
            ss2 = 3;
        if (level > 12)
            ss3 = 2;
        if (level > 15)
            ss3 = 3;
        if (level > 18)
            ss4 = 1;
        
        // How many spells are in our book?
        cantrips = 0;
        sp1 = 0;
        sp2 = 0;
        sp3 = 0;
        sp4 = 0;
        sp = 0;
        if (level == 3)
            sp = 3;
        if (level > 3)
            sp = 4;
        if (level == 7)
            sp = 5;
        if (level > 7)
            sp = 6;
        if (level > 9)
            sp = 7;
        if (level > 10)
            sp = 8;
        
        //<---added code beyond lvl 10
        if (level > 12)
            sp = 9;
        if (level > 13)
            sp = 10;
        if (level > 15)
            sp = 11;
        if (level > 18)
            sp = 12;
        if (level > 19)
            sp = 13;
        //--->
        //Cantrips
        if (level > 2)
            cantrips = 2;
        if (level > 9)
            cantrips = 3;
        //1st level spells
        if (level > 2)
            sp1 = 2;
        if (level > 3)
            sp1 = 3;
        if (level > 6)
            sp1 = 4;
        //2nd level spells
        if (level > 6)
            sp2 = 1;
        if (level > 7) {
            sp2 = 2;
        }
        if (level > 9) {
            sp2 = 3;
        }
        //3rd level spells
        if (level > 12)
            sp3 = 2;
        if (level > 15)
            sp3 = 3;
        //4th level spells
        if (level > 18)
            sp4 = 1;
        //sp1 = sp-sp2;
        //console.log("Cantrips =" + " " + cantrips + "/" + "Spells Known =" + " " + sp + "/" + "1st level =" + " " + sp1 + "/" + "2nd level =" + " " + sp2 + "/" + "3rd level =" + " " + sp3 + "/" + "4th level =" + " " + sp4);
        
        
        console.log("Spells slots:  " + sp1 + "/ " + sp2 + "/ " + sp3 + "/ " + sp4 + " / Total Known = " + sp);
        
        x = 0;
        //3 cantrips (always mage hand)
        if (level > 2) {
            x = 2;
            myCantrips.push(wiCantrip[7]);
        }
        if (level > 9)
            x = 3;
        
        while (x > 0) {
            if (Math.random() < 0.5) {
                tempAr = ["Acid Splash", "Blade Ward", "Chill Touch", "Fire Bolt", "Minor Illusion", "Poison Spray", "Ray of Frost", "Shocking Grasp", "True Strike"];
            } else
                tempAr = wiCantrip;
            
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                // add cantrip
                myCantrips.push(temp);
                x--;
            }
        }
        //put in alphabetical order
        myCantrips.sort();
        
        //1st level
        x = sp1;
        //1 of any spell
        if (x > 0) {
            tempAr = wi1;
            if (Math.random() < 0.66)
                tempAr = ["Burning Hands", "Burning Hands", "Chromatic Orb", "False Life", "Mage Armor", "Magic Missile", "Magic Missile", "Ray of Sickness", "Shield", "Sleep", "Tasha's Hideous Laughter", "Tasha's Hideous Laughter", "Thunderwave", "Thunderwave", "Thunderwave", "Witch Bolt"];
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            tempSpells.push(temp);
            x--;
        }
        
        // others limited to ench/ill
        tempAr = [4, 7, 15, 23, 24, 25];
        
        while (x > 0) {
            i = Math.floor(Math.random() * tempAr.length);
            temp = wi1[tempAr[i]];
            // check if we already know spell
            if (tempSpells.indexOf(temp) > -1) {
            } 
            else {
                // add it
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells0 = mySpells0.concat(tempSpells);
        
        
        
        //2nd level
        tempSpells = [];
        x = sp2;
        //1 of any spell if level 8
        if (level > 7) {
            if (x > 0) {
                tempAr = wi2;
                if (Math.random() < 0.66) {
                    tempAr = ["Blindness/Deafness", "Cloud of Daggers", "Flaming Sphere", "Invisibility", "Melf's Acid Arrow", "Ray of Enfeeblement", "Scorching Ray", "Shatter", "Web"];
                }
                
                temp = tempAr[Math.floor(Math.random() * tempAr.length)];
                tempSpells.push(temp);
                x--;
            
            }
        }
        
        // limited to 
        tempAr = [3, 15, 15, 15, 22, 24, 25, 19, 6, 14, 32, 32];
        
        while (x > 0) {
            i = Math.floor(Math.random() * tempAr.length);
            temp = wi2[tempAr[i]];
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                // add it
                tempSpells.push(temp);
                x--;
            
            }
        }
        tempSpells.sort();
        mySpells1 = mySpells1.concat(tempSpells);
        
        //}
        //3rd level
        tempSpells = [];
        x = sp3;
        if (level > 12) {
            if (x > 0) {
                tempAr = wi1;
                if (Math.random() < 0.66) {
                    tempAr = wi3;
                    
                    
                    temp = tempAr[Math.floor(Math.random() * tempAr.length)];
                    tempSpells.push(temp);
                    x--;
                
                
                }
            }
            
            // limited to 
            tempAr = [3, 15, 15, 15, 22, 24, 25, 19, 6, 14, 32, 32];
            
            while (x > 0) {
                i = Math.floor(Math.random() * tempAr.length);
                temp = wi2[tempAr[i]];
                // check if we already know spell
                if (tempSpells.indexOf(temp) == -1) {
                    // add it
                    tempSpells.push(temp);
                    x--;
                
                }
            }
            tempSpells.sort();
            mySpells2 = mySpells2.concat(tempSpells);
        
        }
        
        
        //4th level
        tempSpells = [];
        x = sp4;
        
        if (level > 18) 
        {
            if (x > 0) 
            {
                tempAr = wi1;
                if (Math.random() < 0.66)
                    tempAr = wi4;
                
                
                temp = tempAr[Math.floor(Math.random() * tempAr.length)];
                tempSpells.push(temp);
                x--;
            
            
            }
            
            // limited to 
            tempAr = [3, 15, 15, 15, 22, 24, 25, 19, 6, 14, 32, 32];
            
            while (x > 0) 
            {
                i = Math.floor(Math.random() * tempAr.length);
                temp = wi2[tempAr[i]];
                // check if we already know spell
                if (tempSpells.indexOf(temp) == -1) 
                {
                    // add it
                    tempSpells.push(temp);
                    x--;
                
                }
            }
            tempSpells.sort();
            mySpells3 = mySpells3.concat(tempSpells);
        
        }
    
    }
    
    
    
    //SORCERER
    function sorcererSpells()
 
    {
        ss1 = level + 1;
        ss2 = 0;
        
        if (level > 2)
            ss2 = 2;
        if (level > 3) {
            ss1 = 4;
            ss2 = 3;
        }
        if (level > 3) {
            ss1 = 4;
            ss2 = 3;
        }
        if (level == 5)
            ss3 = 2;
        if (level > 5)
            ss3 = 3;
        if (level == 6)
            ss4 = 1;
        if (level > 6)
            ss4 = 2;
        if (level > 8) {
            ss4 = 3;
            ss5 = 1;
        }
        if (level > 9)
            ss5 = 2;
        if (level > 10) {
            ss5 = 2;
            ss6 = 1;
        }
        
        if (level > 12)
            ss7 = 1;
        
        if (level > 14)
            ss8 = 1;
        
        if (level > 16)
            ss9 = 1;
        
        if (level > 17)
            ss5 = 3;
        
        if (level > 18)
            ss6 = 2;
        
        if (level > 19)
            ss7 = 2;
        
        
        
        //sp = level +1;
        if (level < 11) 
        {
            sp = level + 1;
        } 
        else if (level < 13) 
        {
            sp = 12;
        } 
        else if (level < 15) 
        {
            sp = 13;
        } 
        else if (level < 17) 
        {
            sp = 14;
        } 
        else if (level >= 17) 
        {
            sp = 15;
        }
        
        sp1 = 0;
        sp2 = 0;
        sp3 = 0;
        sp4 = 0;
        sp5 = 0;
        sp6 = 0;
        sp7 = 0;
        sp8 = 0;
        sp9 = 0;
        if (level < 3) 
        {
            sp1 = sp;
            sp2 = 0;
        } 
        else if (level < 5) 
        {
            x = Math.floor(sp * .8);
            sp1 = x;
            sp2 = (sp - x);
        } 
        else if (level < 7) 
        {
            x = Math.ceil(sp * .45);
            y = Math.floor(sp * .45);
            
            sp1 = x;
            z = sp - x - y;
            sp2 = y;
            sp3 = z;
        
        } 
        else if (level < 9) 
        {
            x = Math.floor(sp * .28);
            y = Math.floor(sp * .28);
            z = Math.floor(sp * .28);
            
            sum = sp - x - y - z;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = x;
        
        } 
        else if (level < 11) 
        {
            x = Math.floor(sp * .21);
            y = Math.ceil(sp * .18);
            z = Math.ceil(sp * .18);
            xx = Math.floor(sp * .21);
            
            sum = sp - x - y - z - xx;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
        
        
        } 
        else if (level < 13) 
        {
            x = Math.floor(sp * .14);
            y = Math.ceil(sp * .14);
            z = Math.ceil(sp * .14);
            xx = Math.floor(sp * .14);
            yy = Math.ceil(sp * .14);
            
            sp12 = 12
            sum = sp12 - x - y - z - xx - yy;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
        
        } 
        else if (level < 15) 
        {
            x = Math.floor(sp * .12);
            y = Math.ceil(sp * .11);
            z = Math.ceil(sp * .11);
            xx = Math.floor(sp * .11);
            yy = Math.ceil(sp * .12);
            zz = Math.ceil(sp * .12);
            
            sp13 = 13;
            sum = sp13 - x - y - z - xx - yy - zz;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
            sp7 = zz;
        
        } 
        else if (level < 17) 
        {
            x = Math.floor(sp * .10);
            y = Math.ceil(sp * .10);
            z = Math.ceil(sp * .10);
            xx = Math.floor(sp * .10);
            yy = Math.ceil(sp * .10);
            zz = Math.ceil(sp * .10);
            yyy = Math.floor(sp * .10);
            
            sp14 = 14;
            sum = sp14 - x - y - z - xx - yy - zz - yyy;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
            sp7 = zz;
            sp8 = yyy;
        
        } 
        else if (level >= 17) 
        {
            x = Math.floor(sp * .07);
            y = Math.ceil(sp * .08);
            z = Math.ceil(sp * .08);
            xx = Math.floor(sp * .08);
            yy = Math.ceil(sp * .08);
            zz = Math.ceil(sp * .08);
            yyy = Math.floor(sp * .08);
            zzz = Math.floor(sp * .07);
            
            sp15 = 15;
            sum = sp15 - x - y - z - xx - yy - zz - yyy - zzz;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
            sp7 = zz;
            sp8 = yyy;
            sp9 = zzz;
        
        }
        
        
        
        
        if (level < 11) 
        {
            console.log("Spells known:  " + sp1 + "/ " + sp2 + "/ " + sp3 + "/ " + sp4 + "/ " + sp5 + " / " + sp6 + " / " + sp7 + " / " + sp8 + " / " + sp9 + " / Total = " + sp);
        } 
        else if (level < 13) 
        {
            console.log("Spells known:  " + sp1 + "/ " + sp2 + "/ " + sp3 + "/ " + sp4 + "/ " + sp5 + " / " + sp6 + " / " + sp7 + " / " + sp8 + " / " + sp9 + " / Total = " + sp12)
        } 
        else if (level < 15) 
        {
            console.log("Spells known:  " + sp1 + "/ " + sp2 + "/ " + sp3 + "/ " + sp4 + "/ " + sp5 + " / " + sp6 + " / " + sp7 + " / " + sp8 + " / " + sp9 + " / Total = " + sp13)
        } 
        else if (level < 17) 
        {
            console.log("Spells known:  " + sp1 + "/ " + sp2 + "/ " + sp3 + "/ " + sp4 + "/ " + sp5 + " / " + sp6 + " / " + sp7 + " / " + sp8 + " / " + sp9 + " / Total = " + sp14)
        } 
        else if (level >= 17) 
        {
            console.log("Spells known:  " + sp1 + "/ " + sp2 + "/ " + sp3 + "/ " + sp4 + "/ " + sp5 + " / " + sp6 + " / " + sp7 + " / " + sp8 + " / " + sp9 + " / Total = " + sp15)
        }
        
        
        
        //cantrips
        x = 4;
        if (level > 3)
            x = 5;
        if (level > 9)
            x = 6;
        
        while (x > 0) {
            tempAr = soCantrip;
            if (Math.random() < 0.66)
                
                temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                // add cantrip
                myCantrips.push(temp);
                x--;
            }
        }
        //put in alphabetical order
        myCantrips.sort();
        
        tempSpells = [];
        
        
        //level 1
        x = sp1;
        tempSpells = [];
        while (x > 0) {
            tempAr = so1;
            
            
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) > -1) {
            } 
            else {
                // add it
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells0 = mySpells0.concat(tempSpells);
        
        //2nd level
        tempSpells = [];
        x = sp2;
        
        while (x > 0) {
            tempAr = so2;
            
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) > -1) {
            } 
            else {
                // add it
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells1 = mySpells1.concat(tempSpells);
        
        //3rd level
        tempSpells = [];
        x = sp3;
        while (x > 0) {
            tempAr = so3;
            
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells2 = mySpells2.concat(tempSpells);
        
        
        
        //4th level
        tempSpells = [];
        x = sp4;
        while (x > 0) {
            tempAr = so4;
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells3 = mySpells3.concat(tempSpells);
        
        
        
        //5th level
        tempSpells = [];
        x = sp5;
        while (x > 0) {
            tempAr = so5;
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells4 = mySpells4.concat(tempSpells);
        
        //6th level
        tempSpells = [];
        x = sp6;
        while (x > 0) {
            tempAr = so6;
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells5 = mySpells5.concat(tempSpells);
        
        
        //7th level
        tempSpells = [];
        x = sp7;
        while (x > 0) {
            tempAr = so7;
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells6 = mySpells6.concat(tempSpells);
        
        //8th level
        tempSpells = [];
        x = sp8;
        while (x > 0) {
            tempAr = so8;
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells7 = mySpells7.concat(tempSpells);
        
        //9th level
        tempSpells = [];
        x = sp9;
        while (x > 0) {
            tempAr = so9;
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells8 = mySpells8.concat(tempSpells);
    }
    
    
    
    
    
    
    
    
    
    
    //WARLOCKS
    function warlockSpells()

    {
        ss1 = 1;
        if (level == 1)
            ss1 = 1;
        if (level > 1)
            ss1 = 2;
        if (level > 2)
            ss2 = 2;
        if (level > 4)
            ss3 = 2;
        if (level > 6)
            ss4 = 2;
        if (level > 8)
            ss5 = 2;
        if (level > 10)
            ss5 = 3;
        
        
        
        sp = level + 1;
        if (level > 9)
            sp = 10;
        
        if (level > 10)
            sp = 11;
        if (level > 12)
            sp = 12;
        if (level > 14)
            sp = 13;
        if (level > 16)
            sp = 14;
        if (level > 18)
            sp = 15;
        
        sp1 = 0;
        sp2 = 0;
        sp3 = 0;
        sp4 = 0;
        sp5 = 0;
        sp6 = 0;
        sp7 = 0;
        sp8 = 0;
        sp9 = 0;
        
        if (level < 3) {
            sp1 = sp;
            sp2 = 0;
        } else if (level < 5) {
            x = Math.floor(sp * .7);
            sp1 = x;
            sp2 = (sp - x);
        
        } else if (level < 7) {
            x = Math.ceil(sp * .35);
            y = Math.floor(sp * .35);
            sp1 = x;
            sp2 = y;
            sp3 = sp - x - y;
        } else if (level < 9) {
            x = Math.floor(sp * .28);
            y = Math.floor(sp * .28);
            z = Math.floor(sp * .28);
            
            sum = sp - x - y - z;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = x;
        
        } else if (level <= 10) {
            x = Math.floor(sp * .21);
            y = Math.ceil(sp * .18);
            z = Math.ceil(sp * .18);
            xx = Math.floor(sp * .21);
            
            sum = sp - x - y - z - xx;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            
            //6th
        } else if (level > 10) {
            x = Math.floor(sp * .21);
            y = Math.ceil(sp * .18);
            z = Math.ceil(sp * .18);
            xx = Math.floor(sp * .21);
            
            sum = sp - x - y - z - xx;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = 1;
            //7th
        }
        if (level > 12) {
            sp7 = 1;
            //8th
        }
        if (level > 14) {
            sp8 = 1;
            //9th
        }
        if (level > 16) {
            sp9 = 1;
        
        
        }
        
        var sumTotal = sp6 + sp7 + sp8 + sp9;
        
        
        console.log("Spells known:  " + sp1 + "/ " + sp2 + "/ " + sp3 + "/ " + sp4 + "/ " + sp5 + " / Total = " + sp);
        console.log("Spells known:  " + sp6 + "/ " + sp7 + "/ " + sp8 + "/ " + sp9 + "/ Total = " + sumTotal);
        
        
        
        
        
        //cantrips
        x = 2;
        if (level > 3)
            x = 3;
        if (level > 9)
            x = 4;
        
        if (eblast == true) {
            myCantrips.push("Eldritch Blast")
            x--;
        }
        
        while (x > 0) {
            tempAr = waCantrip;
            
            if (Math.random() < 0.66)
                tempAr = ["Blade Ward", "Chill Touch", "Eldritch Blast", "Eldritch Blast", "Minor Illusion", "Poison Spray", "True Strike"];
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                // add cantrip
                myCantrips.push(temp);
                x--;
            }
        
        }
        //put in alphabetical order
        myCantrips.sort();
        
        
        //tome spells
        if (tome == true) {
            z = 3;
            while (z > 0) {
                y = Math.floor(Math.random() * 5);
                if (y == 0) {
                    
                    temp = baCantrip[Math.floor(Math.random() * baCantrip.length)];
                    // check if we already know spell
                    if ((myCantrips.indexOf(temp) == -1) && (waTome.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                        // add cantrip
                        waTome.push(temp);
                        z--;
                    }
                }
                if (y == 1) {
                    
                    temp = clCantrip[Math.floor(Math.random() * clCantrip.length)];
                    // check if we already know spell
                    if ((myCantrips.indexOf(temp) == -1) && (waTome.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                        // add cantrip
                        waTome.push(temp);
                        z--;
                    }
                
                
                }
                if (y == 2) {
                    temp = drCantrip[Math.floor(Math.random() * drCantrip.length)];
                    // check if we already know spell
                    if ((myCantrips.indexOf(temp) == -1) && (waTome.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                        // add cantrip
                        waTome.push(temp);
                        z--;
                    }
                
                
                }
                if (y == 3) {
                    temp = soCantrip[Math.floor(Math.random() * soCantrip.length)];
                    // check if we already know spell
                    if ((myCantrips.indexOf(temp) == -1) && (waTome.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                        // add cantrip
                        waTome.push(temp);
                        z--;
                    }
                
                }
                if (y == 4) {
                    temp = wiCantrip[Math.floor(Math.random() * wiCantrip.length)];
                    // check if we already know spell
                    if ((myCantrips.indexOf(temp) == -1) && (waTome.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                        // add cantrip
                        waTome.push(temp);
                        z--;
                    }
                
                
                }
            }
            waTome.sort();
            
            // if you have invocation for pact of tome
            if (abOutput.indexOf("Ancient Secrets") > -1) {
                
                xx = 2;
                while (xx > 0) {
                    temp = tomeRituals[Math.floor(Math.random() * tomeRituals.length)];
                    if ((mySpells.indexOf(temp) == -1) && (waTomeRituals.indexOf(temp) == -1)) {
                        // add ritual
                        waTomeRituals.push(temp);
                        xx--;
                    }
                }
                
                xx = 0;
                if (upgradeUncommon() == true) {
                    xx += Math.floor((Math.random() * 2) + 1);
                }
                if (upgradeRare() == true) {
                    xx += Math.floor((Math.random() * 2) + 1);
                }
                console.log("Tome has " + (2 + xx) + " rituals");
                
                if (level > 3) {
                    tomeRituals.push("Magic Mouth Ritual");
                    tomeRituals.push("Magic Mouth Ritual");
                    tomeRituals.push("Silence Ritual");
                    tomeRituals.push("Augury Ritual");
                    tomeRituals.push("Beast Sense Ritual");
                    tomeRituals.push("Gentle Repose Ritual");
                    tomeRituals.push("Locate Animals or Plants Ritual");
                    tomeRituals.push("Animal Messenger Ritual");
                    tomeRituals.push("Animal Messenger Ritual");
                }
                if (level > 5) {
                    tomeRituals.push("Meld into Stone Ritual");
                    tomeRituals.push("Feign Death Ritual");
                    tomeRituals.push("Meld into Stone Ritual");
                    tomeRituals.push("Leomund’s Tiny Hut Ritual");
                    tomeRituals.push("Leomund’s Tiny Hut Ritual");
                    tomeRituals.push("Water Breathing Ritual");
                    tomeRituals.push("Phantom Steed Ritual");
                    tomeRituals.push("Water Walk Ritual");
                    tomeRituals.push("Water Breathing Ritual");
                    tomeRituals.push("Phantom Steed Ritual");
                    tomeRituals.push("Water Walk Ritual");
                
                }
                if (level > 7) {
                    tomeRituals.push("Divination Ritual");
                
                }
                if (level > 9) {
                    tomeRituals.push("Contact Other Plane Ritual");
                    tomeRituals.push("Commune Ritual");
                    tomeRituals.push("Contact Other Plane Ritual");
                    tomeRituals.push("Commune with Nature Ritual");
                    tomeRituals.push("Rary's Telepathic Bond Ritual");
                }
                if (level > 11) {
                    tomeRituals.push("Drawmij's Instant Summons Ritual");
                    tomeRituals.push("Forbiddance Ritual ");
                }
                
                while (xx > 0) {
                    temp = tomeRituals[Math.floor(Math.random() * tomeRituals.length)];
                    if ((mySpells.indexOf(temp) == -1) && (waTomeRituals.indexOf(temp) == -1)) {
                        // add ritual
                        waTomeRituals.push(temp);
                        xx--;
                    }
                }
            }
            waTomeRituals.sort();
        
        }
        
        
        //1st
        tempSpells = [];
        x = sp1;
        while (x > 0) {
            tempAr = wa1;
            if (Math.random() < 0.66)
                tempAr = wa1;
            
            tempAr = tempAr.concat(patronSpells1);
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells0 = mySpells0.concat(tempSpells);
        
        
        //2nd level
        tempSpells = [];
        x = sp2;
        
        while (x > 0) {
            tempAr = wa2;
            
            if (Math.random() < 0.66)
                tempAr = ["Cloud of Daggers", "Crown of Madness", "Hold Person", "Invisibility", "Mirror Image", "Misty Step", "Ray of Enfeeblement", "Shatter", "Suggestion"];
            
            tempAr = tempAr.concat(patronSpells2);
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        }
        tempSpells.sort();
        mySpells1 = mySpells1.concat(tempSpells);
        
        //3rd level
        tempSpells = [];
        x = sp3;
        while (x > 0) {
            tempAr = wa3;
            if (Math.random() < 0.66)
                tempAr = ["Counterspell", "Dispel Magic", "Fear", "Fear", "Fly", "Gaseous Form", "Hunger of Hadar", "Hunger of Hadar", "Hypnotic Pattern", "Magic Circle", "Major Image", "Vampiric Touch", "Vampiric Touch"];
            
            tempAr = tempAr.concat(patronSpells3);
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells2 = mySpells2.concat(tempSpells);
        
        
        
        
        
        //4th
        tempSpells = [];
        x = sp4;
        while (x > 0) {
            tempAr = wa4;
            if (Math.random() < 0.5)
                tempAr = ["Banishment", "Blight", "Dimension Door", "Hallucinatory Terrain"];
            
            tempAr = tempAr.concat(patronSpells4);
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells3 = mySpells3.concat(tempSpells);
        
        
        
        
        //5th
        tempSpells = [];
        x = sp5;
        while (x > 0) {
            tempAr = wa5;
            if (Math.random() < 0.5)
                tempAr = ["Contact Other Plane Ritual", "Dream", "Hold Monster", "Scrying"];
            
            tempAr = tempAr.concat(patronSpells5);
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells4 = mySpells4.concat(tempSpells);
        
        
        //6th
        tempSpells = [];
        x = sp6;
        while (x > 0) {
            tempAr = wa6;
            if (Math.random() < 0.5)
                tempAr = wa6;
            
            //tempAr = tempAr.concat(patronSpells5);
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells5 = mySpells5.concat(tempSpells);
        
        //7th
        tempSpells = [];
        x = sp7;
        while (x > 0) {
            tempAr = wa7;
            if (Math.random() < 0.5)
                tempAr = wa7;
            
            //tempAr = tempAr.concat(patronSpells5);
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells6 = mySpells6.concat(tempSpells);
        
        
        //8th
        tempSpells = [];
        x = sp8;
        while (x > 0) {
            tempAr = wa8;
            if (Math.random() < 0.5)
                tempAr = wa8;
            
            //tempAr = tempAr.concat(patronSpells5);
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells7 = mySpells7.concat(tempSpells);
        
        //9th
        tempSpells = [];
        x = sp9;
        while (x > 0) {
            tempAr = wa9;
            if (Math.random() < 0.5)
                tempAr = wa9;
            
            //tempAr = tempAr.concat(patronSpells5);
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        tempSpells.sort();
        mySpells8 = mySpells8.concat(tempSpells);
    
    }
    
    
    
    
    
    
    
    //wizards
    function wizardSpells()
 
    {
        ss1 = level + 1;
        ss2 = 0;
        if (level > 2)
            ss2 = 2;
        if (level > 3) {
            ss1 = 4;
            ss2 = 3;
        }
        if (level == 5)
            ss3 = 2;
        if (level > 5)
            ss3 = 3;
        if (level > 6)
            ss4 = (level - 6);
        if (level > 8) {
            ss4 = 3;
            ss5 = 1;
        }
        
        if (level > 9)
            ss5 = 2;
        if (level > 10) {
            ss5 = 2;
            ss6 = 1;
        }
        
        if (level > 12)
            ss7 = 1;
        
        if (level > 14)
            ss8 = 1;
        
        if (level > 16)
            ss9 = 1;
        
        if (level > 17)
            ss5 = 3;
        
        if (level > 18)
            ss6 = 2;
        
        if (level > 19)
            ss7 = 2;
        
        
        
        
        sp = level + mod[3];
        sp1 = 0;
        sp2 = 0;
        sp3 = 0;
        sp4 = 0;
        sp5 = 0;
        sp6 = 0;
        sp7 = 0;
        sp8 = 0;
        sp9 = 0;
        if (level < 3) {
            sp1 = sp;
            sp2 = 0;
        } else if (level < 5) {
            x = Math.floor(sp * .9);
            sp1 = x;
            sp2 = (sp - x);
        } else if (level < 7) {
            x = Math.ceil(sp * .45);
            y = Math.floor(sp * .45);
            
            sp1 = x;
            z = sp - x - y;
            sp2 = y;
            sp3 = z;
        
        } else if (level < 9) {
            x = Math.floor(sp * .3);
            y = Math.floor(sp * .3);
            z = Math.floor(sp * .3);
            
            sum = sp - x - y - z;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = x;
        
        } else if (level < 11) {
            x = Math.floor(sp * .22);
            y = Math.ceil(sp * .22);
            z = Math.ceil(sp * .22);
            xx = Math.floor(sp * .22);
            
            sum = sp - x - y - z - xx;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
        
        
        } else if (level < 13) {
            x = Math.floor(sp * .18);
            y = Math.ceil(sp * .18);
            z = Math.ceil(sp * .18);
            xx = Math.floor(sp * .18);
            yy = Math.ceil(sp * .18);
            
            sum = sp - x - y - z - xx - yy;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
        
        } else if (level < 15) {
            x = Math.floor(sp * .15);
            y = Math.ceil(sp * .15);
            z = Math.ceil(sp * .15);
            xx = Math.floor(sp * .15);
            yy = Math.ceil(sp * .15);
            zz = Math.ceil(sp * .15);
            
            sum = sp - x - y - z - xx - yy - zz;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
            sp7 = zz;
        
        } else if (level < 17) {
            x = Math.floor(sp * .13);
            y = Math.ceil(sp * .13);
            z = Math.ceil(sp * .13);
            xx = Math.floor(sp * .12);
            yy = Math.ceil(sp * .13);
            zz = Math.ceil(sp * .13);
            yyy = Math.floor(sp * .13);
            
            sum = sp - x - y - z - xx - yy - zz - yyy;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
            sp7 = zz;
            sp8 = yyy;
        
        } else if (level > 19) {
            x = Math.floor(sp * .12);
            y = Math.ceil(sp * .11);
            z = Math.ceil(sp * .11);
            xx = Math.floor(sp * .11);
            yy = Math.ceil(sp * .11);
            zz = Math.ceil(sp * .11);
            yyy = Math.floor(sp * .11);
            zzz = Math.floor(sp * .12);
            
            sum = sp - x - y - z - xx - yy - zz - yyy - zzz;
            sp1 = sum;
            sp2 = y;
            sp3 = z;
            sp4 = xx;
            sp5 = x;
            sp6 = yy;
            sp7 = zz;
            sp8 = yyy;
            sp9 = zzz;
        
        }
        console.log("Spells known:  " + sp1 + "/ " + sp2 + "/ " + sp3 + "/ " + sp4 + "/ " + sp5 + " / " + sp6 + " / " + sp7 + " / " + sp8 + " / " + sp9 + " / Total = " + sp);
        
        if ((sp1 + sp2 + sp3 + sp4 + sp5 + sp6 + sp7 + sp8 + sp9) != sp)
            console.log("not the right number of spells known");
        
        
        //console.log("memorized:   ("+wiz1+"/ "+wiz2+"/ "+wiz3 +"/ "+wiz4 +"/ "+wiz5 + " --- total ="+sp+")");
        
        //cantrips
        x = 3;
        if (level > 3)
            x = 4;
        if (level > 9)
            x = 5;
        
        // add minor illusion for illusion school, unless you already know it
        if (wiSchool == 5) {
            temp = "Minor Illusion";
            if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                myCantrips.push(temp);
            }
        }
        
        while (x > 0) {
            if (Math.random() < 0.5) {
                tempAr = ["Acid Splash", "Blade Ward", "Chill Touch", "Fire Bolt", "Minor Illusion", "Poison Spray", "Ray of Frost", "Shocking Grasp", "True Strike"];
            } else
                tempAr = wiCantrip;
            
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            
            
            if ((myCantrips.indexOf(temp) == -1) && (raceSpells.indexOf(temp) == -1)) {
                myCantrips.push(temp);
                x--;
            
            }
            //put in alphabetical order
        }
        
        myCantrips.sort();
        
        
        
        //1st level
        x = sp1;
        while (x > 0) {
            tempAr = wi1;
            if (Math.random() < 0.66)
                tempAr = wi1;
            
            //this seems to give a 2nd lvl wizard a familiar around 30-50% of the time      
            if (Math.random() < 0.4)
                tempAr.push("Find Familiar Ritual");
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) > -1) {
            } 
            else {
                // add it
                tempSpells.push(temp);
                x--;
            }
        }
        for (x = 0; x < wiz1; ) {
            temp = tempSpells[Math.floor(Math.random() * tempSpells.length)];
            // check if we already know spell.  don't add Find Familiar Ritual since it's a rarely used ritual
            if ((wiz1Prepared.indexOf(temp) == -1) && (temp != "Find Familiar Ritual")) {
                // add it
                wiz1Prepared.push(temp);
                x++;
            }
        }
        wiz1Prepared.sort();
        tempSpells.sort();
        mySpells0 = mySpells0.concat(tempSpells);
        
        
        
        
        
        //2nd level
        x = sp2;
        tempSpells = [];
        while (x > 0) {
            tempAr = wi2;
            if (Math.random() < 0.66)
                tempAr = ["Blindness/Deafness", "Blur", "Cloud of Daggers", "Crown of Madness", "Flaming Sphere", "Hold Person", "Invisibility", "Melf's Acid Arrow", "Mirror Image", "Phantasmal Force", "Ray of Enfeeblement", "Scorching Ray", "Shatter", "Suggestion", "Web"];
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            // check if we already know spell
            if (tempSpells.indexOf(temp) > -1) {
            } 
            else {
                // add it
                tempSpells.push(temp);
                x--;
            }
        
        }
        for (x = 0; x < wiz2; ) {
            temp = tempSpells[Math.floor(Math.random() * tempSpells.length)];
            
            // check if we already know spell
            if (wiz2Prepared.indexOf(temp) == -1) {
                // add it
                wiz2Prepared.push(temp);
                x++;
            }
        }
        wiz2Prepared.sort();
        tempSpells.sort();
        mySpells1 = mySpells1.concat(tempSpells);
        
        
        
        
        
        //3rd level
        tempSpells = [];
        
        //animate dead for free if you're a level 6 necromancer
        if (abOutput.indexOf("Undead Thralls") > -1) {
            tempSpells.push("Animate Dead");
        
        }
        
        x = sp3;
        while (x > 0) {
            tempAr = wi3;
            if (Math.random() < 0.66)
                tempAr = ["Animate Dead", "Bestow Curse", "Blink", "Counterspell", "Counterspell", "Dispel Magic", "Fear", "Fireball", "Fireball", "Fireball", "Fly", "Gaseous Form", "Glyph of Warding", "Haste", "Haste", "Hypnotic Pattern", "Leomund’s Tiny Hut Ritual", "Lightning Bolt", "Magic Circle", "Major Image", "Protection from Energy", "Slow", "Stinking Cloud", "Vampiric Touch"];
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        for (x = 0; x < wiz3; ) {
            temp = tempSpells[Math.floor(Math.random() * tempSpells.length)];
            
            
            // extra chance of animate dead for necromancer
            if ((abOutput.indexOf("Undead Thralls") > -1) && (Math.random() > 0.66)) {
                temp = "Animate Dead";
            }
            
            // check if we already know spell
            if (wiz3Prepared.indexOf(temp) == -1) {
                // add it
                wiz3Prepared.push(temp);
                x++;
            }
        }
        wiz3Prepared.sort();
        tempSpells.sort();
        mySpells2 = mySpells2.concat(tempSpells);
        
        
        
        
        
        
        
        //4th
        tempSpells = [];
        
        //poly free if you're a level 10 transmuter
        if (abOutput.indexOf("Shapechanger") > -1) {
            tempSpells.push("Polymorph");
        }
        
        x = sp4;
        while (x > 0) {
            tempAr = wi4;
            if (Math.random() < 0.5)
                tempAr = ["Banishment", "Blight", "Confusion", "Conjure Minor Elementals", "Dimension Door", "Evard's Black Tentacles", "Fire Shield", "Greater Invisibility", "Ice Storm", "Mordenkainen’s Faithful Hound", "Otiluke’s Resilient Sphere", "Phantasmal Killer", "Polymorph", "Stoneskin", "Wall of Fire"];
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        for (x = 0; x < wiz4; ) {
            temp = tempSpells[Math.floor(Math.random() * tempSpells.length)];
            
            // extra chance of poly for lvl 10 transmuter
            if ((abOutput.indexOf("Shapechanger") > -1) && (Math.random() > 0.66)) {
                temp = "Polymorph";
            }
            
            // check if we already know spell
            if (wiz4Prepared.indexOf(temp) == -1) {
                // add it
                wiz4Prepared.push(temp);
                x++;
            }
        }
        wiz4Prepared.sort();
        tempSpells.sort();
        mySpells3 = mySpells3.concat(tempSpells);
        
        
        
        //5th
        tempSpells = [];
        
        
        x = sp5;
        while (x > 0) {
            tempAr = wi5;
            if (Math.random() < 0.5)
                tempAr = ["Animate Objects", "Bigby’s Hand", "Cloudkill", "Cone of Cold", "Conjure Elemental", "Dominate Person", "Geas", "Hold Monster", "Legend Lore", "Mislead", "Passwall", "Planar Binding", "Seeming", "Telekinesis", "Teleportation Circle", "Wall of Force", "Wall of Stone"];
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        for (x = 0; x < wiz5; ) {
            temp = tempSpells[Math.floor(Math.random() * tempSpells.length)];
            
            // check if we already know spell
            if (wiz5Prepared.indexOf(temp) == -1) {
                // add it
                wiz5Prepared.push(temp);
                x++;
            }
        }
        wiz5Prepared.sort();
        tempSpells.sort();
        mySpells4 = mySpells4.concat(tempSpells);
        
        
        
        
        //6th
        tempSpells = [];
        
        
        x = sp6;
        while (x > 0) {
            tempAr = wi6;
            if (Math.random() < 0.5)
                tempAr = wi6;
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        for (x = 0; x < wiz6; ) {
            temp = tempSpells[Math.floor(Math.random() * tempSpells.length)];
            
            // check if we already know spell
            if (wiz6Prepared.indexOf(temp) == -1) {
                // add it
                wiz5Prepared.push(temp);
                x++;
            }
        }
        wiz6Prepared.sort();
        tempSpells.sort();
        mySpells5 = mySpells5.concat(tempSpells);
        
        
        
        //7th
        tempSpells = [];
        
        
        x = sp7;
        while (x > 0) {
            tempAr = wi7;
            if (Math.random() < 0.5)
                tempAr = wi7;
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        for (x = 0; x < wiz7; ) {
            temp = tempSpells[Math.floor(Math.random() * tempSpells.length)];
            
            // check if we already know spell
            if (wiz7Prepared.indexOf(temp) == -1) {
                // add it
                wiz7Prepared.push(temp);
                x++;
            }
        }
        wiz7Prepared.sort();
        tempSpells.sort();
        mySpells6 = mySpells6.concat(tempSpells);
        
        
        
        //8th
        tempSpells = [];
        
        
        x = sp5;
        while (x > 0) {
            tempAr = wi8;
            if (Math.random() < 0.5)
                tempAr = wi8;
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        for (x = 0; x < wiz8; ) {
            temp = tempSpells[Math.floor(Math.random() * tempSpells.length)];
            
            // check if we already know spell
            if (wiz8Prepared.indexOf(temp) == -1) {
                // add it
                wiz8Prepared.push(temp);
                x++;
            }
        }
        wiz8Prepared.sort();
        tempSpells.sort();
        mySpells7 = mySpells7.concat(tempSpells);
        
        
        
        //9th
        tempSpells = [];
        
        
        x = sp9;
        while (x > 0) {
            tempAr = wi9;
            if (Math.random() < 0.5)
                tempAr = wi9;
            
            temp = tempAr[Math.floor(Math.random() * tempAr.length)];
            
            
            // check if we already know spell
            if (tempSpells.indexOf(temp) == -1) {
                tempSpells.push(temp);
                x--;
            }
        
        }
        for (x = 0; x < wiz9; ) {
            temp = tempSpells[Math.floor(Math.random() * tempSpells.length)];
            
            // check if we already know spell
            if (wiz9Prepared.indexOf(temp) == -1) {
                // add it
                wiz5Prepared.push(temp);
                x++;
            }
        }
        wiz9Prepared.sort();
        tempSpells.sort();
        mySpells8 = mySpells8.concat(tempSpells);
        
        
        // polymorph automatically in book for 10th level transmutation wizards
    }
import React, { useState } from "react";

function AttackAndSpellcastingTable({character})
{

    function getNewRow(atkname, atkbonus, atkdamage)
    {
      return (
        <tr>
          <td><input name="atkname" type="text" value={atkname}/></td>
          <td><input name="atkbonus" type="text" value={atkbonus}/></td>
          <td><input name="atkdamage" type="text" value={atkdamage}/></td>
        </tr>
      );  
    } 

    let rows = [];
    
    let primaryWeapon = character.ClassDetails.PrimaryWeapon;
    rows = [].concat(rows, getNewRow(primaryWeapon.Name,"",primaryWeapon.Damage));


    let secondaryWeapon = character.ClassDetails.OffHandWeapon;
    if(secondaryWeapon.Name !== null)
    {
      rows = [].concat(rows, getNewRow(secondaryWeapon.Name,"", secondaryWeapon.Damage));
    };

    let additionalWeapons = character.ClassDetails.AdditionalWeapons;
    if(additionalWeapons.length !== 0)
    {
      additionalWeapons.forEach((weapon) => {{
        rows = [].concat(rows, getNewRow(weapon.Name,"", weapon.Damage))
      }})

    };

    let cantrips = character.ClassDetails.Cantrips;
    if (cantrips.length !== 0) {
      cantrips.forEach((cantrip) => {
        rows = [].concat(rows, getNewRow(cantrip.Name,"", ""))
      })
    }
    
    let level1Spells = character.ClassDetails.Level1Spells;
    if (level1Spells.length !== 0) {
      level1Spells.forEach((spell) => {
        rows = [].concat(rows, getNewRow(spell.Name,"", ""))
      })
    }
    return(
        <table>
            <tbody>
              <tr>
                {rows}
              </tr>
            </tbody>
        </table>
        
    )
}

export default AttackAndSpellcastingTable


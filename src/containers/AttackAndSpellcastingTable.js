import React, { useState } from "react";
import {ReturnAbilityScoreModifier} from './Charactersheet';

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

    function CalculateWeaponAttackBonus(score)
    {
      let _score = ReturnAbilityScoreModifier(character.AbilityScores.scores[score] + character.ClassDetails.ProficiencyBonus);
      let s = _score >= 0 ? '+':'';
      return `${s}${_score}`;
    }

    function CalculateWeaponDamageBonus(score)
    {
      return `+ ${ReturnAbilityScoreModifier(character.AbilityScores.scores[score])}`;
    }

    let rows = [];
    
    // PRIMARY WEAPON
    let primaryWeapon = character.ClassDetails.PrimaryWeapon;
    let primaryWeaponAttackBonus = "";
    let primaryWeaponDamageModifier = "";

    if (primaryWeapon.Properties.includes("Finesse")) {
      if (ReturnAbilityScoreModifier(character.AbilityScores.scores["dex"]) > 0) {
        primaryWeaponDamageModifier = CalculateWeaponDamageBonus("dex")
      }
      primaryWeaponAttackBonus = CalculateWeaponAttackBonus("dex");
    }
    else{
      if (ReturnAbilityScoreModifier(character.AbilityScores.scores["str"]) > 0) {
        primaryWeaponDamageModifier = CalculateWeaponDamageBonus("str");
      }
      primaryWeaponAttackBonus = CalculateWeaponAttackBonus("str");
    }

    rows = [].concat(rows, getNewRow(primaryWeapon.Name,primaryWeaponAttackBonus,`${primaryWeapon.Damage} ${primaryWeaponDamageModifier}`));

    // SECONDARY WEAPON
    let secondaryWeapon = character.ClassDetails.OffHandWeapon;
    let secondaryWeaponAttackBonus = "";
    let secondaryWeaponDamageModifier = "";

    if(secondaryWeapon.Name !== null)
    {
      if(secondaryWeapon.Properties.includes("Finesse")){
        if (ReturnAbilityScoreModifier(character.AbilityScores.scores["dex"]) > 0) {
          secondaryWeaponDamageModifier = CalculateWeaponDamageBonus("dex")
        }
        secondaryWeaponAttackBonus = CalculateWeaponAttackBonus("dex");
      } 
      else{
        if (ReturnAbilityScoreModifier(character.AbilityScores.scores["str"]) > 0) {
          secondaryWeaponDamageModifier = CalculateWeaponDamageBonus("str");
        }
        secondaryWeaponAttackBonus = CalculateWeaponAttackBonus("str");
      }
      rows = [].concat(rows, getNewRow(secondaryWeapon.Name,secondaryWeaponAttackBonus, secondaryWeapon.Damage));
    };

    // ADDITIONAL WEAPONS
    let additionalWeapons = character.ClassDetails.AdditionalWeapons;
    if(additionalWeapons.length !== 0)
    {
      additionalWeapons.forEach((weapon) => {{

        let additionalWeaponAttackBonus = "";
        let additionalWeaponDamageModifier = "";

        if (weapon.Properties.includes("Finesse")) {
          if (ReturnAbilityScoreModifier(character.AbilityScores.scores["dex"]) > 0) {
            additionalWeaponDamageModifier = CalculateWeaponDamageBonus("dex")
          }
          additionalWeaponAttackBonus = CalculateWeaponAttackBonus("dex");
        }
        else{
          if (ReturnAbilityScoreModifier(character.AbilityScores.scores["str"]) > 0) {
            additionalWeaponDamageModifier = CalculateWeaponDamageBonus("str")
          }
          additionalWeaponAttackBonus = CalculateWeaponAttackBonus("str");
        }
        rows = [].concat(rows, getNewRow(weapon.Name,additionalWeaponAttackBonus, `${weapon.Damage} ${additionalWeaponDamageModifier}`))
      }})
    };

    // SPELLS
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


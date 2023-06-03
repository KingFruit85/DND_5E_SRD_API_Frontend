import React from "react";

function Equipment({ character }) {
  let equipment = "";
  console.log(character);
  if (character.ClassDetails.Armor.Name !== null) {
    equipment += character.ClassDetails.Armor.Name + ", ";
  }
  if (character.ClassDetails.Shield !== null) {
    equipment += character.ClassDetails.Shield.Name + ", ";
  }
  if (character.ClassDetails.Ammunition.length > 0) {
    character.ClassDetails.Ammunition.forEach((item) => {
      equipment += `${item.Count} x ${item.Name}, `;
    });
  }
  if (character.ClassDetails.MusicalInstruments.length > 0) {
    character.ClassDetails.MusicalInstruments.forEach((item) => {
      equipment += item.Name + ", ";
    });
  }
  if (character.ClassDetails.EquipmentPack !== null) {
    equipment += character.ClassDetails.EquipmentPack.Name + ", ";
  }
  if (character.ClassDetails.HolySymbol !== null) {
    equipment += character.ClassDetails.HolySymbol.Name + ", ";
  }

  return <textarea>{equipment.slice(0, -2)}</textarea>;
}

export default Equipment;

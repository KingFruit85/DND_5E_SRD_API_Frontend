import React, { useState, useEffect } from "react";
import AttackAndSpellcastingTable from "./AttackAndSpellcastingTable";
import Equipment from "./Equipment";

export function ReturnAbilityScoreModifier(stat) {
  //Math.sign() will add +/-
  return Math.floor((stat - 10) / 2);
}

export function CharacterSheet() {
  const [isLoading, setIsLoading] = useState(true);
  const [characterData, setCharacterData] = useState("");
  const [attacksandspellcasting, setAttacksAndSpellCasting] = useState([
    <tr>
      <td>
        <input name="atkname1" type="text" value={""} />
      </td>
      <td>
        <input name="atkname1" type="text" value={""} />
      </td>
      <td></td>
      <input name="atkname1" type="text" value={""} />
    </tr>,
  ]);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    fetch("https://dnd5echaractercreator.azurewebsites.net/Character") // https://localhost:44388/Character
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!ignore) {
          setIsLoading(false);
          setCharacterData(data);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  if (isLoading) {
    return <section>Loading...</section>;
  }

  return (
    <form className="charsheet">
      <header>
        <section className="charname">
          <label htmlFor="charname">Character Name</label>
          <input
            name="charname"
            defaultValue={
              characterData.FirstName + " " + characterData.LastName
            }
          />
        </section>
        <section className="misc">
          <ul>
            <li>
              <label htmlFor="classlevel">Class & Level</label>
              <input
                name="classlevel"
                defaultValue={characterData.CharacterClass + " " + 1}
              />
            </li>
            <li>
              <label htmlFor="background">Background</label>
              <input name="background" placeholder="Acolyte" />
            </li>
            <li>
              <label htmlFor="playername">Player Name</label>
              <input name="playername" placeholder="Player McPlayerface" />
            </li>
            <li>
              <label htmlFor="race">Race</label>
              <input
                name="race"
                defaultValue={characterData.RaceDetails.Name}
              />
            </li>
            <li>
              <label htmlFor="alignment">Alignment</label>
              <input
                name="alignment"
                defaultValue={characterData.RaceDetails.Alignment}
              />
            </li>
            <li>
              <label htmlFor="experiencepoints">Experience Points</label>
              <input name="experiencepoints" placeholder="3240" />
            </li>
          </ul>
        </section>
      </header>
      <main>
        <section>
          <section className="attributes">
            <div className="scores">
              <ul>
                <li>
                  <div className="score">
                    <label htmlFor="Strengthscore">Strength</label>
                    <input
                      name="Strengthscore"
                      defaultValue={characterData.AbilityScores.scores["str"]}
                      className="stat"
                    />
                  </div>
                  <div className="modifier">
                    <input
                      name="Strengthmod"
                      defaultValue={ifPosAddPlusSign(
                        ReturnAbilityScoreModifier(
                          characterData.AbilityScores.scores["str"]
                        )
                      )}
                      className="statmod"
                    />
                  </div>
                </li>
                <li>
                  <div className="score">
                    <label htmlFor="Dexterityscore">Dexterity</label>
                    <input
                      name="Dexterityscore"
                      defaultValue={characterData.AbilityScores.scores["dex"]}
                      className="stat"
                    />
                  </div>
                  <div className="modifier">
                    <input
                      name="Dexteritymod"
                      defaultValue={ifPosAddPlusSign(
                        ReturnAbilityScoreModifier(
                          characterData.AbilityScores.scores["dex"]
                        )
                      )}
                      className="statmod"
                    />
                  </div>
                </li>
                <li>
                  <div className="score">
                    <label htmlFor="Constitutionscore">Constitution</label>
                    <input
                      name="Constitutionscore"
                      defaultValue={characterData.AbilityScores.scores["con"]}
                      className="stat"
                    />
                  </div>
                  <div className="modifier">
                    <input
                      name="Constitutionmod"
                      defaultValue={ifPosAddPlusSign(
                        ReturnAbilityScoreModifier(
                          characterData.AbilityScores.scores["con"]
                        )
                      )}
                      className="statmod"
                    />
                  </div>
                </li>
                <li>
                  <div className="score">
                    <label htmlFor="Wisdomscore">Wisdom</label>
                    <input
                      name="Wisdomscore"
                      defaultValue={characterData.AbilityScores.scores["wis"]}
                      className="stat"
                    />
                  </div>
                  <div className="modifier">
                    <input
                      name="Wisdommod"
                      defaultValue={ifPosAddPlusSign(
                        ReturnAbilityScoreModifier(
                          characterData.AbilityScores.scores["wis"]
                        )
                      )}
                    />
                  </div>
                </li>
                <li>
                  <div className="score">
                    <label htmlFor="Intelligencescore">Intelligence</label>
                    <input
                      name="Intelligencescore"
                      defaultValue={characterData.AbilityScores.scores["int"]}
                      className="stat"
                    />
                  </div>
                  <div className="modifier">
                    <input
                      name="Intelligencemod"
                      defaultValue={ifPosAddPlusSign(
                        ReturnAbilityScoreModifier(
                          characterData.AbilityScores.scores["int"]
                        )
                      )}
                      className="statmod"
                    />
                  </div>
                </li>
                <li>
                  <div className="score">
                    <label htmlFor="Charismascore">Charisma</label>
                    <input
                      name="Charismascore"
                      defaultValue={characterData.AbilityScores.scores["cha"]}
                      className="stat"
                    />
                  </div>
                  <div className="modifier">
                    <input
                      name="Charismamod"
                      defaultValue={ifPosAddPlusSign(
                        ReturnAbilityScoreModifier(
                          characterData.AbilityScores.scores["cha"]
                        )
                      )}
                      className="statmod"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="attr-applications">
              <div className="inspiration box">
                <div className="label-container">
                  <label htmlFor="inspiration">Inspiration</label>
                </div>
                <input name="inspiration" type="checkbox" />
              </div>
              <div className="proficiencybonus box">
                <div className="label-container">
                  <label htmlFor="proficiencybonus">Proficiency Bonus</label>
                </div>
                <input
                  name="proficiencybonus"
                  defaultValue={characterData.ClassDetails.ProficiencyBonus}
                />
              </div>
              <div className="saves list-section box">
                <ul>
                  <li>
                    <label htmlFor="Strength-save">Strength</label>
                    <input
                      name="Strength-save"
                      defaultValue={ifPosAddPlusSign(
                        characterData.SavingThrows["strength"]
                      )}
                      type="text"
                    />
                    <input name="Strength-save-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Dexterity-save">Dexterity</label>
                    <input
                      name="Dexterity-save"
                      defaultValue={ifPosAddPlusSign(
                        characterData.SavingThrows["dexterity"]
                      )}
                      type="text"
                    />
                    <input name="Dexterity-save-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Constitution-save">Constitution</label>
                    <input
                      name="Constitution-save"
                      defaultValue={ifPosAddPlusSign(
                        characterData.SavingThrows["constitution"]
                      )}
                      type="text"
                    />
                    <input name="Constitution-save-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Wisdom-save">Wisdom</label>
                    <input
                      name="Wisdom-save"
                      defaultValue={ifPosAddPlusSign(
                        characterData.SavingThrows["wisdom"]
                      )}
                      type="text"
                    />
                    <input name="Wisdom-save-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Intelligence-save">Intelligence</label>
                    <input
                      name="Intelligence-save"
                      defaultValue={ifPosAddPlusSign(
                        characterData.SavingThrows["intelligence"]
                      )}
                      type="text"
                    />
                    <input name="Intelligence-save-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Charisma-save">Charisma</label>
                    <input
                      name="Charisma-save"
                      defaultValue={ifPosAddPlusSign(
                        characterData.SavingThrows["charisma"]
                      )}
                      type="text"
                    />
                    <input name="Charisma-save-prof" type="checkbox" />
                  </li>
                </ul>
                <div className="label">Saving Throws</div>
              </div>
              <div className="skills list-section box">
                <ul>
                  <li>
                    <label htmlFor="Acrobatics">
                      Acrobatics <span className="skill">(Dex)</span>
                    </label>
                    <input
                      name="Acrobatics"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.acrobatics
                      )}
                      type="text"
                    />
                    <input name="Acrobatics-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Animal Handling">
                      Animal Handling <span className="skill">(Wis)</span>
                    </label>
                    <input
                      name="Animal Handling"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.animalHandling
                      )}
                      type="text"
                    />
                    <input name="Animal Handling-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Arcana">
                      Arcana <span className="skill">(Int)</span>
                    </label>
                    <input
                      name="Arcana"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.arcana
                      )}
                      type="text"
                    />
                    <input name="Arcana-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Athletics">
                      Athletics <span className="skill">(Str)</span>
                    </label>
                    <input
                      name="Athletics"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.athletics
                      )}
                      type="text"
                    />
                    <input name="Athletics-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Deception">
                      Deception <span className="skill">(Cha)</span>
                    </label>
                    <input
                      name="Deception"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.deception
                      )}
                      type="text"
                    />
                    <input name="Deception-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Hist.ory">
                      History <span className="skill">(Int)</span>
                    </label>
                    <input
                      name="History"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.history
                      )}
                      type="text"
                    />
                    <input name="History-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Insight">
                      Insight <span className="skill">(Wis)</span>
                    </label>
                    <input
                      name="Insight"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.insight
                      )}
                      type="text"
                    />
                    <input name="Insight-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Intimidation">
                      Intimidation <span className="skill">(Cha)</span>
                    </label>
                    <input
                      name="Intimidation"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.intimidation
                      )}
                      type="text"
                    />
                    <input name="Intimidation-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Investigation">
                      Investigation <span className="skill">(Int)</span>
                    </label>
                    <input
                      name="Investigation"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.investigation
                      )}
                      type="text"
                    />
                    <input name="Investigation-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Medicine">
                      Medicine <span className="skill">(Wis)</span>
                    </label>
                    <input
                      name="Medicine"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.medicine
                      )}
                      type="text"
                    />
                    <input name="Medicine-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Nature">
                      Nature <span className="skill">(Int)</span>
                    </label>
                    <input
                      name="Nature"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.nature
                      )}
                      type="text"
                    />
                    <input name="Nature-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Perception">
                      Perception <span className="skill">(Wis)</span>
                    </label>
                    <input
                      name="Perception"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.perception
                      )}
                      type="text"
                    />
                    <input name="Perception-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Performance">
                      Performance <span className="skill">(Cha)</span>
                    </label>
                    <input
                      name="Performance"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.performance
                      )}
                      type="text"
                    />
                    <input name="Performance-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Persuasion">
                      Persuasion <span className="skill">(Cha)</span>
                    </label>
                    <input
                      name="Persuasion"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.persuasion
                      )}
                      type="text"
                    />
                    <input name="Persuasion-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Religion">
                      Religion <span className="skill">(Int)</span>
                    </label>
                    <input
                      name="Religion"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.religion
                      )}
                      type="text"
                    />
                    <input name="Religion-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Sleight of Hand">
                      Sleight of Hand <span className="skill">(Dex)</span>
                    </label>
                    <input
                      name="Sleight of Hand"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.sleightOfHand
                      )}
                      type="text"
                    />
                    <input name="Sleight of Hand-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Stealth">
                      Stealth <span className="skill">(Dex)</span>
                    </label>
                    <input
                      name="Stealth"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.stealth
                      )}
                      type="text"
                    />
                    <input name="Stealth-prof" type="checkbox" />
                  </li>
                  <li>
                    <label htmlFor="Survival">
                      Survival <span className="skill">(Wis)</span>
                    </label>
                    <input
                      name="Survival"
                      defaultValue={ifPosAddPlusSign(
                        characterData.Skills.survival
                      )}
                      type="text"
                    />
                    <input name="Survival-prof" type="checkbox" />
                  </li>
                </ul>
                <div className="label">Skills</div>
              </div>
            </div>
          </section>
          <div className="passive-perception box">
            <div className="label-container">
              <label htmlFor="passiveperception">
                Passive Wisdom (Perception)
              </label>
            </div>
            <input
              name="passiveperception"
              defaultValue={calculatePassivePerception(characterData)}
            />
          </div>
          <div className="otherprofs box textblock">
            <label htmlFor="otherprofs">
              Other Proficiencies and Languages
            </label>
            <textarea name="otherprofs">
              {populateOtherProfsAndLanguageArea(characterData)}
            </textarea>
          </div>
        </section>
        <section>
          <section className="combat">
            <div className="armorclass">
              <div>
                <label htmlFor="ac">Armor Class</label>
                <input
                  name="ac"
                  defaultValue={characterData.ArmorClass}
                  type="text"
                />
              </div>
            </div>
            <div className="initiative">
              <div>
                <label htmlFor="initiative">Initiative</label>
                <input
                  name="initiative"
                  defaultValue={ifPosAddPlusSign(characterData.Initiative)}
                  type="text"
                />
              </div>
            </div>
            <div className="speed">
              <div>
                <label htmlFor="speed">Speed</label>
                <input
                  name="speed"
                  defaultValue={characterData.RaceDetails.Speed}
                  type="text"
                />
              </div>
            </div>
            <div className="hp">
              <div className="regular">
                <div className="max">
                  <label htmlFor="maxhp">Hit Point Maximum</label>
                  <input
                    name="maxhp"
                    defaultValue={characterData.HitPoints}
                    type="text"
                  />
                </div>
                <div className="current">
                  <label htmlFor="currenthp">Current Hit Points</label>
                  <input
                    name="currenthp"
                    defaultValue={characterData.HitPoints}
                    type="text"
                  />
                </div>
              </div>
              <div className="temporary">
                <label htmlFor="temphp">Temporary Hit Points</label>
                <input name="temphp" type="text" />
              </div>
            </div>
            <div className="hitdice">
              <div>
                <div className="total">
                  <label>Total</label>
                  <input
                    name="totalhd"
                    defaultValue={characterData.ClassDetails.HitDie}
                    type="text"
                  />
                </div>
                <div className="remaining">
                  <label htmlFor="remaininghd">Hit Dice</label>
                  <input name="remaininghd" type="text" />
                </div>
              </div>
            </div>
            <div className="deathsaves">
              <div>
                <div className="label">
                  <label>Death Saves</label>
                </div>
                <div className="marks">
                  <div className="deathsuccesses">
                    <label>Successes</label>
                    <div className="bubbles">
                      <input name="deathsuccess1" type="checkbox" />
                      <input name="deathsuccess2" type="checkbox" />
                      <input name="deathsuccess3" type="checkbox" />
                    </div>
                  </div>
                  <div className="deathfails">
                    <label>Failures</label>
                    <div className="bubbles">
                      <input name="deathfail1" type="checkbox" />
                      <input name="deathfail2" type="checkbox" />
                      <input name="deathfail3" type="checkbox" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="attacksandspellcasting">
            <div>
              <label>Attacks & Spellcasting</label>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Atk Bonus</th>
                    <th>Damage/Type</th>
                  </tr>
                </thead>
              </table>
              <AttackAndSpellcastingTable character={characterData} />
              <textarea></textarea>
            </div>
          </section>
          <section className="equipment">
            <div>
              <label>Equipment</label>
              <div className="money">
                <ul>
                  <li>
                    <label htmlFor="cp">cp</label>
                    <input name="cp" />
                  </li>
                  <li>
                    <label htmlFor="sp">sp</label>
                    <input name="sp" />
                  </li>
                  <li>
                    <label htmlFor="ep">ep</label>
                    <input name="ep" />
                  </li>
                  <li>
                    <label htmlFor="gp">gp</label>
                    <input name="gp" />
                  </li>
                  <li>
                    <label htmlFor="pp">pp</label>
                    <input name="pp" />
                  </li>
                </ul>
              </div>
              <Equipment character={characterData} />
            </div>
          </section>
        </section>
        <section>
          <section className="flavor">
            <div className="personality">
              <label htmlFor="personality">Personality</label>
              <textarea name="personality">
                {characterData.BackStoryDetails.Life}
              </textarea>
            </div>
            <div className="ideals">
              <label htmlFor="ideals">Ideals</label>
              <textarea name="ideals">
                {characterData.BackStoryDetails.Likes}
              </textarea>
            </div>
            <div className="bonds">
              <label htmlFor="bonds">Bonds</label>
              <textarea name="bonds">
                {characterData.BackStoryDetails.Dislikes}
              </textarea>
            </div>
            <div className="flaws">
              <label htmlFor="flaws">Flaws</label>
              <textarea name="flaws">
                {characterData.BackStoryDetails.Quirks}
              </textarea>
            </div>
          </section>
          <section className="features">
            <div>
              <label htmlFor="features">Features & Traits</label>
              <textarea name="features">
                {PopulateFeaturesAndTraits(characterData)}
              </textarea>
            </div>
          </section>
        </section>
      </main>
    </form>
  );

  function ifPosAddPlusSign(stat) {
    if (stat > 0) {
      return "+" + stat.toString();
    }
    return stat;
  }

  function calculatePassivePerception(character) {
    if (character.ClassDetails.Proficiencies.skills.includes("perception")) {
      return (
        10 +
        ReturnAbilityScoreModifier(character.AbilityScores.scores["wis"]) +
        character.ClassDetails.ProficiencyBonus
      );
    }
    return (
      10 + ReturnAbilityScoreModifier(character.AbilityScores.scores["wis"])
    );
  }

  function populateOtherProfsAndLanguageArea(character) {
    let profs = populateOtherProfsArea(character);
    let languages = populateLanguages(character);

    return profs + "\n\n" + languages;
  }

  function populateLanguages(character) {
    let languages = "Languages: ";
    if (character.RaceDetails.Languages.length > 0) {
      character.RaceDetails.Languages.forEach((item) => {
        languages += item + ", ";
      });
    }

    return languages.slice(0, -2);
  }
  function populateOtherProfsArea(character) {
    let proficiencies = "Proficiencies: ";
    let armorProfs = "";
    let weaponProfs = "";
    let toolProfs = "";

    if (character.ClassDetails.Proficiencies.armor.length > 0) {
      character.ClassDetails.Proficiencies.armor.forEach((item) => {
        armorProfs += item + ", ";
      });
    }

    if (character.ClassDetails.Proficiencies.weapons.length > 0) {
      character.ClassDetails.Proficiencies.weapons.forEach((item) => {
        weaponProfs += item + ", ";
      });
    }

    if (character.ClassDetails.Proficiencies.tools.length > 0) {
      character.ClassDetails.Proficiencies.tools.forEach((item) => {
        toolProfs += item + ", ";
      });
    }

    let result = proficiencies + armorProfs + weaponProfs + toolProfs;
    return result.slice(0, -2);
  }

  function PopulateFeaturesAndTraits(character) {
    let result = "";

    let keys = Object.keys(character.RaceDetails.RacePerks);

    keys = keys.filter((k) => k !== "Age");
    keys = keys.filter((k) => k !== "Speed");
    keys = keys.filter((k) => k !== "Alignment");
    keys = keys.filter((k) => k !== "Languages");
    keys = keys.filter((k) => k !== "Ability score increase");
    keys = keys.filter((k) => k !== "Ability score increase (Lightfoot)");
    keys = keys.filter((k) => k !== "Cantrip");
    keys = keys.filter((k) => k !== "Extra language");
    keys = keys.filter((k) => k !== "Tool proficiency");

    keys.forEach((key) => {
      result += key + ": " + character.RaceDetails.RacePerks[key] + "\n\n";
    });
    return result;
  }

  function addRow() {
    let rows = attacksandspellcasting.rows;
    rows.push("new row");
    setAttacksAndSpellCasting(rows);
  }
}

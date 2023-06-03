export async function getNewCharacter() {
  try {
    const response = await fetch(
      "https://dnd5echaractercreator.azurewebsites.net/Character"
    ); // https://localhost:44388/Character
    // parse into a model
    return response.json();
  } catch (error) {
    return [];
  }
}

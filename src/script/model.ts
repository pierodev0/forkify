
// import 'regenerator-runtime/runtime';
export const state = {
  recipe: {},
};

export const loadRecipes = async function (id: string) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${data.message} (${res.status})`);
    }
    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      imageUrl: recipe.image_url,
      publisher: recipe.publisher,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      title: recipe.title,
      ingredients: recipe.ingredients,
      sourceUrl: recipe.source_url,
    };

    // console.log(state.recipe)
  } catch (error) {
    alert(error);
  }
};

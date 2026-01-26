
const recipeForm = document.getElementById('recipe-form');
const recipeInput = document.getElementById('recipe-input');
const recipeContainer = document.getElementById('recipe-container');
const searchTitle = document.getElementById('search-title');
const fetchRecipes = async (event) => {
    event.preventDefault(); 

    const ingredient = recipeInput.value.trim();
    if (!ingredient) return;
    recipeContainer.innerHTML = '';
    searchTitle.textContent = `Buscando recetas con "${ingredient}"...`;

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        if (!data.meals) {
            searchTitle.textContent = "Sin resultados";
            recipeContainer.innerHTML = `
                <div class="col-12 text-center my-5">
                    <p class="alert alert-warning">No se encontraron recetas para "${ingredient}". Prueba con términos en inglés como: chicken, beef, apple o tomato.</p>
                </div>
            `;
            return;
        }
        searchTitle.textContent = `Resultados para: "${ingredient}"`;
        displayRecipes(data.meals);

    } catch (error) {
        console.error("Error al conectar con la API:", error);
        searchTitle.textContent = "Error de conexión";
    }
};
const displayRecipes = (meals) => {
    meals.forEach(meal => {
        const { strMeal, strMealThumb, idMeal } = meal;

        const cardHTML = `
            <div class="col">
                <div class="card shadow-sm h-100 custom-card">
                    <img src="${strMealThumb}" class="card-img-top" alt="${strMeal}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-success">${strMeal}</h5>
                        <p class="card-text">Una deliciosa receta basada en ${recipeInput.value}.</p>
                        <a href="https://www.themealdb.com/meal/${idMeal}" target="_blank" class="btn btn-primary mt-auto">Ver Receta</a>
                    </div>
                </div>
            </div>
        `;
        recipeContainer.innerHTML += cardHTML;
    });
};
recipeForm.addEventListener('submit', fetchRecipes);
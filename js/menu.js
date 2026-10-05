function filterFood(category) {

    let foods =
        document.querySelectorAll(".food-card");

    foods.forEach(function(food) {

        let foodCategory =
            food.getAttribute("data-category");

        if (
            category === "All" ||
            foodCategory === category
        ) {

            food.style.display = "block";

        } else {

            food.style.display = "none";

        }

    });
}


function searchFood() {

    let search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let foods =
        document.querySelectorAll(".food-card");

    foods.forEach(function(food) {

        let name =
            food
            .getAttribute("data-name")
            .toLowerCase();

        if (name.includes(search)) {

            food.style.display = "block";

        } else {

            food.style.display = "none";

        }

    });
}


window.onload = function() {

    let category =
        localStorage.getItem("selectedCategory");

    if (category) {

        filterFood(category);

        localStorage.removeItem(
            "selectedCategory"
        );

    }

};
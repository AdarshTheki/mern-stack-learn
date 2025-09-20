export const githubLoader = async () => {
    const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
    );
    const data = await res.json();
    return data?.meals;
};

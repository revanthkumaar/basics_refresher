function selectCategory() {
    console.log('select category function triggered');
  var selectCategory = document.getElementById(`homePageCategorySelection`);
  var selectedValue =
    selectCategory.options[selectCategory.selectedIndex].value;
  console.log(selectedValue);
}

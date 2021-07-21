

const searchFunction =  (event) => {
  
  const searchElement = document.getElementById('search')
  const searchWord = searchElement.value
  console.log(searchWord)

}


const selectCategory = () => {
    console.log('select category function triggered');
  var selectCategory = document.getElementById(`homePageCategorySelection`);
  var selectedValue =
    selectCategory.options[selectCategory.selectedIndex].value;
  console.log(selectedValue);
}

//


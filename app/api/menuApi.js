const URL = 'https://nhatranghk.site/menu.php'
export default() {
  return fetch(URL)
    .then((response) => response.json())
    .then((responseJson) => console.log(responseJson))
    .catch((error) => console.log(error))
}

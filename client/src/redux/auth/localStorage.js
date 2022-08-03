function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch {
    return undefined;
  }
}

function clearData(token) {
  localStorage.removeItem("token");
}

export { loadData, saveData, clearData };

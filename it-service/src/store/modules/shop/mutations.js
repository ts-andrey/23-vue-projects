export default {
  addShopItem(state, payload) {
    switch (payload.type) {
      case 'laptop':
        state.laptops.unshift(payload);
        break;
      case 'notebook':
        state.notebooks.unshift(payload);
        break;
      case 'pcComponent':
        state.pcComponents.unshift(payload);
        break;
      case 'phone':
        state.phones.unshift(payload);
        break;
    }
  },
  removeShopItem(state, payload) {
    switch (payload.type) {
      case 'laptop':
        state.laptops = state.laptops.filter(el => el.id !== payload.id);
        break;
      case 'notebook':
        state.notebooks = state.notebooks.filter(el => el.id !== payload.id);
        break;
      case 'pcComponent':
        state.pcComponents = state.pcComponents.filter(el => el.id !== payload.id);
        break;
      case 'phone':
        state.phones = state.phones.filter(el => el.id !== payload.id);
        break;
    }
  },
  updateShopItem(state, payload) {
    let index;
    switch (payload.type) {
      case 'laptop':
        index = state.laptops.findIndex(el => el.id === payload.id);
        state.laptops[index] = payload;
        break;
      case 'notebook':
        index = state.notebooks.findIndex(el => el.id === payload.id);
        state.notebooks[index] = payload;
        break;
      case 'pcComponent':
        index = state.pcComponents.findIndex(el => el.id === payload.id);
        state.pcComponents[index] = payload;
        break;
      case 'phone':
        index = state.phones.findIndex(el => el.id === payload.id);
        state.phones[index] = payload;
        break;
    }
  },
};

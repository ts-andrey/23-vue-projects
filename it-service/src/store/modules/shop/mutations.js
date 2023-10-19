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
};

/*--------------------------
  Format nav links
 --------------------------- */
export function getActiveNavLink(links, currentPath) {
  return links.map((link) => ({
    ...link,
    isActive: currentPath === link.to
  }));
}

/*--------------------------
  Format document from Firestore
 --------------------------- */
export function formatDocument(doc) {
  return {
    id: doc.id,
    ...doc.data()
  };
}

/*--------------------------
  Local storage helper function
 --------------------------- */
export function persist(type, key, value) {
  if (type === 'get') {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
  }
  if (type === 'set') {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }

  return false;
}

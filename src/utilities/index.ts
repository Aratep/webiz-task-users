export function generateUUID() {
  var dt = new Date().getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}


export function sortAsc(arr: any, field: any) {
  return arr.sort((a: any, b: any) => {
    if (a[field] > b[field]) {
      return -1;
    }
    if (a[field] < b[field]) {
      return 1;
    }
    return 0;
  });
}


export function sortDesc(arr: any, field: any) {
  return arr.sort((a: any, b: any) => {
    if (a[field] < b[field]) {
      return -1;
    }
    if (a[field] < b[field]) {
      return 1;
    }
    return 0;
  });
}

export function formatAdderss(address: any, length: number) {
  const formattedAddress = `${address.city}, ${address.street}, ${address.zipcode}, ${address.suite},`
  if (formattedAddress.length >= length) {
    return `${formattedAddress.slice(0, length)} ...`
  }
  return `${address.city}, ${address.street}, ${address.zipcode}, ${address.suite},`
}
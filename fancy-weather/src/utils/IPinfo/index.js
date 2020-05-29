async function IPinfo(link, token) {
  const response = await fetch(`${link}${token}`);
  return response.json();
}

export default IPinfo;
